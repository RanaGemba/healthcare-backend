const cors = require('cors');
const { connect } = require('./db.js');
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Importing routes
const clinicRoute = require('./routes/clinicRoute.js');
const doctorRoute = require('./routes/doctorRoute.js');
const patientRoute = require('./routes/patientRoute.js');
const businessProviderRoute = require('./routes/businessProviderRoute.js');
const insuranceRoute = require('./routes/insuranceRoute.js');
const adminUserRoute = require('./routes/adminUserRoute.js');

// Middleware setup
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(cookieParser());
app.use(morgan('dev'));

// Connect to the database
connect(process.env.MONGODB_URI);

// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')));

// API routes
app.use('/v1/api/clinic', clinicRoute);
app.use('/v1/api/doctor', doctorRoute);
app.use('/v1/api/patient', patientRoute);
app.use('/v1/api/businessProvider', businessProviderRoute);
app.use('/v1/api/insurance', insuranceRoute);
app.use('/v1/api/adminUser', adminUserRoute);

// Catch-all route to serve the index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
