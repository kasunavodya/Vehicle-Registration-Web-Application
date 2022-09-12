 import React, { Component } from 'react'
 import Header from '../header/header';
 import vehicle1 from '../assets/images/vehicle1.jpg';
 
 export default class homePage extends Component {
    
     render() {
         return (
             <div>
                <Header />
                     <main>
                     <img class="d-block w-100" src={vehicle1} alt="First slide" style = {{height: "738px"}} />
                     </main>
             </div>
         )
     }
 }
 
 
 
 
 
 