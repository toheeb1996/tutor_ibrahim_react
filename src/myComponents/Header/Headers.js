import React from 'react'

 function Headers() {
  return (
    <div>
      Header
    </div>
  )
}
export default Headers

var shola = ['rice', 'fish', 'tomato', 'egg', 'meat']
const ade = 10

 export const Akande = (props) => {
  return(
    <div>
      <p>this is an arrow/fat arrow fn {shola}</p> 
      <p>olu is {ade} years old</p>
      {console.log(props)}


    </div>
      )
}

