L.ply = new g.cs();

L.Hscore = 0;
L.score = 0;
L.planetsDisc = 0;
L.starsDisc = 0;
L.TplanetsDisc = 0;

L.TstarsDisc = 0;
L.plyIn = function () {

    aa.play("drag");


    L.hoverText = {
        cd: [],
        text: function (text, x, y, color) {
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
                life: 100,
            });
        },
        ud: function () {
            for (var i = 0; i < this.cd.length; i++) {
                this.cd[i].life--;
                if (this.cd[i].life <= 0) {
                    this.cd[i].life = 0;
                    this.cd[i].act = false;
                }
            }
        },
        rd: function () {
            for (var i = 0; i < this.cd.length; i++) {
                if (this.cd[i].act) {
                    var cd = this.cd[i];
                    g.ctx.globalAlpha = cd.life / 100;
                    g.dT(cd.text, cd.x - g.c.x, cd.y - (g.c.y - (cd.life * 2) + 200), 8, true, cd.color);
                }
            }
        },

    };
    L.score = 0;
    L.planetsDisc = 0;
    L.starsDisc = 0;

    L.raido = {
        cur: Math.floor(Math.random() * 12),
        rd: function () {
            g.dT(L.raido.text[this.cur], this.loc, g.c.h - 35, 5, false, "#ffffff");
            //console.log(L.raido.cur)
        },
        ud: function () {
            L.raido.text[0] = "we have discovered " + L.planetsDisc + " diffrent planets on this hopeless voyage.";
            L.raido.text[1] = "Sir, we have discovered " + L.starsDisc + " new stars on our journy.";
            L.raido.loc -= 3;
            if (L.raido.loc < -2000) {
                L.raido.loc = g.c.w;
                L.raido.cur = Math.floor(Math.random() * L.raido.text.length);
            }
        },

        loc: g.c.w + 100,
        text: [
            "we have discovered " + L.planetsDisc + " different planets on this hopeless voyage.",
            "Sir - we have discovered " + L.starsDisc + " new stars on our journy.",
            "your ship is equipped with a high powered solar panel - find stars to refuel your starcraft.",
            "remember to land on planets to refuel your ship captain!",
            "your ship is equipped with a high powered solar panel - find stars to refuel your starcraft.",
            "remember to land on planets to refuel your ship captain!",
            "your ship is equipped with a high powered solar panel - find stars to refuel your starcraft.",
            "remember to land on planets to refuel your ship captain!",
            "We truly are lost out here... I dont recognize any of these planets.",
            "watch out for alien ships - they are rarely friendly.",
            "Sir - i told you to listen to the king - now we will never find our way home!",
            "Try not to crash into asteroids - They do heaps of damage to our paint-job.",
            "rember sir - astroids and planets orbit stars. see if you can find new stars by watching how the astroids move.",
            "lets see if we can find a binary star system. They are supposed to be some of the rarest things out here.",
            "I doubt we will ever be able to find our way home now.",
            "dont let the ship loose all its energy. If it does - it will implode.",
        ],

    };


    L.shwNms = function () {
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
    }
    L.fadTxt = {
        tm: 200,
        c: "#ffffff",
        tx: "",
        rd: function () {
            if (this.tm <= 0) {
                this.tm = 0;
            }
            g.ctx.globalAlpha = this.tm / 100;
            g.dT(this.tx, g.c.w / 2, g.c.h / 3, 8, true, this.c);
        },
        set: function (tx, c) {
            this.c = c || this.c;
            this.tx = tx;
            this.tm = 200;
        },
        pud: function () {
            this.tm--;
        },

    };
    L.bltc = function (o, j) {
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
    }
    L.flsh = false;
    L.psys = {
        cld: [],
        spn: function (x, y, vx, vy, c) {

            for (var i = 0; i < this.cld.length; i++) {
                if (!this.cld[i].act) {
                    var h = this.cld[i]
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
                c: c || "#454545",
            });

        },
        spnM: function (x, y, c, n) {
            for (var i = 0; i < n * g.scf; i++) {
                this.spn(x, y, g.mrn() * 20 - 10, g.mrn() * 20 - 10, c);
            }

        },
        ud: function () {
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
        rd: function () {
            for (var i = 0; i < this.cld.length; i++) {

                var h = this.cld[i];
                if (h.act) {
                    g.ctx.fillStyle = h.c;
                    g.ctx.globalAlpha = h.lf / 100;
                    g.ctx.fillRect(h.x - g.c.x - 5 * g.scf, h.y - g.c.y - 5 * g.scf, 10 * g.scf, 10 * g.scf);
                }
            }
        },
    }

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

    L.ply.bck.spn = function () {
        if (!tg) {
            tg = true;
            for (var i = 0; i < 200; i++) {
                var s = L.ply.bck.acd();
                s.x = (g.mrn() * g.c.w) + g.c.x;
                s.y = (g.mrn() * g.c.h) + g.c.y;
                s.w = 15 * g.scf;
                s.h = 15 * g.scf;
                s.ud = function (r) {
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
                }
            }
        }
    }
    L.ply.bt = new g.sp();
    L.ply.bt.lf = 100;
    L.ply.bt.img = L.ast.bt;
    L.ply.bto = new g.gr(L.ply.bt);

    L.ply.bto.spn = function (x, y, dx, dy, vx, vy, tp) {
        var tx = dx - x,
            ty = dy - y,
            dist = Math.sqrt(tx * tx + ty * ty);

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


        b.vx += (tx / dist) * 25;
        b.vy += (ty / dist) * 25;
    };

    L.ply.bt.ud = function (t) {
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


L.ply.in = function () {
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
    g.a = 0.7;
    L.ply.plr = new g.sp({

        x: 0,
        y: 0,
        img: L.ast.plr,
        ud: function (d) {
            if (g.mabC()) {
                L.ply.plr.dg = (Math.atan2(direc.ty, direc.tx) * 180.0 / Math.PI) + 90;
            } else {
                var dX = g.p.x - (window.innerWidth / 2);
                var dY = g.p.y - (window.innerHeight / 2);
                L.ply.plr.dg = (Math.atan2(dY, dX) * 180.0 / Math.PI) + 90;
            }
            L.ply.plr.vx *= 0.98;
            L.ply.plr.vy *= 0.98;

        },
        w: 16 * 5,
        h: 16 * 5,
    });
    L.ply.plr.w *= g.scf;
    L.ply.plr.h *= g.scf;
    L.ply.plr.x = 0;
    L.ply.plr.y = 0;
    g.cx = 0;
    g.cy = 0;
    L.ply.plr.swp = true;



};

L.ply.rd = function () {
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
    g.ctx.fillRect(20 * g.scf, 20 * g.scf, (L.ply.pwr / 100) * 300 * g.scf, 40 * g.scf);
    g.ctx.fillStyle = "#ff0000";
    g.ctx.strokeRect(20 * g.scf, 80 * g.scf, 300 * g.scf, 40 * g.scf);
    g.ctx.fillRect(20 * g.scf, 80 * g.scf, (L.ply.hp / 100) * 300 * g.scf, 40 * g.scf);
    g.ctx.globalAlpha = 1;
    g.dT("Energy", 30 * g.scf, 25 * g.scf, 6);
    g.dT("Health", 30 * g.scf, 85 * g.scf, 6);
    g.dT("Score: " + L.score, 30 * g.scf, 145 * g.scf, 6);

    if (L.ply.reHeal) {
        g.dT("Repairing ship" + ".".repeat((g.tm % 60) / 15), g.c.w / 2, g.c.h / 2 - 100, 5, true, "#00ff00");
    }
    g.ctx.globalAlpha = 1;
    if (L.ply.reFul) {
        g.dT("Refueling ship" + ".".repeat((g.tm % 60) / 15), g.c.w / 2, g.c.h / 2 - 100, 5, true, "#00ff00");
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
        if (Math.random() > 0.975) {
            L.flsh = 1;
            var rx = Math.random() * g.c.w + g.c.x;
            var ry = Math.random() * g.c.h + g.c.y;
            aa.play("explosion");
            L.psys.spnM(rx, ry, "#f7931e", 50);
            L.psys.spnM(rx, ry, "#545454", 20);
        }
        g.ctx.fillStyle = "#000000";
        g.ctx.globalAlpha = 0.4;
        g.ctx.fillRect(0, 0, g.c.w, g.c.h);
        g.ctx.globalAlpha = 1;
        g.dT("Game Over", g.c.w / 2, g.c.h / 3, 15, true);
        g.dT("click anywhere to continue.", g.c.w / 2, g.c.h / 3 + 90, 5, true);
    }
};
L.ply.ud = function () {
    L.flsh -= 0.1;
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
            L.ply.pwr -= 0.04;
            var tx = x - sx,
                ty = y - sy,
                dist = Math.sqrt(tx * tx + ty * ty);
            //console.log(tx, ty)
            direc.tx = tx;
            direc.ty = ty;
            direc.dist = dist;
            aa.play("blast");
            L.ply.plr.vx += (tx / dist) * g.scf;
            L.ply.plr.vy += (ty / dist) * g.scf;
            //console.log((tx / dist) * g.mrn() * -3);
            for (var k = 0; k < 3; k++) {
                L.psys.spn(L.ply.plr.cx, L.ply.plr.cy, (tx / dist) * g.mrn() * -6, (ty / dist) * g.mrn() * -6, "#f7931e");
            }
        }

    }
}
L.ply.rMH = function (x, y, sx, sy) {
    if (g.mabC()) {
        //console.log(x, y, sx, sy)
        if (sx < window.innerWidth / 2) {
            plyInpt(x, y, sx, sy);
        }

    } else {
        plyInpt(x, y, window.innerWidth / 2, window.innerHeight / 2);
    }
    if (L.ply.pwr <= 0 || L.ply.hp <= 0) {
        g.sc(L.gmOv);
    }
}

L.ply.lMD = function (x, y) {
    if (L.ply.pwr <= 0 || L.ply.hp <= 0) {
        g.sc(L.gmOv);
    }
    if (!g.mabC()) {

        if (L.ply.pwr >= 1) {

            L.ply.bto.spn(L.ply.plr.cx, L.ply.plr.cy, (x + g.c.x), (y + g.c.y), L.ply.plr.vx, L.ply.plr.vy, 0);
            L.ply.pwr -= 0.5;
            aa.play("laser");
        }



    } else {
        if (x > window.innerWidth / 2) {
            if (L.ply.pwr >= 1) {

                L.ply.bto.spn(L.ply.plr.cx, L.ply.plr.cy, L.ply.plr.cx + (direc.tx / direc.dist), L.ply.plr.cy + (direc.ty / direc.dist), L.ply.plr.vx, L.ply.plr.vy, 0);
                L.ply.pwr -= 0.5;
                aa.play("laser");
            }
        }
    }

}
