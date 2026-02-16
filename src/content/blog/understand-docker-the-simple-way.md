---
title: "Understand Docker - The simple way"
excerpt: "A beginner-friendly breakdown of Docker — what it is, why it matters, and how it helps developers build and ship applications as lightweight containers."
date: "2021-01-01"
readTime: "3 min read"
tags: ["Docker", "DevOps"]
image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1701925494984/5feee82d017ebb59232de2d5.png"
---

If you’re one of the people who are interested in DevOps, then you might have heard about a term called **Docker**. Oh yeah, a fancy word that literally everybody talks about. So, what is it really? Why is everybody talking about this? Is it really that useful for your application? Why do you really need it?.

If you’re having all these questions in your head then you’re in the right place, we’ll go through all basics that are required to properly understand Docker.

*Note: We won't be installing docker or learn about its command here, we'll just understand docker and its concept of delivering software.*

### What is Docker?

Docker is an open-source tool that helps developers to build and ship their app as a lightweight container. You can assume a container as a box. A box that contains your application inside.

### Okay, but why do we need a container? Can't we just ship our app manually without any container or whatsoever?

Yes, we can ship our app manually by installing our application in the server & building the app inside the server, and then running it. But this method is fine for small projects which don’t depend on a lot of external components like cache, mail servers, etc. But think about large-scale applications you can’t install and configure your large-scale application all by yourself in the server, right!. And also think about how much time you spend installing and setting them up and at last, all you get is some kind of weird error. Don’t you think that if you just run command and some kind of magic happens and boom! Your application is installed, built, and running on your server. Yes and that magic would be possible with docker containers. You first build a docker image from your local development machine and then drop that image into your production server, and if you just execute that image, then that’s it, that docker image will run all the docker containers inside it, and then the container will setup your application automatically.

Phew that was long😅

summary*: you need containers to automate the steps of installing, configuring & running the application on the server.*

The above concept made docker stand out and simplified the way we deliver products. Awesome isn't it.🤗

Okay moving on.

### When not use docker?

To be honest, if you google this question, you're going to find pretty complicated answers. You’ll understand them once you understand docker. So I’ll give rather simple & beginner-friendly answers.

* Don’t use docker if you’re building a small application, like a portfolio, etc
* Don’t use docker if your application doesn’t require many external services like databases, cache, router, etc.
* Don’t use docker in your large scale app unless you are confident enough to maintain and integrate it with other advanced DevOps tools.

So that's it folks, hope you guys have a solid understanding of docker & its concepts. Happy coding.