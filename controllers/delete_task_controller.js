
const {TodoList} = require('../assets/js/todo_list.js');

module.exports.deleteTask = function(request,response){

    // console.log(request.body);
    
    var req = request.body;

    if(Object.keys(req).length == 0){
        // console.log("Empty");
        return response.redirect('back');
    }

    // console.log(req.checkbox);

    var checkboxList = req.checkbox;

    var p = 0;

    for(let i=0;i<checkboxList.length;i++){
        var index = checkboxList[i];
        TodoList.splice(index-p,1);
        p++;
    }    

    return response.redirect('back');
}
