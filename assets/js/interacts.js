//console.log('hello');

var messageFlash = $('#flash');
var todoEl = $('.todo');
var businessHours = $('.businessHours');
var todoInput = $('.scheduleItem');
var saveButton = $('.btn');

//localStorage variables
var todoList = [];
todoList.length = 24;




var index;


todoEl.on('click', '.btn', clickSave);

function clickSave(event){
    var btnClicked = $(event.target);
    //get the index of the clicked button
    index = parseInt(btnClicked.attr("data-index"));
    todoList[index] = btnClicked.siblings().eq(1).val();
    localStorage.setItem("todoList", JSON.stringify(todoList));
    messageFlash.css('opacity', '1');
    setTimeout(function(){ 
        messageFlash.css('opacity','0');
    }, 1000)
}

// //Fill in schedule if (localStorage) storedTodos has any value
// function init(){
//     var storedTodos = JSON.parse(localStorage.getItem("todoList"));
//     if (storedTodos!==null){
//         for(var i=0; i<24; i++){
//             $(todoInput[i]).attr('value', storedTodos[i]);
//         }
//     }
// }
