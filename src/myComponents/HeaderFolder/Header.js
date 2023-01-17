import "./Header.css"

// rafce: fat arrow way of decalring function. the modern way now

// const Header = () => {
//   return (
//     <div>Header</div>
//   )
// }
// export default Header


// rfce vanilla way of declaring function

function Header() {
  let name="ib"
  let src = 'https://fontawesome.com/icons/cart-shopping?s=regular&f=classic'
  return (

    <div className='div'>
    <h1>this is react {name} native</h1>
  </div>
    // <>
    //   <p>this is holiday period</p>
    //   <h1>i am a boy</h1>
    // </>

    //  <Fragment>
    //   <p>goooooof</p>
    // </Fragment>

    // <div>Header</div>



  )
}
export default Header



// rafc: 
// import React from 'react'

// export const Header = () => {
//   return (
//     <div>Header</div>
//   )
// }
