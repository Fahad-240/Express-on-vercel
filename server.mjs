import express from "express"
import cors from "cors"
const app = express()
const port = process.env.PORT || 3002;
// 192.168.100.66 : 3000

app.use(cors())

app.get("/", (req, res) => {
    console.log(req.ip);
    res.send("hello world")
})


app.get("/get-weather/:cityName", (req, res) => {
    const city = req.params.cityName.toLocaleLowerCase()
    
        if (city === "lahore") {
            res.send({
                "location": "Lahore",
                "temprature": 32,
                "humidity": 60,
                "wind": "25km/h",
                "description": "Partly Cloudy",
                "feels_like": 34,
            });
        } else if (city === "islamabad") {
            res.send({
                "location": "Islamabad",
                "temprature": 28,
                "humidity": 55,
                "wind": "20km/h",
                "description": "Sunny",
                "feels_like": 30,
            });
        }  else if (city === "karachi") {
            res.send({
                "location": "karachi",
                "temprature": 40,
                "humidity": 55,
                "wind": "20km/h",
                "description": "Sunny",
                "feels_like": 30,
            })
         } else {
            console.log("city not found") 
        }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
