import React, { useEffect, useState } from 'react'
import "./nav.css"


function Nav() {


  const [show,isShow] = useState(false);


  useEffect(()=> {

      
    
      window.addEventListener("scroll" , ()=>{

          if(window.scrollY > 100){
            isShow(true);
          }

          else{
            isShow(false);
          }

      })

      return () =>{
        window.removeEventListener("scroll");
      }

      /*
      
      useEffect will conditionally add/remove the event listener,
      otherwise events will keep firing as long as the component is mounted.
      
      */

   
      },[])  





  return (
    
        <div className={`nav ${show && "navblack" }`}>

        <img className="nav_logo" src="https://netflix-clone-one-gamma.vercel.app/_next/static/images/logo-ccbd5398cf84c392e091455a1f9fb4fe.png" alt="logo"/>
        <img className="nav_avatar" src="https://thumbs.dreamstime.com/b/vector-illustration-excited-abstract-person-raised-hands-up-liberty-conceptual-logotype-happiness-metaphor-logo-business-100506658.jpg" alt="logo"/>
                
        </div>
  )
}

export default Nav;