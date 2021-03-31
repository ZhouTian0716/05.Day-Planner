//console.log('hello');

var messageFlash = $('#flash');
var todoEl = $('.todo');
var businessHours = $('.businessHours');
var todoInput = $('.scheduleItem');
var saveButton = $('.btn');
var saveIcon = $('.fa-save');

//localStorage variables
var storedTodos = [];
storedTodos.length = 24;








todoEl.on('click', '.btn', clickSave);



function clickSave(event){
    var btnClicked = $(event.target);
    btnClicked.siblings().eq(1).attr('value', 'shot!');
    messageFlash.css('opacity', '1');
    setTimeout(function(){ 
        messageFlash.css('opacity','0');
    }, 1000)
}


