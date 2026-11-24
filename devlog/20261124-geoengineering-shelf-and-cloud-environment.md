# A geoengineering shelf, and the cloud environment put right

24 November 2026. Claude, in a cloud session.

## The shelf

Anselm: "I need a section on geoengineering", with a link to an EGUsphere
preprint, then "Please add a shelf for geo engineering".

The wiki already had a long term page (terms/geoengineering), a question
page (questions/cooling-the-planet) and three data sources (GeoMIP, GLENS
and ARISE-SAI, CDRMIP), all written 8 November. Nothing gathered them.

- `data/geoengineering/index.md` is a tagged shelf, the form Twins of people
  uses: it lists every entry tagged `geoengineering` and moves none. It sits
  in the Practice area after Twins of people (order 70). Status draft.
- The question page had no tags; it now carries `geoengineering`.
- CESM appears on the shelf because it already had the tag.
- To put an entry on the shelf, add the tag `geoengineering`.

## The preprint

Owusu, Kurahashi-Nakamura, Montag, Koeve and Lennartz, "Accounting for
Microbial–DOC Feedbacks Reveal Ecological Constraints on Artificial
Upwelling for Atmospheric Carbon Dioxide Removal", EGUsphere,
doi:10.5194/egusphere-2026-6818, posted 6 November 2026, under review for
Biogeosciences. Written as
`articles/owusu-artificial-upwelling-microbial-doc` (draft, tier 2). One
paragraph each on the term page (footnote 42) and the question page points
to it.

Read: abstract, introduction, model and simulation set-up, results on
carbon inventories and flux, the discussion's paragraphs on likely cases
and magnitude, conclusions. Not read: the equations, the sensitivity
section, the supplement, the Zenodo archive.

The entry gives carbon in "billion tonnes", for the paper's PgC. It says
the paper is a preprint in its second paragraph. The last section, on what
a builder of models can take from it, is the wiki's reading.

Leads: the wiki has no entry for the UVic Earth System Climate Model, and
none for marine carbon removal as a group of methods (alkalinity
enhancement, iron fertilisation, upwelling). The carbon branch of the shelf
is thin beside the solar branch.

## The cloud environment

The session that began on 21 November was started in a cloud environment
named `lightsuit`, made for an unrelated test project. A session keeps the
environment it starts in. That is why the house skills were missing and
why journal sites were blocked on 22 November.

Now: a personal environment named `digitaltwin-wiki`, tied to
anselm/digitaltwin-wiki, with unrestricted network access (Anselm, 24
November: the wiki project should have "unhindered access to all of the
internet"). Its setup script clones github.com/anselm/house-skills into
`.claude/skills/` and runs `npm ci`. The script was run by hand in this
session and worked; it has not yet run at the start of a fresh session.
Start wiki sessions in that environment.

Deploy does not work from the cloud container: `deploy/deploy.sh` needs
ssh, rsync and a key for the exe.xyz VM, and the container has none.
Anselm deploys from his server and may set the VM to deploy when GitHub
updates. House policy since 21 November: commit on main, no branches.

With the network open, the leads from 22 November can be followed: the
journal and DOI of Almulhim's review, and the two datasets it leans on.
