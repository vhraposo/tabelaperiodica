import { elementosQuimicos } from "./elements.js"

// recupera todas as células da tabela
const cells = document.querySelectorAll("td")

// adiciona um evento de clique a cada célula
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    // recupera o id da célula clicada
    const elementId = cell.id

    // busca as informações do elemento com o id selecionado
    const element = elementosQuimicos[elementId]

    // atualiza o conteúdo do modal com as informações do elemento
    const modal = document.getElementById("modal")
    const elementName = document.getElementById("element-name")
    elementName.textContent = element.name

    const elementSymbol = document.getElementById("element-symbol")
    elementSymbol.textContent = element.symbol

    const atomicNumber = document.getElementById("atomic-number")
    atomicNumber.textContent = element.atomicNumber

    const atomicMass = document.getElementById("atomic-mass")
    atomicMass.textContent = element.atomicMass

    const groupBlock = document.getElementById("groupBlock")
    groupBlock.textContent = element.groupBlock

    const yearDiscovered = document.getElementById("yearDiscovered")
    yearDiscovered.textContent = element.yearDiscovered

    // exibe o modal e adiciona a classe de blur na tabela
    modal.style.display = "grid"
    const table = document.querySelector(".table")
  
    table.classList.add("blur")
  })
})

// adiciona um evento de clique ao botão de fechar o modal
const closeButton = document.querySelector(".close")
closeButton.addEventListener("click", () => {
  const modal = document.getElementById("modal")
  modal.style.display = "none"

  const table = document.querySelector(".table")
  table.classList.remove("blur")
})
