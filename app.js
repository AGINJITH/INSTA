/* JavaScript Media Queries */
if (matchMedia) {
    const mq = window.matchMedia("(min-width: 500px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

// media query change
function WidthChange(mq) {

    const msg = (mq.matches ? "more" : "less") + " than 700 pixels";
    document.getElementById("current").firstChild.nodeValue = msg;

}