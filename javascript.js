document.addEventListener("DOMContentLoaded", () => {
  localStorage.pointsX = localStorage.pointsX || "0"
  localStorage.pointsO = localStorage.pointsO || "0"
  play()
  reset()
  clearScore()
  document.querySelector('.x-score').innerText = `X's: ${localStorage.pointsX}`
  document.querySelector('.o-score').innerText = `O's: ${localStorage.pointsO}`
})

const clearScore = () => {
  document.querySelector(".clear-score").addEventListener("click", () => {
    localStorage.pointsX = "0"
    localStorage.pointsO = "0"
    document.querySelector('.x-score').innerText = `X's: ${localStorage.pointsX}`
    document.querySelector('.o-score').innerText = `O's: ${localStorage.pointsO}`
  })
}

const topRowWinnerX = (holder, boxes) => {
  for(i=0; i<3; i++){
    if(holder[i] !== "X") return false
  }
  boxes[0].childNodes[0].style.color = "red"
  boxes[1].childNodes[0].style.color = "red"
  boxes[2].childNodes[0].style.color = "red"
  localStorage.pointsX = String(parseInt(localStorage.pointsX) + 1)
  document.querySelector('.x-score').innerText = `X's: ${localStorage.pointsX}`
  return true
}
const topRowWinnerO = (holder, boxes) => {
  for(i=0; i<3; i++){
    if(holder[i] !== "O") return false
  }
  boxes[0].childNodes[0].style.color = "red"
  boxes[1].childNodes[0].style.color = "red"
  boxes[2].childNodes[0].style.color = "red"
  localStorage.pointsO = String(parseInt(localStorage.pointsO) + 1)
  document.querySelector('.o-score').innerText = `O's: ${localStorage.pointsO}`
  return true
}

const MiddleRowWinnerX = (holder, boxes) => {
  for(i=3; i<6; i++){
    if(holder[i] !== "X") return false
  }
  boxes[3].childNodes[0].style.color = "red"
  boxes[4].childNodes[0].style.color = "red"
  boxes[5].childNodes[0].style.color = "red"
  localStorage.pointsX = String(parseInt(localStorage.pointsX) + 1)
  document.querySelector('.x-score').innerText = `X's: ${localStorage.pointsX}`
  return true
}
const MiddleRowWinnerO = (holder, boxes) => {
  for(i=3; i<6; i++){
    if(holder[i] !== "O") return false
  }
  boxes[3].childNodes[0].style.color = "red"
  boxes[4].childNodes[0].style.color = "red"
  boxes[5].childNodes[0].style.color = "red"
  localStorage.pointsO = String(parseInt(localStorage.pointsO) + 1)
  document.querySelector('.o-score').innerText = `O's: ${localStorage.pointsO}`
  return true
}

const BottomRowWinnerX = (holder, boxes) => {
  for(i=6; i<9; i++){
    if(holder[i] !== "X") return false
  }
  boxes[6].childNodes[0].style.color = "red"
  boxes[7].childNodes[0].style.color = "red"
  boxes[8].childNodes[0].style.color = "red"
  localStorage.pointsX = String(parseInt(localStorage.pointsX) + 1)
  document.querySelector('.x-score').innerText = `X's: ${localStorage.pointsX}`
  return true
}
const BottomRowWinnerO = (holder, boxes) => {
  for(i=6; i<9; i++){
    if(holder[i] !== "O") return false
  }
  boxes[6].childNodes[0].style.color = "red"
  boxes[7].childNodes[0].style.color = "red"
  boxes[8].childNodes[0].style.color = "red"
  localStorage.pointsO = String(parseInt(localStorage.pointsO) + 1)
  document.querySelector('.o-score').innerText = `O's: ${localStorage.pointsO}`
  return true
}

const firstColumnWinnerX = (holder, boxes) => {
  for(i=0; i<7; i+=3){
    if(holder[i] !== "X") return false
  }
  boxes[0].childNodes[0].style.color = "red"
  boxes[3].childNodes[0].style.color = "red"
  boxes[6].childNodes[0].style.color = "red"
  localStorage.pointsX = String(parseInt(localStorage.pointsX) + 1)
  document.querySelector('.x-score').innerText = `X's: ${localStorage.pointsX}`
  return true
}
const firstColumnWinnerO = (holder, boxes) => {
  for(i=0; i<7; i+=3){
    if(holder[i] !== "O") return false
  }
  boxes[0].childNodes[0].style.color = "red"
  boxes[3].childNodes[0].style.color = "red"
  boxes[6].childNodes[0].style.color = "red"
  localStorage.pointsO = String(parseInt(localStorage.pointsO) + 1)
  document.querySelector('.o-score').innerText = `O's: ${localStorage.pointsO}`
  return true
}

const secondColumnWinnerX = (holder, boxes) => {
  for(i=1; i<8; i+=3){
    if(holder[i] !== "X") return false
  }
  boxes[1].childNodes[0].style.color = "red"
  boxes[4].childNodes[0].style.color = "red"
  boxes[7].childNodes[0].style.color = "red"
  localStorage.pointsX = String(parseInt(localStorage.pointsX) + 1)
  document.querySelector('.x-score').innerText = `X's: ${localStorage.pointsX}`
  return true
}
const secondColumnWinnerO = (holder, boxes) => {
  for(i=1; i<8; i+=3){
    if(holder[i] !== "O") return false
  }
  boxes[1].childNodes[0].style.color = "red"
  boxes[4].childNodes[0].style.color = "red"
  boxes[7].childNodes[0].style.color = "red"
  localStorage.pointsO = String(parseInt(localStorage.pointsO) + 1)
  document.querySelector('.o-score').innerText = `O's: ${localStorage.pointsO}`
  return true
}

const thirdColumnWinnerX = (holder, boxes) => {
  for(i=2; i<9; i+=3){
    if(holder[i] !== "X") return false
  }
  boxes[2].childNodes[0].style.color = "red"
  boxes[5].childNodes[0].style.color = "red"
  boxes[8].childNodes[0].style.color = "red"
  localStorage.pointsX = String(parseInt(localStorage.pointsX) + 1)
  document.querySelector('.x-score').innerText = `X's: ${localStorage.pointsX}`
  return true
}
const thirdColumnWinnerO = (holder, boxes) => {
  for(i=2; i<9; i+=3){
    if(holder[i] !== "O") return false
  }
  boxes[2].childNodes[0].style.color = "red"
  boxes[5].childNodes[0].style.color = "red"
  boxes[8].childNodes[0].style.color = "red"
  localStorage.pointsO = String(parseInt(localStorage.pointsO) + 1)
  document.querySelector('.o-score').innerText = `O's: ${localStorage.pointsO}`
  return true
}

const firstDiagonalX = (holder, boxes) => {
  for(i=0; i<9; i++){
    if(holder[0] !== "X") return false
    if(holder[4] !== "X") return false
    if(holder[8] !== "X") return false
  }
  boxes[0].childNodes[0].style.color = "red"
  boxes[4].childNodes[0].style.color = "red"
  boxes[8].childNodes[0].style.color = "red"
  localStorage.pointsX = String(parseInt(localStorage.pointsX) + 1)
  document.querySelector('.x-score').innerText = `X's: ${localStorage.pointsX}`
  return true
}
const firstDiagonalO = (holder, boxes) => {
  for(i=0; i<9; i++){
    if(holder[0] !== "O") return false
    if(holder[4] !== "O") return false
    if(holder[8] !== "O") return false
  }
  boxes[0].childNodes[0].style.color = "red"
  boxes[4].childNodes[0].style.color = "red"
  boxes[8].childNodes[0].style.color = "red"
  localStorage.pointsO = String(parseInt(localStorage.pointsO) + 1)
  document.querySelector('.o-score').innerText = `O's: ${localStorage.pointsO}`
  return true
}

const secondDiagonalX = (holder, boxes) => {
  for(i=0; i<9; i++){
    if(holder[2] !== "X") return false
    if(holder[4] !== "X") return false
    if(holder[6] !== "X") return false
  }
  boxes[2].childNodes[0].style.color = "red"
  boxes[4].childNodes[0].style.color = "red"
  boxes[6].childNodes[0].style.color = "red"
  localStorage.pointsX = String(parseInt(localStorage.pointsX) + 1)
  document.querySelector('.x-score').innerText = `X's: ${localStorage.pointsX}`
  return true
}
const secondDiagonalO = (holder, boxes) => {
  for(i=0; i<9; i++){
    if(holder[2] !== "O") return false
    if(holder[4] !== "O") return false
    if(holder[6] !== "O") return false
  }
  boxes[2].childNodes[0].style.color = "red"
  boxes[4].childNodes[0].style.color = "red"
  boxes[6].childNodes[0].style.color = "red"
  localStorage.pointsO = String(parseInt(localStorage.pointsO) + 1)
  document.querySelector('.o-score').innerText = `O's: ${localStorage.pointsO}`
  return true
}

const draw = (holder, boxes) => {
  for(i=0; i<9; i++){
    if(holder[i] === "") return false
  }
  for(i=0; i<9; i++){
    boxes[i].childNodes[0].style.color = "red"
  }
  return true
}

const winner = () => {
  let holder = []
  let boxes = document.querySelectorAll('.box')
  boxes.forEach(box => {
    holder.push(box.childNodes[0].innerText)
  })
  if(topRowWinnerX(holder, boxes)) document.querySelector('.body').style.pointerEvents = "none"
  if(topRowWinnerO(holder, boxes)) document.querySelector('.body').style.pointerEvents = "none"
  if(MiddleRowWinnerX(holder, boxes)) document.querySelector('.body').style.pointerEvents = "none"
  if(MiddleRowWinnerO(holder, boxes)) document.querySelector('.body').style.pointerEvents = "none"
  if(BottomRowWinnerX(holder, boxes)) document.querySelector('.body').style.pointerEvents = "none"
  if(BottomRowWinnerO(holder, boxes)) document.querySelector('.body').style.pointerEvents = "none"
  if(firstColumnWinnerX(holder, boxes)) document.querySelector('.body').style.pointerEvents = "none"
  if(firstColumnWinnerO(holder, boxes)) document.querySelector('.body').style.pointerEvents = "none"
  if(secondColumnWinnerX(holder, boxes)) document.querySelector('.body').style.pointerEvents = "none"
  if(secondColumnWinnerO(holder, boxes)) document.querySelector('.body').style.pointerEvents = "none"
  if(thirdColumnWinnerX(holder, boxes)) document.querySelector('.body').style.pointerEvents = "none"
  if(thirdColumnWinnerO(holder, boxes)) document.querySelector('.body').style.pointerEvents = "none"
  if(firstDiagonalX(holder, boxes)) document.querySelector('.body').style.pointerEvents = "none"
  if(firstDiagonalO(holder, boxes)) document.querySelector('.body').style.pointerEvents = "none"
  if(secondDiagonalX(holder, boxes)) document.querySelector('.body').style.pointerEvents = "none"
  if(secondDiagonalO(holder, boxes)) document.querySelector('.body').style.pointerEvents = "none"
  if(draw(holder, boxes)) document.querySelector('.body').style.pointerEvents = "none"
}

const play = () => {
  let counter = 1
  let boxes = document.querySelectorAll('.box')
  boxes.forEach(box => {
    box.addEventListener('click', (e) => {
      if(counter % 2 === 0) {
        e.target.childNodes[0].innerText = "O"
        if(![...e.target.childNodes[0].classList].includes("green")) {
          e.target.childNodes[0].classList.add("green")
          counter += 1
        }
      } else {
        e.target.childNodes[0].innerText = "X"
        if(![...e.target.childNodes[0].classList].includes("blue")) {
          e.target.childNodes[0].classList.add("blue")
          counter += 1
        }
      }
      setTimeout(winner(), 3000)
    }, {once: true})
  })
}

const reset = () => {
  document.querySelector('button').addEventListener('click', () => {
    location.reload()
  })
}
