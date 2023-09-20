+++
title= "Style guidelines for SDCS"
date= 2023-09-19
+++

## Colours
We use two colours :
  - Teal blue
    - RGBA —
    - HEX —
    - HSL —
  - California sunset orange
    - RGBA —
    - HEX —
    - HSL —

In other applications, true white and black are used. Ensure that text is kept readable with a minimum contrast rating of WCAG 2.0 AA ([resource for checking contrast](https://webaim.org/resources/contrastchecker/)).

## Logo usage
Logo usage and guidelines are currently being experimented with. For the time being, use assets provided by Jeremy FORTNER.

## Text and fonts
For sans-serif settings, we use `Helvetica`. For monospaced settings, we use `DejaVu Sans Mono` — `Menlo` is an acceptable alternative.

#### Font size on web
Fonts should use the following CSS :
```css
html, body { font: 1rem/1.6 "Helvetica", sans-serif; }
h1, h2, h3, h4, h5, h6 { font-family: monospace; }
```

This will default to the proper fonts on the system, which are commonly compliant with this style guide — there is no need to try and enforce a certain font by adding on to this rule.

