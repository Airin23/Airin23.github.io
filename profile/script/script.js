var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/b.jpg') {
        
      myImage.setAttribute ('src','image/a.jpg');
  }
    else{
      myImage.setAttribute ('src','image/b.jpg');
    }
}
