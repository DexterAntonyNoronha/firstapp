import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirstPage } from "./ReactFirstPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactFormsExample } from "./ReactFormsExample";
import { Navigate } from "./Navigations";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ReactStateBasic } from "./ReactStateBasic";
import { ReactMultiStateExample } from "./ReactStates/AddToDoItem";
import { ReactReducerExample } from "./Day7/ReactReducerExample";
import { Calculator } from "./Day7/Tasks/Calculator/Calculator";
import { QuizComponent } from "./Quiz/QuizComponent";
import { QuizProvider } from "./Quiz/QuizStates";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
    {
        path: "/training",
        element: <ReactFormsExample />,
    },
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/reactForms",
        element: <ReactMultiStateExample />,
    },
    {
        path: "/state",
        element: <ReactStateBasic></ReactStateBasic>,
    },
    {
        path: "/first",
        element: <FirstPage></FirstPage>,
    },
    {
        path: "/useReducerFn",
        element: <ReactReducerExample></ReactReducerExample>,
    },
    {
        path: "/calculator",
        element: <Calculator />,
    },
    {
        path: "/quiz",
        element: (
            <QuizProvider>
                <QuizComponent />
            </QuizProvider>
        ),
    },
]);

root.render(
    // <React.StrictMode>
    <>
        <Navigate></Navigate>
        <div className='container'>
            <RouterProvider router={router}></RouterProvider>
        </div>
    </>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
