---
id: transaction
title: Transaction Aspect Kullanımı
---
**TransactionScopeAspectAsync**, **Business -> Handlers -> <SınıfAdi>** klasörü altında bulunan **Command ve Query** sınıfları içinde **Handle** metotları üzerinde **Attribute** olarak kullanılır. Örnek olarak aşağıda bulunan temsili sınıf kullanılmıştır. 

**TransactionScopeAspectAsync** bir ***Command*** veya ***Query*** sınıfı içerisinde birden fazla **Command** yapısı çağırılması gerektiği zamanlarda kullanılır. Transactional operasyonlar içinde bulunan tüm metotlar çalıştırılır. Eğer işlemlerin tamamı başarılı olarak dönerse işlem başarılı olarak tamamlanır. Çağırılan metotlardan bir metot hata sonucu ile karşılaşırsa **Rollback** çalıştırılır ve başarılı olan tüm operasyonlar da geri alınarak işlem sonlandırılır. 

![](./media/image53.png)

