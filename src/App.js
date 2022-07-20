
import { getDoc } from 'firebase/firestore';
import { Fragment, useContext, useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router';
import {AppContainer} from  './App.styles.jsx';
import LoginRegisterModal from './components/loginRegister/LoginRegisterModal.jsx';
import { AuthContext } from './context/AuthContext.jsx';
import Home from './routes/home/Home.jsx';
import MealPlan from './routes/mealplan/MealPlan.jsx';
import Navigation from './routes/navigation/Navigation.jsx';

import MyRecipies from './routes/myrecipie/MyRecipies.jsx';
import Favourites from './routes/favourites/Favourites.jsx';

import SelectedMealDishes from './routes/myrecipie/SelectedMealDishes.jsx'
import SelectedMealRecipie from './routes/myrecipie/SelectedMealRecipie.jsx';


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
    </AppContainer>
  );
}

export default App;
