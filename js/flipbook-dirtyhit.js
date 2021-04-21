var myImage = document.getElementById("mainImage");
var imageArray = ["src/images/home/dirty_hit_1.jpg", "src/images/home/dirty_hit_2.jpg", "src/images/home/dirty_hit_3.jpg"]
var imageIndex = 0;

function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}
setInterval(changeImage, 1000);