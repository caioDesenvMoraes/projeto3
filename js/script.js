// MENÚ HAMBURGUER
document.querySelector(".hamburguer").addEventListener("click", () => 
    document.querySelector(".container").classList.toggle("show-menu")
)

// CALCULO ORÇAMENTO

// criando os eventos
document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", () => {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} Semana(s)`
    atualizarPreco()
})

// criando a função para atualizar o preco
function atualizarPreco() {
    const qtde = document.querySelector("#qtde").value // qtde de páginas
    const temJS = document.querySelector("#js").checked // se precisa de JS
    const layoutSim = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value

    let preco = (qtde * 100) // valor total das página
    if (temJS) preco *= 1.1 // valor se precisar de JS
    if (layoutSim) preco += 500 // valor se precisa do layout
    let taxaUrgencia = 1 - prazo * 0.1 // valor da taxa de urgencia
    preco *= 1 + taxaUrgencia // preço final

    document.querySelector("#preco").innerHTML = `R$ ${Math.round(preco.toFixed(2))}`
}