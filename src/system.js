L.p1 = new g.sp({
    x: 10,
    y: 10,
    img: L.ast.p[0],
    w: L.ast.p[0].width * 5 * g.scf,
    h: L.ast.p[0].height * 5 * g.scf,
});
L.s1 = new g.sp({
    x: 1000,
    y: 1000,
    img: L.ast.s[0],
    w: L.ast.s[0].width * 5 * g.scf,
    h: L.ast.s[0].height * 5,
});
L.a1 = new g.sp({
    x: -200,
    y: -200,
    img: L.ast.a[0],
    w: L.ast.a[0].width * 5 * g.scf,
    h: L.ast.a[0].height * 5 * g.scf,
});
L.e1 = new g.sp({
    x: -200,
    y: -200,
    //img: L.ast.e[0],
    w: 16 * 5 * g.scf,
    h: 16 * 5 * g.scf,
});


L.pln = new g.gr(L.p1);
L.ard = new g.gr(L.a1);
L.str = new g.gr(L.s1);
L.enm = new g.gr(L.e1);

L.sis = [];
var sisSz = 7000;

L.spSis = function () {
    var x = L.ply.plr.x + g.mrn() * sisSz - sisSz / 2,
        y = L.ply.plr.y + g.mrn() * sisSz - sisSz / 2,
        spn = true;
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
            name: name,
        }) - 1;
        var number = 1;
        if (g.mrn() > 0.95) {
            number = 2;
        }
        // star code
        for (var i = 0; i < number; i++) {
            var st = L.str.acd();
            st.ud = function (o) {
                rtPt(o, L.sis[n].x, L.sis[n].y, 0.001);
                o.dg += 100;
                if (ccCl(o, L.ply.plr)) {
                    L.ply.pwr += 0.1;
                    L.ply.reFul = true;
                    if (!o.disc) {
                        o.disc = true;
                        L.score += 1000;
                        L.starsDisc++;
                        aa.play("powerup");
                        L.hoverText.text("+1000", L.ply.plr.cx, L.ply.plr.y - 50, "#00ff00");
                        L.fadTxt.set("You Discovered " + o.name + "!");
                    }
                }
            }
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

        // Planet code
        for (var i = 0; i < g.mrn() * 10 + 2; i++) {
            var pl = L.pln.acd();
            pl.ud = function (o) {
                rtPt(o, L.sis[n].x, L.sis[n].y, 0.0005);
                o.dg += 0.5;
                if (ccCl(o, L.ply.plr)) {
                    if (L.ply.hp < 100) {
                        L.ply.hp += 0.1;
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

            }
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

        // astroid code
        for (var i = 0; i < g.mrn() * 500 + 200; i++) {
            var pl = L.ard.acd();
            pl.ud = function (o) {
                rtPt(o, L.sis[n].x, L.sis[n].y, 0.001);
                o.dg += o.rot;
                if (ccCl(o, L.ply.plr)) {
                    L.ply.hp -= 1;
                    //L.psys.spn(L.ply.plr.cx, L.ply.plr.cy, g.mrn() * 6 - 3, g.mrn() * 6 - 3);
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

            }

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

        // enemy code
        for (var i = 0; i < g.mrn() * 20 + 30; i++) {
            var pl = L.enm.acd();
            pl.ud = function (o) {

                var dX = L.ply.plr.x - o.x,
                    dY = L.ply.plr.y - o.y,
                    tx = L.ply.plr.x - o.x,
                    ty = L.ply.plr.y - o.y,
                    dist = Math.sqrt(tx * tx + ty * ty);
                o.dg = (Math.atan2(dY, dX) * 180.0 / Math.PI) + 90;
                o.vx *= 0.98;
                o.vy *= 0.98;

                if (g.bbc(o, g.c)) {
                    L.psys.spn(o.cx, o.cy, (tx / dist) * g.mrn() * -6, (ty / dist) * g.mrn() * -6, "#f7931e");
                    L.psys.spn(o.cx, o.cy, (tx / dist) * g.mrn() * -6, (ty / dist) * g.mrn() * -6, "#f7931e");
                    L.psys.spn(o.cx, o.cy, (tx / dist) * g.mrn() * -6, (ty / dist) * g.mrn() * -6, "#f7931e");
                    o.seen = true;
                    if (Math.random() > 0.97) {
                        L.ply.bto.spn(o.cx, o.cy, L.ply.plr.cx + (Math.random() * 50 - 25), L.ply.plr.cy + (Math.random() * 50 - 25), o.vx, o.vy, 1);
                        aa.play("laser");

                    }
                } else {
                    o.seen = false;
                }
                if (o.seen) {
                    o.seen = true;
                    o.vx += (tx / dist) * g.scf;
                    o.vy += (ty / dist) * g.scf;

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

            }
            pl.hp = g.mrn() * 10 + 5;
            pl.rot = g.mrn() * 4 - 2;
            pl.r = pl.w / 2;
            pl.img = L.ast.e[Math.floor(g.mrn() * 3)];
            pl.w = pl.img.width / 2 * g.scf;
            pl.h = pl.img.height * g.scf;
            var angle = Math.random() * Math.PI * 2;

            pl.x = Math.cos(angle) * (Math.random() * g.scf) * (sisSz) + x;
            pl.y = Math.sin(angle) * (Math.random() * g.scf) * (sisSz) + y;
            pl.swp = true;
            L.sis[n].al.push(pl);

        }
    }
}



function saveData(key, data) {
    localStorage[key] = JSON.stringify(data);
    localStorage.setItem("item", true);
}

function loadData(key) {

    return localStorage[key];
}
