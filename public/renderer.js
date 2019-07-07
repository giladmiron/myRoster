class Renderer {
    constructor(){}


    render(data){
        $('.container').empty()
        const source = $('#recipes-template').html()
        const template = Handlebars.compile(source);
        const newHTML = template({ recipes: data })
        $('.container').append(newHTML)
    }
}

const renderer = new Renderer