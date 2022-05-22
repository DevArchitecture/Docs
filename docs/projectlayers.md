---
id: projectlayers
title: Architecture
---

The hierarchy and workflow between the project layers are in the following order.
When developing manually, the development can be done by maintaining the following order.
However, using the **DevArchitecture Code Generator** is recommended
by the **DevArchitecture** developer team.


## Core

It includes all core systems of the **DevArchitecture** infrastructure.

This layer includes Cross Cutting Concern, Generic Repository, Jwt, Mail, RabbitMQ, Elastic Search etc. It is the layer where structures are presented ready-made with AOP methods and/or single-line codes.

No specific changes are expected. As the **DevArchitecture** team, necessary updates
and additional developments are constantly being made by us. However, there is no
harm in changing it as desired. You can change it yourself for project needs or
you can contact us.

## Entities

It is the layer where you will represent the database entities of your project.
This is the layer where you define these entities as relational database or
document-oriented database objects.

This layer is the first entry point in the development of a project. All layers are formed through a class created here.

## DataAccess

It is the data access layer of your project. This layer is the layer where database relations are made, Contexts are determined and database access technologies are used (EFCore, MongoDb etc.).

## Business

It is the layer where all the business rules of your project will be written and integration mechanisms will be placed.
Thanks to the ***CQRS*** approach, you can present all the rules in a flexible structure. Service delivery can be performed
in accordance with monolithic or microservice architectures.

## Tests

It is the test layer of your project. All business rule tests are written here under the relevant units.
With ***DevArchitecture Code Generator***, test setups and routines for the test layer and related classes are
automatically created in an error-free manner. However, it is left to the discretion of the developer to
change the explanation lines in the test routines and the algorithms to be developed. It will be discussed
in detail under the title of [***Test Routines***](testroutines).

## WebAPI

It is the API surface layer where your project will communicate with the front-end frameworks.
It comes with security mechanism. It expects a logged in user information for the entire API surface,
except for **Auth** module methods.

***User Management, Multi-Language Support, Performance Metrics, Authorization Modules*** are available ready-made. It can be used with a preferred front-end framework.

With the help of **Swagger and DevArchitecture Code Generator**, method documentation is available. Thus, it is foreseen to facilitate communication with different developer teams.

## UIPreparation

It is the necessary installation project for the installation of the *Angular* interface. It was used to visually present the capabilities of the ***DevArchitecture*** project and to guide the developers.
(***Note: It is optional to use.***)

**authors:** Kerem VARIŞ, Veli GÖRGÜLÜ