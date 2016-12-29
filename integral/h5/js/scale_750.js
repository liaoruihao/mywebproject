(function(doc, win) {
    var docEl = doc.documentElement,
        isIOS = navigator.userAgent.match(/iphone|ipod|ipad/gi),
        dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

    docEl.dataset.dpr = dpr;

    var recalc = function() {
        var width = docEl.clientWidth;
        if (width / dpr > 750) {
            width = 750 * dpr;
        }
        docEl.style.fontSize = 100 * (width / 750) + 'px';
    };
    recalc();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
})(document, window);