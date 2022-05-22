---
id: newcomponentangular
title: Component Oluşturma (Angular)
---
Öncesinde **DevArchitecture** WebAPI katmanından veri sunmak üzere hazırlanmış bir modül için ilgili sınıf üzerinde sağ tıklanır. Açılan menüden sırasıyla **DevArchitecture Menu** -> ***Create Angular Files*** menüsüne tıklanır. 

![](./../../../../media/image105.png)

Front-End desteğinin **DevArchitecture** bağımlılığını azaltmak için istediğiniz bir klasöre ng component'i oluşturabileceğiniz şekilde ayarlanmıştır. 
![](./../../../../media/image106.png)

Oluşturulan *ng componentinin* sistemde çalışır hale getirilebilmesi için gerekli dosyalar oluşturulduktan sonra 3 aşamada sisteme eklenmesi gerekir.

1. ***admin-layout.module.ts*** içerisinde bulunan **declarations** *Component Sınıfı* kısmına eklenir.

![](./../../../../media/image102.png)

2. ***admin-layout.routing.ts*** içerisinde **AdminLayoutRoutes** kısmına *path* olarak eklenir.
   
![](./../../../../media/image104.png)

3. ***sidebar.components.ts*** içerisinde **USERROUTES** kısmına *path* olarak eklenir.
   
![](./../../../../media/image103.png)



**author:** Kerem VARIŞ