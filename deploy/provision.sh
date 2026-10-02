#!/usr/bin/env bash
# One-time provisioning for the guide's VM on exe.dev. Idempotent — safe to
# re-run; it just (re)starts Caddy. Creating the VM and making it public are
# separate steps: ssh exe.dev new --name <vm>; ssh exe.dev share port <vm> 8000;
# ssh exe.dev share set-public <vm>.
# Usage: deploy/provision.sh <vm-name>      (default vm: twinguide)
set -euo pipefail

VM="${1:-${VM:-twinguide}}"
HOST="$VM.exe.xyz"
DEST="exedev@$HOST"                 # login user on exe.dev VMs is always 'exedev'
HERE="$(cd "$(dirname "$0")" && pwd)"
PORT="${PORT:-8000}"

SSH="ssh -o StrictHostKeyChecking=accept-new -o UserKnownHostsFile=/dev/null -o LogLevel=ERROR -o ServerAliveInterval=5 -o ServerAliveCountMax=3"

echo "› ensuring /srv on $HOST"
$SSH "$DEST" 'sudo mkdir -p /srv/site && sudo chown -R "$(id -un)":"$(id -gn)" /srv'

echo "› uploading Caddyfile"
rsync -e "$SSH" "$HERE/Caddyfile" "$DEST:/srv/Caddyfile"

echo "› enabling docker at boot + (re)starting Caddy on :$PORT"
$SSH "$DEST" "sudo systemctl enable --now docker >/dev/null 2>&1; \
  docker rm -f twinguide 2>/dev/null || true; \
  docker run -d --name twinguide --restart unless-stopped \
    -p $PORT:80 \
    -v /srv/site:/srv/site:ro \
    -v /srv/Caddyfile:/etc/caddy/Caddyfile:ro \
    caddy:2"

echo "✓ provisioned ($HOST). Then run deploy/deploy.sh $VM."
