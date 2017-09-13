// Game g.p

function requestFS() {
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
    }
}
g.p = {
    x: 0,
    y: 0,
    // Left hold.
    lH: false,
    // Right hold.
    rH: false,
};
g.tp = [
    {
        x: 0,
        y: 0,
        sx: 0,
        sy: 0,
        // hold.
        H: false,
    },
    {
        x: 0,
        y: 0,
        sx: 0,
        sy: 0,
        // hold.
        H: false,
    },
];

g.p.ud = function () {
    if (g.useMob) {
        for (var i = 0; i < g.tp.length; i++) {
            if (g.tp[i].H) {
                g.ds.rMH(g.tp[i].x, g.tp[i].y, g.tp[i].sx, g.tp[i].sy);
            }
        }
    } else {
        if (g.p.lH) {
            g.ds.lMH(g.p.x, g.p.y);
        }
        if (g.p.rH) {
            g.ds.rMH(g.p.x, g.p.y);
        }
    }
};

function down(e) {




    if (g.useMob) {

        //console.log(e)
        var num = e.touches.length - 1;
        //console.log(e.touches[e.touches.length - 1])
        g.tp[num].x = e.touches[num].pageX - g.cv.offsetLeft;
        g.tp[num].y = e.touches[num].pageY - g.cv.offsetTop;
        g.tp[num].sx = e.touches[num].pageX - g.cv.offsetLeft;
        g.tp[num].sy = e.touches[num].pageY - g.cv.offsetTop;
        g.tp[num].H = true;
        g.ds.lMD(g.tp[num].x, g.tp[num].y);



    } else {
        if (e.which === 1) {
            g.ds.lMD(g.p.x, g.p.y);
            g.p.lH = true;
        }
        if (e.which === 3) {
            g.ds.rMD(g.p.x, g.p.y);
            g.p.rH = true;
        }

        g.p.x = e.pageX - g.cv.offsetLeft;
        g.p.y = e.pageY - g.cv.offsetTop;
        //requestFS();

    }
    //e.preventDefault();

}

function up(e) {
    if (g.useMob) {
        //requestFS();
        var num = e.touches.length;
        //g.tp[num].x = e.touches[num].pageX - g.cv.offsetLeft;
        //g.tp[num].y = e.touches[num].pageY - g.cv.offsetTop;
        g.tp[num].H = false;


    } else {
        if (e.which === 1) {
            g.p.lH = false;
        }
        if (e.which === 3) {
            g.p.rH = false;
        }
        g.p.x = e.pageX - g.cv.offsetLeft;
        g.p.y = e.pageY - g.cv.offsetTop;

    }
    //e.preventDefault();


}

g.p.pd = function (e) {
    e.cancelBubble = true;
    e.returnValue = false;
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
};

if (g.useMob) {
    document.addEventListener("touchmove", function (e) {
        var num = e.touches.length - 1;
        g.tp[num].x = e.touches[num].pageX - g.cv.offsetLeft;
        g.tp[num].y = e.touches[num].pageY - g.cv.offsetTop;
        e.cancelBubble = true;
        e.returnValue = false;
        if (e.stopPropagation) e.stopPropagation();
        //if (e.preventDefault) e.preventDefault();
    }, false);

    document.addEventListener("touchstart", down, false);

    document.addEventListener("touchend", up, false);
    document.addEventListener("mousedown", requestFS, false);
} else {
    document.addEventListener("mousemove", function (e) {
        g.p.x = e.pageX - g.cv.offsetLeft;
        g.p.y = e.pageY - g.cv.offsetTop;
        e.cancelBubble = true;
        e.returnValue = false;
        if (e.stopPropagation) e.stopPropagation();
        if (e.preventDefault) e.preventDefault();
    }, false);

    document.addEventListener("mousedown", down, false);

    document.addEventListener("mouseup", up, false);

}
document.addEventListener("contextmenu", g.p.pd, false);
document.addEventListener("drag", g.p.pd, false);
