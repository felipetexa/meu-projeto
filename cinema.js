let cinema = 'Locadora DH';

let catalogo = require('./database/catalogo.json');
// let catalogo = [{
//     codigo: 1, 
//     titulo: 'O Poderoso Chefão', 
//     duracao: 2.55, 
//     atores: ['Marlon Brando', 'Al Pacino', 'Robert de Niro'], 
//     anoDeLancamento: 1972, 
//     emCartaz: false
// },
// {
//     codigo: 2, 
//     titulo: 'A Origem', 
//     duracao: 2.28, 
//     atores: ['Leonardo DiCaprio', 'Tom Hardy', 'Cillian Murphy'], 
//     anoDeLancamento: 2010, 
//     emCartaz: true
// }];

function adicionarFilme (codigo, titulo, duracao, atores, anoDeLancamento, emCartaz){
        catalogo.push({
            codigo, 
            titulo, 
            duracao, 
            atores, 
            anoDeLancamento, 
            emCartaz})
    };

adicionarFilme(4, 'Toy Story', 1.21, ['Xerife Woody', 'Buzz Lightyear', 'Sr. Cabeça de Batata'], 1995, true);


function buscarFilme(identificador){
    for (let i = 0; i < catalogo.length; i++) {
        if (catalogo[i].codigo === identificador){
            return 'Encontrei o filme: ' + catalogo[i].titulo
        break;
        }
    }
}

//console.log(buscarFilme(2));


//minha proposta
// function alterarStatusEmCartaz(identificador){
//     for (let i = 0; i < catalogo.length; i++) {
//         if (catalogo[i].codigo === identificador && catalogo[i].emCartaz === true){
//             catalogo[i].emCartaz = false;
//         }
//         else if (catalogo[i].codigo === identificador && catalogo[i].emCartaz === false){
//             catalogo[i].emCartaz = true;
//         }        
//     }
// }

//proposta do prof Thiago
// function alterarStatusEmCartaz(identificador){
//     const filmeIndex = catalogo.findIndex(filme => filme.codigo === identificador)
//     if (filmeIndex < 0) return 'Filme não encontrado';
    
//     catalogo[filmeIndex].emCartaz = !catalogo[filmeIndex].emCartaz;
//     return catalogo[filmeIndex];
// }

function alterarStatusEmCartaz(identificador){
    for (let i = 0; i < catalogo.length; i++){
        catalogo[i].emCartaz = identificador === catalogo[i].codigo ? !catalogo[i].emCartaz : catalogo[i].emCartaz;
    }
}




function listarTodosOsFilmes(){
    // for (let i = 0; i < catalogo.length; i++){
    //     return catalogo;
    // }
    return catalogo.map(filme => filme.titulo)
}

//console.log(listarTodosOsFilmes());

function listarFilmesEmCartaz(){
    // for (let i = 0; i < catalogo.length; i++){
    //     if(catalogo[i].emCartaz === true){
    //         console.log(catalogo[i]);
    //     }
    // }
    return catalogo.filter(filme => filme.emCartaz === true).map(filme => filme.titulo);
}

//console.log(listarFilmesEmCartaz());

function listarFilmesDeLongaDuracao(){
    return catalogo.filter(filme => filme.duracao > 2).map(filme => filme.titulo)
}

//console.log(listarFilmesDeLongaDuracao());

