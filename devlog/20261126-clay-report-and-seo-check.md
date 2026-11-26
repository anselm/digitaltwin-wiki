# The Clay v1.5 report, and a check of how pages share and index

26 November 2026. Claude, in a cloud session.

## Clay v1.5 technical report

Anselm sent https://github.com/Clay-foundation/clay-v1.5-paper ("this
looked fascinating"). The repository was one commit, 371c5ea, dated 26
November 2026. Read from a clone: DRAFT.md in full apart from the
reference list, the README, CITATION.cff and NOTICE. Not read:
REPRODUCING.md, docs/FACT_SOURCES.md, the experiment folders. Nothing was
re-run.

- `articles/clay-v1-5-technical-report` (draft, tier 2) with the report's
  Figure 1 as its picture, CC BY 4.0, reduced to 1,400 pixels wide.
- `engines/clay`: a section on where the model is strong and weak, from
  the report; the release date (November 2024) and the relicensing (May
  2025) added. The entry had said "trained in September 2024 on 70 million
  image chips", from the release notes. The report says 72.1 million and
  describes training from August to November 2024. Both counts are now
  given with their sources; the September date is dropped.

The entry reports the authors' commercial interest in their own words and
says which results are from an independent leaderboard. The four lessons
are the report's; the wording is shortened.

Lead: `articles/earth-embeddings-compared` could take the report's
guidance on when to choose a single-date model over annual embeddings. Its
table already describes Clay correctly.

## How pages share and index (checked on the live site)

Present on every page checked (home, an article, an engine, a shelf): a
title of the form "Page · Digital Twins Wiki", a meta description, a
canonical address, Open Graph tags, Twitter large-image card tags, a
1200 by 630 card image that loads, one h1, `lang="en"`. robots.txt allows
everything and names the sitemap; the sitemap has 696 addresses with
last-modified dates. An address without its trailing slash redirects.

Absent:

- Structured data (JSON-LD) on any page.
- Citation tags (`citation_title`, `citation_author` and so on), which
  reference managers and Google Scholar read. For the wiki's own pages
  these would describe the wiki page, not the paper it is about.
- Published and modified dates in the page head, though the dates exist
  in dates.json.
- A `twitter:site` handle.

To look at:

- The home page's description is "Cities, infrastructure, populations and
  ecosystems", which says little in a search result.
- https://www.digitaltwins.wiki/ serves the site (200) and does not
  redirect to the bare domain. The canonical tag covers it for search
  engines.
- https://digitaltwins-wiki.pages.dev/ serves the same site with no
  noindex header. The canonical tag covers that too.
- Many entries have descriptions over about 200 characters, which cards
  and search results cut. `SHARE_REPORT=1 npm run share` lists them.
- Entries without a picture share as a text-only card.

Not checked: how X, LinkedIn or Slack actually render a link, and whether
Google has indexed the pages.

## Done the same day: the page head

Anselm: "we should have structured data, citation tags, published and
modified dates"; on the home description, "we are specifically focused on
digital twins of whole systems at the macro scale, predictive models,
simulations"; and "i just want to at least try to be correct - we don't
have to be fanatical about it."

All of it is in the one page template
(`packages/site/src/routes/[...path]/+page.svelte` and its
`+page.server.js`), so no entry was edited apart from the home page.

- **Dates.** `article:published_time` and `article:modified_time` on every
  page but the home page, from the same dates the page shows (the earlier
  of `provenance.created` and the first commit; the last commit).
- **Structured data** (schema.org JSON-LD). The home page is a `WebSite`.
  A shelf is a `CollectionPage`. Every other page is an `Article` with
  headline, description, card image, dates, keywords from its tags,
  publisher, and a `BreadcrumbList` back to the home page. Where the entry
  describes an outside paper or report (`article.url`), that work is given
  as the page's `citation` with its authors, date and publisher.
- **Citation tags** (`citation_title`, `citation_author`,
  `citation_publication_date`, `citation_online_date`,
  `citation_publisher`, `citation_public_url`). They describe the wiki
  page, never the paper it is about, so a reference manager cites the wiki
  as the wiki.
- **Authors.** People named in `provenance.by` or `provenance.author` are
  the authors, with names marked "(AI)" left out. A page written by a
  model alone is credited to the organisation "Digital Twins Wiki". This
  is a choice; schema.org has no accepted way to name a model as author.
- **Long descriptions.** The head now carries a shortened description:
  whole sentences up to 200 characters, or else cut at a word with an
  ellipsis. The page itself still shows the full description, and no entry
  needed rewriting. 123 entries were over 200. `tools/share.js` still
  reports them, and its note that search results cut them no longer holds.
- **Home page.** A new optional field, `about.summary`, is used in the
  head in place of the description when present. The home page keeps its
  short description, which the sidebar shows as the tagline, and gains a
  summary in Anselm's terms. The wording of the summary is Claude's.

Checked on a local build: the JSON-LD parses on all 698 pages and no head
description exceeds 205 characters. Not run through Google's Rich Results
Test or schema.org's validator.

Left as they are: the www address and the pages.dev address both serve
the site; the canonical tag names digitaltwins.wiki. No `twitter:site`
handle. Vitals series pages have no structured data.
