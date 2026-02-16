---
title: "'Co-Locating State: Learn to Optimize React Apps without Memo'"
excerpt: "Learn how co-locating state can optimize your React apps without reaching for useMemo or React.memo."
date: "2023-03-10"
readTime: "3 min read"
tags: ["React", "Performance", "JavaScript"]
---

As the application grows, React states become more widespread. Poorly organized states can cause excessive re-rendering and hinder performance.

To address this problem, React developers often resort to optimizing it using memoization without thoroughly examining the root cause. In this article, we will introduce a technique called State Co-Location that can enhance your React application without the need for memoization.

### What exactly is the "Memo" that we're discussing?

In React, we use the term "memo" as shorthand for memoization. This technique is used to prevent excessive component re-rendering and boost overall performance.

Many developers often assume that memoization is the only optimization technique for their application, but this is a common misconception.

### Co-Locating State

The co-locating state is a technique that involves moving the state of a component closer to where it's used. Instead of storing the state in a parent component and passing it down to child components, you can store the state in the child component itself.

This technique works particularly well when you have a complex component hierarchy with many levels of nesting. By co-locating the state, you can reduce the number of props being passed down which can help improve performance.

The co-locating state can also make your code more modular and easier to read. By keeping the state close to where it's used, you can understand how a state can affect the component.

### How to Implement Co-Locating State

Implementing co-locating state is relatively straightforward. Instead of storing the state in a parent component and passing it down through props, you can store it in the child component itself.

Here's an example:

```
import { useState } from "react";

export default function MyComponent() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <ChildComponent count={count} onClick={handleClick} />
        </div>
    );
}

function ChildComponent({ count, onClick }) {
    return <button onClick={onClick}>{count}</button>;
}
```

In this example, we're storing the `count` state in the `MyComponent` component and passing it down to the `ChildComponent` component through props.

This causes both parent and child components to re-render every time the button is clicked. Here's the profiler view of the above implementation.

![The React profiler view of the first implementation](https://cdn.hashnode.com/res/hashnode/image/upload/v1678445181698/01c344f1-501e-4b90-b3d9-5c192db60ad6.png)

Here we can see that both `MyComponen` and `ChildComponent` is rendered the same number of times.

But why?

1. Because the state is declared in the parent component, which causes the parent component to render every time the state is modified.
2. The Child Component accepts it as props which makes it dependent, thus it renders every time the state is modified.

Instead of doing this, we can move the `count` state into the `ChildComponent` component itself:

```
import {useState} from "react";

function ChildComponent() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            {count}
        </button>
    );
}

export default function MyComponent() {
    return (
        <div>
            <ChildComponent />
        </div>
    );
}
```

By doing this, we've reduced the number of props being passed down through the component tree and made our code more modular.

Here's the profiler view of the second implementation

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1678445331289/0c911a80-0811-4697-b462-6d50a3c36f9c.png)

Here we can see that just `ChildComponent` is rendered multiple times, since it handles the state now, and the parent component is not rendered.

### Conclusion

The co-locating state is a powerful technique that can help optimize your React application without using a `memo`. If you're struggling with performance issues in your React app, give the co-locating state a try!