const express = require('express')
const app = express()
const path = require('path')
const request = require('request')
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}


app.get('/teams/:teamName', function (req, res) {
    let teamName = req.params.teamName
    request.get('http://data.nba.net/10s/prod/v1/2018/players.json', function (error, response) {
        let players = JSON.parse(response.body).league.standard
        players = players.filter(p => p.teamId == teamToIDs[teamName] & p.isActive)
        relevantPlayers = players.map(p => { return{
            firstName: p.firstName, 
            lastName: p.lastName, 
            jersey: p.jersey, 
            pos: p.pos
        }})
        res.send(relevantPlayers)
    })
})


const dreamTeam = []

app.get('/dreamTeam', function(req,res){
    res.send(dreamTeam)
})

app.post(`/roster`,function(req,res){
    const playerToDreamTeam = req.body
    dreamTeam.push(playerToDreamTeam)
    res.end()
})




const port = 3000
app.listen(port, function () { console.log(`Server is running on port ${port}!`) })
