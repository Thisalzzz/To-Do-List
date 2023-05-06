const inputbox = document.getElementById("in-box")
const container = document.getElementById("list")

const addTask = () =>{
    if(inputbox.value === ''){
        alert("you must input something!")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        container.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputbox.value="";
    saveData()
}

container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})

const saveData=()=>{
    localStorage.setItem("data", container.innerHTML)
}

const showData = () =>{
    container.innerHTML = localStorage.getItem("data");
}