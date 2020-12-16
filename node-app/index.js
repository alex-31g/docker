const fs = require('fs')
const express = require('express')
const app = express()

let fileContent = fs.readFileSync("data.json", "utf8");
let data = JSON.parse(fileContent)
let result = data.payload + ' - ' + new Date()

app.get('/', (req, res) => {
	res.status(200).json(result)
})

const port = 8080

app.listen(port, () => console.log(`server work at http://localhost:${port}/`))