---
title: "Debouncing in React Apps made simple"
excerpt: "A simple guide to implementing debouncing in React apps — improving performance by limiting how often expensive operations are triggered."
date: "2021-10-16"
readTime: "5 min read"
tags: ["React", "JavaScript", "Performance"]
image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1701925494984/616ab70a18374f257327baf2.png"
---

Hey guys welcome to my blog, today we'll be talking about debouncing in JavaScript and React.

Let's say we have a client who wants us to build a text editor, now that we have built an amazing editor, the only thing that is left is the **auto-save** feature. The client requirement is that we should autosave the content when the user stops typing because we don't want to interrupt them while they are typing.

Hm. This is kinda tricky.

So does this mean that we have to keep track of their keyboard strokes?

Or do we have to set a timer and ask the user to stop whenever the save timer says to stop?

Well, I'd say it is easier than that. We will follow a concept called **Debouncing**...

<https://media.giphy.com/media/31lPv5L3aIvTi/giphy.gif>

So, what is Debouncing?
=======================

Well, in a nutshell, it is a concept of executing a logic only once, no matter how many times it is called.

<https://media.giphy.com/media/KGSxFwJJHQPsKzzFba/giphy.gif>

I get it 😂, that definition didn't make any sense, but let's get into the example and you'll understand even better.

Here as per our client requirement, here are things that we should consider.

1. we need to run the autosave only when the user stops typing.
2. But since it is a text editor, the user can pause typing as many times as they want.
3. The user might open the editor and does not do anything.

so how can **debouncing** help us to solve all the above things here?

The implementation
------------------

Here we do the opposite, we write a function called `autosave`, and then we just call the function every time the user types a button on the keyboard. Then the `autosave` will be called to save the content.

Wait, what? isn't this the opposite of client requirements? and what if the user types 1000 words, then we have to call autosave 1000 times? isn't this a performance issue?

Well I agree with all those points, but recall the debouncing definition above, now when we debounce those `autosave` function call. Here's what's gonna happen.

1. `autosave` function will be called every time the user hits a key on the keyboard.
2. But the function won't execute since we are repeatedly calling the function thanks to debouncing.
3. When the user stops typing, the function won't be called anymore, and then we wait for 2 seconds to see if the user types again or not.
4. If they press any key before that 2 seconds we debounce the function call else we execute `autosave`

See, now no matter if the user types 1000 words, we execute the `autosave` function just once. 🥳

Code
----

Now we just understood the debouncing approach, now let's write some code to implement this so that we can deliver this to our client.

Let's assume that we have a React app and the editor is already built.

Our react state

```
const [content, setContent] = useState("");
```

Here we assume that the `content` state will get updated every time the user types something.

Let's write our `autosave` function.

```
const autosave = () => {

        console.log("saving!!!");
        // make an API call to save the contents
        axios({
            method: "POST",
            url: process.env.SOME_API_EP,            
            data: {content}
        })
        .then(() => console.log("saved"))
        .catch(() => console.log("failed to save 🥲"));

}
```

Now let's debounce our `autosave` function. We will **useEffect** to implement this. Here this useEffect will execute whenever the content state is being updated.

```
useEffect(
    () => {

      const debounceHandler = setTimeout(() => {
        autosave();
      }, 2000); 


      return () => {
        clearTimeout(debounceHandler);
      };

    },
    [content] 
  );
}
```

Here if you're not familiar with how useEffect works, [Here's a detailed explanation on useEffect](https://pavanblogs.hashnode.dev/2-understand-useeffect-react-hooks-series).

* Here we are using `setTimeout` to make sure that whenever our function is called it wait for 2 seconds before executing.
* `clearTimeout` is used to method clears a timer set with the `setTimeout` method. This is necessary for us because when the function is called again before the 2 seconds delay period we have to remove the previous timer and set a new one, else our function will end up executing multiple times due to the previous timer not being deleted.

Output
------

![output.gif](https://cdn.hashnode.com/res/hashnode/image/upload/v1634382755256/DOSbN5qHo.gif)

And we can see in the output in the console when we stop typing for 2 seconds the autosave function is called. Woohoo 🙌.

Thank you so much for reading guys, please like and please feel free to reach out to me by any of my social handles.

[you can get the source code here](https://codesandbox.io/s/dreamy-mcclintock-y1x3p?file=/src/App.js)

use cases
---------

This technique can be applied in many use cases, like

* Verifying username exists or not in real-time as the user types their username (very popular use case).
* While working with maps, users might drag the pinpoint to point to their location, but since they drag the pointer we can use debouncing here to run our functions only after the user releases the pointer at their desired location.
* To build auto search bars - search bars that don't need a search button.