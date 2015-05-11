---
layout: FAPIMethods
title:  Download Files
method: DownloadFiles
---


<p>It is important to check the HTTP response status code. If Smartling finds and returns the file normally, you will receive a 200 SUCCESS response. If you receive any other response status code than 200, the requested file will not be part of the response.</p>

<p>When you upload a UTF-16 character encoded file, then /file/get requests for that file will have a character encoding of UTF-16. All other uploaded files will return with a character encoding of UTF-8.</p>

<p>You can always use the content-type header in the response of a file/get request can always to determine the character encoding.</p>




<table class="required">
    <tbody><tr>
        <td>FileURI (required)</td>
    </tr>
    <tr>
        <td colspan="2">Value that uniquely identifies the downloaded file.</td>

</tr></tbody></table>

<table class="optional">
    <tbody><tr>
        <td>locale (optional)</td>
    </tr>
    <tr>
        <td colspan="2">A locale identifier as specified in project setup. If no locale is specified, original content is returned. You can find the list of locales for your project [in the Smartling dashboard](https://dashboard.smartling.com/settings/api). For CSV files only: use the locale code "all" to download all available locales in a single file.</td>

</tr></tbody></table>

<table class="optional">
    <tbody><tr>
        <td>retrievalType (optional)</td>
    </tr>
    <tr>
        <td colspan="2">Determines the desired format for the download.</td>

    </tr><tr>
        <td>pending</td><td>Smartling returns any translations (including non-published translations).</td>
    </tr>

    <tr>
        <td>published</td><td>Smartling returns only published/pre-published translations.</td>
    </tr>

    <tr>
        <td>pseudo</td><td>Smartling returns a modified version of the original text with certain characters transformed and the text expanded. For example, the uploaded string "This is a sample string", will return as "T~hís ~ís á s~ámpl~é str~íñg". Pseudo translations enable you to test how a longer string integrates into your application.</td>
    </tr>

    <tr>
        <td>contextMatchingInstrumented</td><td>Smartling returns a modified version of the original file with strings wrapped in a specific set of Unicode symbols that can later be recognized and matched by the Chrome Context Capture Extension.</td>
    </tr>

</tbody></table>

<table class="optional">
    <tbody><tr>
        <td>includeOriginalStrings (optional)</td>
    </tr>
    <tr>
        <td colspan="2">Specifies whether Smartling will return the original string or an empty string where no translation is availabe. This parameter is supported for gettext, java properties, custom XML, and JSON files only.</td>

    </tr><tr>
        <td>true</td><td>If there is no translation, Smartling returns the original string.</td>
    </tr>

    <tr>
        <td>false</td><td>If there is no translation, Smartling returns an empty string.</td>
    </tr>

</tbody></table>





Downloads the requested file from Smartling.

It is important to check the HTTP response status code. If Smartling finds and returns the file normally, you will receive a 200 SUCCESS response. If you receive any other response status code than 200, the requested file will not be part of the response.

When you upload a UTF-16 character encoded file, then /file/get requests for that file will have a character encoding of UTF-16. All other uploaded files will return with a character encoding of UTF-8.

You can always use the content-type header in the response of a file/get request can always to determine the character encoding.
