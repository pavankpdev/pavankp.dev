---
title: "\"Make Network Requests in React like a PRO \U0001F4C8\""
excerpt: "Learn the right way to make network requests in React — from basic fetch patterns to building a reusable custom hook."
date: "2023-02-20"
readTime: "4 min read"
tags: ["React", "JavaScript", "Web"]
---

By default, React won't suggest the ideal method for making network requests; instead, it expects you to develop a method on your own. So, it is important to understand one of the many effective ways to do this.

What exactly is a Network Request?
----------------------------------

Network requests are made to access or to add or change the data that is stored in a server. We refer to it as a network request because of the manner it is executed, we're making a request to the internet with our server's details.

Many protocols, including HTTPS, HTTP, FTP, etc., are used to make network requests. Whereas each protocol has a distinct goal and a specific task that it is intended to complete.

STOP making network requests like this
--------------------------------------

We all assume that when we make network requests or API calls, we should use `axios` or `fetch`. This is OK because both libraries are lightweight and ideal for small applications.

However, in the case of a large-scale project with various interactions and a huge number of API requests, using `axios` or `fetch` is not optimal. Here's an example of an API call with `axios`

```
const [isLoading, setLoading] = useState(false);
const [isError, setError] = useState(false);
const [data, setData] = useState({});

const fetchData = async () => {
  setError(false);
  setLoading(true);

  try {
    const response = await axios(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    setData(response.data);
  } catch (error) {
    setError(true);
  }
  setLoading(false);
};

useEffect(() => {
  fetchData();
}, []);
```

#### Issues with this approach

Even though this is a valid React network request call, there are a couple of issues.

1. Multiple states, such as `isLoading` , `isError`: Imagine adding this to every API call you are making, we'll end up with a lot of states, right?
2. Writing repetitive code: Writing the same boilerplate code like setting the loading status, declaring useEffects for requests, and setting up exception handling. This also increases the size of the codebase.
3. No memoization: The data that we get back isn't memoized, so new requests every time.
4. Cannot be shared across components, unless stored in a global state.
5. Setting up pagination and lazy loading required additional logic.

Improve it like a PRO
---------------------

It's time to advance; the fundamental problem with the previous approach was that everything was manual and that we had to write code for every single item, including API requests, loading, error status, exception handling, and everything else you can think of.

To improve we'll use a library called **React Query.**

React query makes **fetching, caching, synchronizing, and updating server state** in your React applications a breeze. In simple terms, this one package can handle the majority of tasks associated with fetching data from APIs, storing it, making it available to your components, and other related jobs.

**Enough talk, show me some code already!**

```
import { useQuery } from 'react-query';

const { isLoading, error, data } = useQuery('getTodo', () =>
     axios("https://jsonplaceholder.typicode.com/todos/1")
)
```

Simple right? This is extremely simplified and optimized.

#### Advantages of this approach

1. Caching response `data`
2. Updating "out of date" data in the background
3. Reflecting updates to data as quickly as possible
4. Memoizing query results
5. Supports pagination and lazy loading by default
6. `isLoading` and `isError` can be used as status indicators, no extra state is required.

Together with the `isLoading`, `error` and `data`, **useQuery** exposes a large number of additional properties. which can be utilized according to the needs, including a feature to re-fetch the data and a few other options where you can tailor caching and storage, data pre-fetching, and more.

Check out their [Guide](https://react-query-v3.tanstack.com/quick-start) and [Installation](https://react-query-v3.tanstack.com/installation).

So, is this worth it?
---------------------

Even though React Query comes with a huge amount of functionality, there may be instances where they are unnecessary for a project. For small applications with few modules and APIs, it is advised that you stick with the simple `axios` package. But, putting up a react query is the best thing you can do if you're working on a big project with many API calls and different micro-interactions. This will help you save a lot of time.