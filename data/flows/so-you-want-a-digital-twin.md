---
about:
  label: So you want to make a digital twin?
  description: Five questions. Most people get off before the last one.
flow:
  start: You have a place in mind
  steps:
    - ask: Not sure what to ask yet?
      'yes': Start with a story
      to: /stories
      note: Each story shows what a model of a place let someone see.
    - ask: Has someone already modeled your place?
      'yes': Look at theirs
      to: /twins/helsinki-bologna
      note: >-
        Helsinki publishes its city model and an energy atlas that anyone can
        open in a browser.
    - ask: Would a map or a spreadsheet answer it?
      'yes': Do that instead
      to: ''
      note: >-
        A model earns its keep when things interact and keep changing. A one-off
        question often needs less.
    - ask: Is there a free tool for this kind of question?
      'yes': Use it today
      to: /engines/en-roads
      note: >-
        En-ROADS runs in a browser: move the sliders for climate policies and
        see the modeled effect.
    - ask: 'Have data, and someone who can code a little?'
      'yes': Adapt an open model
      to: /engines/invest
      note: InVEST is a suite of open models that can be set up for a new place.
  end:
    label: 'Build one, or have it built'
    sub: follow the nine stages
    to: /guides
    note: 'Nine guides, read in order.'
provenance:
  origin: agent
  reviewed: '2026-10-02'
  reviewed_by: >-
    questions and their order proposed by Claude; examples from the survey
    except the map-or-spreadsheet note
  status: proposed
---
Five yes-or-no questions that send you to the least effort that answers your question.
