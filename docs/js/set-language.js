var defaultLang = (window.navigator.languages && window.navigator.languages[0]) ||
    window.navigator.language ||
    window.navigator.userLanguage ||
    window.navigator.browserLanguage;

var currentLang;
$(document).ready(function () {
    currentLang = defaultLang;
    //あとでボタンで切り替えできるようにする。
    var cookie_lang = $.cookie('lang');
    if (cookie_lang) {
        currentLang = cookie_lang;
    }
    //ローカルでは確認できなかった。サーバー上げたら確認できる。
    console.log("読み込み時のcookie : " + document.cookie);
    setlang();
    $('#ja-button').on('click', function () {
        button_ja();
        return false;
    });
    $('#en-button').on('click', function () {
        button_en();
        return false;
    });
});

const _topdata = {
    text_about: {
        ja: `私たちが「見知らぬもの（=stranger）」と見做すもの、それは一体なんでしょうか。
        初めて出会うものや知らなかったことに対する認識とするならば、今日私たちの前に現れた未知のウイルスもまた、その一つかもしれません。ウイルスは、私たちの慣れ親しんだ環境を一変させました。そうした状況に戸惑う我々も「不慣れな人（=stranger）」と言えるでしょう。
        本展は世界中の多くの場所がパンデミックに直面している状況下で開催されます。移動が制限される中、私たちは、それぞれの場所で、様々な問題に向き合う国内外の10名のアーティストと協働し、複数の文脈を展覧会場に運んでくることを企図しました。見知らぬ場所の記憶や物語と出会うことが難しくなり、自分の場所ですら不確かになりつつある現在、グローバルな視点とローカルな視点、定住と放浪の間を行き来しながら制作を行うアーティストたちの芸術実践の中にこそ、捉え辛くなってしまった世界の様相を別の角度から見つめ直す手がかりがあるはずです。
        本展が、未知なる誰か、そしてまだ見ぬ自分自身を迎え入れ、世界の新しい諸相を知ることができる場となることを願います。


        本展覧会は、2016年に設立された東京藝術大学大学院国際芸術創造研究科（GA）アートプロデュース専攻キュレーション領域の長谷川祐子教授の授業として実施される本年で5年目をむかえるプロジェクトであり、長谷川祐子教授監修のもと本授業履修生を中心に企画・運営をおこなっています。`,
        en: `For the last few decades, within the flourishing biennial culture, the art world was praising artists as sort of wandering nomads who question the sense of belonging as an essential element for self-determination. Yet, with new travel restrictions, the current health crisis forces us to revise the "virtue" of being uprooted. In the new circumstances, while Governments throughout the world promote the benefits of local tourism, artists revise their strategies, try to understand if there are any new ways to respond to global issues without leaving your home. The world is rearranging along its central lines and it feels like there is no need anymore to go far to gain a new perspective on things since the global pandemic is changing people's perception of used-to-be common issues. We feel displaced from our familiar environment, and quite sensitive to the new one. We are all new to this, all strangers to the place. However uncomfortable it may be, this defamiliarization helps us to see what was obscured by daily routine. So, welcome...


        This exhibition is planned and organized by the students of the Department of Arts Studies and Curatorial Practices, Graduate School of Global Arts, Tokyo University of the Arts, as a part of the class of Arts Studies and Curatorial Practices Seminar: Curation I, under the supervision of Professor Yuko Hasegawa.`
    },
    text_infolist1: {
        ja: `会期：2021/3/20th Sat. - 4/7th Wed.（月曜休館）
        時間：10:00 - 18:00（入場は閉館の30分前まで）
        入場：無料・要予約`,
        en: `DATE : 2021/3/20th Sat. - 4/7th Wed. Closed on Mondays
        TIME : 10:00a.m. - 6:00p.m. (last entry at 5:30 p.m.)
        ENTER : Admission Free / Reservation Required
        `
    },
    text_infolist2: {
        ja: `*新型コロナウイルス感染拡大防止のため日時指定オンライン事前予約制です。右上ボタンから予約サイトにリンクします。

        `,
        en: ``
    },
    text_infolist3: {
        ja: `会場：東京藝術大学大学美術館陳列館
        `,
        en: `PLACE : Chinretsukan Gallery (The University Art Museum, Tokyo University of the Arts)
        `
    },
    text_infolist4: {
        ja: `主催：東京藝術大学大学院国際芸術創造研究科アートプロデュース専攻
        共催：一般財団法人カルチャー・ヴィジョン・ジャパン
        企画：東京藝術大学大学 大学院 国際芸術創造研究科アートプロデュース専攻キュレーション領域 修士課程在籍生、長谷川祐子教授授業科目「アートプロデュース演習｜キュレーションI」履修生＋聴講生
        助成：藝大フレンズ賛助金助成事業
        協力：KENJI TAKI GALLERY、ターナー色彩株式会社
        監修：長谷川祐子（東京藝術大学教授、東京都現代美術館参事）
        共同キュレーター：［修士課程在籍生］Kawthar Alzaid／方玚／Ekaterina Kuzmina／松江李穂／中谷圭佑／Ness Roque［研究生］福士弥華／渡辺俊夫［聴講生］中本憲利
        メインビジュアル：曹語宸
        WEBデザイン：林裕人

        お問い合わせ
        東京藝術大学大学院国際芸術創造研究科
        アートプロデュース専攻 キュレーション研究分野
        〒110-8714 東京都台東区上野公園12-8 国際芸術創造研究科教員室
        Tel: 050-5525-2725 （担当: 三宅敦大）
        Fax: 03-6846-8685
        E-mail: ga-exhibition@ml.geidai.ac.jp (陳列館企画室)`,
        en: `Organized by Department of Arts Studies and Curatorial Practices, Graduate School of Global Arts, Tokyo University of the Arts
Co-organized by Culture Vision Japan Foundation Inc.
Subsidised by Geidai Friends
Supported by KENJI TAKI GALLERY, TURNER COLOUR WORKS
Supervisor: Yuko Hasegawa (Professor, Graduate School of Tokyo University of the Arts and Artistic Director, Museum of Contemporary Art, Tokyo)
Co-curators: Kawthar Alzaid, Fang Yang, Ekaterina Kuzmina, Riho Matsue, Keisuke, Nakaya, Ness Roque, Saya Fukushi, Toshio Watanabe, Kent Nakamoto
Main Visual: Yuchen Cao
Web Designer: Yuto Hayashi

Public Relations Contact：

Department of Arts Studies and Curatorial Practices, Graduate School of Global Arts, Tokyo University of the Arts, Faculty Room, 12-8 Ueno Koen, Taito-ku, Tokyo 110-8714, Japan


Tel: 050-5525-2725 （Atsuhiro Miyake）
Fax: 03-6846-8685
E-mail: ga-exhibition@ml.geidai.ac.jp`
    },
}


function setlang() {
    console.log("translate" + currentLang);
    if (currentLang == "ja") {
        $('#ja-button').css('display', 'none');
        $('#en-button').css('display', 'block');
        $('#reserve-ja').css('display', 'block');
        $('#reserve-en').css('display', 'none');
    } else {
        $('#ja-button').css('display', 'block');
        $('#en-button').css('display', 'none');
        $('#reserve-ja').css('display', 'none');
        $('#reserve-en').css('display', 'block');
    }
    Object.keys(_topdata).forEach(function (key) {
        var target = document.getElementById(key);
        if (target != null) {
            target.innerHTML = ht_str(currentLang == "ja" ? _topdata[key].ja : _topdata[key].en);
        }
    });

    $.cookie('lang', currentLang);
    console.log("cookie : " + document.cookie);
}

function button_en() {
    currentLang = "en";
    setlang();
    artist_setlang();//set-artistsinfo.js
}
function button_ja() {
    currentLang = "ja";
    setlang();
    artist_setlang();//set-artistsinfo.js
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