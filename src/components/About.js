import React from 'react'
import './about.css';

export default function About() {

    // const [stylesheet, setstylesheet] = useState({
    //     color:'black',
    //     backgroundColor:'white'
         
    //  })

    //  const [btntext, setbtntext] = useState("Enable Dark Mode")
    // const darkmod=()=>{
    //     if(stylesheet.color==='white')
    //     {
    //         setstylesheet({
    //             color:'black',
    //             backgroundColor:'white',
    //             border:'1px solid white',
                
    //          })
    //          setbtntext("Enable Dark Mode")
    //     }
    //     else{
    //         setstylesheet({
    //             color:'white',
    //             backgroundColor:'black',
    //          })
    //          setbtntext("Enable Light Mode")

    //     }
    // }
    return (
    <>
     <h1 style={{color:"cyan",textDecoration:"bold",backgroundColor:"black",position:"center"}}>
      About Us 
     </h1>
    </>
  )
}
