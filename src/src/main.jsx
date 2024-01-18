import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app';
import { BrowserRouter } from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById("app")).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
