---
title: "'#2 Understand useEffect() - React Hooks Series'"
excerpt: "Part 2 of the React Hooks series — mastering useEffect() for side effects, lifecycle management, and cleanup in functional components."
date: "2021-03-11"
readTime: "4 min read"
tags: ["React", "Hooks", "JavaScript"]
image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1701925494984/6049ed5f705c65744e4758e8.png"
---

Hey, guys hope you're all doing great. So i decided to start a series on React hooks, my goal is to cover all the hooks that are provided by React and also developing our own custom hooks.

Every week I will be publishing one or two blogs on hooks, [here's the series link](https://pavanblogs.hashnode.dev/series/react-hooks-series-ckm3jsqe5017dtfs17k18adir)

Okay, Let's get started then.

Today's blog would be about the `useEffect` hook.

What is useEffect hook?
=======================

The useEffect Hook lets you perform `side effects` in function components. The term `side effects` can be referred to as an API call or some logical computations. Recall lifecycle methods from class components, useEffect hook handles our logic as same as lifecycle methods.

```
import React, { useState } from "react";

const App = () => {
  const [isRunning, setIsRunning] = useState(true);

  return <>
   <button onClick={() => setIsRunning(!isRunning)}>
   Change Status
   </button>
   </>
}
export default App;
```

So in the above example, we have a state `isRunning` set to a boolean value, and a button to change the status.

Now we want to log whenever the status changes. Hmm, how could we achieve that?

Yes, `useEffect` hook. But why? Because we are making a `side effect` to our component by changing the state.

Let's see how can we achieve our goal using the useEffect hook.

```
import React, { useState, useEffect } from "react";

const App = () => {
  const [isRunning, setIsRunning] = useState(true);
  useEffect(() => {
    console.log("Status changed")
  })

  return <>
   <button onClick={() => setIsRunning(!isRunning)}>
   Change Status
   </button>
   </>
}
export default App;
```

So yay, now we log every time the state changes. 😃

Actually no, we didn't. See now what happened is that useEffect will keep logging every time there's a side effect, let's assume you have two more other types of state and function to update them, now what happens is when the other function updates the state or causes a side effect our useEffect will still log "status changed" even though the status didn't change at all.

So how to fix this. Well, let's see we need to log when the `isRunning` state updates, and ignore the other side effects. Generally, we can think on the basis conditional statement (if..else) concept. but we can't conditionally implement hooks in react it's against the rules. But fortunately react allows to implement this in the other way, and it's really simple than if..else. Let's see

```
import React, { useState, useEffect } from "react";

const App = () => {
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    console.log("Status changed",[isRunning])
  })

  return <>
   <button onClick={() => setIsRunning(!isRunning)}>
   Change Status
   </button>
   </>
}
export default App;
```

Notice that useEffect accepts another arguement, it's called an array of dependencies. When useEffect receives an array of dependencies, it keeps an eye on those dependencies and only acts when those dependencies are changed/updated.
So in our case, since we passed `isRunning` state as a dependency to our useEffect, now our useEffect will log only when the isRunning state is changed and ignores any other side effects or updates caused.

So we can say we achieved the goal. yay 🎉

And at last there's one last thing left.
----------------------------------------

We saw few ways to utilize useEffect according to our need. But what if we need the useEffect hook to run just once, without any dependencies. yes, we can do it by passing only an empty array as the second argument.

```
import React, { useState, useEffect } from "react";

const App = () => {
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    console.log("i will run only once",[])
  })

  useEffect(() => {
    console.log("Status changed",[isRunning])
  })

  return <>
   <button onClick={() => setIsRunning(!isRunning)}>
   Change Status
   </button>
   </>
}
export default App;
```

As you can see the first useEffect hook will log, `i will run only once` and it doesn't log again no matter how many side effects are caused inside a component.
The best use case is to perform an API call. So that your API will be called only once.

Clean up
--------

Similar to the `componentWillUnmount` lifecycle method, useEffect will execute the cleanup task provided by the user. This can be implemented just with a return statement as we do with normal function.

Note: useEffect will perform the cleanup first before executing the task you provided.

So that's it, folks. Stay tuned for more blogs on hooks. Adios