#!/usr/bin/env bash
# Build the site on a static host that builds from GitHub (written for Cloudflare Pages).
# It does what deploy/deploy.sh does before its rsync: fetch the full git history, refresh the
# vitals series, check the corpus and build. The site is left in packages/site/dist.
# Drafts are shown, marked as drafts (Anselm, 2026-11-26). Set SHOW=public,proposed on the host to hide them.
# Usage: deploy/pages-build.sh        (or: npm run build:pages)
set -euo pipefail
cd "$(dirname "$0")/.."

# tools/dates.js reads each entry's first and last date from the git log. Build hosts often clone
# only the latest commits, which would date every older entry to the oldest commit fetched.
if [ "$(git rev-parse --is-shallow-repository 2>/dev/null || echo false)" = "true" ]; then
  echo "› shallow clone: fetching the full history for the entry dates"
  git fetch --unshallow --quiet || echo "  could not fetch the full history; entry dates will be wrong for older entries"
fi

echo "› refreshing the vitals series from their sources"
node tools/fetch-vitals.js || echo "  vitals refresh failed; the committed series are used"

echo "› checking corpus and building site (showing: ${SHOW:-draft,proposed,public})"
npm run -s build

# Two of the rules in deploy/Caddyfile, in the form Cloudflare Pages reads: keep the machine copies
# and the to-do page out of search. The Caddyfile's other rules (noindex on *.json, the markdown
# content type, cache lifetime for /_app/immutable) are not carried over here.
cat > packages/site/dist/_headers <<'H'
/m/*
  X-Robots-Tag: noindex
/todo/*
  X-Robots-Tag: noindex
H

echo "✓ built → packages/site/dist ($(git rev-parse --short HEAD))"
