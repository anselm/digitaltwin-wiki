# Digital Twins: A Survey

*Cities, infrastructure, populations and ecosystems · September 2026*

Advances in computation, geographic data and AI are expanding what we can simulate—and who can use the results. Transport planners can test road closures. Utilities can examine how electric vehicles and heat pumps will change demand. Fire agencies can estimate where a wildfire will spread. Communities can explore competing proposals for the places they live.

The digital-twin industry is growing around these applications: models of real places and systems, supplied with data from the world they represent. This survey asks who uses them, which engines and platforms underpin them, what they can do today, and how far they have progressed toward whole systems modeling. A further frontier is coming into view: using models to discover ways of living and producing within ecological systems whose interactions exceed our unaided ability to reason about them.

![Photogrammetric 3D model of central London showing buildings, streets, bridges and the River Thames.](https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Photogrammetry_3D_city_model_of_London.jpg/1280px-Photogrammetry_3D_city_model_of_London.jpg)

*A photogrammetric model of London: buildings, streets and terrain provide the spatial setting into which data and simulations can be integrated.*

Credit: AccuCities. [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [Source](https://commons.wikimedia.org/wiki/File:Photogrammetry_3D_city_model_of_London.jpg).

## What is a digital twin?

A [digital twin](https://www.gov.uk/government/publications/digital-twin-definition/digital-twin-official) is a computational representation of a real object, place or system, linked to information about its real-world counterpart. The connection allows the model to be updated as conditions change and used to explore what might happen next—or what would happen if something were changed. The update interval depends on the application: traffic signals and long-term housing plans operate on different clocks. [1]

A traffic twin, for example, combines a road network with traffic counts, signal timings and vehicle movements. It can help an operator respond to congestion or let a planner experiment with a different junction layout. [Tees Valley's traffic twin](https://teesvalley-ca.gov.uk/news/cutting-edge-technology-set-to-slash-wait-times-and-boost-bus-reliability-across-our-region/), developed with [Aimsun](https://www.aimsun.com/aimsun-live/), is already used at its traffic management centre to identify delayed buses and support changes to signal operation. [2] [3]

The wider simulation field includes the design of individual machines and operator training—for example, learning to control a tree harvester safely. The focus here is **large-scale systems with public consequences**: cities and regions, electricity and water networks, transport and crowds, watersheds and ecosystems. Their users include corporations, governments and citizens, often with different interests in the same place.

There are several names for this part of the field. **[Urban and territorial digital twins](https://interoperable-europe.ec.europa.eu/collection/rolling-plan-ict-standardisation/smart-and-sustainable-cities-and-communities-rp2024)** describe models organized around places. **Infrastructure twins** describe networks and assets. **[Cyber-physical-social systems](https://pursuit.unimelb.edu.au/articles/creating-digital-twins-to-save-our-cities)** explicitly include people and their behavior. **Multiscale** describes models that connect levels of detail, such as individual households and a regional electricity grid. These terms overlap; the survey uses the plain description “large-scale digital twins” rather than treating any one of them as a universal category. [4] [5]

## Who uses them, and for what?

![Ten domain symbols in distinct pastel colors: places, movement, energy, water, food, living systems, climate, people, fire and sensory landscape.](https://digital-twins-survey.anselm52491.chatgpt.site/assets/digital-twins-visual-key.svg)

[Visual vocabulary, candidate symbols and icon credits](https://digital-twins-survey.anselm52491.chatgpt.site/visual-language/).

| Use | A concrete question | Systems and examples |
|---|---|---|
| Traffic and public transport | Where will vehicles go after a closure, and can signal changes help a late bus? | [Aimsun](https://www.aimsun.com/aimsun-live/); [Tees Valley's operational traffic twin](https://teesvalley-ca.gov.uk/news/cutting-edge-technology-set-to-slash-wait-times-and-boost-bus-reliability-across-our-region/); [SUMO](https://eclipse.dev/sumo/) and [MATSim](https://matsim.org/) modeling engines. [2] [6] [7] [3] |
| Crowds and evacuation | How will people move through a station or leave an area during an emergency? | [AnyLogic](https://www.anylogic.com/) pedestrian models; [GAMA](https://gama-platform.org/wiki/Home) evacuation models. [8] [9] |
| Electricity and energy transitions | Where will electrification require more network capacity, storage or generation? | [Neara](https://neara.com/our-platform/); [PyPSA](https://pypsa.org/); the [UK NDTP](https://www.gov.uk/government/collections/the-national-digital-twin-programme-ndtp)'s [Isle of Wight energy demonstrator](https://www.gov.uk/government/case-studies/energy-system-national-digital-twin-programme-ndtp). [10] [11] [12] |
| Flooding, rivers and water services | Which areas will flood, and how will changes to rivers, drainage or pumps affect them? | [Deltares Delft3D](https://www.deltares.nl/en/software-and-data/products/delft3d-flexible-mesh-suite); [DHI](https://www.dhigroup.com/sg/technologies/dhi-cityflow-live-treatment-plant); [Xylem Vue](https://www.xylem.com/en-us/resources/webinars/xylem-vue-from-data-to-action/). [13] [14] [15] |
| Wildfire and exposure | Where might a fire spread, which assets are exposed, and where would mitigation help? | [Technosylva](https://technosylva.com/)'s operational and planning tools for utilities and fire agencies. [16] |
| Housing and land use | How might zoning or transport investment change development and household location? | [UrbanSim](https://cloud.urbansim.com/docs/general/documentation/urbansim.html); [Urbanly CityCompass](https://urbanly.org/platform/). [17] [18] [19] |
| Ecosystems and land management | How might land-use changes affect water, habitat, carbon or agricultural production? | [InVEST](https://naturalcapitalalliance.stanford.edu/software), [DSSAT](https://dssat.net/about/) and [GCAM](https://jgcri.github.io/gcam-doc/overview.html) supply models for these questions; [Earth Index](https://www.earthgenome.org/earth-index) helps map environmental features. [20] [21] [22] [23] |
| Weather and climate | What conditions are likely next week, and how might a region's climate change over decades? | [WeatherNext](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-weathernext-3/), [NVIDIA Earth-2](https://blogs.nvidia.com/blog/nvidia-earth-2-open-models/) and [Destination Earth](https://www.ecmwf.int/en/about/media-centre/news/2026/destination-earth-moves-its-third-phase). [24] [25] [26] |
| Sensory landscape | How do sound, light, smell and barriers affect people and other animals? | [Walk Score](https://www.walkscore.com/how-it-works/) for walkability; [CadnaA](https://www.datakustik.com/products/cadnaa/cadnaa) for noise; [Radiance](https://www.radiance-online.org/about/detailed-description.html) for light; [GRAL](https://gral.tugraz.at/features.html) for odor dispersion; [Circuitscape](https://circuitscape.org/) for habitat connectivity. Components of a possible coupled model. |
| Public discussion and learning | What changes when we combine different climate policies or land-use proposals? | [En-ROADS](https://www.climateinteractive.org/en-roads/); [Geodesignhub](https://www.geodesignhub.com/); public city-model and planning interfaces. [27] [28] [29] |

This includes both operating twins and the simulation engines or data services used to build them. A general crop model, a traffic engine and a maintained twin of a particular region are different products, but all belong in an account of how these systems are assembled.

The audiences are visible in the applications. A utility wants to keep service running and choose investments. A local authority wants to compare transport, housing and environmental proposals. Residents may want to inspect a proposed road, explore an alternative, or understand which neighborhoods benefit. The same underlying model can support all three, provided each has an interface suited to its task.

![SUMO traffic simulation with a street network, a close view of an individual vehicle, and a graph of vehicle speed.](https://upload.wikimedia.org/wikipedia/commons/1/1e/Eclipse_SUMO%2C_screenshot_showing_two_microscopic_views_in_SUMO_version_1.6.0.png)

*Eclipse SUMO, version 1.6.0 (2020). The same simulation can be inspected at network scale and at the level of an individual vehicle.*

Credit: Oabanse. [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [Source](https://commons.wikimedia.org/wiki/File:Eclipse_SUMO,_screenshot_showing_two_microscopic_views_in_SUMO_version_1.6.0.png).

## The engines and platforms

The software market divides into geographic platforms, simulation engines and applications built for particular domains.

**[Esri](https://www.esri.com/en-us/digital-twin/overview) and [Bentley](https://www.itwinjs.org/) are central reference points for the geographic and infrastructure layer.** [ArcGIS](https://www.esri.com/en-us/digital-twin/overview) organizes maps, spatial analysis and related data; [Bentley iTwin](https://www.itwinjs.org/) integrates engineering and infrastructure information. [Dassault Systèmes](https://www.3ds.com/insights/customer-stories/virtual-singapore) supplied the platform used for [Virtual Singapore](https://www.tech.gov.sg/technews/5-things-to-know-about-virtual-singapore/). These systems can give different teams a common representation of a place, its buildings and its assets. [30] [31] [32]

**Simulation engines supply the behavior.** [AnyLogic](https://www.anylogic.com/) supports agent-based, discrete-event and system-dynamics models. [GAMA](https://gama-platform.org/wiki/Home) combines spatial data and agent-based modeling. [MATSim](https://matsim.org/) models the travel choices and movements of many agents across transport networks; [SUMO](https://eclipse.dev/sumo/) simulates vehicles, public transport and pedestrians. [PyPSA](https://pypsa.org/) provides power and energy-system modeling. [Deltares](https://www.deltares.nl/en/software-and-data/products/delft3d-flexible-mesh-suite) and [DHI](https://www.dhigroup.com/sg/technologies/dhi-cityflow-live-treatment-plant) supply water-modeling tools. A city project may use several of these engines. [14] [8] [9] [6] [7] [12] [15]

**Specialist platforms package models around a job.** [Aimsun](https://www.aimsun.com/aimsun-live/) serves transport planners and traffic operators. [Neara](https://neara.com/our-platform/) serves electricity networks. [Urbanly](https://urbanly.org/platform/) and [UrbanSim](https://cloud.urbansim.com/docs/general/documentation/urbansim.html) address development and land use. [Technosylva](https://technosylva.com/) combines fire-spread modeling, weather and asset information for wildfire operations and mitigation. These are often the products a buyer encounters before encountering the underlying mathematics. [10] [2] [17] [19] [16]

“Which engine?” is therefore partly a question about the model: roads, electrical networks and household decisions behave differently. The larger platform choice also concerns the data, interfaces and integrations a project needs. Appendix A separates those roles and lists representative systems.

## What computation and AI are changing

Weather forecasting provides a concrete example. [WeatherNext 3](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-weathernext-3/) uses satellite observations and training on weather-station measurements to produce hourly forecast updates, reaching five-kilometer resolution for selected variables. Results are distributed through data services and Google's products. That combination makes a computationally demanding model available to people who will never run the model themselves. [24] [33]

[Earth Genome](https://www.earthgenome.org/) reduces a different barrier. Its [Earth Index](https://www.earthgenome.org/earth-index) application lets a user label examples of a feature in satellite imagery, search for similar locations, inspect the results and export a map. Applications include locating mining activity and livestock facilities. In a [September 2026 study](https://www.earthgenome.org/blog/two-foundation-models-are-better-than-one), the team combined [SSL4EO](https://www.earthgenome.org/blog/two-foundation-models-are-better-than-one) and [AlphaEarth](https://deepmind.google/blog/alphaearth-foundations-helps-map-our-planet-in-unprecedented-detail/) representations to improve cattle-facility detection. Reusable geospatial models are becoming ingredients in practical environmental investigations. [20] [34] [35]

![A national crop-type map of Czechia, with agricultural areas colored by crop class over satellite imagery.](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Czech_Agriculture_from_Space_ESA360858.jpg/1280px-Czech_Agriculture_from_Space_ESA360858.jpg)

*A national crop-type map of Czechia assembled from 2015 Sentinel and Landsat observations. Such classification turns imagery into data that agricultural and land-use models can consume.*

Credit: ESA / DUE Sentinel-2 for Agriculture project; contains modified Copernicus Sentinel data (2015). [CC BY-SA 3.0 IGO](https://creativecommons.org/licenses/by-sa/3.0/igo/) · [Source](https://commons.wikimedia.org/wiki/File:Czech_Agriculture_from_Space_ESA360858.jpg).

[Urbanly](https://urbanly.org/platform/) adds a [conversational interface](https://urbanly.org/ai/) to urban simulation: the assistant helps set up and run experiments, while the simulation engine produces the numerical results. This changes how a planner can work with a model. It does not require the planner to build each experiment through code or a specialist modeling interface. [36]

These developments affect different costs: producing forecasts, extracting information from imagery, and setting up experiments. Together they make richer models available through ordinary data services and browser tools. Local data preparation and model calibration still account for work that a new interface cannot automatically eliminate.

## Are there whole systems models yet?

There are already models that connect several domains. They differ in what they connect and how much detail they retain.

**[GCAM](https://jgcri.github.io/gcam-doc/overview.html) connects energy, water, agriculture and land, the economy, and climate.** It can examine, for example, how a change in energy policy alters land and water demand. Developed over decades, it represents a substantial whole systems tradition that predates current digital-twin branding. Its purpose is to explore regional and global scenarios, rather than reproduce every building or household. [21]

**[PyPSA-Eur](https://pypsa-eur.readthedocs.io/en/stable/index.html) connects electricity to transport, buildings and industry.** It can examine how an energy transition changes generation, networks, storage and demand across sectors. It is an open energy-system model, not a live operational twin of every connected asset. [37]

![PyPSA-Eur map of European electricity networks with transmission lines and generation capacity by technology.](https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/European_power_system_infrastructure.png/1280px-European_power_system_infrastructure.png)

*European electricity infrastructure represented in PyPSA-Eur (2022). Transmission links and generation technologies form the network on which energy scenarios are calculated.*

Credit: Fabian Hofmann. [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · [Source](https://commons.wikimedia.org/wiki/File:European_power_system_infrastructure.png).

**Urban models connect people and development.** [UrbanSim](https://cloud.urbansim.com/docs/general/documentation/urbansim.html) represents location choice and urban growth, with connections to transport modeling. [Urbanly](https://urbanly.org/platform/) publishes [comparisons between simulated and recorded housing development](https://urbanly.org/evidence/) in parts of Los Angeles and New York. These models can address interactions that a geometric city model alone cannot: where households locate, what gets built, and how development responds to the modeled rules. [17] [18]

**Connected infrastructure models address cascading failures.** [CReDO](https://cp.catapult.org.uk/report/credo-for-transport-value-propositions-for-holistic-systems-resilience/) examines climate hazards and dependencies between networks. A flooded electricity asset can affect water pumping or communications, so the consequence extends beyond the damaged asset. Its September 2026 [MVP showcase](https://cp.catapult.org.uk/event/mvp-launch-webinar/) presents this approach to resilience planning; a final platform release is planned for 2028. [38] [39]

Whole systems modeling therefore exists in several forms: integrated models, linked domain models, and applications combining common data with specialist simulations. A comprehensive, routinely updated model of a city's physical, ecological, economic and social behavior remains a much larger undertaking. The examples above solve portions of that problem at different scales.

## National and territorial twins

[Virtual Singapore](https://www.tech.gov.sg/technews/5-things-to-know-about-virtual-singapore/) made the national-scale ambition visible: a shared 3D representation containing information about buildings, terrain and the city around them. [GovTech's description](https://www.tech.gov.sg/technews/5-things-to-know-about-virtual-singapore/) illustrated uses such as assessing rooftop solar potential, flooding, wind and urban heat. [Singapore's current geospatial programs](https://geospatial.sla.gov.sg/geospatial-for-good/sustainability-use-cases/) continue to support applications including flood-risk assessment and solar-energy analysis. [40] [41]

The [UK National Digital Twin Programme](https://www.gov.uk/government/collections/the-national-digital-twin-programme-ndtp) takes a broader infrastructure approach. Its published Isle of Wight demonstrators include electricity, [housing retrofit](https://www.gov.uk/government/case-studies/retrofitting-in-housing-national-digital-twin-programme-ndtp) and [emergency planning](https://www.gov.uk/government/case-studies/asset-resilience-emergency-planning-and-response-the-national-digital-twin-programme-ndtp). The [energy demonstrator](https://www.gov.uk/government/case-studies/energy-system-national-digital-twin-programme-ndtp) links network questions to electrification and renewable generation. The [housing example](https://www.gov.uk/government/case-studies/retrofitting-in-housing-national-digital-twin-programme-ndtp) brings together building characteristics, eligibility for retrofit funding and household vulnerability. Those examples show why social and policy information belongs alongside physical infrastructure. [11] [42] [43] [44]

These programs also expose the institutional scale of the task. A city's roads, electricity, water, land records and housing data are maintained by different organizations. Connecting their models requires agreements about sharing and updating that information, as well as software. [DAFNI](https://www.dafni.ac.uk/projects/) supplies research infrastructure for collaborative modeling; work such as [Wenwen Li's](https://search.asu.edu/profile/1978357) at ASU addresses the discovery and integration of distributed geospatial data. [45] [46]

## Making the models usable

Access already takes several forms. [Helsinki](https://www.hel.fi/en/decision-making/information-on-helsinki/maps-and-geospatial-data/helsinki-3d) publishes city-model data and a [browser-based energy atlas](https://www.hel.fi/en/decision-making/information-on-helsinki/maps-and-geospatial-data/helsinki-3d). [En-ROADS](https://www.climateinteractive.org/en-roads/) makes climate-policy scenarios available for public learning. [Geodesignhub](https://www.geodesignhub.com/) gives stakeholders a shared setting for developing and comparing spatial proposals. [Earth Index](https://www.earthgenome.org/earth-index) puts environmental mapping tools in the hands of investigators. [20] [27] [28] [29]

![En-ROADS interface with policy sliders, energy and emissions graphs, and a temperature result for an example scenario.](https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9b/Overview_of_the_En-ROADS_Climate_Solutions_Simulator.webm/1280px--Overview_of_the_En-ROADS_Climate_Solutions_Simulator.webm.jpg)

*En-ROADS in a 2023 demonstration: policy controls sit alongside energy, emissions and temperature results. The displayed numbers belong to the example scenario in that demonstration.*

Credit: Climate Interactive. [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) · [Source](https://commons.wikimedia.org/wiki/File:Overview_of_the_En-ROADS_Climate_Solutions_Simulator.webm). Video preview still.

A public planning interface could let someone move a proposed cycle route, compare traffic changes, and share the alternative with a council. Delivering that experience requires more than exposing an expert application's controls: the scenario must load quickly, the choices must be understandable, and the results must identify what changed. Whether residents can simply view a model or actually propose alternatives is an important product distinction.

The full stack runs from satellite imagery, sensors and administrative records through geographic data, simulation engines and linked models to the interface where somebody uses the result. A working application also needs a team to maintain those connections as roads, assets, populations and data sources change.

The industry has established suppliers for geography, transport, water and energy, alongside newer companies building environmental search, urban simulation and AI interfaces. Reusable connections between these tools would let more cities and watersheds draw on this accumulated modeling work.

## Modeling beyond human intuition

The applications above often start with systems we have made explicit: a road network, an electricity grid, a zoning code, and a known set of controls. A more consequential frontier concerns systems whose organization is largely implicit. Climate, soils, water, organisms and human activity influence one another through relationships that we have only partly observed or formalized. [Timothy Morton's](https://www.upress.umn.edu/9780816689231/hyperobjects/) term **[hyperobjects](https://www.upress.umn.edu/9780816689231/hyperobjects/)** captures a related difficulty: phenomena distributed across so much space and time that we cannot encounter them as a comprehensible whole. [47]

Working with these systems means discovering more of their structure as we go. A useful model could help reveal a relationship we had overlooked, suggest an intervention we would not have considered, and identify an observation that would tell us whether it works. This extends the purpose of a twin from operating a system whose controls we understand to exploring possibilities within a system we are still learning to describe.

Agriculture makes the opportunity tangible. Uniform crops, standardized inputs and repeatable operations make production easier to organize. Machinery, labor, markets and policy all help explain that pattern. There is also a cost to managing ecological complexity: the best crop mixture for one soil, season and water regime may perform differently in another. Diversified farming already has a substantial history and evidence base. A [2020 synthesis](https://pmc.ncbi.nlm.nih.gov/articles/PMC7673676/) found that diversification improved several ecosystem services and biodiversity without an average crop-yield penalty, although outcomes varied. Machine learning could extend farmers' and ecologists' ability to work with that diversity. [48]

Imagine planning a productive watershed as a changing mosaic of crops, grazing, trees, wetlands and habitat. A model could search combinations of planting, rotation, irrigation and restoration that would be impractical to compare by hand. The question becomes: which arrangements sustain food production and livelihoods while improving soil, water and biodiversity? This is a search through a **fitness landscape** with several objectives, delayed effects and changing conditions. There may be many useful sweet spots, and a gain in one outcome can come at another's expense.

![Conceptual connections among energy, water, food and living systems: pumping, generation, irrigation, runoff, pollination, land use and water retention.](https://digital-twins-survey.anselm52491.chatgpt.site/assets/digital-twins-landscape.svg)

*Selected relationships a coupled model could examine. Arrows indicate influences, not measured flows. Icon credits are embedded in the figure.*

In his essay [Natural General Intelligence](https://naturalgeneralintelligence.ai/), Ryan Orbuch proposes a nature model that learns environmental state and dynamics across connected Earth systems, anticipates responses to intervention and helps decide what to measure next. It is a written proposal for a direction of research. The compelling idea is that greater intelligence could reveal opportunities to improve living systems that we have not yet recognized—or even known how to ask about. [49]

Fei-Fei Li's [World Labs](https://www.worldlabs.ai/blog/atlas) approaches world modeling through spatial intelligence. Its September 2026 [Atlas](https://www.worldlabs.ai/blog/atlas) announcement demonstrates scene reconstruction, generation and workflows for robotics simulation. AMD's agreement to acquire [World Labs](https://www.worldlabs.ai/blog/atlas) for approximately **US$8.2 billion**, reported by [The Standard](https://www.thestandard.com.hk/innovation/article/344091/AMD-to-buy-Fei-Fei-Lis-World-Labs-in-US82-billion-bet-on-physical-AI) and confirmed in [AMD's filing](https://ir.amd.com/financial-information/sec-filings/content/0000002488-26-000182/amd-20260926.htm), shows the scale of investment entering this adjacent field. These developments suggest more of a model's structure can be learned from observations. Extending that capability to ecological responses over seasons and decades remains an open research challenge. [50] [51] [52]

Human intuition and machine reasoning would have complementary roles. Farmers, scientists and communities contribute experience, goals and constraints. Models propose combinations, estimate their consequences and identify where uncertainty changes the decision. Field trials and continued observation reveal which predictions survive contact with a particular place. The result could be a growing capacity to act intelligently within systems that remain too complex for any one person to understand in full. Appendix F follows this loop through the stack.

The goal is to leave a landscape with greater capacity to support life: healthier soils, more habitat, cleaner water and durable livelihoods. Carbon-negative activity belongs in that ambition, with emissions and removals considered across the whole activity rather than only within a field boundary. Living systems already regenerate many of the conditions on which production depends. Whole systems models could help us strengthen that regenerative capacity—and make its improvement an explicit measure of success.

---

## Appendix A — Engines, platforms and applications

The table distinguishes software used to build models from applications and public programs. The examples are grouped by function, not ranked by adoption or market share.

| Domain | System and form | What it does | Audiences and access |
|---|---|---|---|
| Geographic platforms | **[Esri ArcGIS](https://www.esri.com/en-us/digital-twin/overview)** — Commercial platform [32] | Maps, spatial analysis and geographic data for city and infrastructure applications. | Government, Corporate, Research. Used as the geographic foundation of larger twin applications. |
| Geographic platforms | **[Bentley iTwin](https://www.itwinjs.org/)** — Platform and SDK [30] | Integrates infrastructure engineering, geographic, reality and sensor data. | Government, Corporate. [iTwin.js](https://www.itwinjs.org/) provides an open SDK for building applications. |
| Geographic platforms | **[Dassault](https://www.3ds.com/insights/customer-stories/virtual-singapore) / [Virtual Singapore](https://www.tech.gov.sg/technews/5-things-to-know-about-virtual-singapore/)** — Platform and national project [31] [41] | A shared 3D city representation with associated data and simulation applications. | Government, Corporate, Research. [Virtual Singapore](https://www.tech.gov.sg/technews/5-things-to-know-about-virtual-singapore/) is a prominent application of [Dassault](https://www.3ds.com/insights/customer-stories/virtual-singapore)’s city platform. |
| Simulation engines | **[AnyLogic](https://www.anylogic.com/)** — Commercial modeling environment [8] | Agent-based, discrete-event and system-dynamics modeling; pedestrian and transport libraries. | Corporate, Government, Research. Custom models for operations, movement and human behavior. |
| Simulation engines | **[GAMA](https://gama-platform.org/wiki/Home)** — Open modeling platform [9] | Spatial agent-based models for urban mobility, evacuation, environmental and other applications. | Research, Government. Model construction and experimentation using geographic data. |
| Transport and crowds | **[MATSim](https://matsim.org/)** — Open simulation framework [6] | Large-scale agent-based transport modeling, including travel demand and replanning. | Research, Government, Corporate. A toolkit for building regional transport scenarios. |
| Transport and crowds | **[Eclipse SUMO](https://eclipse.dev/sumo/)** — Open simulation engine [7] | Simulates road vehicles, public transport and pedestrians on large networks. | Research, Government, Corporate. Supports detailed traffic and multimodal scenarios. |
| Transport and crowds | **[Aimsun](https://www.aimsun.com/aimsun-live/)** — Commercial simulation platform [2] [3] | Transport simulation and operational traffic prediction. | Government, Corporate. [Aimsun Live](https://www.aimsun.com/aimsun-live/) supports [Tees Valley’s traffic digital twin](https://teesvalley-ca.gov.uk/news/cutting-edge-technology-set-to-slash-wait-times-and-boost-bus-reliability-across-our-region/). |
| Transport and crowds | **[Replica](https://documentation.replicahq.com/docs/scenario-model-methodology)** — Data and scenario platform [53] | Modeled travel activity and scenario tools for transport and regional planning. | Government, Corporate. Supplies activity patterns and analysis through a web application and data products. |
| Energy and utilities | **[Neara](https://neara.com/our-platform/)** — Commercial infrastructure platform [10] | Models electricity-network geometry and physical behavior using asset and spatial data. | Corporate, Government. Supports network planning, risk assessment and operational decisions. |
| Energy and utilities | **[PyPSA](https://pypsa.org/) / [PyPSA-Eur](https://pypsa-eur.readthedocs.io/en/stable/index.html)** — Open energy-system models [12] [37] | Models power systems and energy transitions; [PyPSA-Eur](https://pypsa-eur.readthedocs.io/en/stable/index.html) also represents transport, buildings and industry. | Research, Government, Corporate. Used for scenarios and optimization across energy sectors. |
| Energy and utilities | **[IES](https://www.iesve.com/digital-twins)** — Commercial modeling platform [54] | Building and district energy modeling, performance analysis and retrofit scenarios. | Corporate, Government. Connects building data with energy and decarbonization workflows. |
| Water and flooding | **[Deltares Delft3D](https://www.deltares.nl/en/software-and-data/products/delft3d-flexible-mesh-suite)** — Modeling suite [15] | Models coastal, estuarine and river systems, including water flow and related processes. | Government, Research, Corporate. Domain engines for water and environmental applications. |
| Water and flooding | **[DHI](https://www.dhigroup.com/sg/technologies/dhi-cityflow-live-treatment-plant)** — Water-modeling applications [14] | Combines water-system modeling with operational data, including wastewater treatment twins. | Corporate, Government. [CityFlow Live Treatment Plant](https://www.dhigroup.com/sg/technologies/dhi-cityflow-live-treatment-plant) was previously called [TwinPlant](https://www.dhigroup.com/sg/technologies/dhi-cityflow-live-treatment-plant). |
| Water and flooding | **[Xylem Vue](https://www.xylem.com/en-us/resources/webinars/xylem-vue-from-data-to-action/)** — Operational platform [13] | Combines utility data and water-system modeling for network operations. | Corporate, Government. [Brabant Water](https://www.xylem.com/en-us/resources/webinars/xylem-vue-from-data-to-action/) describes its use in developing a distribution-network twin. |
| Wildfire and risk | **[Technosylva](https://technosylva.com/)** — Operational and planning applications [16] | Models wildfire behavior and exposure for fire agencies and electric utilities. | Corporate, Government. Combines fire science, weather, terrain and asset information. |
| Wildfire and risk | **[Climate X](https://www.climate-x.com/spectra) / [UrbanFootprint](https://urbanfootprint.com/solutions/climate-risk-sustainability/)** — Risk and spatial analytics [55] [56] | Analyzes climate exposure, vulnerability and investment choices. | Corporate, Government. Decision applications drawing on hazard and geographic information. |
| Housing and urban form | **[UrbanSim](https://cloud.urbansim.com/docs/general/documentation/urbansim.html)** — Urban modeling platform [17] | Models location choice, development and urban growth, with transport-model integration. | Government, Research, Corporate. A research-derived engine for regional land-use scenarios. |
| Housing and urban form | **[Urbanly CityCompass](https://urbanly.org/platform/)** — Urban simulation application [18] [36] [19] | Explores linked urban scenarios using a simulation engine and browser interfaces. | Government, Corporate, Civic. Published housing backcasts and an [assistant for setting up experiments](https://urbanly.org/ai/). |
| Housing and urban form | **[VU.CITY](https://www.vu.city/) / [CLARA](https://www.clara.city/)** — Planning and environmental applications [57] [58] | [VU.CITY](https://www.vu.city/) supplies 3D planning context; [CLARA](https://www.clara.city/) models urban environmental conditions. | Government, Corporate. Related applications for development, wind, heat and place design. |
| Ecosystems and land | **[InVEST](https://naturalcapitalalliance.stanford.edu/software)** — Open ecosystem-service models [22] | Maps and values ecosystem services in terrestrial, freshwater, coastal and urban settings. | Government, Research, Civic, Corporate. A model suite for land-management and conservation analysis. |
| Ecosystems and land | **[DSSAT](https://dssat.net/about/)** — Crop-model suite [23] | Simulates crop growth under specified weather, soil and management conditions. | Research, Government, Corporate. Models agricultural responses to environmental and management changes. |
| Ecosystems and land | **[GCAM](https://jgcri.github.io/gcam-doc/overview.html)** — Integrated assessment model [21] | Connects energy, water, land, economy and climate in regional and global scenarios. | Research, Government. A long-running community modeling program. |
| Earth observation | **[Earth Genome](https://www.earthgenome.org/) / [Earth Index](https://www.earthgenome.org/earth-index)** — Nonprofit application and research [20] [35] | Finds environmental features in satellite imagery through examples, search and review. | Civic, Government, Research. Supports environmental mapping and investigation. |
| Earth observation | **[AlphaEarth](https://deepmind.google/blog/alphaearth-foundations-helps-map-our-planet-in-unprecedented-detail/) / [Prithvi](https://science.nasa.gov/science-research/ai-geospatial-model-earth/)** — Reusable data and models [34] [59] | Geospatial representations and foundation models for downstream mapping tasks. | Research, Corporate, Government. Building blocks used within more specialized applications. |
| Weather and climate | **[WeatherNext](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-weathernext-3/) / [NVIDIA Earth-2](https://blogs.nvidia.com/blog/nvidia-earth-2-open-models/)** — Forecast models and services [24] [33] [26] | Weather prediction and supporting components, with different distribution and developer options. | Corporate, Government, Research. Inputs to weather-sensitive operations, risk and planning. |
| Weather and climate | **[Destination Earth](https://www.ecmwf.int/en/about/media-centre/news/2026/destination-earth-moves-its-third-phase)** — Public scientific program [25] | Climate and extremes twins with supporting computing and data workflows. | Government, Research, Corporate. ECMWF reports operationalization during the program’s second phase. |
| Connected infrastructure | **[CReDO](https://cp.catapult.org.uk/report/credo-for-transport-value-propositions-for-holistic-systems-resilience/)** — Cross-network resilience program [38] [39] | Models hazards and infrastructure dependencies to examine cascading impacts. | Government, Corporate. MVP showcased in September 2026; final platform release planned for 2028. |
| National and territorial | **[UK NDTP](https://www.gov.uk/government/collections/the-national-digital-twin-programme-ndtp)** — National program and demonstrators [11] [42] [43] [44] | Develops approaches for applying connected data and twins to public and infrastructure questions. | Government, Corporate, Research. Published cases cover island energy, [housing retrofit](https://www.gov.uk/government/case-studies/retrofitting-in-housing-national-digital-twin-programme-ndtp) and [emergency planning](https://www.gov.uk/government/case-studies/asset-resilience-emergency-planning-and-response-the-national-digital-twin-programme-ndtp). |
| National and territorial | **[Helsinki](https://www.hel.fi/en/decision-making/information-on-helsinki/maps-and-geospatial-data/helsinki-3d) / [Bologna](https://fondazioneinnovazioneurbana.it/en/project/bolognadigitaltwin)** — Municipal programs [29] [60] | [Helsinki](https://www.hel.fi/en/decision-making/information-on-helsinki/maps-and-geospatial-data/helsinki-3d) publishes city-model data and an energy atlas; [Bologna](https://fondazioneinnovazioneurbana.it/en/project/bolognadigitaltwin) is developing civic twin infrastructure. | Government, Civic, Research. Public spatial information, planning and cross-organizational work. |
| Research infrastructure | **[DAFNI](https://www.dafni.ac.uk/projects/) / [ASU CICI and SPARC](https://search.asu.edu/profile/1978357)** — Research infrastructure and methods [45] [61] [46] | [DAFNI](https://www.dafni.ac.uk/projects/) supports infrastructure modeling; [Wenwen Li](https://search.asu.edu/profile/1978357)’s research addresses GeoAI and geospatial integration. | Research, Government. Contribute data, compute, discovery methods and modeling research. |
| Public learning | **[En-ROADS](https://www.climateinteractive.org/en-roads/)** — Public climate scenario tool [27] | Explores combinations of climate policies and their modeled effects. | Civic, Government, Corporate. Free browser access and facilitated learning materials. |
| Public participation | **[Geodesignhub](https://www.geodesignhub.com/)** — Collaborative planning application [28] | Organizes spatial proposals, alternatives and stakeholder negotiation. | Civic, Government, Corporate. Supports facilitated planning with maps and associated information. |
| Assembly infrastructure | **[HELICS](https://docs.helics.org/en/latest/) / [FMI](https://fmi-standard.org/docs/main/)** — Co-simulation framework and standard [62] [63] | Coordinate model execution or exchange model information. | Research, Government, Corporate. Connect simulation components within larger applications. |
| Assembly infrastructure | **[Azure Digital Twins](https://learn.microsoft.com/en-us/azure/digital-twins/overview) / [AWS IoT TwinMaker](https://docs.aws.amazon.com/iot-twinmaker/latest/guide/what-is-twinmaker.html)** — Cloud application services [64] [65] | Represent entities and relationships and connect data within twin applications. | Corporate, Government. Application infrastructure to which domain models can be attached. |
| Research frontier | **[World Labs / Atlas](https://www.worldlabs.ai/blog/atlas)** — Spatial world model [52] [66] | Learns spatial representations for scene reconstruction, generation and robotics simulation. | Research, Corporate. Adjacent foundation-model work; ecological forecasting remains a separate research challenge. |


## Appendix B — From a question to a working twin

Consider a proposal to convert a traffic lane into a cycle lane. The transport model needs the road network, junctions, signal timings, public transport schedules and an estimate of travel demand. A scenario changes the available lanes and routes. The simulation estimates changes in traffic and journey times; other models may calculate emissions or accessibility. An interactive interface lets planners and residents compare proposals.

| Part of the stack | What it contributes in this example | Representative tools or inputs |
|---|---|---|
| Observations and records | Roads, trips, signal timings, counts, population and destinations | Traffic sensors; transport-agency records; census and local GIS data |
| Geographic representation | Aligns roads, parcels, stops and neighborhoods | [ArcGIS](https://www.esri.com/en-us/digital-twin/overview); infrastructure and city-model platforms |
| Simulation | Represents vehicles, travelers, routes and congestion | [Aimsun](https://www.aimsun.com/aimsun-live/); [MATSim](https://matsim.org/); [SUMO](https://eclipse.dev/sumo/) |
| Connected models | Relates transport changes to development, emissions or other outcomes | [UrbanSim](https://cloud.urbansim.com/docs/general/documentation/urbansim.html); domain-specific environmental models |
| Experiments | Runs alternatives such as different layouts, demand or travel behavior | Scenario tools and model orchestration |
| Public and professional interfaces | Displays proposed routes, comparisons and shareable results | Browser maps, planning applications and workshop tools |
| Continuing operation | Incorporates new road layouts and observations, and keeps models usable | Data pipelines, hosting and the team responsible for the application |

Connecting transport to housing is a larger undertaking than adding a new visual layer. A transport change may alter where households want to live; development then changes future travel demand. If both effects are represented, the models need to exchange information and reconcile their time steps and geography. [FMI](https://fmi-standard.org/docs/main/) and [HELICS](https://docs.helics.org/en/latest/) provide mechanisms for exchanging model information and coordinating simulations. The relationships between the modeled systems still have to be specified. [17] [62] [63]

### Data sources

| Source | Contribution |
|---|---|
| [Copernicus Data Space](https://dataspace.copernicus.eu/) | Satellite observations and Earth-observation processing. [67] |
| [USGS Water Data](https://waterdata.usgs.gov/) | Stream, groundwater and other water observations. [68] |
| [Census APIs](https://www.census.gov/data/developers/data-sets.html) | Demographic and socioeconomic datasets. [69] |
| Local and operational records | Parcels, zoning, permits, roads, utility assets, transit schedules and service events |
| Field and community observations | Conditions or changes missing from administrative and remote-sensing data |
| [STAC](https://stacspec.org/en/) and [OGC interfaces](https://www.ogc.org/standards/sensorthings/) | Ways to discover spatial assets and exchange geographic or sensor information. [70] [71] |

![Sentinel-2 image of rivers, agricultural plots and the coast of the Mekong Delta in Vietnam.](https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/The_Mekong_Delta%2C_Vietnam_%28Copernicus_2025-08-07%29.webp/1280px-The_Mekong_Delta%2C_Vietnam_%28Copernicus_2025-08-07%29.webp)

*The Mekong Delta observed by Sentinel-2 on 30 June 2025. Rivers, farms and coastal infrastructure share the same landscape; repeated observations provide inputs for water, land-use and ecosystem models.*

Credit: European Union; contains modified Copernicus Sentinel data 2025. [Copernicus reuse terms](https://commons.wikimedia.org/wiki/File:The_Mekong_Delta,_Vietnam_(Copernicus_2025-08-07).webp#Licensing) · [Source](https://commons.wikimedia.org/wiki/File:The_Mekong_Delta,_Vietnam_(Copernicus_2025-08-07).webp).

## Appendix C — What the capabilities amount to

| Capability | Example | What the result actually provides |
|---|---|---|
| Inspect a place | [Virtual Singapore](https://www.tech.gov.sg/technews/5-things-to-know-about-virtual-singapore/); [Helsinki 3D](https://www.hel.fi/en/decision-making/information-on-helsinki/maps-and-geospatial-data/helsinki-3d) | A shared spatial representation with associated data and analyses |
| Identify features | [Earth Index](https://www.earthgenome.org/earth-index) | Candidate locations of a specified feature in imagery, for review and mapping |
| Anticipate near-term conditions | [WeatherNext](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-weathernext-3/); [Aimsun Live](https://www.aimsun.com/aimsun-live/) | Weather or traffic estimates for a stated horizon |
| Compare an intervention | [Urbanly](https://urbanly.org/platform/); [PyPSA-Eur](https://pypsa-eur.readthedocs.io/en/stable/index.html); [GCAM](https://jgcri.github.io/gcam-doc/overview.html) | Outcomes conditional on modeled policy, technology or behavioral assumptions |
| Coordinate networks | [CReDO](https://cp.catapult.org.uk/report/credo-for-transport-value-propositions-for-holistic-systems-resilience/) | Consequences of dependencies between infrastructure systems |
| Explain choices | [En-ROADS](https://www.climateinteractive.org/en-roads/); [Geodesignhub](https://www.geodesignhub.com/) | Ways to explore policies, proposals and trade-offs with other people |

Published evaluations provide more specific examples. [Urbanly's housing backcasts](https://urbanly.org/evidence/) use 2011–2014 for calibration and compare 2015–2019 development with recorded outcomes in selected areas of Los Angeles and New York. [WeatherNext](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-weathernext-3/) reports forecasting performance by variable and lead time. [Earth Genome](https://www.earthgenome.org/)'s [cattle-facility study](https://www.earthgenome.org/blog/two-foundation-models-are-better-than-one) measures detection performance and explains a practical limit: a second-stage classifier cannot recover facilities the initial search missed. [24] [35] [18] [33]

### Access for different audiences

| Audience | Useful forms of access | Examples |
|---|---|---|
| Corporations and utilities | Operational integration, scenario runs, asset data and planning workflows | [Neara](https://neara.com/our-platform/); [Xylem](https://www.xylem.com/en-us/resources/webinars/xylem-vue-from-data-to-action/); [DHI](https://www.dhigroup.com/sg/technologies/dhi-cityflow-live-treatment-plant); [Technosylva](https://technosylva.com/) |
| Governments | Regional data, cross-agency models, planning interfaces and public explanation | [Virtual Singapore](https://www.tech.gov.sg/technews/5-things-to-know-about-virtual-singapore/); [NDTP](https://www.gov.uk/government/collections/the-national-digital-twin-programme-ndtp) demonstrators; [Helsinki](https://www.hel.fi/en/decision-making/information-on-helsinki/maps-and-geospatial-data/helsinki-3d); [Aimsun](https://www.aimsun.com/aimsun-live/) |
| Citizens, educators and civil society | Low-cost access, understandable controls, shareable alternatives and usable data | [En-ROADS](https://www.climateinteractive.org/en-roads/); [Geodesignhub](https://www.geodesignhub.com/); [Earth Index](https://www.earthgenome.org/earth-index) |
| Researchers and model builders | Code, datasets, APIs, compute and reproducible experiments | [GAMA](https://gama-platform.org/wiki/Home); [MATSim](https://matsim.org/); [SUMO](https://eclipse.dev/sumo/); [PyPSA](https://pypsa.org/); [DAFNI](https://www.dafni.ac.uk/projects/); ASU research |

These audiences overlap. Open code can support expert customization while remaining difficult for a non-programmer to use. A free browser application can reach a wide audience without allowing users to change its underlying model. Public access to a map and public participation in a decision are also different arrangements.

## Appendix D — Names and historical roots

| Term | What it emphasizes | Fit for this survey |
|---|---|---|
| Urban digital twin | A city or urban area | A substantial subset, but excludes many rural, ecological and national questions |
| [Territorial or local digital twin](https://interoperable-europe.ec.europa.eu/collection/rolling-plan-ict-standardisation/smart-and-sustainable-cities-and-communities-rp2024) | A place and the systems connected to it | A close established umbrella for cross-domain models of regions and communities. [4] |
| Infrastructure or national digital twin | Networks, assets and coordination across organizations | Electricity, water, transport and national programs |
| [Cyber-physical-social system](https://pursuit.unimelb.edu.au/articles/creating-digital-twins-to-save-our-cities) | Interactions between digital systems, the physical world and people | Useful when behavior, institutions and policy are explicitly represented. [5] |
| Multiscale digital twin | Connections between different levels of detail | Describes an architecture; it can apply to a machine as well as a region |
| Large-scale or “macro” digital twin | The extent of the system being represented | Readable descriptive language; not a claim to a single standardized product category |

Several traditions contribute to these systems. Engineering simulation supplies physical models and operational practice. System dynamics supplies stocks, flows and feedback; *[Limits to Growth](https://www.clubofrome.org/cor-themessageofltg/)* brought interacting environmental and economic scenarios to a wide audience in 1972. Agent-based modeling represents the decisions and interactions of households, travelers, firms and other actors. GIS supplies the geographic context in which those activities occur. Integrated assessment models such as [GCAM](https://jgcri.github.io/gcam-doc/overview.html) connect human and Earth systems. [72] [21] [73] [74]

The participatory side also has a history: [Engelbart's work on collective problem-solving](https://www.dougengelbart.org/press/archives/9908__/dougengelbart_phtml.html), public scenario tools such as [En-ROADS](https://www.climateinteractive.org/en-roads/), and collaborative planning environments such as [Geodesignhub](https://www.geodesignhub.com/). Today's browser interfaces and AI assistants extend this effort to make complex models usable beyond the team that built them. [27] [28] [75]

## Appendix E — Research directions

**Learned environmental representations.** [AlphaEarth](https://deepmind.google/blog/alphaearth-foundations-helps-map-our-planet-in-unprecedented-detail/) and [Prithvi](https://science.nasa.gov/science-research/ai-geospatial-model-earth/) provide reusable geospatial representations or models for tasks such as mapping and classification. [Earth Genome](https://www.earthgenome.org/) shows how these components can be combined with a task-specific workflow. [34] [59] [35]

**Nature models as a proposed direction.** Ryan Orbuch's [Natural General Intelligence](https://naturalgeneralintelligence.ai/) essay connects learning environmental dynamics with choosing the next useful observation. Turning that idea into a working ecological application would require evidence that models predict responses to changed management, including conditions outside their training experience. [49]

**Spatial world models.** [World Labs](https://www.worldlabs.ai/blog/atlas)' [Atlas](https://www.worldlabs.ai/blog/atlas) combines images, video and 3D information to reconstruct scenes and support simulation. These are useful building blocks for representing places and physical interactions. The gap to a nature model includes biological processes, hydrology, nutrient cycles and long-term responses to intervention; those capabilities are not established by the [Atlas](https://www.worldlabs.ai/blog/atlas) demonstrations. [World Labs](https://www.worldlabs.ai/blog/atlas) announced its [agreement to join AMD](https://www.worldlabs.ai/blog/amd-announcement) on September 28, 2026, with closing expected by year-end subject to approvals and other conditions. [52] [66]

**Urban behavior and coupling.** [Urbanly](https://urbanly.org/platform/), [UrbanSim](https://cloud.urbansim.com/docs/general/documentation/urbansim.html) and research platforms such as [GAMA](https://gama-platform.org/wiki/Home) address interactions among people, development and movement. Work on urban twins by [Goodchild](https://doi.org/10.1007/s44212-024-00048-6), [Wenwen Li](https://search.asu.edu/profile/1978357) and colleagues examines how geographic representation, uncertainty and the purpose of a model fit together. [17] [18] [61] [9]

**Shared public infrastructure.** [Destination Earth](https://www.ecmwf.int/en/about/media-centre/news/2026/destination-earth-moves-its-third-phase) and [DAFNI](https://www.dafni.ac.uk/projects/) provide computational and modeling infrastructure. National and territorial programs face the additional task of keeping multiple organizations' data and models connected over time. [25] [46] [44]

## Appendix F — A whole systems stack for stewardship

Consider a farming watershed where landholders want reliable production and income, healthier soils, less nutrient runoff and connected habitat. The following is an illustrative architecture for exploring that question, assembled from existing modeling capabilities and proposed research directions. It is not a description of a single available product.

| Part of the stack | What it would do in this watershed |
|---|---|
| Shared goals and local knowledge | Farmers, residents, ecologists and public agencies identify desirable outcomes, practical limits, land rights and interventions worth considering. |
| Observations | Combine satellite imagery with weather, stream flow, soil samples, species surveys, management records and field observations. Decide which missing measurements would most affect the choice. |
| Connected models | Link crop growth, soil and nutrient processes, hydrology, habitat and farm economics. [DSSAT](https://dssat.net/about/), [InVEST](https://naturalcapitalalliance.stanford.edu/software) and water-modeling tools cover parts of this problem; learned models could supply additional relationships or faster approximations. [22] [23] [15] |
| Search and experiments | Explore combinations of rotations, planting patterns, water management and restoration across several weather and price scenarios. Use the expensive simulations on the most promising or uncertain alternatives. |
| Human interpretation | Show proposed changes on a map, explain the expected mechanisms and expose disagreements between models. Let participants add alternatives that the search did not suggest. |
| Field learning | Trial selected changes, compare outcomes with expectations and update both the models and the management plan as the landscape changes. |

### What counts as a better outcome?

A useful interface would keep food production, livelihoods, water, biodiversity and net greenhouse-gas balance visible together. A single score can conceal an unacceptable loss: planting trees might increase carbon storage while damaging an existing grassland habitat. Participants need to see the alternatives and decide which trade-offs they will accept.

The search would therefore look for several promising arrangements under explicit constraints. This is **multi-objective optimization**: identifying options for which improving one objective requires giving up something elsewhere. The frontier changes with the model, the constraints and the conditions considered; a model's preferred arrangement is a candidate for investigation, not a discovered law of land use.

The agriculture evidence supports looking for joint gains, while showing why local testing matters. The [diversification synthesis](https://pmc.ncbi.nlm.nih.gov/articles/PMC7673676/) found average improvements in several services, but did not establish a universal climate benefit or a single best farming system. [48] A stewardship twin would help discover where a particular combination works, what sustains it and how neighboring places are affected.

## Appendix G — Sensory landscapes

A street can move cars efficiently while being difficult to cross on foot. A landscape can contain suitable habitat while separating the animals that need it. Here, **sensory landscape** brings together sound, light, smell and the barriers that shape how people and other animals inhabit a place. It is a proposed direction for connected twins, drawing on existing work in sensory ecology, access and habitat connectivity.

Some pieces already exist. [Walk Score](https://www.walkscore.com/how-it-works/) measures walkability; [Circuitscape](https://circuitscape.org/applications/) models landscape connectivity, including wildlife corridors. Noise, lighting and dispersion engines can estimate conditions at particular locations. Connecting these to species-specific responses and human experience could let a planning team compare a road crossing, a quieter flight route, a dark corridor or a different lighting schedule.

The consequences can extend beyond immediate discomfort. [Boyes and colleagues found fewer moth caterpillars beside lit hedgerows and grass margins than at matched unlit sites](https://pmc.ncbi.nlm.nih.gov/articles/PMC8386932/). [Van Doren and colleagues observed a high-intensity light installation disrupting migrating birds](https://pmc.ncbi.nlm.nih.gov/articles/PMC5651764/). [Serrano and Ochoa-Ochoa documented aircraft noise changing Pedregal frog calls and reducing chorus activity](https://link.springer.com/article/10.1007/s11252-023-01497-8).

[Bernie Krause’s account of a jet disrupting a frog chorus](https://patternwhichconnects.com/portfolio/repairing-the-silent-spring/) goes further: breaking the collective sound exposes individual callers to predators. That account is a useful illustration of a possible chain of effects; the Pedregal study measured vocal behavior, not increased predation. A coupled twin would need to test each link: disturbance, perception, behavior and ecological outcome.

## Sources

Sources were reviewed in September 2026. Product descriptions establish advertised functionality; case studies identify reported applications. Dates and project stages are retained where they affect what a system can currently be said to do.

[1]: https://www.gov.uk/government/publications/digital-twin-definition/digital-twin-official "UK government: digital twin definition, October 2025"
[2]: https://www.aimsun.com/aimsun-live/ "Aimsun Live: traffic simulation and management"
[3]: https://teesvalley-ca.gov.uk/news/cutting-edge-technology-set-to-slash-wait-times-and-boost-bus-reliability-across-our-region/ "Tees Valley Combined Authority: traffic twin in operation, August 2025"
[4]: https://interoperable-europe.ec.europa.eu/collection/rolling-plan-ict-standardisation/smart-and-sustainable-cities-and-communities-rp2024 "European Commission: territorial and sectorial digital twins"
[5]: https://pursuit.unimelb.edu.au/articles/creating-digital-twins-to-save-our-cities "Sabri, Winter and Rajabifard: Creating digital twins to save our cities"
[6]: https://matsim.org/ "MATSim: Multi-Agent Transport Simulation"
[7]: https://eclipse.dev/sumo/ "Eclipse SUMO: Simulation of Urban MObility"
[8]: https://www.anylogic.com/ "AnyLogic: simulation methods and libraries"
[9]: https://gama-platform.org/wiki/Home "GAMA: spatial agent-based modeling"
[10]: https://neara.com/our-platform/ "Neara: utility network platform"
[11]: https://www.gov.uk/government/case-studies/energy-system-national-digital-twin-programme-ndtp "UK NDTP: Isle of Wight energy demonstrator, October 2023"
[12]: https://pypsa.org/ "PyPSA: power and energy-system analysis"
[13]: https://www.xylem.com/en-us/resources/webinars/xylem-vue-from-data-to-action/ "Xylem: Brabant Water digital twin"
[14]: https://www.dhigroup.com/sg/technologies/dhi-cityflow-live-treatment-plant "DHI: CityFlow Live Treatment Plant, formerly TwinPlant"
[15]: https://www.deltares.nl/en/software-and-data/products/delft3d-flexible-mesh-suite "Deltares: Delft3D Flexible Mesh Suite"
[16]: https://technosylva.com/ "Technosylva: wildfire risk and operational applications"
[17]: https://cloud.urbansim.com/docs/general/documentation/urbansim.html "UrbanSim: model documentation"
[18]: https://urbanly.org/evidence/ "Urbanly: evidence and backcasts"
[19]: https://urbanly.org/platform/ "Urbanly: CityCompass platform"
[20]: https://www.earthgenome.org/earth-index "Earth Genome: Earth Index"
[21]: https://jgcri.github.io/gcam-doc/overview.html "GCAM: model overview and history"
[22]: https://naturalcapitalalliance.stanford.edu/software "Natural Capital Alliance: InVEST software and data"
[23]: https://dssat.net/about/ "DSSAT: crop modeling overview"
[24]: https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-weathernext-3/ "Google: introducing WeatherNext 3, 3 September 2026"
[25]: https://www.ecmwf.int/en/about/media-centre/news/2026/destination-earth-moves-its-third-phase "ECMWF: Destination Earth phase three, 30 June 2026"
[26]: https://blogs.nvidia.com/blog/nvidia-earth-2-open-models/ "NVIDIA: Earth-2 open weather models, January 2026"
[27]: https://www.climateinteractive.org/en-roads/ "Climate Interactive: En-ROADS"
[28]: https://www.geodesignhub.com/ "Geodesignhub: collaborative planning and negotiation"
[29]: https://www.hel.fi/en/decision-making/information-on-helsinki/maps-and-geospatial-data/helsinki-3d "City of Helsinki: Helsinki 3D and Energy and Climate Atlas"
[30]: https://www.itwinjs.org/ "Bentley: iTwin.js"
[31]: https://www.3ds.com/insights/customer-stories/virtual-singapore "Dassault Systèmes: Virtual Singapore"
[32]: https://www.esri.com/en-us/digital-twin/overview "Esri: digital twins and GIS"
[33]: https://arxiv.org/abs/2609.03582 "Rasp et al.: WeatherNext 3 preprint, September 2026"
[34]: https://deepmind.google/blog/alphaearth-foundations-helps-map-our-planet-in-unprecedented-detail/ "Google DeepMind: AlphaEarth Foundations, 30 July 2025"
[35]: https://www.earthgenome.org/blog/two-foundation-models-are-better-than-one "Earth Genome: Two Foundation Models Are Better Than One, 21 September 2026"
[36]: https://urbanly.org/ai/ "Urbanly: AI architecture"
[37]: https://pypsa-eur.readthedocs.io/en/stable/index.html "PyPSA-Eur: sector-coupled model"
[38]: https://cp.catapult.org.uk/event/mvp-launch-webinar/ "Connected Places Catapult: CReDO MVP showcase, 17 September 2026"
[39]: https://cp.catapult.org.uk/report/credo-for-transport-value-propositions-for-holistic-systems-resilience/ "Connected Places Catapult: CReDO transport resilience, 16 December 2025"
[40]: https://geospatial.sla.gov.sg/geospatial-for-good/sustainability-use-cases/ "Singapore Land Authority: sustainability use cases"
[41]: https://www.tech.gov.sg/technews/5-things-to-know-about-virtual-singapore/ "GovTech Singapore: Virtual Singapore, March 2017"
[42]: https://www.gov.uk/government/case-studies/retrofitting-in-housing-national-digital-twin-programme-ndtp "UK NDTP: housing retrofit demonstrator, October 2023"
[43]: https://www.gov.uk/government/case-studies/asset-resilience-emergency-planning-and-response-the-national-digital-twin-programme-ndtp "UK NDTP: asset resilience and emergency planning demonstrator"
[44]: https://www.gov.uk/government/collections/the-national-digital-twin-programme-ndtp "UK National Digital Twin Programme"
[45]: https://search.asu.edu/profile/1978357 "ASU: Wenwen Li research profile"
[46]: https://www.dafni.ac.uk/projects/ "DAFNI: infrastructure research projects"
[47]: https://www.upress.umn.edu/9780816689231/hyperobjects/ "Timothy Morton: Hyperobjects, University of Minnesota Press, 2013"
[48]: https://pmc.ncbi.nlm.nih.gov/articles/PMC7673676/ "Tamburini et al.: Agricultural diversification promotes multiple ecosystem services without compromising yield, Science Advances, 2020"
[49]: https://naturalgeneralintelligence.ai/ "Natural General Intelligence: nature-model research agenda"
[50]: https://www.thestandard.com.hk/innovation/article/344091/AMD-to-buy-Fei-Fei-Lis-World-Labs-in-US82-billion-bet-on-physical-AI "The Standard / Reuters: AMD to buy Fei-Fei Li’s World Labs, September 29, 2026"
[51]: https://ir.amd.com/financial-information/sec-filings/content/0000002488-26-000182/amd-20260926.htm "AMD: Form 8-K announcing the World Labs acquisition agreement, September 28, 2026"
[52]: https://www.worldlabs.ai/blog/atlas "World Labs: Atlas, a world model for spatial intelligence, September 1, 2026"
[53]: https://documentation.replicahq.com/docs/scenario-model-methodology "Replica: scenario model methodology"
[54]: https://www.iesve.com/digital-twins "IES: digital twins for the built environment"
[55]: https://urbanfootprint.com/solutions/climate-risk-sustainability/ "UrbanFootprint: Resilience Insights"
[56]: https://www.climate-x.com/spectra "Climate X: Spectra"
[57]: https://www.vu.city/ "VU.CITY: 3D planning platform"
[58]: https://www.clara.city/ "CLARA: urban environmental simulation"
[59]: https://science.nasa.gov/science-research/ai-geospatial-model-earth/ "NASA: expanded Prithvi geospatial foundation model"
[60]: https://fondazioneinnovazioneurbana.it/en/project/bolognadigitaltwin "Bologna: digital twin as civic infrastructure"
[61]: https://doi.org/10.1007/s44212-024-00048-6 "Goodchild et al.: Digital twins in urban informatics, 2024"
[62]: https://fmi-standard.org/docs/main/ "Functional Mock-up Interface specification"
[63]: https://docs.helics.org/en/latest/ "HELICS: co-simulation documentation"
[64]: https://learn.microsoft.com/en-us/azure/digital-twins/overview "Microsoft: Azure Digital Twins overview"
[65]: https://docs.aws.amazon.com/iot-twinmaker/latest/guide/what-is-twinmaker.html "AWS: IoT TwinMaker overview"
[66]: https://www.worldlabs.ai/blog/amd-announcement "World Labs: World Labs is joining AMD, September 28, 2026"
[67]: https://dataspace.copernicus.eu/ "Copernicus Data Space Ecosystem"
[68]: https://waterdata.usgs.gov/ "USGS: Water Data for the Nation"
[69]: https://www.census.gov/data/developers/data-sets.html "US Census Bureau: datasets and APIs"
[70]: https://stacspec.org/en/ "SpatioTemporal Asset Catalog specification"
[71]: https://www.ogc.org/standards/sensorthings/ "OGC: SensorThings API"
[72]: https://www.clubofrome.org/cor-themessageofltg/ "Club of Rome: understanding The Limits to Growth"
[73]: https://systemdynamics.org/wp-content/uploads/assets/jay-w-forrester/jwf-profile-in-op.pdf "Jay Forrester: profile in operations research"
[74]: https://ntrs.nasa.gov/api/citations/20120008178/downloads/20120008178.pdf "Glaessgen and Stargel: NASA/USAF Digital Twin Paradigm, 2012"
[75]: https://www.dougengelbart.org/press/archives/9908__/dougengelbart_phtml.html "Doug Engelbart: The Unfinished Revolution interview, 1999"

- [1] UK government: digital twin definition, October 2025. <https://www.gov.uk/government/publications/digital-twin-definition/digital-twin-official>
- [2] Aimsun Live: traffic simulation and management. <https://www.aimsun.com/aimsun-live/>
- [3] Tees Valley Combined Authority: traffic twin in operation, August 2025. <https://teesvalley-ca.gov.uk/news/cutting-edge-technology-set-to-slash-wait-times-and-boost-bus-reliability-across-our-region/>
- [4] European Commission: territorial and sectorial digital twins. <https://interoperable-europe.ec.europa.eu/collection/rolling-plan-ict-standardisation/smart-and-sustainable-cities-and-communities-rp2024>
- [5] Sabri, Winter and Rajabifard: Creating digital twins to save our cities. <https://pursuit.unimelb.edu.au/articles/creating-digital-twins-to-save-our-cities>
- [6] MATSim: Multi-Agent Transport Simulation. <https://matsim.org/>
- [7] Eclipse SUMO: Simulation of Urban MObility. <https://eclipse.dev/sumo/>
- [8] AnyLogic: simulation methods and libraries. <https://www.anylogic.com/>
- [9] GAMA: spatial agent-based modeling. <https://gama-platform.org/wiki/Home>
- [10] Neara: utility network platform. <https://neara.com/our-platform/>
- [11] UK NDTP: Isle of Wight energy demonstrator, October 2023. <https://www.gov.uk/government/case-studies/energy-system-national-digital-twin-programme-ndtp>
- [12] PyPSA: power and energy-system analysis. <https://pypsa.org/>
- [13] Xylem: Brabant Water digital twin. <https://www.xylem.com/en-us/resources/webinars/xylem-vue-from-data-to-action/>
- [14] DHI: CityFlow Live Treatment Plant, formerly TwinPlant. <https://www.dhigroup.com/sg/technologies/dhi-cityflow-live-treatment-plant>
- [15] Deltares: Delft3D Flexible Mesh Suite. <https://www.deltares.nl/en/software-and-data/products/delft3d-flexible-mesh-suite>
- [16] Technosylva: wildfire risk and operational applications. <https://technosylva.com/>
- [17] UrbanSim: model documentation. <https://cloud.urbansim.com/docs/general/documentation/urbansim.html>
- [18] Urbanly: evidence and backcasts. <https://urbanly.org/evidence/>
- [19] Urbanly: CityCompass platform. <https://urbanly.org/platform/>
- [20] Earth Genome: Earth Index. <https://www.earthgenome.org/earth-index>
- [21] GCAM: model overview and history. <https://jgcri.github.io/gcam-doc/overview.html>
- [22] Natural Capital Alliance: InVEST software and data. <https://naturalcapitalalliance.stanford.edu/software>
- [23] DSSAT: crop modeling overview. <https://dssat.net/about/>
- [24] Google: introducing WeatherNext 3, 3 September 2026. <https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-weathernext-3/>
- [25] ECMWF: Destination Earth phase three, 30 June 2026. <https://www.ecmwf.int/en/about/media-centre/news/2026/destination-earth-moves-its-third-phase>
- [26] NVIDIA: Earth-2 open weather models, January 2026. <https://blogs.nvidia.com/blog/nvidia-earth-2-open-models/>
- [27] Climate Interactive: En-ROADS. <https://www.climateinteractive.org/en-roads/>
- [28] Geodesignhub: collaborative planning and negotiation. <https://www.geodesignhub.com/>
- [29] City of Helsinki: Helsinki 3D and Energy and Climate Atlas. <https://www.hel.fi/en/decision-making/information-on-helsinki/maps-and-geospatial-data/helsinki-3d>
- [30] Bentley: iTwin.js. <https://www.itwinjs.org/>
- [31] Dassault Systèmes: Virtual Singapore. <https://www.3ds.com/insights/customer-stories/virtual-singapore>
- [32] Esri: digital twins and GIS. <https://www.esri.com/en-us/digital-twin/overview>
- [33] Rasp et al.: WeatherNext 3 preprint, September 2026. <https://arxiv.org/abs/2609.03582>
- [34] Google DeepMind: AlphaEarth Foundations, 30 July 2025. <https://deepmind.google/blog/alphaearth-foundations-helps-map-our-planet-in-unprecedented-detail/>
- [35] Earth Genome: Two Foundation Models Are Better Than One, 21 September 2026. <https://www.earthgenome.org/blog/two-foundation-models-are-better-than-one>
- [36] Urbanly: AI architecture. <https://urbanly.org/ai/>
- [37] PyPSA-Eur: sector-coupled model. <https://pypsa-eur.readthedocs.io/en/stable/index.html>
- [38] Connected Places Catapult: CReDO MVP showcase, 17 September 2026. <https://cp.catapult.org.uk/event/mvp-launch-webinar/>
- [39] Connected Places Catapult: CReDO transport resilience, 16 December 2025. <https://cp.catapult.org.uk/report/credo-for-transport-value-propositions-for-holistic-systems-resilience/>
- [40] Singapore Land Authority: sustainability use cases. <https://geospatial.sla.gov.sg/geospatial-for-good/sustainability-use-cases/>
- [41] GovTech Singapore: Virtual Singapore, March 2017. <https://www.tech.gov.sg/technews/5-things-to-know-about-virtual-singapore/>
- [42] UK NDTP: housing retrofit demonstrator, October 2023. <https://www.gov.uk/government/case-studies/retrofitting-in-housing-national-digital-twin-programme-ndtp>
- [43] UK NDTP: asset resilience and emergency planning demonstrator. <https://www.gov.uk/government/case-studies/asset-resilience-emergency-planning-and-response-the-national-digital-twin-programme-ndtp>
- [44] UK National Digital Twin Programme. <https://www.gov.uk/government/collections/the-national-digital-twin-programme-ndtp>
- [45] ASU: Wenwen Li research profile. <https://search.asu.edu/profile/1978357>
- [46] DAFNI: infrastructure research projects. <https://www.dafni.ac.uk/projects/>
- [47] Timothy Morton: Hyperobjects, University of Minnesota Press, 2013. <https://www.upress.umn.edu/9780816689231/hyperobjects/>
- [48] Tamburini et al.: Agricultural diversification promotes multiple ecosystem services without compromising yield, Science Advances, 2020. <https://pmc.ncbi.nlm.nih.gov/articles/PMC7673676/>
- [49] Natural General Intelligence: nature-model research agenda. <https://naturalgeneralintelligence.ai/>
- [50] The Standard / Reuters: AMD to buy Fei-Fei Li’s World Labs, September 29, 2026. <https://www.thestandard.com.hk/innovation/article/344091/AMD-to-buy-Fei-Fei-Lis-World-Labs-in-US82-billion-bet-on-physical-AI>
- [51] AMD: Form 8-K announcing the World Labs acquisition agreement, September 28, 2026. <https://ir.amd.com/financial-information/sec-filings/content/0000002488-26-000182/amd-20260926.htm>
- [52] World Labs: Atlas, a world model for spatial intelligence, September 1, 2026. <https://www.worldlabs.ai/blog/atlas>
- [53] Replica: scenario model methodology. <https://documentation.replicahq.com/docs/scenario-model-methodology>
- [54] IES: digital twins for the built environment. <https://www.iesve.com/digital-twins>
- [55] UrbanFootprint: Resilience Insights. <https://urbanfootprint.com/solutions/climate-risk-sustainability/>
- [56] Climate X: Spectra. <https://www.climate-x.com/spectra>
- [57] VU.CITY: 3D planning platform. <https://www.vu.city/>
- [58] CLARA: urban environmental simulation. <https://www.clara.city/>
- [59] NASA: expanded Prithvi geospatial foundation model. <https://science.nasa.gov/science-research/ai-geospatial-model-earth/>
- [60] Bologna: digital twin as civic infrastructure. <https://fondazioneinnovazioneurbana.it/en/project/bolognadigitaltwin>
- [61] Goodchild et al.: Digital twins in urban informatics, 2024. <https://doi.org/10.1007/s44212-024-00048-6>
- [62] Functional Mock-up Interface specification. <https://fmi-standard.org/docs/main/>
- [63] HELICS: co-simulation documentation. <https://docs.helics.org/en/latest/>
- [64] Microsoft: Azure Digital Twins overview. <https://learn.microsoft.com/en-us/azure/digital-twins/overview>
- [65] AWS: IoT TwinMaker overview. <https://docs.aws.amazon.com/iot-twinmaker/latest/guide/what-is-twinmaker.html>
- [66] World Labs: World Labs is joining AMD, September 28, 2026. <https://www.worldlabs.ai/blog/amd-announcement>
- [67] Copernicus Data Space Ecosystem. <https://dataspace.copernicus.eu/>
- [68] USGS: Water Data for the Nation. <https://waterdata.usgs.gov/>
- [69] US Census Bureau: datasets and APIs. <https://www.census.gov/data/developers/data-sets.html>
- [70] SpatioTemporal Asset Catalog specification. <https://stacspec.org/en/>
- [71] OGC: SensorThings API. <https://www.ogc.org/standards/sensorthings/>
- [72] Club of Rome: understanding The Limits to Growth. <https://www.clubofrome.org/cor-themessageofltg/>
- [73] Jay Forrester: profile in operations research. <https://systemdynamics.org/wp-content/uploads/assets/jay-w-forrester/jwf-profile-in-op.pdf>
- [74] Glaessgen and Stargel: NASA/USAF Digital Twin Paradigm, 2012. <https://ntrs.nasa.gov/api/citations/20120008178/downloads/20120008178.pdf>
- [75] Doug Engelbart: The Unfinished Revolution interview, 1999. <https://www.dougengelbart.org/press/archives/9908__/dougengelbart_phtml.html>
