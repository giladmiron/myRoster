$('body').on('click', '.dreamTeamButton', addToDreamTeam) 
$('body').on('click', '.img', playerStats) 


function renderTeam() {
    let teamName = $('#team-input').val()
    $.get(`http://localhost:3000/teams/${teamName}`,function(data){
    renderer.render(data)
    })
}

function addToDreamTeam(){
    let nameArray = $(this).siblings('.name').text().split(" ")
    let firstName = nameArray[0]
    let lastName = nameArray[1]
    let jersey = $(this).siblings('.jersey').text()
    let pos = $(this).siblings('.pos').text()
    $.post(`/roster`, {firstName: firstName, lastName: lastName, jersey: jersey, pos: pos},function(response){
        return
    })
}

function displayDreamTeam() {
    $.get('/dreamTeam', function(data){
    renderer.render(data)
    })
}

function playerStats(){
    let playerName = $(this).siblings('.name').text().split(" ")
    let firstName = playerName[0]
    let lastName = playerName[1]
    $.get(`/playerStats/${firstName}/${lastName}`, function(response){
        alert(JSON.stringify(response))
    })
}
