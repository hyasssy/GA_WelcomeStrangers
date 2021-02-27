window.onload = function () {
    // var scrollPosition;
    $('.js-modal-open').each(function () {
        $(this).on('click', function () {
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            // ArtistPage(_data[target]);
            // メモ
            // https://imasashi.net/modal-window_bg-fixed.html
            $(modal).fadeIn();
            // モーダルウィンドウスクロール位置リセット
            $('.modal-content').scrollTop(0);
            return false;
        });
    });

    $('.js-modal-close').on('click', function () {
        $('.js-modal').fadeOut();
        return false;
    });
}

//データオブジェクト
let _data = {
    shows: [
        {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-s1.jpg",
            description: "JINEN　個展",//画像の説明、展示の名前
            caption: "JINEN gallery",
            tag: "title",
            m_image: "./imgs/shows/2020/20-s1.jpg",
            m_title: "JINEN gallery個展風景-1",
        },
        {
            flag: false,
            img: "./imgs/thumbnail/2020/t-s2.jpg",
            description: "MAKII MASARU FINE ARTS展示風景_2 ",
            caption: "MAKII MASARU FINE ARTS",
            tag: "title",
            m_image: "./imgs/shows/2020/20-s4.jpg",
            m_title: "MAKII MASARU FINE ARTS展示風景-2",
        },
        {
            flag: false,
            img: "./imgs/thumbnail/2020/t-s3.jpg",
            description: "ヨロコビto個展展示風景",
            caption: "ヨロコビto個展",
            tag: "title",
            m_image: "./imgs/shows/2020/20-s5.jpg",
            m_title: "ヨロコビto個展展示風景",
        },
        {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-s1.jpg",
            description: "藝祭 geisai",
            caption: "藝祭 geisai",
            tag: "title",
            m_image: "./imgs/shows/2019/19-s1.jpg",
            m_title: "藝祭 geisai 2019",
        },
        {
            flag: false,
            img: "./imgs/thumbnail/2019/t-s2.jpg",
            description: "二人展　hutariten",
            caption: "二人展　hutariten",
            tag: "title",
            m_image: "./imgs/shows/2019/19-s4.jpg",
            m_title: "二人展 展示風景",
        },
        {
            flag: false,
            img: "./imgs/thumbnail/2019/t-s3.jpg",
            description: "卒展内部",
            caption: "卒業制作学内展",
            tag: "title",
            m_image: "./imgs/shows/2019/19-s6.jpg",
            m_title: "東京芸術大学油画専攻卒業制作学内展",
        },
        {
            flag: false,
            img: "./imgs/thumbnail/2019/t-s4.jpg",
            description: "ヨロコビto個展展示風景",
            caption: "東京芸術大学油画専攻卒業制作展　東京都美術館",
            tag: "title",
            m_image: "./imgs/shows/2019/19-s7.jpg",
            m_title: "東京芸術大学油画専攻卒業制作展　東京都美術館",
        },

    ],
    works: [
        {
            flag: false,
            img: "./imgs/img1.jpeg",
            description: "画像の説明 展示の名前",
            caption: "caption",
            tag: "title",
            m_image: "./imgs/img1.jpeg",
            m_title: "タイトルSample",
        },
        {
            flag: false,
            img: "./imgs/img1.jpeg",
            description: "画像の説明 展示の名前",
            caption: "caption",
            tag: "title",
            m_image: "./imgs/img1.jpeg",
            m_title: "タイトルSample",
        },
        {
            flag: false,
            img: "./imgs/img1.jpeg",
            description: "画像の説明 展示の名前",
            caption: "caption",
            tag: "title",
            m_image: "./imgs/img1.jpeg",
            m_title: "タイトルSample",
        },
    ]
};

function Thumbnail(data, target) {
    var parent = document.createElement("div");
    parent.className = "gallery-thumbnail";
    var img = document.createElement("img");
    img.src = data.img;
    img.alt = data.description;
    parent.appendChild(img);
    var div = document.createElement("div");
    div.className = "gallery-thumcaption";
    div.textContent = data.caption;
    parent.appendChild(div);
    var a = document.createElement("a");
    a.setAttribute("data-target", data.tag);
    a.className = "js-modal-open";
    a.appendChild(parent);
    target.appendChild(a);
}

function ShowsThumbnails(target) {
    var showscount = _data.shows.length;
    for (let i = 0; i < showscount; i++) {
        Thumbnail(_data.shows[i], target);
    }
}

function WorksThumbnails(target) {
    var workscount = _data.works.length;
    for (let i = 0; i < workscount; i++) {
        Thumbnail(_data.works[i], target);
    }
}

function ShowInfo(data) {
    var root = document.createElement("div");
    root.className = "showbox";
    var img = document.createElement("img");
    img.src = data.m_image;
    root.appendChild(img);
    var textbox = document.createElement("div");
    textbox.className = "showtextbox";
    var div = document.createElement("div");
    div.className = "m-caption";
    div.textContent = data.m_title;
    textbox.appendChild(div);
    root.appendChild(textbox);
    var textbox = document.createElement("div");
    return root;
}
function WorkInfo(data) {
    var root = document.createElement("div");
    root.className = "workbox";
    var img = document.createElement("img");
    img.src = data.m_image;
    root.appendChild(img);
    var textbox = document.createElement("div");
    textbox.className = "worktextbox";
    var div = document.createElement("div");
    div.className = "m-caption";
    div.textContent = data.m_title;
    textbox.appendChild(div);
    root.appendChild(textbox);
    var textbox = document.createElement("div");
    return root;
}
function ModalWindow(data, target) {
    var root = document.createElement("div");
    root.id = data.tag;
    root.className = "modal js-modal";
    var div = document.createElement("div");
    div.className = "modal-bg js-modal-close";
    root.appendChild(div);
    var parent = document.createElement("div");
    parent.className = "modal-content";
    parent.appendChild(ShowInfo(data));
    root.appendChild(parent);
    target.appendChild(root);
}
function ShowsModalWindows(target) {
    var showscount = _data.shows.length;
    for (let i = 0; i < showscount; i++) {
        ModalWindow(_data.shows[i], target);
    }
}
function WorksModalWindows(target) {
    var workscount = _data.works.length;
    for (let i = 0; i < workscount; i++) {
        ModalWindow(_data.works[i], target);
    }
}