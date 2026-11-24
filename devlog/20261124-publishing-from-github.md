# Publishing from GitHub, so a push is a deploy

24 November 2026. Claude (Fable 5.1), the manager session on canada1, at Anselm's
request: "the remaining question is how do I get changes to the digital twins
GitHub to go live. The Claude code cloud session cannot do this due to some issue
with ssh."

## What was true this morning

The site is static (SvelteKit, adapter-static, 3,734 files, 138 MB) served by
Caddy on the exe.dev VM `digitaltwin`, with digitaltwins.wiki, Anselm's own
Cloudflare zone, pointing at it. `deploy/deploy.sh` builds and rsyncs over ssh,
so only a machine holding an exe.dev key can deploy: canada1 or the Mac. The
room now lives in a Claude cloud session, which can push to GitHub and nothing
else. The live site was two commits behind (22 and 24 November) when this began;
the manager deployed those by hand from a fresh clone, under the standing leave
of 22 October, and the Almulhim entry and the geoengineering shelf are live.

Two findings from doing that from a clean clone:

- The live site has always been built with `SHOW=draft,proposed,public` (685
  entities live, drafts marked), not the `public,proposed` that `deploy.sh`
  defaults to. With `public,proposed` the build fails: the home links to
  `/todo/`, whose entity is a draft, and prerendering treats the 404 as fatal.
  The workflow below builds with the setting the live site actually uses.
- `tools/dates.js` needs the full git history of `data/`, so any builder must
  clone with full depth. Three of the vitals sources returned 403 or failed
  today; the committed series stand in, as the script intends.

## The pipeline

`.github/workflows/publish.yml` runs on every push to main (and by hand):
checkout with full history, Node 22, `npm ci`, refresh vitals, build, add
`deploy/pages/_headers` and `deploy/pages/404.html` (the Caddyfile's rules,
restated for Pages), then `wrangler pages deploy` to the Cloudflare Pages
project `digitaltwins-wiki`. The repo is public, so the minutes are free.

Why Pages and not the VM: the VM's ssh keys are a root-owned file managed by
exe.dev (`/exe.dev/etc/ssh/authorized_keys`) that lists Anselm's account keys,
so a deploy key for GitHub would have to be an account key with reach into
every VM, or a hack on a managed file. Pages needs one API token scoped to
Pages, no ssh anywhere, serves from Cloudflare's edge, and the domain is
already in the same Cloudflare account. The paused portfolio question of moving
the other static sites off exe.dev (harness devlog, 21 November) gets its first
worked example here.

## What remains, in order

1. Anselm creates a Cloudflare API token (Account, Cloudflare Pages, Edit) and
   the manager sets it as the repo secret `CLOUDFLARE_API_TOKEN`. canada1's old
   wrangler login expired on 25 September and cannot refresh.
2. First run of the workflow creates the project at digitaltwins-wiki.pages.dev;
   check it by eye, including the headers (`/m/*.md` as text/markdown, noindex on
   the machine copies, the 404 text).
3. Move the DNS: digitaltwins.wiki becomes a proxied CNAME to the Pages project
   and the custom domain is attached to the project. The VM stays a week as a
   fallback, then stops.
4. `deploy/deploy.sh` and the Caddyfile remain for the VM until then.
