const express = require('express')
const app = express()

app.use(express.json())

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"] })
})

app.post("/api/signup", (req, res) => {
    console.log(req.body);

    res.json({ message: "Received" });  
})

app.listen(5000, () => {console.log("Server started on port 5000") })