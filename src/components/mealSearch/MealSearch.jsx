
import React, { useContext } from 'react'
import { FoodAddContext } from '../../context/FoodAddContext'
import Button from '../button/Button'

import { MealSearchContainer, MealSearchInput } from './MealSearch.syles'

const MealSearch = () => {

    const {findFood, foodSearchHandler,searchValue} = useContext(FoodAddContext)

  return (<MealSearchContainer>
<MealSearchInput onChange={foodSearchHandler} value={searchValue} placeholder='Search food' type='search'/>
      <Button onClick={findFood}>Add Food</Button>
  </MealSearchContainer>
   
  )
}

export default MealSearch