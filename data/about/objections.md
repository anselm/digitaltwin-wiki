---
about:
  depiction: about/objections-esri.jpg
  depiction_credit: '"Simulate and predict outcomes", on Esri''s digital-twin page, 10 November 2026.'
  label: Objections people raise
  description: >-
    Objections raised against building models of places that run forward in
    time, each with a reply.
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
  reviewed: '2026-11-10'
  reviewed_by: 'Anselm wrote the objections and the first answers on 10 November 2026. Claude tidied the wording, read each source, moved the "future states" sentence from ArcNews to Esri''s overview page where it actually appears, replaced the Grand Coulee grizzly example with what the cited chapter records (salmon), added the flood simulation tool, the editor counts and the last four questions; the plain framing of the whole thing as a science tool, a lens in daily professional use, is Anselm''s of 10 November, added to the introduction and to three answers; the objection that people tied to the land will not trust the data to be respected, and its concession, are Anselm''s of 10 November; the "too hard to write" answer is Anselm''s argument of 10 November, filled out from the site''s own entries. On 11 November 2026 Claude revised the wording throughout to the rules on the style page, keeping every link, picture and source and Anselm''s positions; that pass removed three claims with no source behind them (a dozen weather models, several forecast runs a day, and a supercomputer''s week becoming a workstation''s afternoon), corrected the ownership of the Dangermond Preserve to The Nature Conservancy, and restated the Bali result as the entry on that paper records it. Anselm has not yet read the revised wording. On 12 November 2026 Anselm asked that the page say whole-system twins are a new category that has never existed; Claude added the objection "This was done in the 1970s" from the site''s own entries, which record whole-system models from 1969, 1972 and 1992, and stated the narrower claim those entries support.'
  status: public
---
This wiki holds that models of places which run forward in time are worth building, that ordinary people are among their users, and that what such models show is a civic good. The objections below are the ones raised most often, each with a reply. Some of the replies concede the objection.

The test of the position is to build the models and compare them with what happened, and the rest of the site is for that. What can be done here is argument.

A model of a place is a science tool. It joins Earth observation, a process model and a forecast. River engineers run [HEC-RAS](/engines/hec-ras/) to draw a flood map. Coastal agencies run [Delft3D](/engines/deltares-delft3d/) before sand is moved. Transport planners run [MATSim](/engines/matsim/) before a lane is changed, and fisheries scientists run [Ecopath](/engines/ecopath-with-ecosim/) before a quota is argued. The weather forecast is a model run. Professionals have used tools of this kind every working day for decades. The open questions are who else should have them and what they could show.

## "You are proposing one model of everything"

No single model is proposed, no one toolchain, and no plan with a solution attached. Predictive models of places are useful, so there should be many of them, written by many parties for different needs with different tools, and with no consensus on method required before anyone starts. Climate modelling already works this way: [GeoMIP](/data-sources/geomip/) puts the same questions to many models so that their answers can be compared. The [Engines](/engines/) shelf lists more than a hundred and favours none. [HELICS and FMI](/engines/helics-fmi/) exist to make separate models talk to each other.

Engineering has had numerical models of finite systems for decades. A bridge, a wing or a reactor is simulated before it is built, and the solvers, the meshes and the tests against the measured thing are ordinary tooling. The proposal is to apply the same tooling to ecosystems and to large coupled systems of people and places, and to stop treating a static description of a place as the end of the work.

The result would be a patchwork, as the internet is. People already model their own problems: a reef, a watershed, a city's traffic, an island's people, each built by those who needed it in whatever tools they had. The [Notable twins](/twins/) shelf and the shelves beside it collect the ones that exist.

## "Just use God's Eye View"

Some viewers of public geodata look like digital twins and show only the present. [God's Eye View](/presentation/gods-eye-view/) is a 2026 example: live aircraft, ships, satellites, fires and wind on a photorealistic globe, open source, and in its maker's words "a spy satellite simulator in your browser, except the data is real."[^1] It shows what is and, with work, what was. It makes no forecast and claims none. The models this site collects are forward causal models: they take the best available data and the behaviour of each part of a system, and step it through time to say what the near future is likely to hold.

![God's Eye View's own site: "A spy-satellite simulator in your browser. Except the data is real." Live flights, ships, orbits and quakes, and no forecast of any of them.](/about/objections-gods-eye.jpg)

A viewer of the present and a model of the future look the same on screen. When this objection is raised, the usual cause is that the difference has not been explained. The term "digital twin" covers both, which adds to the confusion.

## "Just use Esri"

Vendors' pages describe prediction, the demand for modelling is real, and good models of single layers exist. What is missing is the whole-system model, and Esri's own pages show where the line falls.

Esri's digital-twin page says: "Time aware GIS-based digital twins go beyond 3D models as they reflect change over time, showing historic, current, and future states."[^2] The page names future states and shows no simulation of them. Its heading "Simulate and predict outcomes" is followed by layered data: noise, solar radiation, building information.[^2] Esri's scenario products describe themselves accurately. ArcGIS Urban evaluates "multiple zoning, land-use, and development scenarios with 3D visualizations and urban analytics", and CityEngine generates versions of a 3D model "to show planned changes."[^3,4] A future state, in these products, is the city with the proposed buildings in it. That is a plan rendered and counted. It is useful, and it is a different thing from a forecast.

![ArcGIS Urban in its own words: "evaluate the impacts of multiple zoning, land-use, and development scenarios with 3D visualizations and urban analytics."](/about/objections-urban.jpg)

Where [ArcGIS](/platforms/esri-arcgis/) does simulate, it simulates one layer. ArcGIS Pro's flood simulation, with the Advanced licence, sends an elevation surface to the GPU, adds rain to each cell, moves the water by the shallow water equations, and renders depth, speed and flow rate in 3D.[^10] That is a real simulation of water over terrain. The ground, the buildings and the dam walls are terrain to it, and nothing responds: no bank fails, no farm is abandoned the next year, no vote changes.

The [Dangermond Preserve](/twins/dangermond-preserve-digital-twin/) is where the Esri stack has had the most support. The Nature Conservancy owns the land, Esri's founders gave the money to protect it, and the whole Esri stack runs on it. The team's ArcNews article and Frontiers paper describe four layers, a PostGIS to ArcGIS Enterprise pipeline and dashboards, and place the twin at the bottom two of five maturity levels.[^5] The one modelled result is the Jalama Creek steelhead work: high- and low-flow modelling confirmed habitat upstream, and two dams came out. Nothing there runs the watershed forward to find side effects.

The Grand Coulee Dam shows what side effects look like. It was built from 1933 to 1942 without fish ladders, and it and the other Columbia River dams cut the salmon's river habitat to 13 percent of the river. Runs that were 10 to 16 million fish a year at the start of the century are about 2.5 million now. The people who depended on the fish, Native American communities most of all, carried the loss, along with the contaminants that now concentrate in the fish that remain.[^6] A model of the dam alone would have covered the first link in that chain. The larger consequences were the ones nobody intended, and a single-layer model does not show them.

Urban modelling is improving, and Esri may come to offer multi-layer planning that takes wider ecosystem effects into account. As of November 2026 its published products do not.

What a computer can do in theory differs from what a tool makes practical. Someone could, at great expense, build a full systems model of land-use policy for a bioregion inside ArcGIS. A model of one small town, covering a gas terminal proposal, its estuary and its people, might take a century of labour hours; that figure is a guess.

## "Esri does this, but it is secret"

Palantir, Esri and other corporations and governments may hold forward models of several concerns at once. A state or a firm gains from predicting what a campaign or a pollutant will do to a population. The 2015 essay [Simulate World](https://simulate.world) takes the Deepwater Horizon disaster, when the rig exploded and sank in 2010 and oil flowed into the Gulf of Mexico for 87 days. It asks what information about the risks should have been available to the people whose livelihoods were at stake. It does not assume which models BP possessed. It asks what an open regional model would have made visible: the pathways of a spill, the limits of response, the distribution of possible losses.[^7] [After an oil spill](/questions/after-an-oil-spill/) is that question as a use case, and [GNOME](/engines/noaa-gnome/) is the open trajectory model.

Where such models are secret, the people who bear the costs of a decision cannot run the scenarios that the decision-maker can, and the costs stay outside the decision-maker's liabilities as externalities. An open model changes who can see those costs, so civic modelling is political. The objection also grants that the models are valuable enough to hide.

## "It is too hard to write"

This was true and is becoming less so. A coupled forward model of a whole place has to cover the abiotic realm: irradiance, geophysics, volumetric climate, hydrology, ocean heat, carbon, erosion. Then it has to cover life, from microbes to animals and forests, and then the built landscape, people, land-use law and policy. Fifty years ago, computing any part of that forward was out of reach for anyone outside a national laboratory. The [Earth system model](/terms/earth-system-model/) entry is where that work stands for the planet as a whole.

The first change is sensing. Fifty years ago the data to model a place did not exist. Landsat's record of every piece of land now runs back five decades, and the [Hansen maps](/data-sources/hansen-global-forest-change/) read tree cover and the year of its loss from it at 30 metres for the whole planet. [Dynamic World](/data-sources/dynamic-world/) classifies every Sentinel-2 scene since 2015 at 10 metres. [TESSERA](/engines/tessera/) compresses a year of radar and optical imagery into 128 numbers for every 10 metre square of land, free to download. [Open Buildings](/data-sources/google-open-buildings/) has 1.8 billion footprints, and [FABDEM](/data-sources/fabdem/) is the ground with the forests and buildings removed. At the Dangermond Preserve, 41 wells report every fifteen minutes and the camera traps name their own species.[^5] The environmental movement rests on measurement too: the ozone hole was measured before there was a treaty, and the carbon dioxide curve is on the [vitals](/vitals/) page. A model of a place used to begin with a survey few could afford, and can now begin with a download.

The second is compute. Weather is the one layer with the whole pipeline, and it shows what happens when the cost falls. [AIFS](/engines/aifs/) and [Aurora](/engines/aurora/) are machine-learned emulators that stand in for the physics models at a fraction of their compute, with open weights. A shallow-water flood now runs on the GPU inside a desktop GIS.[^10]

The third is labour. A whole-system model is thousands of artifacts: parameters, couplings, schemas, units, data pipelines, the relationships between a well and an aquifer and a pasture and a lease. Assembling and maintaining that set by hand takes so much work that few have been built and fewer kept alive. Language models can now take part. They can generate the components, the glue between simulators ([ModelingToolkit](/engines/modelingtoolkit/), [HELICS and FMI](/engines/helics-fmi/)), the tests and the documentation, and read the papers and data catalogues that feed them. The ecologists who wrote [Digital twins as a tool for ecosystem research](/articles/digital-twins-for-ecosystem-research/) call this use promising but in its infancy. The entries on this site are drafted by agents from sources and checked by a person. What is generated still has to be validated, by the methods under "You can't validate it".

What remains of the objection is that such a model has not been written, and that the tools for writing one arrived in the last few years. Difficulty is a cost. It does not show that the work should be left undone.

## "The future is too hard to predict"

True. The future departs quickly from what was expected, in models and in argument alike. The uses of a model do not all depend on its being accurate.

A model that is roughly similar to the outcome gives a planner a feel for the space of outcomes. The working arrangement is human intuition with brute-force machine reasoning: the machine searches the space of possibilities, and the person judges where to place a trial or an experiment. [EMA Workbench](/engines/ema-workbench/) is that arrangement as software. It runs a model across many combinations of uncertain inputs and policies and reports which combinations lead to which outcomes.

An inaccurate model is also informative. A run that does not produce the expected outcome says something about the model or about the expectation, and finding out which is ordinary science: a hypothesis, a run, an outcome. [Lansing and Kremer's model of Bali's water temples](/articles/lansing-kremer-balinese-water-temple-networks/) found that the temple schedules gave better harvests than planting as often as possible, the regime that had replaced them.

Horizon matters. Far futures are hard, and many of the questions people bring are near: whether the estuary floods next decade, what the burn does to the pasture in two years, where the spill goes this week. On short horizons prediction works. Weather forecast skill is high for days and falls with lead time, and people use the forecast anyway. The error bars widen with distance, and a model run as an ensemble shows how wide. [Check it against what happened](/guides/check-it-against-what-happened/) is how to find out how far out a given model can be trusted.

## "Just use Google Earth Engine"

[Google Earth AI](/engines/google-earth-ai/) is a family of foundation models for weather, floods, population and imagery, with [an agent](/platforms/google-earth-ai-geospatial-reasoning-agent/) that chains them to answer a question. The [Planetary Prediction Engine](/engines/planetary-prediction-engine/) fits a statistical model to the user's own outcome data. Both predict without a process model: no mass balance, no agents, no feedback between the pieces. The output is a forward estimate from past data, which is useful and is different from a simulation of the system. The systems these tools model are simple ones at high resolution, volumetric weather above all, at enormous compute. The models this site collects are of whole systems at lower resolution. [Returning wolves to Yellowstone](/scenarios/wolves-of-greater-yellowstone/) changed the elk, the willows and perhaps the streams, a chain still argued thirty years on, and a foundation model has no way to be asked about it.

## "Just use Destination Earth"

[Destination Earth](/twins/destination-earth/) is ECMWF's two twins, weather extremes and climate adaptation, at kilometre scale on EuroHPC. It is physical only, and people enter as scenarios. Like the [Earth system models](/terms/earth-system-model/) ([CESM](/engines/cesm/), [E3SM](/engines/e3sm/)) and the integrated assessment models ([GCAM](/engines/gcam/), [MESSAGEix](/engines/messageix/), [REMIND](/engines/remind-model/)), it is global. These come closest to whole systems, the abiotic realm plus economics, but the complaint in [Dyke and colleagues' paper](/articles/dyke-derailment-risk-hothouse-earth/) stands: the economy is in GCAM, the carbon cycle in CESM, and nothing has the treasury and the ocean in one loop. [Moorea IDEA](/twins/moorea-idea/) set out in 2013 to simulate one island's people and nature together. What is on record is the aim and the founding paper. No running simulator is on record.

## "Just use Urbanly"

[Urbanly CityCompass](/engines/urbanly-citycompass/) and [UrbanSim](/engines/urbansim/) model households, firms, developers and traffic on real parcels, month by month. Each is a whole urban system running forward, with households that decide things over time. Neither has ecology, water or fire. Either could add them.

## "This was done in the 1970s"

Whole-system models are more than fifty years old. Jay Forrester's [Urban Dynamics](/media/urban-dynamics/) of 1969 ran the population, housing and industry of an urban area as one closed system. World3, the model behind [The Limits to Growth](/media/the-limits-to-growth/) of 1972, ran population, industrial output, food, non-renewable resources and pollution for the planet in one set of feedback loops. [DICE](/engines/dice-model/), first published in 1992, runs from economic activity through the carbon cycle and climate to damages and back to policy. Each treats its subject as a single unit: an urban area as a closed system, or the world as one.

The models of named places on the shelves each cover part of the place. [eReefs](/twins/ereefs/) has run since 2012 and simulates the water, sediment and chemistry of the Great Barrier Reef from the river catchments to the open ocean, with no people in it. [UrbanSim](/engines/urbansim/) and [Urbanly CityCompass](/engines/urbanly-citycompass/) simulate where households and firms settle and what gets built, parcel by parcel, with no ecology. The [Moorea IDEA](/twins/moorea-idea/) consortium set out in 2013 to simulate one island's people and nature as one system, and no release date has been given for it. A [2026 paper in Trends in Ecology & Evolution](/articles/digital-twins-for-ecosystem-research/) searched the literature for twins of ecosystems and found fifteen studies with some of the traits it asks for and one initiative, [BioDT](/twins/biodt/), that had started to build them.

A reading of every entry on the Notable twins, Engines and Platforms shelves on 10 November 2026 found no running model of one named place with its water, its living things, its buildings and its people in one loop. As far as that reading goes, a model of that kind would be new. The reading covered this site's entries only, and a model held in private would not appear in it.

## "Nobody will use it. Lay people don't care."

These tools are in use now. The flood engineer, the fisheries scientist and the transport planner are the users. The objection is about lay people.

"Public" here means the few people in the public who have the motivation and make the investment. Few people ever operated a printing press. English Wikipedia had about 39,000 editors who made five or more edits in September 2026, and about 5,000 who made a hundred or more.[^11] OpenStreetMap has around 50,000 active mappers a month, and almost 2.4 million people have ever contributed.[^12] Against the populations that read those projects, that is of the order of one to ten in a hundred thousand. Those few wrote the encyclopaedia and drew the map. A model of a place needs a similar share, and the rest of the town reads what they make.

## "It is too complicated to use"

HEC-RAS is complicated, and a profession uses it. The objection concerns lay people, so it is a question of interface design. SimCity was not too complicated for its players. [Cities: Skylines](https://en.wikipedia.org/wiki/Cities:_Skylines), a successor to SimCity, has a large following.[^8] Playful experiences of serious models can be built, and the [communication](/communication/) shelf collects ways to put a model in front of people who will never open one.

## "There will never be an ask-a-question tool for lay people"

Interfaces are moving to conversation. [Planet's AI app](/platforms/planet-ai-app/) already puts a chat box over a satellite archive. [FutureSearch](https://futuresearch.ai/app/conversations/share/034ad371-15ba-4a2a-a158-3a29b6e1702d) answers questions about the future with a language model and a published forecasting track record.[^9] This site holds that a forecast should come from a model of the system and disagrees with taking one from a model of text. FutureSearch does show that people want to ask the future a question in plain words. The interface is secondary to the claim that tools which help ordinary people model the future of their homes have merit.

![A shared FutureSearch conversation: "what is a good place to move the family estate to for the year 2100", answered with inflation-adjusted value and uninhabitable days per candidate region, each with a probability range. A language model's forecast, not a model of any of the places.](/about/objections-futuresearch.jpg)

## "It is the wrong word"

Probably. "Digital twin" came from manufacturing and strictly means a live, sensor-fed replica of one thing. This site uses it as shorthand for models and simulations of places in general ([What is a digital twin?](/terms/digital-twin/)). The ecologists who wrote [Digital twins as a tool for ecosystem research](/articles/digital-twins-for-ecosystem-research/) concluded that the label matters less than the traits.

## "You can't validate it"

Partly true. A model that predicts many properties rests on many sub-models fitted to many sources, and there is no single test. There are partial ones. Run the model on a past event first ([Check it against what happened](/guides/check-it-against-what-happened/)). Compare inside with outside, as [Gohr and colleagues](/articles/gohr-biosphere-reserves-ecosystem-functions/) did for 119 reserves. Run an ensemble, since the [GeoMIP](/data-sources/geomip/) models disagree with each other region by region and a single run hides that. State in writing what the model is for, so that it is allowed to be wrong about the rest.

## "The data will disappear"

It does. FEMA's [National Risk Index](/data-sources/fema-national-risk-index/) closed in December 2025. NASA Earth Observations was decommissioned in September 2026. A twin built on a feed depends on whoever funds the feed. [Keep it alive](/guides/keep-it-alive/) says a model that lives on needs an owner, a feed, a check and a budget, in writing. The Dangermond team advise foundations before features, and their groundwater monitoring alone costs $16,000 a year.[^5]

## "The people who know the land will not trust you with what they know"

This objection is right. Indigenous communities and others tied to a place do not trust platforms whose owners hold contracts with oil, mining and industry. The company that holds the data can disclose it. Knowledge of a sacred site or a hunting ground, put into such a system, is knowledge the extractive industries on the same client list would pay for. The fear is of betrayal by whoever holds the data, and it is well founded. As a society we do not yet understand the grey space between private and public, and a data service of the kind proposed here sits in that space.

It follows that people must be able to run their own models without sharing their data. Most of the engines on this site allow it: they are desktop or open-source software that computes on whatever is on the machine and sends nothing anywhere. The model of a place can belong to the people of the place, with the knowledge held where they hold it. The CARE principles for Indigenous data governance are collective benefit, authority to control, responsibility and ethics. They were written because "mainstream values related to research and data are often inconsistent with Indigenous cultures and collective rights".[^13] Authority to control is the one a model builder has to design for first. The First Nations principles of OCAP, ownership, control, access and possession, were set in 1998 by the steering committee of a First Nations health survey in Canada, and go one step further. Ownership is the relationship of a people to its knowledge and possession is "the physical control of data", which the First Nations Information Governance Centre calls "the mechanism by which ownership can be asserted and protected."[^14] A model that runs on the community's own machine, on data that never leaves, is the technical form of that principle. [Protect people's privacy](/guides/protect-people-s-privacy/) is the guide on what not to collect. A model of a place has to meet this condition to be worth building.

## "A language model will just make it up"

It will, if asked to. A language model can be the interface, the planner, or a character in an agent-based model ([Generative Agents](/engines/generative-agents/), [Concordia](/engines/concordia/)). The water, the heat, the money and the population are computed step by step from rules that can be read.

## "Everything is fine. There is nothing to model."

A science tool does not need a crisis. Rivers were modelled before anyone worried about the climate, because a town wanted to know where the water goes.

The measurements also disagree with the objection. The [IPCC](/organizations/ipcc/)'s assessments set out knock-on effects of carbon dioxide across water, food, heat and the sea. The annual [state of the climate report](/articles/2026-state-of-the-climate-report/) had seven of sixteen planetary vital signs at record extremes in 2026, and the [vitals](/vitals/) page shows the current measurements.

Set the measurements aside, and suppose that models never change how people think and a town votes the same way with the floodplain on the wall. The models are still worth having for what they make visible. There is at present no good public account of the knock-on effects of decisions made at scale: the terminal on the estuary, the dam on the salmon, the well field on the aquifer. A cost that nobody else can see is easier to pass on. A company that can see what its decision does to a coast, when nobody else can, has reason to keep it that way. An open model of the place lets everyone else see it.

## "We just need a better relationship with nature"

Commune better, respect the earth, make peace with the planet. The aspiration is sound. The expectation that it arrives on its own, as a satori, a morning on which everyone wakes up and treats the earth better, is magical thinking. People are hungry and have local needs, and it is hard to get anyone to value not doing something, or to prefer a slower reward to the one in front of them. A fisherman who throws dynamite into a reef gets a harvest today and takes the reef away for years. Showing him the downstream picture might change what he does, and might not. Some people will exploit any system that lets them.

Models work with people as they are. They need only that people can see the account. In Elinor Ostrom's studies of fisheries, pastures and irrigation, the commons that lasted did so on rules, on monitoring answerable to the users, and on a shared account of the fish, the grass or the water ([Questions people ask](/about/faq/) has the longer version). Bali's water temples coordinated planting across a watershed, and [Lansing and Kremer's model](/articles/lansing-kremer-balinese-water-temple-networks/) showed that their schedules gave the best harvests. The proposal is to make the consequences visible to the people who have to live with them and leave the decision to them.

A more charitable reading of the objection is the one this site holds. Much of what societies are moving towards, in energy, in land, in the sea, is informed by planetary science and by observation of the world. Where a better relationship is forming, it is forming on evidence. A model of a place is one more lens for that: a way to inquire critically into the systems we live in, and to hold a community's discussion about how to respond. Tools of this kind come before the awareness. They may be part of what sparks the civic awareness and the social movements that protecting the world will take.

## "No." (And then nothing.)

The commonest objection is a list of reasons the idea will not work, with no idea in its place. The problem the models are for remains when the models are refused. A town still has to decide about the terminal, the dam, the burn, the zoning. A coast still has to choose where to hold the line. Without a model those decisions are made by whoever holds the only one, or with none. The alternatives are to keep deciding by rhetoric and incumbency, to trust a vendor's product, to wait for a national laboratory to take up the watershed, or to build the model in the open, badly at first, and check it against what happens. A fifth alternative would be a contribution, and the [contributors](/about/contributors/) page is where it goes.
