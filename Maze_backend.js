// const SIZEY = 44;
// const SIZEX = 88;
const SIZEY = 12;
const SIZEX = 21;
// const SIZEY = 30;
// const SIZEX = 30;

const FILL = 10;

let grids = document.querySelector("#grid");
let nextGen = document.querySelector("button");
let oldnewdivs = [];
let doubleold = [];
let tripleold = [];

function checkIn(grid,x,y){
  let divs = Array.from(grid.children);
  return Array.from(divs[y].children)[x];
}

function neighborCounter(grid,i,x){
  let neighborAliveCount = 0;
  try {
    if (checkIn(grid,i+1,x-1).checked) neighborAliveCount++;
  } catch (e) {}
  try {
    if (checkIn(grid,i+1,x).checked) neighborAliveCount++;
  } catch (e) {}
  try {
    if (checkIn(grid,i+1,x+1).checked) neighborAliveCount++;
  } catch (e) {}
  try {
    if (checkIn(grid,i,x-1).checked) neighborAliveCount++;
  } catch (e) {}
  try {
    if (checkIn(grid,i,x+1).checked) neighborAliveCount++;
  } catch (e) {}
  try {
    if (checkIn(grid,i-1,x-1).checked) neighborAliveCount++;
  } catch (e) {}
  try {
    if (checkIn(grid,i-1,x).checked) neighborAliveCount++;
  } catch (e) {}
  try {
    if (checkIn(grid,i-1,x+1).checked) neighborAliveCount++;
  } catch (e) {}
  return neighborAliveCount;
}

function replaceGrid(grid,newDivs){
  let counter = 0;
  let currentDivsList = [];
  for (let child of Array.from(grid.children)){
    for (let check of Array.from(newDivs[counter].children)) {
      currentDivsList.push(check.checked);
      check.style.backgroundColor = "green";
    }
    grid.replaceChild(newDivs[counter],child);
    counter++;
  }
  if (JSON.stringify(currentDivsList) != JSON.stringify(oldnewdivs) && JSON.stringify(currentDivsList) != JSON.stringify(doubleold) && JSON.stringify(currentDivsList) != JSON.stringify(tripleold)) {
    tripleold = doubleold;
    doubleold = oldnewdivs;
    oldnewdivs = currentDivsList;
    setTimeout(updateState.bind(null,grids),5);
  } else {
    console.log("done");
  }
}

function updateState(grid){
  if (Array.from(grid.children).length == 0){
  for (let i = 0; i < SIZEY; i++){
      let newRow = document.createElement("div");
        for (let x = 0; x < SIZEX; x++){
            let newCheck = document.createElement("input");
            newCheck.type = "checkbox";
            newRow.appendChild(newCheck);
          }
       grid.appendChild(newRow);
    }
    for (let y = 0; y < 25*FILL/4; y++){
      let randomX = Math.floor(Math.random()*SIZEX);///4)+Math.floor(SIZEX/3);
      let randomY = Math.floor(Math.random()*SIZEY);///4)+Math.floor(SIZEY/3);
      checkIn(grid,randomX,randomY).checked = true;
    }
    return;
  }

  let newDivs = [];

  for (let i = 0; i < SIZEY; i++){
    let newDiv = document.createElement("div");
    for (let x = 0; x < SIZEX; x++){
      let newBox = document.createElement("input");
      newBox.type = "checkbox";
      if (!checkIn(grid,x,i).checked){
        if ((neighborCounter(grid,x,i) == 1 && checkIn(grid,x,i).checked) || (neighborCounter(grid,x,i) == 2 && checkIn(grid,x,i).checked) || (neighborCounter(grid,x,i) == 3 && checkIn(grid,x,i).checked)
         || (neighborCounter(grid,x,i) == 4 && checkIn(grid,x,i).checked)) {
          newBox.checked = true;
        } else {
          if (neighborCounter(grid,x,i) == 3) newBox.checked = true;
        }
      } else {
        if (neighborCounter(grid,x,i) > 4 || neighborCounter(grid,x,i) < 1) newBox.checked = false;
        else newBox.checked = true;
      }
      newDiv.appendChild(newBox);
    }
    newDivs.push(newDiv);
  }

  replaceGrid(grid,newDivs);
}

nextGen.addEventListener("click",() => {
  updateState(grids);
});
updateState(grids);
