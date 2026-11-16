---
about:
  label: 'Learned models of the Earth, and what they are trained on'
  description: >-
    How a model of the atmosphere is learned from data by the diffusion method, what the training data is, where the method stops working, and how learned and physics-based models are combined.
  tags:
    - machine learning
    - diffusion model
    - world model
    - emulator
    - hybrid model
    - training data
    - reanalysis
article:
  tier: 2
domains:
  - climate
  - places
relations:
  - predicate: about
    target: engines/gencast
  - predicate: about
    target: engines/corrdiff
  - predicate: about
    target: engines/neuralgcm
  - predicate: about
    target: engines/ace2
  - predicate: about
    target: data-sources/era5
  - predicate: cites
    target: terms/world-model
  - predicate: cites
    target: engines/aurora
  - predicate: cites
    target: engines/google-flood-hub
  - predicate: cites
    target: terms/natural-general-intelligence-ngi
provenance:
  origin: agent
  sources:
    - title: 'Universal World Simulator (Runway, December 2025)'
      url: 'https://runway.com/world-simulator.html'
    - title: 'Probabilistic weather forecasting with machine learning (Price et al., Nature 637, 84-90, 2025; read in the arXiv full text, where it is titled GenCast: Diffusion-based ensemble forecasting for medium-range weather)'
      url: 'https://arxiv.org/abs/2312.15796'
    - title: 'Residual corrective diffusion modeling for km-scale atmospheric downscaling (Mardani et al., Communications Earth & Environment 6, 2025; read in the arXiv full text)'
      url: 'https://arxiv.org/abs/2309.15214'
    - title: 'CorrDiff training and generation recipe (NVIDIA PhysicsNeMo documentation)'
      url: 'https://docs.nvidia.com/physicsnemo/latest/physicsnemo/examples/weather/corrdiff/README.html'
    - title: 'Neural general circulation models for weather and climate (Kochkov et al., Nature 632, 1060-1066, 2024; read in the arXiv full text)'
      url: 'https://arxiv.org/abs/2311.07222'
    - title: 'ACE2: accurately learning subseasonal to decadal atmospheric variability and forced responses (Watt-Meyer et al., npj Climate and Atmospheric Science 8, 2025; read in the arXiv full text)'
      url: 'https://arxiv.org/abs/2411.11268'
    - title: 'Can AI weather models predict out-of-distribution gray swan tropical cyclones? (Sun et al., PNAS 122, 2025; arXiv abstract)'
      url: 'https://arxiv.org/abs/2410.14932'
    - title: 'Robustness of AI-based weather forecasts in a changing climate (Rackow et al., arXiv preprint, 2024; abstract)'
      url: 'https://arxiv.org/abs/2409.18529'
    - title: 'Global prediction of extreme floods in ungauged watersheds (Nearing et al., Nature 627, 559-563, 2024; arXiv abstract, where it is titled AI Increases Global Access to Reliable Flood Forecasts)'
      url: 'https://arxiv.org/abs/2307.16104'
    - title: 'Genie 3: A new frontier for world models (Google DeepMind, 5 August 2025)'
      url: 'https://deepmind.google/discover/blog/genie-3-a-new-frontier-for-world-models/'
    - title: 'Differentiable modelling to unify machine learning and physical models for geosciences (Shen et al., Nature Reviews Earth & Environment 4, 552-567, 2023; arXiv abstract)'
      url: 'https://arxiv.org/abs/2301.04027'
    - title: 'NeuralGCM documentation: checkpoints'
      url: 'https://neuralgcm.readthedocs.io/en/latest/checkpoints.html'
  created: '2026-11-15'
  reviewed: '2026-11-15'
  reviewed_by: 'Claude, from the sources listed; four papers were read in full on arXiv and four from their abstracts only, as marked; not yet read by Anselm'
  status: draft
---
In December 2025 the video company Runway published a short essay arguing that "video models trained at sufficient scale become world models", because "to predict the next frame, a video model must learn how the world works."[^1] It names climate among the problems such models will address, and it gives no account of the method or of the data.[^1] This article asks the practical question behind that claim. What does it take to learn a model of the real Earth, or of one real place, from data, and where has it been done?

The short answer is that it has been done well for the global atmosphere, where more than eighty years of consistent records exist. Those records are themselves the output of physics-based models. For a city, a watershed or an ecosystem, no comparable record exists, and the work that succeeds there combines learned components with physical ones.

## How a diffusion model makes a forecast

GenCast, from Google DeepMind, is the clearest worked example.[^2] It is a conditional diffusion model. In training, real states of the atmosphere are corrupted with random noise and a neural network learns to remove the noise, given the two states that came before.[^2] Once trained, the network can start from pure noise and produce a plausible next state of the atmosphere, twelve hours ahead. That state is fed back in as the new starting point, and thirty such steps make a fifteen-day forecast.[^2]

Because each step starts from a fresh sample of noise, running the model again from the same starting point gives a different, equally plausible future. A set of such runs is an ensemble, and the spread between its members is the forecast's statement of its own uncertainty.[^2] This is what the diffusion method adds. A network trained simply to minimise its average error gives one smooth forecast that hedges between the possibilities, whereas a diffusion model gives sharp individual forecasts that differ from one another.

GenCast represents the atmosphere as six variables at the surface and six more at each of thirteen heights, on a grid of 0.25 degrees.[^2] Its authors report that it was more skilful than the ensemble of the European Centre for Medium-Range Weather Forecasts on 97.4 per cent of 1,320 combinations of variable, height and lead time, for forecasts of the year 2019. One fifteen-day forecast takes about eight minutes on a single accelerator chip.[^2]

## What the training data is

GenCast was trained on forty years of [ERA5](/data-sources/era5/), from 1979 to 2018.[^2] ERA5 is a reanalysis: a physics-based weather model run back over past decades and corrected every few hours with the observations made at the time. It is a complete, gridded, hourly record of the whole atmosphere since 1940. No instrument measured most of the values in it. The physics model filled them in, in a way consistent with the measurements that did exist.

The same holds for the other models described here:

- **[CorrDiff](/engines/corrdiff/)**, from NVIDIA, uses diffusion to turn a 25 km picture of the weather over Taiwan into a 2 km one. Its 2 km training targets are four years of output from a regional physics model run by Taiwan's Central Weather Administration.[^3]
- **[ACE2](/engines/ace2/)**, from the Allen Institute for AI, was trained in one version on ERA5 and in another on eighty years of output from a physics-based atmosphere model, SHiELD.[^6]
- **[NeuralGCM](/engines/neuralgcm/)**, from Google Research, was trained on ERA5.[^5]

So "learned from data" here means, in most cases, learned from the products of physics-based models. The learned model is a fast statistical copy of what those models produce. This is useful, because the copy runs far faster than the original, but it means the learned model inherits its teacher's range and its teacher's errors. GenCast's authors left precipitation out of their main results because they did not trust ERA5's precipitation.[^2]

The quantity of data matters as well as its origin. NVIDIA's documentation for training CorrDiff on a new region gives a rule of thumb of at least 50,000 samples, and reports about 5,000 GPU-hours of training for the continental United States.[^4]

## What a learned forecaster still borrows

A forecast has to start from the present state of the atmosphere, and nobody observes that state directly. Weather centres construct it by data assimilation, a procedure that merges millions of scattered observations with a short physics-based forecast. GenCast's authors state that it "relies on initial conditions from a traditional NWP ensemble data assimilation system", where NWP is numerical weather prediction, the physics-based kind.[^2] A learned forecaster replaces the forecasting step. It does not yet replace the machinery that says what the weather is now.

## Where the method stops working

Each of the following limits is reported by the people who build these models.

**Events outside the training record.** Sun and colleagues retrained the FourCastNet weather model on a record from which every tropical cyclone of Category 3 to 5 had been removed. The retrained model forecast ordinary weather as well as before and could not forecast a Category 5 storm.[^7] It did not extrapolate from weaker storms to stronger ones. When strong storms were removed from one ocean basin only, the model recovered some skill there from the storms it had seen in other basins.[^7]

**A changed climate.** Rackow and colleagues started three learned weather models from pre-industrial, present-day and future states of the climate. The short-range forecasts remained skilful. In the warmer future state, two of the models drifted back towards the cooler climate they had been trained on.[^8] The authors of ACE2 write that they "do not expect ACE2 to be able to properly simulate the response to strong climate change", because it was trained on the last eighty years.[^6]

**Causes that moved together.** In the historical record, sea surface temperature and atmospheric carbon dioxide both rise with time. When ACE2 is asked what happens if only one of them changes, its answers "are not entirely realistic", and the authors attribute this to the training data, in which the two never varied separately.[^6] A model trained on what happened has no evidence about combinations that did not happen.

**Physical consistency over long runs.** Nothing in a neural network requires it to conserve mass or energy. ACE2 was built to conserve dry air and moisture exactly and still does not conserve energy exactly.[^6] In NeuralGCM's forty-year climate runs, 22 of 37 remained stable for the full period.[^5]

**Rare events and calibration.** CorrDiff's training set contained 22 hourly snapshots from five typhoons. For a typhoon outside that set, the model produced a storm that was too compact and whose peak winds were about 40 metres per second where the target had 50.[^3] Its ensembles were also too narrow for most variables, which means they understated their own uncertainty.[^3]

## Video world models are a different kind of thing

The models Runway's essay describes are trained on video, and they produce video.[^1] They learn how scenes look as they change. They do not carry the quantities a planner needs, such as the depth of water in a street or the load on a transformer, and they are not tied to any actual location. Google DeepMind's announcement of Genie 3 lists among its limitations that it is "currently unable to simulate real-world locations with perfect geographic accuracy".[^10] Their main stated use is to give robots and software agents varied environments to practise in.[^10] The entry on the term [world model](/terms/world-model/) separates this sense of the phrase from the others.

## A place is not the atmosphere

The global atmosphere is the most favourable case there is for learning a model from data. It is one fluid governed by known equations, observed continuously by a worldwide system, with a consistent record more than eighty years long. The following points are reasoning from how the method works. None of the sources above tests them on a city or a watershed.

- **One short history.** A learned model needs many examples of the system changing. A given estuary or city has one history, measured at a few points, and often only for a decade or two.
- **Interventions.** The questions asked of a model of a place are usually about a change that has not been made: a seawall, a rezoning, a restored wetland. ACE2's difficulty in separating carbon dioxide from sea temperature is the same problem in a simpler setting. Where the record contains no comparable intervention, a model learned from the record alone has nothing to go on.
- **Transfer between places can substitute for history, where the places are alike.** Google's flood model was trained on river gauges around the world, and Nearing and colleagues report that it forecasts extreme floods on rivers with no gauge five days ahead about as reliably as the Copernicus GloFAS system, which is physics-based, does on the day itself.[^9] This works because the many gauged rivers supply the examples that one river cannot. The [Flood Hub](/engines/google-flood-hub/) entry describes the service built on it.

## How the two approaches are being combined

Four arrangements are in use. In each of them a physics-based model supplies something the data cannot.

1. **Emulation.** A physics model is run many times and a learned model is trained to reproduce its output. ACE2 trained on SHiELD is an example, and it simulates about 1,500 years per day of computing.[^6] An emulator makes it affordable to run the thousands of scenarios that exploring an uncertain future requires. It is only as good as the model it copies, and only within the range of runs it was shown.
2. **Downscaling.** A coarse forecast from any source is given local detail by a model trained on a few years of expensive high-resolution simulation. CorrDiff's authors report that it is at least 22 times faster than the regional physics model it learned from.[^3]
3. **Hybrid models.** The equations that are well understood are kept as equations, and neural networks are trained to stand in for the processes that are too small or too complicated to resolve. NeuralGCM solves the equations of large-scale atmospheric motion directly and learns the effects of clouds, radiation and precipitation.[^5] Its makers still warn that its response to a 4 degree rise in sea temperature "diverges from expectations", and its documentation says the user must supply sea surface temperature and sea ice from elsewhere.[^5,12] Shen and colleagues review the same idea for hydrology and other Earth sciences under the name differentiable modelling, and report preliminary evidence that such models extrapolate better and need less training data than purely learned ones.[^11]
4. **Pretraining and adaptation.** A large model is trained on global data and then adjusted to a particular task with a much smaller dataset. [Aurora](/engines/aurora/) was adapted in this way to air pollution and ocean waves.

The proposal described under [Natural General Intelligence](/terms/natural-general-intelligence-ngi/) belongs with the third arrangement: it asks for a model learned directly from observations of the Earth that also obeys known physics.

For someone modelling a place, the consequence is that a learned model is seldom the starting point. The process models on the [engines](/engines/) shelf represent a seawall or a rezoning explicitly, so they can answer questions about changes that have not been made. Learned components are most useful attached to such a model: as a fast copy of it for exploring many scenarios, as a source of finer local detail, or as a stand-in for one process that nobody can write down.

## Questions to put to a learned model

- What was it trained on, and was that data observed or produced by another model?
- Which years or places were held back for testing, and how did it perform on them?
- What range of conditions did the training data cover, and is the question inside that range?
- Which physical quantities is it built to conserve?
- Where does its starting state come from?
- Does it state its uncertainty, and has the width of that uncertainty been checked against outcomes?
