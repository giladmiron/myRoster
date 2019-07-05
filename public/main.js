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
