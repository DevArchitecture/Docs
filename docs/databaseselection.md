---
id: databaseselection
title: Database Selection and Configuration
---

## Business Layer
### Startup Class

**Register** operation required for **Autofac** to **Business->Startup.cs** class is configured here.
This is also where the **Development, Staging, Production** environment variables are managed.
(***For details of environment variables, see*** [***Running Web Api Project***](runprojectwebapi)) Configuration for all
environment variables is defined by **DevArchitecture Code Generator**.

![](./../media/image35.png) 

This class is also used to determine which database the system will work with.

### ConfigureDevelopmentServices Method

By default, the **ConfigureDevelopmentServices** method is configured to work with **InMemoryDb**. No changes are required.

![](./../media/image36.png)

### ConfigureStagingServices Method
By default, the **ConfigureProductionServices** method is configured to work with PostgreSql.
[Download PostgreSql](https://www.postgresql.org/download/)

![](./../media/image37.png)

If **MsSql** is desired to be used, it is used as follows.
[Download MsSql](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

![](./../media/image38.png)

### ConfigureProductionServices Method
By default, the **ConfigureProductionServices** method is configured to work with **PostgreSql**.
[Download PostgreSql](https://www.postgresql.org/download/)

![](./../media/image40.png)

If **MsSql** is desired to be used, it is used as follows.
[Download MsSql](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

![](./../media/image41.png)

**authors:** Kerem VARIŞ, Veli GÖRGÜLÜ