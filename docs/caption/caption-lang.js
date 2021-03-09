var defaultLang = (window.navigator.languages && window.navigator.languages[0]) ||
    window.navigator.language ||
    window.navigator.userLanguage ||
    window.navigator.browserLanguage;

var currentLang;
$(function () {
    //文字をセットする
    setartistsinfo(document.getElementById("contents-target"));

    currentLang = defaultLang;
    var cookie_lang = $.cookie('lang');
    if (cookie_lang) {
        currentLang = cookie_lang;
    }
    //ローカルでは確認できなかった。サーバー上げたら確認できる。
    console.log("読み込み時のcookie : " + document.cookie);
    setlang();
    $('#ja-button').on('click', function () {
        $('#ja-button').fadeOut();
        $('#en-button').fadeIn();
        button_ja();
        return false;
    });
    $('#en-button').on('click', function () {
        $('#en-button').fadeOut();
        $('#ja-button').fadeIn();
        button_en();
        return false;
    });

});
function setlang() {
    $.cookie('lang', currentLang);
    console.log("cookie : " + document.cookie);
    for (var i = 0; i < _captiondata.length; i++) {
        for (var textlength = 0; textlength < _captiondata[i].text_id.length; textlength++) {
            document.getElementById(_captiondata[i].text_id[textlength]).textContent = currentLang == "ja" ? _captiondata[i].text[textlength].ja : _captiondata[i].text[textlength].en;
        }
    }
}
function button_ja() {
    currentLang = "ja";
    setlang();
}
function button_en() {
    currentLang = "en";
    setlang();
}
function artistinfo(num) {
    var data = _captiondata[num];
    var root = document.createElement("div");
    root.className = "artistinfo-root";
    root.id = data.id;
    for (var i = 0; i < data.text_id.length; i++) {
        var div = document.createElement("div");
        div.id = data.text_id[i];
        div.className = "artistinfo-text";
        div.textContent = data.text[i].ja;
        root.appendChild(div);
    }
    return root;
}
function setartistsinfo(target) {
    for (var i = 0; i < _captiondata.length; i++) {
        target.appendChild(artistinfo(i));
    }
}

const _captiondata = [
    {
        id: "artist1",
        text_id: ["artist1_text", "artist1_text2"],
        text: [{ ja: "アーティスト1", en: "artist1" }, { ja: "テキスト2", en: "text2" }],
        statement: "none"
    },
    {
        id: "artist2",
        text_id: ["artist2_text"],
        text: [{ ja: "アーティスト2", en: "artist2" }],
        statement: "none"
    }
];