// render a bitmap
g.bmp = function (img, x, y, w, h, sx, sy, sw, sh, dg, lk) {
    if (!lk) {
        this.cX = g.cX;
        this.cY = g.cY;
    } else {
        this.cX = 0;
        this.cY = 0;
    };
    sx = sx || 0;
    sy = sy || 0;
    sw = sw || img.width;
    sh = sh || img.height;
    w = w || img.width;
    h = h || img.height;
    dg = dg || 0;
    // Rotate image if necessary.
    if (dg != 0) {
        g.ctx.save();
        g.ctx.translate((x - this.cX) + (w / 2), (y - this.cY) + (h / 2));
        g.ctx.rotate(dg * (Math.PI / 180));
        g.ctx.drawImage(img, sx, sy, sw, sh, -w / 2, -h / 2, w, h);
        g.ctx.restore();
    } else {
        g.ctx.drawImage(img, sx, sy, sw, sh, x - this.cX, y - this.cY, w, h);
    };
};
// Load new Image
g.LNI = function (img, x, y, w, h, sc) {
    sc = sc || 5;
    var cv = document.createElement("canvas");
    cv.width = w * sc;
    cv.height = h * sc;
    var ctx = cv.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(img, x, y, w, h, 0, 0, w * sc, h * sc);
    return cv;
};
g.gRC = function (s, t) {
    s = s || 0;
    t = t || 16;
    var lt = '0123456789ABCDEF';
    var clr = '#';
    for (var i = 0; i < 6; i++) {
        clr += lt[Math.floor(g.mrn() * t) + s];
    }
    return clr;
}
g.gN = function (opc, w, h, s) {
    s = s || 0;
    var cv = document.createElement("canvas"),
        ctx = cv.getContext('2d'),
        x, y,
        nmb,
        opc = opc || .2;

    cv.width = w;
    cv.height = h;

    for (x = 0; x < cv.width; x++) {
        for (y = 0; y < cv.height; y++) {
            nmb = Math.floor(g.mrn() * 70) + s;

            ctx.fillStyle = "rgba(" + nmb + "," + nmb + "," + nmb + "," + opc + ")";
            ctx.fillRect(x, y, 1, 1);
        }
    }

    return cv;
}
g.gad = function (clr, sz, tx, s, gr) {
    var cv = document.createElement("canvas"),
        ctx = cv.getContext("2d"),
        txt = g.gN(tx, sz, sz, s);
    cv.width = sz;
    cv.height = sz;

    if (gr) {
        var grd = ctx.createRadialGradient(sz / 2, sz / 2, 0, sz / 2, sz / 2, sz / 2);
        grd.addColorStop(0, clr);
        grd.addColorStop(1, "white");
        clr = grd;
    } else {
        clr = clr;
    }


    ctx.fillStyle = clr;
    ctx.globalAlpha = 1;
    ctx.beginPath();
    ctx.arc(sz / 2, sz / 2, sz / 2, 0, 2 * Math.PI);
    ctx.fill();

    ctx.globalCompositeOperation = "source-atop";
    ctx.drawImage(txt, 0, 0, sz, sz);
    return cv;
}
