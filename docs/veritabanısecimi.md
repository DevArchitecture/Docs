---
id: veritabanisecimi
title: Veri Tabanı Seçimi ve Yapılandırması
---

## Business Katmanı
### Startup Sınıfı
**Business->Startup.cs** sınıfına **Autofac** için gerekli olan **Register** işlemi burada konfigüre edilir. Burası aynı zamanda **Development, Staging, Production** ortam değişkenlerinin yönetildiği yerdir. (***Ortam değişkenlerinin detayı için bkz.*** [***Web Api Projesini Çalıştırma***](projecalistirmawebapi))
 Tüm ortam değişkenleri için konfigürasyon **DevArchitecture Code Generator** tarafından tanımlanır.

![](./media/image35.png) 

Bu sınıf aynı zamanda sistemin hangi veri tabanı ile çalışacağını belirlemek için de kullanılır.

### ConfigureDevelomentServices Sınıfı
**ConfigureDevelomentServices** metotu ön tanımlı olarak **InMemoryDb** ile çalışacak şekilde konfigüre edilmiştir.
Herhangi bir değişiklik yapılması gerekmemektedir.

![](./media/image36.png)

### ConfigureStagingServices Sınıfı
**ConfigureStagingServices** metotu ön tanımlı olarak **PostgreSql** ile çalışacak şekilde konfigüre edilmiştir. [Download PostgreSql](https://www.postgresql.org/download/)

![](./media/image37.png)

**MsSql** kullanılmak istenirse aşağıdaki şekilde kullanılır.
[Download MsSql](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

![](./media/image38.png)

### ConfigureProductionServices Sınıfı
**ConfigureProductionServices** metotu ön tanımlı olarak **PostgreSql** ile çalışacak şekilde konfigüre edilmiştir.
[Download PostgreSql](https://www.postgresql.org/download/)

![](./media/image40.png)

**MsSql** kullanılmak istenirse aşağıdaki şekilde kullanılır.
[Download MsSql](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

![](./media/image41.png)

**author:** Kerem VARIŞ