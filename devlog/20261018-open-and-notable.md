# Open, notable, and arranged: the second round of 2026-10-18

Anselm's notes after the first round went live, with what was done. The
review that set up the first round is `20261018-review.md`.

## What he said

1. Bay Layers is not good enough to be cited as the example twin; there
   must be famous twins, including attempts to model island ecosystems and
   coral reefs. "Digital twins" as a section title lacks bite.
2. Strong emphasis on open source, open data, accessible or at least an
   API. Many notable twins are not open; tag clearly what is reusable, what
   has an API, what is closed. This is why he runs opencubed.org.
3. "Questions" is useful but should not come first and might be "use
   cases". LLMs write titles as slam dunks; be humble. Patrons with a use
   case want guides, typically with a visual decision tree.
4. Break the sidebar into areas: new, theory, technologies, resources;
   most of the collections are appendices.
5. Rename the repo to digitaltwin-wiki; rename the VM to digitaltwin;
   mine the archived first effort and the two chatgpt.site pages; add a
   global todo.md cited from the README; the Digital Twin Hub as an
   example of a closed organization; "many people define digital twin in
   different ways", linking Esri.

## What was done

**Openness is a component.** `open` on any entity, after the three Open³
axes from opencubed.org plus one: `source`, `data`, `participation` (open,
partly, closed, unknown), `api` (yes, no, unknown), `licence`, `note`.
Cards show what is known to be open or closed; the entry page shows every
axis under "What is reusable". An agent set it on all 77 engines, 3 twins
and 17 data sources from the entries' own text only (so an entry that
never mentions a licence reads `unknown`), and the twin and tool entries
written today carry it from pages read. Counts for engines: source open
26, partly 12, closed 25, unknown 16. The agent's rules are in its report
in the session, the main ones being: hosted-with-login or commercial means
closed; non-commercial licences mean partly; participation is open only
when the text names contributions, issues or a community.

**Notable twins.** Eleven written from their own pages: NSW Spatial
Digital Twin, 3D Rotterdam, Zürich 3D city model, Boston 3D Smart Model,
3D Amsterdam, Tees Valley traffic twin, eReefs (Great Barrier Reef),
EDITO (European Digital Twin of the Ocean), Iliad, Moorea IDEA, Chesapeake
CAST. Skipped for lack of a fetchable or honest page: Wellington (403),
Dublin Docklands (no twin on its pages), Herrenberg (nothing on HLRS's
site), Chattanooga (a sensor testbed, not a model), Tuvalu (site down),
Allen Coral Atlas and Digital Earth Australia (data platforms by their own
description). Section renamed "Notable twins"; the London photogrammetry
image from the survey sits at its head with credit.

**Sidebar in areas.** `section.area` on each section; the layout groups
by New (Recent), Practice (Guides, Use cases, Notable twins),
Technologies (Engines, Data), Theory (Books, Articles, Terminology),
Resources (Events, Organizations, Vitals, About). Questions renamed "Use
cases", moved after Guides, with an intro that points to the decision
tree (`flows/so-you-want-a-digital-twin`), as does the Guides intro. Four
guide blurbs lost their aphoristic second sentences.

**The survey mined.** `archive/v1/seed/survey-site/` now holds the
chatgpt.site survey page, its deck and visual-language pages, the five
diagrams and six credited images, so it can be deleted. The diagrams and
images are placed: SUMO, PyPSA-Eur and En-ROADS screenshots on their
entries (converted to folder entries), the coupling diagram on the flooded
substation story, the transport stack on the closure use case, the
landscape diagram and the Czech crop map on land-use change, the
applications table on the Use cases page, London on Notable twins. All
with the credits the survey carried. The survey's five sensory tools
(Walk Score, CadnaA, Radiance, GRAL, Circuitscape) and the Tees Valley twin
were the only things in it the wiki lacked; all are entries now. The
guide site (digital-twins-guide.anselm52491.chatgpt.site) needs a ChatGPT
login and could not be read; that is on the todo for Anselm.

**Names.** GitHub repo renamed to `anselm/digitaltwin-wiki` (the old name
redirects; remote repointed; project.toml, CLAUDE.md, README and the
footer updated; the local folder stays `twin-compendium`). exe.dev VM
renamed `twinguide` → `digitaltwin` with `ssh exe.dev rename`; the domain
binding moved with it and `bin/exe-domain` was rerun.

**Also.** Digital Twin Hub as an organization (Connected Places Catapult;
most of it behind sign-up). The digital-twin term entry gained a paragraph
on how definitions differ, citing the UK government and Esri. `todo.md`
at the root, cited from the README.

## Open

- Chrome: site name, home text; his.
- Whether the four empty bylined articles get written from the survey's
  appendices; his.
- The openness sweep's judgement calls listed above may want flipping.
