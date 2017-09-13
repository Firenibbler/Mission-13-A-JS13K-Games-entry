L.gmOv = new g.cs();


L.gmOv.in = function () {
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
L.gmOv.ud = function (n) {
    L.gmOv.cnt++;
    if (L.gmOv.cnt > 100) {
        L.gmOv.cnt = 100;
    }

};
L.gmOv.rd = function (n) {
    if (L.score > L.Hscore) {
        L.Hscore = L.score;
    }
    g.dT("Game over", g.c.w / 2, g.c.h / 3 - 130 * g.scf, 20, true);
    g.dT("HIGH SCORE: " + L.Hscore, g.c.w / 2, g.c.h / 3 , 5, true);
    g.dT("SCORE: " + Math.round((L.score / 100) * L.gmOv.cnt), g.c.w / 2, g.c.h / 3 + 30 * g.scf, 5, true);
    g.dT("PLANETS FOUND: " + Math.round((L.planetsDisc / 100) * L.gmOv.cnt), g.c.w / 2, g.c.h / 3 + 60 * g.scf, 5, true);
    g.dT("STARS FOUND: " + Math.round((L.starsDisc / 100) * L.gmOv.cnt), g.c.w / 2, g.c.h / 3 + 90 * g.scf, 5, true);
    g.dT("TOTAL PLANETS FOUND: " + L.TplanetsDisc, g.c.w / 2, g.c.h / 3 + 120 * g.scf, 5, true);
    g.dT("TOTAL STARS FOUND: " + L.TstarsDisc, g.c.w / 2, g.c.h / 3 + 150 * g.scf, 5, true);
    g.dT("TIP - refuel and repair your ship at stars and planets.", g.c.w / 2, g.c.h - 50 * g.scf, 5, true);

};
L.gmOv.lMD = function () {
    if (L.gmOv.cnt >= 100) {
        g.sc(L.srt);
        aa.play("drag");
    }

};
