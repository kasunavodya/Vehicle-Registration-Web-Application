 import React, { Component } from 'react'
 import '../../assets/css/vehicle.css';
 import Axios from 'axios';
 import Header from '../../header/header';
 
 const initialStates = {
     "vehicles": []
 }
 
 export default class deleteVehiclePage extends Component {
     constructor(props) {
         super(props);
         this.onSubmit = this.onSubmit.bind(this);
         this.navigatetoViewVehiclePage = this.navigatetoViewVehiclePage.bind(this);
         this.state = initialStates;
         this.state = {
             id: this.props.match.params.id
         }
     }
 
     componentDidMount() {
         Axios.get(`http://localhost:3001/vehicle/getVehicleById/${this.state.id}`)
             .then(response => {
                this.setState({ vehicles: response.data.data });
                this.setState({ owner: this.state.vehicles.owner });
                this.setState({ plateNumber: this.state.vehicles.plateNumber });
                this.setState({ manufacturer: this.state.vehicles.manufacturer });
                this.setState({ typeOption: this.state.vehicles.typeOption });
                this.setState({ typeName: this.state.vehicles.typeName });
                this.setState({ inspectionDate: this.state.vehicles.inspectionDate });
                this.setState({ insurance: this.state.vehicles.insurance });
             }).catch(error => {
                 console.log(error.message);
             })
     }
 
     onSubmit(e) {
         e.preventDefault();
         Axios.delete(`http://localhost:3001/vehicle/deleteVehicle/${this.state.id}`)
             .then(response => {
                 alert('Vehicle Details deleted Successfully');
                 window.location = "/viewVehicles";
             }).catch(error => {
                 console.log(error.message);
             })
     }
 
     navigatetoViewVehiclePage(e, item_id) {
         window.location = "/viewVehicles";
     }
 
     render() {
         return (
             <div>
                <Header />
                 <div class="wrapper">
                     <main>
                         <h1>VEHICLE DELETE CONFIRMATION</h1>
                         <div class="content">
                             <div class="wrapper-1">
                                 <div class="wrapper-2">
                                     <div class="alert alert-danger" role="alert">
                                         <center><p>Are you sure you want to permanently remove this vehicle registration?</p><hr />
                                             By deleting this vehicle detail you can't undo this action.</center>
                                     </div><br />
                                     <div class="m-t-lg">
                                         <ul class="list-inline">
                                             <li>
                                                 <span style={{ color: "black", fontFamily: "'Abril Fatface', cursive;" }}><b>Plate Number:</b>&nbsp;&nbsp;<b><span class="highlight" style={{ backgroundColor: '#f0ec0e', padding: '0.4em 0.6em', color: 'red' }} ><b>{this.state.plateNumber}</b></span></b></span><br/><br/>
                                                 <span style={{ color: "black", fontFamily: "'Abril Fatface', cursive;"}}><b>Manufacturer:</b> {this.state.manufacturer}</span><br />
                                                 <span style={{ color: "black", fontFamily: "'Abril Fatface', cursive;"}}><b>Type:</b> {this.state.typeOption} / {this.state.typeName}</span><br />
                                                 <span style={{ color: "black", fontFamily: "'Abril Fatface', cursive;"}}><b>Inspection Date:</b> {this.state.inspectionDate}</span><br />
                                                 <span style={{ color: "black", fontFamily: "'Abril Fatface', cursive;"}}><b>Insurance Company:</b> {this.state.insurance}</span><br />
                                             </li>
                                         </ul>
                                     </div>
                                     <button class="cancel" onClick={this.navigatetoViewVehiclePage} style={{ float: "left" }}>
                                         Cancel
                                     </button>
                                     <button class="delete" onClick={this.onSubmit} style={{ float: "right" }}>
                                         Delete
                                     </button>
                                 </div>
                             </div>
                         </div>
 
                     </main>
                 </div>
             </div>
         )
     }
 }
 