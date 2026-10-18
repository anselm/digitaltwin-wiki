---
about:
  label: Keep it alive
  description: >-
    Most models should be retired after the decision. The few that live on need
    an owner, a data feed, a check, and a budget, in writing.
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
A model answers a question and the question is decided. Then the model sits. Deciding whether to keep it is a real decision, and the honest answer is usually no.

## Retire it well

Publish the inputs, the outputs, the check and the sources, with a date. Write one page saying what question it answered and what it should not be used for. Then stop. A model that is archived with its data is worth more than one that limps on unmaintained and is trusted by mistake.

## If it lives

A model that people act on continuously, a flood forecast, a traffic operations model, a network twin, needs four things that a project model does not:

1. **An owner** whose job includes it, by name.
2. **A data feed** that is monitored, so that a gauge that stops reporting is noticed before the model goes quiet.
3. **A standing check** against what happens, repeated on a schedule, with the result published. See [the check](/guides/check-it-against-what-happened/).
4. **A budget** for the three above, approved for more than one year.

Without all four, it is a project model with a long tail, and should be retired instead.

## Keep the question in view

Live models drift from the question they were built for, and begin to be asked things they were never checked against. Keep the sentence from [the first guide](/guides/name-the-question/) on the front page of the model, and say no to questions outside it until it has been checked for them.

## Keep the people

The users change, the operators change, the people affected stay. Tell them, once a year, what the model is doing with their place and their data. That is the [privacy note](/guides/protect-people-s-privacy/) kept current.

## This site

The same rule applies here. Entries carry a date and a source so that a reader can see when they were last checked, and nothing is promoted from draft until a person has read its sources.
