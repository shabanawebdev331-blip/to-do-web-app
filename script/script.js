let task = document.getElementById("task");
let taskList = document.getElementById("taskList");
let taskId = 0;

const getTask = () => {
if(task.value == ""){
alert("Please add task!")
}else{
    // Adding div
    let createdDiv = document.createElement("div");
    createdDiv.setAttribute("id", taskId++);
    taskList.appendChild(createdDiv);

    // Adding Task
    let createdChild = document.createElement("p");
    createdChild.innerText = task.value;
    createdDiv.appendChild(createdChild);

    // Adding Edit button
    let createdEdit = document.createElement("button");
    createdEdit.innerText = "EDIT";
    createdDiv.appendChild(createdEdit);

    createdEdit.addEventListener("click", () => {

        if (createdEdit.innerText === "EDIT") {

            // EDIT mode
            task.value = createdChild.innerText;
            createdEdit.innerText = "UPDATE";

        } else {

            // UPDATE mode
            createdChild.innerText = task.value;
            createdEdit.innerText = "EDIT";
            task.value = "";

        }

    });

    // Adding Delete button
    let createdDelete = document.createElement("button");
    createdDelete.innerText = "DELETE";
    createdDiv.appendChild(createdDelete);

    createdDelete.addEventListener("click", () => {
        createdDiv.remove();
    });

    task.value = "";
    }
};

const deleteAll = () => {
    taskList.innerHTML = "";
}