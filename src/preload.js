var L = {};
L.ast = {};
var loaded = false;
L.ast.img = new Image();
L.ast.img.src = "assets/assets.png";
L.ast.img.onload = function () {
    var img = L.ast.img,
        as = L.ast;
    loaded = true;

    initSound();

};

L.stNames = ["AQUARIUS", "AQUILA", "ARA", "ARIES", "AURIGA", "BOOTES", "CAELUM", "CAMELOPARDALIS", "CANCER", "CANES VENATICI", "CANIS", "CAPRICORNUS", "CARINA", "CASSIOPEIA", "CENTAURUS", "CEPHEUS", "CETUS", "CHAMAELEON", "CIRCINUS", "CRUX", "CYGNUS", "DELPHINUS", "DRACO", "EQUULEUS", "FORNAX", "GRUS", "HOROLOGIUM", "HYDRUS", "LACERTA", "LEO", "LEPUS", "LUPUS", "MENSA", "MUSCA", "NORMA", "ORION", "PAVO", "PEGASUS", "PHONEX", "PYXIS", "SAGITTA", "SCORPIUS", "SEXTANS", "TAURUS", "TUCANA", "MORENCI", "URSA", "VELA", "SIRIUSBLK", "VOLANS", "MOAB", "TUCSON"];

L.stNames2 = ["ALPHA", "BETA", "GAMMA", "THETA", "ZETA", "IOTA", "RATU", "XI", "DELTA", "OMICRON", "EPSILON", "CHI", "LAMBDA", "ETA", "ROH", "PSI", "SIGMA", "TAU", "MU", "UPSILON"];
L.ast.p = [];
L.genP = function (n) {

    if (n < 100) {
        L.ast.p[n] = g.gad(g.gRC(), Math.floor(g.mrn() * 30) + 30, g.mrn() / 3 + 0.2);
    }
}
L.ast.s = [];
L.genS = function (n) {
    if (n < 100) {
        L.ast.s[n] = g.gad(g.gRC(4, 12), Math.floor(g.mrn() * 75) + 150, g.mrn() / 3 + 0.1, 254 - 70, true);
    }
}
L.ast.a = [];
L.genA = function (n) {
    if (n < 100) {
        L.ast.a[n] = g.gad(g.gRC(8, 2), Math.floor(g.mrn() * 10) + 10, g.mrn() / 2 + 0.5);
    }
}


L.prl = new g.cs();
L.prl.fd = 0.0001;
L.prl.ud = function (n) {


};
L.rtm = 0;
L.genP(L.rtm);
L.genS(L.rtm);
L.genA(L.rtm);
L.rtm++;
L.prl.rd = function (n) {
    L.genP(L.rtm);
    L.genS(L.rtm);
    L.genA(L.rtm);
    L.rtm++;
    if (L.rtm > 100) {
        L.rtm = 100;
    }

    if (!loaded || L.rtm < 100) {
        g.dT("Loading" + ".".repeat((g.tm % 12) / 3), g.c.w / 2, g.c.h / 2, 5, true);

    } else {
        g.dT("loaded - click or tap to play.", g.c.w / 2, g.c.h / 2, 5, true);
    }
    g.ctx.fillRect(g.c.w / 2 - 150, g.c.h / 2 + 50, L.rtm * 3, 20 * g.scf);
    g.dT("warning - this game may cause seizures", g.c.w / 2, g.c.h / 2 + 90, 3, true, "#ff0000");
    //"Find stars and planets to refule and repair your space ship."
    if(g.mabC){
        g.dT("move your ship by dragging your finger across the left side of the screen.", g.c.w / 2, g.c.h - 50, 4, true);
        g.dT("Shoot by tapping the right side.", g.c.w / 2, g.c.h - 25, 4, true);
    }else{
        g.dT("Navagate your ship with the right mouse button - shoot with the left.", g.c.w / 2, g.c.h - 50, 4, true);
    }
    
};
// Switch stages to preloading
L.prl.lMD = function () {
    if (loaded && L.rtm >= 100) {
        L.prl.fd = 0;
        // Switch stages to start stage.
        g.sc(L.srt);
    }
};
L.prl.rMD = function () {
    if (loaded && L.rtm >= 100) {
        L.prl.fd = 0;
        // Switch stages to start stage.
        g.sc(L.srt);
    }
};
g.sc(L.prl);
