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

// $('body').on('click', '.player', function () {
//     const name = $(this).children('#name').text().split(" ")
//     $.get(`http://localhost:3000/playerStats/${name[0]}kkkkk${name[1]}`,function(data){
//    console.log(data)
// })
// })