class Renderer {
    constructor(){}


    render(data){
        $('#container').empty()
        const source = $('#players-template').html()
        const template = Handlebars.compile(source);
        const newHTML = template({ players: data })
        $('#container').append(newHTML)
    }
}

const renderer = new Renderer