---
id: log
title: Log Aspect
---

**LogAspects** are used as **Attributes** on **Handle** methods in **Business -> Handlers -> 'ClassName'** Command and Query classes. Usage is as follows.

![](./../media/image50.png)

**LogAspect** with **DevArchitecture**;

It comes with support for
1. **FileLogger**
2. **PostgreSqlLogger**
3. **MongoDbLogger**
4. **LogstashLogger**
5. **MSTeamsLogger**

By default, **FileLogger** is used.

![](./../media/image51.png)

Log configuration to be used is done in **WebAPI -> appsettings.json**.

![](./../media/image52.png)

**authors:** Kerem VARIŞ, Veli GÖRGÜLÜ