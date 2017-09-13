g.t = {
    fps: 30,
};
g.tm = 0;
// Render loop.
(function al() {
    window.requestAnimationFrame(al);
    g.ds.prd();
    g.ds.rd(g.tm);
    g.ctx.closePath();
    g.ctx.beginPath();
    for (var i = 0; i < g.cv.height / 5; i++) {
        g.ctx.moveTo(0, i * 5 + 0.5);
        g.ctx.lineTo(g.cv.width, i * 5 + 0.5);
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
// Update loop.
var tU = function () {
    g.p.ud();
    g.ds.pud();
    g.ds.ud(g.tm++);
};
window.setInterval(tU, 1000 / 30);
