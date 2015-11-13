---
layout: v2Section
title:  Authentication
Section: Authentication
---

Every call to a v2 API endpoint must include an access token in the header. Access tokens are acquired by calling the Authentication API, using your User Identifier and User Secret (ask your Client Services manager to assist you with setting up an API User).

Authentication header format is  <code>Authorization: Bearer {token}</code>

Access tokens expire every XX minutes, but you can get a new token by calling the Refresh Authentication API, using the refresh token returned by a successful Authentication.

There are two main ways to handle Oauth authentication, depending on how you’re using Smartling’s API. The first way is to call the Authentication API before any other API call and pass the access token directly. This is best for intermittent API access.

If you’re integrating Smartling into an application or making a high number of calls, 
you may want to maintain a current access token as a variable, updating it regularly via the Refresh Authentication API.