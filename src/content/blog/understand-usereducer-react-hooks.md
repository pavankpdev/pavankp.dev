---
title: "'#4 Understand useReducer() - React Hooks Series'"
excerpt: "Part 4 of the React Hooks series — understanding useReducer() for complex state logic and how it compares to useState."
date: "2021-05-03"
readTime: "4 min read"
tags: ["React", "Hooks", "JavaScript"]
image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1701925494984/608ff418dc886b4318007c1c.png"
---

Hey, guys hope you're all doing great. So i decided to start a series on React hooks, my goal is to cover all the hooks that are provided by React and also developing our own custom hooks.

[Here's the whole series link](https://pavanblogs.hashnode.dev/series/react-hooks-series)

Okay, Let's get started then.

Today's blog would be about the `useReducer` hook.

What is the useReducer hook?
============================

Wait! did we just mention `reducer`, isn't reducer a term we use with redux. Yes, of course, we use reducer with redux; although they work kinda similar, the useReducer and reducer are different. Today we will learn about useReducer if you're curious about reducers then make sure to [check out this blog](https://pavanblogs.hashnode.dev/simple-guide-to-redux-in-react) it covers in-depth concepts on redux and reducers.

Okay, so we just went far away from the actual question 😅

So, useReducer is an alternative to [useState](https://pavanblogs.hashnode.dev/1-understand-usestate-react-hooks-series), It is an **efficient** placeholder to store our state. Also, it provides you more control to manage the state.

Okay so why can't I use useState instead of useReducer?
-------------------------------------------------------

Good question. The answer is to manage complexity.

Imagine that your state structure has so many properties nested into one another. And storing them in useState and updating them is not ideal, it will have a huge negative impact on your performance.

You can refer to the below code snippet as an example

```
const complexState = {
    user: {
        fullname: "",
        email: "",

    }
    modules: {
        modulesCompleted: [{
            JavaScript: [{
                date: "June 12"
                progress: "60"
            }],
            Python: [{
                date: "June 12"
                progress: "60"
            }],
            Go: [{
                date: "June 12"
                progress: "60"
            }],
            Ruby: [{
                date: "June 12"
                progress: "60"
            }],
        }],
    },

}
```

But what if you could separate and use them in your app, and update only the required part of your state object, that would be better right, even boosts the performance of the app. Yes, that's where the useReducer hook shines.

You can refer to the below code snippet as an example

```
// user part
user: {
        fullname: "",
        email: "",

    }

//  modules part
modules: {
        modulesCompleted: [{
            JavaScript: [{
                date: "June 12"
                progress: "60"
            }],
            Python: [{
                date: "June 12"
                progress: "60"
            }],
            Go: [{
                date: "June 12"
                progress: "60"
            }],
            Ruby: [{
                date: "June 12"
                progress: "60"
            }],
        }],
    },


// enroll courses part
 enrolledCourse: [{
        date: "June 12",
        course: "JavaScript"
    }, {
        date: "June 12",
        course: "JavaScript"
    }, {
        date: "June 12",
        course: "JavaScript"
    }, {
        date: "June 12",
        course: "JavaScript"
    }, ]
```

* It lets you decouple your complex state object
* It lets you update only the required part or fetch the required part of the state
* Easy to test

How to use it?
==============

```
const [state, dispatch] = useReducer(reducer, initialState, init);
```

useReducer arguments

* `reducer`: Its a function of type `(state, action) => newState` the state is the current version of our state object and action the function that holds the logic to perform on the current state object and the newState the return type of our newly updated state object.
* `initialState`: This argument will specify the initial state.
* `init`: It is used to create the initial state lazily, `init` would be a function such as `init(initialState)`.

useReducer Return values

* `state`: the state would the data from the state that we need.
* `dispatch`: a function that we use to dispatch actions.

Practical Example
-----------------

```
// init function to reset state object
function init(initialCount) {
  return {count: initialCount};
}

// reducer function that decoupled and grouped our state
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter({initialCount}) {
// calling useReducer hook to get access to the state tree
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      {/* calling dispatch function returned from the useReducer hook to dispatch actions. */}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

}
```

Alright, now if you ask me whether to use redux or useReducer. It actually depends on use cases, see redux provides many sets of features and also the ability to plug and un-plug addons or middlewares, whereas useReducers doesn't provide any of those. So ultimately it's up to you to first decide the pros, cons, and tradeoffs before implementing them.

So that's it folks, hope you like it. Stay tuned for more.