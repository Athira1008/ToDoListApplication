function displayToDoList(){
    var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        var Todolist=JSON.parse(this.responseText);
        var task='';
        for( let i=0;i<Todolist.length;i++){
            taskList +='<tr>';
            taskList +='<td>'+ Todolist[i].id+'</td>';
            taskList +='<td>'+ Todolist[i].title +'</td>';
            taskList +='<td>'+ Todolist[i].completed +'</td>';
            
        }
        document.querySelector('#todoTask').innerHTML = groceryItem;
        var gthead=document.querySelector('#Tthead');
        gthead.removeAttribute('hidden');
    }
    
};
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}
