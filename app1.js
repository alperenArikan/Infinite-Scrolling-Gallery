document.addEventListener("DOMContentLoaded",removeLoading);

function removeLoading(e){
    setTimeout(() => {
        document.getElementsByClassName("loaderWrapper")[0].setAttribute('style', "display : none !important")
    }, 700);

}





document.addEventListener("scroll",isc);
var Mainbody = document.getElementById("body");
function isc(e){
    // if(imgArry.length=== 0 ){
        
    // }
    
    if(Mainbody.offsetHeight-(window.innerHeight + window.scrollY) <= 50)
    {   
        let newElm = document.createElement("div");
        newElm.className="container";
        body.appendChild(newElm);
        
        createNewImg();
    }

    
}


let imgArry =[];
for(i=1; i<=41; i++){
imgArry.push("image"+i);}

// document.getElementById("radio1").addEventListener("click", function(e){
//     let images = document.getElementsByTagName("img");
//     for(i=0; i<images.length; i++){
//         images[i].classList.add("grayscale");
//     }
// })
// document.getElementById("radio2").addEventListener("click", function(e){
//     let images = document.getElementsByTagName("img");
//     for(i=0; i<images.length; i++){
//         images[i].classList.remove("grayscale");
//     }
// })





function createNewImg(){
    let array = imgArry;
    if(array.length < 2 ){
        
    let imgArry =[];
    for(i=1; i<=41; i++){
        imgArry.push("image"+i);}

        let array = imgArry;

        let randomNumber = Math.floor((Math.random()*array.length));
        let container = document.getElementsByClassName("container");
        let lastContainer = container[container.length-1];
        let item = document.createElement("div");
        item.className="item";
        let randomImg = array[randomNumber]
        array.splice(randomNumber,1);
        
    
    
        item.innerHTML="<img src='./img/"+ randomImg +".png'>";
    
        // item.innerHTML="<img src='./img/image" + random + ".png'>";
        lastContainer.appendChild(item);

    }
    else{
    let randomNumber = Math.floor((Math.random()*array.length));
    let container = document.getElementsByClassName("container");
    let lastContainer = container[container.length-1];
    let item = document.createElement("div");
    item.className="item";
    let randomImg = array[randomNumber]
    array.splice(randomNumber,1);


    item.innerHTML="<img src='./img/"+ randomImg +".png'>";

    // item.innerHTML="<img src='./img/image" + random + ".png'>";
    lastContainer.appendChild(item);

    }

}
