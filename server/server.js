const express = require('express')
const mongoose = require('mongoose')
const db = require('./db')
const app = express()
//require('dotenv').config();
app.use(express.json());

require('dotenv').config();

// Import and use your user authentication routes
const routes = require('./router/router');
app.use('/', routes);

//it is a test route just to see our server is working
app.get("/", (req, res) => {
    return res.send(`<div style = "background:magenta;padding:100px;"><h2>Welcome to Data Virtualization Server</h2>
    <p>Below are the some examples of supported routes...</p>
        <div><ul>
            <li>GET all data from the database - /api/data</li>
            <li>GET data filtered by year - /api/data/year/:year</li>
            <li>GET data filtered by region - /api/data/region/:region</li>
            <li>Much more...</li>
        </ul></div>
    </div>`)
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});