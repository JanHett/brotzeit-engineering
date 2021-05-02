---
title: "Noise reduction with the non-local means algorithm"
author: Jan Hettenkofer
image: /img/parc_bercy.jpg
tags:
    - code
    - image-processing
createdAt: 2021-02-07
updatedAt: 2021-02-07
---

...

<!--more-->

# Introduction to the non-local means algorithm

# Straight-up implmentation

Just simple, nested loops
Takes forever, even on a relatively small image

# Integral image and pre-blurred image

... short discussion about those ...

Maybe also box-blur vs gaussian

# Sorted pixels and threshold

## Observations about the weighting function

Extends beyond 1 on the x-axis, except for really small values of filtering parameter `h`/standard deviation => we include every single pixel in the average unless `h` is extremely small (h < ~0.1>).

This shouldn't be the case => keep h small.

## Consequences for the algorithm

The algorithm still goes over every pixel, even if weight near/equal 0

=> sort pixels by value
=> break when the weight drops below a threshold

==> Runtime approaches practical realm, but still slow

## Observations about the visibility of noise

Noise is more evident in dark than in bright regions.

=> we can get away with fewer samples in brighter regions
=> we can raise the threshold for brighter regions

# Parallelisation and GPU

... TODO ...
