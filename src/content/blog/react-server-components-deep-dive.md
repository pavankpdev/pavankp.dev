---
title: "The Ultimate Deep Dive into React Server Components (Revised)"
excerpt: "A comprehensive deep dive into React Server Components — how they work, why they matter, and what they mean for the future of React."
date: "2023-05-08"
readTime: "9 min read"
tags: ["React", "Performance", "Web"]
image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1701925494984/64587ddb5d912ddfb08f4d60.png"
---

React Server Components have been something that's been bugging me for a while now. There's been a lot of debate online, and a lot of comparisons have made it really hard to understand what exactly it is and how it works. But now, after doing some research, I think I have a good understanding of it.

Let’s dive deeper into Server Components and understand them better.

TLDR;
-----

* React Server Components are components that run on the server, not in the browser.
* They are different from SSR from NextJS, as in SSR, the entire HTML is generated and rendered, while in Server Components, only the React tree structure is defined and sent to the browser.
* Some components need to be rendered on the server, while others on the browser, and React server components allow for rendering required components on the server and the rest on the browser.
* This makes it easy for the server to fetch data from databases and process huge datasets to create React components, resulting in faster application performance.
* Additionally, server components run only on the server and are not sent to browsers, reducing the JavaScript bundle size and leading to faster loading times.

The mental model
----------------

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683695578889/e8f9e15d-ddd9-4142-b940-755e5c9eb0f3.avif)

*Image source:* [*NextJS Docs*](https://nextjs.org/docs/getting-started/react-essentials#thinking-in-server-components)

In the image, imagine many static UI components on the screen, with only a few interactive elements like buttons or search bars. Now, consider rendering only the interactive elements in the user's browser while handling the rest on the server. This improves efficiency, reduces browser workload, and enhances performance.

React Components
----------------

React Components are reusable pieces of UI that can be composed together to create complex user interfaces. They are typically written in JSX/TSX and can range from simple components like buttons, inputs, layouts, and more.

React Server Components
-----------------------

Server Components are a new addition to the React ecosystem that allows for components to be rendered on the server and streamed to the client as they are ready. This enables faster load times and a better user experience, especially on slower networks.

NextJS SSR and Server Components
--------------------------------

Although SSR and Server Components are different, they are used together to provide efficient performance. RSC enables selective server rendering of components, while SSR ensures that the entire page is rendered on the server. This combination allows for efficient and dynamic web applications that are fast, interactive, and SEO-friendly.

Benefits of the Server Components
---------------------------------

Since Server components run in the server, there are numerous benefits that we can get

* By running components on the server, it is possible to fetch data from databases and process huge datasets to create React components, resulting in faster application performance.
* Server components run only on the server and are not sent to browsers, reducing the JavaScript bundle size and leading to faster loading times.
* Server components enable the processing of heavy NPM packages on the server, which avoids the need for the server to download these dependencies, unlike the browser, which must download all those codes as javascript bundles.

How Do We Create A Server Components
------------------------------------

By default, every component in meta-frameworks like NextJS v13 is a **server component**. To specify a client component, simply add `'use client'` at the top of your JSX/TSX file.

> Note: **A client component cannot import a server component** because the server components cannot run in the browser. Furthermore, this dependency would cause the server to send extra JavaScript bundles that aren't necessary. However, a server component can import a client component. We will discuss the details later, but be sure to remember this.

Here’s a sample of the React tree that has both Server and Client Components.

![https://cdn.hashnode.com/res/hashnode/image/upload/v1681796180231/c5b46bc7-7b30-44b3-a130-d101b8f08385.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1681796180231/c5b46bc7-7b30-44b3-a130-d101b8f08385.png)

If you're wondering how it's possible to have both server and client components in the same React tree, keep reading. We'll explain how it works and dive into the technical details of the implementation.

How are the Server and Client Components rendered on the same tree?
-------------------------------------------------------------------

If you remember server-side rendering (SSR), which involves rendering the entire HTML on the server and then passing it to the client (browser), which enables stateful interactivity.

In contrast, server components render server components over the server. If any client components are encountered in the process, the server adds a **placeholder** in the React tree where the client component was supposed to appear and moves on to the next component. This process repeats until all the components are processed. Later, when this tree is sent to the browser, the browser fills in the placeholders with the client components.

It’s similar to filling the forms, you fill in all the required fields, which are Server components and you skip the optional fields, which are Client components.

Here ends the high-level picture, let’s dive into technical details now. There are a lot of terms that need clarity here.

1. How does a server know the details of a client component while adding a placeholder?
2. How can the client (browser) identify whether a particular element is a placeholder or a server component?
3. How can a client (browser) determine which component to add instead of a placeholder?
4. What does the actual tree look like?

### Everything starts with a server receiving a request to render

The React Server Components typically begin with server rendering upon receiving a request. It's important to note that the root component is always a server component, which renders both client and server components.

The root component needs to be a server component, as it follows the rule that server components can import client components, but not vice versa.

The server initiates the rendering process by collecting all necessary details, such as props and dependencies, etc.

### Generating the tree from the root component

Let us consider a simple code snippet.

```
// ClientComponent.client.jsx
export default function ClientComponent({ children }) {
  return (
      <h1>This is client comp</h1>
      {children}
    </div>
  )
}

// ServerComponent.server.jsx
export default function ServerComponent() {
  return <span>This is server comp</span>
}

// AnotherServerComp.server.jsx
import ClientComponent from './ClientComponent.client'
import ServerComponent from './ServerComponent.server'
export default function AnotherServerComp() {
  return (
    <ClientComponent>
      <ServerComponent />
    </ClientComponent>
  )
}
```

Here,

The `ClientComponent` is a client component that renders an `<h1>` element with the text "This is client comp", and it also renders any children components passed to it.

The `ServerComponent` is a server component that renders a `<span>` element with the text "This is server comp".

The `AnotherServerComp` is also a server component that wraps bother a Client Comp with a Server Comp.

As we already know that the React tree is rendered with server components and placeholders for the client components. Once rendered, the tree is serialized to [JSON](https://www.json.org/) and sent back to the client (browser). Finally, the client deserializes the JSON to fill the client components and render the final result.

Let’s consider the above code, to see the entire results we have to render `<AnotherServerComp />` Which also renders the `<ServerComponent />` and `<ClientComponent />`, and then we have to serialize it to JSON.

What does the serialized JSON look like after we render them? Recall what a React Element would look like, an object right?

Once the components are rendered they are converted to an object with `type` property. The `type` property can either be a string for base HTML tags such as `div` `p` `h1` or functions of a custom React component such as `ServerComponent`

Here’s an example of a React Element

```
// React element for base HTML such as <span>This is a comp</span>
{
  $$typeof: Symbol(react.element),
  type: "span",
  props: { title: "This is a comp" },
  ...
}

// React element for a component such as <MyComponent>example</MyComponent>
> function MyComponent({children}) {
    return <div>{children}</div>;
  }
{
  $$typeof: Symbol(react.element),
  type: MyComponent  // "reference" to the MyComponent function
  props: { children: "example" },
  ...
}
```

Here to generate this object react uses a function called `createElement` learn more about [createElement here](https://react.dev/reference/react/createElement).

If you take a closer look, you'll notice that if the React Element is a user-defined Component, then the `type` property will be a function reference that points to that Component. However, functions cannot be serialized easily. To address this, React passes a special replacer function to `JSON.stringify()`. You can learn more about the replacer function [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#the_replacer_parameter).

This is achieved using the `resolveModelToJSON()` function developed by the React core team. You can find the source code for this function [here](https://github.com/facebook/react/blob/42c30e8b122841d7fe72e28e36848a6de1363b0c/packages/react-server/src/ReactFlightServer.js#L368).

In a nutshell

1. If the code encounters a base HTML tag, there is no need to worry as it can easily be serialized.
2. If the code encounters a function, it must pass a **replacer function** to serialize it.

That was a lot. Here are some answers to potential questions you might have by now.

**Is serializing necessary?**

Yes, because it is sent back to the client over the network as a response, so JSON is a standard way of passing data.

**What about placeholders? How are the placeholders in the client component serialized?**

The placeholders can be serialized easily as well because they store something called a **module reference object**.

### The Module Reference Object

This is a new `type` of property introduced by React Server Components. It ensures that the client component's placeholders can be easily serialized.

This would like something like this for our `<ClientComponent/>`

```
{
  $$typeof: Symbol(react.element),
  type: {
    $$typeof: Symbol(react.module.reference), // Component Reference
    // ClientComponent is the default export...
    name: "default",
    // from this file!
    filename: "./component/ClientComponent.client.js"
  },
  props: { children: "This is a client comp" },
}
```

This is what a placeholder would look like when Server Components are being rendered over the server. But how is the client component converted to this type of placeholder?

This conversion is possible thanks to an update pushed to the `react-server-dom-webpack` bundler by the React team. When a server component imports something from a `.client.jsx` file, it only receives a module reference object containing the file name and exported name of the component, rather than the component itself. The client component function will never be part of the React tree constructed on the server.

Later, when the browser encounters the placeholder, it can use the **module reference object** to locate the appropriate client component and replace the placeholder with it.

### What’s next?

There's more. While this process is straightforward, what about suspense? Are these production-ready? What are the use cases for them?

Many questions arise when considering the different ways NextJS provides for rendering, including Server components. However, we will be discussing RSC further, so stay tuned. It is also worth noting that RSC is now stable to use in production starting from NextJS v13.4.

### References

<https://www.plasmic.app/blog/how-react-server-components-work#what-are-react-server-components>

<https://nextjs.org/blog/next-13-4>