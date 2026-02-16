---
title: "'#1 Understand useState() - React Hooks Series'"
excerpt: "Part 1 of the React Hooks series — understanding useState(), how state works in functional components, and practical examples."
date: "2021-03-03"
readTime: "4 min read"
tags: ["React", "Hooks", "JavaScript"]
image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1701925494984/603f3592ff443a0a4499ec4f.png"
---

Hey, guys hope you're all doing great. So i decided to start a series on React hooks, my goal is to cover all the hooks that are provided by React and also developing our own custom hooks.

Every week I will be publishing one or two blogs on hooks, [here's the series link](https://pavanblogs.hashnode.dev/series/react-hooks-series-ckm3jsqe5017dtfs17k18adir)

Okay, Let's get started then.

Today's blog would be about the `useState` hook.

What is useState hook?
----------------------

useState is a Hook that allows you to have *React state in function components*. Before introducing hooks, we were limited to have states only inside class components, But thanks to the major update in React v16.8, we can now use the useState hook to have states inside a function component too.

Before diving deep into useState, I just wanted to show a quick difference between implementing state inside class components and function components.

![Compare.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1614698847245/ybCnLY97Y.png)

As you see in the above snippet, useState not only makes it easier to implement state in our react component but also makes the code look clean and readable.

### Rules to be followed to implement useState or any other hooks

* The component where you are using hooks must be a function component.
* usestate or any other hooks must be defined at the top level of the component.

example:

```
import React, { useState } from 'react';

const Message = () => {

  const [message, setMessage] = useState("");
 // another hook
 // another hook

 /*
    your custom functions
 */

  return <div>{message}</div>;
}
```

* Hooks will be executed in order, so we are not allowed to wrap any hooks inside any other function or if statements.

Okay, let's see how to implement the useState hook.
---------------------------------------------------

useState takes one argument which is the initial value of the state and returns an array of two elements. The first element would be the state variable which contains the value and the second element would be a function that can be called when we need to update the state variable.

```
import React, { useState } from 'react';

const Message = () => {

  const [message, setMessage] = useState("");

  // message --> state variable
  // setMessage --> function to update the message value

  return <div>{message}</div>;
}
```

Usually, we'll use *[array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)*  to extract the value returning from the useState function, but it can also be implemented as shown below

```
import React, { useState } from 'react';

const Message = () => {

 // Both are valid methods

  // Bad Practice ❌
  const messageState = useState("");
  const message = messageState[0];
  const setMessage = messageState[1]; 

  // Good Practice ✅
  const [message, setMessage] = useState("");

  return <div>{message}</div>;
}
```

### Okay, now let's see how do we update a state value

Recall that useState returns an array of two values, one is the variable with the state value, and the other is the function to update the state variable.

Yes, we are going to use the function returned from the useState to update the value.

```
import React, { useState } from 'react';

const Message = () => {

  const [message, setMessage] = useState("Initial Value");

  // Notice: we are using setMessage function provided by useState
  const updateMessage = () => setMessage("updated");

  return <>
      <h1>{message}</h1>
      { /* When the button is clicked it updates the state  */ }
      <button onClick={updateMessage}>update message</button>
  </>;
}
```

*Note: The state is not updated immediately it is an asynchronous process.*

### Performance

The above method of implementing useState is totally fine. But, in *some exceptional cases*, we don't want useState to set the initial value every time the component renders. So we can pass a function instead of a value to the useState hook as an argument. What this does is that useState will execute that function and assign the state value, only once at the first render, and no matter how many times the component re-renders the usestate won't execute that function again.

```
import React, { useState } from 'react';

const Message = () => {

  // this state will updated only once at the initial render....
  const [message, setMessage] = useState(() => { /* Some heavy computation */ });

  return <h1>{message}</h1>
}
```

This might be useful when you're dealing with mathematical logic which requires heavy complications. Run it over and over again will affect the performance, it's better to utilize the above method in such cases.

So that'll be all folks, I hope this was useful for you. If it did please leave a reaction and suggestions in the comment box.

Happy coding 😄