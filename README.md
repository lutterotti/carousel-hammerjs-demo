## Carousel with HammerJS

This is a custom carousel that takes in a component as both the "slide" and "pagination". It leverages HammerJs and allows users to "swipe" through slides if they are on mobile or drage across if on a desktop. This is the same library that is used as a base for `SwiperJS`.

_what makes this different from bootstrap or other carousel / slide shows?_

The ability to fully customize the slides and pagination. Other carousels allow you to customize to an extent, but you are not able to pass through whole components. 

_why pass entire components?_

The ability to pass entire components allows the developer to really leverage `*ngFor` and populate that instance of the carousel with data that is specific to that instance and have the carousel as a whole be more dynamic. 
