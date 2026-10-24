---
about:
  label: Rules layer
  description: >-
    The laws and legal designations laid over land and water that decide what
    may happen in a place: zoning, parcels, permits, environmental review,
    protected areas, flood zones and water rights
  tags:
    - law
    - land use
    - zoning
    - permits
    - property
    - water rights
    - regulation
term:
  aka:
    - regulatory layer
    - land-use law
    - land-use regulation
domains:
  - places
  - water
  - ecology
provenance:
  origin: agent
  sources:
    - title: 'How the National Zoning Atlas is Made'
      url: 'https://www.zoningatlas.org/how'
    - title: 'Frequently Asked Questions about the National Zoning Atlas'
      url: 'https://www.zoningatlas.org/faqs'
    - title: 'Cadastral Survey | Bureau of Land Management'
      url: 'https://www.blm.gov/programs/lands-and-realty/cadastral-survey'
    - title: 'General Info (Real Estate Records) | Los Angeles County Registrar-Recorder/County Clerk'
      url: 'https://www.lavote.gov/home/records/real-estate-records'
    - title: 'What is the National Environmental Policy Act? | US EPA'
      url: 'https://www.epa.gov/nepa/what-national-environmental-policy-act'
    - title: 'Permit Program under CWA Section 404 | US EPA'
      url: 'https://www.epa.gov/cwa-404/permit-program-under-cwa-section-404'
    - title: 'PAD-US Data Overview | U.S. Geological Survey'
      url: 'https://www.usgs.gov/programs/gap-analysis-project/science/pad-us-data-overview'
    - title: 'What is my Flood Zone | National Flood Insurance Program'
      url: 'https://www.floodsmart.gov/flood-zones-and-maps/what-is-my-flood-zone'
    - title: 'Water Rights Process | California State Water Resources Control Board'
      url: 'https://www.waterboards.ca.gov/waterrights/board_info/water_rights_process.html'
    - title: 'About the Planning Data Platform'
      url: 'https://www.planning.data.gov.uk/about/'
    - title: 'PNNL/NEPATEC3.0 · Datasets at Hugging Face'
      url: 'https://huggingface.co/datasets/PNNL/NEPATEC3.0'
  created: '2026-10-24'
  reviewed: '2026-10-24'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
A satellite image can show a field beside a creek, with houses along the far bank. It cannot show that the field is zoned for one house per acre or that the creek bank is a federally regulated wetland. Nor does it show the mapped flood zone under the houses, or the farmer upstream whose claim to the creek's water is older than the town's. Those rules decide what can be built, drained, pumped or protected, so a model that is meant to say what could happen in a place has to carry them alongside the terrain. This site calls them the rules layer. The examples below are mostly from the United States.

**Zoning and land-use plans.** Local governments divide their land into zoning districts, each with its own rules on uses, buildings and lot sizes; some districts are overlays that sit on top of others.[^1] Which governments may zone is set by state law, so Hawaii gives the power only to its counties while Minnesota has about 2,650 places that could.[^1] The [National Zoning Atlas](/law/national-zoning-atlas/) is putting these codes on one map.

**Parcels and ownership.** A cadastre is a public record, survey or map of the value, extent and ownership of land, kept as a basis for taxation.[^3] For federal public lands the Bureau of Land Management runs cadastral surveys, a programme that originated with the Land Ordinance of 1785, to create, define, mark and re-establish their boundaries.[^3] Private parcels are recorded county by county: Los Angeles County holds real estate records from 1850 onward, sells copies in person, online or by mail, and offers no online access to the records or their indexes.[^4]

**Permits and environmental review.** The National Environmental Policy Act requires federal agencies to assess the environmental effects of their proposed actions, including decisions on permit applications, before deciding.[^5] Under section 404 of the Clean Water Act, putting dredged or fill material into waters of the United States, wetlands included, needs a permit unless the activity is exempt.[^6] Individual permits are reviewed by the Army Corps of Engineers or an approved state or tribal programme.[^6] Past reviews are being gathered as data by [PermitAI](/law/permitai/), and the wetlands themselves are mapped in the [National Wetlands Inventory](/law/national-wetlands-inventory/). Listed species and critical habitat near a project can be checked in [IPaC](/law/usfws-ipac/).

**Protected areas.** [PAD-US](/law/pad-us/) is the official national inventory of US protected areas, managed for nature, recreation or culture through legal or other effective means; it includes all federal and most state and local lands of that kind, and conservation easements that can be shared publicly.[^7] Worldwide, [Protected Planet](/data-sources/protected-planet/) plays the same part.

**Flood zones.** FEMA's flood maps divide land into zones by flood risk.[^8] In communities in the National Flood Insurance Program, owners in the high-risk A and V zones with a federally backed mortgage must buy flood insurance, so the line on the map carries a legal and financial duty.[^8] Applicants can request a Letter of Map Amendment or Revision, and when a community's map is updated the insurance requirements for a property may change.[^8] The maps are published as the [National Flood Hazard Layer](/law/fema-national-flood-hazard-layer/).

**Water rights.** California defines a water right as a legal entitlement to divert water from a named source for beneficial use.[^9] The holder owns a right of use, not the water.[^9] The state mixes riparian rights, which usually come with land beside a water source, and appropriative rights ranked by date, under which the most junior holder must stop first in a shortage.[^9] The board says California has no permit process for groundwater use: in most areas landowners may pump without approval from the board or a court, while in several basins pumping is governed by court decrees.[^9] Cases on this site such as [groundwater limits in the San Joaquin Valley](/scenarios/san-joaquin-valley-groundwater/) and [New Mexico's Rio Grande pumping cuts](/scenarios/lower-rio-grande-groundwater-cuts/) turn on these rights.

Most of this is published as documents, not data. Federal reviews sit in separate agency repositories with different formats.[^11] Zoning codes are not always easy to obtain, and the National Zoning Atlas reads them by hand because it finds that AI cannot yet interpret them accurately.[^2] The rules also change and are argued over: zoning codes are revised constantly, flood zones are amended and remapped, and water rights are settled by courts as well as agencies.[^2,8,9] The legal state of one parcel can therefore depend on a recorded deed, a code section and a court decree that no map shows. England's Planning Data platform collects planning and housing data from local planning authorities in a consistent form that anyone can download, though it does not yet cover all of England.[^10]

A model that answers questions of [housing and land use](/questions/housing-and-land-use/) or [land-use change](/questions/land-use-change/) usually needs at least the zoning, the parcels and the protected and hazard areas over its study area, with a date on each.
