---
layout: page
title: File API
---
<section>
<p>Smartling's File API allows you to upload and retrieve files, display a list of recently uploaded files, and check the status of a translation’s progress. All URLs have the following base: https://api.smartling.com/v1</p>

<p>All the following calls require both the apiKey and projectID parameter, which you can find on at [**Project Settings>API**](https://dashboard.smartling.com/settings/api) in the Smartling Dashboard.</p>

<p>Multiple READ operations can run simultaneously on a single file, but only one WRITE operation can run at a time. Attempting any other operation on a file while a WRITE operation is running will result in an error.</p>

<p>Concurrent API requests are limited to 20 per file and 50 per project. Exceeding this limit will result in a MAX_OPERATIONS_LIMIT_EXCEEDED error.</p>
</section>

<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Methods</h3>
  </div>
  <div class="panel-body">
    <ul class="text-list">
      <li>upload (POST)</li>
      <li >download (GET)</li>
      <li >list (GET)</li>
      <li >status (GET)</li>
      <li >rename (POST)</li>
      <li >delete (DELETE)</li>
      <li >import (POST)</li>
      <li >last_modified (GET)</li>
    </ul>
  </div>
</div>

