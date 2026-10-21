---
about:
  label: Keep it alive
  description: >-
    Decide whether the model should live on after the decision. If it does, it
    needs an owner, a data feed, a check and a budget, in writing.
guide:
  stage: 9
provenance:
  origin: agent
  reviewed: '2026-10-18'
  reviewed_by: >-
    Claude, written for the patrons in devlog/20261018-patrons.md from entries
    on this site; not yet read by Anselm
  status: draft
---
A model answers a question and the question is decided. Then the model sits. Whether to keep it is a decision of its own, and the answer is usually no.

## Retire it well

Publish the inputs, the outputs, the check and the sources, with a date. Write one page saying what question it answered and what it should not be used for. Then stop. A model that is archived with its data is worth more than one that limps on unmaintained and is trusted by mistake.

## If it lives

Some models are acted on continuously: a flood forecast, a traffic operations model, a network twin. These need four things that a project model does not:

1. **An owner** whose job includes it, by name.
2. **A data feed** that is monitored, so that a gauge that stops reporting is noticed before the model goes quiet.
3. **A standing check** against what happens, repeated on a schedule, with the result published. See [the check](/guides/check-it-against-what-happened/).
4. **A budget** for the three above, approved for more than one year.

Without all four, it is a project model with a long tail, and should be retired instead.

## Keep the question in view

Live models drift from the question they were built for, and begin to be asked things they were never checked against. Keep the sentence from [the first guide](/guides/name-the-question/) on the front page of the model, and refuse questions outside it until the model has been checked against those cases.

## Keep the people

The users change, the operators change, the people affected stay. Tell them, once a year, what the model is doing with their place and their data. That is the [privacy note](/guides/protect-people-s-privacy/) kept current.

An ontology (the agreed vocabulary of things and relations a model uses) is part of what drifts. Jessica Talisman argues that a vocabulary starts to drift on the day it is deployed, and that maintenance is the project, not a phase at its end. The review of [The Ontology Pipeline](/ontologies/the-ontology-pipeline/) covers her argument.

## This site

The same rule applies here. Entries carry a date and a source, so a reader can see when each was last checked. Nothing is promoted from draft until a person has read its sources.
