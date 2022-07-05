import React from 'react'



import { MealDayContainer, MealDayList } from './MealDay.styles'



const MealDay = () => {

 

    
    const items = [
        {
            id: Math.random(4),
            title: 'Monday',
        },
        {
            id: Math.random(5),
            title: 'Tuesday',
        },
        {
            id: Math.random(3),
            title: 'Wednesday',
        },
        {
            id: Math.random(6),
            title: 'Thursday',
        },
        {
            id: Math.random(7),
            title: 'Friday',
        },
    ]
  return  <MealDayContainer items={items} >
      <MealDayList  />
  </MealDayContainer>
  
}

export default MealDay