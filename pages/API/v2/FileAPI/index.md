---
layout: v2Section
title:  Files
Section: Files
---

<section>
<p>Smartling's File API allows you to upload and retrieve files, display a list of recently uploaded files, and check the status of a translation’s progress. All URLs have the following base: https://api.smartling.com/</p>

<p>All calls must include an auth token in the header. See <a href="/pages/API/v2/Authentication/">Authentication</a> for more details.</p>

<p>Multiple READ operations can run simultaneously on a single file, but only one WRITE operation can run at a time. Attempting any other operation on a file while a WRITE operation is running will result in an error.</p>

<p>Concurrent API requests are limited to 20 per file and 50 per project. Exceeding this limit will result in a MAX_OPERATIONS_LIMIT_EXCEEDED error.</p>
</section>