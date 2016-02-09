---
layout: page
title:  Response Format
redirect_from: 
  - "/display/docs/Response+Format/"
  - "/pages/API/Response-Format"
---

<p>Responses are encoded into a generalized JSON structure with three basic properties: a response code, messages describing any errors that occurred during processing and a custom data object.</p>

<pre>{"response":{"code":"SUCCESS","messages":[],"data":null,}}</pre>

<p>The generalized JSON response is returned by every service with three properties:</p>

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;background-color:#F5F5F5;}
@media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;}}</style>
<div class="tg-wrap"><table class="tg">
  <tr>
    <th class="tg-031e">Value</th>
    <th class="tg-031e">Description</th>
    <th class="tg-031e">HTTP Code</th>
  </tr>
  <tr>
    <td class="tg-031e">SUCCESS</td>
    <td class="tg-031e">If the service request was processed normally</td>
    <td class="tg-031e">200</td>
  </tr>
  <tr>
    <td class="tg-031e">VALIDATION_ERROR</td>
    <td class="tg-031e">If something specific was wrong with the request parameters provided. One or more will describe the particular invalid parameter.</td>
    <td class="tg-031e">400</td>
  </tr>
  <tr>
    <td class="tg-031e">AUTHENTICATION_ERROR</td>
    <td class="tg-031e">If the provided credentials were not valid.</td>
    <td class="tg-031e">401</td>
  </tr>
  <tr>
    <td class="tg-031e">AUTHORIZATION_ERROR</td>
    <td class="tg-031e">Legacy error code from API</td>
    <td class="tg-031e">401</td>
  </tr>
  <tr>
    <td class="tg-031e">RESOURCE_LOCKED</td>
    <td class="tg-031e">The requested file is currently being processed by another operation. The file will be unlocked after the operation completes. See <a href="/pages/API/FileAPI/Upload-File/">Upload</a> for more details.</td>
    <td class="tg-031e">423</td>
  </tr>
  <tr>
    <td class="tg-031e">MAX_OPERATIONS_LIMIT_EXCEEDED</td>
    <td class="tg-031e">Too many simultaneous API requests per project or file.</td>
    <td class="tg-031e">429</td>
  </tr>
  <tr>
    <td class="tg-031e">GENERAL_ERROR</td>
    <td class="tg-031e">If an unexpected error occurred during the service request processing.</td>
    <td class="tg-031e">500</td>
  </tr>
  <tr>
    <td class="tg-031e">MAINTENANCE_MODE_ERROR</td>
    <td class="tg-031e">If Smartling has entered maintenance mode, all API  services will return this error. After exiting maintenance mode all services should return to normal.</td>
    <td class="tg-031e">503</td>
  </tr>
</table></div>

<br/>
<h4>Examples:</h4>

<pre>
{"response":{"data":null,"code":"VALIDATION_ERROR","messages":["apiKey parameter is required","apiVersion parameter is required"]}}
</pre>

<pre>
{"response":{"data":{"wordCount":1629,"stringCount":503,"overWritten":false},"code":"SUCCESS","messages":[]}}</pre>
