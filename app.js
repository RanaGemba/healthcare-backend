const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const { connect } = require('./db.js');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const clinicRoute = require('./routes/clinicRoute.js');
const doctorRoute = require('./routes/doctorRoute.js');
const patientRoute = require('./routes/patientRoute.js');
const businessProviderRoute = require('./routes/businessProviderRoute.js');
const insuranceRoute = require('./routes/insuranceRoute.js');
const adminUserRoute = require('./routes/adminUserRoute.js');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());
app.use(morgan('dev'));

connect();

// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')));

// API routes
app.use('/v1/api/clinic', clinicRoute);
app.use('/v1/api/doctor', doctorRoute);
app.use('/v1/api/patient', patientRoute);
app.use('/v1/api/businessProvider', businessProviderRoute);
app.use('/v1/api/insurance', insuranceRoute);
app.use('/v1/api/adminUser', adminUserRoute);

// Catch-all route to serve the index.html for any unknown paths (for client-side routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


process.on('SIGINT', () => {
  console.log('SIGINT received. Closing server gracefully...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});
