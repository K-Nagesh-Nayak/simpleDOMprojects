var istatus=document.querySelector("h5");
var btn =document.querySelector("#addfriend");
// var removeFriend=document.querySelector('#remove');
var flag=0;

// when two button
// addfriend.addEventListener('click',function(){
//     istatus.innerHTML='Friends';
//     istatus.style.color='green';
// });
// removeFriend.addEventListener('click',function(){
//     istatus.innerHTML='Stranger';
//     istatus.style.color='red';
// });

addfriend.addEventListener('click',function(){
        if(flag==0){
            istatus.innerHTML='Friends';
            istatus.style.color='green';
            flag=1;
            btn.innerHTML="Remove Friend";
            btn.style.color = "black";
            btn.style.backgroundColor="#dadada";
            
        }
        else{
            istatus.innerHTML='Stranger';
            istatus.style.color='red';
            flag=0;
            btn.innerHTML="Add Friend";
            btn.style.color = "white";
            btn.style.backgroundColor="cadetblue";
            
        }
    });



