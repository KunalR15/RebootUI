function selectAll(){
    var items=document.getElementsByName('server');
    for(var i=0; i<items.length; i++){
        if(items[i].type=='checkbox')
            items[i].checked=true;
    }
}
function UnSelectAll(){
    var items=document.getElementsByName('server');
    for(var i=0; i<items.length; i++){
        if(items[i].type=='checkbox')
            items[i].checked=false;
    }
}
function AddServers(){
    
}