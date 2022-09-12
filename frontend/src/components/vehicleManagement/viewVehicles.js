import React, { Component } from 'react'
import Axios from 'axios';

import Header from '../../header/header';

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

    componentDidMount(e) {
        Axios.get('http://localhost:3001/vehicle/getAllVehicles')
            .then(response => {
                this.setState({ vehicles: response.data.data });
            }).catch(error => {
                alert(error.message);
            })
    }

    navigateToUpdatePage(e, vehicleId) {
        window.location = `/updateVehicle/${vehicleId}`;
    }

    navigateToDeletePage(e, vehicleId) {
        window.location = `/deleteVehicle/${vehicleId}`;
    }

    render() {
        return (
            <div>
                <Header />
                <div class="wrapper">
                    <nav>
                        <header><br />
                            &nbsp; &nbsp; &nbsp; &nbsp;
                        </header><hr style={{ color: "white" }} />
                        <ul><br />
                            <li><a href="/viewVehicles" style={{ color: "white" }} class="active">View Vehicles</a></li>
                            <li><a href="/registerVehicle" style={{ color: "white" }} >Register Vehicle</a></li>
                            <li><a href="/" style={{ color: "white" }}>Logout</a></li>
                        </ul>
                    </nav>
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

                        <table class="table border shadow" id="casti_male">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">OWNER</th>
                                    <th scope="col">PLATE NUMBER</th>
                                    <th scope="col">MANUFACTURER</th>
                                    <th scope="col">TYPE-OPTION</th>
                                    <th scope="col">TYPE-NAME</th>
                                    <th scope="col">INSPECTION DATE</th>
                                    <th scope="col">INSURANCE</th>
                                    <th scope="col">EDIT</th>
                                    <th scope="col">DELETE</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.vehicles.length > 0 && this.state.vehicles.filter((values) => {
                                    if (this.state.searchVehicle == "") {
                                        return values;
                                    } else if (values.plateNumber.toLowerCase().includes(this.state.searchVehicle.toLowerCase())) {
                                        return values;
                                    }
                                }).map((item, index) =>
                                    <tr>
                                        <td><span class="highlight" style={{ backgroundColor: '#f0ec0e', padding: '0.4em 0.6em', color: 'red' }} ><b>{item.owner}</b></span></td>
                                        <td>{item.plateNumber}</td>
                                        <td>{item.manufacturer}</td>
                                        <td>{item.typeOption}</td>
                                        <td>{item.typeName}</td>
                                        <td>{item.inspectionDate}</td>
                                        <td>{item.insurance}</td>
                                        <td>
                                            <li class="list-inline-item">
                                                <button class="btn btn-success btn-sm rounded-0" style={{ backgroundColor: 'black' }} type="button" data-toggle="tooltip" data-placement="top" title="Edit" onClick={e => this.navigateToUpdatePage(e, item._id)}><i class="fa fa-edit"></i></button>
                                            </li>
                                        </td>

                                        <td>
                                            <li class="list-inline-item">
                                                <button class="btn btn-danger btn-sm rounded-0" style={{ backgroundColor: 'black' }} type="button" data-toggle="tooltip" data-placement="top" title="Delete" onClick={e => this.navigateToDeletePage(e, item._id)}><i class="fa fa-trash"></i></button>
                                            </li>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </main>
                </div>
            </div>
        )
    }
}