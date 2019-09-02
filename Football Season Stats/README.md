## Football Stats Project

In this project we try to read a CSV file and parse its data to do some analysis.
The main goal is to make reusable code so we can read more files that have different values.

In this project is showed why composition is prefered over inheritance. 
It's easier to create a class that has a relation with other classes than having a class that extends from another class and making it more dificult to reuse code. 

In this exercise the MatchReader class has a property reader that expects a DataReader property; this DataReader property is an interface that has a read methos and a data property, this way we can use the interface in some classes to read data from a CSV file or maybe fetching it from an API. 

It uses inheritance and abstract classes.

###### Section 11: Reusable code