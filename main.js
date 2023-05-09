// change img when user click on button
const myImage = document.querySelector("img");
let imgIdx = 1;
images = [
     '/test-site/images/img3.jpg',
     '/test-site/images/img1.jpg'
];
function changeImage(){
    if(imgIdx >= images.length){
        imgIdx = 0;
    }
    myImage.src = images[imgIdx];
    imgIdx++;
}

// change image when user click on image
const myImage1 = document.querySelector("img");
myImage1.onclick = () =>{
const mySrc = myImage1.getAttribute("src");
if(mySrc === "/test-site/images/img3.jpg"){
    myImage1.setAttribute("src", "/test-site/images/img1.jpg");
}
else{
myImage1.setAttribute("src", "/test-site/images/img3.jpg")
}};

//
let myHeading = document.querySelector("h1");
function setUserName(){
    const myName = prompt("please enter your Name");
    if(!myName){
        setUserName();
    }
    else{
        localStorage.setItem("name", myName);
        myHeading.textContent = `Wellcome ${myName}`;
    }
    
}
if(!localStorage.getItem("name")){
    setUserName();
}
else{
    const storedName= localStorage.getItem("name");
    myHeading.textContent=`Wellcome ${storedName}`;
}
