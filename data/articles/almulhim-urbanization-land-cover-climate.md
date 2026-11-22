---
about:
  label: 'Urbanization, land cover change and climate impacts: a review'
  description: >-
    A 2026 review by Abdulaziz Almulhim of 116 studies treats a growing city,
    the land it converts and the heat and flooding that follow as one loop,
    and asks what planning does to it.
  tags:
    - urban growth
    - land cover
    - land use
    - land surface temperature
    - urban heat island
    - urban greening
    - systematic review
    - paper
article:
  tier: 2
  publisher: 'Elsevier, on ScienceDirect; the journal was not identified'
  authors:
    - Abdulaziz I. Almulhim
domains:
  - places
  - climate
relations:
  - predicate: answers
    target: questions/land-use-change
provenance:
  origin: agent
  sources:
    - title: 'Understanding interactions among urbanization, land use and land cover change, and climate impacts: Implications for climate-resilient urban planning. Abdulaziz I. Almulhim, research article on ScienceDirect, read as thirteen screenshots of the page sent by Anselm on 22 November 2026; its address was not visible and was not found'
  created: '2026-11-22'
  reviewed: '2026-11-22'
  reviewed_by: 'Claude, from thirteen screenshots of the article page: the highlights, the abstract except a few lines in its middle, the keywords and the introduction. The methods, results, discussion, figures and reference list were not seen. None of the works the paper cites was opened. The journal, the date of publication and the DOI were not found. Anselm sent the screenshots.'
  status: draft
---
This paper is a review of what is known about three things that are usually studied apart: the growth of cities, the change in land cover that growth causes, and the effects on climate that follow.[^1] The author, Abdulaziz Almulhim, follows the PRISMA 2020 guidelines for systematic reviews and draws on 116 peer-reviewed studies published between 2000 and 2024, with a bibliometric analysis beside them.[^1] It builds no model. It is on this shelf because it sets out the loop a model of a growing city would have to close, and because the studies it gathers supply the relationships such a model needs.

This entry was written from the abstract and the introduction only. The journal and the date were not found.

## The loop

The paper's argument is that most studies take the three subjects two at a time or one at a time. Some examine land cover and climate without treating urbanization as a process with its own social and spatial causes. Others examine urban growth or climate apart from the wider change in land.[^1] It proposes what it calls an integrated urban-land-climate perspective:[^1]

1. **Urbanization drives the change in land.** Vegetated and permeable ground becomes built-up, impervious surface.
2. **The changed land changes climate processes** in three ways: the surface energy balance, the movement of water, and the cycling of carbon.
3. **The climate impacts feed back** on where and how land is used and cities develop afterwards.

The paper says that looking at these in a single framework gives a fuller account of the coupled system than studies of the pairs.[^1] Its Figure 1 draws the loop; the figure was not seen for this entry.

## What it found

From the abstract and the highlights:[^1]

- Urban growth happens mostly at the edge of cities, as peri-urban expansion.
- The dominant change is from vegetated land to impervious surface.
- Urbanization is consistently associated with higher land surface temperature. Impervious surface and the loss of vegetation make the effects worse.
- Integrated land-use planning, compact development and urban greening improve resilience.
- Existing planning responses "may remain insufficient in many rapidly urbanizing contexts", and the paper calls for stronger implementation and better coordination.

A few lines in the middle of the abstract were not captured, so this list may lack a finding.

## Figures it gathers

The introduction collects measurements from other studies. They are given here as the paper reports them, each with the work it cites. None of those works was opened for this entry.

| What | Figure | Cited as |
| --- | --- | --- |
| Share of people living in urban areas by 2050 | nearly 68%, from more than half today | United Nations, 2018 |
| Land surface that has changed use since the 1960s | about 32%, nearly four times earlier estimates | Winkler et al., 2021 |
| Carbon emitted by land-use change | about 1.6 PgC per year | Friedlingstein et al., 2020 |
| Warming from land cover conversion | about 1°C | Findell et al., 2017 |
| Night-time land surface temperature in Gaborone, after land cover change since 2000 | up to 2.2°C higher | Akinyemi et al., 2019 |
| Temperature rise in Brazilian cities from loss of vegetation | about 3 to 4°C | Krüger et al., 2023 |
| Night-time warming from urban areas in Paris during heatwaves | up to 1°C | Ma et al., 2023 |
| Urbanization's part in Great Britain's warming | about 0.04°C, around 3.4% of the trend | Bassett et al., 2020 |
| Growth of built-up area in upper-middle-income countries | more than three times the pace of high-income countries | Sun et al., 2020 |
| China's share of the urban greening seen across large cities | about 32%, benefiting an estimated 108 million residents | Sun et al., 2020 |
| Global urban land by 2100 | up to about 5.9 times today's under certain socioeconomic pathways, mostly in Africa and Asia | Gao and O'Neill, 2020 |
| Urban population exposed to extreme heat, 1983 to 2016 | nearly tripled, mainly from population growth | Tuholske et al., 2021 |

The paper also notes that the pattern is not uniform. Parts of the Global North show net gains in forest while deforestation continues in the Global South, and urbanization does not always degrade the environment, the greening of Chinese cities being its example.[^1]

## What it is and is not

A systematic review reports what the studies it selected found. Its conclusions depend on how the studies were searched for and screened, which the methods section gives and this entry did not see. The 116 studies end in 2024. Most of the measurements quoted in the introduction are of land surface temperature, which satellites record and which is not the air temperature a person feels: see [How hot does this place get?](/everyday/how-hot-does-it-get/) The author's own earlier work on Saudi Arabia is among the sources cited.[^1]

## As a model of one city

This section is the wiki's reading, not the paper's. The loop can be built for one city in four parts, and the wiki has an entry for a tool or a dataset at each.

1. **Where the city grows.** An urban simulation such as [UrbanSim](/engines/urbansim/) places homes and jobs year by year under zoning and transport. The paper cites Gao and O'Neill for the importance of spatially explicit modelling of land use for urban and climate policy.[^1]
2. **What the ground becomes.** A land cover map for each year, observed or simulated: [Dynamic World](/data-sources/dynamic-world/) anywhere, the [National Land Cover Database](/data-sources/nlcd/) in the United States, which also records paved surface.
3. **What that does to heat and water.** The relationship between cover and temperature is what the reviewed studies measure. [Cool Cities Lab](/engines/cool-cities-lab/) estimates what trees, cool roofs and shade do to air temperature in a city, and [PALM](/engines/palm/) simulates air flow and heat street by street.
4. **What planning changes.** The three levers the paper names, integrated land-use planning, compact development and greening, are changed inputs to the first and second parts.

The third step in the paper's loop, the effect of heat and flooding on where people later build, is the part no tool on this wiki supplies. The [land management question page](/questions/land-use-change/) covers the same change of cover for water, habitat, carbon and food.
