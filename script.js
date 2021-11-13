
// global vars
let idx = 0;
let selectedImageIdx = 0;

let images = [
    "images/img_1.jpg",
    "images/img_2.jpg",
    "images/img_3.jpg",
    "images/img_4.jpg",
    "images/img_5.jpg",
    "images/img_6.jpg",
    "images/img_7.jpg",
    "images/img_8.jpg",
    "images/img_9.jpg",
    "images/img_10.jpg",
    "images/img_11.jpg",
    "images/img_12.jpg",
];

function init(){
    // add images path to an array
    for(let i = 0; i < images.length; i++){
        addThumbnail(images[i]);
    }

    // add image to main frame
    addImage(images[0])
}

function addThumbnail(image) {
    let img = document.createElement('img');
    img.src = image;
    img.className = "col-1";
    img.dataset.idx = idx;
    img.addEventListener('click', selectedImage.bind(null, idx), false);
    document.getElementById('thumbnails').appendChild(img);
    idx++;
} 

function addImage(image) {
    let img = document.createElement('img');
    img.src = image;
    img.className = "col-12";
    let imgFrame = document.getElementById('img-frame');
    imgFrame.innerHTML = "";
    imgFrame.appendChild(img);
}

function selectedImage(i){
    addImage(images[i])
    selectedImageIdx = i;
}

document.addEventListener('keyup', (event) => {
    let name = event.key;
    if(name === 'ArrowRight'){
        selectedImageIdx++;
    }else if(name === 'ArrowLeft'){
        selectedImageIdx--;
    }
    selectedImage(selectedImageIdx)
}, false);