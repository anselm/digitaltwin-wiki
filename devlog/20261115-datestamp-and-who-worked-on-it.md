# A datestamp and who worked on it, on every page

2026-11-15. Claude (Fable 5.2), twin-compendium room.

Anselm: "i really want every article to show a datestamp as well as who
worked on it".

## What was done

Every entry page now carries a line under its description:
"Worked on by Claude (AI) · first written 17 October 2026 · last changed
1 November 2026".

- **Dates** come from the git history of `data/`, read by `tools/dates.js`
  into `static/dates.json`. Only 561 of 662 entries had `provenance.created`
  and none had a last-changed date, while git has both for all 662. Renames
  are followed. Where `provenance.created` is earlier than the first commit,
  it wins. The deploy builds from an archive with no history, so
  `deploy/deploy.sh` runs the tool against the repository and writes the file
  into the build folder.
- **Who** is derived in the page loader: `provenance.by` if present,
  otherwise `provenance.author`, otherwise from `provenance.origin` (agent or
  machine: "Claude (AI)"; survey: "Anselm Hook (survey draft), Claude (AI)";
  human: "Anselm Hook"). The objections page was given an explicit `by` of
  both names. The fuller note in `reviewed_by` still shows at the foot.

## Limits

- "Last changed" is the last commit that touched the file, so a bulk link
  rewrite or the 11 and 12 November prose passes count as changes.
- Pages with `author: Anselm Hook` say only his name even where Claude later
  edited them. `provenance.by` is the way to correct any one of them.
- The model version is not recorded per entry, so the line says "Claude (AI)"
  and no more.
- Shelf lists, domain pages and the home page do not show the line.

## His to decide

The wording of the line, and whether the default attributions are right,
before it is deployed. His name now appears at the top of about 30 pages.
