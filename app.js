const btn = document.querySelector('button');
const toDoList = document.querySelector('.toDo_lists');
const input = document.querySelector('#tasks');
let listArr = [];
const container = document.querySelector('.container')

btn.addEventListener('click', ()=>{
    if (!input.value){
        alert("Enter a task")
    }

    else {
        listArr.push(input.value),
        createListItem();        
    }  
});


function createListItem(){
    toDoList.innerText='';
 
    for(let i=0; i<listArr.length; i++){
        const listItems = document.createElement('li');
        listItems.innerText = listArr[i];
        container.append(toDoList)
        toDoList.append(listItems);
        listItems.classList.add('li');
        const delbtn = document.createElement('button');
        delbtn.innerText = 'Delete';
        delbtn.classList.add('btn')
        listItems.append(delbtn);
        delbtn.addEventListener('click', deleteListItem)
        input.value='';
    }
}

function deleteListItem(i){
    listArr.splice(i, 1),
    createListItem()
}