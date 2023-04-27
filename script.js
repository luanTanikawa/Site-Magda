const body = document.body
const menu = document.querySelector('.menu')
const optMenu = [...document.querySelectorAll(".opt-menu")]
const btnMenu = document.querySelector('#botaoMenu')
const boxesDuvida = [...document.querySelectorAll('.duvidas-box')]

boxesDuvida.map((duvida, indice) => {
    duvida.addEventListener('click',() => {
        let resposta = document.querySelectorAll('.duvidas-box-resposta')[indice]
        resposta.classList.toggle('aberto')
    })
})

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('aberto')
})

optMenu.map((opções) => {
    opções.addEventListener('click', () => {
        menu.classList.remove('aberto')
    })
})

body.addEventListener('click', (env) => {
    if(menu.classList.contains('aberto') && env.target != menu && env.target != btnMenu) {
        menu.classList.remove('aberto')
    }
})