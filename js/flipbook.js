
  var myImage = document.getElementById("mainImage");
  var imageArray = ["/src/images/recordstore/recordstore-menu-1.jpg", "/src/images/recordstore/recordstore-menu-2.jpg", "/src/images/recordstore/recordstore-menu-3.jpg", "/src/images/recordstore/recordstore-menu-2.jpg"]
  var imageIndex = 0;

  function changeImage() {
      myImage.setAttribute("src", imageArray[imageIndex]);
      imageIndex++;
      if (imageIndex >= imageArray.length) {
          imageIndex = 0;
      }
  }
  setInterval(changeImage, 1000);
