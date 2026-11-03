---
about:
  label: Digital twins of people
  description: >-
    Patient twins in medicine, language-model agents built from interviews
    with single people, and simulated populations built from the census or
    from language models.
  tags:
    - human digital twin
    - patient digital twin
    - virtual human twin
    - synthetic population
    - language-model agents
    - agent-based models
    - consent
    - privacy
term:
  aka:
    - human digital twin
    - patient digital twin
    - virtual human twin
    - digital twin of a person
relations:
  - predicate: cites
    target: articles/synthetic-people
  - predicate: cites
    target: articles/nasem-digital-twins-research-gaps
  - predicate: cites
    target: articles/park-generative-agents-1000-people
  - predicate: cites
    target: articles/argyle-out-of-one-many-silicon-samples
  - predicate: cites
    target: articles/bisbee-synthetic-replacements-survey-data
  - predicate: cites
    target: articles/wang-llms-misportray-flatten-identity-groups
  - predicate: cites
    target: articles/llms-weak-proxies-economic-preferences-74-countries
  - predicate: cites
    target: articles/von-der-heyde-vox-populi-vox-ai
  - predicate: cites
    target: articles/planetary-geospatial-foundation-models-public-health
  - predicate: cites
    target: posts/sfi-building-better-digital-twins
domains:
  - people
provenance:
  origin: agent
  sources:
    - title: 'Digital twins for health: a scoping review (Katsoulakis and others, npj Digital Medicine 7, 77, 2024)'
      url: 'https://www.nature.com/articles/s41746-024-01073-0'
    - title: 'Foundational Research Gaps and Future Directions for Digital Twins (National Academies, 2024), Summary'
      url: 'https://www.nationalacademies.org/read/26894/chapter/2'
    - title: 'Foundational Research Gaps and Future Directions for Digital Twins: Consensus Study Report Highlights (December 2023)'
      url: 'https://nap.nationalacademies.org/resource/26894/RH-digital-twins.pdf'
    - title: 'European Virtual Human Twins (VHT) Initiative (European Commission)'
      url: 'https://digital-strategy.ec.europa.eu/en/policies/virtual-human-twins'
    - title: 'Digital Twins in Health Care: Ethical Implications of an Emerging Engineering Paradigm (Bruynseels, Santoni de Sio and van den Hoven, Frontiers in Genetics, 2018)'
      url: 'https://www.frontiersin.org/journals/genetics/articles/10.3389/fgene.2018.00031/full'
    - title: 'Building better digital twins (SFI news, 22 October 2026)'
      url: 'https://www.santafe.edu/news-center/news/building-better-digital-twins'
    - title: 'LLM Agents Grounded in Self-Reports Enable General-Purpose Simulation of Individuals (arXiv 2411.10109; first posted as Generative Agent Simulations of 1,000 People)'
      url: 'https://arxiv.org/abs/2411.10109'
    - title: 'StanfordHCI/genagents (README)'
      url: 'https://github.com/StanfordHCI/genagents'
    - title: 'Generative Agents: Interactive Simulacra of Human Behavior (arXiv 2304.03442)'
      url: 'https://arxiv.org/abs/2304.03442'
    - title: 'Joon Sung Park (personal site, publications)'
      url: 'https://www.joonsungpark.com/'
    - title: 'A portrait of eight billion people (The Generalist, 3 November 2026)'
      url: 'https://www.generalist.com/p/a-portrait-of-eight-billion-people'
    - title: 'PopulationSim documentation: Introduction'
      url: 'https://activitysim.github.io/populationsim/'
    - title: 'Thomas Schelling (Wikipedia)'
      url: 'https://en.wikipedia.org/wiki/Thomas_Schelling'
    - title: 'Robert Axtell (home page, George Mason University)'
      url: 'https://css1.gmu.edu/~axtell/Rob/Home.html'
    - title: 'Out of One, Many: Using Language Models to Simulate Human Samples (arXiv 2209.06899)'
      url: 'https://arxiv.org/abs/2209.06899'
    - title: 'Synthetic Replacements for Human Survey Data? The Perils of Large Language Models (Political Analysis, 2024, full text)'
      url: 'https://www.cambridge.org/core/journals/political-analysis/article/synthetic-replacements-for-human-survey-data-the-perils-of-large-language-models/B92267DC26195C7F36E63EA04A47D2FE'
    - title: 'Large language models that replace human participants can harmfully misportray and flatten identity groups (arXiv 2402.01908)'
      url: 'https://arxiv.org/abs/2402.01908'
    - title: 'Vox Populi, Vox AI? Using Language Models to Estimate German Public Opinion (arXiv 2407.08563)'
      url: 'https://arxiv.org/abs/2407.08563'
    - title: 'Simulated responses from large language models are weak proxies for human economic preferences across 74 countries (Nature Human Behaviour, 2026)'
      url: 'https://www.nature.com/articles/s41562-026-02611-4'
    - title: 'google-deepmind/concordia'
      url: 'https://github.com/google-deepmind/concordia'
    - title: 'microsoft/TinyTroupe'
      url: 'https://github.com/microsoft/TinyTroupe'
    - title: 'tsinghua-fib-lab/AgentSociety'
      url: 'https://github.com/tsinghua-fib-lab/AgentSociety'
    - title: 'EDSL documentation (Expected Parrot)'
      url: 'https://docs.expectedparrot.com/en/latest/'
    - title: 'Aaru'
      url: 'https://aaru.com/'
    - title: 'Planetary Geospatial Foundation Models: A New Paradigm for Global Public Health (arXiv 2610.05699v2)'
      url: 'https://arxiv.org/html/2610.05699v2'
  created: '2026-11-03'
  reviewed: '2026-11-03'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
A digital twin of people is a model that stands in for human beings: one patient's body, one person's views, or the residents of a whole region. Most of this wiki is about models of places. Places are full of people, and many questions put to a model of a place are about them: who lives here, and [how would these people respond](/questions/how-would-these-people-respond/) to a change? Twins of people come in three kinds, which grew up in separate fields.

## A twin of one body

In medicine a digital twin is a model of a particular patient. A 2024 scoping review in npj Digital Medicine defines it as a virtual representation of a person that can simulate treatments, follow and predict the course of their health, and support early intervention, built from clinical, genetic, molecular, environmental and social data.[^1] Its examples run from organs to diseases. The Living Heart project, launched in 2014 by Dassault Systèmes with the US Food and Drug Administration, models the human heart to test drugs and devices, and heart models are used to rehearse valve replacements before the operation.[^1] The review judges the field to be in its early stages.[^1]

The US National Academies' 2024 report on [research gaps for digital twins](/articles/nasem-digital-twins-research-gaps/) takes a cancer patient and tumour as its medical example, with the twin updated after each scan to inform treatment planning; it also names cardiovascular disease and osteoporosis.[^2,3] It asks the National Institutes of Health to work on gaps particular to medicine. Bioethics and privacy are on its list, as is the safety of closed-loop systems.[^2] Caroline Chung of the MD Anderson Cancer Center sat on that committee.[^3] In the Santa Fe Institute's 2026 story [Building better digital twins](/posts/sfi-building-better-digital-twins/), she argues that a patient's twin has to run from the genome up to how the person lives.[^6] The European Commission runs a Virtual Human Twins Initiative, in which it says it has invested over EUR 100 million. It defines a virtual human twin as a digital representation of a human health or disease state, at the level of cells, tissues, organs or organ systems.[^4]

## A twin of one person's views

A newer strand models what a person thinks and says. [Joon Sung Park](/people/joon-sung-park/), [Michael Bernstein](/people/michael-bernstein/) and colleagues interviewed 1,052 Americans for two hours each and gave a language model each transcript. Speaking as each person, the model matched their answers on the General Social Survey 83% as well as the people matched their own answers when they retook it two weeks later ([Park and colleagues](/articles/park-generative-agents-1000-people/)).[^7] For the participants' privacy, those agents are not public.[^8] The same group's earlier work used invented characters. In 2022, [Social Simulacra](/articles/park-social-simulacra/) used them to populate prototypes of social computing systems.[^10] In 2023, [Generative Agents](/engines/generative-agents/) put 25 of them in a small simulated town.[^9] Park now runs [Simile](/engines/simile/), whose work The Generalist describes as creating digital twins of real people and simulating how they might react ([the interview](/posts/generalist-joon-sung-park-simile/)).[^11]

## Twins of a population

At the scale of a city or a country, modellers build stand-ins for everyone. A [synthetic population](/terms/synthetic-population/) is a set of invented households and residents, expanded from a sample of real records until it matches census totals area by area, which travel models then move through their days.[^12] Modelling a society as many individuals following simple rules is older. [Thomas Schelling](/people/thomas-schelling/), in papers of 1969 and 1971, showed that mild preferences about the colour of one's neighbours can lead to complete segregation, moving pennies and dimes on graph paper.[^13] [Joshua Epstein](/people/joshua-epstein/) and [Robert Axtell](/people/robert-axtell/)'s book Growing Artificial Societies, in Axtell's words, was an early statement that social science can be done with software agents.[^14]

Language models gave the residents a voice. Given short backstories drawn from real survey respondents, GPT-3's predicted presidential votes correlated with the votes those people reported at 0.90 to 0.94 ([Argyle and colleagues](/articles/argyle-out-of-one-many-silicon-samples/)).[^15] Later tests found less. Asked how partisans feel about the other side, ChatGPT gave answers with about half the spread of real ones ([Bisbee and colleagues](/articles/bisbee-synthetic-replacements-survey-data/)).[^16] Models speaking as a group often sounded more like outsiders imitating it than like its members, and gave less varied answers than real members did ([Wang and colleagues](/articles/wang-llms-misportray-flatten-identity-groups/)).[^17] In Germany, 46% of individual vote predictions matched ([von der Heyde and colleagues](/articles/von-der-heyde-vox-populi-vox-ai/)).[^18] Across 74 countries the predictions explained 1.3% of the variation between individuals ([Chen and colleagues](/articles/llms-weak-proxies-economic-preferences-74-countries/)).[^19] Libraries such as [Concordia](/engines/concordia/), [TinyTroupe](/engines/tinytroupe/), [AgentSociety](/engines/agentsociety/) and [EDSL](/engines/edsl/), and companies such as [Aaru](/engines/aaru/), build populations of this kind.[^20,21,22,23,24] [Synthetic people](/articles/synthetic-people/) sets out the evidence layer by layer. Models can also describe people only through the places they live: a 2026 study of Google's place summaries for public health found that, for postpartum depression, most of the predictive signal lay within places rather than between them ([the study](/articles/planetary-geospatial-foundation-models-public-health/)).[^25]

## How a twin of people differs

The original can be asked. The interview agents above were checked against the same people answering the same questions again.[^7] The Academies note that medicine has a strong culture of keeping a human decision-maker in charge when it adopts new technology.[^2]

The data are about someone. The health review puts informed consent and patient autonomy among the ethical questions, along with who owns and controls the data.[^1] The Academies say who is responsible for the accuracy of the data is an open question, and warn against scaling twins without standards for appropriate use.[^2] An early ethics paper argued that a personal twin would redefine health as what is normal for that individual against the population, and that patterns found across many people's twins could lead to segmentation and discrimination.[^5] The authors of the GPT-3 study warned that the same fidelity could be used to target groups with misinformation.[^15]
