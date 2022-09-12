import React, { Component } from 'react'
import Header from '../header/header';
import vehicle1 from '../assets/images/vehicle1.jpg';
import '../assets/css/home.css';

export default class homePage extends Component {

    render() {
        return (
            <div>
                <Header />
                <main>
                    <div>
                        <img class="d-block w-100" src={vehicle1} alt="First slide" style={{ height: "738px", opacity: "0.7" }} />
                        <div class="centered"><p style = {{fontSize: "200px", color: "#eb3110", fontFamily: "audiowide"}}>VEHICLEZ</p></div>
                        <br/><br/><br/>
                        <div class="centered2"><b><p style = {{fontSize: "60px", color: "#bd3011", fontFamily: "trirong"}}>Vehicle Auto Registration</p></b></div>
                    </div>
                </main>
            </div>
        )
    }
}





