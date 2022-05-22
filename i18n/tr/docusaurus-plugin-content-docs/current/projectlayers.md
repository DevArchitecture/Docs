---
id: projectlayers
title: Mimari Yapı
---

Proje katmanları arasında bulunan hiyerarşi ve iş akışı aşağıdaki
sıralamaya uygun şekildedir. Manuel olarak geliştirme yapılacağında
aşağıdaki düzen korunarak geliştirme yapılabilir. Ancak
**DevArchitecture Code Generator** kullanılması **DevArchitecture**
geliştirici ekibi tarafından tavsiye edilmektedir.


## Core

**DevArchitecture** alt yapısının tüm çekirdek sistemlerini içerir. 

Bu katman Cross Cutting Concern, Generic Repository, Jwt, Mail, RabbitMQ, Elastic Search vb. yapıların AOP yöntemleriyle ve/veya tek satırlık kodlarla hazır olarak sunulduğu katmandır.

Özel olarak bir değişiklik yapılması beklenmemektedir. 
**DevArchitecture** ekibi olarak gerekli güncelleme ve ek geliştirmeler tarafımızdan daimi olarak yapılmaktadır.
Ancak istenilen şekilde değiştirilmesinde bir sakınca yoktur.
Proje ihtiyaçlarına yönelik olarak kendiniz değiştirebilir veya bizimle iletişime geçebilirsiniz.

## Entities

Projenizin veri tabanı varlıklarını temsil edeceğiniz katmandır. Bu
varlıkların ilişkisel veri tabanı veya doküman odaklı veri tabanı
nesneleri olduğunu tanımlayacağınız katmandır.

Bir proje geliştirilme aşamasında ilk giriş noktası bu katmandır. Burada oluşturulan bir sınıf üzerinden tüm katmanlar şekillenir.

## DataAccess

Projenizin veri erişim katmanıdır. Bu katman veri tabanı ilişkilerinin yapıldığı, Contextlerin belirlendiği ve veri tabanı erişim teknolojilerinin kullanıldığı (*EFCore, MongoDb vb.*) katmandır.

## Business

Projenizin tüm iş kurallarının yazılacağı, entegrasyon mekanizmalarının yerleştirileceği katmandır.
***CQRS*** yaklaşımı sayesinde tüm kuralları esnek bir yapıda sunabilirsiniz. İster monolitik istenirse de microservis mimarilerine uygun olarak hizmet sunumu gerçekleştirilebilir.

## Tests

Projenizin test katmanıdır. Tüm iş kuralı testleri burada ilgili
birimler altında yazılır. ***DevArchitecture Code Generator*** ile test katmanı ve ilgili sınıflar için test setup ve rutinleri otomatik olarak hata vermeyecek şekilde oluşturulur. Ancak test rutinleri içerisinde bulunan açıklama satırları ve geliştirilecek olan algoritmaları değiştirmek geliştirici inisiyatifine bırakılır. [***Test Rutinleri***](testroutines)  başlığı altında detaylı olarak ele alınacaktır.

## WebAPI

Projenizin önyüz çatılarıyla (*Front-End Frameworks*) iletişim kuracağı API yüzeyi katmanıdır.
Güvenlik mekanizmasıyla birlikte gelir. **Auth** modülü metotları dışında
tüm API yüzeyi için sisteme giriş yapmış bir kullanıcı bilgisi bekler.

***Kullanıcı Yönetimi, Çoklu Dil Desteği, Performans Metrikleri, Authorization Modülleri*** hazır olarak kullanıma sunulur. Tercih edilen bir önyüz çatısı (Front-End Framework) ile birlikte kullanılabilir.

***Swagger ve DevArchitecture Code Generator*** yardımıyla metot dokümantasyonu hazır olarak sunulur. Böylelikle farklı geliştirici ekipleriyle iletişimin kolaylaştırılması öngörülmüştür.

## UIPreparation

*Angular* arayüzünün kurulumu için gerekli kurulum projesidir. ***DevArchitecture*** projesinin yeteneklerini görsel olarak sunabilmek ve geliştiricilere yol gösterici olması açısından kullanılmıştır. 
(***Not: Kullanımı Opsiyoneldir.***)

**author:** Kerem VARIŞ