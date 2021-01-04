---
id: rabbitmq
title: RabbitMQ Kullanımı
---
### Tanım
**DevArchitecture**, **RabbitMq** için **Producer** olarak çalışır. 

### Konfigürasyon
Gerekli ayarları tanımlı olarak gelir. **WebAPI** projesi altında bulunan ***appsettings.json*** dosyası içinde **MessageBrokerOptions** anahtarı altından ihtiyaç duyulursa **UserName**, **Password** ve **HostName** değişiklikleri yapılır.

![](./media/image79.png)

### Kullanım
**RabbitMq** altyapısına bir mesaj gönderilmek istenildiği zaman bir **Command** veya **Query** sınıfı içerisinde gerekli işlem yapılır. 

***IMessageBrokerHelper*** Interface'i ilgili sınıfın **constructor** metotuna **Inject** edilir.

![](./media/image80.png)

Aynı sınıfın Handle metotu içerisinde inject edilen  *_messageBrokerHelper.***QueueMessage** metotu çağırılır. Bu metot içine metin bazlı ifade alabilir.

![](./media/image80.png)

**RabbitMq** üzerinde **Queues** sekmesi kontrol edilir.

![](./media/image82.png)

**Swagger** üzerinden ilgili metot çağrılır.

![](./media/image83.png)

### Sonuç
Bu metot çağırıldığında otomatik olarak **RabbitMq**'ya belirtilen mesaj gönderilir.

![](./media/image84.png)

Gönderilen mesajın detayı görüntülenmek istenirse **Queue** detayına gidilerek görüntülenir. .

![](./media/image85.png)