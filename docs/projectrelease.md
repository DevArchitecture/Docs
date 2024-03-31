---
id: projectrelease
title: Project Publishing(IIS)
---

The project to be published on **IIS** (**Internet Information Services**) is taken to **Release** Mode via the **Solution Configurations** menu.

![](./../media/image108.png)

Under the Build menu, first **Clean Solutions** and then **Build Solutio**n operations are performed.

![](./../media/image109.png)

Select the **WebAPI** project from the **Solution Explorer** window and right-click.

![](./../media/image110.png)

Click the **Rebuild** button.

![](./../media/image111.png)

With the **WebAPI** Project selected in the **Solution Explorer** window, the **Show All Files** Button is clicked.

![](./../media/image112.png)

Using the **Open Folder in File Explorer** option opened below, go to the **bin\Release** folder.

![](./../media/image113.png)

It is entered by double-clicking on the **net6.0** folder in the opened folder.

![](./../media/image114.png)

This folder contains the **web.config** file.

![](./../media/image115.png)

It opens with the help of a text editor such as notepad or notepad++.

![](./../media/image116.png)

The processPath="**bin\Debug\net6.0\WebAPI.exe**" value

![](./../media/image117.png)

is changed as follows. processPath="**.\WebAPI.exe**"

![](./../media/image118.png)

You need to open a folder where you will publish your application under the
C:\inetpub\wwwroot folder on your server and copy your files into it or move
your files to the relevant folder with an FTP client.

![](./../media/image119.png)

**IIS** opens. From the **Application Pools** menu, click the **Add Application Pool** button.

![](./../media/image120.png)

When adding a new application pool, the information other than
**Application Pool Name (Optionally Varies)** for .NetCore applications should be as follows.

![](./../media/image121.png)

From the Sites menu under IIS, select the folder to which the **Default Web Site** is added 
(***This will vary depending on whether your server is Name Server. It can also work as a domain name such as www.devarchitecture.net**).

![](./../media/image122.png)

Right click on the folder and click the **Convert to Application** button.

![](./../media/image123.png)

On the screen that opens, click the **Select** button to change the application pool.

![](./../media/image124.png)

The Application pool that we specified earlier is selected.

![](./../media/image125.png)

Clicking the **OK** button for closes the screens.

Now, you can test the working state of your application by typing **http://localhost/apitest/swagger/index.html** with a web browser or
**http{s}://<<FIELD_NAME>>/swagger/index.html** if you are on a real server.

![](./../media/image126.png)

**authors:** Kerem VARIŞ, Veli GÖRGÜLÜ