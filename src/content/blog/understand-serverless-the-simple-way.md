---
title: "Understand Serverless - The Simple Way"
excerpt: "Demystifying serverless architecture — how it works, why it saves time and money, and when you should consider using it for your applications."
date: "2021-01-08"
readTime: "3 min read"
tags: ["Serverless", "AWS", "Cloud"]
image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1701925494984/5ff7f3cea538d001351530ab.png"
---

While building an application we write so many lines of code & we try to break and make them a re-usable function, we tweak many configs to increase the performance. We follow different architecture types so that it would help us to efficiently manage the application and Obviously we have to take care of security.

You might say.

> Yeah as developers it’s our responsibility to build and maintain the app.

I agree, but what if there’s a way where you just write a code only to accomplish a certain task and nothing else. No setting up the server, No configs, Moreover you don’t have to maintain the server or think about how you can improve the performance.

> I know right 😜, that is something which would come in handy.

Probably you might have understood the whole purpose of serverless by now, but anyway we’ll learn more about that.

> *Note: We won't be installing serverless or learn about its commands for now, we'll just understand serverless and its concept of simplifying application development.*

So what is serverless?
======================

Okay, here the term serverless doesn’t mean that there won’t be any servers for your application, what it actually means is that you will have a server but it would be managed by someone else for you. That someone else would be your cloud provider(AWS, GCP, etc).

🙄Ummm. What?

Okay let me break down

* Serverless means that your server will be provided and managed by your cloud providers rather than by yourself.
* So that you just write a function that’ll serve your app and that’s it.
* And you can forget about setting up your server all by yourself and configuring it.

Interesting, is it compatible with all the backend programming languages?
-------------------------------------------------------------------------

**Yes**.
Although it depends on your provider, as far as i know, they support all the backend language such as NodeJS, Python, Ruby, Go, PHP, etc.

So what is the benefit of serverless?
=====================================

* With serverless, It’s **Pay As You Use** policy, you don’t have to pay when you’re not serving any requests.
* With serverless, you don’t have to worry about **uptime**  and **maintenance** of the server and all its resources.
* Serverless is auto-scaling. Your server automatically scales up when the request increases and scales down when the request decreases.
* And yeah less code for us to maintain.🥳

Popular serverless tools
========================

**Compute**

* AWS: Lambda, Amazon Fargate*(for Containers)*
* Google Cloud: Cloud Functions

**Database**

* AWS: Amazon DynamoDB

I’m listing only a few tools to keep this blog short and also which are good to get started with serverless.

That's it folks, hope you understood the serverless concept. If this blog was useful, then please consider leaving a reaction and a comment.

Happy coding.