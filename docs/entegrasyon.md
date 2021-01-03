---
id: entegrasyon
title: Dış Servislerle Entegrasyon
---


### WebService Entegrasyonu
Webservice entegrasyonu örnek uygulaması için https://tckimlik.nvi.gov.tr/Service/KPSPublic.asmx servisi kullanılmıştır. Bu servisin beklediği bilgiler aşağıda bulunan şekilde işaretlenmiştir. 

![](./media/image57.png)

**Connected Services** eklendikten sonra dış servislerle iletişim noktası olarak **Business -> Adapters** klasörü kullanılır. 

![](./media/image58.png)

Belirli bir düzen sağlamak için **Adapters** klasörü altında **PersonService** isminde bir klasör oluşturulur. Bu servisi temsil eden bir **IPersonService** Interface'i ve ***VerifyCid*** isminde dış servisin beklediği propertyleri temsil eden bir metot ile ilk giriş noktası oluşturulur. 

![](./media/image59.png)

**IPersonService** Interface'inin implementasyonu aşağıdaki şekilde gösterilmiştir.

![](./media/image60.png)

Bu şekilde dış bir servis **DevArchitecture** mimari yapısına uygun çalışır ve metotlar tarafından erişilebilir hale getirilir.

### RESTful API Service Entegrasyonu

**DevArchitecture** ile RESTful API Service entegrasyonu için **Refit** kütüphanesi kullanılır.

![](./media/image61.png)

