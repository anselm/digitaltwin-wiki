---
about:
  depiction: data-sources/wdcgg.jpg
  depiction_credit: 'Stations used in the WDCGG global analysis for WMO Greenhouse Gas Bulletin No. 22. WMO WDCGG, October 2026; free to use with a citation.'
  label: World Data Centre for Greenhouse Gases (WDCGG)
  description: >-
    The Japan Meteorological Agency's archive, run for WMO, of greenhouse gas
    measurements from stations, ships and aircraft worldwide, and the source
    of the global means in WMO's yearly Bulletin.
  aliases:
    - WDCGG
    - WMO WDCGG
  tags:
    - carbon dioxide
    - methane
    - nitrous oxide
    - greenhouse gases
    - Global Atmosphere Watch
    - station observations
    - global
datasource:
  coverage: 'global; 215 stations and 33 mobile platforms with data, 59 gas species, on 30 October 2026'
  resolution: per station or platform; hourly, daily, monthly or individual samples, depending on the record
  cadence: updated as contributors submit, from monthly to yearly; global means once a year in October
  access: free download; some files and all batch and yearly downloads need a free registration
  format: UTF-8 text and NetCDF files with metadata headers; yearly fixed datasets as tgz; global means as CSV
  homepage: 'https://gaw.kishou.go.jp/'
  cost: free
open:
  source: unknown
  data: open
  api: unknown
  participation: partly
  licence: 'GAW Data Policy: free and unlimited for scientific use; acknowledge the providers and the data centre, and offer co-authorship for substantial use'
domains:
  - climate
relations:
  - predicate: alternative_to
    target: data-sources/noaa-gml-co2-trends
    note: NOAA computes its own global means from marine boundary layer sites; WDCGG's also use screened inland stations
  - predicate: answers
    target: questions/weather-and-climate
provenance:
  origin: agent
  sources:
    - title: 'About WDCGG: Introduction, Activities, History, About GAW'
      url: 'https://gaw.kishou.go.jp/about_wdcgg/wdcgg'
    - title: 'WDCGG Statistics, read 30 October 2026'
      url: 'https://gaw.kishou.go.jp/statistics'
    - title: 'WDCGG Policy: data provision policy, GAW Data Policy and WDCGG Privacy Policy'
      url: 'https://gaw.kishou.go.jp/policy/gaw'
    - title: 'WDCGG FAQ'
      url: 'https://gaw.kishou.go.jp/faq'
    - title: 'WDCGG User Manual (2025 website update and user registration)'
      url: 'https://gaw.kishou.go.jp/static/documents/wdcgg_user_manual.pdf'
    - title: 'WDCGG Data Format, Ver. 3.0'
      url: 'https://gaw.kishou.go.jp/static/documents/wdcgg_data_format_table.pdf'
    - title: 'WDCGG Data File Names, Ver. 3.0'
      url: 'https://gaw.kishou.go.jp/static/documents/wdcgg_data_file_name_format.pdf'
    - title: 'Latest WMO GHG Bulletin: Preliminary WMO WDCGG Summary Figures (Bulletin No. 22, updated 27 October 2026)'
      url: 'https://gaw.kishou.go.jp/publications/global_mean_mole_fractions'
    - title: 'WDCGG Satellite'
      url: 'https://gaw.kishou.go.jp/satellite'
    - title: 'WMO温室効果ガス年報 第22号（概要）（気象庁訳）, JMA''s Japanese translation of WMO Greenhouse Gas Bulletin No. 22, 27 October 2026'
      url: 'https://www.data.jma.go.jp/env/info/wdcgg/GHG_Bulletin-22_j.pdf'
    - title: 'WDCGG DOI Policy'
      url: 'https://gaw.kishou.go.jp/policy/doi'
    - title: 'WDCGG Data Search'
      url: 'https://gaw.kishou.go.jp/search'
  created: '2026-10-30'
  reviewed: '2026-10-30'
  reviewed_by: 'Claude, from the sources listed; the Bulletin facts come from JMA''s Japanese translation because the WMO e-Library, which holds the English PDF, answers scripts with a human check'
  status: draft
---
The World Data Centre for Greenhouse Gases (WDCGG) collects, archives and distributes measurements of greenhouse gases made under the Global Atmosphere Watch (GAW) programme of the World Meteorological Organization (WMO).[^1] It holds carbon dioxide, methane, nitrous oxide and the CFCs, and related gases such as carbon monoxide.[^1] The Japan Meteorological Agency (JMA) runs it, and has since it was set up at WMO's request in October 1990.[^1] GAW coordinates observation of the chemical make-up of the atmosphere worldwide and is carried out by WMO Members with the scientific community; WDCGG is one of its seven world data centres.[^1] Reactive gases other than carbon monoxide moved to a separate World Data Centre for Reactive Gases on 1 January 2016.[^1]

On 30 October 2026 its statistics page counted 215 stations and 33 mobile platforms with data, 59 gas species, 78 organisations that submit data, and data from 57 countries and territories.[^2] The largest contributor is NOAA's Global Monitoring Laboratory.[^8] About 41% of the records came from sites of NOAA's Cooperative Global Air Sampling Network, and 56 WMO Members contribute; the AGAGE network and ICOS, Europe's carbon observation system, also supplied data to the 2026 Bulletin.[^10] Some gas records come with meteorological data from the same site.[^4] It also holds satellite measurements of carbon dioxide from Japan's GOSAT and NASA's OCO-2.[^9]

Each year WDCGG computes the global means of carbon dioxide, methane and nitrous oxide that WMO publishes in its [Greenhouse Gas Bulletin](/articles/wmo-greenhouse-gas-bulletin-22/).[^1,8] It uses only stations that measure on calibration scales traceable to WMO's, after screening, by the method in GAW Report No. 184.[^8] For the 2026 Bulletin that meant 180 stations for carbon dioxide, 172 for methane and 124 for nitrous oxide.[^10] Annual means from 1984 and monthly means come as CSV files with uncertainties at the 68% confidence level, and may be revised later after recalibration.[^8] NOAA also computes global means, from its own sites in the marine boundary layer, the air over the oceans taken to represent the background atmosphere.[^8] WDCGG adds inland stations it has judged representative. Its carbon dioxide mean therefore runs slightly higher than NOAA's, with similar trends and year-to-year swings.[^8] It also publishes an annual WMO WDCGG Data Summary of trends and seasonal cycles.[^1]

Data are found through the site's search page.[^4] Files are UTF-8 text or NetCDF, each with a header built from the contributor's metadata, including the fair-use statement and the dataset's DOI.[^6,7] A file name gives the gas, the station, the platform, the sampling type (in situ or flask, for example), the contributor and the time step.[^7] Daily and monthly means, where WDCGG computes them at a contributor's request, are simple means of hourly and daily values flagged valid.[^6] Since January 2025 many files can be downloaded without an account; each contributor chooses whether its files are open or need a free registration, and registration is required for batch downloads of a gas and for the yearly fixed datasets.[^5] Registered users' names and email addresses are passed to the contributors whose data they download.[^3] The yearly fixed datasets, one per gas with its own DOI, hold the data used for that year's Bulletin and Data Summary and come as tgz archives.[^11,12] Records are updated whenever contributors submit, which for some is monthly and for others yearly.[^4]

WDCGG says its archive is free and unrestricted.[^3] Under the GAW Data Policy it applies, access for scientific purposes is unlimited and free.[^3] Users accept that they will offer the data providers co-authorship whenever they make substantial use of their data, and any publication must acknowledge the providers and the data centre.[^3] The global-mean figures and data can be used freely with a citation.[^8] The networks are uneven by gas: the Bulletin notes that in-situ networks for nitrous oxide and the other long-lived gases are much sparser than those for carbon dioxide and methane.[^10]

For someone modelling a city or a region, WDCGG is where to find the nearest long-running station records of the main greenhouse gases, with their contributors named for follow-up. Those records set or check the background air a regional model starts from. Turning such measurements into estimates of a city's or a country's emissions is the work of WMO's [IG3IS](/organizations/ig3is/). The [Vitals](/vitals/) page here charts NOAA's weekly Mauna Loa record ([NOAA GML Trends in CO2](/data-sources/noaa-gml-co2-trends/)), not WDCGG's global mean.
