const searchBox= document.getElementById("searchBox");
const task = document.getElementById("task") 

function addTask() {
  if (searchBox.value ==='') {alert("You must write something");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = searchBox.value;
    task.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  searchBox.value ='';
  saveData();
}

task.addEventListener("click", function(e){
  if (e.target.tagName ==="LI") {
    e.target.classList.toggle("checked");
    saveData();
    }
  else if(
    e.target.tagName === "SPAN" ){
      e.target.parentElement.remove();
      saveData();
    }
},false)
function saveData() { 
    localStorage.setItem("data", task.innerHTML);
  }
function showData(){
  task.innerHTML=localStorage.getItem("data");
  }
showData()