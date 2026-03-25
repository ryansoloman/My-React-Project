import React from 'react'

const Cards = () => {

     const cardsdata = [
        {
            id : 1,
            title : "Card 1",
            description : "This is the description for Card 1",
            image_url : "./product-1.jpg"
        },
        {
            id : 2,
            title : "Card 2",
            description : "This is the description for Card 2",
            image_url : "./product-2.jpg"
        },
        {
            id : 3,
            title : "Card 3",
            description : "This is the description for Card 3",
            image_url : "./product-3.jpg"
        }
     ]


  return (

     <>
         <div className='cards-container grid grid-cols '></div>
     </>

  )
}

export default Cards
