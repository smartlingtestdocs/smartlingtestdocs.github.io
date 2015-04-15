---
layout: FAPIMethods
title:  Download Files
Method: Download
Type: GET
RubyExample: https://gist.github.com/smartlingtestdocs/ce8e0a459fe5b84246b1
PHPExample: https://gist.github.com/smartlingtestdocs/ce8e0a459fe5b84246b1
JavaExample: https://gist.github.com/smartlingtestdocs/c2fd4fcf80cbb732ad9e
---

Downloads the requested file from Smartling.

It is important to check the HTTP response status code. If Smartling finds and returns the file normally, you will receive a 200 SUCCESS response. If you receive any other response status code than 200, the requested file will not be part of the response.

When you upload a UTF-16 character encoded file, then /file/get requests for that file will have a character encoding of UTF-16. All other uploaded files will return with a character encoding of UTF-8.

You can always use the content-type header in the response of a file/get request can always to determine the character encoding.

