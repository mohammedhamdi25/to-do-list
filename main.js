let input = document.querySelector("input")
let insert = document.querySelector("button")
let result = document.querySelector(".result")
let form = document.querySelector("form")
let tasks = []
let count = 0;


if(localStorage.getItem("tasks")){
    let arr = JSON.parse(localStorage.getItem("tasks"))
    arr.forEach((el) =>{
        insertTask(el.title)
    })
}

form.addEventListener("submit",(el) =>{
    el.preventDefault()
    
})

insert.addEventListener("click",(el) =>{
    insertTask(input.value);
    input.value = ""
});

result.addEventListener("click",(el) =>{

    removeFromLocal(el.target.parentElement.parentElement.getAttribute("id"))
    if (el.target.parentElement.classList.contains("delete-icon")){
        el.target.parentElement.parentElement.remove()
    }
});


function insertTask(task){
    if(task !== ""){
        // creat task icon
        let taskIcon = document.createElement("div");
        taskIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#80A0AF" d="m10.95 18l5.65-5.65l-1.45-1.45l-4.225 4.225l-2.1-2.1L7.4 14.45L10.95 18ZM6 22q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h8l6 6v12q0 .825-.588 1.413T18 22H6Zm7-13V4H6v16h12V9h-5ZM6 4v5v-5v16V4Z"/></svg>`;
        taskIcon.classList.add("icon-task");
        // create title of task
        let tilteTask = document.createElement("p");
        tilteTask.append(task);
        tilteTask.classList.add("task-title");
        // create task info 
        let taskInfo = document.createElement("div");
        taskInfo.append(taskIcon,tilteTask);
        // create delete icon
        let del = document.createElement("div");
        del.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#80a0af" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg>`;
        del.classList.add("delete-icon");
        // create contaienr
        let contaienr = document.createElement("div");
        contaienr.append(taskInfo,del)
        result.append(contaienr)
        
        tasks.push(
            {
                id : ++count,
                title: task
            }
        )

        contaienr.setAttribute("id",count);
        contaienr.setAttribute("tilte",task);


        localStorage.setItem("tasks",JSON.stringify(tasks))

    }
}


function removeFromLocal(del){
    let arr = JSON.parse(localStorage.getItem("tasks"))
    arr.forEach(element => {
            arr = arr.filter((el) =>{
                return del != el.id
            })
    });
    localStorage.setItem("tasks",JSON.stringify(arr))
    
}
