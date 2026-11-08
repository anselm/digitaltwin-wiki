---
about:
  label: Wildlife Insights
  description: >-
    Hosted platform for camera-trap data; a model trained on 35 million
    images names the species in each picture, and providers choose a Creative
    Commons licence and an embargo of up to four years.
  tags:
    - camera traps
    - wildlife
    - biodiversity
    - species identification
    - computer vision
    - data sharing
    - Creative Commons
    - cloud
tool:
  form: hosted platform
  homepage: 'https://www.wildlifeinsights.org/'
  licence: >-
    data under CC0, CC BY 4.0 or CC BY-NC 4.0 as each provider chooses; the
    platform's own code licence is not stated on the pages read
  cost: >-
    free for academic, Indigenous, citizen-science and individual users and
    for government users in developing economies; governments elsewhere and
    companies pay a subscription whose price is set case by case
open:
  source: unknown
  data: partly
  api: unknown
  participation: open
  licence: 'CC0, CC BY 4.0 or CC BY-NC 4.0, chosen per project'
  note: >-
    Anyone with an account can download public data; embargoed deployments,
    images of people and exact locations of threatened species are withheld.
    No public source repository or API documentation was found on the pages
    read.
domains:
  - ecology
provenance:
  origin: agent
  sources:
    - title: 'About, Wildlife Insights'
      url: 'https://www.wildlifeinsights.org/about'
    - title: 'Wildlife Insights (home page)'
      url: 'https://www.wildlifeinsights.org/'
    - title: 'About Wildlife Insights AI'
      url: 'https://wildlifeinsights.org/about-wildlife-insights-ai'
    - title: 'Frequently asked questions, Wildlife Insights'
      url: 'https://wildlifeinsights.org/faq'
    - title: 'Summary of the Terms of Use, Wildlife Insights'
      url: 'https://wildlifeinsights.org/summary-terms-use'
    - title: 'Pricing, Wildlife Insights'
      url: 'https://www.wildlifeinsights.org/pricing'
    - title: 'Public downloads, Wildlife Insights'
      url: 'https://wildlifeinsights.org/node/3079'
    - title: 'Data use and citation for public downloads, Wildlife Insights'
      url: 'https://www.wildlifeinsights.org/get-started/data-download/public'
    - title: 'Quick Start to Wildlife Insights'
      url: 'https://www.wildlifeinsights.org/node/3065'
    - title: 'Wildlife Insights public release (8 July 2021)'
      url: 'https://www.wildlifeinsights.org/node/3927'
    - title: 'Ahumada and colleagues, Wildlife Insights: A Platform to Maximize the Potential of Camera Trap and Other Passive Sensor Wildlife Data for the Planet, Environmental Conservation 47(1), 2020'
      url: 'https://doi.org/10.1017/S0376892919000298'
    - title: 'Wildlife Insights RFP, Platform Maintenance and Feature Development (February 2020, PDF)'
      url: 'https://www.wildlifeinsights.org/sites/default/files/2020-02/Wildlife%20Insights%20RFP%20-%20Platform%20Maintenance%20and%20Feature%20Development_0.pdf'
    - title: 'Wildlife Insights, Conservation International project page'
      url: 'https://www.conservation.org/projects/wildlife-insights'
    - title: 'TEAM Network, Wildlife Insights'
      url: 'https://www.wildlifeinsights.org/TEAM-network'
    - title: 'Standards, Wildlife Insights'
      url: 'https://www.wildlifeinsights.org/standards'
  created: '2026-11-08'
  reviewed: '2026-11-08'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Wildlife Insights stores camera-trap photos online, names the animals in them by machine learning, turns the records into maps and graphs, and lets anyone browse what others have shared, by region.[^2] The design paper, by Ahumada and sixteen co-authors in Environmental Conservation, first published online on 26 September 2019, names four barriers it was built to remove.[^11] The pipeline from image to record was slow and tedious, most data went unshared, most users could not analyse what they had, and the hardware was not designed for science.[^11] The platform announced its public release on 8 July 2021.[^10]

A 2020 request for proposals, issued by [Conservation International](/organizations/conservation-international/) on behalf of the partners, lists the core partnership as Conservation International, the Smithsonian Institution, the Wildlife Conservation Society, the North Carolina Museum of Natural Sciences, WWF, Map of Life, the Zoological Society of London and Google.[^12] The paper's authors are from the same institutions.[^11] The About page now shows core partner logos for those organisations plus the Max Planck Institute of Animal Behavior and WildMon, the Smithsonian appearing as its National Zoo and Conservation Biology Institute, and the first logo linking to conservation.org without printing a name.[^1] The Moore Foundation, Lyda Hill Philanthropies, Google and the IUCN Green List are listed as supporters.[^1] Conservation International's own page says the initiative is no longer hosted by CI and has not been updated regularly since June 2023.[^13] The terms are held by Friends of the North Carolina Museum of Natural Sciences on behalf of the partners.[^5] The TEAM Network, which ran camera traps at seventeen tropical sites and began as a partnership of Conservation International, the Wildlife Conservation Society and the Smithsonian, is moving its data to the platform.[^14]

The identification model first filters blank images, labelling a picture blank only when confident and otherwise marking it unknown for review.[^3] It then classifies the animal to species, or to the broadest taxonomic level it is sure of, so a picture may come back as "deer" rather than a species.[^3] The latest model recognises 1,295 species and 237 higher-level classes and was trained on more than 35 million images using Google's TensorFlow library.[^3] Species with fewer than a thousand training images cannot be predicted above the confidence threshold.[^3] The FAQ gives older figures, 732 species and 11.6 million training images, and attributes the model to Google.[^4] Validation figures are published per class: for blank images precision 0.9989 and recall 0.9344, for white-tailed deer 0.9707 and 0.9625, with many species far lower.[^3] Uploaded data are stored on Google Cloud.[^3] Data come in either as uncatalogued images for the model to label or as a bulk upload of an existing catalogue; video is not processed and must be cut into frames first.[^4,9] The platform publishes its Minimum Metadata Standards as a spreadsheet and points to the Open Standard for Camera Trap Data as reading.[^15]

Providers keep ownership of their data and grant the platform a licence to use them for training computer-vision models, for aggregated regional and global products that do not identify projects or locations, and for publicity.[^5] When creating a project the provider picks a licence for its images and metadata: CC0, CC BY 4.0, or CC BY-NC 4.0 for images only.[^4,5] A project can be embargoed for up to 48 months, counted separately for each camera deployment from the day its images are uploaded; Indigenous groups and providers with a legal or policy reason can ask for an indefinite "private" status.[^4,5] Basic project information stays public during an embargo.[^5] Images tagged as human are never displayed publicly, though their records can be downloaded.[^5] For species listed as Critically Endangered, Endangered or Vulnerable on the IUCN Red List, public coordinates are truncated to 0.1 degree, about 11 km, the location name is hidden and the deployment identifier randomised; exact locations can be requested from the project owner.[^5,7]

Anyone with an account can download public data after stating the intended use.[^7,8] A package is a set of CSV files: projects, cameras, deployments and either images or sequences, with a data dictionary and the terms; the `identified_by` column says whether a person or "Computer Vision" made each identification and `cv_confidence` gives the model's score.[^7] Each project has an Archival Resource Key for citation, and because projects keep changing the site advises archiving the exact dataset used in a publication.[^8] A package can take from minutes to hours to prepare.[^8] The quick-start guide lists only direct and bulk upload as ways in; whether there is an API is unknown.[^9]

Use is free for registered users with public-only accounts, individuals without an organisation, citizen scientists, academic users, Indigenous or First Nation groups, and government users in economies the United Nations classes as developing or in transition.[^6] Other government bodies and companies are expected to pay a subscription priced by organisation type and size, number of devices, data volume and location, reviewed yearly and negotiable.[^6] Lapsed subscribers may pay a maintenance fee of a third or a half of the subscription for archived or cold storage.[^4] The total number of images and projects is unknown; the site says "millions" of images.[^1,2]
