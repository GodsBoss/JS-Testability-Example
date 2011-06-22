This is an example of a function which has an untestable extra responsibility. That responsibility is extracted into a separate function and suddenly everything is testable.

In ./spec there are three different specs:
-   camelize-no-cache.html:
    Spec for the camelize() function with no cache.
-   camelize-hidden-cache.html:
    Spec for the camelize() function with an untestable internal cache.
-   camelize-visible-cache.html:
    Spec for a camelize() function created from the original camelize() function via a caching wrapper.
