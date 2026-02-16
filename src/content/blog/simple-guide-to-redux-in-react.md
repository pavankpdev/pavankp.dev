---
title: "Simple Guide To Redux In React"
excerpt: "A simplified explanation of Redux for React developers — understanding the store, actions, reducers, and how global state management works."
date: "2021-01-16"
readTime: "11 min read"
tags: ["React", "Redux", "JavaScript"]
image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1701925494984/600274f236551629d6a7eb64.png"
---

If you’re a frontend developer or learning frontend development especially React, you might have heard of a library known as Redux. If you’re a beginner who is getting started with Redux then definitely it’s confusing, isn’t it? Well If you are an experienced developer then it is true that you had trouble understanding Redux at first but you have mastered it or at least
you understand what it is and how it works.

So i thought of simplifying the Redux concept for you so that you guys could understand and implement Redux in your projects.

So, What is Redux?
------------------

As the [documentation](https://redux.js.org/) states, Redux is a **predictable state container for JavaScript apps**. Let me rephrase and explain it simply. Redux is a library that holds your application state in a place that is globally accessible so that your application components can directly access the data from that global place, instead of you manually passing data throughout all the components.

Isn’t that cool, okay let’s see how can we implement redux in react

Redux in React
--------------

Redux can be used with React or any other frontend library. In this blog, we’ll be using Redux with React.

In a React component, the state holds data that can be rendered to the UI. The state in React could also change in response to actions and events or by manually updating it.

Let’s consider the below code

```
const [username, setUsername] = useState("");

const Profile = () => {
    return <>{username}</>
}
```

Here we have created a state called `username`. This state can be modified using `setUsername()` function. The above state is limited to the scope of the component where it’s created. In the case of the above example, the `username` state is limited to the scope `Profile component`.

Okay, but what if another component needs the same username state, hmm what can we do? Oh yes, props! we can pass the username state as props to the other component right.

```
import OtherComponent from "./Component/OtherComponent";  

const [username, setUsername] = useState("");

const Profile = () => {
return
    <OtherComponent username={username} />
}
```

Okay problem solved 😎

But what if another component called **Settings** required username state as a prop but it is nested inside 4-5 other components which do not require the username prop. How do you pass username state as a prop to the Settings component, well obviously you need to pass them **through all those other components** where the Settings component is nested. Here’s a diagram for you to understand better

![withoutRedux diagram.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1610769349879/mAfhv-I7u.jpeg)

As stated above, since the `Settings component` is nested among all those other components, we need to pass the username prop from the Profile component to the Settings component through all those other components even if they don’t need the username prop. This property is known as **Prop tunneling** or **Prop drilling**.

But what if there was a way where the Settings Component can access the username prop directly without having it tunneling among the other components. Yes, that’s where Redux comes into the picture. With Redux Settings Component can directly access the username prop, since redux stores all the state values globally.

![withRedux diagram.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1610769579403/oCXRlbleq.jpeg)

So i hope you’ve understood how Redux helps us to manage and deliver the state across different components.

Let’s see how you can implement Redux in the react application.

Okay before jumping into code, i just wanna explain few Redux concepts very briefly.

* ***Action***: Action specifies what type of data needs to be updated inside the Redux store.
* ***Reducer***: The reducer modifies the state inside the redux store based on the action received.
* ***Middlewares***: Middlewares are similar to add-ons or plugins, they enhance your Redux experience by providing some extra features.

Alright so let’s get started

I have created a demo project for this blog and also deployed it, you can find them with the below links

* Source Code: <https://github.com/pavankpdev/react-redux-blog>
* Demo: <https://react-redux-blog.vercel.app/>

Installation guidelines are given in the source code, you can follow up.

What are we building?
---------------------

We will be building a simple user list app where you can add a user and delete an existing user.

Here’s how the project works ***without Redux***
![Project without redux gif](https://media.giphy.com/media/hZkMulbhxy4PEiAbsP/giphy.gif)

As you see we are adding a new user but we cannot display the result since there is nowhere to store our state globally. Let's see how redux can help us here.

Okay now let’s get into redux.

***NOTE: I'm assuming you already have created a react application, if you didn't, you can refer to [this guide](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) to create one.***

First, we need to install redux, so we’ll be using the [react-redux](https://www.npmjs.com/package/react-redux) library which is the official React binding for Redux.

```
npm i redux react-redux
```

### or

```
yarn add redux react-redux
```

After installing, the next step is to organize your **project folder structure**. I highly recommend this because while your application scales, if you don’t organize your redux files, it would create a big mess.

```
📦src
 ┣ 📂Components
 ┃ ┣ 📜AddUser.jsx
 ┃ ┣ 📜Navbar.jsx
 ┃ ┗ 📜UserList.jsx
 ┣ 📂Redux
 ┃ ┣ 📂reducer
 ┃ ┃ ┣ 📂user
 ┃ ┃ ┃ ┣ 📜user.action.js
 ┃ ┃ ┃ ┗ 📜user.reducer.js
 ┃ ┃ ┗ 📜rootReducer.js
 ┃ ┗ 📜store.js
 ┣ 📜App.js
 ┣ 📜index.css
 ┗ 📜index.js
```

Okay, now the next step is to wrap your application inside Redux, to do this Go to your `index.js` file and import the `Provider` class from `react-redux` and add it to your code as shown below.

```
import { Provider } from "react-redux";

// Redux Store
import store from "./Redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

Don’t worry about importing the `store`, we're gonna implement it now.

Next step, let’s create the **redux store**

Create a folder called `Redux` inside the `src folder`, you can refer to the project structure above.

Inside the Redux folder create a new file called `store.js` and add the following code.

```
import { createStore } from "redux";
import rootReducer from "./reducer/rootReducer";

const store = createStore(rootReducer);

export default store;
```

Here we have something known as a `rootReducer` which we will create later, for now, you can see that we have a `createStore` function from redux and we pass our `rootReducer` as an argument to that `createStore` function and that function would return us a `redux store object`, which we will pass on to the `Provider` class inside `index.js` file as below.

```
<Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
</Provider>
```

Okay now let’s create our reducer after that, we’ll create a root reducer to pass on to our store.

In our project, we’ll have reducers to **add** and **delete** users, so we need to create action and reducers which will do that for us.

Inside the Redux folder create another folder called `reducers` and inside the reducers folder create another folder called `user`.

Now inside the user folder create two files with below names

1. `user.action.js`
2. `user.reducer.js`

Verify that your folder structure is right

```
📦Redux
 ┣ 📂reducer
 ┃ ┣ 📂user
 ┃ ┃ ┣ 📜user.action.js
 ┃ ┃ ┗ 📜user.reducer.js
 ┃ ┗ 📜rootReducer.js
 ┗ 📜store.js
```

Now open the `user.action.js` file and add the following code

```
// Redux Action to add new user
export const addUserAction = ({ name, email }) => {
  return {
    type: "ADD_USER",
    payload: { name, email, id: `${Math.random()}` },
  };
};

// Redux Action to delete existing user
export const deleteUserAction = (userID) => {
  return {
    type: "DELETE_USER",
    payload: userID,
  };
};
```

You can understand just by looking at the code, ok we’ll just go through them anyway, we have two functions, one to add a user and another to delete the user. Did you notice the object that the function is returning? It returns an object with type and payload, so what is that?

* **type**: Type specifies what type of action needs to be taken, in our case type determines whether it’s an add user action or delete user action.
* **payload**: Payload is the data that will be used to update the redux state object by the reducer.

Now moving on, open the `user.reducer.js` file and add the following code

```
const INITIAL_STATE = {
  user: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    case "DELETE_USER":
      return {
        ...state,
        user: state.user.filter(({ id }) => id !== action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
```

Okay, this is a bit long, but it’s easy. Let’s go through it First, this is just a switch statement. we check **what type of action needs to be performed** and then **we update the redux state**. As you can see we have `ADD_USER` and `DELETE_USER` same as in the `user.action.js` file When our `user.action.js` file returns a type of action that needs to be performed and data that need to be updated. Our switch state will check for that match type and perform modifications to the redux state object based on the data provided.

Okay now moving on to create our root reducer

Come back to the reducer folder and create a new file called `rootReducer.js` and add the following code

```
// libraries
import { combineReducers } from "redux";

// Reducers
import user from "./user/user.reducer";

// root reducer
const rootReducer = combineReducers({ user });

export default rootReducer;
```

And that’s it, we’ll just import the user reducer that we created and bundle it with redux using the combineReducers function and return it to the store.js file.

Okay now we’re done with setting up Redux, let’s implement it in our components.

React-redux provides us with 2 hooks called `useDispatch`, `useSelector`

* **useDispatch**: this hook is used to call redux action to send / dispatch data to update redux state.
* **useSelector**: this hook is used to access the redux state object.

Okay, now the implementation.

If you have cloned the repo you can open `Components/AddUser.jsx`, but if you haven’t cloned it then it’s fine you can just understand how we can implement it.

In this component, we will add new user data to the redux state object.

First, we will `import useDispatch from react-redux`

```
import { useDispatch } from "react-redux";
```

We will also import the add `addUserAction` redux action

```
// Redux Action
import { addUserAction } from "../Redux/reducer/user/user.action";
```

The `useDispatch` hook returns a reference to the dispatch function from the Redux store. And we need to store that by assigning it to a constant as below

```
// Initialize dispatch hook from react-redux
const dispatch = useDispatch();
```

Now inside the submit function, we will add a new user to the redux state as below

```
const submit = () => {
 dispatch(addUserAction(userData));
 };
```

Now, whenever we call the submit function we send user data to the redux state.

Check it out here
![add new user gif](https://media.giphy.com/media/hP3ZDO3vNxEZWw9GSi/giphy.gif)

Now we’ll fetch all the user lists from the redux app and display them.
To do that open `Components/UserList.jsx` file

After that, we will `import useDispatch, useSelector from react-redux`

```
import { useSelector, useDispatch } from "react-redux";
```

Now since we need access to the redux state to display all the user lists, we will first create the access.
We can do that with the help of the useSelector hook as below

```
// Redux state
const reduxState = useSelector(({ user }) => ({ user }));
```

Now the constant reduxState will access the redux state object

Next, since we will be able to delete the user, then we need to make some update in the redux state object right so, we will be using the `useDispatch` hook to modify the redux state.

```
// Initialize dispatch hook from react-redux
const dispatch = useDispatch();
```

Okay now, since we need to fetch all the user lists every time the redux state updates, we will use the `useEffect` hook from React.

```
// Loading all the user list from redux to component
 useEffect(() => {
 setUserList(reduxState.user.user);
 }, [reduxState.user.user]);
```

Now we will get our user list from the redux state.

Okay now let’s see how we can delete a user from the redux state.

```
const deleteUser = (e) => {
 dispatch(deleteUserAction(e.target.id));
 };
```

Here inside the deleteUser function, we will pass the user id, so that the `reducer` will match the `user id` with the `redux state` and delete that user record from the redux state object.

Check it out here
![delete user gif](https://media.giphy.com/media/NRfb62eaEaHaboLUHf/giphy.gif)

Did you guys notice how the records were being deleted, this is the work of the reducer updating the redux state object.

### Here's the demo of the app with and without Redux

*Without Redux*
![Without Redux gif](https://media.giphy.com/media/hZkMulbhxy4PEiAbsP/giphy.gif)

*With Redux*
![With Redux Gif](https://media.giphy.com/media/wzTeGDgr64gYwUKZWx/giphy.gif)

So that’s it, folks, I’ll add the link again

* Source Code: <https://github.com/pavankpdev/react-redux-blog>
* Demo: <https://react-redux-blog.vercel.app/>

You can use them for reference, please reach out to me if you have any doubts. I tried my best explaining Redux, if you find it useful please consider leaving a reaction and sharing it among your friends. Thank you 😄