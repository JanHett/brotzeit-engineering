---
title: "Negative digitisation, the easy way: using Capture One (or your favourite raw processor)"
author: Jan Hettenkofer
createdAt: 2021-04-22
updatedAt: 2021-04-22
image: /img/cimetiere_montmartre_three_panels.jpg
tags:
    - photography
    - colour
    - image-processing
---

... TODO ...

# Colour negative film response curves

Observation about how they are linear but RGB are not entirely parallel

# Sensor response curves and raw processors

We can assume digital sensors to be reasonably linear, however most raw converters apply a "film curve" to give a more pleasing appearance. When exporting, matters are made worse since we are habitually rendering into an "output" colour space (sRGB, Adobe RGB, etc...).

Here's what can be called neutral:

-> Linear Response "film curve" (C1 also has "Linear scientific" which is supposed to be even more linear)
-> No ICC profile if we are profiling ourself, neutral ICC profile otherwise
-> Output colour space if the image is fully converted, camera colour space (?) if we want to use the image for profiling

# Inverting the digitised image

C1 has `<E K="TechnicalProcessingMethod" V="2" />` hidden away in its `costyle` format. Does the inversion, is used by C1 CH `costyle`s, but doesn't play well with layers.

Flipping the RGB curve or levels also works, but there may be issues with not-quite-linear "film curves".

# White balance and the orange base

Picking the orange base as a reference for white balance yields neutral blacks, but lighter colours will diverge, thus leaving the image with a tint.

Instead, the white balance should be picked off a grey card (to verify). This will still leave the image with a colour cast in the highlights and the shadows, but some may feel like this is the "right" look for film.

# What's wrong with (auto) clipping the histogram

Many film digitisations prescribe clipping the histogram to the extremes of each channel and then adjusting to taste in an effort to balance out the differences in contrast between R, G and B. That's... fine, but not at all accurate since we are just eyeballing and it's super hard to get things right.

# Calculating linear contrast for each channel

* Take photo of calibration chart or grey card on target film stock
* White balance off orange base, invert
* Pick light point on a light grey patch
* Calculate ratio between R, G and B at that point
* Use those values to calculate light clipping point such that the `max(R, G, B) == 1`
* Since we are white balanced to the orange base (i.e. black) this should give accurate tones across the range

Save that as a preset (style in C1 parlance) and apply on actual photos. Clip tonal range with RGB slider (leave individual sliders alone), then adjust to taste with curves.

# Fully accurate colour with input profiling

TODO: ArgyllCMS workflow for either only grey value profiling or foll colour profiling.

# The physical setup

Film holders, light sources, shooting conditions

# Research needed

## ICC input profiles

* Can we create an ICC profile just for grey values and leave colour rendering alone?
* Do we need a different ICC profile for each level of over/under exposure of the film?
* How robust are ICC profiles with regards to different digitisation conditions? (Different light source, different camera, different lens, different exposure, ...)
* How robust are ICC profiles across different film stocks?
* Can we merge profiles? I.e. profile an image with a neutral ICC applied, then "replay" the profile for the negative on top of other camera's neutral ICC profiles

# Call for donations/selling presets and profiles?
