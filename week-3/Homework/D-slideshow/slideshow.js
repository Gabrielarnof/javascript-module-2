// Write your code here

    const img1= "https://vlaby.com/lfm/photos/1/BLOG/images/img_3902.jpg"
    const img2="https://www.worldofchemicals.com/Article/624/Chemical%20reactions.jpg"
    const img3="https://thumbs.dreamstime.com/b/two-glass-flasks-chemical-reaction-white-smoke-comes-out-flasks-background-blurred-glass-flasks-chemical-148879308.jpg"
    const img4="https://media.sciencephoto.com/c0/36/38/38/c0363838-800px-wm.jpg"
    const img5="https://media.sciencephoto.com/c0/30/82/11/c0308211-800px-wm.jpg"

const imagesReactions = [img1, img2, img3, img4, img5];

let imgIndex = 0;
let intervalVar;
let delayInterval = 2000;

const autoBackBtn = document.getElementById("auto-back-btn");
const backBtn = document.getElementById("back-btn");
const stopBtn = document.getElementById("stop-btn");
const forwardBtn = document.getElementById("forward-btn");
const autoForwardBtn = document.getElementById("auto-forward-btn");
const selectImage = document.getElementById("random-image");

autoBackBtn.addEventListener('click', autoBackEvent);
backBtn.addEventListener('click', backEvent);
stopBtn.addEventListener('click', stopEvent);
forwardBtn.addEventListener('click', forwardEvent);
autoForwardBtn.addEventListener('click', autoForwardEvent);

function showImage() {
  selectImage.src = imagesReactions[imgIndex];
}

function backEvent() {
  imgIndex = imgIndex == 0 ? imagesReactions.length - 1 : imgIndex - 1;
  showImage();
}

function forwardEvent() {
  imgIndex = imgIndex == imagesReactions.length - 1 ? 0 : imgIndex + 1;
  showImage();
}

function autoBackEvent() {
  resetInt(backEvent);
}

function autoForwardEvent() {
  resetInt(forwardEvent);
}

function stopEvent() {
  resetInt();
}

function resetInt(fnc) {
  if (intervalVar) clearInterval(intervalVar);
  if (typeof fnc === "function") {
    intervalVar = setInterval(fnc, delayInterval);
  }
}

showImage();