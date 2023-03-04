
function getNumberList() {
    const numberList= document.getElementById("numberList").children;
    const divList = Array.from(numberList)
    return divList
}

function renderNewList(divList) {
    const numberList = document.getElementById("numberList")
    divList.forEach((div) => {
        numberList.appendChild(div)
        }
    )
}
function shuffle() {
    const divList = getNumberList()
     const shuffledList = divList.sort(() => Math.random() - 0.5)
     renderNewList(shuffledList)
   }
 
 function sort() {
     const divList = getNumberList()
     const sortedList = divList.sort((a,b) => a.textContent-b.textContent)
     renderNewList(sortedList)
   }