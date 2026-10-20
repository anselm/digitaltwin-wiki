# Primary forests, Destination Earth, and the first two contributors (2026-10-20)

Two things arrived the same afternoon and were handled with the
read-then-refute pattern from `20261019-reading-list.md`: one agent writes
an entry from pages it actually read, a second agent tries to knock every
claim down against the same pages.

## Forests 2030

Anselm saw Cyril Kormos (Wild Heritage) post a report, *Forests 2030:
Protecting & restoring ecosystem integrity*, as a LinkedIn document on
the eve of the biodiversity COP in Yerevan, and asked whether it belongs
here. The report is not on wild-heritage.org, primaryforest.org or
primaryforestsandclimate.org (their feeds stop in mid 2025), and LinkedIn
is behind a login, so the search went through the maker's own sites first
and found the neighbours instead: the Primary Forests & Climate Program
at Griffith University, the US forest maturity map at matureforests.org,
the FAO discussion paper on primary forest definitions, and a Columbia
Insight piece on why the Forest Service inventory cannot find a stand of
old growth. Anselm then found LinkedIn's raw document URL; it is a signed
link that expires within days. The PDF was read in full and the entry
written by hand from it, the cover rendered as its picture, and a
refuter sent through it.

Where it goes, decided today: a report is a resource, not news. It sits on
the Articles shelf like the state of the climate report and the ontology
papers, the ecosystem integrity term points at it as its main source, and
Recent shows it because Recent is a query. No post. No embed, because the
only URL is temporary; the entry should switch to Wild Heritage's own URL
when the report has a home. Todo carries that.

Entries from this thread, all drafts:

- `terms/ecosystem-integrity`: the idea that carbon and species benefits
  coincide in a forest with high integrity, so they are one issue.
- `articles/forests-2030`: the report itself.
- `data-sources/us-forest-maturity-map`: matureforests.org, the
  DellaSala, Mackey and colleagues map of forest maturity in ten classes
  for the lower 48, with a raster download.
- `articles/primary-forest-definitions-data-methods`: Mackey, Skinner and
  Norman's 2021 review of definitions, datasets and methods for the FAO.
- `articles/why-no-one-knows-old-growth`: Columbia Insight, April 2024,
  on the coarse federal inventory; a question for a model of a forest.

Dropped: forestregimemap.net (forest stability maps for Siberia, the USA
and the Amazon) was unreachable from here; CityNexus on the DestinE
platform is a login shell with no public text. PRIMA, the mapping app the
post promises, has no page yet.

## Destination Earth, by way of Mike Liebhold

Mike Liebhold (Institute for the Future) sent Anselm a nineteen-page
synthesis titled *Destination Earth (DestinE): Technical Architecture,
Spatial Simulation Systems, and Programmatic Synthesis*, printed to PDF
today from a browser, with a bibliography of about forty primary pages.
The synthesis itself is not a source for the wiki: it is secondary, has
no public URL, and reads like a research-assistant output. Its
bibliography is the useful part. The entries below were written from the
primary pages it pointed to, not from the synthesis:

- `engines/destination-earth`: refreshed from ECMWF's own pages on the
  Digital Twin Engine, the Climate Change Adaptation twin, the
  Weather-Induced Extremes twin, the 2025 review, and ESA's platform.
- `twins/urbanair`: the Horizon Europe project downscaling DestinE
  output to street scale for Antwerp, Barcelona, Paris, Bristol and
  Rotterdam. The synthesis said KNMI coordinates it; the project's own
  partners page says Delft University of Technology, and the refuter
  caught it. That is the reason the synthesis is not a source.
- `engines/biodt`: the Biodiversity Digital Twin project and its ten
  prototype twins, eight of them open as early-access web apps.
- `engines/dt-geo`: the Digital Twin for Geophysical Extremes.

The DestinE refresh found that none of ECMWF's or ESA's pages name
UrbanAIR, TerraDT, BioDT or DT-GEO, so the DestinE entry does not claim
them; each project entry cites DestinE from its own pages instead.

The Forests 2030 PDF is kept in the repo beside its entry
(`data/articles/forests-2030.pdf`, 6 MB) because the only public copy is
LinkedIn's signed link, which expires; `article.url` points at the local
copy until the authors give it a home. The refuter found the report
contradicts itself on one figure (two billion hectares lost "since 1950"
in the text, one billion before and one after 1950 in the infographic);
the entry follows the infographic.

Also today, in the inbox and not on the site: Google's announcement of
carbon offtakes from Working Trees' silvopasture in Brazil. Fuel for the
land-use-change use case, by yesterday's rule.

## Contributors

Mike Liebhold agreed to be a contributor and is listed on
`about/contributors` with his IFTF page. Anselm asked that Claude be
listed too; it is, with a line saying every draft it writes is marked in
the entry's provenance and stays a draft until he reads it. The page's
rule now reads: names are added only with the consent of the people
named, relayed by the maintainer.

## Organizations as a landscape (Anselm's question, 2026-10-20)

Anselm: there are a lot of organizations, only nine entries, could they
be painted better, as a map, some larger. The count today: 103 tools, 25
data sources and 16 twins point at 122 distinct maker sites, and the
`made_by` predicate in `predicates.json` has never been used. A
geographic map would need locations we do not have and would be the same
map again. The shape that fits the data is a landscape: one tile per
maker, sized by the entries it stands behind, grouped by its form
(agency, university, company, NGO, open-source community), coloured by
domain, with the maker's own mark from `tools/fetch-depictions.js`. It
needs organization entries for the makers (the recurring ones first:
ECMWF, ESA, Esri, Deltares, USGS, Google, Microsoft) and a `made_by`
relation on each entry, written at the same time. His call; the todo
carries it.

## Next

- Anselm reads the nine drafts and promotes or sends back.
- When Wild Heritage publishes Forests 2030, replace the LinkedIn URL.
- forestregimemap.net: retry; if it answers, a data source entry.
- The Rogers and colleagues 2022 paper in Frontiers in Forests and Global
  Change is the scientific root of the integrity argument and could be
  its own article entry.

## Later the same day: the report has a home

Anselm found it: the Primary Forests & Climate Program published the
report on 21 October 2026 at
primaryforestsandclimate.org/publications/forests-2030-protecting-restoring-ecosystem-integrity/,
with the PDF beside it. The hosted PDF differs from the LinkedIn copy in
bytes but not in a single word (pdftotext of both, 7,684 words, no
diff), so the entry stands as written. The entry's url now points at
their page, the sources list the page and the PDF, and our copy of the
PDF is out of the repo: the reason for keeping it was the expiring link,
and that reason is gone. The cover picture stays, rendered from the PDF.
