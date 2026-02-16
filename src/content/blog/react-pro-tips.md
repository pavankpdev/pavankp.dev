---
title: "'Become a React Pro: Top 10 Tips for Improving Your Skills'"
excerpt: "Top 10 tips to level up your React skills — from component patterns and state management to performance optimization techniques."
date: "2023-03-14"
readTime: "7 min read"
tags: ["React", "JavaScript", "Web"]
---

React is a popular JavaScript library widely used for building web applications. Whether you are a beginner or an experienced developer, there is always room for improvement when it comes to React skills.

This article will provide you with the top 10 tips for improving your React skills. These tips will help you move from basic to advanced React skills, improve your performance, and become a pro in web development.

### TypeScript

Using TypeScript with React can help improve code quality and maintainability. With TypeScript, you can define and enforce strict typing rules for your components, props, and state, making it easier to catch errors before runtime.

```
import React from 'react';

interface Props {
  name: string;
}

const Greeting: React.FC<Props> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
```

In this example, we define a `Props` interface that includes a `name` property of type `string`. We then use this interface to define the props passed to our `Greeting` component. The component accepts `Props` and returns a `div` element with a greeting message that includes the `name` prop.

Here’s what happens if the types aren’t passed.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1678767375787/52c64694-871d-468a-ab2b-d039942c1cf1.png)

Thanks to TypeScript we can identify the issue sooner, and fix this. Whereas with JavaScript this would crash our React app at runtime.

### PropTypes to ensure type safety

If you are **not familiar with TypeScript**, then start using PropTypes in your React components it is another way to ensure type safety in your React components.

PropTypes allow you to define the types of your component's props and will throw a warning if the wrong type is passed. This can help catch errors early and ensure that your components are receiving the correct data.

To use PropTypes, you will need to import the `prop-types` library from npm and define the types for each prop in your component. Here's an example:

```
import React from 'react';
import PropTypes from 'prop-types';

const Greeting = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

export default Greeting;
```

In this example, we define a `propTypes` object that specifies the `name` prop as a required string. If the wrong type is passed to the `name` prop, a warning will be thrown in the console.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1678767382733/94a6852b-c91f-425d-b719-56352b0163c5.png)

### Context over Redux

Context over Redux has become a popular approach for managing application state in React. Context allows you to pass data down the component tree without having to pass props through every level.

It eliminates the need for a separate state management library like Redux in many cases. Considering the recent updates of Redux, you can still use Redux Tool Kit (RTK), for any of your applications, but tools like React Query, are far better than RTK, in my opinion.

### Co-Locating States

The co-locating state is a technique that involves moving the state of a component closer to where it's used. Instead of storing the state in a parent component and passing it down to child components, you can store the state in the child component itself.

Often, people create states in a parent component and pass them down to children without considering how they will be utilized. It's important to start questioning if passing the state as a prop is necessary, as any changes to the state will cause both the parent and child components to re-render.

[This article here, explains how Co-Locating helps with code examples.](https://pavanblogs.hashnode.dev/co-locating-state-learn-to-optimize-react-apps-without-memo)

### Follow Structure

When building a React application, it is important to follow a consistent structure. This can help make your code more organized and easier to navigate, especially as the application grows in size and complexity.

Consider using a file structure that separates components, styles, and utilities into their own directories. You can also use naming conventions and comments to help make your code more readable and maintainable.

You can refer to some of the following resources to learn more about React coding standards, folder structure, and more.

1. [React Style Guide from Daniel Jauch](https://css-tricks.com/react-code-style-guide/)
2. [Airbnb Style Guide](https://airbnb.io/javascript/react/)
3. [Straightforward file structure guide from React team](https://reactjs.org/docs/faq-structure.html)
4. [File structure guide from FreeCodeCamp](https://www.freecodecamp.org/news/a-better-way-to-structure-react-projects/)

### React Devtools

React Devtools is a browser extension that allows you to inspect and debug React components. With React Devtools, you can view the component hierarchy, see the props and state of each component, and even change the state and props on the fly. This can be incredibly helpful for debugging and optimizing your React code.

Along with that, you can use the profiler tab, it provides a visual representation of render times of the component and lets you navigate through commits while viewing props and states of components. As a result, it allows for faster analysis and investigation of performance issues.

### UI Libraries

Never write plan CSS, because, there might be a case where some browsers may not support a few CSS properties. Hence your application style might break for some users. In addition to that writing plain CSS takes a lot of development time.

Instead, consider using a UI library like Material-UI, ChakraUI, or Semantic UI, which provides prebuilt components and styles that can help you quickly create a polished and professional-looking interface.

But if you’re looking to write your own CSS, then consider using SASS, since it is a pre-processor, it’ll enable cross-browser support for the CSS you write and also provides many utilities to reuse your CSS with mixins and many other features.

And yeah there’s Tailwind, I’m not a fan of Tailwind, so I won’t be talking much about that here.

### Memoization

Memoization is a technique for optimizing the performance of expensive functions by caching the results of previous function calls. In React, you can use the `useMemo` hook to memoize values that are expensive to compute. This can help improve the performance of your components, especially when dealing with large amounts of data or complex computations.

But most of the time this isn't necessary, so don't spend most of your time optimizing. [Check out this article, that explains why you shouldn't worry too much about optimizing.](https://pavanblogs.hashnode.dev/does-re-rendering-in-react-affect-performance)

### React Query

If you’re still using `axios` or `fetch` to make calls, then you might wanna reconsider it, it’s okay to use them for small projects, but for large-scale projects, `axios` and `fetch` won’t be a good choice. Instead, start using React query.

React Query is a library for managing server state in React applications. It provides a simple and intuitive API for fetching, caching, and updating data from your server. With React Query, you can easily manage complex data dependencies and keep your UI in sync with your backend. It also provides built-in support for caching and optimistic updates, making it a great choice for building high-performance React applications.

[This article here, explains how the React-Query saves your time and code with examples.](https://pavanblogs.hashnode.dev/make-network-requests-in-react-like-a-pro)

### Stay up to date with new releases

Stay up to date with new releases, changes, and updates in the React ecosystem. Follow the official React blog, join React-related forums, and follow React core developers on social media to stay informed. In addition to that, keep practicing and building projects to apply these tips and techniques to real-world scenarios.

Bonus
-----

### EsLint, Prettier & Husky

When working with React, it's important to maintain a consistent code style and format. ESlint, Prettier, and Husky are tools that can help with this.

**ESlint** is a linter for JavaScript that can be configured to enforce coding standards and best practices.

**Prettier** is a code formatter that can automatically format your code according to a set of rules. **Husky** is a Git hook that can be used to run ESlint and Prettier on your code before committing it to the Git repository.

By using these tools, you can ensure that your code is consistent, readable, and maintainable.