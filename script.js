// CRUD
// C - create
// R - read
// U - update
// D - delete

const descriptionTag = document.querySelector("#description")
const priorityTag = document.querySelector("#priority")
const createBtn = document.querySelector(".creator__btn")
const taskContainerTag = document.querySelector(".tasks .container")

const createTaskHtml = (taskName, arr) => {
return `<div class="task">
<p class="task__name">${taskName}</p>&nbsp;&nbsp;
<label>
    <select id="task__priority">
        <option value="${arr[0]}">${arr[0]}</option>
        <option value="${arr[1]}">${arr[1]}</option>
        <option value="${arr[2]}">${arr[2]}</option>
    </select>&nbsp;&nbsp;
</label>
<button class="task__delete">Delete</button>
</div>`
}
createBtn.addEventListener("click", () => {
    const text = descriptionTag.value
    const select = priorityTag.value
    if (text) {
        console.log(text);
        console.dir(select);
        const arr = ["High", "Medium", "Low"]
        const sortedArray = arr.reduce((acc, rec) => rec !== select ? [...acc, rec] : [rec, ...acc], [])
        taskContainerTag.innerHTML = taskContainerTag.innerHTML + createTaskHtml(text, sortedArray)
        const deleteBtns = document.querySelectorAll(".task__delete")
        deleteBtns.forEach((el) => {
            el.addEventListener("click", () => {
                taskContainerTag.removeChild(el.parentNode)
            })
        })
    }else{
        console.log("write something to task");
    }
})
