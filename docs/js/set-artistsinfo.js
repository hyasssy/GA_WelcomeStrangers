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
        img_work: ["./imgs/artists/portrait/endo.jpg", "./imgs/artists/portrait/endo.jpg", "./imgs/artists/portrait/endo.jpg"],
        text: {
            name: { id: "a1name", ja: "遠藤薫", en: "Kaoru Endo" },
            caption1: { id: "a1c1", ja: "「閃光と落下傘」 、2020、布、古道具、インスタレーション", en: "“Flash and Parachute”, 2020, textile, old equipments, installation" },
            div_description: {id:"a1d1", ja:"1989年大阪府生まれ、現在ベトナム・ハノイと日本を拠点に活動。沖縄県立芸術大学工芸専攻染織科卒業後、紬織の重要無形文化財保持者である染織家志村ふくみ主宰のアルスシムラ卒業。世界中のボロ布の収集、修復、使用を繰り返すことを始め、アジアや日本各地の土地の記憶を素材と重ね合わせながら、“工芸”的なるものと“社会”の関わりをテーマに作品を展開する。現在、沖縄芭蕉布の織り手福島泰宏と共に沖縄、ベトナムと中国の国境、台湾離島を始め、各国の糸芭蕉（バナナ）のルーツを探すプロジェクトを共同実行中。主な展覧会に、「第13回 shiseido art egg」(資生堂ギャラリーart egg賞受賞、東京/2019年)、「OPEN SITE 2019-2020／「藪を暴く」展」トーキョー・アーツ・アンド・スペース、東京/2020年)、「いのちの裂け目ー布が描き出す近代、青森から」(国際芸術センター青森、青森/2020年)", en:'Born in Osaka in 1989, currently based in Hanoi, Vietnam and Japan. After graduated from the Department of Dyeing and Weaving, majoring in Arts and Crafts, Okinawa Prefectural University of Arts, she graduated from Ars Shimura, which is organized by Fukumi Shimura, a dyeing and weaving artist who is an important intangible cultural property holder of pongee. Now Endo creates works based on the theme of the connection between "craft" and "society" by repeatedly collecting, restoring, and using cloth from all over the world, and overlapping the memories of the land in Asia and Japan with the materials. She is currently collaborating with Yasuhiro Fukushima, a weaver of Okinawan bashofu, on a project to search for the roots of Japanese fiber banana in various countries such as Okinawa,in the border between Vietnam and China, and the remote islands of Taiwan.Her major exhibitions are "The 13th shiseido art egg" (Shiseido Gallery, awarded the shiseido art egg prize, Tokyo/2019), "OPEN SITE 2019-2020: “Exposing the bushes" (Tokyo Arts and Space, Tokyo/2020), "The Beginning of Life/Art: Cloth Weaves Our Times, from Aomori" (Aomori Contemporary Art Centre, Aomori/2020)'},
            caption2: {id:"a1c2", ja:"テスト", en:"test"},
            caption3: {id:"a1c3", ja:"", en:""},
        },
        statement: "none"
    },
    {
        id: "artist2",
        img_portrait: "./imgs/artists/portrait/fujii.jpg",
        img_work: ["", "", ""],
        text: {
            name: { id: "a2name", ja: "藤井光", en: "Hikaru Fujii" },
            caption1: { id: "a2c1", ja: "キャプション1", en: "caption1" },
            div_description: {id:"a2d1", ja:"", en:''},
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
            portraitcaption: { id: "a3pc", ja: "portrait：©Shrutti Garg", en: "portrait：©Shrutti Garg" },
            div_description: {id:"a3d1", ja:"", en:''},
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
    div.className = "modal-captionbox";
    var caption1 = document.createElement("div");
    caption1.id = artistdata.text.caption1.id;
    caption1.className = "modal-caption";
    div.appendChild(caption1);
    var pcdata = artistdata.text.portraitcaption;
    if (pcdata != null) {
        var portraitCaption = document.createElement("div");
        portraitCaption.id = pcdata.id;
        portraitCaption.className = "modal-caption";
        div.appendChild(portraitCaption);
    }
    root.appendChild(div);
    var div_name = document.createElement("div");
    div_name.className = "modal-name";
    div_name.textContent = artistdata.text.name.ja + "｜" + artistdata.text.name.en;
    root.appendChild(div_name);
    var div_description = document.createElement("div");
    div_description.className = "modal-text";
    div_description.id = artistdata.text.div_description.id;
    root.appendChild(div_description);
    var nullspace = document.createElement("div");
    nullspace.className = "modal-space";
    root.appendChild(nullspace);

    //もし作品画像が他にもあれば、追加する
    var caption2data = artistdata.text.caption2;
    if(caption2data != null){
        var image2 = document.createElement("img");
        image2.src = artistdata.img_work[1];
        root.appendChild(image2);
        var div = document.createElement("div");
        div.className = "modal-captionbox";
        var caption2 = document.createElement("div");
        caption2.id = caption2data.id;
        caption2.className = "modal-caption";
        div.appendChild(caption2);
        root.appendChild(div);
        var nullspace = document.createElement("div");
    nullspace.className = "modal-space";
    root.appendChild(nullspace);
    }
    var caption3data = artistdata.text.caption3;
    if(caption3data != null){
        var image3 = document.createElement("img");
        image3.src = artistdata.img_work[1];
        root.appendChild(image3);
        var div = document.createElement("div");
        div.className = "modal-captionbox";
        var caption3 = document.createElement("div");
        caption3.id = caption3data.id;
        caption3.className = "modal-caption";
        root.appendChild(div.appendChild(caption3));
        var nullspace = document.createElement("div");
    nullspace.className = "modal-space";
    root.appendChild(nullspace);
    }
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