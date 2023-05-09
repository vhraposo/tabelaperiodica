import { elementosQuimicos } from "./elements.js"

// selecionando todos os dados da tabela 
const cells = document.querySelectorAll("td")

// adicionando clique a cada celulad em especifico 
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    // atribuindo o id a cada celula
    const elementId = cell.id

    // indo atras do elemento selecionado de acordo com o id do elemento
    const element = elementosQuimicos[elementId]

    // coloca as info no modal de acordo com o que foi selecionado
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

    // altera o modal para display grid 
    modal.style.display = "grid"
    const table = document.querySelector(".table")
  
    table.classList.add("blur")
  })
})

// fecha o modal 
const closeButton = document.querySelector(".close")
closeButton.addEventListener("click", () => {
  const modal = document.getElementById("modal")
  modal.style.display = "none"

  const table = document.querySelector(".table")
  table.classList.remove("blur")
})
