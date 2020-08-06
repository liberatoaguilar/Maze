let b3s1234Button = document.getElementById("b3s1234");
let b3s12345Button = document.getElementById("b3s12345");
let recursiveBackButton = document.getElementById("recursiveBacktracker");
let copyright = document.getElementById("copyright");
copyright.style.top = document.body.clientHeight-copyright.clientHeight;
let menu = document.getElementById("menu");
for (let child of Array.from(menu.children)) {
  child.style.width = document.body.clientWidth/Array.from(menu.children).length;
}

let current = 1;
let finished = true;

function b3s1234() {
  current = 1;
  // const SIZEY = 44;
  // const SIZEX = 88;
  // const SIZEY = 12;
  // const SIZEX = 21;
  const SIZEY = 24;
  const SIZEX = 42;
  // const SIZEY = 30;
  // const SIZEX = 30;

  const FILL = 20;

  let grids = document.querySelector("#grid");
  for (let child of Array.from(grids.children)){
    grids.removeChild(child);
  }
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
      finished = true;
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
    finished = false;
    updateState(grids);
  });
  updateState(grids);
}

function b3s12345() {
  current = 2;
  // const SIZEY = 44;
  // const SIZEX = 88;
  // const SIZEY = 12;
  // const SIZEX = 21;
  const SIZEY = 24;
  const SIZEX = 42;
  // const SIZEY = 30;
  // const SIZEX = 30;

  const FILL = 20;

  let grids = document.querySelector("#grid");
  for (let child of Array.from(grids.children)){
    grids.removeChild(child);
  }
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
      finished = true;
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
           || (neighborCounter(grid,x,i) == 4 && checkIn(grid,x,i).checked) || (neighborCounter(grid,x,i) == 5 && checkIn(grid,x,i).checked)) {
            newBox.checked = true;
          } else {
            if (neighborCounter(grid,x,i) == 3) newBox.checked = true;
          }
        } else {
          if (neighborCounter(grid,x,i) > 5 || neighborCounter(grid,x,i) < 1) newBox.checked = false;
          else newBox.checked = true;
        }
        newDiv.appendChild(newBox);
      }
      newDivs.push(newDiv);
    }

    replaceGrid(grid,newDivs);
  }

  nextGen.addEventListener("click",() => {
    finished = false;
    updateState(grids);
  });
  updateState(grids);
}

function recursiveBacktracker() {
  const SIZEY = 10;
  const SIZEX = 10;

  current = 3;

  let grids = document.querySelector("#grid");
  for (let child of Array.from(grids.children)){
    grids.removeChild(child);
  }
  let nextGen = document.querySelector("button");

  function createChecks() {
    for (let i = 0; i < SIZEY; i++){
      let newRow = document.createElement("div");
          for (let x = 0; x < SIZEX; x++){
            let newCheck = document.createElement("input");
            newCheck.type = "checkbox";
            newCheck.checked = true;
            newCheck.setAttribute("xCoord",x.toString());
            newCheck.setAttribute("yCoord",i.toString());
            newCheck.setAttribute("visited","0");
            newRow.appendChild(newCheck);
          }
      grids.appendChild(newRow);
    }
    return;
  }

  function testValid(x,y,direction) {
    let getCheck;
    if (direction == 1) getCheck = document.querySelectorAll('input[xCoord="'+(x-1).toString()+'"][yCoord="'+y.toString()+'"]');
    else if (direction == 2) getCheck = document.querySelectorAll('input[xCoord="'+x.toString()+'"][yCoord="'+(y+1).toString()+'"]');
    else if (direction == 3) getCheck = document.querySelectorAll('input[xCoord="'+(x+1).toString()+'"][yCoord="'+y.toString()+'"]');
    else if (direction == 4) getCheck = document.querySelectorAll('input[xCoord="'+x.toString()+'"][yCoord="'+(y-1).toString()+'"]');
    if (Array.from(getCheck).length == 0) return false;

    let nextCheck = getCheck[0];
    if (nextCheck.getAttribute("visited") == "1") return false;

    if (nextCheck.checked == false) return false;

    if (nextCheck.checked) return true;
  }

  function carvePath(x,y) {
    let currentCheck = document.querySelector('input[xCoord="'+x.toString()+'"][yCoord="'+y.toString()+'"]');
    if (currentCheck.checked) currentCheck.checked = false;
    currentCheck.setAttribute("visited","1");
    let xCoord = Number(currentCheck.getAttribute("xCoord"));
    let yCoord = Number(currentCheck.getAttribute("yCoord"));
    let direction = Math.floor(Math.random() * 4) + 1;
    console.log(direction);
    // doesnt work 
    if (direction == 1 && testValid(xCoord,yCoord,direction)) {
      carvePath(xCoord-1,yCoord);
    } else carvePath(xCoord,yCoord);
    if (direction == 2 && testValid(xCoord,yCoord,direction)) {
      carvePath(xCoord,yCoord+1);
    } else carvePath(xCoord,yCoord);
    if (direction == 3 && testValid(xCoord,yCoord,direction)) {
      carvePath(xCoord+1,yCoord);
    } else carvePath(xCoord,yCoord);
    if (direction == 4 && testValid(xCoord,yCoord,direction)) {
      carvePath(xCoord,yCoord-1);
    } else {
      finsihed = true;
    }
  }

  nextGen.addEventListener("click",() => {
    finished = false;
    carvePath(0,0);
  });
  createChecks();
}

b3s1234();

b3s1234Button.addEventListener('click',() => {
  if (current != 1 && finished) {
    b3s1234Button.setAttribute("selected","1");
    b3s12345Button.setAttribute("selected","0");
    recursiveBackButton.setAttribute("selected","0");
    b3s1234();
  }
});

b3s12345Button.addEventListener('click',() => {
  if (current != 2 && finished) {
    b3s12345Button.setAttribute("selected","1");
    b3s1234Button.setAttribute("selected","0");
    recursiveBackButton.setAttribute("selected","0");
    b3s12345();
  }
});

recursiveBackButton.addEventListener('click', () => {
  if (current != 3 && finished) {
    b3s12345Button.setAttribute("selected","0");
    b3s1234Button.setAttribute("selected","0");
    recursiveBackButton.setAttribute("selected","1");
    recursiveBacktracker();
  }
});
