import React from 'react'



import { MealDayContainer, MealDayList } from './MealDay.styles'



const MealDay = () => {

    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const NewDay =new Date().getDay()

    console.log(days[NewDay])

    
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