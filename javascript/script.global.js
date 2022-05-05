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