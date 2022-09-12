const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(bodyparser.json());
app.use(cors());

const VehicleRoutes = require('./routes/Vehicle');

app.use("/vehicle", VehicleRoutes);

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

//Connection to mongoose
mongoose.connect(MONGODB_URI || '&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (error) => {
    if (error) {
        console.log('Error in connection: ', error.message);
    }
});

//Check if connection is successful
mongoose.connection.once('open', () => {
    console.log('Database Synced!!');
})

//Running on the server
app.listen(PORT, () => {
    console.log(`Server is started and running on ${PORT}`);
});


