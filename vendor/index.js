document.addEventListener('mousemove', mouseMove)
var compass = document.getElementById("compass")

function mouseMove(event) {
    // get information about compass image (width, height, position ...)
    var pos = compass.getBoundingClientRect()
    var compassCenter = {
        x: pos.left + pos.width / 2,
        y: pos.top + pos.height / 2
    }

    // Radius of the circle of center compassCenter passing by mouse cursor
    var R = Math.sqrt(Math.pow(event.clientX - compassCenter.x, 2) + Math.pow(event.clientY - compassCenter.y, 2))
    // angle in degrees from cosinus
    var alpha = Math.acos((event.clientX - compassCenter.x) / R) * 180 / Math.PI

    /*
        for adjustments

        adjust: if under the center need to add 180 otherwise north would stay above the center of compass
        adjust2: if above the center, need to multiply by -1 otherwise rotating in the other direction
     */
    var adjust = 0
    var adjust2 = 1
    if (event.clientY > compassCenter.y) {
        adjust = 180
    } else {
        adjust2 = -1
    }
    // angle of rotation of the compass
    // - 90 because of position of 0 in the html page
    var result = (alpha + adjust - 90) * adjust2

    // add a new style to the compass:
    // transform: rotate the compass of 'result' in degrees
    compass.style.setProperty("transform", "rotate(" + result + "deg)")
}

