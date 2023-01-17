import React from 'react'
import banner from "../Images/banner.jpeg"

function Showcase(props) {
  return (
    <div>Showcase
      {console.log(props)}
    </div>

  )
}

export default Showcase;

const Tomato = () => {
  let num = 6;
  for (let i = 0; i < num; i++) {
    console.log("i am moving forward");
    // console.log("i am " + i);
  }

  if (num == 3) {
    console.log(num)
  }
  else {
    // console.log("not" + num)
    console.log(`not ${num}`)
  }

  return (
    <div>
      {console.log(4 * { num })}
    </div>
  )
}


const Orange = () => {
  let toy = 5;
  let biro = 50;

  let stylingo = {
    color: 'blue',
    fontSize: '4rem',
    fontWeigth: 'bold'
  }

  let pen = <a href="https://web.facebook.com/?_rdc=1&_rdr">facebook</a>

  let ola = "https://web.facebook.com/?_rdc=1&_rdr"
  // external image
  let konga = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.konga.com%2Fcategory%2Fgenerators-8460&psig=AOvVaw22-tPmx438TeE7KkQNBUyn&ust=1673955530467000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMiWvrqAzPwCFQAAAAAdAAAAABAE'
  let kongas = "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/J/149736_1558008298.jpg"
  let jumia = "https://food.jumia.com.ng/images/jumia-for-corporate.jpg"
  return (
    <div>
      {/* inline styling with react */}
      <p style={{ color: 'red', fontSize: '4rem', fontWeigth: 'bold' }}>{toy}</p>
      {/* internal styling with react */}
      <p style={stylingo}>{biro}</p>

      {/* adding an image with react */}
      <img src={banner} />

      {/* link a site to our page dynamically */}
      <button>{pen}</button> <br />

      {/* this won't work bcos our dynamic value can't be in a string
      <a href="{ola}">link</a> <br /> */}

      {/* link to facebook using dynamic value */}
      <button><a href={ola}>FACEBOOK</a></button> <br />


      {/* link to external image */}
      <button><a href={konga}>click to see image</a></button>


      {/* link to display external image on DOM */}
      <img src={kongas} alt="" />
      <img src={jumia} />

    </div>
  )
}



export { Tomato, Orange };

