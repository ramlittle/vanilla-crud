const Form =document.querySelector('#form');
const Task = document.querySelector('#task');
const Date = document.querySelector('#date')
const Msg = document.querySelector('#msg')
const Tasks=document.querySelector('#tasks')

let data = [];

Form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(!!!Task.value || !!!Date.value){
        console.log('please fill out the form')
        Msg.innerHTML = 'Please complete details'
    }else{
        acceptData();
    }
})

function acceptData(){
    data.push(
        {
            task:Task.value,
            date:Date.value
        }
    )
    console.log(data);
    displayData();
}
function displayData(){
    Tasks.innerHTML='';
    data.map((x,y)=>{
        return(
            Tasks.innerHTML += `
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
    clearForm();
}

function clearForm(){
    Task.value=''
    Date.value=''
}

let editTask=(e)=>{
    let selectedTask=e.parentElement.parentElement;
    Task.value=selectedTask.children[0].innerHTML;
    Date.value=selectedTask.children[1].innerHTML;
    deleteTask(e);
}

let deleteTask=(e)=>{
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id,1)
    console.log(data)
}