#!/usr/bin/env bash
# Check the corpus, build the site and rsync it to its exe.dev VM. This is a
# manual deploy: updating GitHub does not change the live site.
# SHOW picks which entries are shown. Staging shows proposed ones too.
# Usage: deploy/deploy.sh <vm-name>         (default vm: digitaltwin)
set -euo pipefail

VM="${1:-${VM:-digitaltwin}}"
HOST="$VM.exe.xyz"
DEST="exedev@$HOST"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
export SHOW="${SHOW:-public,proposed}"

SSH="ssh -o StrictHostKeyChecking=accept-new -o UserKnownHostsFile=/dev/null -o LogLevel=ERROR -o ServerAliveInterval=5 -o ServerAliveCountMax=3"

echo "› refreshing the vitals series from their sources"
( cd "$ROOT" && node tools/fetch-vitals.js ) || echo "  vitals refresh failed; previous series kept"

# Build from the last commit, not the working folder, so drafts still being
# written or checked (untracked or edited files) never reach the live site.
# The vitals series are refreshed into the working folder first and copied in.
BUILD="$(mktemp -d)"
trap 'rm -rf "$BUILD"' EXIT
git -C "$ROOT" archive HEAD | tar -x -C "$BUILD"
ln -s "$ROOT/node_modules" "$BUILD/node_modules"
( cd "$ROOT" && git ls-files --others --modified --exclude-standard -- data/vitals ) | while read -r f; do mkdir -p "$BUILD/$(dirname "$f")"; cp "$ROOT/$f" "$BUILD/$f"; done
DIRTY="$(cd "$ROOT" && git status --porcelain -- data | grep -v ' data/vitals/' || true)"
[ -n "$DIRTY" ] && printf '  not deployed (uncommitted):\n%s\n' "$DIRTY"

echo "› checking corpus and building site from HEAD (showing: $SHOW)"
( cd "$BUILD" && npm run -s build )

echo "› syncing packages/site/dist/ → $HOST:/srv/site"
rsync -ah --delete -e "$SSH" "$BUILD/packages/site/dist/" "$DEST:/srv/site/"

echo "✓ deployed → https://$HOST"
