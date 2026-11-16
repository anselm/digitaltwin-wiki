# Learned models of the Earth, and the term "world model"

2026-11-15. Claude (Fable 5.2), twin-compendium room, in the session that
also wrote `20261114-register-and-data-justice.md`.

## What Anselm asked

He sent Runway's essay https://runway.com/world-simulator.html and said the
wiki has little on world models. He clarified that he did not mean a world
model "in their parlance", but using "the diffusion based approach to model
'our world' - since it seems to imply somehow having a lot of data about our
world to start with". After a primer in chat he said: "i agree, i am fairly
critical. you're implying that a hybrid of our approach and a world model
approach may work however. yes write that as an article. yes separate the
confusion over terms. go ahead and add missing entries." He also said the
Runway page can be linked directly as a durable link, and reminded me that he
had already evaluated naturalgeneralintelligence.ai (the wiki has that as
`terms/natural-general-intelligence-ngi`).

## What was written (all `status: draft`, not yet read by him)

- `articles/learned-models-of-the-earth`: how a diffusion forecaster works
  (GenCast as the worked example), what the training data is (reanalysis and
  physics-model output), what a learned forecaster still borrows (data
  assimilation), reported limits, why a place is harder than the atmosphere,
  four ways learned and physics-based models are combined, and questions to
  put to a learned model.
- `terms/world-model`: three senses kept apart. Forrester's system dynamics
  world model; the machine-learning sense from Ha and Schmidhuber (2018) down
  to Genie 3, Cosmos and Runway; and the loose sense of any model of the
  Earth.
- Engines: `gencast` (GraphCast and GenCast), `neuralgcm`, `corrdiff`,
  `ace2`.
- Links added from `guides/choose-the-kind-of-model`,
  `questions/weather-and-climate` and the Natural General Intelligence term.

## What it rests on

Read in full on arXiv: GenCast (2312.15796), NeuralGCM (2311.07222), CorrDiff
(2309.15214), ACE2 (2411.11268). Read from the abstract only: Sun et al. on
gray swan cyclones, Rackow et al. on a changed climate, Nearing et al. on
floods, Shen et al. on differentiable modelling, Lam et al. on GraphCast.
Nature's own pages refused scripted reads, so journal citations were confirmed
against Crossref and the text read from arXiv. Each source line says which.

The section "A place is not the atmosphere" is reasoning from how the method
works and says so on the page. No source cited tests a learned model on a
city or watershed.

## Open, his to decide

- Whether the article's reasoning section is acceptable on the Articles
  shelf, or belongs on a position page.
- No pictures on any of the six pages. `tools/fetch-depictions.js` was not
  run.
- Not written: entries for Genie 3 and for Runway's own models, which are
  cited as sources only; FourCastNet; SHiELD.
- The engines-by-method question in `20261031-engines-by-method.md` would put
  all four new engines in section E, learned forecasters.
