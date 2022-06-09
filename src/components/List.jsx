import React from 'react'
import './list.scss'

const List = ({people}) => {
  return (
    <div className='list'>
       {
         people.map((person) => {
           return(
             <div id={person.id} className='person'>
               <img src= {person.image} alt="" />
               <div className='detail' >
               <h3>Name: {person.name} </h3>
               <h3>Age: {person.age} </h3>
               </div>
               
             </div>
           )
         })
       }
    </div>
  )
}

export default List