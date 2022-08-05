

import React, { Fragment, Suspense, useContext, useEffect } from 'react';
import { Route, Routes} from 'react-router';
import {AppContainer} from  './App.styles.jsx';

import LoadingSpinner from './components/ui/loading/LoadingSpinner.jsx';

import { AuthContext } from './context/AuthContext.jsx';

const GetStarted = React.lazy(() => import('./routes/getstarted/GetStarted.jsx'))


const Home = React.lazy(() => import('./routes/home/Home.jsx'))
const MealPlan = React.lazy(() => import('./routes/mealplan/MealPlan.jsx'))
const Navigation = React.lazy(() => import('./routes/navigation/Navigation.jsx'))
const MyRecipies = React.lazy(() => import('./routes/myrecipie/MyRecipies.jsx'))

const InitialAddMealModal = React.lazy(() => import('./components/addMealComponents/AddMealModal/InitialAddMealModal.jsx'))
const AddMealModal = React.lazy(() => import('./components/addMealComponents/AddMealModal/AddMealModal.jsx'))
const MealAdding = React.lazy(() => import('./components/finishAddingMeal/MealAdding.jsx'))





 const App = () => {
  const {setAuthHandler,setUserData} = useContext(AuthContext)

  const authData = JSON.parse(localStorage.getItem('auth'))
// console.log(process.env.REACT_APP_USDA_API_KEY)
// console.log(process.env.REACT_APP_FIREBASE_API_KEY)


  useEffect(() => {
    console.log('testing logs')
        if(authData){
          setAuthHandler(authData)
          setUserData(authData.uid)
          
        }





 
  },[])








  return (
    <AppContainer>
      <Suspense fallback={<LoadingSpinner/>}>
        {!authData ? <Routes> 
          
        <Route path='/' element={<GetStarted/>}/></Routes>  :  <Routes>
          
        <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        {authData && <Fragment>
          <Route path='/mealplan' element={<MealPlan/>}/>
        <Route path='/myrecipies' element={<MyRecipies/>}/>
 
        {/* <Route path='/favourites' element={<Favourites/>}/> */}
        </Fragment>}
        </Route>
        <Route path='*' element={<p>404 Page does not exist</p>}/> 
        
      </Routes>}
     
      <InitialAddMealModal/>
      <AddMealModal/>
  <MealAdding/>
      </Suspense>
     
    </AppContainer>
  );
}

export default App;
