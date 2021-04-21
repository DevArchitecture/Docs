---
id: projeyayinlama
title: Proje Yayınlama
---
**IIS** (**Internet Information Services**) üzerinde yayınlanacak olan proje ***Solution Configurations*** menüsü üzerinden **Release** Moda alınır. 

![](./media/image108.png)

Build menüsü altından önce ***Clean Solutions*** ardından ***Build Solution*** işlemleri gerçekleştirilir.

![](./media/image109.png)

***Solution Explorer*** penceresinden **WebAPI** projesi seçilir ve sağ tıklanır.

![](./media/image110.png)

**Rebuild** butonuna tıklanır.

![](./media/image111.png)

Yine ***Solution Explorer*** penceresinde **WebAPI** Projesi seçili durumdayken. ***Show All Files*** Butonu seçilir 

![](./media/image112.png)

ve aşağıda açılan ***Open Folder in File Explorer*** seçeneği kullanılarak  ***bin\Release*** klasörüne gidilir.

![](./media/image113.png)

Açılan klasör içinde bulunan **net5.0** klasörüne çift tıklanarak girilir.

![](./media/image114.png)

Bu klasör içerisinde **web.config** dosyası bulunur.

![](./media/image115.png)

notepad veya notepad++ gibi bir metin editörü yardımıyla açılır.

![](./media/image116.png)

processPath="**bin\Debug\net5.0\WebAPI.exe**"  değeri 

![](./media/image117.png)

aşağıdaki şekilde değiştirilir. processPath="**.\WebAPI.exe**"

![](./media/image118.png)

Sunucunuzda bulunan C:\inetpub\wwwroot klasörü altında uygulamanızı yayınlayacağınız bir klasör açıp dosyalarınızı içerisine kopyalarak veya bir FTP istemcisi ile dosyalarınızı ilgili klasöre  taşımanız gerekmektedir.

![](./media/image119.png)

**IIS** açılır **Uygulama Havuzları** menüsünden ***Uygulama Havuzu Ekle** butonuna basılır.

![](./media/image120.png)

Yeni uygulama havuzu eklenirken .NetCore uygulamaları için **Uygulama Havuzu Adı (Opsiyonel Olarak Değişkenlik gösterir)**  dışındaki bilgiler aşağıdaki gibi olmalıdır. 

![](./media/image121.png)

IIS altında Siteler (***Sites***) menüsünden **Default Web Site** (***Burası sunucunuzun Name Server olması durumuna göre değişiklik gösterecektir. www.devarchitecture.net gibi bir alan adı şeklinde de çalışabilir.***) eklenilen klasör şeçilir.

![](./media/image122.png)

Klasör üzerinde sağ tıklanır ve **Uygulamaya Dönüştür** butonuna basılır.

![](./media/image123.png)

Açılan ekranda uygulama havuzunu değiştirmek için **Seç** butonuna basılır.

![](./media/image124.png)

Daha önce belirlediğimiz Uygulama havuzu seçilir. 

![](./media/image125.png)

**Tamam** butonlarına tıklanarak ekranlar kapatılır.

artık bir web browser marifetiyle **http://localhost/apitest/swagger/index.html** veya gerçek bir sunucu üzerindeyseniz **http{s}://<<ALAN_ADI>>/swagger/index.html** yazarak uygulamanızın çalışır halini test edebilirsiniz.

![](./media/image126.png)