---
about:
  label: Choose the kind of model
  description: >-
    There are a handful of kinds of model, and each answers a different shape of
    question. Picking the kind is most of the choice; the product comes after.
guide:
  stage: 4
provenance:
  origin: agent
  reviewed: '2026-10-18'
  reviewed_by: >-
    Claude, written for the patrons in devlog/20261018-patrons.md from entries
    on this site; not yet read by Anselm
  status: draft
---
"Digital twin" covers several different things. Before choosing software, decide which kind of model your question needs. The question pages on this site do this for common questions; this is the general rule.

## The kinds

- **A map with layers.** No simulation; the layers are overlaid and queried. Answers "where is X relative to Y?" Most questions stop here.
- **A physical model.** Water, air, fire or electricity moving under physical laws across terrain or a network. Answers "what happens to this flow if we change that?" Flood, microclimate, fire spread and power flow models are of this kind.
- **An agent-based model.** Many individuals (people, vehicles or animals), each following simple rules, and the pattern that emerges. Answers "what do people do, together, under this change?" Transport, crowds and land-use models are of this kind.
- **A system dynamics model.** Stocks and flows, with feedback: population, money, carbon, water in a reservoir. Answers "how does the whole system move over years?" Policy simulators that run in a browser are usually of this kind.
- **A statistical or learned model.** Patterns found in past data and projected forward. Answers "given what we have seen, what is likely?" Weather forecasting and prediction from satellite signals are increasingly of this kind.
- **A live model.** Any of the above, fed continuously by sensors and compared with the real thing. The word "twin" strictly means this, and it is the rarest and most expensive.

## How to choose

1. If a map answers the question, stop. It is cheaper, faster and easier to explain.
2. If the question is about a flow of a physical thing, it is a physical model.
3. If the question is about what people or animals do, it is agent-based.
4. If the question is about the whole over years, and the parts are few, it is system dynamics.
5. If you have a lot of past outcomes and want a forecast, it is statistical.
6. Only make it live if someone will act on it every day.

Many projects chain two: an agent-based transport model feeding a land-use model, or a weather forecast feeding a flood model. Chain two only when the question needs both.

## Then the product

The [engines](/engines/) section is shelved by the task you are trying to do, and each entry says whether the engine is open or commercial and how it runs. Prefer one that someone has used for a place like yours, and that has a community you can ask. [Find the data](/guides/find-the-data/) first; the data you can get often decides the engine.

## Next

[Build the smallest version](/guides/build-the-smallest-version/).
