
import { Route, Routes } from 'react-router';
import {AppContainer} from  './App.styles.jsx';
import LoginRegisterModal from './components/loginRegisterModal/LoginRegisterModal.jsx';
import Home from './routes/home/Home.jsx';
import MealPlan from './routes/mealplan/MealPlan.jsx';
import Navigation from './routes/navigation/Navigation.jsx';
import User from './routes/user/User.jsx';

 const App = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='/mealplan' element={<MealPlan/>}/>
        <Route path='/user' element={<User/>}/>
        </Route>
        
      </Routes>
      <LoginRegisterModal/>
    </AppContainer>
  );
}

export default App;
