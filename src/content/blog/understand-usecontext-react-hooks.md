---
title: "'#3 Understand useContext() - React Hooks Series'"
excerpt: "Part 3 of the React Hooks series — using useContext() to share state across components without prop drilling."
date: "2021-03-28"
readTime: "3 min read"
tags: ["React", "Hooks", "JavaScript"]
image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1701925494984/606053c038b0e14f092a3561.png"
---

Hey, guys hope you're all doing great. So i decided to start a series on React hooks, my goal is to cover all the hooks that are provided by React and also developing our own custom hooks.

I was unable to publish a blog last week but will continue to publish 1 or 2 blogs every week. [Here's the whole series link](https://pavanblogs.hashnode.dev/series/react-hooks-series)

Okay, Let's get started then.

Today's blog would be about the `useContext` hook.

What is Context in react?
=========================

Stated by [React](https://reactjs.org/docs/context.html)

> Context provides a way to pass data through the component tree without having to pass props down manually at every level.

If you're familiar with the concept known as **prop drilling** or **prop tunneling** (If you don't [Read this blog](https://pavanblogs.hashnode.dev/simple-guide-to-redux-in-react)), you might understand that passing down props from one component to another might become cumbersome and unmanageable. With React context, you can specify certain pieces of data that will be available to all components without having to pass props through each component.

What is the useContext hook?
============================

useContext hook acts as an API to retrieve data stored inside the context.

okay, let's play with React context ⚽
-------------------------------------

We will build a theme switcher, with a button click the color mode will toggle between light and dark.

[Here's the complete code](https://codesandbox.io/s/usecontext-blog-4oojj?file=/src/TogglePage.js:0-505)

First, we need to create a context object

create a file called `Themecontext.js` and add the below code

```
import React, { useState } from "react";

// Create context object
export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

Okay, here we create a context object known as `ThemeContext`, and then we're having a state that holds the current theme. And at last, we're wrapping the children around the Provider component from ThemeContext. Any component wrapped by this Provider will have access to the `ThemeContext` object.

Now go to the `App.js` file

And import the ThemeProvider component from the `Themecontext.js` file

```
import ToggleTheme from "./TogglePage";

import { ThemeProvider } from "./Themecontext";

import "./styles.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ToggleTheme />
      </div>
    </ThemeProvider>
  );
}
```

So now our setup is complete, we now access the context object, okay then let's build a component to work with the context object.

create a file `TogglePage.js` and add the following code

```
import React, { useContext } from "react";

// importing the context object that we created
import { ThemeContext } from "./Themecontext";

const ToggleTheme = () => {

  // Access the context object
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div className={theme === "light" ? "light" : "dark"}>
        The current theme is <span>{theme}</span>
      </div>
    </>
  );
};

export default ToggleTheme;
```

![final demo](https://media.giphy.com/media/u6UggxdElhmo05e5OO/source.gif)

So as you can see, we can now toggle themes directly from any component, without having to pass any props or managing any state. We use useContext to get the data that the component needs.

So that's it folks, hope you like it. Stay tuned for more.