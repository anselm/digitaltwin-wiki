---
about:
  label: STRATA-SCREAM
  description: >-
    Global storm-resolving atmosphere simulation output from the DOE E3SM
    project's SCREAM model, repackaged by NVIDIA as Zarr on Hugging Face for
    training machine-learning weather and climate emulators.
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
SCREAM is the Simple Cloud-Resolving E3SM Atmosphere Model.[^1] The dataset owner is the E3SM Project of the US Department of Energy.[^1] An outside collaborator ran the simulation, and the raw output is archived at NERSC.[^1] NVIDIA's copy on Hugging Face is converted from NetCDF to Zarr and subsampled, with no change to the data values.[^1] Zarr is a format that stores large arrays in chunks that can be read separately. The release has three parts, one per simulation period, each in its own repository: sdecadal, sdy1 and sdy2.[^1] Version 1.0 is dated 2025-09-22.[^1]

The data is for training and evaluating machine-learning emulators, fast models that learn to imitate a physics model's output.[^1] It is synthetic: computed by a physics model, not measured by instruments.[^1] It carries no labels.[^1]

The sdecadal store holds 2,017 timesteps at 10-minute spacing and 29 variables.[^1] The grid is cubed-sphere ne1024pg2,[^1] which divides the globe into six square faces like a cube's. It has 25,165,824 columns about 4.9 km across, with 32 vertical levels.[^1] The card names the simulation F20TR-SCREAMv1.[^1] The whole store is 36.8 TB.[^1] It is licensed CC BY 4.0, and the card says it may be used commercially and non-commercially.[^1]

NVIDIA's own AI weather models are described under [WeatherNext and NVIDIA Earth-2](/engines/weathernext-nvidia-earth-2/).
