
import { Route, Routes } from 'react-router';
import {AppContainer} from  './App.styles.jsx';
import Home from './routes/home/Home.jsx';
import MealPlan from './routes/mealplan/MealPlan.jsx';
import Navigation from './routes/navigation/Navigation.jsx';

 const App = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='/mealplan' element={<MealPlan/>}/>
        </Route>
        
      </Routes>
    </AppContainer>
  );
}

export default App;
