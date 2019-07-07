$('body').on('click', '.dreamTeamButton', addToDreamTeam) 


function renderTeam() {
    $('#container').empty()
    let teamName = $('#team-input').val()
    $.get(`http://localhost:3000/teams/${teamName}`,function(data){
    const source = $('#players-template').html()
    const template = Handlebars.compile(source);
    const newHTML = template({ players: data })
    $('#container').append(newHTML)
    })
}

function displayDreamTeam() {
    $('#container').empty()
    $.get('/dreamTeam', function(data){
    const source = $('#players-template').html()
    const template = Handlebars.compile(source);
    const newHTML = template({ players: data })
    $('#container').append(newHTML)
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
