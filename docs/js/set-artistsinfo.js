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
        img_portrait: "./imgs/artists/portrait/endo.jpg",
        img_work: ["./imgs/artists/portrait/endo.jpg", "", ""],
        text: {
            name: { id: "a1name", ja: "遠藤薫", en: "Kaoru Endo" },
            caption1: { id: "a1c1", ja: "キャプション1caption1", en: "caption1" },
        },
        statement: "none"
    },
    {
        id: "artist2",
        img_portrait: "./imgs/artists/portrait/fujii.jpg",
        img_work: ["", "", ""],
        text: {
            name: { id: "a2name", ja: "遠藤薫", en: "Kaoru Endo" },
            caption1: { id: "a2c1", ja: "キャプション1", en: "caption1" },

        },
        statement: "none"
    },
    {
        id: "artist3",
        img_portrait: "./imgs/artists/portrait/fujii.jpg",
        img_work: ["", "", ""],
        text: {
            name: { id: "a3name", ja: "遠藤薫", en: "Kaoru Endo" },
            caption1: { id: "a3c1", ja: "キャプション1", en: "caption1" },
            portraitcaption: { id: "a3pc", ja: "portrait：©Shrutti Garg", en: "portrait：©Shrutti Garg" }
        },
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
        span.className = "list";
        span.id = _artistdata[i].text.name.id;
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
    caption1.id = artistdata.text.caption1.id;
    caption1.className = "modal-caption";
    div.appendChild(caption1);
    var pc = artistdata.text.portraitcaption;
    if (pc != null) {
        var caption2 = document.createElement("div");
        caption2.id = pc.id;
        caption2.className = "modal-caption";
        div.appendChild(caption2);
    }
    root.appendChild(div);
    var div = document.createElement("div");
    div.className = "modal-name";
    div.id = artistdata.text.name.id;
    div.textContent = "SDSFAEWFA";
    console.log("name is " + div.id);
    root.appendChild(div);
    console.log(document.getElementById(this[key].id).textContent);
    target.appendChild(root);
}
function artist_setlang() {
    console.log("artistpageの言語読み込み" + currentLang);
    for (let i = 0; i < _artistdata.length; i++) {
        Object.keys(_artistdata[i].text).forEach(function (key) {
            console.log(this[key].id + this[key].ja + document.getElementById(this[key].id).textContent);
            document.getElementById(this[key].id).innerHTML = currentLang == "ja" ? this[key].ja : this[key].en;
        }, _artistdata[i].text);
    }
}
//改行やスペースをコードに落とし込んだstringに変換する。
function ht_str(str) {
    if (str == null) return '';
    str = str.toString();
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    // str = str.replace( / /g,'&nbsp;' );
    // str = str.replace( /\t/g,'&nbsp;&nbsp;&nbsp;&nbsp;' ); // Tabをスペース4つに..
    str = str.replace(/\r?\n/g, "<br />\n");
    return str;
}