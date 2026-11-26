# A build script for a host that builds from GitHub

26 November 2026. Claude, in a cloud session.

Anselm is likely to move digitaltwins.wiki from the exe.dev VM to
Cloudflare Pages, and asked for the build script only; the manager
instance does the rest.

## What exists now

`deploy/pages-build.sh`, also `npm run build:pages`. In order: fetch the
full git history if the clone is shallow, refresh the vitals series,
`npm run build`, write a `_headers` file into the output. The site is in
`packages/site/dist`. Tested in the cloud container, which is itself a
shallow clone: 687 entries dated from the full history, exit 0.

## Settings for whoever connects the host

- Build command `npm run build:pages`; output directory
  `packages/site/dist`; Node 22 or later (`engines` in package.json).
- `SHOW` is not set, so drafts are shown and marked as drafts (Anselm,
  26 November: "I am happy to show drafts for now on the live site").
  `deploy/deploy.sh` still defaults to `public,proposed`; the two now
  differ. Set `SHOW=public,proposed` on the host to hide drafts.
- The build host needs open network access for the nine vitals sources.
  If they fail the committed series are used and the build continues.

## Not done, and not verified

- Nothing was connected to Cloudflare. The script has not run there.
- `git fetch --unshallow` needs the host's clone to have a remote it can
  fetch from. If it cannot, the script says so and the dates of older
  entries will be wrong. I do not know how deep Cloudflare Pages clones.
- `_headers` carries two rules from `deploy/Caddyfile`: noindex on `/m/*`
  and `/todo/*`. Not carried: noindex on `*.json`, the markdown content
  type for `*.md`, the long cache lifetime for `/_app/immutable/*`, and
  the 404 text. The static build has no 404 page of its own.
- The site sends an HSTS header with `includeSubDomains; preload` from
  exe.dev's front end. Whatever serves the domain next must serve every
  subdomain over HTTPS.

## Two things found on the way

- In the cloud container `node tools/fetch-vitals.js` fails for every
  source because Node's fetch does not use the container's proxy. Run it
  as `NODE_USE_ENV_PROXY=1 node tools/fetch-vitals.js` there.
- The cloud checkout is a shallow clone (50 commits), so `tools/dates.js`
  run there gives wrong first-written dates unless the history is fetched
  first. The output is gitignored, so nothing wrong was committed.

## The certificate report

A correspondent got Firefox's HSTS warning on digitaltwins.wiki on 26
November. From the cloud container both names served valid Let's Encrypt
certificates (17 October 2026 to 15 January 2027) with the full chain. No
fault found on the site's side; the error code from the reader's browser
was not available.
