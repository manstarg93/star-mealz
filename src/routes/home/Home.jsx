import React, { Fragment } from 'react'

import InitIalAddMeal from '../../components/addMealComponents/AddMealModal/InitialAddMeal'
import Food from '../../components/food/Food'

import { HomeContainer } from './Home.styles'

const Home = () => {
  return (
    <Fragment>
<HomeContainer>

<Food/>
<InitIalAddMeal/>

</HomeContainer>

    </Fragment>
   
  )
}

export default Home