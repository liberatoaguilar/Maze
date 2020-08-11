let b3s1234Button = document.getElementById("b3s1234");
let b3s12345Button = document.getElementById("b3s12345");
let recursiveBackButton = document.getElementById("recursiveBacktracker");
let kruskalsButton = document.getElementById("kruskals");
let primsButton = document.getElementById("prims");

let wrap = document.getElementById("wrap");
let copyright = document.getElementById("copyright");
copyright.style.top = document.body.clientHeight-copyright.clientHeight;
let menu = document.getElementById("menu");
for (let child of Array.from(menu.children)) {
  child.style.width = document.body.clientWidth/Array.from(menu.children).length;
}

let current = 3;
let finished = true;

function b3s1234() {
  current = 1;

  const SIZEY = 23;
  const SIZEX = 41;

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

  const SIZEY = 23;
  const SIZEX = 41;

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
  const SIZEY = 23;
  const SIZEX = 41;

  current = 3;

  let history = [];

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
    if (direction == 1) getCheck = document.querySelectorAll('input[xCoord="'+x.toString()+'"][yCoord="'+(y-1).toString()+'"]');
    else if (direction == 2) getCheck = document.querySelectorAll('input[xCoord="'+(x+1).toString()+'"][yCoord="'+y.toString()+'"]');
    else if (direction == 3) getCheck = document.querySelectorAll('input[xCoord="'+x.toString()+'"][yCoord="'+(y+1).toString()+'"]');
    else if (direction == 4) getCheck = document.querySelectorAll('input[xCoord="'+(x-1).toString()+'"][yCoord="'+y.toString()+'"]');
    if (getCheck == undefined) return false;
    if (Array.from(getCheck).length == 0) return false;


    let nextCheck = getCheck[0];
    if (nextCheck.disabled) return false;
    if (nextCheck.getAttribute("visited") == "1") return false;

    if (nextCheck.checked == false) return false;

    let getWall;
    if (direction == 1) getWall = document.querySelectorAll('input[xCoord="'+x.toString()+'"][yCoord="'+(y-2).toString()+'"]');
    else if (direction == 2) getWall = document.querySelectorAll('input[xCoord="'+(x+2).toString()+'"][yCoord="'+y.toString()+'"]');
    else if (direction == 3) getWall = document.querySelectorAll('input[xCoord="'+x.toString()+'"][yCoord="'+(y+2).toString()+'"]');
    else if (direction == 4) getWall = document.querySelectorAll('input[xCoord="'+(x-2).toString()+'"][yCoord="'+y.toString()+'"]');
    if (Array.from(getWall).length == 0) return false;
    else {
      let wall = getWall[0];
      if (wall.checked == false) {
        return false;
      }
      else {
        if (direction == 1) {
          let wall1 = document.querySelector('input[xCoord="'+(x-1).toString()+'"][yCoord="'+(y-1).toString()+'"]').checked;
          let wall2 = document.querySelector('input[xCoord="'+(x+1).toString()+'"][yCoord="'+(y-1).toString()+'"]').checked;
          if (!wall1 || !wall2) return false;
        }
        else if (direction == 2) {
          let wall1 = document.querySelector('input[xCoord="'+(x+1).toString()+'"][yCoord="'+(y-1).toString()+'"]').checked;
          let wall2 = document.querySelector('input[xCoord="'+(x+1).toString()+'"][yCoord="'+(y+1).toString()+'"]').checked;
          if (!wall1 || !wall2) return false;
        }
        else if (direction == 3) {
          let wall1 = document.querySelector('input[xCoord="'+(x-1).toString()+'"][yCoord="'+(y+1).toString()+'"]').checked;
          let wall2 = document.querySelector('input[xCoord="'+(x+1).toString()+'"][yCoord="'+(y+1).toString()+'"]').checked;
          if (!wall1 || !wall2) return false;
        }
        else if (direction == 4) {
          let wall1 = document.querySelector('input[xCoord="'+(x-1).toString()+'"][yCoord="'+(y-1).toString()+'"]').checked;
          let wall2 = document.querySelector('input[xCoord="'+(x-1).toString()+'"][yCoord="'+(y+1).toString()+'"]').checked;
          if (!wall1 || !wall2) return false;
        }
      }
    }

    if (nextCheck.checked) return true;
  }

  function carvePath(x,y) {
    setTimeout(() => {
      let currentCheck = document.querySelector('input[xCoord="'+x.toString()+'"][yCoord="'+y.toString()+'"]');
      if (currentCheck.checked) currentCheck.checked = false;
      currentCheck.setAttribute("visited","1");
      history.unshift(currentCheck);
      let xCoord = Number(currentCheck.getAttribute("xCoord"));
      let yCoord = Number(currentCheck.getAttribute("yCoord"));
      let direction = Math.floor(Math.random() * 4) + 1;
      if (testValid(xCoord,yCoord,direction)) {
        if (direction == 1) {
          carvePath(xCoord,yCoord-1);
        } else if (direction == 2) {
          carvePath(xCoord+1,yCoord);
        } else if (direction == 3) {
          carvePath(xCoord,yCoord)+1;
        } else if (direction == 4) {
          carvePath(xCoord-1,yCoord);
        }
      } else {
        let array = [1,2,3,4];
        for (let i = array.length-1; i > 0; i--) {
          const j = Math.floor(Math.random() * i);
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        if (testValid(xCoord,yCoord,array[0])) {
          if (array[0] == 1) carvePath(xCoord,yCoord-1);
          else if (array[0] == 2) carvePath(xCoord+1,yCoord);
          else if (array[0] == 3) carvePath(xCoord,yCoord+1);
          else if (array[0] == 4) carvePath(xCoord-1,yCoord);
        }
        else if (testValid(xCoord,yCoord,array[1])) {
          if (array[1] == 1) carvePath(xCoord,yCoord-1);
          else if (array[1] == 2) carvePath(xCoord+1,yCoord);
          else if (array[1] == 3) carvePath(xCoord,yCoord+1);
          else if (array[1] == 4) carvePath(xCoord-1,yCoord);
        }
        else if (testValid(xCoord,yCoord,array[2])) {
          if (array[2] == 1) carvePath(xCoord,yCoord-1);
          else if (array[2] == 2) carvePath(xCoord+1,yCoord);
          else if (array[2] == 3) carvePath(xCoord,yCoord+1);
          else if (array[2] == 4) carvePath(xCoord-1,yCoord);
        }
        else if (testValid(xCoord,yCoord,array[3])) {
          if (array[3] == 1) carvePath(xCoord,yCoord-1);
          else if (array[3] == 2) carvePath(xCoord+1,yCoord);
          else if (array[3] == 3) carvePath(xCoord,yCoord+1);
          else if (array[3] == 4) carvePath(xCoord-1,yCoord);
        }
        else {
          currentCheck.checked = true;
          for (let i = 0; i < history.length; i++) {
            let hxCoord = Number(history[i].getAttribute("xCoord"));
            let hyCoord = Number(history[i].getAttribute("yCoord"));
            if (!history[i].checked) {
              history[i].checked = true;
              history[i].disabled = true;
            }
            if (hxCoord == 1 && hyCoord == 1) {
              console.log('actually done');
              finished = true;
              nextGen.removeEventListener("click",start);
              let path = document.querySelectorAll('input:disabled');
              for (let input of path) {
                input.checked = false;
                input.disabled = false;
              }
              break;
            }
            if (testValid(hxCoord,hyCoord,array[0])) {
              if (array[0] == 1) carvePath(hxCoord,hyCoord-1);
              else if (array[0] == 2) carvePath(hxCoord+1,hyCoord);
              else if (array[0] == 3) carvePath(hxCoord,hyCoord+1);
              else if (array[0] == 4) carvePath(hxCoord-1,hyCoord);
              break;
            }
            else if (testValid(hxCoord,hyCoord,array[1])) {
              if (array[1] == 1) carvePath(hxCoord,hyCoord-1);
              else if (array[1] == 2) carvePath(hxCoord+1,hyCoord);
              else if (array[1] == 3) carvePath(hxCoord,hyCoord+1);
              else if (array[1] == 4) carvePath(hxCoord-1,hyCoord);
              break;
            }
            else if (testValid(hxCoord,hyCoord,array[2])) {
              if (array[2] == 1) carvePath(hxCoord,hyCoord-1);
              else if (array[2] == 2) carvePath(hxCoord+1,hyCoord);
              else if (array[2] == 3) carvePath(hxCoord,hyCoord+1);
              else if (array[2] == 4) carvePath(hxCoord-1,hyCoord);
              break;
            }
            else if (testValid(hxCoord,hyCoord,array[3])) {
              if (array[3] == 1) carvePath(hxCoord,hyCoord-1);
              else if (array[3] == 2) carvePath(hxCoord+1,hyCoord);
              else if (array[3] == 3) carvePath(hxCoord,hyCoord+1);
              else if (array[3] == 4) carvePath(hxCoord-1,hyCoord);
              break;
            } else continue;
          }
        }
      }
    },10);
  }
  function start() {
    finished = false;
    carvePath(1,1);
  }
  nextGen.addEventListener("click",start);
  createChecks();
}

function kruskals() {
  const SIZEY = 23;
  const SIZEX = 41;

  current = 4;
  let sets = [];

  let grids = document.querySelector("#grid");
  for (let child of Array.from(grids.children)){
    grids.removeChild(child);
  }
  let oldNextGen = document.querySelector("button");
  wrap.removeChild(oldNextGen);
  let nextGen = document.createElement("button");
  nextGen.setAttribute("id","next");
  nextGen.appendChild(document.createTextNode("Go"));
  wrap.appendChild(nextGen);


  function createChecks() {
    let count = 0;
    for (let i = 0; i < SIZEY; i++){
      let newRow = document.createElement("div");
          for (let x = 0; x < SIZEX; x++){
            let newCheck = document.createElement("input");
            newCheck.type = "checkbox";
            newCheck.checked = true;
            newCheck.setAttribute("xCoord",x.toString());
            newCheck.setAttribute("yCoord",i.toString());
            if (x % 2 != 0 && (x > 0 && x < SIZEX-1) && (i > 0 && i < SIZEY-1) && i % 2 != 0) {
              newCheck.setAttribute("set",count.toString());
              sets.push(count);
              count++;
            } else if (x == 0 || x == SIZEX-1 || i == 0 || i == SIZEY-1){
              newCheck.setAttribute("set","border");
            } else newCheck.setAttribute("set","wall");
            newRow.appendChild(newCheck);
          }
      grids.appendChild(newRow);
    }
    return;
  }

  function test(x,y,dir) {
    let newCheck;
    if (dir == 1) newCheck = document.querySelector('[xCoord="'+x.toString()+'"][yCoord="'+(y-1).toString()+'"]');
    if (dir == 2) newCheck = document.querySelector('[xCoord="'+(x+1).toString()+'"][yCoord="'+y.toString()+'"]');
    if (dir == 3) newCheck = document.querySelector('[xCoord="'+x.toString()+'"][yCoord="'+(y+1).toString()+'"]');
    if (dir == 4) newCheck = document.querySelector('[xCoord="'+(x-1).toString()+'"][yCoord="'+y.toString()+'"]');

    if (newCheck == undefined) return [false];
    if (newCheck.getAttribute("set") == "border") return [false];
    if (newCheck.checked = false) return [false];

    if (dir == 1) newCheck2 = document.querySelector('[xCoord="'+x.toString()+'"][yCoord="'+(y-2).toString()+'"]');
    if (dir == 2) newCheck2 = document.querySelector('[xCoord="'+(x+2).toString()+'"][yCoord="'+y.toString()+'"]');
    if (dir == 3) newCheck2 = document.querySelector('[xCoord="'+x.toString()+'"][yCoord="'+(y+2).toString()+'"]');
    if (dir == 4) newCheck2 = document.querySelector('[xCoord="'+(x-2).toString()+'"][yCoord="'+y.toString()+'"]');

    if (Number(newCheck2.getAttribute("set")) == undefined) return [false];

    return [true,Number(newCheck2.getAttribute("set")),newCheck,newCheck2];
  }

  function selectSets() {
    setTimeout(() => {
      let dirs = [1,2,3,4];
      let dir = dirs[Math.floor(Math.random() * dirs.length)];
      let currentSet = sets[Math.floor(Math.random() * sets.length)];
      let currentCheck = document.querySelector('[set="'+currentSet.toString()+'"]');
      let xCoord = Number(currentCheck.getAttribute("xCoord"));
      let yCoord = Number(currentCheck.getAttribute("yCoord"));

      if (sets.length > 1) {
        if (test(xCoord,yCoord,dir)[0]) {
          let oldValue = Number(currentCheck.getAttribute("set"));
          let value = test(xCoord,yCoord,dir)[1];

          if (oldValue != value) {
            let newsets = [];
            for (let set of sets) {
              if (set != oldValue) newsets.push(set);
            }
            sets = newsets;
          }

          currentCheck.checked = false;
          test(xCoord,yCoord,dir)[2].checked = false;
          test(xCoord,yCoord,dir)[3].checked = false;

          currentCheck.setAttribute("set",value);
          test(xCoord,yCoord,dir)[2].setAttribute("set",value);
          test(xCoord,yCoord,dir)[3].setAttribute("set",value);

          for (let check of document.querySelectorAll('[set="'+oldValue.toString()+'"]')) {
            check.setAttribute("set",value.toString());
          }

          selectSets();

        } else {
          selectSets();
        }
      } else {
        finished = true;
        console.log('done');
      }
    },30);
  }

  function startKruskals() {
    finished = false;
    selectSets();
  }
  nextGen.addEventListener("click",startKruskals);
  createChecks();
}

function prims() {
  const SIZEY = 23;
  const SIZEX = 41;

  current = 5;
  let firstSet = 1;
  let sets = [];

  let grids = document.querySelector("#grid");
  for (let child of Array.from(grids.children)){
    grids.removeChild(child);
  }
  let oldNextGen = document.querySelector("button");
  wrap.removeChild(oldNextGen);
  let nextGen = document.createElement("button");
  nextGen.setAttribute("id","next");
  nextGen.appendChild(document.createTextNode("Go"));
  wrap.appendChild(nextGen);

  function createChecks() {
    let count = 0;
    for (let i = 0; i < SIZEY; i++){
      let newRow = document.createElement("div");
          for (let x = 0; x < SIZEX; x++){
            let newCheck = document.createElement("input");
            newCheck.type = "checkbox";
            newCheck.checked = true;
            newCheck.setAttribute("xCoord",x.toString());
            newCheck.setAttribute("yCoord",i.toString());
            if (x == 0 || x == SIZEX-1 || i == 0 || i == SIZEY-1){
              newCheck.setAttribute("set","border");
            } else newCheck.setAttribute("set","none");
            newRow.appendChild(newCheck);
          }
      grids.appendChild(newRow);
    }
    return;
  }

  function checkNorth(x,y) {
    let connectCheck;
    let check = document.querySelector('[xCoord="'+x.toString()+'"][yCoord="'+(y-2).toString()+'"]');
    if (check && check.getAttribute('set') == firstSet.toString()) {
      connectCheck = document.querySelector('[xCoord="'+x.toString()+'"][yCoord="'+(y-1).toString()+'"]');
      connectCheck.setAttribute("set",firstSet);
      connectCheck.checked = false;
      return true;
    }
    return false;
  }

  function checkEast(x,y) {
    let connectCheck;
    let check = document.querySelector('[xCoord="'+(x+2).toString()+'"][yCoord="'+y.toString()+'"]');
    if (check && check.getAttribute('set') == firstSet.toString()) {
      connectCheck = document.querySelector('[xCoord="'+(x+1).toString()+'"][yCoord="'+y.toString()+'"]');
      connectCheck.setAttribute("set",firstSet);
      connectCheck.checked = false;
      return true;
    }
    return false;
  }

  function checkSouth(x,y) {
    let connectCheck;
    let check = document.querySelector('[xCoord="'+x.toString()+'"][yCoord="'+(y+2).toString()+'"]');
    if (check && check.getAttribute('set') == firstSet.toString()) {
      connectCheck = document.querySelector('[xCoord="'+x.toString()+'"][yCoord="'+(y+1).toString()+'"]');
      connectCheck.setAttribute("set",firstSet);
      connectCheck.checked = false;
      return true;
    }
    return false;
  }

  function checkWest(x,y) {
    let connectCheck;
    let check = document.querySelector('[xCoord="'+(x-2).toString()+'"][yCoord="'+y.toString()+'"]');
    if (check && check.getAttribute('set') == firstSet.toString()) {
      connectCheck = document.querySelector('[xCoord="'+(x-1).toString()+'"][yCoord="'+y.toString()+'"]');
      connectCheck.setAttribute("set",firstSet);
      connectCheck.checked = false;
      return true;
    }
    return false;
  }

  function chooseAndExpand() {
    setTimeout(() => {
      let allFrontiers = Array.from(document.querySelectorAll('[set="frontier"]'));
      if (allFrontiers.length < 1) finished = true;
      if (!finished) {
        for (let frontier of allFrontiers) {
          frontier.checked = true;
          frontier.disabled = true;
        }

        let frontierCheck = allFrontiers[Math.floor(Math.random() * allFrontiers.length)];
        frontierCheck.checked = false;
        frontierCheck.disabled = false;
        frontierCheck.setAttribute("set",firstSet);
        for (let unchecked of Array.from(document.querySelectorAll('[set="1"]'))){
          unchecked.checked = false;
        }

        let array = [checkNorth,checkEast,checkSouth,checkWest];
        for (let i = array.length-1; i > 0; i--) {
          const j = Math.floor(Math.random() * i);
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }

        let xFrontier = Number(frontierCheck.getAttribute('xCoord'));
        let yFrontier = Number(frontierCheck.getAttribute('yCoord'));

        if (array[0](xFrontier,yFrontier)) ;
        else if (array[1](xFrontier,yFrontier)) ;
        else if (array[2](xFrontier,yFrontier)) ;
        else if (array[3](xFrontier,yFrontier)) ;

        newCurrent(xFrontier,yFrontier);

        chooseAndExpand();
      } else {
        console.log('done');
      }
    },10);

  }

  function newCurrent(randomX,randomY) {
    let firstCheck = document.querySelector('[xCoord="'+randomX.toString()+'"][yCoord="'+randomY.toString()+'"]');

    let firstCheckNorth = document.querySelector('[xCoord="'+randomX.toString()+'"][yCoord="'+(randomY-2).toString()+'"]');
    if (firstCheckNorth != undefined && firstCheckNorth.getAttribute("set") != "border" && firstCheckNorth.getAttribute("set") != firstSet.toString()) firstCheckNorth.setAttribute("set","frontier");
    else if (firstCheckNorth && firstCheckNorth.getAttribute("set") == "border") document.querySelector('[xCoord="'+randomX.toString()+'"][yCoord="'+(randomY-1).toString()+'"]').setAttribute("set",firstSet);

    let firstCheckEast = document.querySelector('[xCoord="'+(randomX+2).toString()+'"][yCoord="'+randomY.toString()+'"]');
    if (firstCheckEast != undefined && firstCheckEast.getAttribute("set") != "border"&& firstCheckEast.getAttribute("set") != firstSet.toString()) firstCheckEast.setAttribute("set","frontier");
    else if (firstCheckEast && firstCheckEast.getAttribute("set") == "border") document.querySelector('[xCoord="'+(randomX+1).toString()+'"][yCoord="'+randomY.toString()+'"]').setAttribute("set",firstSet);

    let firstCheckSouth = document.querySelector('[xCoord="'+randomX.toString()+'"][yCoord="'+(randomY+2).toString()+'"]');
    if (firstCheckSouth != undefined && firstCheckSouth.getAttribute("set") != "border" && firstCheckSouth.getAttribute("set") != firstSet.toString()) firstCheckSouth.setAttribute("set","frontier");
    else if (firstCheckSouth && firstCheckSouth.getAttribute("set") == "border") document.querySelector('[xCoord="'+randomX.toString()+'"][yCoord="'+(randomY+1).toString()+'"]').setAttribute("set",firstSet);

    let firstCheckWest = document.querySelector('[xCoord="'+(randomX-2).toString()+'"][yCoord="'+randomY.toString()+'"]');
    if (firstCheckWest != undefined && firstCheckWest.getAttribute("set") != "border" && firstCheckWest.getAttribute("set") != firstSet.toString()) firstCheckWest.setAttribute("set","frontier");
    else if (firstCheckWest && firstCheckWest.getAttribute("set") == "border") document.querySelector('[xCoord="'+(randomX-1).toString()+'"][yCoord="'+randomY.toString()+'"]').setAttribute("set",firstSet);

    firstCheck.checked = false;
    firstCheck.setAttribute('set',firstSet.toString());
  }

  function startPrims() {
    finished = false;
    let randomX = Math.floor(Math.random() * (SIZEX)) + 1;
    let randomY = Math.floor(Math.random() * (SIZEY)) + 1;

    newCurrent(randomX,randomY);

    chooseAndExpand();
  }

  nextGen.addEventListener('click',startPrims);
  createChecks();
}

recursiveBacktracker();

b3s1234Button.addEventListener('click',() => {
  if (current != 1 && finished) {
    b3s1234Button.setAttribute("selected","1");
    b3s12345Button.setAttribute("selected","0");
    recursiveBackButton.setAttribute("selected","0");
    kruskalsButton.setAttribute("selected","0");
    primsButton.setAttribute("selected","0");
    b3s1234();
  }
});

b3s12345Button.addEventListener('click',() => {
  if (current != 2 && finished) {
    b3s12345Button.setAttribute("selected","1");
    b3s1234Button.setAttribute("selected","0");
    recursiveBackButton.setAttribute("selected","0");
    kruskalsButton.setAttribute("selected","0");
    primsButton.setAttribute("selected","0");
    b3s12345();
  }
});

recursiveBackButton.addEventListener('click', () => {
  if (current != 3 && finished) {
    b3s12345Button.setAttribute("selected","0");
    b3s1234Button.setAttribute("selected","0");
    kruskalsButton.setAttribute("selected","0");
    recursiveBackButton.setAttribute("selected","1");
    primsButton.setAttribute("selected","0");
    recursiveBacktracker();
  }
});

kruskalsButton.addEventListener('click', () => {
  if (current != 4 && finished) {
    b3s12345Button.setAttribute("selected","0");
    b3s1234Button.setAttribute("selected","0");
    recursiveBackButton.setAttribute("selected","0");
    kruskalsButton.setAttribute("selected","1");
    primsButton.setAttribute("selected","0");
    kruskals();
  }
});

primsButton.addEventListener('click', () => {
  if (current != 5 && finished) {
    b3s12345Button.setAttribute("selected","0");
    b3s1234Button.setAttribute("selected","0");
    recursiveBackButton.setAttribute("selected","0");
    kruskalsButton.setAttribute("selected","0");
    primsButton.setAttribute("selected","1");
    prims();
  }
})

window.addEventListener("resize", () => {
  copyright.style.top = document.body.clientHeight-copyright.clientHeight;
});
