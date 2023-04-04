

const zoomBtn = document.querySelectorAll('.zoom-text');
const allImages = document.querySelectorAll('.img-container-gallery');
const imageView = document.querySelector('.image-view');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const imageBox = document.querySelector('.image-box');

let currentImageIdx = 0;

imageView.addEventListener('click', function () {
    this.style.display = "none";
    imageBox.style.display = "none";
})


zoomBtn.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
        imageView.style.display = "block";
        imageBox.style.display = "block";
        currentImageIdx = index + 1;
        currentImageDisplay(currentImageIdx);
    })
})

function currentImageDisplay(position) {
    imageBox.style.background = `url(images/gallery/gallery-egatnom-${currentImageIdx}.jpg) center/cover no-repeat`;
}

prevBtn.addEventListener('click', function () {
    currentImageIdx--;
    if (currentImageIdx === 0) {
        currentImageIdx = allImages.length;
    }
    currentImageDisplay(currentImageIdx);
})

nextBtn.addEventListener('click', function () {
    currentImageIdx++;
    if (currentImageIdx === 5) {
        currentImageIdx = 1;
    }
    currentImageDisplay(currentImageIdx);
})



/* LOGO GALLERY */


var logo1 = document.getElementById("logo1");
var logo2 = document.getElementById("logo2");
var logo3 = document.getElementById("logo3");
var logo4 = document.getElementById("logo4");
var logo5 = document.getElementById("logo5");
var logo6 = document.getElementById("logo6");
var logo7 = document.getElementById("logo7");
var logo8 = document.getElementById("logo8");
var logo9 = document.getElementById("logo9");
var logo10 = document.getElementById("logo10");
var logo11 = document.getElementById("logo11");
var logo12 = document.getElementById("logo12");
var logo13 = document.getElementById("logo13");
var logo14 = document.getElementById("logo14");
var logo15 = document.getElementById("logo15");
var logo16 = document.getElementById("logo16");
var logo17 = document.getElementById("logo17");
var logo18 = document.getElementById("logo18");

var logo1Gallery = document.getElementById("galleryLogo1");
var logo2Gallery = document.getElementById("galleryLogo2");
var logo3Gallery = document.getElementById("galleryLogo3");
var logo4Gallery = document.getElementById("galleryLogo4");
var logo5Gallery = document.getElementById("galleryLogo5");
var logo6Gallery = document.getElementById("galleryLogo6");
var logo7Gallery = document.getElementById("galleryLogo7");
var logo8Gallery = document.getElementById("galleryLogo8");
var logo9Gallery = document.getElementById("galleryLogo9");
var logo10Gallery = document.getElementById("galleryLogo10");
var logo11Gallery = document.getElementById("galleryLogo11");
var logo12Gallery = document.getElementById("galleryLogo12");
var logo13Gallery = document.getElementById("galleryLogo13");
var logo14Gallery = document.getElementById("galleryLogo14");
var logo15Gallery = document.getElementById("galleryLogo15");
var logo16Gallery = document.getElementById("galleryLogo16");
var logo17Gallery = document.getElementById("galleryLogo17");
var logo18Gallery = document.getElementById("galleryLogo18");


// func

logo1.onclick = function () {
    logo2Gallery.style.display = "none";
    logo3Gallery.style.display = "none";
    logo4Gallery.style.display = "none";
    logo5Gallery.style.display = "none";
    logo6Gallery.style.display = "none";
    logo7Gallery.style.display = "none";
    logo8Gallery.style.display = "none";
    logo9Gallery.style.display = "none";
    logo10Gallery.style.display = "none";
    logo11Gallery.style.display = "none";
    logo12Gallery.style.display = "none";
    logo13Gallery.style.display = "none";
    logo14Gallery.style.display = "none";
    logo15Gallery.style.display = "none";
    logo16Gallery.style.display = "none";
    logo17Gallery.style.display = "none";
    logo18Gallery.style.display = "none";
    logo1Gallery.style.display = "grid";
}


logo2.onclick = function () {
    logo1Gallery.style.display = "none";
    logo3Gallery.style.display = "none";
    logo4Gallery.style.display = "none";
    logo5Gallery.style.display = "none";
    logo6Gallery.style.display = "none";
    logo7Gallery.style.display = "none";
    logo8Gallery.style.display = "none";
    logo9Gallery.style.display = "none";
    logo10Gallery.style.display = "none";
    logo11Gallery.style.display = "none";
    logo12Gallery.style.display = "none";
    logo13Gallery.style.display = "none";
    logo14Gallery.style.display = "none";
    logo15Gallery.style.display = "none";
    logo16Gallery.style.display = "none";
    logo17Gallery.style.display = "none";
    logo18Gallery.style.display = "none";
    logo2Gallery.style.display = "grid";
}


logo3.onclick = function () {
    logo1Gallery.style.display = "none";
    logo2Gallery.style.display = "none";
    logo4Gallery.style.display = "none";
    logo5Gallery.style.display = "none";
    logo6Gallery.style.display = "none";
    logo7Gallery.style.display = "none";
    logo8Gallery.style.display = "none";
    logo9Gallery.style.display = "none";
    logo10Gallery.style.display = "none";
    logo11Gallery.style.display = "none";
    logo12Gallery.style.display = "none";
    logo13Gallery.style.display = "none";
    logo14Gallery.style.display = "none";
    logo15Gallery.style.display = "none";
    logo16Gallery.style.display = "none";
    logo17Gallery.style.display = "none";
    logo18Gallery.style.display = "none";
    logo3Gallery.style.display = "grid";
}

logo4.onclick = function () {
    logo1Gallery.style.display = "none";
    logo2Gallery.style.display = "none";
    logo3Gallery.style.display = "none";
    logo5Gallery.style.display = "none";
    logo6Gallery.style.display = "none";
    logo7Gallery.style.display = "none";
    logo8Gallery.style.display = "none";
    logo9Gallery.style.display = "none";
    logo10Gallery.style.display = "none";
    logo11Gallery.style.display = "none";
    logo12Gallery.style.display = "none";
    logo13Gallery.style.display = "none";
    logo14Gallery.style.display = "none";
    logo15Gallery.style.display = "none";
    logo16Gallery.style.display = "none";
    logo17Gallery.style.display = "none";
    logo18Gallery.style.display = "none";
    logo4Gallery.style.display = "grid";
}

logo5.onclick = function () {
    logo1Gallery.style.display = "none";
    logo2Gallery.style.display = "none";
    logo3Gallery.style.display = "none";
    logo4Gallery.style.display = "none";
    logo6Gallery.style.display = "none";
    logo7Gallery.style.display = "none";
    logo8Gallery.style.display = "none";
    logo9Gallery.style.display = "none";
    logo10Gallery.style.display = "none";
    logo11Gallery.style.display = "none";
    logo12Gallery.style.display = "none";
    logo13Gallery.style.display = "none";
    logo14Gallery.style.display = "none";
    logo15Gallery.style.display = "none";
    logo16Gallery.style.display = "none";
    logo17Gallery.style.display = "none";
    logo18Gallery.style.display = "none";
    logo5Gallery.style.display = "grid";
}


logo6.onclick = function () {
    logo1Gallery.style.display = "none";
    logo2Gallery.style.display = "none";
    logo3Gallery.style.display = "none";
    logo4Gallery.style.display = "none";
    logo5Gallery.style.display = "none";
    logo7Gallery.style.display = "none";
    logo8Gallery.style.display = "none";
    logo9Gallery.style.display = "none";
    logo10Gallery.style.display = "none";
    logo11Gallery.style.display = "none";
    logo12Gallery.style.display = "none";
    logo13Gallery.style.display = "none";
    logo14Gallery.style.display = "none";
    logo15Gallery.style.display = "none";
    logo16Gallery.style.display = "none";
    logo17Gallery.style.display = "none";
    logo18Gallery.style.display = "none";
    logo6Gallery.style.display = "grid";
}

logo7.onclick = function () {
    logo1Gallery.style.display = "none";
    logo2Gallery.style.display = "none";
    logo3Gallery.style.display = "none";
    logo4Gallery.style.display = "none";
    logo5Gallery.style.display = "none";
    logo6Gallery.style.display = "none";
    logo8Gallery.style.display = "none";
    logo9Gallery.style.display = "none";
    logo10Gallery.style.display = "none";
    logo11Gallery.style.display = "none";
    logo12Gallery.style.display = "none";
    logo13Gallery.style.display = "none";
    logo14Gallery.style.display = "none";
    logo15Gallery.style.display = "none";
    logo16Gallery.style.display = "none";
    logo17Gallery.style.display = "none";
    logo18Gallery.style.display = "none";
    logo7Gallery.style.display = "grid";
}

logo8.onclick = function () {
    logo1Gallery.style.display = "none";
    logo2Gallery.style.display = "none";
    logo3Gallery.style.display = "none";
    logo4Gallery.style.display = "none";
    logo5Gallery.style.display = "none";
    logo6Gallery.style.display = "none";
    logo7Gallery.style.display = "none";
    logo9Gallery.style.display = "none";
    logo10Gallery.style.display = "none";
    logo11Gallery.style.display = "none";
    logo12Gallery.style.display = "none";
    logo13Gallery.style.display = "none";
    logo14Gallery.style.display = "none";
    logo15Gallery.style.display = "none";
    logo16Gallery.style.display = "none";
    logo17Gallery.style.display = "none";
    logo18Gallery.style.display = "none";
    logo8Gallery.style.display = "grid";
}

logo9.onclick = function () {
    logo1Gallery.style.display = "none";
    logo2Gallery.style.display = "none";
    logo3Gallery.style.display = "none";
    logo4Gallery.style.display = "none";
    logo5Gallery.style.display = "none";
    logo6Gallery.style.display = "none";
    logo7Gallery.style.display = "none";
    logo8Gallery.style.display = "none";
    logo10Gallery.style.display = "none";
    logo11Gallery.style.display = "none";
    logo12Gallery.style.display = "none";
    logo13Gallery.style.display = "none";
    logo14Gallery.style.display = "none";
    logo15Gallery.style.display = "none";
    logo16Gallery.style.display = "none";
    logo17Gallery.style.display = "none";
    logo18Gallery.style.display = "none";
    logo9Gallery.style.display = "grid";
}

logo10.onclick = function () {
    logo1Gallery.style.display = "none";
    logo2Gallery.style.display = "none";
    logo3Gallery.style.display = "none";
    logo4Gallery.style.display = "none";
    logo5Gallery.style.display = "none";
    logo6Gallery.style.display = "none";
    logo7Gallery.style.display = "none";
    logo8Gallery.style.display = "none";
    logo9Gallery.style.display = "none";
    logo11Gallery.style.display = "none";
    logo12Gallery.style.display = "none";
    logo13Gallery.style.display = "none";
    logo14Gallery.style.display = "none";
    logo15Gallery.style.display = "none";
    logo16Gallery.style.display = "none";
    logo17Gallery.style.display = "none";
    logo18Gallery.style.display = "none";
    logo10Gallery.style.display = "grid";
}

logo11.onclick = function () {
    logo1Gallery.style.display = "none";
    logo2Gallery.style.display = "none";
    logo3Gallery.style.display = "none";
    logo4Gallery.style.display = "none";
    logo5Gallery.style.display = "none";
    logo6Gallery.style.display = "none";
    logo7Gallery.style.display = "none";
    logo8Gallery.style.display = "none";
    logo9Gallery.style.display = "none";
    logo10Gallery.style.display = "none";
    logo12Gallery.style.display = "none";
    logo13Gallery.style.display = "none";
    logo14Gallery.style.display = "none";
    logo15Gallery.style.display = "none";
    logo16Gallery.style.display = "none";
    logo17Gallery.style.display = "none";
    logo18Gallery.style.display = "none";
    logo11Gallery.style.display = "grid";
}

logo12.onclick = function () {
    logo1Gallery.style.display = "none";
    logo2Gallery.style.display = "none";
    logo3Gallery.style.display = "none";
    logo4Gallery.style.display = "none";
    logo5Gallery.style.display = "none";
    logo6Gallery.style.display = "none";
    logo7Gallery.style.display = "none";
    logo8Gallery.style.display = "none";
    logo9Gallery.style.display = "none";
    logo10Gallery.style.display = "none";
    logo11Gallery.style.display = "none";
    logo13Gallery.style.display = "none";
    logo14Gallery.style.display = "none";
    logo15Gallery.style.display = "none";
    logo16Gallery.style.display = "none";
    logo17Gallery.style.display = "none";
    logo18Gallery.style.display = "none";
    logo12Gallery.style.display = "grid";
}

logo13.onclick = function () {
    logo1Gallery.style.display = "none";
    logo2Gallery.style.display = "none";
    logo3Gallery.style.display = "none";
    logo4Gallery.style.display = "none";
    logo5Gallery.style.display = "none";
    logo6Gallery.style.display = "none";
    logo7Gallery.style.display = "none";
    logo8Gallery.style.display = "none";
    logo9Gallery.style.display = "none";
    logo10Gallery.style.display = "none";
    logo11Gallery.style.display = "none";
    logo12Gallery.style.display = "none";
    logo14Gallery.style.display = "none";
    logo15Gallery.style.display = "none";
    logo16Gallery.style.display = "none";
    logo17Gallery.style.display = "none";
    logo18Gallery.style.display = "none";
    logo13Gallery.style.display = "grid";
}

logo14.onclick = function () {
    logo1Gallery.style.display = "none";
    logo2Gallery.style.display = "none";
    logo3Gallery.style.display = "none";
    logo4Gallery.style.display = "none";
    logo5Gallery.style.display = "none";
    logo6Gallery.style.display = "none";
    logo7Gallery.style.display = "none";
    logo8Gallery.style.display = "none";
    logo9Gallery.style.display = "none";
    logo10Gallery.style.display = "none";
    logo11Gallery.style.display = "none";
    logo12Gallery.style.display = "none";
    logo13Gallery.style.display = "none";
    logo15Gallery.style.display = "none";
    logo16Gallery.style.display = "none";
    logo17Gallery.style.display = "none";
    logo18Gallery.style.display = "none";
    logo14Gallery.style.display = "grid";
}

logo15.onclick = function () {
    logo1Gallery.style.display = "none";
    logo2Gallery.style.display = "none";
    logo3Gallery.style.display = "none";
    logo4Gallery.style.display = "none";
    logo5Gallery.style.display = "none";
    logo6Gallery.style.display = "none";
    logo7Gallery.style.display = "none";
    logo8Gallery.style.display = "none";
    logo9Gallery.style.display = "none";
    logo10Gallery.style.display = "none";
    logo11Gallery.style.display = "none";
    logo12Gallery.style.display = "none";
    logo13Gallery.style.display = "none";
    logo14Gallery.style.display = "none";
    logo16Gallery.style.display = "none";
    logo17Gallery.style.display = "none";
    logo18Gallery.style.display = "none";
    logo15Gallery.style.display = "grid";
}

logo16.onclick = function () {
    logo1Gallery.style.display = "none";
    logo2Gallery.style.display = "none";
    logo3Gallery.style.display = "none";
    logo4Gallery.style.display = "none";
    logo5Gallery.style.display = "none";
    logo6Gallery.style.display = "none";
    logo7Gallery.style.display = "none";
    logo8Gallery.style.display = "none";
    logo9Gallery.style.display = "none";
    logo10Gallery.style.display = "none";
    logo11Gallery.style.display = "none";
    logo12Gallery.style.display = "none";
    logo13Gallery.style.display = "none";
    logo14Gallery.style.display = "none";
    logo15Gallery.style.display = "none";
    logo17Gallery.style.display = "none";
    logo18Gallery.style.display = "none";
    logo16Gallery.style.display = "grid";
}

logo17.onclick = function () {
    logo1Gallery.style.display = "none";
    logo2Gallery.style.display = "none";
    logo3Gallery.style.display = "none";
    logo4Gallery.style.display = "none";
    logo5Gallery.style.display = "none";
    logo6Gallery.style.display = "none";
    logo7Gallery.style.display = "none";
    logo8Gallery.style.display = "none";
    logo9Gallery.style.display = "none";
    logo10Gallery.style.display = "none";
    logo11Gallery.style.display = "none";
    logo12Gallery.style.display = "none";
    logo13Gallery.style.display = "none";
    logo14Gallery.style.display = "none";
    logo15Gallery.style.display = "none";
    logo16Gallery.style.display = "none";
    logo18Gallery.style.display = "none";
    logo17Gallery.style.display = "grid";
}

logo18.onclick = function () {
    logo1Gallery.style.display = "none";
    logo2Gallery.style.display = "none";
    logo3Gallery.style.display = "none";
    logo4Gallery.style.display = "none";
    logo5Gallery.style.display = "none";
    logo6Gallery.style.display = "none";
    logo7Gallery.style.display = "none";
    logo8Gallery.style.display = "none";
    logo9Gallery.style.display = "none";
    logo10Gallery.style.display = "none";
    logo11Gallery.style.display = "none";
    logo12Gallery.style.display = "none";
    logo13Gallery.style.display = "none";
    logo14Gallery.style.display = "none";
    logo15Gallery.style.display = "none";
    logo16Gallery.style.display = "none";
    logo17Gallery.style.display = "none";
    logo18Gallery.style.display = "grid";
}




