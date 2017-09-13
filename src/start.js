L.srt = new g.cs();
L.srt.fd = 0;
L.srt.ud = function (n) {

    if (Math.floor(g.tm % 300) == 10) {
        L.tipNum = Math.floor(Math.random() * L.tips.length);
    }
};
L.tips = ["Find stars to refuel your starcraft.",
            "Press f11 to get a full-screen view of the game.",
            "land on planets to repair your ship.",
            "Find stars and planets to refuel and repair your space ship.",
            "navigate the depths of space using your right mouse button.",
            "shoot enemy ships and asteroids with the left mouse button.",
            "Finding stars and planets give you a much higher score.",
            "share this game on facebook to see who can discover most!",
            "tweet your score on this game to show how much you have explored.",
            "share your score on social media and see who can get the highest."
       ];
L.srt.str = [];
L.srt.in = function () {
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
    //L.ply.bck.cd = [];
    L.sis = [];
    L.TplanetsDisc = Number(loadData("planets")) || 0;
    L.TstarsDisc = Number(loadData("stars")) || 0;
    L.Hscore = Number(loadData("highscore")) || 0;
    for (var i = 0; i < 200; i++) {
        L.srt.str[i] = {
            x: Math.random() * g.c.w,
            y: Math.random() * g.c.h,
        }
    }
};

L.srt.rd = function (n) {
    //g.ctx.globalAlpha = L.srt.fd += .02;
    g.ctx.globalAlpha = 1;
    g.cX = 0;
    g.cY = 0;
    for (var i = 0; i < 200; i++) {
        g.bmp(L.ast.str, L.srt.str[i].x, L.srt.str[i].y, 15 * g.scf, 15 * g.scf, 0, 0, 15, 15, 0);
    }

    g.bmp(L.ast.s[0], 0 - L.ast.s[0].width / 2 * 5* g.scf, g.c.h - L.ast.s[0].height / 2 * 5* g.scf, L.ast.s[0].width * 5 * g.scf, L.ast.s[0].height * 5 * g.scf, 0, 0, L.ast.s[0].width, L.ast.s[0].height, g.tm * 100);

    g.bmp(L.ast.p[0], (g.c.w / 3) * 2, (g.c.h / 3) * 2, L.ast.p[0].width * 5 * g.scf, L.ast.p[0].height * 5 * g.scf, 0, 0, L.ast.p[0].width, L.ast.p[0].height, g.tm / 10);

    g.bmp(L.ast.p[1], (g.c.w / 3), (g.c.h / 3), L.ast.p[1].width * 5 * g.scf, L.ast.p[1].height * 5 * g.scf, 0, 0, L.ast.p[1].width, L.ast.p[1].height, g.tm / -10);

    g.dT("Mission 13 - lost in space", g.c.w / 2, 30 * g.scf, 10, true);
    g.dT("Click Anywhere To Play", g.c.w / 2, 100 * g.scf, 8, true);
    g.dT("a firenibbler studios production", g.c.w / 2, g.c.h - 100, 5, true, "#ffffff");
    g.dT("tip - " + L.tips[L.tipNum], g.c.w / 2, g.c.h - 50, 4, true);



    g.dT("HIGH SCORE: " + L.Hscore, g.c.w / 2, 160 * g.scf, 5, true);
    g.dT("TOTAL PLANETS FOUND: " + L.TplanetsDisc, g.c.w / 2, 200 * g.scf, 5, true);
    g.dT("TOTAL STARS FOUND: " + L.TstarsDisc, g.c.w / 2, 240 * g.scf, 5, true);
};
L.srt.lMD = function () {
    g.sc(L.ply);
};
L.srt.rMD = function () {
    g.sc(L.ply);
};
