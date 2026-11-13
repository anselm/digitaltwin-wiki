---
about:
  depiction: about/objections-esri.jpg
  depiction_credit: '"Simulate and predict outcomes", on Esri''s digital-twin page, 10 November 2026.'
  label: Objections people raise
  description: >-
    The objections raised against building models of places that run forward
    in time, grouped by kind, each with a reply. Several are conceded.
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
    - title: 'Carroll et al., The CARE Principles for Indigenous Data Governance (Data Science Journal 19, 43, 2020)'
      url: 'https://datascience.codata.org/articles/10.5334/dsj-2020-043'
    - title: 'First Nations Information Governance Centre, The First Nations Principles of OCAP (archived 6 November 2026; the live site blocks scripted readers)'
      url: 'https://web.archive.org/web/20261106170412/https://fnigc.ca/ocap-training/'
  created: '2026-11-10'
  reviewed: '2026-11-12'
  reviewed_by: 'Anselm wrote the objections and the first answers on 10 November 2026. Claude tidied the wording, read each source, moved the "future states" sentence from ArcNews to Esri''s overview page where it actually appears, replaced the Grand Coulee grizzly example with what the cited chapter records (salmon), added the flood simulation tool, the editor counts and the last four questions; the plain framing of the whole thing as a science tool, a lens in daily professional use, is Anselm''s of 10 November, added to the introduction and to three answers; the objection that people tied to the land will not trust the data to be respected, and its concession, are Anselm''s of 10 November; the "too hard to write" answer is Anselm''s argument of 10 November, filled out from the site''s own entries. On 11 November 2026 Claude revised the wording throughout to the rules on the style page, keeping every link, picture and source and Anselm''s positions; that pass removed three claims with no source behind them (a dozen weather models, several forecast runs a day, and a supercomputer''s week becoming a workstation''s afternoon), corrected the ownership of the Dangermond Preserve to The Nature Conservancy, and restated the Bali result as the entry on that paper records it. Anselm has not yet read the revised wording. On 12 November 2026 Anselm asked that the page say whole-system twins are a new category that has never existed; Claude added the objection "This was done in the 1970s" from the site''s own entries, which record whole-system models from 1969, 1972 and 1992, and stated the narrower claim those entries support. Later on 12 November Anselm judged the 11 November wording over-reduced and asked for a rewrite; Claude rewrote the page from that version and the 10 November one, grouped the objections under five headings, brought back arguments of Anselm''s that the 11 November pass had cut, and added one invented example, a town on an estuary deciding on a gas terminal, which the page labels as invented. No source was opened and no fact, link, picture or footnote was removed. Anselm has not yet read this version.'
  status: public
---
This wiki takes a position. It holds that models of places which run forward in time are worth building, that people outside the professions are among their users, and that what such models show is a civic good. Put that position to a room and the replies fall into a few families: it already exists, it cannot be done, nobody would use it, and it is not needed or not wanted. After two points about what is actually being proposed, this page takes them in that order. Several of the objections are conceded, in whole or in part, and those concessions shape what the site thinks should be built.

The real test of the position is to build the models and compare them with what happened, and the rest of the site exists for that. A page like this one can only argue.

Most of the heat in these arguments is about something quite ordinary. A model of a place is a science tool: observations of the Earth, a model of some process, and a forecast. River engineers run [HEC-RAS](/engines/hec-ras/) to draw a flood map. Coastal agencies run [Delft3D](/engines/deltares-delft3d/) before sand is moved. Transport planners run [MATSim](/engines/matsim/) before a lane is changed, and fisheries scientists run [Ecopath](/engines/ecopath-with-ecosim/) before a quota is argued. The weather forecast is a model run. Professionals have used tools of this kind every working day for decades, well below the level at which most of this debate is conducted. Whether such tools are useless or too complicated has already been settled by the people using them. What remains open is who else should have them, and what they could show if they were joined up.

The joining up is the new part. Each of those tools models one layer of a place: the water, or the traffic, or the fish. The decisions that trouble a town cut across the layers. Suppose a town on an estuary is asked to approve a gas terminal. The terminal needs a deeper shipping channel, and dredging it changes how far salt water reaches up the estuary. That changes where the eelgrass grows. The young fish that shelter in the eelgrass are the catch of a few years later, the catch supports the boats and the processing plant, and those support the families who will vote on the next proposal. A hydrologist can model the first of those links and a fisheries scientist the third, each with a tool from this site's shelves. The town has to decide on the whole chain at once. A model that follows the chain from the dredger to the vote is what this page means by a whole-system model. The town is invented, and it returns below.

## What is being proposed

### "You are proposing one model of everything"

No single model is proposed, no single toolchain, and no plan with a solution attached. The claim is narrower than that and also more open-ended: predictive models of places are useful, so there should be many of them, written by many parties for their own needs with whatever tools suit, and nobody has to agree on a method before starting. Climate science already works this way. [GeoMIP](/data-sources/geomip/) puts the same questions to many climate models so that their answers can be compared. The [Engines](/engines/) shelf lists more than a hundred modelling tools and favours none. [HELICS and FMI](/engines/helics-fmi/) exist so that simulators written separately can run in step and exchange results as they go.

What the site does argue against is stopping at description. A great deal of work on places ends with a map, an inventory or a dashboard, as though a thing that has been described has been dealt with. Engineering moved past that long ago for finite systems. A bridge, a wing or a reactor is simulated before it is built, and the solvers, the meshes and the tests against the measured object are ordinary tooling. The proposal is to bring the same habit to ecosystems and to large coupled systems of people and places.

The picture to hold is a patchwork quilt, much like the internet. People already model their own problems: a reef, a watershed, a city's traffic, an island's people, each built by those who needed it in whatever tools they had. The [Notable twins](/twins/) shelf and the shelves beside it collect the ones that exist, and the site's only agenda is to encourage more of them.

### "It is the wrong word"

Probably. "Digital twin" came from manufacturing, where it strictly means a live, sensor-fed replica of one thing. This site uses it as shorthand for models and simulations of places in general ([What is a digital twin?](/terms/digital-twin/)). The term does some damage in the arguments below, because it covers both a live picture of the present and a model of the future, and several objections come from taking one for the other. The ecologists who wrote [Digital twins as a tool for ecosystem research](/articles/digital-twins-for-ecosystem-research/) concluded that the label matters less than the traits a system has. This site agrees, and would sooner argue about the word once more of the models exist.

## "It already exists"

The most frequent reply is the name of a product. Each product named below does real work, and each answer tries to say what that work is and where it stops. Taken together they show a pattern: a view of the present, or a forecast of a single layer, or a whole system with no particular place in it.

### "Just use God's Eye View"

Some viewers of public geodata look like digital twins and show only the present. [God's Eye View](/presentation/gods-eye-view/) is a 2026 example: live aircraft, ships, satellites, fires and wind on a photorealistic globe, open source, and in its maker's words "a spy satellite simulator in your browser, except the data is real."[^1] It is a fine way to see what is and, with some work, what was. It makes no forecast and claims none. The models this site collects are forward causal models. They take the best available data and the behaviour of each part of a system, and step the system through time to say what the near future is likely to hold.

![God's Eye View's own site: "A spy-satellite simulator in your browser. Except the data is real." Live flights, ships, orbits and quakes, and no forecast of any of them.](/about/objections-gods-eye.jpg)

On a screen, a viewer of the present and a model of the future look the same: a globe, some layers, things moving. That resemblance is where this objection comes from, more than anything about the tool, and when it is raised the usual cause is that the difference has not yet been explained.

### "Just use Esri"

This is harder to answer, because the field is noisy. Vendors' pages speak of prediction, the demand for modelling is real, and good models of single layers exist, some of them Esri's. What is missing is the whole-system model, and Esri's own pages show quite precisely where the line falls.

Esri's digital-twin page says: "Time aware GIS-based digital twins go beyond 3D models as they reflect change over time, showing historic, current, and future states."[^2] The page names future states and shows no simulation of them. Its heading "Simulate and predict outcomes" is followed by layered data: noise, solar radiation, building information.[^2] Esri's scenario products describe themselves accurately. ArcGIS Urban evaluates "multiple zoning, land-use, and development scenarios with 3D visualizations and urban analytics", and CityEngine generates versions of a 3D model "to show planned changes."[^3,4] In these products a future state is the city with the proposed buildings in it. That is a plan, rendered and measured, and it is useful. A forecast would say what happens after the buildings go up.

![ArcGIS Urban in its own words: "evaluate the impacts of multiple zoning, land-use, and development scenarios with 3D visualizations and urban analytics."](/about/objections-urban.jpg)

Where [ArcGIS](/platforms/esri-arcgis/) does simulate, it simulates one layer. ArcGIS Pro's flood simulation, with the Advanced licence, sends an elevation surface to the GPU, adds rain to each cell, moves the water by the shallow water equations, and renders depth, speed and flow rate in 3D.[^10] That is a real simulation of water over terrain. Everything else in the scene, the ground, the buildings and the dam walls, is only terrain to it. The water moves and nothing answers: no bank fails, no farm is abandoned the following year, and nobody votes differently.

If any place shows what the Esri stack can do with full support, it is the [Dangermond Preserve](/twins/dangermond-preserve-digital-twin/). The Nature Conservancy owns the land, Esri's founders gave the money to protect it, and the whole Esri stack runs on it. The team's ArcNews article and Frontiers paper describe four layers, a PostGIS to ArcGIS Enterprise pipeline and dashboards, and the team place their own twin at the bottom two of five maturity levels.[^5] The one modelled result is the Jalama Creek steelhead work: high- and low-flow modelling confirmed that there was habitat upstream, and two dams came out. That is good work, and it is a model of stream flow used for one decision. Nothing at the preserve yet runs the watershed forward to look for side effects.

Side effects are the reason to want more, and the Grand Coulee Dam shows what they look like. It was built from 1933 to 1942 without fish ladders, and it and the other Columbia River dams cut the salmon's river habitat to 13 percent of the river. Runs that were 10 to 16 million fish a year at the start of the century are about 2.5 million now. The people who depended on the fish, Native American communities most of all, carried the loss, along with the contaminants that now concentrate in the fish that remain.[^6] A model of the dam alone, had there been one, would have covered the first link in that chain. The damage ran further along it, to the fish and then to the people, and nobody intended it. This site's view is that in large decisions the unintended consequences often outweigh the intended ones, and a model of one layer has no means of showing them.

None of this is fixed. Urban modelling is improving, and Esri may come to offer planning across several layers that takes wider ecosystem effects into account. The objection may be true in a year. As of November 2026, on the evidence of Esri's published products, it is not.

One further distinction matters here, between what a computer can do in principle and what a tool makes practical. Anything can be built on anything. Someone could, at great expense, build a full systems model of the estuary town inside ArcGIS, with the terminal, the eelgrass, the fishery and the voters all in it. Built by hand in a tool that was not made for the job, it might consume a century of labour hours. That figure is a guess. What it stands for is a model that could take longer to build than the decision takes to play out. The useful question about a tool is what it does readily.

### "Esri does this, but it is secret"

This may well be so. Palantir, Esri and other corporations and governments may hold forward models of several concerns at once, and a state or a firm has plenty to gain from predicting what a campaign or a pollutant will do to a population. This site has no evidence about any particular one.

The 2015 essay [Simulate World](https://simulate.world) takes the Deepwater Horizon disaster, when the rig exploded and sank in 2010 and oil flowed into the Gulf of Mexico for 87 days. The essay does not assume which models BP possessed. It asks a civic question instead: what information about the risks should have been available to the people whose livelihoods were at stake, and what would an open regional model have made visible? Its answer is the pathways of a spill, the limits of response, and the distribution of possible losses.[^7] [After an oil spill](/questions/after-an-oil-spill/) is that question as a use case, and [GNOME](/engines/noaa-gnome/) is the open trajectory model.

If the secret models exist, the objection describes the problem. The people who bear the costs of a decision cannot run the scenarios that the decision-maker can. Costs that only one party can see are easy to leave off that party's books, where they sit outside its liabilities as what economists call externalities. An open model changes who can see them, which makes civic modelling political, for better or worse. The objection also concedes something: if the models are worth hiding, they are worth having.

### "Just use Google Earth Engine"

This comes closer, in a different way. [Google Earth AI](/engines/google-earth-ai/) is a family of foundation models for weather, floods, population and imagery, with [an agent](/platforms/google-earth-ai-geospatial-reasoning-agent/) that chains them to answer a question. The [Planetary Prediction Engine](/engines/planetary-prediction-engine/) fits a statistical model to the user's own outcome data. Both predict without a process model: there is no mass balance, there are no agents, and nothing feeds back between the pieces. The output is a forward estimate drawn from past data, which is useful, and is a different thing from a simulation of the system.

There is also a difference in what gets modelled. These tools model simple systems at high resolution, volumetric weather above all, with enormous compute. The models this site collects aim at whole systems at lower resolution. [Returning wolves to Yellowstone](/scenarios/wolves-of-greater-yellowstone/) changed the elk, then the willows, and perhaps the streams, and thirty years on that chain is still argued over. That is the kind of question a place asks, and a foundation model has no way to be asked it.

### "Just use Destination Earth"

[Destination Earth](/twins/destination-earth/) is ECMWF's pair of twins, one for weather extremes and one for climate adaptation, running at kilometre scale on EuroHPC machines. It is physical only, and people enter it as scenarios. Like the [Earth system models](/terms/earth-system-model/) ([CESM](/engines/cesm/), [E3SM](/engines/e3sm/)) and the integrated assessment models ([GCAM](/engines/gcam/), [MESSAGEix](/engines/messageix/), [REMIND](/engines/remind-model/)), it is global. Between them these come closest to whole systems, since they cover the abiotic realm and the economy, but the complaint in [Dyke and colleagues' paper](/articles/dyke-derailment-risk-hothouse-earth/) stands: the economy is in GCAM, the carbon cycle is in CESM, and nothing has the treasury and the ocean in one loop.

Nearer to the idea is [Moorea IDEA](/twins/moorea-idea/), which set out in 2013 to simulate one island's people and nature together. What is on record is the aim and the founding paper. No running simulator is on record.

### "Just use Urbanly"

[Urbanly CityCompass](/engines/urbanly-citycompass/) and [UrbanSim](/engines/urbansim/) model households, firms, developers and traffic on real parcels, month by month. Each is a whole urban system running forward, with households that decide things over time, and that is most of what this page asks for within a city's limits. What they leave out is everything that is not urban: neither has ecology, water or fire. Either could add them, and this part of the shelf is worth watching.

### "This was done in the 1970s"

That is partly right, and the history narrows the claim this site can make. Whole-system models are more than fifty years old. Jay Forrester's [Urban Dynamics](/media/urban-dynamics/) of 1969 ran the population, housing and industry of an urban area as one closed system. World3, the model behind [The Limits to Growth](/media/the-limits-to-growth/) of 1972, ran population, industrial output, food, non-renewable resources and pollution for the planet in one set of feedback loops. [DICE](/engines/dice-model/), first published in 1992, runs from economic activity through the carbon cycle and climate to damages and back to policy. Each of these treats its subject as a single unit, an urban area as a closed system or the world as one, so no actual river, street or coastline appears in any of them.

The models of named places came later, and each covers part of its place. [eReefs](/twins/ereefs/) has run since 2012 and simulates the water, sediment and chemistry of the Great Barrier Reef from the river catchments to the open ocean, with no people in it. [UrbanSim](/engines/urbansim/) and [Urbanly CityCompass](/engines/urbanly-citycompass/) simulate where households and firms settle and what gets built, parcel by parcel, with no ecology. The [Moorea IDEA](/twins/moorea-idea/) consortium set out in 2013 to simulate one island's people and nature as one system, and no release date has been given for it. A [2026 paper in Trends in Ecology & Evolution](/articles/digital-twins-for-ecosystem-research/) searched the literature for twins of ecosystems and found fifteen studies with some of the traits it asks for and one initiative, [BioDT](/twins/biodt/), that had started to build them.

So the claim is a narrow one. On 10 November 2026 every entry on the Notable twins, Engines and Platforms shelves was read with this question in mind, and none describes a running model of one named place with its water, its living things, its buildings and its people in one loop. As far as that reading goes, a model of that kind would be new. The reading covered this site's entries only, and a model held in private would not appear in it.

## "It cannot be done"

### "It is too hard to write"

This was true for a long time, and it is becoming less true for reasons that can be named. A coupled forward model of a whole place has to cover the abiotic realm: irradiance, geophysics, volumetric climate, hydrology, ocean heat, carbon, erosion. Then it has to cover life, from microbes to animals and forests, and then the built landscape, people, land-use law and policy. Fifty years ago, computing any part of that forward, as opposed to guessing at it, was out of reach for anyone outside a national laboratory. The [Earth system model](/terms/earth-system-model/) entry is where that work stands for the planet as a whole.

Three things have changed since: the data, the cost of computing, and the labour of assembling a model.

Fifty years ago the data to model a place did not exist. Landsat's record of every piece of land now runs back five decades, and the [Hansen maps](/data-sources/hansen-global-forest-change/) read tree cover and the year of its loss from that record at 30 metres for the whole planet. [Dynamic World](/data-sources/dynamic-world/) classifies every Sentinel-2 scene since 2015 at 10 metres. [TESSERA](/engines/tessera/) compresses a year of radar and optical imagery into 128 numbers for every 10 metre square of land, free to download. [Open Buildings](/data-sources/google-open-buildings/) has 1.8 billion footprints, and [FABDEM](/data-sources/fabdem/) is the ground with the forests and buildings removed. At the Dangermond Preserve, 41 wells report every fifteen minutes and the camera traps name their own species.[^5] The environmental movement itself rests on measurement of this kind: the ozone hole was measured before there was a treaty, and the carbon dioxide curve is on the [vitals](/vitals/) page. A model of a place used to begin with a survey that few could afford. It can now begin with a download.

Computing has become cheaper in the same period. Weather is the one layer that has the whole pipeline, and it shows what happens when the cost falls. [AIFS](/engines/aifs/) and [Aurora](/engines/aurora/) are machine-learned emulators that stand in for the physics models at a fraction of their compute, with open weights. A shallow-water flood now runs on the GPU inside a desktop GIS.[^10]

The third change is to the labour, and it is the most recent. A whole-system model is thousands of artifacts and not one equation: parameters, couplings, schemas, units, data pipelines, and the relationships between a well and an aquifer and a pasture and a lease. Assembling and maintaining that set by hand is close to more than people can do, which goes some way to explaining why few such models have been built and fewer kept alive. Language models can now take part in the work. They can generate the components, the glue between simulators ([ModelingToolkit](/engines/modelingtoolkit/), [HELICS and FMI](/engines/helics-fmi/)), the tests and the documentation, and they can read the papers and data catalogues that feed a model. The ecologists who wrote [Digital twins as a tool for ecosystem research](/articles/digital-twins-for-ecosystem-research/) call this use promising but in its infancy. This site is a small example of the same thing, since its entries are drafted by agents from sources and checked by a person. What is generated still has to be validated, by the methods under "You can't validate it" below.

Stated accurately, then, the objection is that a whole-system model of a place has not been written, and that the tools for writing one arrived only in the last few years. That is a different claim from "too hard", and it reads more like an invitation. Difficulty is in any case a cost and not a reason to leave the work undone. Doing hard things is close to the point of work, and of a life.

### "The future is too hard to predict"

True, and it is a large concession. The future departs quickly from what anyone expected, and that holds for arguments as much as for models: the outcome is usually different from the one that was argued for. But a model can be useful in three ways that do not depend on its being right.

The first is that a model which is only roughly like the outcome still gives a planner a feel for the range of outcomes, which is more than they had before. The working arrangement pairs human intuition with brute-force machine reasoning. The machine searches the space of possibilities, and the person judges where in that space to place a trial or an experiment. [EMA Workbench](/engines/ema-workbench/) is that arrangement as software. It runs a model across many combinations of uncertain inputs and policies and reports which combinations lead to which outcomes.

The second is that an inaccurate model surprises, and the surprise is worth having. When a run does not produce the outcome that was expected, either the model is wrong or the expectation was, and finding out which is ordinary science: a hypothesis, a run, an outcome. [Lansing and Kremer's model of Bali's water temples](/articles/lansing-kremer-balinese-water-temple-networks/) is an example. Planners had replaced the temples' planting schedules with a regime of planting rice as often as possible. Run both ways, the model lost large parts of the crop to pests and water shortages under the new regime and gave the best harvests under the temple schedules. Later the two authors gave each simulated group of farmers a single rule, to copy the most successful of its nearest neighbours after each harvest, and expected chaos. Within about a decade of simulated years the farmers had formed cooperative networks that closely resembled the real ones.

The third is the horizon. Far futures are hard, and many of the questions people bring are near ones: whether the estuary floods next decade, what the burn does to the pasture in two years, where the spill goes this week. On short horizons prediction works, and the weather forecast is the standing example. Its skill is high for a few days and falls with lead time, and people use it anyway. The error bars widen with distance, and a model run as an ensemble shows how wide they are. [Check it against what happened](/guides/check-it-against-what-happened/) is how to find out how far ahead a given model can be trusted.

### "You can't validate it"

Partly true, and the part that is true deserves care. A weather forecast can be scored every day against what the weather did. A model of a place that predicts many properties rests on many sub-models, each fitted to its own sources, and there is no single test that it passes or fails. What exists are partial tests, and a model should face as many of them as apply:

- Run the model on a past event first, and see whether it reproduces what is known to have happened ([Check it against what happened](/guides/check-it-against-what-happened/)).
- Compare inside with outside, as [Gohr and colleagues](/articles/gohr-biosphere-reserves-ecosystem-functions/) did when they measured each of 119 biosphere reserves against the land around it.
- Run an ensemble. The [GeoMIP](/data-sources/geomip/) models disagree with each other region by region, and a single run hides that.
- State in writing what the model is for, so that it is allowed to be wrong about the rest.

### "A language model will just make it up"

It will, if it is asked to produce the forecast. That is why this site keeps computing a future apart from generating a description of one. A language model can be the interface, the planner, or a character in an agent-based model ([Generative Agents](/engines/generative-agents/), [Concordia](/engines/concordia/)). The water, the heat, the money and the population are computed step by step from rules that can be read.

### "The data will disappear"

It does. FEMA's [National Risk Index](/data-sources/fema-national-risk-index/) closed in December 2025. NASA Earth Observations was decommissioned in September 2026. A twin built on a feed inherits the feed's politics, because it depends on whoever funds the feed continuing to fund it. [Keep it alive](/guides/keep-it-alive/) says that a model which is meant to live on needs an owner, a feed, a check and a budget, in writing. The Dangermond team's advice is foundations before features, and their groundwater monitoring alone costs $16,000 a year.[^5]

## "Nobody would use it"

### "Nobody will use it. Lay people don't care."

These tools are in use now. The flood engineer, the fisheries scientist and the transport planner are the users. They are professionals, though, and the objection is about lay people.

About lay people the answer is a number, because "public" here does not mean everyone. It means the few people in the public who have the motivation and make the investment. Few people ever operated a printing press. English Wikipedia had about 39,000 editors who made five or more edits in September 2026, and about 5,000 who made a hundred or more.[^11] OpenStreetMap has around 50,000 active mappers a month, and almost 2.4 million people have ever contributed.[^12] Against the populations that read those projects, that is of the order of one to ten in a hundred thousand. Those few wrote the encyclopaedia and drew the map, and everyone else reads them. A model of a place needs a similar share. In a city of a hundred thousand that would be somewhere between one and ten people who build the model and keep it going, and the rest of the city reads what they make.

### "It is too complicated to use"

For whom? HEC-RAS is complicated, and a profession uses it. The objection concerns lay people, which makes it a question of interface design and not a verdict on the models. SimCity was not too complicated for its players. [Cities: Skylines](https://en.wikipedia.org/wiki/Cities:_Skylines), a successor to SimCity, has a large following.[^8] Playful experiences of serious models can be built, and the [communication](/communication/) shelf collects ways to put a model in front of people who will never open one.

### "There will never be an ask-a-question tool for lay people"

Interfaces are moving to conversation. [Planet's AI app](/platforms/planet-ai-app/) already puts a chat box over a satellite archive. [FutureSearch](https://futuresearch.ai/app/conversations/share/034ad371-15ba-4a2a-a158-3a29b6e1702d) answers questions about the future with a language model and a published forecasting track record.[^9] This site disagrees with that approach at its root, because it holds that a forecast should come from a model of the system and not from a model of text. What FutureSearch does show is that people want to ask the future a question in plain words.

![A shared FutureSearch conversation: "what is a good place to move the family estate to for the year 2100", answered with inflation-adjusted value and uninhabitable days per candidate region, each with a probability range. A language model's forecast, not a model of any of the places.](/about/objections-futuresearch.jpg)

The interface is in any case secondary. The claim being defended is that tools which help ordinary people model the future of their homes have merit, and it would stand whether the tool were a chat box, a map or a game.

## "It is not needed, or not wanted"

### "The people who know the land will not trust you with what they know"

This objection is right, and this page does not argue with it. Indigenous communities and others tied to a place do not trust platforms whose owners hold contracts with oil, mining and industry. The company that holds the data can disclose it. Knowledge of a sacred site or a hunting ground, put into such a system, is knowledge the extractive industries on the same client list would pay for. The fear is of betrayal by whoever holds the data, and it is well founded. This is a high-risk area. As a society we do not yet understand the grey space between private and public, and a data service of the kind proposed here sits in that space.

What follows from the concession is a design requirement: people must be able to run their own models without sharing their data. Most of the engines on this site allow it. They are desktop or open-source software that computes on whatever is on the machine and sends nothing anywhere, so the model of a place can belong to the people of the place, with the knowledge held where they hold it.

Two sets of principles say what that requirement means. The CARE principles for Indigenous data governance are collective benefit, authority to control, responsibility and ethics. They were written because "mainstream values related to research and data are often inconsistent with Indigenous cultures and collective rights".[^13] Authority to control is the one a model builder has to design for first. The First Nations principles of OCAP, which are ownership, control, access and possession, were set in 1998 by the steering committee of a First Nations health survey in Canada, and they go one step further. Ownership is the relationship of a people to its knowledge, and possession is "the physical control of data", which the First Nations Information Governance Centre calls "the mechanism by which ownership can be asserted and protected."[^14] A model that runs on the community's own machine, on data that never leaves it, is the technical form of that principle. [Protect people's privacy](/guides/protect-people-s-privacy/) is the guide on what not to collect.

The objection therefore stands as a condition. A model of a place that cannot meet it is not worth building.

### "Everything is fine. There is nothing to model."

There is little in this one to take hold of: nothing is wrong, the tools we have are enough, the solutions lie elsewhere, and all of this is a waste of time. The dry reply is that a science tool does not need a crisis. Rivers were modelled before anyone worried about the climate, because a town wanted to know where the water goes.

The measurements also disagree with the objection. The [IPCC](/organizations/ipcc/)'s assessments set out knock-on effects of carbon dioxide across water, food, heat and the sea. The annual [state of the climate report](/articles/2026-state-of-the-climate-report/) had seven of sixteen planetary vital signs at record extremes in 2026, and the [vitals](/vitals/) page shows the current measurements. Whoever says there is nothing to worry about is arguing with the instruments.

A second answer holds even if the measurements are set aside, and even if models never change how people think. Suppose a town votes the same way with the floodplain on the wall. The models are still worth having for what they make visible. We are moving into the future largely blind. There is at present no good public account of the knock-on effects of decisions made at scale: the terminal on the estuary, the dam on the salmon, the well field on the aquifer. Costs are passed on in the shadows, where nobody else can see them. A company that can see what its decision does to a coast, and knows that nobody else can, has every reason to keep things that way. An open model of the place is a light switched on, and that is worth a great deal before anyone asks it to change a mind.

### "We just need a better relationship with nature"

Commune better, respect the earth, make peace with the planet. The aspiration is sound. What this site doubts is the expectation that it arrives by itself, as a satori, a morning on which everyone wakes up and treats the earth better. That expectation is magical thinking. People are people. They are hungry and they have local needs, and it is hard to get anyone to value not doing something, or to prefer a slower reward to the one in front of them. A fisherman who throws dynamite into a reef gets a harvest today and takes the reef away for years. Showing him the downstream picture might change what he does, and it might not. Some people will exploit any system that lets them.

Models are made for people as they are. They do not need anyone's nature to change. They need only that people can see the account. In Elinor Ostrom's studies of fisheries, pastures and irrigation, the commons that lasted did so on rules, on monitoring answerable to the users, and on a shared account of the fish, the grass or the water ([Questions people ask](/about/faq/) has the longer version). Bali's water temples coordinated planting across a watershed, and [Lansing and Kremer's model](/articles/lansing-kremer-balinese-water-temple-networks/) showed that their schedules gave the best harvests. Kinship is welcome where it occurs. The proposal here is the unsentimental one: make the consequences visible to the people who have to live with them, and leave the decision to them.

There is a more charitable reading of the objection, and it is the one this site holds. Much of what societies are moving towards, in energy, in land and in the sea, is informed by planetary science and by observation of the world. Where a better relationship is forming, it is forming on evidence. A model of a place is one more lens for that: a way to inquire critically into the systems we live in, and to hold a community's discussion about how to respond. Tools of this kind come before the awareness and not after it. They may be part of what sparks the civic awareness and the social movements that protecting the world will take.

### "No." (And then nothing.)

The commonest objection is a list of reasons the idea will not work, with no idea in its place. The fair reply is a question: if not this, what do you propose? The problem the models are for does not go away when the models are refused. A town still has to decide about the terminal, the dam, the burn and the zoning. A coast still has to choose where to hold the line. Without a model, those decisions are made by whoever holds the only one, or with none at all.

The alternatives are few. A town can keep deciding by rhetoric and incumbency. It can trust a vendor's product, or wait for a national laboratory to take an interest in its watershed. Or it can build the model in the open, badly at first, and check it against what happens. If there is a fifth, this site would like to hear it. An objection that arrives with a proposal is a contribution, and the [contributors](/about/contributors/) page is where it goes.
