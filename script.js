let board = document.querySelector(".board")

let squaresPerSide = prompt() 


board.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
board.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;

function randomHsl() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}

function creation() {
    for (i = 0; i < (squaresPerSide*squaresPerSide); i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "powderblue"
        square.classList.add("square")
        board.insertAdjacentElement("beforeend", square)
    
        square.addEventListener("mouseover", function(event) {
            event.target.style.backgroundColor = `${randomHsl()}`
        })
        
        let button = document.querySelector("#resetPad")
        button.addEventListener("click", function(event) {
        square.style.backgroundColor = "powderblue";
        
        })
        
    }
    
}

creation()






