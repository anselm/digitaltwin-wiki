# 2026-10-02 — the survey is the design canon

Point-in-time entry, eleventh of the day. Written by Claude.

## Correction from Anselm

He made many small, careful decisions in the survey: the major topic areas,
colour coding, iconography. My first mockup ignored them. I invented a blue
palette, dropped the symbols and domain colours, and renamed his topics
("Senses", "Deciding together", "Movement"). That was wrong; those were
decisions, not defaults.

He also says the survey is unpublished and is fuel for this project. So its
text, structure, diagrams and vocabulary are ours to build from directly.

## What the survey decided (now recorded in `schema/domains.json`)

- **Ten domains, in this order, with these names:** Cities & places;
  Movement & logistics; Energy; Water; Food & land; Living systems; Weather
  & climate; People & society; Fire; Sensory landscape.
- **One concrete symbol per domain** (city blocks, rail junction,
  transmission tower, river, cultivated landscape, habitat, atmosphere,
  people at a table, flame, senses), each with considered alternatives and a
  credit. Noun Project, CC BY 3.0, recoloured. Copied to `media/themes/`.
- **One pastel per domain**, carried through rules and relationships, with
  labels kept dark and the word always shown beside the colour.
- **Symbol sizes:** 48 to 72px beside text, 80 to 96px in diagrams.
- **Whole systems are drawn as relationships among the symbols**, with
  labelled arrows that carry no quantities.
- **Page palette and type:** deep teal-ink on near-white paper, one teal
  accent, Georgia for display at regular weight, system sans for text.
- **Editorial habits:** every image credited and licensed; captions say what
  the image shows and its date; diagrams state what they do not claim
  ("arrows identify relationships, not measured flows"); application rows
  pair a use with a concrete question; sources numbered and dated; operating
  systems distinguished from demonstrators and proposals.
- **Structure:** a short article, then appendices that go deeper (directory,
  walk-through, capabilities, names, research, stewardship stack, sensory
  landscapes). Plain surface, rigour beneath, already.

## Changes made

- `schema/domains.json`: the vocabulary, rules, palette and credits.
- `media/themes/*.svg`: his ten symbols as served by the survey site.
- `mock/home.html` restyled to his palette and type; domain names restored;
  symbols and colours used on stories, question rows and cards; his ten-symbol
  key added above the questions as a filter. Dark theme values are mine,
  derived from his light palette; he has not designed a dark theme.
  Screenshotted in both themes at phone width (top two thirds of the page).
  Icon credits added at the foot.

## Still not carried over from the survey

The photographs and their credits, the two diagrams (failure propagation,
landscape as several systems), the transport-twin flow diagram, the
conference deck at `/talk/`, and the downloadable diagram and image kits.
I have not opened the deck or the kits.

## Rule from here

Before designing anything, check whether the survey already decided it.
Where it did, use it unchanged and say so. Where I add something he has not
decided (dark theme, door mapping, playbook stages), label it as mine.
