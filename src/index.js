import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { MainRouter } from './router/MainRouter';
import { AppContextProvider } from './component/ContextApi';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={"...loading"}>
      <AppContextProvider>
    <RouterProvider router={MainRouter} />
    </AppContextProvider>
    </Suspense>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
