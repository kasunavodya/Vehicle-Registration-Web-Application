import React, { Component } from 'react'
import Header from '../../header/header';
import Axios from 'axios';

import vehicle2 from '../../assets/images/vehicle2.jpg';
import '../../assets/css/vehicle.css';

const initialStates = {
    "owner": '',
    "plateNumberType": '',
    "plateNumber": '',
    "manufacturer": '',
    "typeOption": '',
    "typeName": '',
    "inspectionDate": Date().toLocaleString(),
    "insurance": '',
    "plateNumberError": ''
}

export default class regsterVehiclePage extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialStates;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    validate = () => {
        let isError = false;
        const errors = {
            plateNumberError: ''
        };

        if (this.state.plateNumber.length > 20) {
            isError = true;
            errors.plateNumberError = "Needs to be lower than 20 characters";
        }

        if (isError) {
            this.setState({
                ...this.state,
                ...errors
            });
        }

        return isError;
    }

    onSubmit(e) {
        e.preventDefault();

        const err = this.validate();
        if (!err) {

            let vehicle = {
                "owner": this.state.owner,
                "plateNumberType": this.state.plateNumberType,
                "plateNumber": this.state.plateNumber,
                "manufacturer": this.state.manufacturer,
                "typeOption": this.state.typeOption,
                "typeName": this.state.typeName,
                "inspectionDate": this.state.inspectionDate,
                "insurance": this.state.insurance
            }
            Axios.post('http://localhost:3001/vehicle/addVehicle', vehicle)
                .then(response => {
                    alert('Vehicle Details Registered Successfully');
                    window.location = "/viewVehicles";
                }).catch(error => {
                    alert(error.message);
                })
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div class="wrapper">
                    <main>
                        <h1>REGISTER VEHICLE</h1>
                        <div class="container border rounded" style={{ width: '1000px' }}>
                            <div class="row">
                                <div class="col-lg-12 col-md-6">
                                    <form onSubmit={this.onSubmit}><br />
                                        <div className="form-group">
                                            <img class="d-block w-100" src={vehicle2} alt="First slide" /><br />
                                            <div className="form-group">
                                                <span style={{ color: "black" }}>Owner's Name<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                                <input
                                                    class="form-control"
                                                    type="text"
                                                    name="owner"
                                                    id="owner"
                                                    value={this.state.owner}
                                                    onChange={this.onChange}
                                                    placeholder="Enter your name"
                                                    required
                                                    style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                            </div>
                                            <br />
                                            <div className="form-group">
                                                <span style={{ color: "black" }}>License Plate Number<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}>{this.state.plateNumberError}</font>
                                                <br />
                                                <div class="row">
                                                    <div class="column" style={{ width: "50%" }}>
                                                        <select name="plateNumberType" id="plateNumberType" onChange={this.onChange} class="form-select" aria-label="Default select example" style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }}>
                                                            <option selected value="plateNumberType" disabled>Select License Plate Type</option>
                                                            <option value="Vintage License Plate">Vintage (Eg: 13 ශ්‍රී 9999)</option>
                                                            <option value="Old License Plate">Old (Eg: 250-9999, 19-9999)</option>
                                                            <option value="Modern License Plate">Modern (Eg: WP GA-9999, CAR-9999)</option>
                                                        </select>
                                                    </div><br />
                                                    <div class="column" style={{ width: "50%" }}>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="plateNumber"
                                                            id="plateNumber"
                                                            value={this.state.plateNumber}
                                                            onChange={this.onChange}
                                                            placeholder="Enter License Plate Number"
                                                            required
                                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <div className="form-group">
                                                <span style={{ color: "black" }}>Manufacturer<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                                <input
                                                    class="form-control"
                                                    type="text"
                                                    name="manufacturer"
                                                    id="manufacturer"
                                                    value={this.state.manufacturer}
                                                    onChange={this.onChange}
                                                    placeholder="Enter Vehicle Manufacturer (Eg: Toyota)"
                                                    required
                                                    style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                            </div>
                                            <br />
                                            <div className="form-group">
                                                <span style={{ color: "black" }}>Vehicle Type<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                                <div class="row">
                                                    <div class="column" style={{ width: "50%" }}>
                                                        <select name="typeOption" id="typeOption" onChange={this.onChange} class="form-select" aria-label="Default select example" style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }}>
                                                            <option selected value="typeOption" disabled>Select Vehicle Type</option>
                                                            <option value="Two Wheeler Vehicle">Two Wheeler Vehicle (Motor Cycle, Scooty)</option>
                                                            <option value="Three Wheeler Vehicle">Three Wheeler Vehicle (Auto, Toto, etc.)</option>
                                                            <option value="Four Wheeler Vehicle">Four Wheeler Vehicle (Cars, Bus, Truck, Tractor, etc.)</option>
                                                            <option value="Six Wheeler Vehicle">Six Wheeler vehicle (Bus, Trucks, etc.)</option>
                                                            <option value="Eight Wheeler Vehicle">Eight Wheeler Vehicle (Bus, Trucks, etc.)</option>
                                                        </select>
                                                    </div><br />
                                                    <div class="column" style={{ width: "50%" }}>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="typeName"
                                                            id="typeName"
                                                            value={this.state.typeName}
                                                            onChange={this.onChange}
                                                            placeholder="Enter Vehicle Type (Eg: Car)"
                                                            required
                                                            style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <div className="form-group">
                                                <span style={{ color: "black" }}>Vehicle Inspection Date<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                                <input
                                                    class="form-control"
                                                    type="date"
                                                    name="inspectionDate"
                                                    id="inspectionDate"
                                                    value={this.state.inspectionDate}
                                                    onChange={this.onChange}
                                                    required
                                                    style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                            </div>
                                            <br />
                                            <div className="form-group">
                                                <span style={{ color: "black" }}>Insurance Company<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                                <input
                                                    class="form-control"
                                                    type="text"
                                                    name="insurance"
                                                    id="insurance"
                                                    value={this.state.insurance}
                                                    onChange={this.onChange}
                                                    placeholder="Enter Insurance Company Name"
                                                    required
                                                    style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                            </div>
                                            <br />
                                        </div><br />
                                        <button type="submit" style={{ width: '100%' }} className="btn btn-dark" id="submitBtn">Add Vehicle</button>
                                        <br /><br />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </main >
                </div >
            </div >
        )
    }
}





