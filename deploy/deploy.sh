#!/usr/bin/env bash
# Check the corpus, build the site and rsync it to its exe.dev VM. This is a
# manual deploy: updating GitHub does not change the live site.
# SHOW picks which entries are shown. Staging shows proposed ones too.
# Usage: deploy/deploy.sh <vm-name>         (default vm: twinguide)
set -euo pipefail

VM="${1:-${VM:-twinguide}}"
HOST="$VM.exe.xyz"
DEST="exedev@$HOST"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
export SHOW="${SHOW:-public,proposed}"

SSH="ssh -o StrictHostKeyChecking=accept-new -o UserKnownHostsFile=/dev/null -o LogLevel=ERROR -o ServerAliveInterval=5 -o ServerAliveCountMax=3"

echo "› refreshing the vitals series from their sources"
( cd "$ROOT" && node tools/fetch-vitals.js ) || echo "  vitals refresh failed; previous series kept"

echo "› checking corpus and building site (showing: $SHOW)"
( cd "$ROOT" && npm run -s build )

echo "› syncing packages/site/dist/ → $HOST:/srv/site"
rsync -ah --delete -e "$SSH" "$ROOT/packages/site/dist/" "$DEST:/srv/site/"

echo "✓ deployed → https://$HOST"
