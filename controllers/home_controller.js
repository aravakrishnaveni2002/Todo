

const {TodoList} = require('../assets/js/todo_list.js');



module.exports.home = function(request,response){

    return response.render('home',{
        title: 'TODO APP',
        todo_list: TodoList
        
    });
}

