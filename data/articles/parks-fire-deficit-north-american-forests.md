---
about:
  label: A fire deficit persists across North American forests
  description: >-
    Tree rings from more than 1,800 fire-scar sites show that even 2020, a
    record year, burned only the historical average share of forest, and that
    what is unprecedented is how severely it burns.
  tags:
    - wildfire
    - fire history
    - tree rings
    - fire scars
    - fire regime
    - fire deficit
    - North America
    - deep history
    - paper
article:
  tier: 2
  url: 'https://doi.org/10.1038/s41467-025-56333-8'
  published: '2025-02-10'
  publisher: Nature Communications
  authors:
    - Sean A. Parks
    - Christopher H. Guiterman
    - Ellis Q. Margolis
    - Margaret Lonergan
    - Ellen Whitman
    - John T. Abatzoglou
    - Donald A. Falk
    - James D. Johnston
    - Lori D. Daniels
    - Charles W. Lafon
    - Rachel A. Loehman
    - Kurt F. Kipfmueller
    - Cameron E. Naficy
    - Marc-André Parisien
    - Jeanne Portier
    - Michael C. Stambaugh
    - A. Park Williams
    - Andreas P. Wion
    - Larissa L. Yocom
domains:
  - fire
  - ecology
relations:
  - predicate: answers
    target: questions/wildfire
provenance:
  origin: agent
  sources:
    - title: 'A fire deficit persists across diverse North American forests despite recent increases in area burned (Parks et al., Nature Communications 16, 1493, 10 February 2025, CC BY-NC-ND 4.0)'
      url: 'https://doi.org/10.1038/s41467-025-56333-8'
    - title: 'North American Fire Scar Synthesis project (NOAA NCEI paleoclimatology study 34853)'
      url: 'https://www.ncei.noaa.gov/access/paleo-search/study/34853'
    - title: 'International Multiproxy Paleofire Database (NOAA NCEI)'
      url: 'https://www.ncei.noaa.gov/products/paleoclimatology/fire-history'
  created: '2026-11-08'
  reviewed: '2026-11-08'
  reviewed_by: 'Claude, from the abstract and the data and code statements of the paper; the methods were not read in full'
  status: draft
---
When a fire passes a tree without killing it, the wound heals over and leaves a scar in that year's ring. The North American tree-ring fire-scar network collects such records from more than 1,800 sites across the continent's forest types, giving a year-by-year history of fire reaching back centuries before any satellite or agency record.[^1] Nineteen authors led by Sean Parks of the US Forest Service used it to ask a plain question: against that record, is there now too much fire or too little?[^1]

They compared the contemporary period, 1984 to 2022, with the fire regimes before 1880, using the scar network for the past and mapped fire perimeters for the present.[^1] The answer is a deficit. Across a range of forest types, less of the forest burns now than did historically, even after the increases of recent decades. The years that read as records are not unprecedented. In 2020, a record year by area, 6 percent of the network's sites burned, which is the historical average; in 1748, 29 percent of them did.[^1]

What is unprecedented, the authors say, is severity. There is abundant evidence that today's fires kill forests outright where historical fires did not, and that this is what is costing lives, infrastructure and water supplies.[^1] The deficit and the severity are the same story told twice: forests that once burned often and lightly now burn rarely and hard.

## For a model of a place

The paper is a demonstration of what a deep record does to a baseline. A fire model calibrated on 1984 onward learns a regime that is itself the anomaly. The sources are public. About half the scar records are in NOAA's International Multiproxy Paleofire Database, with the rest being added through the North American Fire Scar Synthesis.[^1,2,3] The contemporary perimeters come from the Monitoring Trends in Burn Severity programme and the interagency WFIGS perimeters in the United States, and from the Canadian National Fire Database and National Burned Area Composite in Canada.[^1] No new code was written; the scar data were processed in the R library burnr.[^1] The paper is open under CC BY-NC-ND 4.0.[^1]
