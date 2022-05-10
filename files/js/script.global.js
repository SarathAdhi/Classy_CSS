var link = document.createElement('link');
link.setAttribute("rel", "stylesheet");
link.setAttribute("href", 'https://sarathadhi.github.io/Cust-CSS-CDN/styles/styles.global.css');
document.getElementsByTagName("head")[0].appendChild(link);

// CSS scripting starts here
var collection = document.body.getElementsByTagName("*");
for (var i = 0; i < collection.length; i++) {
    var className = collection[i].className
    // Color - for hex and normal text
    if (className.includes('cl-')) {
        if (className.includes('cl-h')) {
            var neededClass = className.split('cl-h')[1]
            neededClass = neededClass.split(' ')[0];
            document.querySelector(`.cl-h${neededClass}`).style.color = "#" + neededClass
        }
        else {
            var neededClass = className.split('cl-')[1]
            neededClass = neededClass.split(' ')[0];
            document.querySelector(`.cl-${neededClass}`).style.color = neededClass
        }
    }
    // Use with units ex:- mg-100px, mg-20rem
    if (className.includes('mg-')) {
        var neededClass = className.split('mg-')[1]
        neededClass = neededClass.split(' ')[0];
        document.querySelector(`.mg-${neededClass}`).style.margin = neededClass
    }
    // Use with units ex:- pd-100px, pd-20rem
    if (className.includes('pd-')) {
        var neededClass = className.split('pd-')[1]
        neededClass = neededClass.split(' ')[0];
        document.querySelector(`.pd-${neededClass}`).style.padding = neededClass
    }
}
// CSS scripting ends here



// Event handlers
document.onmousemove = function (event) {
    var pointerX = event.pageX;
    var pointerY = event.pageY;
    console.log(pointerX)
    document.querySelector('.mouse-pointer').style.display = "block"
    document.querySelector('.mouse-pointer').style.marginTop = (pointerY - 15) + 'px'
    document.querySelector('.mouse-pointer').style.marginLeft = (pointerX - 20) + 'px'
}
document.onmouseleave = function (event) {
    document.querySelector('.mouse-pointer').style.display = "none"
}