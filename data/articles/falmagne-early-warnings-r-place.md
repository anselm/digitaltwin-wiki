---
about:
  label: Early warnings learned from an online game
  description: >-
    A 2026 PNAS paper trains a model on thousands of sudden takeovers in
    Reddit's r/place to predict the next one and say why. It beats the
    standard signs of a tipping point, and still misses many.
  aliases:
    - Interpretable early warnings using machine learning in an online game-experiment
  tags:
    - early warning signals
    - tipping points
    - critical transitions
    - regime shifts
    - machine learning
    - collective behaviour
    - paper
article:
  tier: 2
  url: 'https://doi.org/10.1073/pnas.2503493122'
  published: '2026-01-02'
  publisher: Proceedings of the National Academy of Sciences
  authors:
    - Guillaume Falmagne
    - Anna B. Stephenson
    - Simon A. Levin
domains:
  - people
  - ecology
open:
  source: open
  data: open
  api: unknown
  participation: unknown
  licence: CC BY-NC-ND 4.0 (the article)
  note: The paper gives a GitHub repository for its code and a Zenodo archive for the data behind its figures. Reddit released the record of pixel changes. Neither archive was opened for this entry, so the code's licence is not known.
relations:
  - predicate: about
    target: terms/tipping-points
provenance:
  origin: agent
  sources:
    - title: 'Interpretable early warnings using machine learning in an online game-experiment. Falmagne, Stephenson and Levin, PNAS 123(1), e2503493122, 2026: full text at PubMed Central'
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12773730/'
    - title: 'Crossref record for doi:10.1073/pnas.2503493122: journal, volume, date and licence'
      url: 'https://api.crossref.org/works/10.1073/pnas.2503493122'
  created: '2026-11-25'
  reviewed: '2026-11-25'
  reviewed_by: 'Claude, from the full text at PubMed Central: all of the main article. The supporting appendix, the figures, the code repository and the Zenodo archive were not opened. Anselm sent the paper.'
  status: draft
---
Some systems change state suddenly: a fishery collapses, a market crashes, a lake turns green. A body of theory says such shifts can be preceded by measurable warning signs.[^1] Testing that needs many examples of the same kind of shift, and most real systems offer a handful. This paper finds thousands in an online game, trains a model on them to predict the next one, and then examines the model to learn what it treats as a warning.[^1]

Its result cuts both ways for anyone hoping to watch a real place for signs of trouble. A model built from that system's own history did far better than the textbook signals. It also found that a large share of the shifts gave no warning it could use.[^1]

## The game

Reddit's r/place gave every registered user one shared canvas. A user could change one pixel to a colour from a palette, then had to wait five minutes before changing another. In 2022, 10.4 million people made 160 million changes over three and a half days. In 2023, 8.6 million made 134 million changes over 5.4 days. Reddit released the full record of changes with anonymised user identifiers.[^1]

Communities organised to draw and defend images, which the paper calls compositions: about 10,900 of them in 2022. Space was limited, so groups fought over it. The authors identify the compositions from the Atlas, a map of the canvas that users compiled themselves.[^1]

A transition is the moment a composition is suddenly overwritten. The paper defines it by the fraction of pixels that differ from the composition's usual image over the previous three hours: that fraction must pass 0.35 and be six times its recent average.[^1] Some compositions recover afterwards and some are replaced by a new image. The authors treat the canvas as analogous to a socio-ecological system, with communities competing for a limited resource.[^1]

## The warning system

For each composition the authors compute 19 quantities every five minutes. Some describe the image, such as how much of it is under attack and how complex it is. Some describe the changes, such as how quickly attacked pixels are restored. Some describe the people: how many are active, how many are new, how many changes each makes.[^1] Each quantity is recorded over the preceding seven hours, giving 175 inputs. The 2022 event supplied 1.53 million moments to learn from.[^1]

The model is a set of gradient-boosted decision trees, a common method for tabular data. It predicts the time remaining until the next transition.[^1] A prediction of time, the authors note, says when a shift is coming as well as whether, which is what a response needs.[^1]

## How well it worked

- **Short range.** With a warning window of 20 minutes it caught half of the coming transitions while raising false alarms 3.6 per cent of the time.[^1]
- **Longer range.** It kept some predictive power up to six hours ahead, weaker the further out.[^1]
- **Against the standard signals.** Rising variance, rising autocorrelation and a falling rate of recovery are the usual indicators that a system is slowing down near a threshold. Used singly, each did much worse than the model. Variance was the best of them.[^1]
- **On another year.** Trained on 2022 and tested on 2023, the model lost only a little performance. The 2023 event differed in canvas size, palette, duration, waiting times, the activity of moderators and automated accounts, and how prepared communities were.[^1]
- **Where it failed.** Judged transition by transition at the 20-minute range, the model did well on 44 per cent and no better than chance on 27 per cent. The authors write that "unpredictable transitions make up a significant part of our data".[^1]

## What the model treats as a warning

The authors use a standard technique, SHAP, to measure how much each input moves each prediction, and group the patterns into twelve behaviours. They say this step "involve[s] a degree of conjecture" and rests on their knowledge of the game.[^1] Among the behaviours:[^1]

- Very high activity in the image, with attacking changes dominating the defence, close to the transition.
- A turbulent past. Compositions attacked heavily before are closer to another transition.
- Neglect. Low defensive activity in the past is a warning. Very low activity of every kind is not, and the authors suggest that nobody is interested in such a composition.
- A lack of innovation. Where attacked pixels are sometimes left in their new colour, which the authors read as the community letting its image evolve, the composition is safer.
- Noise in place of coordination. Coordinated activity marks a stronger composition.
- Simplicity. More complex images are safer.

Two of the signals point in opposite directions. Slowing down, the textbook sign, appears very close to a transition. A mild speeding up, with defenders restoring pixels faster than usual, appears earlier.[^1] The authors build a small model to show that both can occur in one system when it can tip in two ways: slowly, as the defence weakens, or quickly, as the rate of attack rises.[^1]

## Safeguards worth copying

The paper lists the ways a result like this can be inflated, and what each precaution cost it in measured performance.[^1]

- Whole compositions go to either the training set or the test set, never moments from the same one to both.
- Only information from before the moment being judged is used.
- Only moments preceded by a stable period are judged. An early version of the model learned to recognise stability itself, which the definition of a transition requires, and so appeared to predict.
- Areas that nobody would have been watching, such as patchworks where several images meet, are left out.
- Gradual takeovers are left out. Including them improved the scores, but the sudden ones are harder and matter more.

## Limits

The compositions are defined by a crowdsourced map, which can be wrong about borders and dates. Some changes broke the five-minute rule, through moderators, multiple accounts or automated accounts; the authors put these at under one per cent of changes in 2022.[^1] SHAP assumes the inputs are independent of one another, and they are not.[^1]

The larger limit is the distance between a pixel canvas and a watershed or a city. The authors propose that the method, and perhaps some of the behaviours, carry over to other systems "that provide large and dense datasets".[^1] That condition is what most real places lack. The paper demonstrates the approach on one system, twice. It does not show that the behaviours it found hold anywhere else.

The wiki's page on [tipping points](/terms/tipping-points/) describes the standard signals and where they fail. The [Regime Shifts DataBase](/data-sources/regime-shifts-database/) catalogues shifts in systems where people and nature change together.
