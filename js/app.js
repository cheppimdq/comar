// RIGHT CLICK

document.oncontextmenu = function() {
    return false
}

function right(e) {
    var msg =" 2024 © Lautaro Cheppi";
    if (navigator.appName == 'Netscape' && e.which == 3) {
    alert(msg);
    return false;
    }
    else if (navigator.appName == 'Microsoft Internet Explorer' && event.button==2) {
    alert(msg);
    return false;
    }
    return true;
}

document.onmousedown = right;

/**
 * ALL
 * RIGHTS
 * RESERVED
 */

