# Typescript - The Complete Developer's Guide

Udemy Typescript - The Complete Developer's Guide course projects.

### Google Maps App

On this small project I use Google Maps API and create two classes that display a marker 
on the map.
Two classes are created that use an interface in order to be able to generate the markers.
I learned that to make some dependencies work with typescript, it is necessary to download
type definitions, in this case `@types/googlemaps`. Also sometimes a tsconfig.json file is
needed in order to avoid errors on your IDE.

### Sorting Algorithm

In this project I used an abstract class to follow a pattern of how other classes should look
like.
The main goal was to implement a Sorter class that had the ability to sort different types on data.
For this particular exercise I created three different classes, to sort collections of characters,
numbers nad linkedLists.

### Football Season Stats

For this project, the purpose was to get a stream of data and parse it to analyze it and display
an output on the screen.
I learned the importance of Composition over Inheritance, the main idea was to make classes somehow
generic so I could read data not only from a file and with certain format, but also from other 
sources like an API. In the case of the output, I created two report targets, one for generating an
HTML file and the other for displaying the output on the console.


### Web Framework

On this project I learned the importance on Generics and Inheritance.
The main goal was to create a some sort of UI framework with using some sort of view-model pattern.
At the end I created a really basic framework that allowed me to create components and interact 
with them; some sort of Marionette and Backbone in a really simple way.
* With Backbone, you represent your data as Models, which can be created, validated, destroyed, and saved to the server. Whenever a UI action causes an attribute of a model to change, the model triggers a "change" event; all the Views that display the model's state can be notified of the change, so that they are able to respond accordingly, re-rendering themselves with the new information. 
* Marionette simplifies your Backbone application code with robust views.
