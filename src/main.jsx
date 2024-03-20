import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Header/Home/Home.jsx';
import About from './Header/About/About.jsx';
import Contact from './Header/About/Contact/Contact.jsx';
import Users from './Users/Users.jsx';
import UsersDetalis from './Users/UsersDetalis/UsersDetalis.jsx';
import Posts from './assets/Compment/Posts/Posts.jsx';
import PostDetalis from './assets/Compment/PostDetalis.jsx';
import ErrorPages from './assets/Compment/errorPage/ErrorPages.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>,
      },
      {
        path: '/user/:id',
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <UsersDetalis></UsersDetalis>,
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>,
      },
      {
        path: '/post/:postId',
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetalis></PostDetalis>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
