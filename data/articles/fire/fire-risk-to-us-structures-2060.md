---
about:
  label: Fire risk to US structures to 2060
  description: >-
    A 2026 paper projects buildings lost to fire across the contiguous United
    States to 2060 from three things: area burned, number of structures, and
    past loss per area burned. Risk nearly triples.
  depiction: articles/fire/fire-risk-to-us-structures-2060.jpg
  depiction_credit: 'Figure 1 of Iglesias and others 2026, Nature Communications, CC BY-NC-ND 4.0, reduced in size and otherwise unchanged. Left: change in yearly fire risk to private structures by state, 2051 to 2060 against 2011 to 2020. Right: structures expected to be damaged or destroyed from 2025 to 2060.'
  tags:
    - wildfire
    - risk
    - exposure
    - vulnerability
    - projection
    - settlement
    - United States
    - paper
article:
  tier: 2
  url: 'https://doi.org/10.1038/s41467-026-78904-z'
  published: '2026-11-03'
  publisher: Nature Communications (Springer Nature)
  authors:
    - Virginia Iglesias
    - William R. Travis
    - E. Natasha Stavros
    - Jilmarie Stephens
    - Stefan Leyk
    - John Wardman
    - Lise A. St. Denis
    - Jennifer K. Balch
domains:
  - fire
  - places
relations:
  - predicate: answers
    target: questions/wildfire
provenance:
  origin: agent
  sources:
    - title: 'Fire risk to U.S. structures nearly triples by mid-century. Iglesias and others, Nature Communications, published 3 November 2026'
      url: 'https://www.nature.com/articles/s41467-026-78904-z'
    - title: 'viriglesias on GitHub: the lead author''s public repositories, listed 19 November 2026'
      url: 'https://github.com/viriglesias'
  created: '2026-11-19'
  reviewed: '2026-11-19'
  reviewed_by: 'Claude, from the paper: the abstract, introduction, results, discussion and availability statements in full, the methods in part, the supplement not at all. Anselm sent the paper.'
  status: draft
---
This paper estimates how many buildings fire will damage or destroy each year in the contiguous United States through 2060, if nothing is done differently.[^1] Its answer is that yearly risk in 2051 to 2060 is 1.85 to 3.2 times that of 2011 to 2020, depending on the climate model, and that 133,200 to 449,100 structures are lost between 2024 and 2060.[^1] It is on this shelf for its construction as much as its result. The whole model is three quantities multiplied together, each from public data, and the same construction can be applied to a county or a watershed.

## The three quantities

The authors use the Intergovernmental Panel on Climate Change's definition of risk as expected yearly loss arising from hazard, exposure and vulnerability.[^1] Each is estimated separately for small ecological regions (the Environmental Protection Agency's Level IV ecoregions) and then combined.

- **Hazard, as area burned:** a statistical model fitted to a 30-year record of fires, weather, climate and housing density predicts how many fires occur and how large they are. It is driven to 2060 by weather from three global climate models under a moderate emissions pathway, RCP 4.5.[^1]
- **Exposure, as number of structures:** a gridded record of buildings from property tax assessments, HISDAC-US, in cells of 250 m, gives private structures from 1945 to 2020. A statistical trend fitted to each ecoregion carries the count forward to 2060.[^1]
- **Vulnerability, as past loss per area burned:** for 2000 to 2023 the authors divide the share of an ecoregion's structures that fire damaged or destroyed by the share of its area that burned. They call the result the Exposure-Adjusted Structure Loss Index, EASLI, and hold it constant to 2060.[^1]

Most earlier assessments, the authors say, set a changing fire hazard against a fixed snapshot of buildings.[^1] Projecting both is the paper's stated advance. The [FEMA National Risk Index](/data-sources/places/fema-national-risk-index/) and the composite scores in [UrbanFootprint](/engines/land-use-and-housing/urbanfootprint/) multiply the same three kinds of quantity for the present day. This paper adds time to them.

## What it found

- **Burned area doubles.** Yearly area burned in 2051 to 2060 is 2.1 times that of 2011 to 2020 nationwide and 3.6 times in the West.[^1]
- **The West loses most; the Centre and East rise fastest.** The West's risk rises 2.18 to 3.72 times. Risk in the central states rises by as much as 5.54 times and in the East by more than 5.9 times in some scenarios, from low starting points.[^1]
- **Fires in the East are as destructive per area burned as in the West.** The median index is 0.012 in the West and 0.013 in the East, against 0.001 in the central states.[^1]
- **Buildings set where; fire sets when.** The number of structures accounts for more than half of the difference in risk between places. Change in area burned accounts for 90 per cent or more of the change from year to year.[^1]
- **A few fires do nearly all the damage.** About 0.17 per cent of recorded fires account for every structure lost between 2000 and 2023, and the five most destructive fires for 32 per cent of the total.[^1]
- **Risk and hardship overlap in the West.** There, 30 per cent of the census tracts in the top band of projected risk also face socioeconomic hardship, measured by poverty and housing cost burden, against 10.3 per cent in the central states and 7.3 per cent in the East.[^1]

## What it assumes

The authors call the result a business-as-usual baseline and "plausible scenarios rather than precise forecasts".[^1]

- **No adaptation.** Holding the loss index constant means building codes, land-use rules and fuel treatment stay as they were in 2000 to 2023. The authors call this "unrealistic" and say it is deliberate: the baseline is what future mitigation can be measured against.[^1]
- **One emissions pathway and three climate models.** The range in the headline comes from the three models, not from different futures for emissions or policy.[^1]
- **Averages, not catastrophes.** The method gives expected loss. Because totals are dominated by rare fires, the authors say losses could exceed the projection if large suburban fires become more frequent.[^1]
- **Private structures only.** Buildings on public land are left out, because tax records cover them poorly.[^1]
- **No detail inside an ecoregion.** One index value stands for a whole region and does not separate a fire-hardened subdivision from an unprepared one beside it.[^1]

## Figures this entry could not reconcile

Three statements in the published text do not agree with each other or with geography as this entry reads them. They may be unit or typesetting errors, or rest on definitions given in the supplement, which was not read. They are not repeated above.

- The text says "nearly 589 million hectares burned across the country" between 1985 and 2023, and projects 857 to 1,059 million hectares burned in the West from 2023 to 2060.[^1] The contiguous United States covers roughly 770 million hectares in all.
- The national total of structures lost from 2024 to 2060 is given as 133,200 to 449,100, and the West's alone as 261,000 to 319,000, so the West's lower figure exceeds the nation's.[^1]
- The January 2025 Los Angeles fires, at "roughly 16,000 structures", are said to equal 7 to 23 per cent of the projected national total. Against the range above, 16,000 is about 4 to 12 per cent.[^1]

## What is open

The data are public: fire perimeters from Monitoring Trends in Burn Severity, settlement history from HISDAC-US, structure losses from ICS-209-PLUS, which compiles incident reports, and ecoregion and census boundaries from federal agencies.[^1] The paper says the code is on GitHub at `viriglesias/Future-risk`.[^1] On 19 November 2026 that address returned "not found", and the lead author's public repositories did not include it.[^2] The article is open access under a licence that permits non-commercial sharing without changes.

## Building this for one place

The construction needs no fire-spread simulation, which makes it a first model a county or a tribe could build.

1. Take the fire perimeters for the area for as many years as exist, and compute the share burned each year.
2. Count structures by year from assessor records or HISDAC-US.
3. From incident reports, count structures lost, and divide the share lost by the share burned.
4. Carry the first two forward under stated assumptions and multiply.

What this leaves out is what a spread model such as those on the [wildfire question page](/questions/wildfire/) supplies: which streets, under which wind. The paper's method says how much loss to expect over decades. A spread model is needed to say where.

Two of the inputs are also series worth watching year by year against the projection: area burned, and structures lost. The paper's own finding is that the second follows the first.
