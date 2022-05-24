---
id: projectreleaseazure
title: Project Publishing(Azure)
---
The project to be published on **Azure** is selected from the **Solution Explorer** window and right-clicked.

![](./../media/image127.png)

Click the **Publish..** button.

![](./../media/image128.png)

**Azure** is selected as the **Target** and the **Next** button is clicked.

![](./../media/image129.png)

An appropriate option is selected as **Specific Target** and the **Next** button is clicked. In this example, **Windows** has been selected.

![](./../media/image130.png)

**Azure account** is required to create **App Service**. If you don't have an **Azure account**, create one.

![](./../media/image131.png)

Click the green **+** button to create an **App Service**.

![](./../media/image132.png)

On the page that opens, 4 fields must be filled. The App Service name is determined from the **Name** field.
Subscription type is selected from the **Subscription name** field. A resource group is created by clicking the
**New...** button for the **Resource group** field. For the **Hosting Plan** field, a hosting plan is created by
clicking the **New..** button. After all fields are filled, the **Create** button is clicked.

![](./../media/image133.png)

After selecting the **App Service** you have created, click the **Next** button.

![](./../media/image134.png)

 If API Management, which is an **API management** platform, is desired, the green **+**
 button is clicked and created. Since it will not be used in this example, the **Skip this step**
 option is selected and the **Finish** button is clicked.

![](./../media/image135.png)

If **Ready to publish** text appears on the publish screen, the **Publish** button is clicked.

![](./../media/image136.png)

After publishing, you can go to your site by clicking the **Open site** link (the page will not be found because it is an API).

![](./../media/image137.png)

To test the running version of your application on **Swagger**, you can go to http{s}://<<FIELD_NAME>>/swagger/index.html with the help of your browser's address bar.

![](./../media/image138.png)

**author:** Veli GÖRGÜLÜ
