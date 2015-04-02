---
layout: post
title:  Download Files
---
**Method:** Download  
**Type:** GET 

Downloads the requested file from Smartling.

<message>
It is important to check the HTTP response status code. If Smartling finds and returns the file normally, you will receive a 200 SUCCESS response. If you receive any other response status code than 200, the requested file will not be part of the response.

When you upload a UTF-16 character encoded file, then /file/get requests for that file will have a character encoding of UTF-16. All other uploaded files will return with a character encoding of UTF-8. You can always use the content-type header in the response of a file/get request can always to determine the character encoding.
</message>

##Parameters

<html>
<table style="border: 1px solid black">
  <thead>
    <tr>
      <td>fileURI (required)</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><em>Value that uniquely identifies the downloaded file</em></td>
    </tr>
    <tr>
      <td><code></code></td>
    </tr>
  </tbody>
</table>
      
<table style="border: 1px solid black; border-collapse: collapse">
  <thead>
    <tr style="border: 1px solid black; background-color: #d3d3d3">
      <td><strong>Retrieval Type (optional)<strong></td>
    </tr>
  </thead>
  <tbody>
    <tr style="border: 1px solid black">
      <td><em>Determines the desired format for the download</em></td>
    </tr>
    <tr>
      <td><code>pending</code>- Smartling returns any translations (including non-published translations).<br/>
          <code>published</code>(default) - Smartling returns only published/pre-published translations.<br/>
          <code>pseudo</code>- Smartling returns a modified version of the original text with certain characters transformed and the text expanded. For example, the uploaded string “This is a sample string”, will return as “T~hís ~ís á s~ámpl~é str~íñg”. Pseudo translations enable you to test how a longer string integrates into your application.<br/>
          <code>contextMatchingInstrumented</code>- Smartling returns a modified version of the original file with strings wrapped in a specific set of Unicode symbols that can later be recognized and matched by the Chrome Context Capture Extension.</td>
    </tr>
  </tbody>
</table>
</html>




|locale (optional)|
|:-----------------|
|A locale identifier as specified in project setup. If no locale is specified, original content is returned. You can find the list of locales for your project [in the Smartling dashboard](https://dashboard.smartling.com/settings/api). For CSV files only: use the locale code 'all' to download all available locales in a single file.|
  
### retrievalType (optional
Determines the desired format for the download

**Values**  
<code>pending</code> - Smartling returns any translations (including non-published translations).  
<code>published</code> (default)** - Smartling returns only published/pre-published translations.  
<code>pseudo</code> - Smartling returns a modified version of the original text with certain characters transformed and the text expanded. For example, the uploaded string "This is a sample string", will return as "T~hís ~ís á s~ámpl~é str~íñg". Pseudo translations enable you to test how a longer string integrates into your application.  
<code>contextMatchingInstrumented</code> - Smartling returns a modified version of the original file with strings wrapped in a specific set of Unicode symbols that can later be recognized and matched by the Chrome Context Capture Extension.  

### includeOriginalStrings (optional)
Specifies whether Smartling will return the original string or an empty string where no translation is availabe. This parameter is supported for gettext, java properties, custom XML, and JSON files only. 

**Values**  
* **true (default)** - If there is no translation, Smartling returns the original string. 
* **false** - If there is no translation, Smartling returns an empty string. 

###Example
```
curl -d "apiKey={your-api-key}&fileUri=file.properties&projectId={your-project-uid}&locale=ru-RU" "https://api.smartling.com/v1/file/get"
```