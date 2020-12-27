---
id: projekatmanlari
title: Proje Katmanları
---

Proje katmanları arasında bulunan hiyerarşi ve iş akışı aşağıdaki
sıralamaya uygun şekildedir. Manuel olarak geliştirme yapılacağında
aşağıdaki düzen korunarak geliştirme yapılabilir. Ancak
**DevArchitecture Code Generator** kullanılması **DevArchitecture**
geliştirici ekibi tarafından tavsiye edilmektedir.

## Core

DevArchitecture alt yapısının tüm çekirdek sistemlerini içerir.

## Entities

Projenizin veritabanı varlıklarını temsil edeceğiniz katmandır. Bu
varlıkların ilişkisel veritabanı veya doküman odaklı veri tabanı
nesneleri olduğunu tanımlayacağınız katmandır.

## DataAccess

Projenizin veri erişim katmanıdır.

## Business

Projenizin tüm iş kurallarının yazılacağı katmandır.

## Tests

Projenizin test katmanıdır. Tüm iş kuralı testleri burada ilgili
birimler altında yazılır.

## WebAPI

Projenizin önyüz çatılarıyla iletişim kuracağı API yüzeyi katmanıdır.
Güvenlik mekanizmasıyla birlikte gelir. Auth modülü metotları dışında
tüm API yüzeyi için sisteme giriş yapmış bir kullanıcı bilgisi bekler.

## UIPreparation

Angular arayüzünün kurulumu için gerekli kurum projesidir.