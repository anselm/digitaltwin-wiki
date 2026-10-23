---
about:
  label: "How much shade and cooling do the trees on this street give?"
  description: >-
    How much tree canopy covers one street or block, how much it cools the
    air on a summer day, and what planting or losing trees would change for
    its residents.
  tags:
    - street trees
    - tree canopy
    - shade
    - urban heat
    - cooling
everyday:
  asked_by:
    - residents
    - city foresters
    - home buyers
    - neighbourhood tree groups
  answered_by:
    - city forestry departments
    - arborists and tree inventory firms
    - free tree benefit calculators
    - neighbourhood scores sold to cities
domains:
  - climate
  - ecology
  - people
  - places
relations:
  - predicate: needs
    target: data-sources/high-resolution-canopy-height
  - predicate: needs
    target: data-sources/cornell-nyc-individual-tree-map
  - predicate: needs
    target: engines/cool-cities-lab
provenance:
  origin: agent
  sources:
    - title: 'i-Tree Tools (USDA Forest Service and partners)'
      url: 'https://www.itreetools.org/'
    - title: 'i-Tree Suite of Tools'
      url: 'https://www.itreetools.org/tools'
    - title: 'i-Tree Eco'
      url: 'https://www.itreetools.org/tools/i-tree-eco'
    - title: 'i-Tree Funding Status'
      url: 'https://www.itreetools.org/usda-fs-funding-lapse'
    - title: 'Tree Equity Score: Methods & Data (American Forests)'
      url: 'https://www.treeequityscore.org/methodology'
    - title: 'Tree Canopy Cover Datasets (USDA Forest Service FSGeodata Clearinghouse)'
      url: 'https://data.fs.usda.gov/geodata/rastergateway/treecanopycover/'
    - title: 'Environmental Insights Explorer (Google)'
      url: 'https://insights.sustainability.google/labs/treecanopy'
    - title: 'Scale-dependent interactions between tree canopy cover and impervious surfaces reduce daytime urban heat during summer (Ziter, Pedersen, Kucharik and Turner, PNAS, 2019; abstract via OpenAlex)'
      url: 'https://api.openalex.org/works/doi:10.1073/pnas.1817561116'
    - title: 'TreePlotter Software Suite (PlanIT Geo)'
      url: 'https://planitgeo.com/treeplotter/'
    - title: 'NatureScore and TreePlotter (PlanIT Geo)'
      url: 'https://planitgeo.com/naturescore-and-treeplotter/'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
On a hot afternoon one street can be cooler than the next, and trees are a large part of the difference. Someone asking about their own street wants to know how much of it is shaded, how much that cools the air where they walk and sleep, and what would change if trees were planted or cut down. The answer turns on how much canopy there is, how it is spread across the block, how much pavement and roof sits around it, and who lives underneath.

## Who asks, and who they ask today

Residents ask when a street feels hot or a tree is about to be removed. City foresters ask it of every block when they decide where to plant. People buying a house ask it while choosing between streets. Today residents ask the city's forestry department or an arborist, city foresters use tree inventories and canopy maps, and buyers look at the street themselves.

## What answers it

**How much canopy.** The USDA Forest Service publishes Tree Canopy Cover maps at 30 metres for the conterminous United States, coastal Alaska, Hawaii, Puerto Rico and the US Virgin Islands, for every year from 1985 to 2025, from Landsat and Sentinel-2. They are made in two versions: a Science product with a standard error on every pixel, and an NLCD version cleaned for mapping. Thirty metres is coarser than a single street tree, so finer maps help. Meta and the World Resources Institute's [High Resolution Canopy Height Maps](/data-sources/high-resolution-canopy-height/) give tree heights from half-metre imagery. Google's Environmental Insights Explorer estimates canopy across city regions from aerial imagery with machine learning. Some cities have tree-by-tree maps, such as the [NYC Tree Genus Map](/data-sources/cornell-nyc-individual-tree-map/).

**What the trees do.** The USDA Forest Service's i-Tree tools are free. Since 2006 they have been run as a partnership with the Davey Tree Expert Company, the Arbor Day Foundation, American Forests and others. Until December 2025 they were funded mainly by the Forest Service and Davey in equal shares. MyTree and i-Tree Design assess single trees, and Design adds building interactions and forecasts. i-Tree Eco, a Windows program, takes field data from single trees, full inventories or sample plots, with local hourly weather and air pollution. From these it estimates pollution removal, carbon, avoided runoff, effects on building energy, and UV. i-Tree Canopy estimates land cover by random points on aerial imagery, and i-Tree Landscape joins canopy with census maps to find planting priorities. In December 2025 i-Tree said a new Forest Service IT policy had halted the cooperative agreement with Davey that paid for i-Tree. In May 2026 it reported one-time funding from CAL FIRE and the Forest Service's International Programs and Trade team for outreach and user support, while hosting and maintenance funding was still lapsed. It has promised at least six months' warning before any core tool goes offline.

**How much cooler.** Ziter and colleagues (PNAS, 2019) carried air temperature sensors on bicycles along ten transects in a midsized Upper Midwest city. Daytime air temperature across the city varied by 3.5°C on average. It fell nonlinearly as canopy rose, with the greatest cooling once canopy passed 40 percent, and the effect was strongest at the size of a typical city block, 60 to 90 metres. At night trees did little, and pavement mattered more. The [Cool Cities Lab](/engines/cool-cities-lab/) from the World Resources Institute estimates how much street trees, cool roofs or shade structures would lower air temperature and heat stress in a neighbourhood.

**Who lives underneath.** American Forests' Tree Equity Score covers every urban census block group in the United States. Each block group gets a canopy goal from its biome (40 percent for forest, 20 for grassland and Mediterranean, 15 for desert), adjusted for building density. Existing canopy comes mostly from Google's high-resolution canopy data, or local maps in cities with their own analyzers. The gap between goal and canopy is weighted by a priority index of seven equal parts. Five come from the census: income, employment, race, age and language. One is a health burden index from CDC PLACES. The last is how much hotter the block group's summer surface is than its urban area, from 2022 Landsat 8 scenes. The score runs from 0 to 100, and 100 means the block group meets its goal. Its benefit estimates use i-Tree multipliers and assume 600 square feet of canopy per urban tree.

## Who sells an answer

PlanIT Geo sells TreePlotter, tree inventory and canopy software it says is used by governments, private businesses and nonprofits, and offers inventory and consulting services. With NatureQuant it sells NatureScore, which it describes as a 0 to 100 score of the health effects of the green and blue space around a location, built by machine learning from 30 data sources, available for any US location. Its listed starting prices for NatureScore data alone run from $2,000 a year for a place of under 50,000 people to $7,000 a year for one over 250,000, and more when bundled with TreePlotter.

## What a small look ahead adds

A canopy map shows the trees that stand today. A model of the street can grow them: young trees widen over decades, old ones decline, and a planned removal or a new row of plantings changes the shade years before it shows on a map. It can set that shade against projected summer heat and show which hours and which side of the street gain most. It can weigh trees against pavement too, since the Ziter study found pavement drove night heat. i-Tree Design already forecasts the benefits of a single tree. Run block by block, the same idea lets a resident or a forester compare plans.

## Layers it shares

Canopy and tree heights, building footprints and heights, surface heat and climate projections, which the garden, heat, solar and flood questions also need.
