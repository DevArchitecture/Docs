---
id: projectreleaseazure
title: Proje Yayınlama(Azure)
---
**Azure** üzerinde yayınlanacak olan proje ***Solution Explorer*** penceresinden seçilir ve sağ tıklanır.

![](./../../../../media/image127.png)

**Publish..** butonuna tıklanır.

![](./../../../../media/image128.png)

**Target** olarak **Azure** seçilir ve **Next** butonuna tıklanır.

![](./../../../../media/image129.png)

**Spesific Target** olarak uygun bir seçenek seçilir ve **Next** butonuna tıklanır. Bu örnekte **Windows** seçilmiştir.

![](./../../../../media/image130.png)

**App Service** oluşturmak için **Azure hesabı** gereklidir. **Azure hesabınız** yoksa bir tane oluşturunuz.

![](./../../../../media/image131.png)

**App Service** oluşturmak için yeşil renkli **+** butonuna tıklanır.

![](./../../../../media/image132.png)

Açılan sayfada 4 alanın doldurulması gerekmektedir. **Name** alanından App Service adı belirlenir. **Subscription name** alanından abonelik türü seçilir. **Resource group** alanı için **New..** butonuna tıklanarak bir kaynak grubu oluşturulur. **Hosting Plan** alanı için de **New..** butonuna tıklanarak bir hosting planı oluşturulur. Tüm alanlar doldurulduktan sonra **Create** butonuna tıklanır.

![](./../../../../media/image133.png)

Oluşturmuş olduğunuz **App Service** seçildikten sonra **Next** butonuna tıklanır. 

![](./../../../../media/image134.png)

 API yönetim platformu olan **API Management** kullanılmak isteniyorsa yeşil renkli **+** butonuna tıklanır ve oluşturulur. Bu örnekte kullanılmayacağı için **Skip this step** seçeneği seçilir ve **Finish** butonuna tıklanır.

![](./../../../../media/image135.png)

Publish ekranında **Ready to publish** yazısı görünüyorsa **Publish** butonuna tıklanır. 

![](./../../../../media/image136.png)

Publish yapıldıktan sonra **Open site** linkine tıklayarak sitenize gidebilirsiniz (API olduğu için sayfa bulunamayacaktır).

![](./../../../../media/image137.png)

Uygulamanızın çalışır halini **Swagger** üzerinde test etmek için tarayıcınızın adres çubuğu yardımıyla http{s}://<<ALAN_ADI>>/swagger/index.html adresine gidebilirsiniz.

![](./../../../../media/image138.png)

**author:** Veli GÖRGÜLÜ