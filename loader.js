// Usage: <div id="filename">loading...</div><script src="loader.js"></script>
// Must be no space between div and script

function getPreviousSiblingOfThisScript() {
    var scripts = document.getElementsByTagName('script');
    var thisScript = scripts[scripts.length-1];
    return thisScript.previousSibling;
}

function loadServerFileIntoElement(filename, el) {
    var request = new XMLHttpRequest();
    request.open('GET', '/' + filename, true);
    request.onload = function() {
        if (request.status == 200) {
            el.innerHTML = request.responseText;
        }
    };
    request.send();
}

var target = getPreviousSiblingOfThisScript();
var filename = target.id + '.html';

loadServerFileIntoElement(filename, target);

$("#container").mousemove(function(e) {
    parallaxIt(e, ".slide", -100);
    parallaxIt(e, "img", -30);
  });
  
  function parallaxIt(e, target, movement) {
    var $this = $("#container");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;
  
    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
  }