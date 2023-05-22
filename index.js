const Form =document.querySelector('#form');
const Task = document.querySelector('#task');
const Date = document.querySelector('#date');
const Msg = document.querySelector('#msg');
const Posts = document.querySelector('#posts');

let data=[];

Form.addEventListener('submit',(e)=>{
    e.preventDefault();
    formValidation();
})

function formValidation(){
    if(!!!Task.value || !!!Date.value){
        console.log('Please put Task and date');
        Msg.innerHTML = 'Task must not be empty'
    }else{
        console.log('success entry is there now');
        acceptData();
    }
}

// ADD DATA IN LOCAL STORAGE
function acceptData(){
    data.push({
        task:Task.value,
        date:Date.value
    });
    console.log(data);

    localStorage.setItem('data',JSON.stringify(data));
    createTasks();
}

// DISPLAY DATA IN FRONTEND

function createTasks(){
    Posts.innerHTML='';
    data.map((x,y)=>{
    return(
        Posts.innerHTML += `
        <div id = '${y}'>
            <span>${x.task}</span>
            <span>${x.date}</span>
            <span>
                <i onclick='editTask(this)'>edit</i>
                <i onclick='deleteTask(this)'>delete</i>
            </span>
        </div>
        `
    )
})
resetForm();
}

function resetForm(){
    Task.value ='';
    Date.value='';
}

// DELETE DATA
let deleteTask=(e)=>{
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem('data',JSON.stringify(data));
    console.log(data)
}

// EDIT DATA
let editTask=(e)=>{
    let selectedTask=e.parentElement.parentElement;

    Task.value = selectedTask.children[0].innerHTML;
    Date.value=selectedTask.children[1].innerHTML;

    deleteTask(e);
}

