/**
 * SCOPE    -   VEHICLE MANAGEMENT
 * PAGE     -   VIEW VEHICLE PAGE 
 * 
 * =========================================
 * CREATED BY           :   Kasuni Makalanda
 */

import React, { Component } from 'react'
import Axios from 'axios';

import Header from '../../header/header';
import '../../assets/css/cards.css';

const initialStates = {
    "vehicles": [],
    "searchVehicle": ''
}

export default class ViewVehicleDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.navigateToUpdatePage = this.navigateToUpdatePage.bind(this);
        this.navigateToDeletePage = this.navigateToDeletePage.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = initialStates;
    }

    onChange(e) {
        this.setState({ searchVehicle: e.target.value });
    }

     /**
     * DESCRIPTION      -       The function written to get all vehicle details
     * METHOD CALLS     -       setState()
     * API CALL         -       GET ALL VEHICLE DETAILS
     */
    componentDidMount(e) {
        Axios.get('http://localhost:3001/vehicle/getAllVehicles')
            .then(response => {
                this.setState({ vehicles: response.data.data });
            }).catch(error => {
                alert(error.message);
            })
    }

    /**
     * DESCRIPTION      -       The function to navigate to the update vehicle page
     */
    navigateToUpdatePage(e, vehicleId) {
        window.location = `/updateVehicle/${vehicleId}`;
    }

    /**
     * DESCRIPTION      -       The function to navigate to the delete vehicle page
     */
    navigateToDeletePage(e, vehicleId) {
        window.location = `/deleteVehicle/${vehicleId}`;
    }

    render() {
        return (
            <div>
                <Header />
                <div class="wrapper">
                    <main>
                        <h1>REGISTERED VEHICLE DETALS</h1>
                        <div class="wrap">
                            <div class="search">
                                <input
                                    type="text"
                                    placeholder="Search by vehicle plate Number"
                                    name="searchVehicle"
                                    id="searchVehicle"
                                    onChange={this.onChange}
                                    class="searchTerm" />
                                <button type="submit" class="searchButton">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                        </div><br /><br /><br />

                        <div class="row">
                            {this.state.vehicles.length > 0 && this.state.vehicles.filter((values) => {
                                if (this.state.searchVehicle == "") {
                                    return values;
                                } else if (values.plateNumber.toLowerCase().includes(this.state.searchVehicle.toLowerCase())) {
                                    return values;
                                }
                            }).map((item, index) => {
                                return (
                                    <div class="column">
                                        <div class="card" style={{ backgroundColor: "#e2e1eb" }}>
                                            <div class="container"><br />
                                                <p style={{ fontFamily: "Arial Black", fontSize: "25px", color: "black" }}><b><i className='fa fa-car'></i>{" " + item.plateNumber}</b></p>
                                                <p style={{ marginLeft: "25%", marginTop: "-4%" }}> <span class="highlight" style={{ backgroundColor: '#f0ec0e', padding: '0.4em 0.6em', color: 'red' }}>{item.plateNumberType}</span></p>
                                                <p style={{ fontFamily: "sans-serif", fontSize: "19px", color: "#47464d" }}><i className='fa fa-user'></i>  OWNER: {item.owner}</p>
                                                <p style={{ fontFamily: "sans-serif", fontSize: "19px", color: "#47464d" }}><i className='fa fa-industry'></i>  MANUFACTURER: {item.manufacturer}</p>
                                                <p style={{ fontFamily: "sans-serif", fontSize: "19px", color: "#47464d" }}><i className='fa fa-car'></i>  VEHICLE TYPE: {item.typeOption} ({item.typeName})</p>
                                                <p style={{ fontFamily: "sans-serif", fontSize: "19px", color: "#47464d" }}><i className='fa fa-calendar-o'></i>  INSPECTION DATE: {item.inspectionDate}</p>
                                                <p style={{ fontFamily: "sans-serif", fontSize: "19px", color: "#47464d" }}><i className='fa fa-building'></i>  INSURANCE COMPANY: {item.insurance}</p>
                                                <button class="btn btn-primary" style={{ backgroundColor: 'black', width: '8%', marginLeft: '23%' }} type="button" onClick={e => this.navigateToUpdatePage(e, item._id)}>Edit&nbsp;&nbsp;<i class="fa fa-edit"></i></button>
                                                &nbsp;&nbsp;
                                                <button class="btn btn-primary" style={{ backgroundColor: '#800808', width: '8%', marginLeft: '1%' }} type="button" onClick={e => this.navigateToDeletePage(e, item._id)}>Delete&nbsp;&nbsp;<i class="fa fa-trash"></i></button>
                                            </div><br />
                                        </div><br /><br />
                                    </div>
                                )
                            })}
                        </div>

                    </main>
                </div>
            </div>
        )
    }
}