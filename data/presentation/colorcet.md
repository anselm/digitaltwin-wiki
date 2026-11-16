---
about:
  label: 'Colorcet: perceptually uniform colour maps'
  depiction: presentation/colorcet.jpg
  depiction_credit: 'Peter Kovesi, colorcet.com, CC BY 4.0: a striped test pattern drawn with two common colour maps (top) and with perceptually uniform ones (bottom).'
  description: >-
    Peter Kovesi's free set of colour maps in which equal steps in the data
    look like equal steps in colour, so the colours neither hide features
    nor invent them.
  tags:
    - colour map
    - visualisation
    - perception
    - colour blindness
    - relief shading
    - cartography
tool:
  form: colour maps as downloadable tables, and a Python package
  group: Thematic maps and globes
  homepage: 'https://colorcet.com/'
  licence: CC BY 4.0
  cost: free
open:
  source: open
  data: open
  api: unknown
  participation: unknown
  licence: CC BY 4.0
domains:
  - places
provenance:
  origin: agent
  sources:
    - title: 'CET Perceptually Uniform Colour Maps (colorcet.com, Peter Kovesi)'
      url: 'https://colorcet.com/'
    - title: 'Colour map gallery (colorcet.com)'
      url: 'https://colorcet.com/gallery.html'
    - title: 'What colour maps do I use? (colorcet.com user guide)'
      url: 'https://colorcet.com/userguide/index.html'
    - title: 'Download (colorcet.com)'
      url: 'https://colorcet.com/download/index.html'
    - title: 'Good Colour Maps: How to Design Them (Peter Kovesi, arXiv:1509.03700, 2015; abstract only)'
      url: 'https://arxiv.org/abs/1509.03700'
    - title: 'colorcet: collection of perceptually accurate colormaps (HoloViz, Python package)'
      url: 'https://colorcet.holoviz.org/'
  created: '2026-11-16'
  reviewed: '2026-11-16'
  reviewed_by: 'Claude, from the sources listed. Anselm sent the gallery link, calling it a detail of presentation but an important one.'
  status: draft
---
A colour map turns each number in a data set into a colour: the scale beside a map of temperature, flood depth or elevation. Colorcet is a collection of colour maps made by Peter Kovesi so that a given change in the data produces the same visible change in colour anywhere along the scale.[^1] The maps and the method are free to use with credit.[^4]

The reason it matters is that many of the colour maps supplied with software do not have that property. Kovesi's site says such maps "may have sections of low perceptual contrast that prevent you from seeing significant features in your data" and points of high contrast "leading to the perception of false anomalies".[^1] His paper puts a size on the first problem: flat spots "can hide a feature as large as one tenth of the total data range".[^5] The site shows the same aeromagnetic survey of the Yilgarn region of Western Australia drawn twice. With the default map of a widely used geophysics package there is a large dead zone at green, a smaller one at red, and false features at cyan and yellow, none of which appear with a uniform map.[^1] For a model of a place the consequence is direct. A reader of a flood or heat map sees edges where the colours change fastest, and if those edges come from the colour map, the reader has been shown something the model did not say.

## What is in the collection

The maps are grouped by the kind of data they suit.[^1,2]

- **Linear**, also called sequential, for general use: lightness rises or falls steadily along the scale.
- **Diverging**, for data with a meaningful middle value, such as change from a baseline.
- **Cyclic**, whose two ends match, for data such as direction or phase.
- **Isoluminant**, of constant lightness, meant to be laid over relief shading so that the shading carries the shape of the terrain.
- **Colour blind**, built for readers with colour vision deficiency.
- **Rainbow**, which Kovesi includes and advises against.

On rainbow maps the user guide is blunt: "Please avoid using rainbow colour maps".[^3] Their lightness reverses at yellow and red, which creates dead spots and false edges, and they have no consistent order, since people read yellow as more than red in a heat map and as less in a rainbow.[^3] Kovesi calls the ones he offers "the 'least worst' rainbow colour maps I can generate" and allows that they may have a use where the aim is to tell values apart, not to show their order.[^3] The maps are for data that varies continuously, and the site refers readers elsewhere for categorical data.[^1]

The site provides a test image, a sine wave laid over a ramp, for checking any colour map: the ripples should stay equally visible from one end to the other.[^1] The picture above shows that test.

## Using it

The download page offers the maps in about thirty formats for different packages, ArcGIS and COMSOL among them.[^4] A Python package of the same name, maintained by the HoloViz project, supplies them as 256-colour maps for Python plotting libraries and adds categorical sets made by a different method.[^6] That package illustrates the problem with two maps that ship with the matplotlib library, "hot" and "jet", in which long stretches of the scale look alike.[^6]

The wiki's [Presentation](/presentation/) shelf lists the viewers a model is shown in. Whichever one is used, the colour map is a choice made inside it, and the default is often not a good one.
