const express = require('express');
const router = express.Router();
const usercontroller = require('../controller/controller');

//api to get all the data
router.get('/all', usercontroller.getAlldata);

// api to get data filtered by year
router.get("/year/:year", usercontroller.filteredByYear)

// api to get data filtered by topic
router.get("/topic/:topic", usercontroller.filteredByTopic)

// api to get data filtered by title
router.get("/title/:title", usercontroller.filteredByTitle)

// api to get data filtered by sector
router.get("/sector/:sector", usercontroller.filteredBySector)

// api to get data filtered by region
router.get("/region/:region", usercontroller.filteredByRegion)

// api to get data filtered by country
router.get("/country/:country", usercontroller.filteredByCountry)

// api to get data filtered by pestle
router.get("/pestle/:pestle", usercontroller.filteredByPestle)

// api to get data filtered by source
router.get("/source/:source", usercontroller.filteredBySource)

// api to get data filtered by intensity
router.get("/intensity/:intensity", usercontroller.filteredByIntensity)

// api to get data filtered by likelihood
router.get("/likelihood/:likelihood", usercontroller.filteredByLikelihood)

// api to get data filtered by any
router.get("/any/:search", usercontroller.filteredByAny)

//api to post data
router.post("/data" , usercontroller.addData) 

module.exports = router;