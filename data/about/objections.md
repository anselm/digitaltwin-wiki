---
about:
  depiction: about/objections-esri.jpg
  depiction_credit: '"Simulate and predict outcomes", on Esri''s digital-twin page, 10 November 2026. The words every objection on this page starts from.'
  label: Objections people raise
  description: >-
    The objections this site meets when it argues for models of places that
    run forward in time, answered so the easy ones can be set aside and the
    hard ones reached.
provenance:
  origin: human
  sources:
    - title: 'Bilawal Sidhu, I Open Sourced God''s Eye View (Map the World, 25 August 2026)'
      url: 'https://www.spatialintelligence.ai/p/i-open-sourced-gods-eye-view'
    - title: 'Esri, Digital Twin Technology & GIS (archived 5 October 2026)'
      url: 'https://web.archive.org/web/20261005105541/https://www.esri.com/en-us/digital-twin/overview'
    - title: 'ArcGIS Urban overview (archived 23 October 2026)'
      url: 'https://web.archive.org/web/20261023035551/https://www.esri.com/en-us/arcgis/products/arcgis-urban/overview'
    - title: 'ArcGIS CityEngine overview (archived 5 October 2026)'
      url: 'https://web.archive.org/web/20261005160556/https://www.esri.com/en-us/arcgis/products/arcgis-cityengine/overview'
    - title: 'A Digital Twin of Nature to Test Ideas for the Future (ArcNews, November 2026)'
      url: 'https://www.esri.com/about/newsroom/arcnews/a-digital-twin-of-nature-to-test-ideas-for-the-future'
    - title: 'Chris Ebersole, Environmental Impacts of the Grand Coulee Hydroelectric Dam (Environmental ScienceBites, Ohio State University, 2015, CC BY-NC 4.0)'
      url: 'https://ohiostate.pressbooks.pub/sciencebites/chapter/environmental-impacts-of-the-grand-coulee-hydroelectric-dam/'
    - title: 'Anselm Hook, Simulate World: computationally predicting the future of our planet (2015)'
      url: 'https://simulate.world'
    - title: 'Cities: Skylines (Wikipedia)'
      url: 'https://en.wikipedia.org/wiki/Cities:_Skylines'
    - title: 'FutureSearch, a shared conversation: Future Climate Resilient Estate Locations'
      url: 'https://futuresearch.ai/app/conversations/share/034ad371-15ba-4a2a-a158-3a29b6e1702d'
    - title: 'Flood simulation in ArcGIS Pro 3.6 (Esri documentation)'
      url: 'https://pro.arcgis.com/en/pro-app/3.6/help/mapping/simulation/simulation-in-arcgis-pro.htm'
    - title: 'Wikimedia metrics API, editors of English Wikipedia by activity level, September 2026'
      url: 'https://wikimedia.org/api/rest_v1/metrics/editors/aggregate/en.wikipedia/user/all-page-types/5..24-edits/monthly/2026090100/2026100100'
    - title: 'HeiGIT, New User Statistics in ohsomeNow (7 May 2026)'
      url: 'https://heigit.org/?p=42595'
  created: '2026-11-10'
  reviewed: '2026-11-10'
  reviewed_by: 'Anselm wrote the objections and the first answers on 10 November 2026. Claude tidied the wording, read each source, moved the "future states" sentence from ArcNews to Esri''s overview page where it actually appears, replaced the Grand Coulee grizzly example with what the cited chapter records (salmon), added the flood simulation tool, the editor counts and the last four questions; the "too hard" answer is Anselm''s argument of 10 November, filled out from the site''s own entries.'
  status: draft
---
This wiki is more than a shelf of tools. It takes a position: that models of places which run forward in time are worth building, that ordinary people are among their users, and that what such models show is a civic good. Put that position to a room and the first response is often a reason it cannot work. This page collects those reasons. Many are easy to answer, and answering them is worth the trouble, because the aim is to clear them fast and reach the objections that have merit.

A note on method. The honest test of the proposition would be to build the models and compare what happened, and that is what the rest of the site is for. At this level the only tool is argument. People tend to oppose a new idea, and a question often does more than a counter-claim. But a few points are worth pushing back on directly, so that the deeper challenges can be found.

## "Just use God's Eye View"

There is a class of viewers of public geodata that look like digital twins and are twins of the present, not the future. [God's Eye View](/presentation/gods-eye-view/) is a 2026 example: live aircraft, ships, satellites, fires and wind on a photorealistic globe, open source, and by its maker's own description "a spy satellite simulator in your browser, except the data is real."[^1] It is a fine way to see what is, and with work, what was. It has no predictive power, and does not claim any. What this site is after is a forward causal model: the best available data, the behaviour of each part of a system integrated step by step through time, to say what the near future is likely to hold.

![God's Eye View's own site: "A spy-satellite simulator in your browser. Except the data is real." Live flights, ships, orbits and quakes, and no forecast of any of them.](/about/objections-gods-eye.jpg)

The objection is rarely about the tool. It means the premise has not been communicated. A viewer of what is and a model of what comes next look the same on screen and are different things. "Digital twin" does not help here, and there is an argument for a better term; see below.

## "Just use Esri"

Every vendor implies it has an oracle. This objection is harder to answer because the space is noisy, the desire for modelling is real, and there is good narrow modelling of single layers. What this wiki wants is whole-system models, and to argue that carefully takes some drilling down.

Esri's digital-twin page says: "Time aware GIS-based digital twins go beyond 3D models as they reflect change over time, showing historic, current, and future states."[^2] It says "future states". It does not simulate them. Its heading "Simulate and predict outcomes" is followed by layered data: noise, solar radiation, building information.[^2] Esri's scenario products say what they do. ArcGIS Urban evaluates "multiple zoning, land-use, and development scenarios with 3D visualizations and urban analytics", and CityEngine generates versions of a 3D model "to show planned changes."[^3,4] A future state is the city with the proposed buildings in it. That is useful, and a plan rendered and counted is not a forecast.

![ArcGIS Urban in its own words: "evaluate the impacts of multiple zoning, land-use, and development scenarios with 3D visualizations and urban analytics."](/about/objections-urban.jpg)

Where [ArcGIS](/platforms/esri-arcgis/) does simulate, it simulates one layer. ArcGIS Pro's flood simulation, with the Advanced licence, sends an elevation surface to the GPU, adds rain to each cell and moves the water by the shallow water equations, and renders depth, speed and flow rate in 3D.[^10] That is a real simulation of water over terrain. Everything else in the scene, the ground, the buildings, the dam walls, is terrain to it; nothing responds. No bank fails, no farm is abandoned the next year, no vote changes. One dimension, done well.

The best test case is the [Dangermond Preserve](/twins/dangermond-preserve-digital-twin/), because it is Esri's founders' land, with the whole Esri stack on it, and it reads as a testbed for what the tools could be made to do. The team's own ArcNews article and Frontiers paper describe four layers, a PostGIS to ArcGIS Enterprise pipeline, dashboards, and their own placement at the bottom two of five maturity levels.[^5] It feels like the right place, and on closer inspection they are not there yet, and they say so. The one modelled result is the Jalama Creek steelhead work: high- and low-flow modelling confirmed habitat upstream, and two dams came out. Good work, and not a simulation of the whole. It does not grind the watershed forward to find the side effects.

For what side effects look like, take the Grand Coulee Dam. Built from 1933 to 1942 without fish ladders, it and the other Columbia River dams cut the salmon's river habitat to 13 percent of the river; runs that were 10 to 16 million fish a year at the start of the century are about 2.5 million now; and the people who depended on the fish, Native American communities most of all, carried the loss, along with the contaminants that now concentrate in the fish that remain.[^6] Dam, fish, people. The model, had there been one, would have been asked about the first. In human affairs the unintended consequences usually outweigh the intended ones, and a model that cannot show them is answering the wrong question.

We expect urban modelling to improve fast, and Esri to offer multi-layer planning that takes wider ecosystem effects into account. The objection may be true next year. It is not true now.

One more distinction. What a computer can do in theory and what a tool affords in practice are different things. Anything can be built on anything, and someone could, at great expense, build a full systems model of land-use policy on a bioregion inside ArcGIS. In practice it would take longer than the thing being modelled. A model of one small town and the interaction between a gas terminal proposal, its estuary and its people could consume a century of labour hours. The question is never what is possible at the edge but what the tool does readily.

## "Esri does this, but it is secret"

Palantir, Esri, many corporations and governments may well hold forward models of several concerns at once. A state or a firm gains from predicting what a campaign or a pollutant will do to a population. The 2015 essay [Simulate World](https://simulate.world) takes the Deepwater Horizon disaster, when the rig exploded and sank in 2010 and oil flowed into the Gulf of Mexico for 87 days, and asks the civic question: what information about the risks should have been available to the people whose livelihoods were at stake? Rather than assuming which models BP possessed, ask what an open regional model would have made visible: the pathways of a spill, the limits of response, the distribution of possible losses.[^7] [After an oil spill](/questions/after-an-oil-spill/) is that question as a use case, and [GNOME](/engines/noaa-gnome/) is the open trajectory model.

Why can't we, the people, run those scenarios? Why do the costs always sit outside the liabilities, as externalities? Civic modelling is a challenge to power. It is political, for better or worse. And the secrecy objection concedes the point: if the models are worth hiding, they are worth having.

Then the real difficulty, which is not about Esri. A coupled forward model of a whole place is hard. The abiotic realm alone: irradiance, geophysics, volumetric climate, hydrology, ocean heat, carbon, erosion. Then life, with its enormous effects from microbes upward, then animals, forests. Then the built landscape, people, land-use law and policy. To compute any chunk of that forward, rather than guess it, is not trivial. That does not invalidate the merit of doing so. The [Earth system model](/terms/earth-system-model/) entry is where that work stands for the planet as a whole.

## "It is simply too hard"

It was. The answer above concedes it: a coupled forward model of a place is hard, and fifty years ago it was out of reach for anyone outside a national laboratory. Three things have changed, and they have changed recently.

The first is sensing. Fifty years ago the data to model a place did not exist. Now Landsat's record of every piece of land runs back five decades, and the [Hansen maps](/data-sources/hansen-global-forest-change/) read tree cover and the year of its loss from it at 30 metres for the whole planet. [Dynamic World](/data-sources/dynamic-world/) classifies every Sentinel-2 scene since 2015 at 10 metres. [TESSERA](/engines/tessera/) compresses a year of radar and optical imagery into 128 numbers for every 10 metre square of land, free to download. [Open Buildings](/data-sources/google-open-buildings/) has 1.8 billion footprints; [FABDEM](/data-sources/fabdem/) is the ground with the forests and buildings removed. At the Dangermond Preserve, 41 wells report every fifteen minutes and the camera traps name their own species.[^5] The environmental movement itself rests on measurement: the ozone hole was a measurement before it was a treaty, and the carbon dioxide curve on the [vitals](/vitals/) page is the argument in one line. A model of a place used to begin with a survey that nobody could afford. It now begins with a download.

The second is compute. Weather, the one layer with the whole pipeline, shows what happens when the cost falls: [AIFS](/engines/aifs/) and [Aurora](/engines/aurora/) are machine-learned emulators that stand in for the physics models at a fraction of their compute, with open weights, and a shallow-water flood now runs on the GPU inside a desktop GIS. The ensemble that was a supercomputer's week is becoming a workstation's afternoon.

The third is the one that changes the labour. A whole-system model is not one equation but thousands of artifacts: parameters, couplings, schemas, units, data pipelines, the relationships between a well and an aquifer and a pasture and a lease. Assembling and maintaining that set by hand is close to inhuman, which is why so few have been built and why they are rarely kept alive. Language models can now take part in building them: generating the components, the glue between simulators ([ModelingToolkit](/engines/modelingtoolkit/), [HELICS and FMI](/engines/helics-fmi/)), the tests and the documentation, and reading the papers and data catalogues that feed them. The ecologists who wrote [Digital twins as a tool for ecosystem research](/articles/digital-twins-for-ecosystem-research/) call this use "promising but in its infancy", which is the right note. This site is itself a small example: its entries are drafted by agents from sources and checked by a person. What is generated still has to be validated, and the answer to "you can't validate it" below applies to every line a model writes.

So the honest form of the objection is not that it is too hard. It is that it has not been done, and that the tools for doing it arrived in the last few years. Those are different claims, and the second is an invitation. And hard is not a reason. Doing hard things is close to the point of work, and of a life; the easy things are done. Let's not give up.

## "Just use Google Earth Engine"

Closer, in a different way. [Google Earth AI](/engines/google-earth-ai/) is a family of foundation models for weather, floods, population and imagery, and [an agent](/platforms/google-earth-ai-geospatial-reasoning-agent/) that chains them to answer a question. The [Planetary Prediction Engine](/engines/planetary-prediction-engine/) fits a statistical model to the user's own outcome data. That is prediction without a process model: no mass balance, no agents, no feedback between the pieces. It predicts; it does not simulate. It is a forward guess from past data, which is not bad, and is not a whole-system model. The systems it models are simple ones at high resolution, volumetric weather above all, at enormous compute. The systems this site is after are whole ones at lower resolution: how [returning wolves to Yellowstone](/scenarios/wolves-of-greater-yellowstone/) changed the elk, the willows and perhaps the streams, a chain still argued thirty years on, and not a question a foundation model can be asked.

## "Just use Destination Earth"

[Destination Earth](/twins/destination-earth/) is ECMWF's two twins, weather extremes and climate adaptation, at kilometre scale on EuroHPC. Physical only; people enter as scenarios. It is the nearest thing. It is also very granular, and like the [Earth system models](/terms/earth-system-model/) ([CESM](/engines/cesm/), [E3SM](/engines/e3sm/)) and the integrated assessment models ([GCAM](/engines/gcam/), [MESSAGEix](/engines/messageix/), [REMIND](/engines/remind-model/)) it is global and coarse. Those are closest to whole systems, the abiotic realm plus economics, but the complaint in [Dyke and colleagues' paper](/articles/dyke-derailment-risk-hothouse-earth/) stands: the economy is in GCAM, the carbon cycle in CESM, and nothing has the treasury and the ocean in one loop. Nearer to the idea is [Moorea IDEA](/twins/moorea-idea/), which set out in 2013 to simulate one island's people and nature together. What is on record is the aim and the founding paper, not a running simulator.

## "Just use Urbanly"

[Urbanly CityCompass](/engines/urbanly-citycompass/) and [UrbanSim](/engines/urbansim/) model households, firms, developers and traffic on real parcels, month by month. They are good: a whole urban system, running forward, with households that decide things over time. No ecology, no water, no fire. They could grow, and this is the shelf to watch.

## "Nobody will use it. Lay people don't care."

Almost nothing is worth doing before it is done. Vanishingly few people ever operated a printing press.

"Public" here does not mean everyone. It means the rare people in the public who feel the motivation and make the investment. The number is known for the two best civic tools of the age. English Wikipedia had about 39,000 editors who made five or more edits in September 2026, and about 5,000 who made a hundred or more.[^11] OpenStreetMap has around 50,000 active mappers a month, and almost 2.4 million people have ever contributed.[^12] Against the populations that read those projects, that is of the order of one to ten in a hundred thousand. Those few are enough: they wrote the encyclopaedia and drew the map. A model of a place needs the same one in a hundred thousand, and the rest of the town reads what they make.

## "It is too complicated"

SimCity was not too complicated. Wikipedia is not too complicated. [Cities: Skylines](https://en.wikipedia.org/wiki/Cities:_Skylines), the natural successor to SimCity, has a large following.[^8] A tiny fraction of the people who read Wikipedia ever edit it, and that is more than zero. Playful experiences of serious models can be built, and the [communication](/communication/) shelf collects ways to put a model in front of people who will never open one.

## "There will never be an ask-a-question tool for lay people"

Interfaces are moving to conversation, and we expect most of them to arrive there soon. The interface is not the thesis. It is a distraction from the claim that there is merit in tools that help ordinary people model the future of their homes. [Planet's AI app](/platforms/planet-ai-app/) already puts a chat box over a satellite archive, and that team evidently believes there is an audience. [FutureSearch](https://futuresearch.ai/app/conversations/share/034ad371-15ba-4a2a-a158-3a29b6e1702d) answers questions about the future with a language model and a published forecasting track record.[^9] This site disagrees with that approach at root: a forecast should come from a model of the system, not from a model of text. But it shows the appetite for asking the future a question in plain words.

![A shared FutureSearch conversation: "what is a good place to move the family estate to for the year 2100", answered with inflation-adjusted value and uninhabitable days per candidate region, each with a probability range. A language model's forecast, not a model of any of the places.](/about/objections-futuresearch.jpg)

## "It is the wrong word"

Probably. "Digital twin" came from manufacturing and strictly means a live, sensor-fed replica of one thing. This site uses it as shorthand for models and simulations of places in general, and says so wherever it matters ([What is a digital twin?](/terms/digital-twin/)). The ecologists who wrote [Digital twins as a tool for ecosystem research](/articles/digital-twins-for-ecosystem-research/) reached the same conclusion: the label matters less than the traits. Argue about the word after the model exists.

## "You can't validate it"

Partly true, and the strongest objection on this page. A model that predicts many properties rests on many sub-models fitted to many sources, and there is no single test. What exists: run it on a past event first ([Check it against what happened](/guides/check-it-against-what-happened/)); compare inside with outside, as [Gohr and colleagues](/articles/gohr-biosphere-reserves-ecosystem-functions/) did for 119 reserves; run an ensemble rather than one run, since the [GeoMIP](/data-sources/geomip/) models disagree with each other region by region and a single run hides that; and say in writing what the model is for, so that it is allowed to be wrong about the rest.

## "The data will disappear"

It does. FEMA's [National Risk Index](/data-sources/fema-national-risk-index/) closed in December 2025. NASA Earth Observations was decommissioned in September 2026. A twin built on a feed inherits the feed's politics. [Keep it alive](/guides/keep-it-alive/) says a model that lives on needs an owner, a feed, a check and a budget, in writing. The Dangermond team's warning is the best on record: foundations before features, and their groundwater monitoring alone costs $16,000 a year.[^5]

## "A language model will just make it up"

It will, if asked to. That is why this site keeps apart computing a future and hallucinating one. A language model can be the interface, the planner, or a character in an agent-based model ([Generative Agents](/engines/generative-agents/), [Concordia](/engines/concordia/)). The water, the heat, the money and the population are computed, step by step, from rules that can be read.

## "Everything is fine. There is nothing to model."

This is the hardest one to argue with, because there is no argument in it to take hold of. Nothing is wrong, the tools we have are enough, the solutions lie elsewhere, and this is a waste of time. Two answers.

The first is the record. The [IPCC](/organizations/ipcc/)'s assessments set out knock-on effects of carbon dioxide across water, food, heat and the sea; the annual [state of the climate report](/articles/2026-state-of-the-climate-report/) had seven of sixteen planetary vital signs at record extremes in 2026; and the [vitals](/vitals/) page on this site shows the measurements moving as you read. Whoever says there is nothing to worry about is arguing with the instruments, not with this page.

The second answer holds even if the first is set aside, and even if the theory of change fails. Perhaps models will not change how people think; perhaps a town will vote the same way with the floodplain on the wall. The models are still worth having for visibility. We are moving into the future blind: there is no good public understanding of the knock-on effects of decisions made at scale, the terminal on the estuary, the dam on the salmon, the well field on the aquifer. Shadows are where costs are externalised. A corporation that can see what its decision does to a coast, and knows that nobody else can, has every reason to keep it that way. An open model of the place is a light on, nothing more, and that is worth a great deal before anyone asks it to change a mind.

## "No." (And then nothing.)

The commonest objection has no content. It is a list of reasons the idea will not work, and no idea in its place. That is the one answer this page cannot give for you. So, a question back: if you do not like what is proposed here, what do you propose? The problem the models are for does not go away when the models are refused. A town still has to decide about the terminal, the dam, the burn, the zoning; a coast still has to choose where to hold the line; the river still floods. Without a model those decisions get made by whoever holds the only one, or by nobody. The honest alternatives are few: keep deciding by rhetoric and incumbency; trust the vendor's oracle; wait for a national laboratory to notice your watershed; or build the thing, badly at first, in the open, and check it against what happens. If there is a fifth, say what it is. An objection with a proposal attached is a contribution, and the [contributors](/about/contributors/) page is where it goes.
