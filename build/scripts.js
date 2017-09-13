/*! Lost In Space 2.0 - Version: 2.0.0 - 2017-09-12 - Author: Firenibbler Studios */

var g = {};

g.mabC = function() {
    if (window.innerWidth <= 800 || window.innerHeight <= 600) {
        return true;
    } else {
        return false;
    }
};

g.tm = 0;

g.a = 1;

g.cv = document.getElementById("canvas");

g.ctx = g.cv.getContext("2d");

g.cX = 0;

g.cY = 0;

g.c = {};

g.scf = 1;

g.useMob = false;

if (g.mabC()) {
    g.scf = .5;
    g.useMob = true;
}

g.mrn = function() {
    return Math.random();
};

g.mrd = function(h) {
    return Math.round(h);
};

g.flr = function(h) {
    return Math.floor(h);
};

var n0 = function() {};

g.cs = function() {
    var t = this;
    t.in = n0;
    t.ud = n0;
    t.rd = n0;
    t.lMD = n0;
    t.rMD = n0;
    t.lMH = n0;
    t.rMH = n0;
    t.pud = function() {
        g.c.x = g.cX;
        g.c.y = g.cY;
        g.c.w = g.cv.width;
        g.c.h = g.cv.height;
        if (g.cv.width != window.innerWidth || g.cv.height != window.innerHeight) {
            g.cv.width = window.innerWidth;
            g.cv.height = window.innerHeight;
            g.cv.style.width = window.innerWidth;
            g.cv.style.height = window.innerHeight;
        }
    };
    t.prd = function() {
        g.ctx.globalAlpha = g.a;
        g.ctx.fillStyle = "#111122";
        g.ctx.fillRect(0, 0, g.cv.width, g.cv.height);
    };
};

g.sc = function(a) {
    a.in();
    g.ds = a;
    g.ctx.imageSmoothingEnabled = false;
};

g.ds = new g.cs();

g.bbc = function(r1, r2) {
    if (r1.x <= r2.x + r2.w && r1.x + r1.w >= r2.x && r1.y <= r2.y + r2.h && r1.y + r1.h > r2.y) {
        return true;
    } else {
        return false;
    }
};

function ccCl(c1, c2) {
    if (Math.sqrt((c1.cx - c2.cx) * (c1.cx - c2.cx) + (c1.cy - c2.cy) * (c1.cy - c2.cy)) < c1.r + c2.r) {
        return true;
    } else {
        return false;
    }
}

function rtPt(ob, oX, oY, dg) {
    var x1 = ob.cx - oX;
    var y1 = ob.cy - oY;
    var x2 = x1 * Math.cos(dg) - y1 * Math.sin(dg);
    var y2 = x1 * Math.sin(dg) + y1 * Math.cos(dg);
    ob.x = x2 + oX - ob.w / 2;
    ob.y = y2 + oY - ob.h / 2;
}

g.t = {
    fps: 30
};

g.tm = 0;

(function al() {
    window.requestAnimationFrame(al);
    g.ds.prd();
    g.ds.rd(g.tm);
    g.ctx.closePath();
    g.ctx.beginPath();
    for (var i = 0; i < g.cv.height / 5; i++) {
        g.ctx.moveTo(0, i * 5 + .5);
        g.ctx.lineTo(g.cv.width, i * 5 + .5);
    }
    if (window.innerHeight > window.innerWidth && g.dT) {
        g.ctx.globalAlpha = 1;
        g.ctx.fillStyle = "#111122";
        g.ctx.fillRect(0, 0, g.c.w, g.c.h);
        g.dT("Please rotate your device.", g.c.w / 2, g.c.h / 2, 6, true);
    }
    g.ctx.strokeStyle = "#777777";
    g.ctx.globalAlpha = .2;
    g.ctx.stroke();
    g.ctx.globalAlpha = 1;
})();

var tU = function() {
    g.p.ud();
    g.ds.pud();
    g.ds.ud(g.tm++);
};

window.setInterval(tU, 1e3 / 30);

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
    lH: false,
    rH: false
};

g.tp = [ {
    x: 0,
    y: 0,
    sx: 0,
    sy: 0,
    H: false
}, {
    x: 0,
    y: 0,
    sx: 0,
    sy: 0,
    H: false
} ];

g.p.ud = function() {
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
        var num = e.touches.length - 1;
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
    }
}

function up(e) {
    if (g.useMob) {
        var num = e.touches.length;
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
}

g.p.pd = function(e) {
    e.cancelBubble = true;
    e.returnValue = false;
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
};

if (g.useMob) {
    document.addEventListener("touchmove", function(e) {
        var num = e.touches.length - 1;
        g.tp[num].x = e.touches[num].pageX - g.cv.offsetLeft;
        g.tp[num].y = e.touches[num].pageY - g.cv.offsetTop;
        e.cancelBubble = true;
        e.returnValue = false;
        if (e.stopPropagation) e.stopPropagation();
    }, false);
    document.addEventListener("touchstart", down, false);
    document.addEventListener("touchend", up, false);
    document.addEventListener("mousedown", requestFS, false);
} else {
    document.addEventListener("mousemove", function(e) {
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

g.bmp = function(img, x, y, w, h, sx, sy, sw, sh, dg, lk) {
    if (!lk) {
        this.cX = g.cX;
        this.cY = g.cY;
    } else {
        this.cX = 0;
        this.cY = 0;
    }
    sx = sx || 0;
    sy = sy || 0;
    sw = sw || img.width;
    sh = sh || img.height;
    w = w || img.width;
    h = h || img.height;
    dg = dg || 0;
    if (dg != 0) {
        g.ctx.save();
        g.ctx.translate(x - this.cX + w / 2, y - this.cY + h / 2);
        g.ctx.rotate(dg * (Math.PI / 180));
        g.ctx.drawImage(img, sx, sy, sw, sh, -w / 2, -h / 2, w, h);
        g.ctx.restore();
    } else {
        g.ctx.drawImage(img, sx, sy, sw, sh, x - this.cX, y - this.cY, w, h);
    }
};

g.LNI = function(img, x, y, w, h, sc) {
    sc = sc || 5;
    var cv = document.createElement("canvas");
    cv.width = w * sc;
    cv.height = h * sc;
    var ctx = cv.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(img, x, y, w, h, 0, 0, w * sc, h * sc);
    return cv;
};

g.gRC = function(s, t) {
    s = s || 0;
    t = t || 16;
    var lt = "0123456789ABCDEF";
    var clr = "#";
    for (var i = 0; i < 6; i++) {
        clr += lt[Math.floor(g.mrn() * t) + s];
    }
    return clr;
};

g.gN = function(opc, w, h, s) {
    s = s || 0;
    var cv = document.createElement("canvas"), ctx = cv.getContext("2d"), x, y, nmb, opc = opc || .2;
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
};

g.gad = function(clr, sz, tx, s, gr) {
    var cv = document.createElement("canvas"), ctx = cv.getContext("2d"), txt = g.gN(tx, sz, sz, s);
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
};

g.sp = function(a) {
    a = a || {};
    var j = this;
    j.lk = a.lk || false;
    j.act = true;
    j.x = a.x || 0;
    j.y = a.y || 0;
    j.w = a.w || 50;
    j.h = a.h || 50;
    j.r = a.r || 25;
    j.cx = 25;
    j.cy = 25;
    j.vx = 0;
    j.vy = 0;
    j.dg = a.dg || 0;
    j.swp = false;
    j.shw = 0;
    j.img = a.img;
    j.rd = a.rd || function() {
        var t = this;
        if (t.act == true) {
            if (g.bbc(g.c, t)) {
                var by = 0;
                var fc = 1;
                if (t.swp === true) {
                    by = Math.round(g.tm % 5 / 5);
                    fc = .5;
                }
                g.bmp(t.img, t.x, t.y, t.w, t.h, t.img.width * fc * by, 0, t.img.width * fc, t.img.height, t.dg, a.lk);
            }
        }
    };
    j.ud = a.ud || n0;
    j.pud = function() {
        var t = this;
        if (t.act == true) {
            t.x += t.vx;
            t.y += t.vy;
            t.cx = t.x + t.w / 2;
            t.cy = t.y + t.h / 2;
            t.ud(this);
        }
    };
    j.cmo = function() {
        var t = this, lkx = 0, lky = 0;
        if (!t.lk) {
            lkx = g.cX;
            lky = g.cY;
        }
        if (g.p.x > t.x - lkx && g.p.x < t.x - lkx + t.w && g.p.y > t.y - lky && g.p.y < t.y - lky + t.h) {
            return true;
        } else {
            return false;
        }
    };
};

g.gr = function(a) {
    a = a || {};
    var j = this;
    j.temp = a || new g.sp();
    j.cd = [];
    j.acd = function(x, y) {
        for (var i = 0; i < j.cd.length; i++) {
            if (!j.cd[i].act) {
                j.cd[i].x = x;
                j.cd[i].y = y;
                j.cd[i].act = true;
                return j.cd[i];
            }
        }
        var num = j.cd.push(new g.sp(j.temp));
        return j.cd[num - 1];
    };
    j.rd = function() {
        for (var i = 0; i < j.cd.length; i++) {
            j.cd[i].rd();
        }
    };
    j.pud = function() {
        for (var i = 0; i < j.cd.length; i++) {
            j.cd[i].pud();
        }
    };
};

var letters = letters = {
    A: [ [ , 1 ], [ 1, , 1 ], [ 1, , 1 ], [ 1, 1, 1 ], [ 1, , 1 ] ],
    B: [ [ 1, 1 ], [ 1, , 1 ], [ 1, 1, 1 ], [ 1, , 1 ], [ 1, 1 ] ],
    C: [ [ 1, 1, 1 ], [ 1 ], [ 1 ], [ 1 ], [ 1, 1, 1 ] ],
    D: [ [ 1, 1 ], [ 1, , 1 ], [ 1, , 1 ], [ 1, , 1 ], [ 1, 1 ] ],
    E: [ [ 1, 1, 1 ], [ 1 ], [ 1, 1, 1 ], [ 1 ], [ 1, 1, 1 ] ],
    F: [ [ 1, 1, 1 ], [ 1 ], [ 1, 1 ], [ 1 ], [ 1 ] ],
    G: [ [ , 1, 1 ], [ 1 ], [ 1, , 1, 1 ], [ 1, , , 1 ], [ , 1, 1 ] ],
    H: [ [ 1, , 1 ], [ 1, , 1 ], [ 1, 1, 1 ], [ 1, , 1 ], [ 1, , 1 ] ],
    I: [ [ 1, 1, 1 ], [ , 1 ], [ , 1 ], [ , 1 ], [ 1, 1, 1 ] ],
    J: [ [ 1, 1, 1 ], [ , , 1 ], [ , , 1 ], [ 1, , 1 ], [ 1, 1, 1 ] ],
    K: [ [ 1, , , 1 ], [ 1, , 1 ], [ 1, 1 ], [ 1, , 1 ], [ 1, , , 1 ] ],
    L: [ [ 1 ], [ 1 ], [ 1 ], [ 1 ], [ 1, 1, 1 ] ],
    M: [ [ 1, 1, 1, 1, 1 ], [ 1, , 1, , 1 ], [ 1, , 1, , 1 ], [ 1, , , , 1 ], [ 1, , , , 1 ] ],
    N: [ [ 1, , , 1 ], [ 1, 1, , 1 ], [ 1, , 1, 1 ], [ 1, , , 1 ], [ 1, , , 1 ] ],
    O: [ [ 1, 1, 1 ], [ 1, , 1 ], [ 1, , 1 ], [ 1, , 1 ], [ 1, 1, 1 ] ],
    P: [ [ 1, 1, 1 ], [ 1, , 1 ], [ 1, 1, 1 ], [ 1 ], [ 1 ] ],
    Q: [ [ 0, 1, 1 ], [ 1, , , 1 ], [ 1, , , 1 ], [ 1, , 1, 1 ], [ 1, 1, 1, 1 ] ],
    R: [ [ 1, 1 ], [ 1, , 1 ], [ 1, , 1 ], [ 1, 1 ], [ 1, , 1 ] ],
    S: [ [ 1, 1, 1 ], [ 1 ], [ 1, 1, 1 ], [ , , 1 ], [ 1, 1, 1 ] ],
    T: [ [ 1, 1, 1 ], [ , 1 ], [ , 1 ], [ , 1 ], [ , 1 ] ],
    U: [ [ 1, , 1 ], [ 1, , 1 ], [ 1, , 1 ], [ 1, , 1 ], [ 1, 1, 1 ] ],
    V: [ [ 1, , , , 1 ], [ 1, , , , 1 ], [ , 1, , 1 ], [ , 1, , 1 ], [ , , 1 ] ],
    W: [ [ 1, , , , 1 ], [ 1, , , , 1 ], [ 1, , , , 1 ], [ 1, , 1, , 1 ], [ 1, 1, 1, 1, 1 ] ],
    X: [ [ 1, , , , 1 ], [ , 1, , 1 ], [ , , 1 ], [ , 1, , 1 ], [ 1, , , , 1 ] ],
    Y: [ [ 1, , 1 ], [ 1, , 1 ], [ , 1 ], [ , 1 ], [ , 1 ] ],
    Z: [ [ 1, 1, 1, 1, 1 ], [ , , , 1 ], [ , , 1 ], [ , 1 ], [ 1, 1, 1, 1, 1 ] ],
    "0": [ [ , 1 ], [ 1, , 1 ], [ 1, , 1 ], [ 1, , 1 ], [ , 1 ] ],
    "1": [ [ , 1 ], [ 1, 1 ], [ , 1 ], [ , 1 ], [ 1, 1, 1 ] ],
    "2": [ [ , 1, 1 ], [ 1, , , 1 ], [ , , 1 ], [ , 1 ], [ 1, 1, 1, 1 ] ],
    "3": [ [ 1, 1, 1 ], [ , , , 1 ], [ , 1, 1 ], [ , , , 1 ], [ 1, 1, 1 ] ],
    "4": [ [ , , 1, 1 ], [ , 1, , 1 ], [ 1, , , 1 ], [ 1, 1, 1, 1 ], [ , , , 1 ] ],
    "5": [ [ 1, 1, 1, 1 ], [ 1 ], [ 1, 1, 1, 1 ], [ , , , 1 ], [ 1, 1, 1 ] ],
    "6": [ [ , 1, 1 ], [ 1 ], [ 1, 1, 1 ], [ 1, , , 1 ], [ , 1, 1 ] ],
    "7": [ [ 1, 1, 1, 1 ], [ , , , 1 ], [ , , 1 ], [ , , 1 ], [ , , 1 ] ],
    "8": [ [ , 1, 1 ], [ 1, , , 1 ], [ , 1, 1 ], [ 1, , , 1 ], [ , 1, 1 ] ],
    "9": [ [ , 1, 1 ], [ 1, , , 1 ], [ , 1, 1, 1 ], [ , , , 1 ], [ , 1, 1 ] ],
    ".": [ [ , ,  ], [ , ,  ], [ , ,  ], [ , ,  ], [ , , 1 ] ],
    " ": [ [ , ,  ], [ , ,  ], [ , ,  ], [ , ,  ], [ , ,  ] ],
    _: [ [ , ,  ], [ , ,  ], [ , ,  ], [ , ,  ], [ 1, 1, 1, 1 ] ],
    ":": [ [ , ,  ], [ 1, ,  ], [ , ,  ], [ 1, ,  ], [ , ,  ] ],
    "-": [ [ , ,  ], [ , ,  ], [ 1, 1, 1 ], [ , ,  ], [ , ,  ] ],
    "+": [ [ , ,  ], [ , 1 ], [ 1, 1, 1 ], [ , 1 ], [ , ,  ] ]
};

g.dT = function(str, X, Y, sz, cnt, clr) {
    sz = sz || 5;
    sz = sz * g.scf;
    var needed = [];
    str = str.toUpperCase();
    for (var i = 0; i < str.length; i++) {
        var letter = letters[str.charAt(i)];
        if (letter) {
            needed.push(letter);
        }
    }
    var width = 0;
    var offsetX = 0;
    if (cnt) {
        for (i = 0; i < needed.length; i++) {
            for (i = 0; i < needed.length; i++) {
                letter = needed[i];
                var currY = Y;
                var addX = 0;
                for (var y = 0; y < letter.length; y++) {
                    var row = letter[y];
                    addX = Math.max(addX, row.length * sz);
                }
                width += sz + addX;
            }
        }
    }
    X = X - width / 2;
    g.ctx.fillStyle = clr || "#FFFFFF";
    var currX = X;
    for (i = 0; i < needed.length; i++) {
        letter = needed[i];
        var currY = Y;
        var addX = 0;
        for (var y = 0; y < letter.length; y++) {
            var row = letter[y];
            for (var x = 0; x < row.length; x++) {
                if (row[x]) {
                    g.ctx.fillRect(currX + x * sz, currY, sz, sz);
                }
            }
            addX = Math.max(addX, row.length * sz);
            currY += sz;
        }
        currX += sz + addX;
        width += sz + addX;
    }
    return width;
};

var aa = {};

function SfxrParams() {
    this.setSettings = function(values) {
        for (var i = 0; i < 24; i++) {
            this[String.fromCharCode(97 + i)] = values[i] || 0;
        }
        if (this["c"] < .01) {
            this["c"] = .01;
        }
        var totalTime = this["b"] + this["c"] + this["e"];
        if (totalTime < .18) {
            var multiplier = .18 / totalTime;
            this["b"] *= multiplier;
            this["c"] *= multiplier;
            this["e"] *= multiplier;
        }
    };
}

function SfxrSynth() {
    this._params = new SfxrParams();
    var _envelopeLength0, _envelopeLength1, _envelopeLength2, _period, _maxPeriod, _slide, _deltaSlide, _changeAmount, _changeTime, _changeLimit, _squareDuty, _dutySweep;
    this.reset = function() {
        var p = this._params;
        _period = 100 / (p["f"] * p["f"] + .001);
        _maxPeriod = 100 / (p["g"] * p["g"] + .001);
        _slide = 1 - p["h"] * p["h"] * p["h"] * .01;
        _deltaSlide = -p["i"] * p["i"] * p["i"] * 1e-6;
        if (!p["a"]) {
            _squareDuty = .5 - p["n"] / 2;
            _dutySweep = -p["o"] * 5e-5;
        }
        _changeAmount = 1 + p["l"] * p["l"] * (p["l"] > 0 ? -.9 : 10);
        _changeTime = 0;
        _changeLimit = p["m"] == 1 ? 0 : (1 - p["m"]) * (1 - p["m"]) * 2e4 + 32;
    };
    this.totalReset = function() {
        this.reset();
        var p = this._params;
        _envelopeLength0 = p["b"] * p["b"] * 1e5;
        _envelopeLength1 = p["c"] * p["c"] * 1e5;
        _envelopeLength2 = p["e"] * p["e"] * 1e5 + 12;
        return ((_envelopeLength0 + _envelopeLength1 + _envelopeLength2) / 3 | 0) * 3;
    };
    this.synthWave = function(buffer, length) {
        var p = this._params;
        var _filters = p["s"] != 1 || p["v"], _hpFilterCutoff = p["v"] * p["v"] * .1, _hpFilterDeltaCutoff = 1 + p["w"] * 3e-4, _lpFilterCutoff = p["s"] * p["s"] * p["s"] * .1, _lpFilterDeltaCutoff = 1 + p["t"] * 1e-4, _lpFilterOn = p["s"] != 1, _masterVolume = p["x"] * p["x"], _minFreqency = p["g"], _phaser = p["q"] || p["r"], _phaserDeltaOffset = p["r"] * p["r"] * p["r"] * .2, _phaserOffset = p["q"] * p["q"] * (p["q"] < 0 ? -1020 : 1020), _repeatLimit = p["p"] ? ((1 - p["p"]) * (1 - p["p"]) * 2e4 | 0) + 32 : 0, _sustainPunch = p["d"], _vibratoAmplitude = p["j"] / 2, _vibratoSpeed = p["k"] * p["k"] * .01, _waveType = p["a"];
        var _envelopeLength = _envelopeLength0, _envelopeOverLength0 = 1 / _envelopeLength0, _envelopeOverLength1 = 1 / _envelopeLength1, _envelopeOverLength2 = 1 / _envelopeLength2;
        var _lpFilterDamping = 5 / (1 + p["u"] * p["u"] * 20) * (.01 + _lpFilterCutoff);
        if (_lpFilterDamping > .8) {
            _lpFilterDamping = .8;
        }
        _lpFilterDamping = 1 - _lpFilterDamping;
        var _finished = false, _envelopeStage = 0, _envelopeTime = 0, _envelopeVolume = 0, _hpFilterPos = 0, _lpFilterDeltaPos = 0, _lpFilterOldPos, _lpFilterPos = 0, _periodTemp, _phase = 0, _phaserInt, _phaserPos = 0, _pos, _repeatTime = 0, _sample, _superSample, _vibratoPhase = 0;
        var _phaserBuffer = new Array(1024), _noiseBuffer = new Array(32);
        for (var i = _phaserBuffer.length; i--; ) {
            _phaserBuffer[i] = 0;
        }
        for (var i = _noiseBuffer.length; i--; ) {
            _noiseBuffer[i] = Math.random() * 2 - 1;
        }
        for (var i = 0; i < length; i++) {
            if (_finished) {
                return i;
            }
            if (_repeatLimit) {
                if (++_repeatTime >= _repeatLimit) {
                    _repeatTime = 0;
                    this.reset();
                }
            }
            if (_changeLimit) {
                if (++_changeTime >= _changeLimit) {
                    _changeLimit = 0;
                    _period *= _changeAmount;
                }
            }
            _slide += _deltaSlide;
            _period *= _slide;
            if (_period > _maxPeriod) {
                _period = _maxPeriod;
                if (_minFreqency > 0) {
                    _finished = true;
                }
            }
            _periodTemp = _period;
            if (_vibratoAmplitude > 0) {
                _vibratoPhase += _vibratoSpeed;
                _periodTemp *= 1 + Math.sin(_vibratoPhase) * _vibratoAmplitude;
            }
            _periodTemp |= 0;
            if (_periodTemp < 8) {
                _periodTemp = 8;
            }
            if (!_waveType) {
                _squareDuty += _dutySweep;
                if (_squareDuty < 0) {
                    _squareDuty = 0;
                } else if (_squareDuty > .5) {
                    _squareDuty = .5;
                }
            }
            if (++_envelopeTime > _envelopeLength) {
                _envelopeTime = 0;
                switch (++_envelopeStage) {
                  case 1:
                    _envelopeLength = _envelopeLength1;
                    break;

                  case 2:
                    _envelopeLength = _envelopeLength2;
                }
            }
            switch (_envelopeStage) {
              case 0:
                _envelopeVolume = _envelopeTime * _envelopeOverLength0;
                break;

              case 1:
                _envelopeVolume = 1 + (1 - _envelopeTime * _envelopeOverLength1) * 2 * _sustainPunch;
                break;

              case 2:
                _envelopeVolume = 1 - _envelopeTime * _envelopeOverLength2;
                break;

              case 3:
                _envelopeVolume = 0;
                _finished = true;
            }
            if (_phaser) {
                _phaserOffset += _phaserDeltaOffset;
                _phaserInt = _phaserOffset | 0;
                if (_phaserInt < 0) {
                    _phaserInt = -_phaserInt;
                } else if (_phaserInt > 1023) {
                    _phaserInt = 1023;
                }
            }
            if (_filters && _hpFilterDeltaCutoff) {
                _hpFilterCutoff *= _hpFilterDeltaCutoff;
                if (_hpFilterCutoff < 1e-5) {
                    _hpFilterCutoff = 1e-5;
                } else if (_hpFilterCutoff > .1) {
                    _hpFilterCutoff = .1;
                }
            }
            _superSample = 0;
            for (var j = 8; j--; ) {
                _phase++;
                if (_phase >= _periodTemp) {
                    _phase %= _periodTemp;
                    if (_waveType == 3) {
                        for (var n = _noiseBuffer.length; n--; ) {
                            _noiseBuffer[n] = Math.random() * 2 - 1;
                        }
                    }
                }
                switch (_waveType) {
                  case 0:
                    _sample = _phase / _periodTemp < _squareDuty ? .5 : -.5;
                    break;

                  case 1:
                    _sample = 1 - _phase / _periodTemp * 2;
                    break;

                  case 2:
                    _pos = _phase / _periodTemp;
                    _pos = (_pos > .5 ? _pos - 1 : _pos) * 6.28318531;
                    _sample = 1.27323954 * _pos + .405284735 * _pos * _pos * (_pos < 0 ? 1 : -1);
                    _sample = .225 * ((_sample < 0 ? -1 : 1) * _sample * _sample - _sample) + _sample;
                    break;

                  case 3:
                    _sample = _noiseBuffer[Math.abs(_phase * 32 / _periodTemp | 0)];
                }
                if (_filters) {
                    _lpFilterOldPos = _lpFilterPos;
                    _lpFilterCutoff *= _lpFilterDeltaCutoff;
                    if (_lpFilterCutoff < 0) {
                        _lpFilterCutoff = 0;
                    } else if (_lpFilterCutoff > .1) {
                        _lpFilterCutoff = .1;
                    }
                    if (_lpFilterOn) {
                        _lpFilterDeltaPos += (_sample - _lpFilterPos) * _lpFilterCutoff;
                        _lpFilterDeltaPos *= _lpFilterDamping;
                    } else {
                        _lpFilterPos = _sample;
                        _lpFilterDeltaPos = 0;
                    }
                    _lpFilterPos += _lpFilterDeltaPos;
                    _hpFilterPos += _lpFilterPos - _lpFilterOldPos;
                    _hpFilterPos *= 1 - _hpFilterCutoff;
                    _sample = _hpFilterPos;
                }
                if (_phaser) {
                    _phaserBuffer[_phaserPos % 1024] = _sample;
                    _sample += _phaserBuffer[(_phaserPos - _phaserInt + 1024) % 1024];
                    _phaserPos++;
                }
                _superSample += _sample;
            }
            _superSample *= .125 * _envelopeVolume * _masterVolume;
            buffer[i] = _superSample >= 1 ? 32767 : _superSample <= -1 ? -32768 : _superSample * 32767 | 0;
        }
        return length;
    };
}

var synth = new SfxrSynth();

window["jsfxr"] = function(settings) {
    synth._params.setSettings(settings);
    var envelopeFullLength = synth.totalReset();
    var data = new Uint8Array(((envelopeFullLength + 1) / 2 | 0) * 4 + 44);
    var used = synth.synthWave(new Uint16Array(data.buffer, 44), envelopeFullLength) * 2;
    var dv = new Uint32Array(data.buffer, 0, 44);
    dv[0] = 1179011410;
    dv[1] = used + 36;
    dv[2] = 1163280727;
    dv[3] = 544501094;
    dv[4] = 16;
    dv[5] = 65537;
    dv[6] = 44100;
    dv[7] = 88200;
    dv[8] = 1048578;
    dv[9] = 1635017060;
    dv[10] = used;
    used += 44;
    var i = 0, base64Characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", output = "data:audio/wav;base64,";
    for (;i < used; i += 3) {
        var a = data[i] << 16 | data[i + 1] << 8 | data[i + 2];
        output += base64Characters[a >> 18] + base64Characters[a >> 12 & 63] + base64Characters[a >> 6 & 63] + base64Characters[a & 63];
    }
    return output;
};

function ArcadeAudio() {
    this.sounds = {};
}

ArcadeAudio.prototype.add = function(key, count, settings) {
    this.sounds[key] = [];
    settings.forEach(function(elem, index) {
        this.sounds[key].push({
            tick: 0,
            count: count,
            pool: []
        });
        for (var i = 0; i < count; i++) {
            var audio = new Audio();
            audio.src = jsfxr(elem);
            this.sounds[key][index].pool.push(audio);
        }
    }, this);
};

ArcadeAudio.prototype.play = function(key) {
    var sound = this.sounds[key];
    var soundData = sound.length > 1 ? sound[Math.floor(Math.random() * sound.length)] : sound[0];
    soundData.pool[soundData.tick].play();
    soundData.tick < soundData.count - 1 ? soundData.tick++ : soundData.tick = 0;
};

aa = new ArcadeAudio();

function initSound() {
    aa.add("powerup", 10, [ [ 0, , .3031, , .4677, .2373, , .2269, , , , , , .517, , .4301, , , 1, , , , , .75 ] ]);
    aa.add("laser", 5, [ [ 1, .1, .01, , .27, .26, , .28, .8999, , , , , , , .4889, , , .41, , , , -.04, .5 ] ]);
    aa.add("explosion", 20, [ [ 3, , .81, .82, .58, .5887, , .7006, , .9252, .4987, .3531, .6627, .1847, .2327, -.0622, .0286, .0708, .6351, -.0936, , .0033, 1e-4, 1 ] ]);
    aa.add("drag", 30, [ [ 3, , .1, .2494, .1638, .1948, , .0232, , , , , , , , , , , 1, , , , , .5 ] ]);
    aa.add("blast", 30, [ [ 3, , .1, .2494, .1638, .1948, , .0232, , , , , , , , , , , 1, , , , , .1 ] ]);
    aa.add("hit", 30, [ [ 3, , .11, .4136, .3501, .0876, , -.077, , , , , , , , , , , 1, , , , , .5 ] ]);
}

if (g.mabC()) {
    aa.play = n0;
}

var L = {};

L.ast = {};

var loaded = false;

L.ast.img = new Image();

L.ast.img.src = "assets/assets.png";

L.ast.img.onload = function() {
    var img = L.ast.img, as = L.ast;
    loaded = true;
    initSound();
};

L.stNames = [ "AQUARIUS", "AQUILA", "ARA", "ARIES", "AURIGA", "BOOTES", "CAELUM", "CAMELOPARDALIS", "CANCER", "CANES VENATICI", "CANIS", "CAPRICORNUS", "CARINA", "CASSIOPEIA", "CENTAURUS", "CEPHEUS", "CETUS", "CHAMAELEON", "CIRCINUS", "CRUX", "CYGNUS", "DELPHINUS", "DRACO", "EQUULEUS", "FORNAX", "GRUS", "HOROLOGIUM", "HYDRUS", "LACERTA", "LEO", "LEPUS", "LUPUS", "MENSA", "MUSCA", "NORMA", "ORION", "PAVO", "PEGASUS", "PHONEX", "PYXIS", "SAGITTA", "SCORPIUS", "SEXTANS", "TAURUS", "TUCANA", "MORENCI", "URSA", "VELA", "SIRIUSBLK", "VOLANS", "MOAB", "TUCSON" ];

L.stNames2 = [ "ALPHA", "BETA", "GAMMA", "THETA", "ZETA", "IOTA", "RATU", "XI", "DELTA", "OMICRON", "EPSILON", "CHI", "LAMBDA", "ETA", "ROH", "PSI", "SIGMA", "TAU", "MU", "UPSILON" ];

L.ast.p = [];

L.genP = function(n) {
    if (n < 100) {
        L.ast.p[n] = g.gad(g.gRC(), Math.floor(g.mrn() * 30) + 30, g.mrn() / 3 + .2);
    }
};

L.ast.s = [];

L.genS = function(n) {
    if (n < 100) {
        L.ast.s[n] = g.gad(g.gRC(4, 12), Math.floor(g.mrn() * 75) + 150, g.mrn() / 3 + .1, 254 - 70, true);
    }
};

L.ast.a = [];

L.genA = function(n) {
    if (n < 100) {
        L.ast.a[n] = g.gad(g.gRC(8, 2), Math.floor(g.mrn() * 10) + 10, g.mrn() / 2 + .5);
    }
};

L.prl = new g.cs();

L.prl.fd = 1e-4;

L.prl.ud = function(n) {};

L.rtm = 0;

L.genP(L.rtm);

L.genS(L.rtm);

L.genA(L.rtm);

L.rtm++;

L.prl.rd = function(n) {
    L.genP(L.rtm);
    L.genS(L.rtm);
    L.genA(L.rtm);
    L.rtm++;
    if (L.rtm > 100) {
        L.rtm = 100;
    }
    if (!loaded || L.rtm < 100) {
        g.dT("Loading" + ".".repeat(g.tm % 12 / 3), g.c.w / 2, g.c.h / 2, 5, true);
    } else {
        g.dT("loaded - click or tap to play.", g.c.w / 2, g.c.h / 2, 5, true);
    }
    g.ctx.fillRect(g.c.w / 2 - 150, g.c.h / 2 + 50, L.rtm * 3, 20 * g.scf);
    g.dT("warning - this game may cause seizures", g.c.w / 2, g.c.h / 2 + 90, 3, true, "#ff0000");
    if (g.mabC) {
        g.dT("move your ship by dragging your finger across the left side of the screen.", g.c.w / 2, g.c.h - 50, 4, true);
        g.dT("Shoot by tapping the right side.", g.c.w / 2, g.c.h - 25, 4, true);
    } else {
        g.dT("Navagate your ship with the right mouse button - shoot with the left.", g.c.w / 2, g.c.h - 50, 4, true);
    }
};

L.prl.lMD = function() {
    if (loaded && L.rtm >= 100) {
        L.prl.fd = 0;
        g.sc(L.srt);
    }
};

L.prl.rMD = function() {
    if (loaded && L.rtm >= 100) {
        L.prl.fd = 0;
        g.sc(L.srt);
    }
};

g.sc(L.prl);

L.srt = new g.cs();

L.srt.fd = 0;

L.srt.ud = function(n) {
    if (Math.floor(g.tm % 300) == 10) {
        L.tipNum = Math.floor(Math.random() * L.tips.length);
    }
};

L.tips = [ "Find stars to refuel your starcraft.", "Press f11 to get a full-screen view of the game.", "land on planets to repair your ship.", "Find stars and planets to refuel and repair your space ship.", "navigate the depths of space using your right mouse button.", "shoot enemy ships and asteroids with the left mouse button.", "Finding stars and planets give you a much higher score.", "share this game on facebook to see who can discover most!", "tweet your score on this game to show how much you have explored.", "share your score on social media and see who can get the highest." ];

L.srt.str = [];

L.srt.in = function() {
    L.tipNum = Math.floor(Math.random() * L.tips.length);
    L.ast.e = [];
    L.ast.bt = g.LNI(L.ast.img, 24, 16, 4, 4, 5);
    L.ast.bt2 = g.LNI(L.ast.img, 28, 16, 4, 4, 5);
    L.ast.plr = g.LNI(L.ast.img, 0, 0, 32, 16, 5);
    L.ast.e[0] = g.LNI(L.ast.img, 0, 16, 24, 16, 5);
    L.ast.e[1] = g.LNI(L.ast.img, 0, 32, 28, 16, 5);
    L.ast.e[2] = g.LNI(L.ast.img, 0, 48, 28, 16, 5);
    L.ast.str = g.LNI(L.ast.img, 24, 20, 3, 3, 5);
    L.ast.pnt = g.LNI(L.ast.img, 24, 23, 7, 7, 5);
    L.pln.cd = [];
    L.ard.cd = [];
    L.str.cd = [];
    L.sis = [];
    L.TplanetsDisc = Number(loadData("planets")) || 0;
    L.TstarsDisc = Number(loadData("stars")) || 0;
    L.Hscore = Number(loadData("highscore")) || 0;
    for (var i = 0; i < 200; i++) {
        L.srt.str[i] = {
            x: Math.random() * g.c.w,
            y: Math.random() * g.c.h
        };
    }
};

L.srt.rd = function(n) {
    g.ctx.globalAlpha = 1;
    g.cX = 0;
    g.cY = 0;
    for (var i = 0; i < 200; i++) {
        g.bmp(L.ast.str, L.srt.str[i].x, L.srt.str[i].y, 15 * g.scf, 15 * g.scf, 0, 0, 15, 15, 0);
    }
    g.bmp(L.ast.s[0], 0 - L.ast.s[0].width / 2 * 5 * g.scf, g.c.h - L.ast.s[0].height / 2 * 5 * g.scf, L.ast.s[0].width * 5 * g.scf, L.ast.s[0].height * 5 * g.scf, 0, 0, L.ast.s[0].width, L.ast.s[0].height, g.tm * 100);
    g.bmp(L.ast.p[0], g.c.w / 3 * 2, g.c.h / 3 * 2, L.ast.p[0].width * 5 * g.scf, L.ast.p[0].height * 5 * g.scf, 0, 0, L.ast.p[0].width, L.ast.p[0].height, g.tm / 10);
    g.bmp(L.ast.p[1], g.c.w / 3, g.c.h / 3, L.ast.p[1].width * 5 * g.scf, L.ast.p[1].height * 5 * g.scf, 0, 0, L.ast.p[1].width, L.ast.p[1].height, g.tm / -10);
    g.dT("Mission 13 - lost in space", g.c.w / 2, 30 * g.scf, 10, true);
    g.dT("Click Anywhere To Play", g.c.w / 2, 100 * g.scf, 8, true);
    g.dT("a firenibbler studios production", g.c.w / 2, g.c.h - 100, 5, true, "#ffffff");
    g.dT("tip - " + L.tips[L.tipNum], g.c.w / 2, g.c.h - 50, 4, true);
    g.dT("HIGH SCORE: " + L.Hscore, g.c.w / 2, 160 * g.scf, 5, true);
    g.dT("TOTAL PLANETS FOUND: " + L.TplanetsDisc, g.c.w / 2, 200 * g.scf, 5, true);
    g.dT("TOTAL STARS FOUND: " + L.TstarsDisc, g.c.w / 2, 240 * g.scf, 5, true);
};

L.srt.lMD = function() {
    g.sc(L.ply);
};

L.srt.rMD = function() {
    g.sc(L.ply);
};

L.ply = new g.cs();

L.Hscore = 0;

L.score = 0;

L.planetsDisc = 0;

L.starsDisc = 0;

L.TplanetsDisc = 0;

L.TstarsDisc = 0;

L.plyIn = function() {
    aa.play("drag");
    L.hoverText = {
        cd: [],
        text: function(text, x, y, color) {
            for (var i = 0; i < this.cd.length; i++) {
                if (!this.cd[i].act) {
                    this.cd[i].text = text;
                    this.cd[i].x = x;
                    this.cd[i].y = y;
                    this.cd[i].color = color || "#ffffff";
                    this.cd[i].act = true;
                    this.cd[i].life = 100;
                    return;
                }
            }
            this.cd.push({
                text: text,
                x: x,
                y: y,
                color: color || "#ffffff",
                act: true,
                life: 100
            });
        },
        ud: function() {
            for (var i = 0; i < this.cd.length; i++) {
                this.cd[i].life--;
                if (this.cd[i].life <= 0) {
                    this.cd[i].life = 0;
                    this.cd[i].act = false;
                }
            }
        },
        rd: function() {
            for (var i = 0; i < this.cd.length; i++) {
                if (this.cd[i].act) {
                    var cd = this.cd[i];
                    g.ctx.globalAlpha = cd.life / 100;
                    g.dT(cd.text, cd.x - g.c.x, cd.y - (g.c.y - cd.life * 2 + 200), 8, true, cd.color);
                }
            }
        }
    };
    L.score = 0;
    L.planetsDisc = 0;
    L.starsDisc = 0;
    L.raido = {
        cur: Math.floor(Math.random() * 12),
        rd: function() {
            g.dT(L.raido.text[this.cur], this.loc, g.c.h - 35, 5, false, "#ffffff");
        },
        ud: function() {
            L.raido.text[0] = "we have discovered " + L.planetsDisc + " diffrent planets on this hopeless voyage.";
            L.raido.text[1] = "Sir, we have discovered " + L.starsDisc + " new stars on our journy.";
            L.raido.loc -= 3;
            if (L.raido.loc < -2e3) {
                L.raido.loc = g.c.w;
                L.raido.cur = Math.floor(Math.random() * L.raido.text.length);
            }
        },
        loc: g.c.w + 100,
        text: [ "we have discovered " + L.planetsDisc + " different planets on this hopeless voyage.", "Sir - we have discovered " + L.starsDisc + " new stars on our journy.", "your ship is equipped with a high powered solar panel - find stars to refuel your starcraft.", "remember to land on planets to refuel your ship captain!", "your ship is equipped with a high powered solar panel - find stars to refuel your starcraft.", "remember to land on planets to refuel your ship captain!", "your ship is equipped with a high powered solar panel - find stars to refuel your starcraft.", "remember to land on planets to refuel your ship captain!", "We truly are lost out here... I dont recognize any of these planets.", "watch out for alien ships - they are rarely friendly.", "Sir - i told you to listen to the king - now we will never find our way home!", "Try not to crash into asteroids - They do heaps of damage to our paint-job.", "rember sir - astroids and planets orbit stars. see if you can find new stars by watching how the astroids move.", "lets see if we can find a binary star system. They are supposed to be some of the rarest things out here.", "I doubt we will ever be able to find our way home now.", "dont let the ship loose all its energy. If it does - it will implode." ]
    };
    L.shwNms = function() {
        for (var i = 0; i < L.pln.cd.length; i++) {
            var pln = L.pln.cd[i];
            if (pln.act) {
                if (g.bbc(pln, g.c)) {
                    g.dT(pln.name, pln.cx - g.c.x, pln.y - g.c.y - 70, 5, true);
                }
            }
        }
        for (var i = 0; i < L.str.cd.length; i++) {
            var str = L.str.cd[i];
            if (str.act) {
                if (g.bbc(str, g.c)) {
                    g.dT(str.name, str.cx - g.c.x, str.y - g.c.y - 70, 5, true);
                }
            }
        }
    };
    L.fadTxt = {
        tm: 200,
        c: "#ffffff",
        tx: "",
        rd: function() {
            if (this.tm <= 0) {
                this.tm = 0;
            }
            g.ctx.globalAlpha = this.tm / 100;
            g.dT(this.tx, g.c.w / 2, g.c.h / 3, 8, true, this.c);
        },
        set: function(tx, c) {
            this.c = c || this.c;
            this.tx = tx;
            this.tm = 200;
        },
        pud: function() {
            this.tm--;
        }
    };
    L.bltc = function(o, j) {
        for (var i = 0; i < j.cd.length; i++) {
            var v = j.cd[i];
            if (v.act && o.tp == 0) {
                if (ccCl(o, v)) {
                    o.act = false;
                    v.hp -= 10;
                    aa.play("hit");
                    L.psys.spnM(o.cx, o.cy, "#0000ff", 10);
                    L.score += 10;
                    g.cX += Math.random() * 40 - 20;
                    g.cY += Math.random() * 40 - 20;
                }
            }
        }
    };
    L.flsh = false;
    L.psys = {
        cld: [],
        spn: function(x, y, vx, vy, c) {
            for (var i = 0; i < this.cld.length; i++) {
                if (!this.cld[i].act) {
                    var h = this.cld[i];
                    h.act = true;
                    h.x = x;
                    h.y = y;
                    h.vx = vx;
                    h.vy = vy;
                    h.lf = 50;
                    h.c = c || "#454545";
                    return h;
                }
            }
            this.cld.push({
                act: true,
                x: x,
                y: y,
                vx: vx,
                vy: vy,
                lf: 50,
                c: c || "#454545"
            });
        },
        spnM: function(x, y, c, n) {
            for (var i = 0; i < n * g.scf; i++) {
                this.spn(x, y, g.mrn() * 20 - 10, g.mrn() * 20 - 10, c);
            }
        },
        ud: function() {
            for (var i = 0; i < this.cld.length; i++) {
                var h = this.cld[i];
                h.x += h.vx;
                h.y += h.vy;
                h.lf--;
                if (h.lf <= 0) {
                    h.act = false;
                }
            }
        },
        rd: function() {
            for (var i = 0; i < this.cld.length; i++) {
                var h = this.cld[i];
                if (h.act) {
                    g.ctx.fillStyle = h.c;
                    g.ctx.globalAlpha = h.lf / 100;
                    g.ctx.fillRect(h.x - g.c.x - 5 * g.scf, h.y - g.c.y - 5 * g.scf, 10 * g.scf, 10 * g.scf);
                }
            }
        }
    };
    L.ply.plr = new g.sp();
    L.ply.pwr = 100;
    L.ply.hp = 100;
    L.ply.bk = new g.sp();
    L.ply.bk.img = L.ast.str;
    L.ply.bk.w = 15 * g.scf;
    L.ply.bk.h = 15 * g.scf;
    L.ply.bck = new g.gr(L.ply.bk);
    L.ply.isSp = false;
    var tg = false;
    L.ply.bck.spn = function() {
        if (!tg) {
            tg = true;
            for (var i = 0; i < 200; i++) {
                var s = L.ply.bck.acd();
                s.x = g.mrn() * g.c.w + g.c.x;
                s.y = g.mrn() * g.c.h + g.c.y;
                s.w = 15 * g.scf;
                s.h = 15 * g.scf;
                s.ud = function(r) {
                    if (r.x + 15 < g.c.x) {
                        r.x = g.c.x + g.c.w;
                        r.y = g.c.y + Math.random() * g.c.h;
                    }
                    if (r.x > g.c.x + g.c.w) {
                        r.x = g.c.x - 15;
                        r.y = g.c.y + Math.random() * g.c.h;
                    }
                    if (r.y + 15 < g.c.y) {
                        r.y = g.c.y + g.c.h;
                        r.x = g.c.x + Math.random() * g.c.w;
                    }
                    if (r.y > g.c.y + g.c.h) {
                        r.y = g.c.y - 15;
                        r.x = g.c.x + Math.random() * g.c.w;
                    }
                };
            }
        }
    };
    L.ply.bt = new g.sp();
    L.ply.bt.lf = 100;
    L.ply.bt.img = L.ast.bt;
    L.ply.bto = new g.gr(L.ply.bt);
    L.ply.bto.spn = function(x, y, dx, dy, vx, vy, tp) {
        var tx = dx - x, ty = dy - y, dist = Math.sqrt(tx * tx + ty * ty);
        var b = L.ply.bto.acd(x, y);
        b.w = 20 * g.scf;
        b.h = 20 * g.scf;
        b.tp = tp || 0;
        b.lf = 100;
        if (tp) {
            b.img = L.ast.bt;
        } else {
            b.img = L.ast.bt2;
        }
        b.x = x - 10;
        b.y = y - 10;
        b.vx = vx || 0;
        b.vy = vy || 0;
        b.vx += tx / dist * 25;
        b.vy += ty / dist * 25;
    };
    L.ply.bt.ud = function(t) {
        t.lf--;
        if (t.lf < 0) {
            t.act = false;
        }
        L.bltc(t, L.ard);
        L.bltc(t, L.enm);
        if (L.ply.plr.act && t.tp == 1) {
            if (ccCl(t, L.ply.plr)) {
                t.act = false;
                L.ply.hp -= 10;
                L.psys.spnM(t.cx, t.cy, "#ff0000", 10);
                L.score += 10;
            }
        }
    };
};

L.ply.in = function() {
    L.plyIn();
    tg = false;
    L.ply.hp = 100;
    L.ply.pwr = 100;
    L.ply.bk.img = L.ast.str;
    L.pln.cd = [];
    L.ard.cd = [];
    L.str.cd = [];
    L.ply.bck.cd = [];
    L.sis = [];
    g.a = .7;
    L.ply.plr = new g.sp({
        x: 0,
        y: 0,
        img: L.ast.plr,
        ud: function(d) {
            if (g.mabC()) {
                L.ply.plr.dg = Math.atan2(direc.ty, direc.tx) * 180 / Math.PI + 90;
            } else {
                var dX = g.p.x - window.innerWidth / 2;
                var dY = g.p.y - window.innerHeight / 2;
                L.ply.plr.dg = Math.atan2(dY, dX) * 180 / Math.PI + 90;
            }
            L.ply.plr.vx *= .98;
            L.ply.plr.vy *= .98;
        },
        w: 16 * 5,
        h: 16 * 5
    });
    L.ply.plr.w *= g.scf;
    L.ply.plr.h *= g.scf;
    L.ply.plr.x = 0;
    L.ply.plr.y = 0;
    g.cx = 0;
    g.cy = 0;
    L.ply.plr.swp = true;
};

L.ply.rd = function() {
    g.ctx.globalAlpha = 1;
    L.ply.bck.rd();
    L.str.rd();
    L.pln.rd();
    L.ard.rd();
    g.ctx.globalAlpha = 1;
    if (L.flsh > 0) {
        g.ctx.globalAlpha = L.flsh;
        g.ctx.fillStyle = "#ffaa00";
        g.ctx.fillRect(0, 0, g.c.w, g.c.h);
    }
    g.ctx.globalAlpha = 1;
    L.ply.bto.rd();
    L.psys.rd();
    g.ctx.globalAlpha = 1;
    L.enm.rd();
    L.ply.plr.rd();
    L.fadTxt.rd();
    g.ctx.globalAlpha = 1;
    L.shwNms();
    g.ctx.globalAlpha = 1;
    L.hoverText.rd();
    g.ctx.globalAlpha = 1;
    g.ctx.fillStyle = "#000000";
    g.ctx.fillRect(20 * g.scf, 20 * g.scf, 300 * g.scf, 40 * g.scf);
    g.ctx.fillRect(20 * g.scf, 80 * g.scf, 300 * g.scf, 40 * g.scf);
    if (L.ply.pwr <= 0) {
        L.ply.pwr = 0;
    }
    if (L.ply.hp <= 0) {
        L.ply.hp = 0;
    }
    g.ctx.globalAlpha = 1;
    L.raido.rd();
    g.ctx.globalAlpha = 1;
    g.ctx.fillStyle = "#0000ff";
    g.ctx.strokeStyle = "#ffffff";
    g.ctx.globalAlpha = 1;
    g.ctx.strokeRect(20 * g.scf, 20 * g.scf, 300 * g.scf, 40 * g.scf);
    g.ctx.fillRect(20 * g.scf, 20 * g.scf, L.ply.pwr / 100 * 300 * g.scf, 40 * g.scf);
    g.ctx.fillStyle = "#ff0000";
    g.ctx.strokeRect(20 * g.scf, 80 * g.scf, 300 * g.scf, 40 * g.scf);
    g.ctx.fillRect(20 * g.scf, 80 * g.scf, L.ply.hp / 100 * 300 * g.scf, 40 * g.scf);
    g.ctx.globalAlpha = 1;
    g.dT("Energy", 30 * g.scf, 25 * g.scf, 6);
    g.dT("Health", 30 * g.scf, 85 * g.scf, 6);
    g.dT("Score: " + L.score, 30 * g.scf, 145 * g.scf, 6);
    if (L.ply.reHeal) {
        g.dT("Repairing ship" + ".".repeat(g.tm % 60 / 15), g.c.w / 2, g.c.h / 2 - 100, 5, true, "#00ff00");
    }
    g.ctx.globalAlpha = 1;
    if (L.ply.reFul) {
        g.dT("Refueling ship" + ".".repeat(g.tm % 60 / 15), g.c.w / 2, g.c.h / 2 - 100, 5, true, "#00ff00");
    }
    g.ctx.globalAlpha = 1;
    if (L.ply.pwr <= 0 || L.ply.hp <= 0) {
        if (L.ply.plr.act) {
            L.flsh = 1;
            aa.play("explosion");
            L.psys.spnM(L.ply.plr.cx, L.ply.plr.cy, "#f7931e", 100);
            L.psys.spnM(L.ply.plr.cx, L.ply.plr.cy, "#545454", 40);
            L.ply.plr.act = false;
        }
        if (Math.random() > .975) {
            L.flsh = 1;
            var rx = Math.random() * g.c.w + g.c.x;
            var ry = Math.random() * g.c.h + g.c.y;
            aa.play("explosion");
            L.psys.spnM(rx, ry, "#f7931e", 50);
            L.psys.spnM(rx, ry, "#545454", 20);
        }
        g.ctx.fillStyle = "#000000";
        g.ctx.globalAlpha = .4;
        g.ctx.fillRect(0, 0, g.c.w, g.c.h);
        g.ctx.globalAlpha = 1;
        g.dT("Game Over", g.c.w / 2, g.c.h / 3, 15, true);
        g.dT("click anywhere to continue.", g.c.w / 2, g.c.h / 3 + 90, 5, true);
    }
};

L.ply.ud = function() {
    L.flsh -= .1;
    L.ply.reHeal = false;
    L.ply.reFul = false;
    L.spSis();
    L.psys.ud();
    L.ply.bck.pud();
    L.ply.plr.pud();
    L.raido.ud();
    L.fadTxt.pud();
    L.pln.pud();
    L.ard.pud();
    L.enm.pud();
    L.str.pud();
    L.hoverText.ud();
    L.ply.bto.pud();
    g.cX = L.ply.plr.cx - window.innerWidth / 2;
    g.cY = L.ply.plr.cy - window.innerHeight / 2;
    if (L.ply.bck.isSp) {
        L.ply.bck.spn();
        L.ply.bck.isSp = false;
    }
    if (L.ply.pwr > 100) {
        L.ply.pwr = 100;
    }
    L.ply.bck.isSp = true;
};

var direc = {};

direc.tx = 0;

direc.ty = 0;

direc.dist = 0;

function plyInpt(x, y, sx, sy) {
    sx = sx || .001;
    sy = sy || .001;
    if (L.ply.pwr > 0) {
        if (x != sx || y != sy) {
            L.ply.pwr -= .04;
            var tx = x - sx, ty = y - sy, dist = Math.sqrt(tx * tx + ty * ty);
            direc.tx = tx;
            direc.ty = ty;
            direc.dist = dist;
            aa.play("blast");
            L.ply.plr.vx += tx / dist * g.scf;
            L.ply.plr.vy += ty / dist * g.scf;
            for (var k = 0; k < 3; k++) {
                L.psys.spn(L.ply.plr.cx, L.ply.plr.cy, tx / dist * g.mrn() * -6, ty / dist * g.mrn() * -6, "#f7931e");
            }
        }
    }
}

L.ply.rMH = function(x, y, sx, sy) {
    if (g.mabC()) {
        if (sx < window.innerWidth / 2) {
            plyInpt(x, y, sx, sy);
        }
    } else {
        plyInpt(x, y, window.innerWidth / 2, window.innerHeight / 2);
    }
    if (L.ply.pwr <= 0 || L.ply.hp <= 0) {
        g.sc(L.gmOv);
    }
};

L.ply.lMD = function(x, y) {
    if (L.ply.pwr <= 0 || L.ply.hp <= 0) {
        g.sc(L.gmOv);
    }
    if (!g.mabC()) {
        if (L.ply.pwr >= 1) {
            L.ply.bto.spn(L.ply.plr.cx, L.ply.plr.cy, x + g.c.x, y + g.c.y, L.ply.plr.vx, L.ply.plr.vy, 0);
            L.ply.pwr -= .5;
            aa.play("laser");
        }
    } else {
        if (x > window.innerWidth / 2) {
            if (L.ply.pwr >= 1) {
                L.ply.bto.spn(L.ply.plr.cx, L.ply.plr.cy, L.ply.plr.cx + direc.tx / direc.dist, L.ply.plr.cy + direc.ty / direc.dist, L.ply.plr.vx, L.ply.plr.vy, 0);
                L.ply.pwr -= .5;
                aa.play("laser");
            }
        }
    }
};

L.p1 = new g.sp({
    x: 10,
    y: 10,
    img: L.ast.p[0],
    w: L.ast.p[0].width * 5 * g.scf,
    h: L.ast.p[0].height * 5 * g.scf
});

L.s1 = new g.sp({
    x: 1e3,
    y: 1e3,
    img: L.ast.s[0],
    w: L.ast.s[0].width * 5 * g.scf,
    h: L.ast.s[0].height * 5
});

L.a1 = new g.sp({
    x: -200,
    y: -200,
    img: L.ast.a[0],
    w: L.ast.a[0].width * 5 * g.scf,
    h: L.ast.a[0].height * 5 * g.scf
});

L.e1 = new g.sp({
    x: -200,
    y: -200,
    w: 16 * 5 * g.scf,
    h: 16 * 5 * g.scf
});

L.pln = new g.gr(L.p1);

L.ard = new g.gr(L.a1);

L.str = new g.gr(L.s1);

L.enm = new g.gr(L.e1);

L.sis = [];

var sisSz = 7e3;

L.spSis = function() {
    var x = L.ply.plr.x + g.mrn() * sisSz - sisSz / 2, y = L.ply.plr.y + g.mrn() * sisSz - sisSz / 2, spn = true;
    for (var i = 0; i < L.sis.length; i++) {
        if (Math.abs(L.sis[i].x - x) < sisSz * g.scf) {
            spn = false;
        }
        if (Math.abs(L.sis[i].y - y) < sisSz * g.scf) {
            spn = false;
        }
    }
    if (L.sis.length === 0) {
        spn = true;
    }
    if (spn) {
        var name = L.stNames[Math.floor(g.mrn() * L.stNames.length)] + " " + L.stNames2[Math.floor(g.mrn() * L.stNames2.length)];
        var n = L.sis.push({
            x: x,
            y: y,
            st: [],
            pl: [],
            as: [],
            al: [],
            name: name
        }) - 1;
        var number = 1;
        if (g.mrn() > .95) {
            number = 2;
        }
        for (var i = 0; i < number; i++) {
            var st = L.str.acd();
            st.ud = function(o) {
                rtPt(o, L.sis[n].x, L.sis[n].y, .001);
                o.dg += 100;
                if (ccCl(o, L.ply.plr)) {
                    L.ply.pwr += .1;
                    L.ply.reFul = true;
                    if (!o.disc) {
                        o.disc = true;
                        L.score += 1e3;
                        L.starsDisc++;
                        aa.play("powerup");
                        L.hoverText.text("+1000", L.ply.plr.cx, L.ply.plr.y - 50, "#00ff00");
                        L.fadTxt.set("You Discovered " + o.name + "!");
                    }
                }
            };
            st.img = L.ast.s[Math.floor(g.mrn() * 100)];
            st.w = st.img.width * 5 * g.scf;
            st.h = st.img.height * 5 * g.scf;
            st.r = st.w / 2;
            st.disc = false;
            if (i) {
                st.name = name + "-a";
                st.x = x - 700 - st.w / 2;
            } else {
                st.name = name + "-b";
                st.x = x + 700 - st.w / 2;
            }
            if (number === 1) {
                st.name = name;
                st.x = x - st.w / 2;
            }
            st.y = y;
            L.sis[n].st.push(st);
        }
        for (var i = 0; i < g.mrn() * 10 + 2; i++) {
            var pl = L.pln.acd();
            pl.ud = function(o) {
                rtPt(o, L.sis[n].x, L.sis[n].y, 5e-4);
                o.dg += .5;
                if (ccCl(o, L.ply.plr)) {
                    if (L.ply.hp < 100) {
                        L.ply.hp += .1;
                        L.ply.reHeal = true;
                    }
                    if (!o.disc) {
                        o.disc = true;
                        L.score += 250;
                        L.planetsDisc++;
                        aa.play("powerup");
                        L.hoverText.text("+250", L.ply.plr.cx, L.ply.plr.y - 50, "#00ff00");
                        L.fadTxt.set("You Discovered " + o.name + "!");
                    }
                }
            };
            pl.disc = false;
            pl.name = name + "-" + (i + 1);
            pl.r = pl.w / 2;
            pl.img = L.ast.p[Math.floor(g.mrn() * 100)];
            pl.w = pl.img.width * 5 * g.scf;
            pl.h = pl.img.height * 5 * g.scf;
            pl.r = pl.w / 2;
            var angle = Math.random() * Math.PI * 2;
            pl.x = Math.cos(angle) * (i + 2) * (sisSz / 10 * g.scf) + x;
            pl.y = Math.sin(angle) * (i + 2) * (sisSz / 10 * g.scf) + y;
            L.sis[n].pl.push(pl);
        }
        for (var i = 0; i < g.mrn() * 500 + 200; i++) {
            var pl = L.ard.acd();
            pl.ud = function(o) {
                rtPt(o, L.sis[n].x, L.sis[n].y, .001);
                o.dg += o.rot;
                if (ccCl(o, L.ply.plr)) {
                    L.ply.hp -= 1;
                    L.psys.spnM(L.ply.plr.cx, L.ply.plr.cy, "#545454", 4);
                    L.psys.spnM(L.ply.plr.cx, L.ply.plr.cy, "#f7931e", 2);
                    aa.play("drag");
                }
                if (o.hp <= 0) {
                    o.act = false;
                    L.flsh = 1;
                    L.score += 100;
                    L.hoverText.text("+100", o.cx, o.y - 50, "#00ff00");
                    aa.play("explosion");
                    L.psys.spnM(o.cx, o.cy, "#545454", 100);
                    L.psys.spnM(o.cx, o.cy, "#f7931e", 25);
                }
            };
            pl.rot = g.mrn() * 4 - 2;
            pl.img = L.ast.a[Math.floor(g.mrn() * 100)];
            pl.w = pl.img.width * 5 * g.scf;
            pl.h = pl.img.height * 5 * g.scf;
            pl.r = pl.w / 2;
            pl.hp = pl.w;
            var angle = Math.random() * Math.PI * 2;
            pl.x = Math.cos(angle) * (Math.random() * g.scf) * (sisSz * 1.2) + x;
            pl.y = Math.sin(angle) * (Math.random() * g.scf) * (sisSz * 1.2) + y;
            L.sis[n].as.push(pl);
        }
        for (var i = 0; i < g.mrn() * 20 + 30; i++) {
            var pl = L.enm.acd();
            pl.ud = function(o) {
                var dX = L.ply.plr.x - o.x, dY = L.ply.plr.y - o.y, tx = L.ply.plr.x - o.x, ty = L.ply.plr.y - o.y, dist = Math.sqrt(tx * tx + ty * ty);
                o.dg = Math.atan2(dY, dX) * 180 / Math.PI + 90;
                o.vx *= .98;
                o.vy *= .98;
                if (g.bbc(o, g.c)) {
                    L.psys.spn(o.cx, o.cy, tx / dist * g.mrn() * -6, ty / dist * g.mrn() * -6, "#f7931e");
                    L.psys.spn(o.cx, o.cy, tx / dist * g.mrn() * -6, ty / dist * g.mrn() * -6, "#f7931e");
                    L.psys.spn(o.cx, o.cy, tx / dist * g.mrn() * -6, ty / dist * g.mrn() * -6, "#f7931e");
                    o.seen = true;
                    if (Math.random() > .97) {
                        L.ply.bto.spn(o.cx, o.cy, L.ply.plr.cx + (Math.random() * 50 - 25), L.ply.plr.cy + (Math.random() * 50 - 25), o.vx, o.vy, 1);
                        aa.play("laser");
                    }
                } else {
                    o.seen = false;
                }
                if (o.seen) {
                    o.seen = true;
                    o.vx += tx / dist * g.scf;
                    o.vy += ty / dist * g.scf;
                }
                if (ccCl(o, L.ply.plr)) {
                    L.ply.hp -= 1;
                    o.hp -= 2;
                    aa.play("drag");
                    L.psys.spnM(L.ply.plr.cx, o.cy, "#545454", 3);
                    L.psys.spnM(L.ply.plr.cx, o.cy, "#f7931e", 2);
                }
                if (o.hp <= 0) {
                    o.act = false;
                    L.flsh = 1;
                    L.score += 150;
                    L.hoverText.text("+150", o.cx, o.y - 50, "#00ff00");
                    aa.play("explosion");
                    L.psys.spnM(o.cx, o.cy, "#f7931e", 50);
                    L.psys.spnM(o.cx, o.cy, "#545454", 20);
                }
            };
            pl.hp = g.mrn() * 10 + 5;
            pl.rot = g.mrn() * 4 - 2;
            pl.r = pl.w / 2;
            pl.img = L.ast.e[Math.floor(g.mrn() * 3)];
            pl.w = pl.img.width / 2 * g.scf;
            pl.h = pl.img.height * g.scf;
            var angle = Math.random() * Math.PI * 2;
            pl.x = Math.cos(angle) * (Math.random() * g.scf) * sisSz + x;
            pl.y = Math.sin(angle) * (Math.random() * g.scf) * sisSz + y;
            pl.swp = true;
            L.sis[n].al.push(pl);
        }
    }
};

function saveData(key, data) {
    localStorage[key] = JSON.stringify(data);
    localStorage.setItem("item", true);
}

function loadData(key) {
    return localStorage[key];
}

L.gmOv = new g.cs();

L.gmOv.in = function() {
    L.gmOv.cnt = 0;
    L.TplanetsDisc += L.planetsDisc;
    L.TstarsDisc += L.starsDisc;
    if (L.score > L.Hscore) {
        L.Hscore = L.score;
    }
    saveData("planets", L.TplanetsDisc);
    saveData("stars", L.TstarsDisc);
    saveData("highscore", L.Hscore);
    L.pln.cd.length = 0;
    L.ard.cd.length = 0;
    L.str.cd.length = 0;
    L.ply.bck.cd.length = 0;
    L.sis.length = 0;
    aa.play("drag");
};

L.gmOv.ud = function(n) {
    L.gmOv.cnt++;
    if (L.gmOv.cnt > 100) {
        L.gmOv.cnt = 100;
    }
};

L.gmOv.rd = function(n) {
    if (L.score > L.Hscore) {
        L.Hscore = L.score;
    }
    g.dT("Game over", g.c.w / 2, g.c.h / 3 - 130 * g.scf, 20, true);
    g.dT("HIGH SCORE: " + L.Hscore, g.c.w / 2, g.c.h / 3, 5, true);
    g.dT("SCORE: " + Math.round(L.score / 100 * L.gmOv.cnt), g.c.w / 2, g.c.h / 3 + 30 * g.scf, 5, true);
    g.dT("PLANETS FOUND: " + Math.round(L.planetsDisc / 100 * L.gmOv.cnt), g.c.w / 2, g.c.h / 3 + 60 * g.scf, 5, true);
    g.dT("STARS FOUND: " + Math.round(L.starsDisc / 100 * L.gmOv.cnt), g.c.w / 2, g.c.h / 3 + 90 * g.scf, 5, true);
    g.dT("TOTAL PLANETS FOUND: " + L.TplanetsDisc, g.c.w / 2, g.c.h / 3 + 120 * g.scf, 5, true);
    g.dT("TOTAL STARS FOUND: " + L.TstarsDisc, g.c.w / 2, g.c.h / 3 + 150 * g.scf, 5, true);
    g.dT("TIP - refuel and repair your ship at stars and planets.", g.c.w / 2, g.c.h - 50 * g.scf, 5, true);
};

L.gmOv.lMD = function() {
    if (L.gmOv.cnt >= 100) {
        g.sc(L.srt);
        aa.play("drag");
    }
};