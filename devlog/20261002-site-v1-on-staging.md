# 2026-10-02 — site v1 built and on staging

Point-in-time entry, sixteenth of the day. Written by Claude.

## Decisions from Anselm

- Try **digitaltwin.guide** as the domain "for now, see how it feels". He
  buys it. Not bought or pointed yet as far as I know.
- Build and test; deploy to exe.dev.

## What exists now

Staging: **https://twinguide.exe.xyz** (exe.dev VM `twinguide`, created
today, Caddy in Docker on port 8000, public, sends `X-Robots-Tag: noindex`).
Manual deploy: `deploy/deploy.sh twinguide`. Nothing is on GitHub; the repo
has never been pushed.

Milestone 1 (knowledge model), done in a first form:

- 64 morsels in `corpus/`, one file each, in eight kinds: catalogue 36,
  questions 10, playbook 9, stories 3, data 3, concepts 1, flows 1, about 1.
  All from the survey via `tools/migrate-survey.py`, except the playbook
  stubs and the flow, which are my proposals and say so in their headers.
- Bodies have `## Plain` and `## Detail`. Headers carry typed links from
  `schema/edges.json` (seven types; only `answers`, `tells` and `domain` are
  used so far, because those are the only links the survey states).
- `modules/corpus/`: loader, validator, the four functions (search, get,
  related, filter), a report. `npm run check` passes with no errors.
- Machine outputs in every build: `/llms.txt`, `/index.json`, `/graph.json`,
  each entry at `/m/<kind>/<id>.md`, one pack per question at
  `/pack/<id>.md`. Maps per domain are not built yet.

Milestone 3 (static site), done in a first form:

- SvelteKit with the static adapter, Svelte 5, prerendered to 31 pages.
  **Not using Tailwind**: the styles are the mockup's plain CSS with the
  survey's tokens. That departs from the house stack and is my shortcut.
- Home: three stories, a search box over the shown entries, the flow, the
  ten-domain key with counts, the questions, instrument cards, a "growing in
  the open" pointer, the machine door. The four "doors by situation" from
  the mockup are left out; with three questions they had nothing to narrow.
- A page per morsel, a page per domain, an in-development page listing the
  45 hidden titles. Flows are drawn from data by one component.
- Staging shows `proposed` as well as `public` (19 morsels). A production
  build would show only `public`, which is none yet.

## Checked

- Local build screenshotted: home on phone (light, dark) and desktop, an
  instrument page, a question page, a domain page, the flow page.
- Live site: nine URLs fetched (pages, llms.txt, markdown, pack, JSON, an
  icon) all 200 with the right content types; a hidden entry returns 404;
  the noindex header is present. Live home screenshotted in light and dark,
  live question page in light.
- After the last fix (question text shown twice on question pages) I
  redeployed and confirmed by fetching the page, not by screenshot.
- Not checked: the menu, search box and flow taps as interactions; any
  desktop view of the live site; a real phone.

## Honest gaps

- Of the facts shown on staging, 52 read "not yet reviewed". Every
  instrument card shows three of them. That is milestone 2 and it is the
  thing a visitor will notice first.
- The water seed has one water question and three water tools, none of them
  something an ordinary person can pick up. The free water tools still have
  to be found.
- Paired entries (Helsinki / Bologna and others) are not split.
- Wording of stories, the flow and the headline is machine draft.
- I ran `pkill -f` with a pattern that matched my own command line while
  stopping the local preview server. It killed only my own shell, after the
  work was done, but it is the mistake the house rule names.

## Next

Milestone 2 on the water seed: research cost, skill, try-it and who-uses-it
for the eight shown instruments from their own sites; find two or three free
water tools; split the pairs; draw the "where do I find data" flow.
From him: the domain, and facts for one river case.
