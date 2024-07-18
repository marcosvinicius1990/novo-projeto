//VARIÁVEIS - é uma forma de identificar quem é quem
//da um nome a um trecho de código
// é como criasse uma pasta para guardar o que quiser
// LET é uma variável

//FUNÇÕES - trecho de código que só executa qdo chamado
//FUNCTIOn é uma função
//DOCUMENT - ir no HTML
//QUERYSELECTOR - busca o que eu quiser que ele busque

let formulario = document.querySelector(".formulario")

function aparecerFormulario () {
    formulario.style.left = "50%"
}


function desaparecerFormulario () {
    formulario.style.left = "-50%"
}