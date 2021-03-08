//初期セットアップ

//AdobeFont読み込み
(function (d) {
    var config = {
        kitId: 'rec7qcy',
        scriptTimeout: 3000,
        async: true
    },
        h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
})(document);

//FOUTを防ぐため
// 50msごとにクラスを取得したかチェックして処理
var element = $("html").get(0);
var func;
var count = 0;
func = setInterval(function () {
    //2500ms以上いったら強制フェードイン
    if (element.classList.contains("wf-active") || count > 50) {
        stop();
    }
    count++;
}, 50);
function stop() {
    clearInterval(func);
    count = 10;
    $("body").hide().css({ visibility: "visible" }).fadeIn(1800);
}


// コピーライトのテンプレート
$(function () {
    $("#copyright").text("©️ 2021 TUA. GA. All Rights Reserved.");
});