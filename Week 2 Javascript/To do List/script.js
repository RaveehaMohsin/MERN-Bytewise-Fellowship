let inputfield = document.getElementById('newtasktitle');
let taskslist = document.querySelector('.tasks');
 


//For adding a Task!
inputfield.addEventListener('keydown' ,(e)=>
{
    if(e.key === 'Enter' && inputfield.value != '')
    {        
        var newtask = document.createElement('li');
        newtask.classList.add('justify-content-between', 'align-items-center', 'mb-2');
        newtask.append(document.createTextNode(inputfield.value));
        // var buttontasks = document.querySelector('.btn.btn-info.float-end')
        // newtask.append(buttontasks.cloneNode(true));
        var newButton = createButton();
        newtask.append(newButton);
        taskslist.append(newtask);
        inputfield.value='';
    }
});

function createButton()
{
    var newButton = document.createElement('button');
    newButton.classList.add('btn', 'btn-info', 'float-end');
    newButton.textContent = 'Done';
    return newButton;
}


//for changing the task mode to completed
taskslist.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('btn-info')) {
        e.target.textContent = 'Completed';
        e.target.style.backgroundColor = 'green';
    }
});

//clear all tasks
var clearbtn = document.getElementById('clearbtn');
clearbtn.addEventListener('click' , (e)=>{
    taskslist.innerHTML ='';
});

//sections
var all = document.getElementById('all');
var pending = document.getElementById('pending');
var completed = document.getElementById('completed');

all.addEventListener('click' , (e)=>{
    var singletask1 = document.querySelectorAll('.tasks li');
    singletask1.forEach((task)=>{
        var btn1 =  task.querySelector('button');
        if(btn1 && (btn1.textContent === 'Completed' || btn1.textContent === 'Done'))
        {
          task.style.display ='';
        }
        else{
         task.style.display ='none';
        }
     })

});

pending.addEventListener('click' , (e)=>{
    var singletask2 = document.querySelectorAll('.tasks li');
    singletask2.forEach((task)=>{
        var button = task.querySelector('button');
        if(button && button.textContent === 'Done')
        {
            task.style.display = '';
        }
        else{
            task.style.display = 'none';
        }

    })

});

completed.addEventListener('click' , (e)=>{
    var singletask3= document.querySelectorAll('.tasks li');
    singletask3.forEach((task)=>{
       var btn =  task.querySelector('button');
       if(btn && btn.textContent === 'Completed')
       {
         task.style.display ='';
       }
       else{
        task.style.display ='none';
       }
    })

});



