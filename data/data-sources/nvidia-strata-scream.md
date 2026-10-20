---
about:
  label: STRATA-SCREAM
  description: >-
    Global storm-resolving atmosphere simulation output from the DOE E3SM
    project's SCREAM model, repackaged by NVIDIA as Zarr on Hugging Face for
    training and testing machine-learning weather and climate emulators.
  tags:
    - climate simulation
    - atmosphere
    - training data
    - zarr
    - emulator
    - global
datasource:
  coverage: global atmosphere
  resolution: 'cubed-sphere ne1024pg2 grid, 25,165,824 columns (about 4.9 km), 32 vertical levels'
  cadence: '10-minute timesteps; 2,017 timesteps in the sdecadal store'
  access: public download from Hugging Face; original NetCDF output at NERSC
  format: Zarr
  homepage: 'https://huggingface.co/datasets/nvidia/STRATA-SCREAM-sdecadal'
  cost: free, CC BY 4.0
open:
  source: unknown
  data: open
  api: unknown
  participation: unknown
  licence: 'CC BY 4.0'
  note: 'Simulation output, not observations.'
domains:
  - climate
relations:
  - predicate: about
    target: questions/weather-and-climate
provenance:
  origin: agent
  sources:
    - title: nvidia/STRATA-SCREAM-sdecadal · Datasets
      url: 'https://huggingface.co/datasets/nvidia/STRATA-SCREAM-sdecadal'
  created: '2026-10-19'
  reviewed: '2026-10-19'
  reviewed_by: 'Claude, from the sources listed; only the sdecadal dataset card was read, not the two companion repositories or the NERSC archive'
  status: draft
---
STRATA-SCREAM is a set of global atmospheric simulation output from SCREAM, the Simple Cloud-Resolving E3SM Atmosphere Model. The dataset owner is the E3SM Project of the US Department of Energy; an outside collaborator ran the simulation, and the raw output is archived at NERSC. NVIDIA publishes this copy on Hugging Face, converted from NetCDF to Zarr and subsampled, with no change to the data values. The release has three parts, one per simulation period: sdecadal, sdy1 and sdy2, each in its own repository.

The stated purpose is to train and evaluate machine-learning emulators of weather and climate. The data is synthetic, in the sense that it comes from a physics model rather than from instruments, and it carries no labels.

The sdecadal store holds 2,017 timesteps at 10-minute spacing, 29 variables, on a cubed-sphere ne1024pg2 grid of 25,165,824 columns, about 4.9 km across, with 32 vertical levels. The card names the simulation as F20TR-SCREAMv1. The whole store is 36.8 TB. It is licensed CC BY 4.0 and the card says it may be used commercially and non-commercially.

Version 1.0 is dated 2025-09-22. On this site it belongs with the data layer beneath weather and climate engines; NVIDIA's own AI weather models are described under [WeatherNext and NVIDIA Earth-2](/engines/weathernext-nvidia-earth-2/).
