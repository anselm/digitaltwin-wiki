---
about:
  label: Tipping points
  description: >-
    A threshold past which a place or system shifts abruptly to another
    state, and the warning signs that may come before the shift.
  tags:
    - tipping points
    - critical transitions
    - regime shifts
    - early warning
    - resilience
    - Amazon
    - climate
term:
  aka:
    - critical transition
    - regime shift
    - tipping element
    - phase transition
    - breaking point
domains:
  - climate
  - ecology
provenance:
  origin: agent
  sources:
    - title: 'Early-warning signals for critical transitions | Nature'
      url: 'https://www.nature.com/articles/nature08227'
    - title: 'Methods for Detecting Early Warnings of Critical Transitions in Time Series Illustrated Using Simulated Ecological Data | PLOS One'
      url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0041010'
    - title: 'Pronounced loss of Amazon rainforest resilience since the early 2000s | Nature Climate Change'
      url: 'https://www.nature.com/articles/s41558-022-01287-8'
    - title: 'Exceeding 1.5°C global warming could trigger multiple climate tipping points – paper explainer – climatetippingpoints.info'
      url: 'https://climatetippingpoints.info/2022/09/09/climate-tipping-points-reassessment-explainer/'
    - title: 'Tipping points in open systems: bifurcation, noise-induced and rate-dependent examples in the climate system (arXiv:1103.0169)'
      url: 'https://arxiv.org/pdf/1103.0169'
    - title: 'Regime shifts'
      url: 'https://www.regimeshifts.org/'
    - title: 'The Regime Shifts Database: a framework for analyzing regime shifts in social-ecological systems (Ecology and Society 23(3):9, 2018)'
      url: 'https://www.ecologyandsociety.org/vol23/iss3/art9/'
    - title: 'Common pool resource harvesting'
      url: 'https://regimeshifts.netlify.app/rs22_common_pool_resource_harvesting.html'
    - title: 'What is the IPC? | FEWS NET'
      url: 'https://fews.net/about/integrated-phase-classification'
  created: '2026-10-24'
  reviewed: '2026-10-24'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
A tipping point is a threshold. Below it, a system pushed a little springs back. Past it, the change carries on by itself until the system settles into a different state.[^4] David Armstrong McKay, who led a 2022 review of climate tipping points, compares it to a ball pushed up a seesaw, which rolls back if the pushing stops short of the pivot and keeps rolling once it is past.[^4] Lakes and coral reefs have shifted between such states, and a lake can be pushed toward one by phosphorus building up in it.[^2] Going back is hard and sometimes impossible.[^2] The same idea goes by critical transition and regime shift.

Many models of a place show the stretching: a forest thinning, a lake getting greener, a current slowing. Fewer show the tearing, the moment the system stops coming back. In the language of feedback that Donella Meadows's [Thinking in Systems](/media/thinking-in-systems/) teaches, the loops that hold a state in place weaken as the system loses resilience, and past the threshold other loops push the change further.[^3] [Incrementalism and complexity](/articles/bogucki-incrementalism-complexity/) takes up the cost of treating such systems as if change came in small steps.

## Warning signs

Predicting a tipping point before it is reached is extremely difficult.[^1] A 2009 review in Nature by Marten Scheffer and colleagues drew on work in several fields suggesting that systems as different as ecosystems, financial markets and the climate may give generic warnings as they near one.[^1] The main warning is critical slowing down: close to a threshold, a system takes longer to recover from small knocks.[^2] One sign of this is a rise in lag-1 autocorrelation, a measure of how much each reading resembles the one before it.[^1,2] Another is rising variance, the spread of readings around their average, since a slow system drifts widely and may flicker between states before it shifts for good.[^2] A 2012 open-access guide by Vasilis Dakos and colleagues compares these indicators and others and offers a toolbox for applying them to time series.[^2]

## A measured case: the Amazon

In 2022 Chris Boulton, Timothy Lenton and Niklas Boers applied these indicators to satellite records of the Amazon rainforest.[^3] Their main record was vegetation optical depth, a microwave measure linked to the biomass and water content of the vegetation, from 1991 to 2016.[^3] They tracked lag-1 autocorrelation in five-year sliding windows across 6,369 grid cells of forest with no human land use.[^3] More than three quarters of the forest had been losing resilience since the early 2000s, consistent with the approach to a critical transition.[^3] It was lost faster where rain is lower and where the forest is closer to human activity.[^3] The loss showed across large areas where forest cover had not strongly decreased.[^3] Their point is that the average state of a system says little about its resilience, so a map of forest cover alone can look steady while the forest is losing its ability to recover.[^3] The paper is open access under CC BY 4.0.[^3] The [tropical forests heat study](/articles/tropical-forests-critical-temperature-thresholds/) looks at a different threshold, the canopy temperature at which photosynthesis fails.

## Which systems can tip

Armstrong McKay and colleagues reviewed more than 220 papers published since 2008 and counted 16 climate tipping elements, against nine in the first assessment of 2008.[^4] Nine are global "core" elements, larger than a million square kilometres and able to change the state of the Earth system.[^4] Seven are regional "impact" elements, which would affect the well-being of hundreds of millions of people or are valued in themselves.[^4] Each has a minimum, central and maximum estimate of the global warming that would trigger it.[^4] [Vitals](/vitals/thresholds/) draws those ranges beside today's warming. At the 1.1 to 1.2 °C of warming reached by 2022, five were already possible in their assessment: collapse of the Greenland and West Antarctic ice sheets, tropical coral reef die-off, widespread abrupt permafrost thaw, and collapse of convection in the Labrador and Irminger Seas.[^4] In their analysis Amazon dieback from climate alone was not likely until about 3.5 °C, but deforestation could bring it much sooner.[^4] The [Earth Commission](/ontologies/earth-commission-safe-and-just/) studies how such thresholds connect.

## What the signs cannot do

The indicators can raise false alarms. Variance can rise because the knocks a system receives grow larger, not because it is weakening.[^2,3] Autocorrelation can rise for other physical reasons.[^3] They can also miss transitions.[^2] Slowing down only appears when the push is slower than the system's own recovery time, so its absence does not rule out a coming shift.[^2,3] Peter Ashwin and colleagues describe two kinds of tipping that need no change in a system's stability, so there is no reason to expect the slowing-down methods to warn of them.[^5] In noise-induced tipping, random fluctuations alone throw a system out of its state, with no change in its stability.[^5] Citing Ditlevsen and Johnsen, they call this kind intrinsically unpredictable.[^5] In rate-induced tipping, the conditions change too fast for the system to keep up, even if no single level of change would tip it.[^5] Records are often too short or too sparse.[^2] The methods need readings taken more often than the system's slowest recovery time, and many sampling schemes are designed to avoid the very autocorrelation the methods measure.[^2] The Atlantic overturning circulation has weakened by about 15% over 50 years, but that cannot yet be told apart from natural variability.[^4]

## In societies and economies

The [Regime Shifts DataBase](/data-sources/regime-shifts-database/) records shifts in social-ecological systems, where people and nature change together, and keeps to those with large effects on human well-being.[^6] In 2018 it held 28 generic types, with climate change and farming the most common drivers and livelihoods, food and nutrition among the things most often hit.[^7] One of its types turns on a social norm. A community that harvests a shared fishery, forest or water source stays in a regime of cooperation while shunning overharvesters keeps them in line, and tips into overharvesting once the gains outweigh the shunning.[^8] That entry rests on models alone and rates the shift as speculative.[^8]

For hunger the thresholds are classified and mapped. The [IPC food security phases](/data-sources/ipc-food-security-phases/) run from Minimal to Famine, and each is drawn by what households can still do. In Crisis they meet minimum food needs only by running down the assets they live on. In Emergency they hold off large food gaps only by emergency strategies and selling assets. In Famine they lack food even after every way of coping is used up.[^9] An area is classed by the phase that at least a fifth of its people have reached, and Famine also needs acute malnutrition and death rates past set lines.[^9]

A lake tips at a phosphorus load that is in principle a physical quantity. A country or a bioregion more often tears when something it depends on stops working: a flow of food, water or fuel falls below the level a function needs, and the function fails. Where that line sits depends on how much the place relies on the flow, what stocks and substitutes it holds, and how long it can wait, so the same shortfall can be survived for a month and not for a season. Those lines are seldom written down, and so tearing is harder to see in a society than in a lake.

## What a model of a place could show

A model could report distance to a threshold, where one is known, next to the value of the variable: how close a lake is to the phosphorus load at which it turns, or a forest to the dry season it cannot recover from. It could compute autocorrelation and variance on the place's own records (a river gauge, a satellite series, a fish count) and show their trend along with the limits above. And it could run many versions of the same future, an ensemble, and show what share of runs flip to another state rather than only the average, which smooths the flips away.
