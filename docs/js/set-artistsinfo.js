$(document).ready(function () {
    artist_thumbnail("thumbnail-target");
    artist_modalwindow("modal-target");
    $('.js-modal-open').each(function () {
        $(this).on('click', function () {
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $(modal).fadeIn();
            return false;
        });
    });

    $('.modal-bg').on('click', function () {
        $('.modal').fadeOut();
        return false;
    });
    for (let i = 0; i < _artistdata.length; i++) {
        artist_modalcontent(_artistdata[i]);
    }
    artist_setlang();
});
let _artistdata = [
    {
        id: "artist1",
        // flag: false,
        img_portrait: "./imgs/artists/portrait/shilpa.jpg",
        img_work: ["", "", ""],
        text_id: "artist1_text",
        text: { ja: "アーティスト1", en: "artist1" },
        statement: "none"
    },
    {
        id: "artist2",
        // flag: false,
        img_portrait: "",
        img_work: ["", "", ""],
        text_id: "artist2_text",
        text: { ja: "アーティスト2", en: "artist2" },
        statement: "none"
    },
];

function artist_thumbnail(target) {
    var pos = document.getElementById(target);
    for (let i = 0; i < _artistdata.length; i++) {
        var a = document.createElement("a");
        a.className = "js-modal-open";
        a.setAttribute("data-target", _artistdata[i].id);
        a.textContent = _artistdata[i].id;
        pos.appendChild(a);
    }
}
function artist_modalwindow(target) {
    var pos = document.getElementById(target);
    for (let i = 0; i < _artistdata.length; i++) {
        var root = document.createElement("div");
        root.className = "modal";
        root.id = _artistdata[i].id;
        var div = document.createElement("div");
        div.className = "modal-bg";
        root.appendChild(div);
        pos.appendChild(root);
    }
    console.log("modalwindowのベースを配置");
}
function artist_modalcontent(artistdata) {
    var target = document.getElementById(artistdata.id);
    // if (artistdata.flag) return;
    // artistdata.flag = true;
    var root = document.createElement("div");
    root.className = "modal-content";
    //ここに各内容を挿入する。
    var div = document.createElement("div");
    div.id = artistdata.text_id;
    div.textContent = artistdata.text.ja;
    root.appendChild(div);
    var img = document.createElement("img");
    img.src = artistdata.img_portrait;
    target.appendChild(root);
}
function artist_setlang() {
    console.log("artistpageの言語読み込み" + currentLang);
    for (let i = 0; i < _artistdata.length; i++) {
        document.getElementById(_artistdata[i].text_id).innerHTML = currentLang == "ja" ? _artistdata[i].text.ja : _artistdata[i].text.en;
    }
}