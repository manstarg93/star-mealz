
import { getDoc } from 'firebase/firestore';
import { Fragment, useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import {AppContainer} from  './App.styles.jsx';
import LoginRegisterModal from './components/loginRegister/LoginRegisterModal.jsx';
import { AuthContext } from './context/AuthContext.jsx';
import { MealContext } from './context/MealContext.jsx';

import Home from './routes/home/Home.jsx';
import MealPlan from './routes/mealplan/MealPlan.jsx';
import Navigation from './routes/navigation/Navigation.jsx';
import User from './routes/user/User.jsx';



 const App = () => {
  const {setAuthHandler,setUserData} = useContext(AuthContext)
  const authData = JSON.parse(localStorage.getItem('auth'))
 
  useEffect(() => {
    

     const getDocData = async() => {
      if(authData){
    
        setAuthHandler(authData)
        setUserData(authData.uid)
        
      }
     }
    
      
getDocData()
   
  
  
    
   
  },[])



  return (
    <AppContainer>
      <Routes>
        <Route path='/' element={<Navigation authData={authData}/>}>
        <Route index element={<Home/>}/>
        {authData && <Fragment><Route path='/mealplan' element={<MealPlan/>}/>
        <Route path='/user' element={<User/>}/></Fragment>}
        
        </Route>
        <Route path='*' element={<p>404 Page does not exist</p>}/> 
      </Routes>
      <LoginRegisterModal/>
    </AppContainer>
  );
}

export default App;
