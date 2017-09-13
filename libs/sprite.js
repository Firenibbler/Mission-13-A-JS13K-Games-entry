g.sp = function (a) {
    a = a || {};
    var j = this;
    // Is the sprite locked to the screen.
    j.lk = a.lk || false;
    // Active
    j.act = true;
    // Position
    j.x = a.x || 0;
    j.y = a.y || 0;
    // Size
    j.w = a.w || 50;
    j.h = a.h || 50;
    // Radius
    j.r = a.r || 25;
    // Center positions.
    j.cx = 25;
    j.cy = 25;
    // Velocity
    j.vx = 0;
    j.vy = 0;
    // Degrees
    j.dg = a.dg || 0;
    j.swp = false;
    j.shw = 0;
    // Image
    j.img = a.img;
    // Render
    j.rd = a.rd || function () {
        var t = this;
        if (t.act == true) {

            if (g.bbc(g.c, t)) {
                var by = 0;
                var fc = 1;
                if (t.swp === true) {
                    by = Math.round((g.tm % 5) / 5);
                    fc = 0.5;
                }

                g.bmp(t.img, t.x, t.y, t.w, t.h, t.img.width * fc * by, 0, t.img.width * fc, t.img.height, t.dg, a.lk);
            }
        }
    };
    // Update
    j.ud = a.ud || n0;
    j.pud = function () {
        var t = this;
        if (t.act == true) {

            t.x += t.vx;
            t.y += t.vy;
            t.cx = t.x + t.w / 2;
            t.cy = t.y + t.h / 2;
            t.ud(this);
        }

    };
    // Check mouse over.
    j.cmo = function () {
        var t = this,
            lkx = 0,
            lky = 0;
        // Set position on if its locked or not.
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
    // Reset the sprite;

};
// Group
g.gr = function (a) {
    a = a || {};
    var j = this;
    // Sprite to use as a template.
    j.temp = a || new g.sp();

    j.cd = [];
    // creates and returns a new object
    j.acd = function (x, y) {
        for (var i = 0; i < j.cd.length; i++) {
            if (!j.cd[i].act) {
                j.cd[i].x = x;
                j.cd[i].y = y;
                j.cd[i].act = true;
                return j.cd[i];
            }
        }
        var num = j.cd.push(new g.sp(j.temp))
        return j.cd[num - 1];
    }
    j.rd = function () {
        for (var i = 0; i < j.cd.length; i++) {
            j.cd[i].rd();
        }
    }
    j.pud = function () {
        for (var i = 0; i < j.cd.length; i++) {
            j.cd[i].pud();
        }
    }
};
