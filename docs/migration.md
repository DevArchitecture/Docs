---
id: migration
title: Migration Yönetimi
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );


Bir migration oluşturulmadan önce proje için bir ortam değişkeni
seçilmelidir. Ortam değişkeni seçimi aşağıdaki komut setleri
kullanılarak yapılır.

DevArchitrecture için iki tip ortam değişkeni bulunmaktadır bunlar;

-   **Staging**

-   **Production**

Yukarıda belirtilen ortam değişkenleri için migration yapılacaksa seçim
yapılarak aşağıdaki komut örnekleri çalıştırılır.

**$env:ASPNETCORE_ENVIRONMENT=<Highlight color="#FF0000">'Staging'</Highlight>**

**$env:ASPNETCORE_ENVIRONMENT=<Highlight color="#FF0000">'Production'</Highlight>**

### PostgreSql

PostgreSql üzerinde migration çalıştırmak için sırasıyla aşağıdaki
komutlar çalıştırılır.

#### IDE üzerinden Migration

Eğer IDE\'den örneğin staging\'e migration yapılacaksa

**$env:ASPNETCORE_ENVIRONMENT=<Highlight color="#FF0000">'Staging'</Highlight>**

**Add-Migration <Highlight color="#FF0000">InitialCreate</Highlight> -Context ProjectDbContext -OutputDir
Migrations/Pg**

**$env:ASPNETCORE_ENVIRONMENT=<Highlight color="#FF0000">'Staging'</Highlight>**

**Update-Database -context ProjectDbContext**

#### Komut Satırı üzerinden Migration

**dotnet ef migrations add <Highlight color="#FF0000">InitialCreate</Highlight> \--context ProjectDbContext
\--output-dir Migrations/Pg**

### 

### MsSql

Microsoft Sql Server üzerinde migration çalıştırmak için sırasıyla
aşağıdaki komutlar çalıştırılır.

#### IDE üzerinden Migration

**$env:ASPNETCORE_ENVIRONMENT=<Highlight color="#FF0000">'Staging'</Highlight>**

**Add-Migration <Highlight color="#FF0000">InitialCreate</Highlight> -context MsDbContext -OutputDir
Migrations/Ms**

**$env:ASPNETCORE_ENVIRONMENT=<Highlight color="#FF0000">'Staging'</Highlight>**

**Update-Database -context MsDbContext**

#### Komut Satırı üzerinden Migration

**dotnet ef migrations add <Highlight color="#FF0000">InitialCreate</Highlight> \--context MsDbContext
\--output-dir Migrations/Ms**
