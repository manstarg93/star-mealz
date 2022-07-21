

import React, { Fragment, Suspense, useContext, useEffect } from 'react';
import { Route, Routes} from 'react-router';
import {AppContainer} from  './App.styles.jsx';
import { AuthContext } from './context/AuthContext.jsx';


const LoadingSpinner = React.lazy(() => import('./components/ui/loading/LoadingSpinner.jsx'))
const LoginRegisterModal = React.lazy(() => import('./components/loginRegister/LoginRegisterModal.jsx'))
const Home = React.lazy(() => import('./routes/home/Home.jsx'))
const MealPlan = React.lazy(() => import('./routes/mealplan/MealPlan.jsx'))
const Navigation = React.lazy(() => import('./routes/navigation/Navigation.jsx'))
const MyRecipies = React.lazy(() => import('./routes/myrecipie/MyRecipies.jsx'))
const SelectedMealDishes = React.lazy(() => import('./routes/myrecipie/SelectedMealDishes.jsx'))
const SelectedMealRecipie = React.lazy(() => import('./routes/myrecipie/SelectedMealRecipie.jsx'))




 const App = () => {
  const {setAuthHandler,setUserData} = useContext(AuthContext)

  const authData = JSON.parse(localStorage.getItem('auth'))




  useEffect(() => {
    
        if(authData){
          setAuthHandler(authData)
          setUserData(authData.uid)
          
        }
        
  },[])








  return (
    <AppContainer>
      <Suspense fallback={<LoadingSpinner/>}>
      <Routes>
        <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        {authData && <Fragment>
          <Route path='/mealplan' element={<MealPlan/>}/>
        <Route path='/myrecipies' element={<MyRecipies/>}/>
        <Route path='/myrecipies/:title' element={<SelectedMealDishes/>}/>
        <Route path='/myrecipies/:title/:dishTitle' element={<SelectedMealRecipie/>}/>
        {/* <Route path='/favourites' element={<Favourites/>}/> */}
        </Fragment>}
        </Route>
        <Route path='*' element={<p>404 Page does not exist</p>}/> 
      </Routes>
      <LoginRegisterModal/>
      </Suspense>
  
    </AppContainer>
  );
}

export default App;
