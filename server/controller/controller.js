const User = require('./../models/userdetails');


// function to get all the data
async function getAlldata(req, res){
    try {
        const allData = await User.find();
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No data found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "All data",
            data: allData
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by year
async function filteredByYear(req, res){
    try {
        const { year } = req.params;
        if (year.length !== 4) {
            return res.status(400).json({
                success: false,
                message: "Invalid year",
            })
        }
        // ----------- important -----------
        // using '$or' operator to which includes multiple conditions
        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await User.find({
            $or: [{ start_year: year }, { end_year: year }, { published: { $regex: year, $options: 'i' } },
            { added: { $regex: year, $options: 'i' } }]
        });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by year ${year}`,
            data: allData
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by topics
async function filteredByTopic (req, res) {
    try {
        const { topic } = req.params;
        if (topic.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid topic",
            })
        }
        // ----------- important -----------
        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await User.find({ topic: { $regex: topic, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by topic: ${topic}`,
            data: allData
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by title
async function filteredByTitle (req, res) {
    try {
        const { title } = req.params;
        if (title.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid title",
            })
        }
        // ----------- important -----------
        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await User.find({ title: { $regex: title, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by title: ${title}`,
            data: allData
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by sector
async function filteredBySector (req, res) {
    try {
        const { sector } = req.params;
        if (sector.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid sector",
            })
        }
        // ----------- important -----------
        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await User.find({ sector: { $regex: sector, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by sector: ${sector}`,
            data: allData
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by region
async function filteredByRegion (req, res) {
    try {
        const { region } = req.params;
        if (region.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid region",
            })
        }
        // ----------- important -----------
        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await User.find({ region: { $regex: region, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by region: ${region}`,
            data: allData
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by country
async function filteredByCountry (req, res) {
    try {
        const { country } = req.params;
        if (country.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid country",
            })
        }
        // ----------- important -----------
        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await User.find({ country: { $regex: country, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by country: ${country}`,
            data: allData
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by pestle
async function filteredByPestle(req, res) {
    try {
        const { pestle } = req.params;
        if (pestle.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid pestle",
            })
        }
        // ----------- important -----------
        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await User.find({ pestle: { $regex: pestle, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by pestle: ${pestle}`,
            data: allData
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by source
async function filteredBySource (req, res) {
    try {
        const { source } = req.params;
        if (source.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid source",
            })
        }
        // ----------- important -----------
        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await User.find({ source: { $regex: source, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by source: ${source}`,
            data: allData
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by intensity
async function filteredByIntensity (req, res) {
    try {
        const { intensity } = req.params;
        const allData = await User.find({ intensity: parseInt(intensity) });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by intensity: ${intensity}`,
            data: allData
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by likelihood
async function filteredByLikelihood (req, res) {
    try {
        const { likelihood } = req.params;
        const allData = await User.find({ likelihood: parseInt(likelihood) });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by likelihood: ${likelihood}`,
            data: allData
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by any
async function filteredByAny(req, res) {
    try {
        const { search } = req.params;
        if (search.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid search",
            })
        }
        // ----------- important -----------
        // using '$or' operator to which includes multiple conditions
        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await User.find({
            $or: [{ sector: { $regex: search, $options: 'i' } }, { topic: { $regex: search, $options: 'i' } },
            { insight: { $regex: search, $options: 'i' } }, { title: { $regex: search, $options: 'i' } },
            { pestle: { $regex: search, $options: 'i' } }, { source: { $regex: search, $options: 'i' } },
            { url: { $regex: search, $options: 'i' } }]
        });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by search ${search}`,
            data: allData
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

//controller to add data

async function addData(req, res) {
    try {
        const data = req.body; // Assuming req.body is an array of objects in the provided JSON format

        // If the request body is not an array, return an error
        if (!Array.isArray(data)) {
            return res.status(400).json({ message: 'Invalid data format. Expecting an array.' });
        }

        // Create an array to store the newly created users
        const newUserArray = [];

        // Loop through each object in the array and create a new user for each
        for (const item of data) {
            const { end_year, intensity, sector, topic, insight, url, region, start_year, impact, added, published, country, relevance, pestle, source, title, likelihood } = item;

            // Create a new User object and save it to the database
            const newUser = new User({ end_year, intensity, sector, topic, insight, url, region, start_year, impact, added, published, country, relevance, pestle, source, title, likelihood });
            await newUser.save();

            // Push the newly created user to the array
            newUserArray.push(newUser);
        }

        return res.status(201).json({ message: 'Data added successfully', User: newUserArray });
    } catch (err) {
        console.error('Error adding data:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    getAlldata,
    filteredByYear,
    filteredByTopic,
    filteredByTitle,
    filteredBySector,
    filteredByRegion,
    filteredByCountry,
    filteredByPestle,
    filteredBySource,
    filteredByIntensity,
    filteredByLikelihood,
    filteredByAny,
    addData
}