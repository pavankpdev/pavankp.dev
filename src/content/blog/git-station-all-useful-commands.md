---
title: "Git Station - All useful git commands in one place."
excerpt: "A single-page app listing all the essential Git commands you use every day — built as a submission to the Amplify hackathon."
date: "2021-02-27"
readTime: "2 min read"
tags: ["Git", "Tools", "Productivity"]
image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1701925494984/603a51499aeaec6b8ed53281.png"
---

Hey guys, hope you're all doing great. As my submission to amplify hackathon, I've built a single page app that lists all of the git commands that are used every single day.

This idea struck my head, when my friends who are new to git, were facing trouble finding git commands online, searching across different websites. So I thought maybe I could build an app that will have a list of all the useful git commands. Although we can just google all the git commands, my idea was to try as much as possible to present them with a non-technical title.

[demo](https://main.d23zu1s17t6ube.amplifyapp.com/)

[github repo](https://github.com/pavankpdev/Git-Station)

Tech Stack
==========

**JAM** (JavaScript, Algolia, Markup) 😅

Implementation
==============

Layout was simple

* Search Bar
* Scrollable listing of cards
* Dark & Light mode toggle

To optimize the search I used [Algolia](https://www.algolia.com/), which is an excellent search library, provides amazing search features with few lines of code.

Coming to data, I made a spreadsheet and used it collected all the git commands. Later I exported it as CSV and uploaded it to Algolia.

Here are some snaps
-------------------

#### Light Mode

![Group 1.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1614434205423/t_PzuJt6N.png)

#### Dark Mode

![Frame 2.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1614434220563/Ykxtowe9J.png)

So that's it, guys. Please do check out the project and add your observations and suggestions in the comment below.

[demo](https://main.d23zu1s17t6ube.amplifyapp.com/)

[github repo](https://github.com/pavankpdev/Git-Station)

Happy Coding 😄