---
title: "Does Re-rendering in React Affect Performance?"
excerpt: "Does re-rendering in React actually hurt performance? Understanding when optimization matters and when it can go too far."
date: "2023-03-02"
readTime: "3 min read"
tags: ["React", "Performance", "JavaScript"]
---

A significant amount of time is often spent trying to optimize a React app. Though optimization is a crucial phase in software development, it can go too far. Let's discuss Re-renders in React today and whether they impact performance.

In a nutshell, how does React work?
-----------------------------------

React goes through several processes to show your UI on the screen. These steps are known as render and commit. And these steps occur multiple times in the applications due to triggers.

1. **Render**

   During the render phase, React gathers all the necessary data from the state, props, and components to display on the screen. But during the initial rendering, React calls the root component, such as `App.js`.
2. **Commit**

   During the commit phase, React will modify the DOM with all the rendered components, which enables the user to see them on their screen.  
    It is essential to keep in mind that **React will not update the DOM unless the newly rendered component differs from the existing component**.
3. **Trigger**  
    Whenever a change in state, props, or context occurs, React is triggered to render and commit the components that depend on the changed state or prop.

Does Re-renders in React affect performance?
--------------------------------------------

The answer is generally **No**, but there may be some exceptions.

When discussing re-renders, it's clear that changes in state/props triggered components to render. However, during this process, child components may also render alongside the parent, even if their props remain unchanged.

When considering how React operates, it's important to note that only modified components are **committed** to the screen. In this case, even if the child components are re-rendered, they won't be **committed** because there haven't been any changes to their state.

This can be a minor or major issue sometimes, here are a few scenarios.

1. If you have an expensive function within a child component, it will run every time the component is rendered and may be costly. (**Major Issue**).

1. Whenever the child component is rendered, a basic API call could be executed within it. (**Minor Issue**).
2. If a child component is rendered, it may have certain API calls that rely on one another and are executed simultaneously. (**Major Issue**)
3. The parent component creates and provides the state of all the child components of your child. (**Major one for sure**)
4. It's important to consider where and how the state is being used. You don't want to make the mistake of creating state and handler functions in one context and then passing them to components just because it looks organized. (Believe me, I've seen this.)

#### Solution

Utilizing memorization techniques within React can effectively tackle important issues and improve your application's overall performance. However, it's essential to use this with care.

1. useMemo
2. useCallback
3. memo()

### Conclusion

In conclusion, re-renders in React do not necessarily impact performance, but there are some exceptions. It's important to keep in mind that only modified components are committed to the screen, and child components may also render alongside the parent, even if their props remain unchanged.

To tackle performance issues, it's recommended to use memorization techniques such as useMemo, useCallback, and memo(). Yet, it's crucial to use these techniques with care and consider where and how the state is being used. By doing so, you can effectively optimize your React application's performance without going too far.