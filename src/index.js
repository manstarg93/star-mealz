import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { FoodProvider } from './context/FoodAddContext';
import { MealProvider } from './context/MealContext';
import { UiProvider } from './context/UiContext';
import { AuthProvider } from './context/AuthContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <FoodProvider>
      <MealProvider>
        <UiProvider>
        <App />
        </UiProvider>
     
      </MealProvider>
   
    </FoodProvider>
    </AuthProvider>
   

    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
