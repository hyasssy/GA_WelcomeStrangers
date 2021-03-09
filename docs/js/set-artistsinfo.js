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
        name: "遠藤薫",
        // flag: false,
        img_portrait: "./imgs/artists/portrait/endo.jpg",
        img_work: ["./imgs/artists/portrait/endo.jpg", "", ""],
        text_id: ["artist1_text"],
        text: [{ ja: "キャプション1", en: "caption1" }],
        statement: "none"
    },
    {
        id: "artist2",
        name: "藤井光",
        // flag: false,
        img_portrait: "./imgs/artists/portrait/fujii.jpg",
        img_work: ["", "", ""],
        text_id: ["artist2_text"],
        text: [{ ja: "アーティスト2", en: "artist2" }],
        statement: "none"
    },
    {
        id: "artist3",
        name: "藤井光",
        // flag: false,
        img_portrait: "./imgs/artists/portrait/fujii.jpg",
        img_work: ["", "", ""],
        text_id: ["artist3_text"],
        text: [{ ja: "アーティスト3", en: "artist2" }],
        statement: "none"
    },
];

function artist_thumbnail(target) {
    var pos = document.getElementById(target);
    for (let i = 0; i < _artistdata.length; i++) {
        var a = document.createElement("a");
        a.className = "js-modal-open artist-thumbnail-box";
        a.setAttribute("data-target", _artistdata[i].id);
        // a.textContent = _artistdata[i].id;
        var img = document.createElement("img");
        img.src = _artistdata[i].img_portrait;
        a.appendChild(img);
        var span = document.createElement("span");
        span.textContent = _artistdata[i].name;
        span.className = "list";
        a.appendChild(span);
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
    var root = document.createElement("div");
    root.className = "modal-content";
    //ここに各内容を挿入する。
    var img = document.createElement("img");
    img.src = artistdata.img_work[0];
    root.appendChild(img);
    var div = document.createElement("div");
    div.className = "modal-topcaption";
    var caption1 = document.createElement("div");
    caption1.id = artistdata.text_id[0];
    caption1.className = "modal-caption";
    div.appendChild(caption1);
    if (false/*アイコンにキャプションがあれば*/) {
        var caption2 = document.createElement("div");
        caption2.id = "";
        caption2.className = "modal-caption";
        div.appendChild(caption2);
    }
    root.appendChild(div);
    target.appendChild(root);
}
function artist_setlang() {
    console.log("artistpageの言語読み込み" + currentLang);
    for (let i = 0; i < _artistdata.length; i++) {
        for (let n = 0; n < _artistdata[i].text_id.length; n++) {
            document.getElementById(_artistdata[i].text_id[n]).innerHTML = currentLang == "ja" ? _artistdata[i].text[n].ja : _artistdata[i].text[n].en;
        }

    }
}