import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Header from './header';
import Index from "./routes/index";
import Acerca from "./routes/acerca";
import Contactame from "./routes/contactame";
import ErrorPage from './routes/error-page';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const router = createBrowserRouter([
	{
		path: "/",
		element: <Index />,
		errorElement: <ErrorPage />
	},
	{
		path: "/acerca",
		element: <Acerca />,
		errorElement: <ErrorPage />
	},
	{
		path: "/contactame",
		element: <Contactame />,
		errorElement: <ErrorPage />
	},
	{
		path: "*",
		element: <ErrorPage />
	}
]);

ReactDOM.createRoot(document.getElementById("header")).render(
	<Header />
);

ReactDOM.createRoot(document.getElementById("app")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
