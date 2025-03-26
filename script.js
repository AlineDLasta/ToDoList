function addTask(){
    let input = document.getElementById('input').value;

    if(input == ''){
        alert('Please, enter a task!');
    } else {
        
    let li = document.createElement('li');
    li.innerHTML = input + "<span onclick='deleteTask(this)'><i class='bx bx-x'></i></span>";

    document.querySelector('ul').appendChild(li);

    inputValue = "";
    }

}

function deleteTask(li){
    li.parentElement.remove()
}