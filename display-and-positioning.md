# Display

## Inline Elements

1. Respects *only* left and right margins and padding
1. Does not respect a width or a height
1. Other elements can sit to the left or right

## Block Elements

1. Respects *only* left and right margins and padding
1. Does not respect a width or a height
1. Adds a line break after the element
1. Other elements *cannot* sit to the left or right
1. Can *only* reside inside other block-level elements
1. Starts on a new line

## Inline-block Elements

1. Respects *all* margins and padding
1. Respects both width and height
1. Other elements can sit to the left or right
1. *Cannot* contain block-level elements
1. Can reside inside *any* other element
1. Does *not* create a new line

# Positioning

## Static

1. Default
1. Flows with the page

## Relative

1. Relative to *itself*
1. It's really the same as static positioning unless you add positioning attribute (i.e., `top: 20px;`)
1. You can use z-index

## Absolute

1. Allows you to place an element *wherever* you want.
1. Removes element from the page flow. (user sparingly!)

## Fixed

1. Positioned relative to the viewport (browser window)