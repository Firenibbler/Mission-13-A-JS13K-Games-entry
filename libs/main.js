// Base game varaible
var g = {};

g.mabC = function () {
    if (window.innerWidth <= 800 || window.innerHeight <= 600) {
        return true;
    } else {
        return false;
    }
};

// Number of ticks passed since the game started.
g.tm = 0;
// Game refresh alpha value.
g.a = 1;
// Game canvas.
g.cv = document.getElementById("canvas");
// Game context.
g.ctx = g.cv.getContext("2d");
// Game canvas position.
g.cX = 0;
g.cY = 0;
g.c = {};
g.scf = 1;
g.useMob = false;
if (g.mabC()) {
    g.scf = 0.5;
    g.useMob = true;
}
g.mrn = function () {
    return Math.random();
}
g.mrd = function (h) {
    return Math.round(h);
}
g.flr = function (h) {
    return Math.floor(h);
}
// Smaller empty function.
var n0 = function () {};
g.cs = function () {
    var t = this;
    t.in = n0;
    // Update function, 30FPS
    t.ud = n0;
    // Render function, 60FPS
    t.rd = n0;
    t.lMD = n0;
    t.rMD = n0;
    t.lMH = n0;
    t.rMH = n0;
    // Pre-Update function
    t.pud = function () {

        g.c.x = g.cX;
        g.c.y = g.cY;
        g.c.w = g.cv.width;
        g.c.h = g.cv.height;
        // Check game screen size.
        if (g.cv.width != window.innerWidth || g.cv.height != window.innerHeight) {
            g.cv.width = window.innerWidth;
            g.cv.height = window.innerHeight;
            g.cv.style.width = window.innerWidth;
            g.cv.style.height = window.innerHeight;
        }
    };
    // Pre-Render function
    t.prd = function () {
        g.ctx.globalAlpha = g.a;
        g.ctx.fillStyle = "#111122";
        g.ctx.fillRect(0, 0, g.cv.width, g.cv.height);
    };
};
// Switch stages.
g.sc = function (a) {
    a.in();
    g.ds = a;
    g.ctx.imageSmoothingEnabled = false;

};
// Base stage.
g.ds = new g.cs();

// Box Box collision check
g.bbc = function (r1, r2) {
    // check if they are overlapping
    if (r1.x <= r2.x + r2.w && r1.x + r1.w >= r2.x &&
        r1.y <= r2.y + r2.h && r1.y + r1.h > r2.y) {
        // If they are colliding, return true
        return true;
    } else {
        // If they are not colliding, return false
        return false;
    }
};

function ccCl(c1, c2) {
    // check if they are overlapping
    if (Math.sqrt((c1.cx - c2.cx) * (c1.cx - c2.cx) +
            (c1.cy - c2.cy) * (c1.cy - c2.cy)) < c1.r + c2.r) {
        // If they are colliding, return true
        return true;
    } else {
        // If they are not colliding, return false
        return false;
    }
};

function rtPt(ob, oX, oY, dg) {
    var x1 = ob.cx - oX;
    var y1 = ob.cy - oY;

    var x2 = x1 * Math.cos(dg) - y1 * Math.sin(dg);
    var y2 = x1 * Math.sin(dg) + y1 * Math.cos(dg);

    ob.x = x2 + oX - ob.w / 2;
    ob.y = y2 + oY - ob.h / 2;

}
