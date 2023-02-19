console.log("Hello World");

let addbtn = document.getElementById("register");
addbtn.addEventListener("click",function(e){
    console.log("You Clicked ");
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");

    let box = localStorage.getItem("box");
    if(box == null){
        boxObj1 = [];
        boxObj2 = [];
    }
    else{
        boxObj1 = JSON.parse(box);
        boxObj2 = JSON.parse(box);
    }
    boxObj1.push(addTitle.value); //Unshift
    boxObj2.push(addTxt.value); //Unshift
    localStorage.setItem("box",JSON.stringify(boxObj1));
    localStorage.setItem("box",JSON.stringify(boxObj2));
    addTitle.value = "";
    addTxt.value = "";
    console.log(boxObj1);
    console.log(boxObj2);
    showBox();
})
function showBox(){
    let box  = localStorage.getItem("box");
    if(box == null){
        boxObj1 = [];
        boxObj2 = [];
    }
    else{
        boxObj1 = JSON.parse(box);
        boxObj2 = JSON.parse(box);
    }
    let html = "";
    
    boxObj1.forEach(function(element){

        html += `
            <div class="main-box" id="box-1">
                <img src="/img/raphael-rychetsky-li9JfUHQfOY-unsplash.jpg" alt="">
                <h1>${element}</h1>
            </div>`;
    });
    boxObj2.forEach(function(element){

        html += `
            <div class="main-box" id="box-1">
                <img src="/img/raphael-rychetsky-li9JfUHQfOY-unsplash.jpg" alt="">
                <p>${element}</p>
            </div>`;
    });
    let boxEln = document.getElementById('box');
    if (box.length != 0) {
        boxEln.innerHTML = html;
    }
}