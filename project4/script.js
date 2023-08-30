var arr = [
    {dp:"https://images.unsplash.com/photo-1527842891421-42eec6e703ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9vbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1532693322450-2cb5c511067d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9vbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"},
    {dp:"https://images.unsplash.com/photo-1682905926517-6be3768e29f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8bW9vbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",story:"https://images.unsplash.com/photo-1537420327992-d6e192287183?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60"},
    {dp:"https://images.unsplash.com/photo-1515311320503-6e3d309537b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1vb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",story:"https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60"},
    {dp:"https://images.unsplash.com/photo-1535332371349-a5d229f49cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",story:"https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60"},
    {dp:"https://images.unsplash.com/photo-1481819613568-3701cbc70156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",story:"https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60"},
];
let storySection=document.querySelector('.story-section');
let fullScreen=document.querySelector('.full-screen');
let clutter=""
arr.forEach((elem,idx)=>{
    clutter +=`<div id="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
});

storySection.innerHTML=clutter;

let flag=0;
storySection.addEventListener("click",(dets)=>{
    fullScreen.style.display="block";
    fullScreen.style.backgroundImage=`url(${ arr[dets.target.id].story})`
        setTimeout(() => {
            fullScreen.style.display="none";
        }, 3000);
    
});
