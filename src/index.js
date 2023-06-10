import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Submission from './pages/Submission';

import './index.css';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/submission",
		element: <Submission />,
	}
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);