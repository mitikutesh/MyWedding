function init()
  {
    for(var a=document.getElementById("leafContainer"),b=0;b<NUMBER_OF_LEAVES;b++)
    a.appendChild(createALeaf())
  }

  function randomInteger(a,b)
  {
    return a+Math.floor(Math.random()*(b-a))
  }

  function randomFloat(a,b)
  {
    return a+Math.random()*(b-a)
  }
  function pixelValue(a)
  {
    return a+"px"
  }
  function durationValue(a)
  {
    return a+"s"
  }
  function createALeaf()
  {
    var a=document.createElement("div"),
        b=document.createElement("img"),
        c=document.getElementById("leafContainer").getAttribute("data-image");

    b.src="images/petals/"+c+"/realLeaf"+randomInteger(1,5)+".png",

    a.style.top="115%",a.style.left=pixelValue(randomInteger(4e3,10));
    var d=Math.random()<.8?"clockwiseSpin":"counterclockwiseSpinAndFlip";
    a.style.webkitAnimationName="fade, drop",b.style.webkitAnimationName=d;
    var e=durationValue(randomFloat(40,16)),f=durationValue(randomFloat(11,20));
    a.style.webkitAnimationDuration=e+", "+e;var g=durationValue(randomFloat(1,0));
    return a.style.webkitAnimationDelay=g+", "+g,b.style.webkitAnimationDuration=f,a.appendChild(b),a
  }
  const NUMBER_OF_LEAVES=30;
  window.addEventListener("DOMContentLoaded",init,!1);
