$(document).ready(function () {
    artist_thumbnail("thumbnail-target");
    artist_modalwindow("modal-target");
    artist_setlang();
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
});
function artistpage() {
    for (let i = 0; i < _artistdata.length; i++) {
        artist_modalcontent(_artistdata[i]);
    }
    artist_setlang();
}
let _artistdata = [
    {
        id: "artist1",
        img_portrait: "./imgs/artists/portrait/endo.jpg",
        img_work: ["./imgs/artists/work/endo1.jpg", "./imgs/artists/work/endo2.jpg"],
        text: {
            name: { id: "a1name", ja: "遠藤薫", en: "Kaoru Endo" },
            caption1: {
                id: "a1c1",
                ja: `「閃光と落下傘」 、2020、布、古道具、インスタレーション
            Courtesy of Aomori Contemporary Art Centre
            Photo by  Delphine Parodi`
                ,
                en: `“Flash and Parachute”, 2020, textile, old equipments, installation
            Courtesy of Aomori Contemporary Art Centre
            Photo by  Delphine Parodi` },
            div_description: { id: "a1d1", ja: "1989年大阪府生まれ、現在ベトナム・ハノイと日本を拠点に活動。沖縄県立芸術大学工芸専攻染織科卒業後、紬織の重要無形文化財保持者である染織家志村ふくみ主宰のアルスシムラ卒業。世界中のボロ布の収集、修復、使用を繰り返すことを始め、アジアや日本各地の土地の記憶を素材と重ね合わせながら、“工芸”的なるものと“社会”の関わりをテーマに作品を展開する。現在、沖縄芭蕉布の織り手福島泰宏と共に沖縄、ベトナムと中国の国境、台湾離島を始め、各国の糸芭蕉（バナナ）のルーツを探すプロジェクトを共同実行中。主な展覧会に、「第13回 shiseido art egg」(資生堂ギャラリーart egg賞受賞、東京/2019年)、「OPEN SITE 2019-2020／「藪を暴く」展」トーキョー・アーツ・アンド・スペース、東京/2020年)、「いのちの裂け目ー布が描き出す近代、青森から」(国際芸術センター青森、青森/2020年)", en: 'Born in Osaka in 1989, currently based in Hanoi, Vietnam and Japan. After graduated from the Department of Dyeing and Weaving, majoring in Arts and Crafts, Okinawa Prefectural University of Arts, she graduated from Ars Shimura, which is organized by Fukumi Shimura, a dyeing and weaving artist who is an important intangible cultural property holder of pongee. Now Endo creates works based on the theme of the connection between "craft" and "society" by repeatedly collecting, restoring, and using cloth from all over the world, and overlapping the memories of the land in Asia and Japan with the materials. She is currently collaborating with Yasuhiro Fukushima, a weaver of Okinawan bashofu, on a project to search for the roots of Japanese fiber banana in various countries such as Okinawa,in the border between Vietnam and China, and the remote islands of Taiwan.Her major exhibitions are "The 13th shiseido art egg" (Shiseido Gallery, awarded the shiseido art egg prize, Tokyo/2019), "OPEN SITE 2019-2020: “Exposing the bushes" (Tokyo Arts and Space, Tokyo/2020), "The Beginning of Life/Art: Cloth Weaves Our Times, from Aomori" (Aomori Contemporary Art Centre, Aomori/2020)' },
            caption2: {
                id: "a1c2",
                ja: `作品《閃光と落下傘》制作記録映像、2020年、ビデオ、10分10秒
            Film and edit by Yasunori Yokoyama
            Courtesy of Aomori Contemporary Art Centre
            Photo by  Delphine Parodi
            `,
                en: `Documentary of Art works, 2020, video, 10min 10sec
            Film and edit by Yasunori Yokoyama
            Courtesy of Aomori Contemporary Art Centre
            Photo by  Delphine Parodi
            `},
        },
        statement: "none"
    },
    {
        id: "artist2",
        img_portrait: "./imgs/artists/portrait/fujii.jpg",
        img_work: ["./imgs/artists/work/fujii1.jpg"],
        text: {
            name: { id: "a2name", ja: "藤井光", en: "Hikaru Fujii" },
            caption1: {
                id: "a2c1",
                ja: `核と物、 2019年、ビデオ、47分
            Directed by Hikaru Fujii
            Photo by Shizune Shiigi
            `,
                en: `Les nucléaires et les choses, 2019, video, 47min
            Directed by Hikaru Fujii
            Photo by Shizune Shiigi
            ` },
            div_description: { id: "a2d1", ja: "1976年生まれ。パリ第8大学美学・芸術第三博士課程DEA修了。過去と現代を創造的につなぎ，歴史や社会の不可視な領域を批評するインスタレーション作品を制作している。主な展覧会に「もつれるものたち」（東京都現代美術館、2020年）、「核と物」（KADIST、パリ、2019年）、「あいちトリエンナーレ2019：情の時代」（2019年）、「Zero Gravity World」（ソウル市立美術館、2019年）、「第一の事実」（ISCP、ニューヨーク、2018年）、「How little you know about me」（国立現代美術館、ソウル、2018年）、「トラベラー：まだ見ぬ地を踏むために」（国立国際美術館、2018年）など。「日産アートアワード2017」グランプリ（2017年）、「Tokyo Contemporary Art Award」を受賞（2020年）。", en: 'Born in 1976. Graduated with a DEA (MA) from Université de Paris 8 in 2004. He creates installation works that creatively connect the past and present. Major exhibitions include "Things Entangling," (Museum of Contemporary Art Tokyo, 2020), "Les nucléaires et les choses," (KADIST, Paris, 2019),. "Aichi Triennale 2019: Taming Y/Our Passion,"Nagoya City Art Museum, 2019. "Zero Gravity World," (KADIST, Paris, 2019),"The Primary Fact," (ISCP, New York, 2018), "How little you know about me," (National Museum of Modern and Contemporary Art, Korea, Seoul, 2018), "Travelers: Stepping into the unknown," (National Museum of Art, Osaka, 2018). He won the Grand prize from “Nissan Art Award 2017” (2017) , “Tokyo Contemporary Art Award” (2020).' },
        },
        statement: "none"
    },
    {
        id: "artist3",
        img_portrait: "./imgs/artists/portrait/shilpa.jpg",
        img_work: ["./imgs/artists/work/shilpa1.jpg", "./imgs/artists/work/shilpa2.jpg", "./imgs/artists/work/shilpa3.jpg"],
        text: {
            name: { id: "a3name", ja: "シルパ・グプタ", en: "Shilpa Gupta" },
            caption1: {
                id: "a3c1",
                ja: `Untitled No.2、2018年、トレーシングペーパー、木枠、12x8.6x1.18in｜31x22x3cm
            Commissioned by YARAT Contemporary Art Space
Courtesy of The Artist and GALLERIA CONTINUA, San Gimignano / Beijing / Les Moulins / Habana
Photo by  Pat Verbruggen
`,
                en: `Untitled(No,2, No.7, No.8),  2018, Tracings on Paper, wood, 12x8.6x1.18in | 31x22x3 cm each (set of ten frames)
            Commissioned by YARAT Contemporary Art Space
Courtesy of The Artist and GALLERIA CONTINUA, San Gimignano / Beijing / Les Moulins / Habana
Photo by  Pat Verbruggen
` },
            portraitcaption: { id: "a3pc", ja: "portrait：©Shrutti Garg", en: "portrait：©Shrutti Garg" },
            div_description: { id: "a3d1", ja: "1976年インド・ムンバイ出身、Sir J. J. School of Fine Artsで彫刻を学ぶ。国家や宗教が人の価値観に及ぼす影響などをテーマに、インスタレーションを主軸とした作品を展開する。過去の個展は、Museum voor Moderne Kunst （アーネム、オランダ）、Contemporary Arts Center （シンシナティ、アメリカ)などで行われ、ベネチア、ベルリン、高知、リヨン、クァンジュ、ハバナ、横浜、リバプールなどで開催されたビエンナーレに参加。Tate Modern、Museum of Modern Art、Louisiana Museum、Centre Pompidou、Serpentine Gallery、Fondazione Sandretto Re Rebaudengo、森美術館などで作品が展示された。", en: `Shilpa Gupta was born in India in 1976, and studied in the Sir J. J. School of Art (Sculpture). Gupta examines the role of perception and subjectivity in the status of objects, places, people and experiences, and the way value is defined and impacted by nationalism, trade, religion and notions of security. She has had solo shows at the Museum voor Moderne Kunst in Arnhem, Contemporary Arts Center in Cincinnati, OK Center for Contemporary Art in Linz and Arnolfini in Bristol and has participated in biennales in Venice, Berlin, Kochi, Lyon, Gwangju, Havana, Yokohama, Liverpool amongst others. Her work has been shown in Moma, Tate Modern, Centre Pompidou, Solomon R. Guggenheim Museum, New Museum, Devi Art Foundation, Louisiana Museum of Modern Art, San Francisco Museum of Modern Art and Mori Museum.` },
            caption2: { id: "a3c2", ja: `Untitled No.7`, en: `Untitled No.7` },
            caption3: { id: "a3c3", ja: `Untitled No.8`, en: `Untitled No.8` },
        },
        statement: "none"
    },
    {
        id: "artist4",
        img_portrait: "./imgs/artists/portrait/kamata.jpg",
        img_work: ["./imgs/artists/work/kamata1.jpg"],
        text: {
            name: { id: "a4name", ja: "鎌田友介", en: "Yusuke Kamata" },
            caption1: {
                id: "a4c1",
                ja: `The House、 2018年、木材、古材、ビデオ
            Courtesy of MMCA
            Photo by Moon June Hee
            `,
                en: `The House, 2018, wood,old wood, video
            Courtesy of MMCA
            Photo by Moon June Hee`
            },
            portraitcaption: { id: "a4pc", ja: "portrait：©Charlotte Raymond", en: "portrait：©Charlotte Raymond" },
            div_description: { id: "a4d1", ja: "神奈川県横浜市出身。2013年東京藝術大学美術研究科先端芸術表現修了。歴史や社会の状況を反映するとともに、国家の文化やアイデンティティ形成のツールにもなる建築をテーマに美術と建築を横断する活動を続ける。近年は日本占領下の韓国や台湾で作られた日本家屋やアメリカ合衆国で焼夷弾実験のために作られた日本村の設計などの調査を通し、異なる歴史的背景と場所において日本家屋が孕んだ多様な意味を描き出すプロジェクトを手がける。2018年ACCアジアン・カルチュラル・カウンシル・フェロー。近年のグループ展に「対話のあとさき」（横浜市民ギャラリー、神奈川、2019年）、「行為の編纂」（Tokyo Arts and Space TOKAS、東京、2018年）、「How Little You Know About Me」（韓国国立現代美術館MMCA Seoul、韓国、2018年）など。", en: `Yusuke Kamata was born in Yokohama and gained a M.A. degree in inter-media art from Tokyo University of the Arts. He works across the boundaries of architecture and art. In his view, architectural practices not only reflect the history and social conditions but also form national identity and culture. In recent years, he has been conducting research on Japanese houses built in Korea and Taiwan during the Japanese occupation, and on the design of the Japanese Village (a range of houses constructed for incendiary bomb tests in the United States). His projects depict the multiple connotations of Japanese houses in different historical contexts and locations. He was selected as Asian Culture Council Fellow in 2018. Selected group exhibitions: “Ongoing Dialogue” (Yokohama Civic Gallery, Kanagawa, Japan, 2019), “Compiling behaviors, digesting actions” (Tokyo Arts & Space TOKAS, Tokyo, Japan, 2018), “How Little You Know About Me” (MMCA Seoul, South Korea, 2018).` },
        },
        statement: "none"
    },
    {
        id: "artist5",
        img_portrait: "./imgs/artists/portrait/asya.jpg",
        img_work: ["./imgs/artists/work/asya1.jpg", "./imgs/artists/work/asya2.jpg", "./imgs/artists/work/asya3.jpg"],
        text: {
            name: { id: "a5name", ja: "アーシャ・マラクリナ", en: "Asya Marakulina" },
            caption1: {
                id: "a5c1",
                ja: `A room to restより
            2016-2018年、 グラフィック、刺繍、オブジェ、インスタレーション`,
                en: `From the project A room to rest
            2016-2018, Graphics, embroidery, objects, installation` },
            div_description: { id: "a5d1", ja: "1988年ロシア、ペルミ出身。2008年からサンクトペテルブルクを拠点に活動。Perm Professional Lyceum No.1 グラフィック科にて学位を取得し、2015年にはSt.Petersburg State Universityにてアニメーションデザイン科を卒業。本展覧会にて展示予定の「A room to rest」は、セルゲイ・クリョーヒン現代美術賞を受賞し、ロシアの現代美術賞の一つであるカンディンスキー賞に入選した。アーシャは作品を通して、あらゆる現象に詩的なつながりを見つけ、自身を取り巻く世界を注意深く観察しながら、グラフィックやペインティング、テキストや刺繍などを用いて制作を行う。", en: `Asya Marakulina was born in 1988 in Perm, Russia. She got a degree in Computer Graphics from Perm Professional Lyceum No. 1. In 2015 she graduated from St. Petersburg State University as an Animation Designer. Since 2008 she has been living and working in Saint Petersburg. For her project “A room to rest” that will be shown at the exhibition, she has received several prestigious awards, including the special prize at the Sergey Kuryokhin Contemporary Art Award and a mention on the long list of the Kandinsky Prize, one of the most significant national awards in the sphere of contemporary art in Russia. Asya works in various media: graphics, textiles, sculpture, animation, installation. As for her working method, according to her words, she goes through her personal experience carefully observing herself and the world around her, noticing poetic and aesthetic links, and, through her art, creating temporal spaces that balance between the inner world of feelings and the real world of objects. ` },
            caption2: { id: "a5c2", ja: ``, en: `` },
            caption3: { id: "a5c3", ja: ``, en: `` },
        },
        statement: "none"
    },
    {
        id: "artist6",
        img_portrait: "./imgs/artists/portrait/momma.jpg",
        img_work: ["./imgs/artists/work/momma1.jpg", "./imgs/artists/work/momma2.jpg"],
        text: {
            name: { id: "a6name", ja: "門馬美喜", en: "Miki Momma" },
            caption1: {
                id: "a6c1",
                ja: `Route99 ヶ月 相馬 / 仙台、2016-2019年
            Photo by Shinya Kigure`,
                en: `Route99 months Soma / Sendai, 2016-2019
            Photo by Shinya Kigure` },
            portraitcaption: { id: "a6pc", ja: "portrait：©Shrutti Garg", en: "portrait：©Shrutti Garg" },
            div_description: { id: "a6d1", ja: "1981年福島県相馬市出身。2005年東京造形大学卒業。2006年から2007年中国美術学院および中央美術学院に留学。その後中国大陸を制作しながら縦断、横断し帰国。2013年東日本大震災の影響で止めていた美術制作を再開。2020年にJR常磐線が再開通するまで、鉄道不通の東京〜相馬間を100回以上行き来し、現在も福島県沿岸部を中心に、目にした風景を描くRouteシリーズの制作を続けている。アクリルガッシュビエンナーレ 2018 において〈Route93 ヶ月■相馬/大田区〉が大賞受賞。近年の展示に「対話のあとさき」（横浜市民ギャラリー、神奈川、2019年）、「Art Meets06 門馬美喜｜やんツー」（アーツ前橋、群馬、2019年）、「VOCA展2018」（上野の森美術館、東京、2018年）「コンニチハ技術トシテノ美術」（せんだいメディアテーク、宮城、2017年）など。協力：福島県立相馬高等学校", en: `Miki Momma was born in 1981 in Souma-city, Fukushima and graduated from Tokyo Zokei University in 2005. She studied at China Academy of Art and Central Academy of Fine Arts in 2006-2007, afterwards travelled through the China continent while producing works and returned to Japan. In 2013, she resumed painting, which she had ceased due to The Great East Japan Earthquake. Since then, she has traveled more than 100 times between Tokyo and Souma, where no trains ran until the JR Joban Line reopened in 2020, and has been drowinghas drawn the “Route“ series which depicts the scenery mainly of the coastal areas of Fukushima Prefecture. “Route 93month Soma/Oota City” was awarded a Grand Prize in the ACRYL GOUACHE BIENNALE 2018. Recent selected exhibitions: “The Ongoing Dialogue” (Yokohama Civic Art Gallery, Kanagawa, 2019), “Art Meets 06 MOMMA Miki/yang02” (Arts Maebashi, Gunma, 2019), “VOCA2018” (The Ueno Royal Museum, Tokyo, 2018), “Nice to meet you Artechnik.” (sendai mediatheque, Miyagi, 2018). Supported by: Fukushima Prefectural Soma High School` },
            caption2: {
                id: "a6c2",
                ja: `品川火力発電所、2019年、 アクリル、板
            画材協力：ターナー色彩株式会社`,
                en: `Shinagawa Thermal Power Plant, 2019, Acrylic on panel`
            },
        },
        statement: "none"
    },
    {
        id: "artist7",
        img_portrait: "./imgs/artists/portrait/yllang.jpg",
        img_work: ["./imgs/artists/work/yllang1.jpg", "./imgs/artists/work/yllang2.jpg", "./imgs/artists/work/yllang3.jpg"],
        text: {
            name: { id: "a7name", ja: "イルーヤン・モンテネグロ", en: " Yllang Montenegro" },
            caption1: {
                id: "a7c1",
                ja: `Ang Kulay Pula (The Color Red)、2020年、 レリーフ印刷、ゴム板`,
                en: `Ang Kulay Pula (The Color Red), 2020, relief print, rubber block `
            },
            portraitcaption: { id: "a7pc", ja: "portrait：©Shrutti Garg", en: "portrait：©Shrutti Garg" },
            div_description: { id: "a7d1", ja: `フィリピンの移民労働者、フェミニスト、アーティスト。女性の移民労働者として、移民女性の権利をめぐるアクティヴィズムにかかわり、人身売買・DVの被害者やフィリピン系日本人の子どもの支援に重点をおく。2017年には草の根的な組織やアーティストをめざす人に光をあて、ファンド・レイジングを行う団体であるEmpowerment Through Artを設立。現在はUniversity of the Philippines - College of Fine Artsで絵画を専攻する。コロナ渦では、NPOや神戸の食堂とともにポストカードを販売し、移民女性の支援を行うなど、彼女の制作はアクティヴィストとしての活動と強く結びついており、彼女と似たような境遇の人々を勇気付けている。`, en: `Born 1981 in Iloilo. Yllang is a feminist and independent artist from the Philippines and was a migrant worker in Japan. As a self-taught artist, she founded Empowerment Through Art in 2017, a collective that raises funds for grassroots organizations and aspiring artists from low-income families. Yllang has recently returned to university, taking up Fine Arts at the University of the Philippines in Diliman, Quezon City. During the state of emergency, Yllang raised funds with the NPO and restaurant Asian Shokudo Sala by selling handmade postcards to support herself and other migrant women who were hit by the economic crisis. Yllang’s artistic practice is tied to her social role as an activist. Her works feature women like herself and the women around her in striking imagery of vulnerability and resistance, carved by hands that seek to empower those who are like her--speaking from and for the margins. ` },
            caption2: { id: "a7c2", ja: `Dalangin kay Mayari (Prayer to Mayari)、 2020年、 リノリウム印刷、リノリウム版`, en: `Dalangin kay Mayari (Prayer to Mayari), 2020, lino print, linoleum block` },
            caption3: { id: "a7c3", ja: `ポストカード、2020年`, en: `Various postcards, 2020` },
        },
        statement: "none"
    },
    {
        id: "artist8",
        img_portrait: "./imgs/artists/portrait/sputniko.jpg",
        img_work: ["./imgs/artists/work/spu1.jpg"],
        text: {
            name: { id: "a8name", ja: "スプツニ子!", en: " Sputniko!" },
            caption1: {
                id: "a8c1",
                ja: `Nanohana Heels、2012年、ビデオ、51秒
            Photo by Takuya Shima`,
                en: `Nanohana Heels、2012年、ビデオ、51秒
            Photo by Takuya Shima` },
            portraitcaption: { id: "a8pc", ja: "portrait：©Mami Arai", en: "portrait：©Mami Arai" },
            div_description: { id: "a8d1", ja: `アーティスト、デザイナー、東京藝術大学デザイン科准教授。インペリアル・カレッジ・ロンドン数学科および情報工学科を卒業後、英国王立芸術学院（RCA）デザイン・インタラクションズ専攻修士課程を修了。RCA在学中より、テクノロジーによって変化していく人間の在り方や社会を反映させた映像インスタレーション作品を制作。最近の主な展覧会に、「未来と芸術展」（森美術館、2019年）「Cooper Hewitt デザイントリエンナーレ」（クーパーヒューイット、アメリカ、2019年）、「BROKEN NATURE」（第22回ミラノトリエンナーレ、イタリア、2019年）、「JAPANORAMA」(ポンピドゥーセンターメス、フランス、2017年)など。2013年よりマサチューセッツ工科大学（MIT） メディアラボ 助教に就任しDesign Fiction Group を率いた。その後東京大学生産技術研究所特任准教授を経て、現職。`, en: `Born in 1985, Sputniko! is a Japanese/British artist based in Tokyo.   Sputniko! is known for her film and multi-media installation works which explore the social and ethical implications of emerging technologies. She has recently presented her works in exhibitions such as Setouchi Art Trienniale (2016)(where she created her first permanent art pavilion at the Benesse Art Site on Teshima), Milan International Design Triennale Broken Nature (2019), “Future and Arts”(Mori Art Museum, 2019). From 2017, Sputniko became an Project Associate Professor at the University of Tokyo where she is furthering her work with the Royal College of Art - IIS Design Lab.  From 2013 to 2017, Sputniko! was an Assistant Professor at the MIT Media Lab, where she directed the Design Fiction research group.  She is currently an Associate Professor of Design at Tokyo University of Arts.  To date, she has had pieces included in the permanent collections of museums such as the V&A and the 21st Century Museum of Contemporary Art, Kanazawa.` },
        },
        statement: "none"
    },
    {
        id: "artist9",
        img_portrait: "./imgs/artists/portrait/charwei.jpg",
        img_work: ["./imgs/artists/work/charwei1.jpg"],
        text: {
            name: { id: "a9name", ja: "蔡佳葳", en: "Charwei Tsai" },
            caption1: {
                id: "a9c1",
                ja: `Songs of Chuchepati Camp、 2017年、ビデオ、17分2秒
            In collaboration with Tsering Tashi Gyalthang`,
                en: `Songs of Chuchepati Camp, 2017, Video with sound & color, 17min 2sec
            In collaboration with Tsering Tashi Gyalthang` },
            portraitcaption: { id: "a9pc", ja: "portrait：©Shrutti Garg", en: "portrait：©Shrutti Garg" },
            div_description: { id: "a9d1", ja: `1980年台湾台北市出身、現在も台湾を拠点に活動。仏教哲学を中心的テーマに書道、絵画、写真、パフォーマンス、ビデオアートなどを組み合わせた内省的な作品で知られる他、先住民と伝統、疎外された個人とコミュニティ、環境や文化の問題など社会的テーマを扱った作品も手がける。近年の展覧会にジョグジャ・ビエンナーレ（2019年）、「Charwei Tsai: Bulaubulau」（CFCCA、マンチェスター、2018年）、「Hear Hear Singing」（Hayward Gallery, Southbank Centre、ロンドン、2017年）、「Water Moon」（Institute of Contemporary Art、フランス、2016年）など。2005年よりインディペンデント・キュレーション・ジャーナル『Lovely Daze』を発行。現在、『Lovely　Daze』の全集は、テート・モダン（ロンドン）、ポンピドゥー・センター（パリ）、MoMA（ニューヨーク）に収蔵されている。`, en: `Charwei Tsai was born in 1980 in Taipei, Taiwan where she currently lives and works. Tsai's artistic practice has an introspective method centered on Buddhist philosophy that combines calligraphy, painting, photography, performance and video art. Alongside, her interest in social issues motivates her to document indigenous peoples and traditions, marginalized individuals and communities, and environmental and cultural issues. She has participated in international exhibitions and biennials at Jogja Biennale (2019), “Charwei Tsai: Bulaubulau” (CFCCA, Manchester, 2018), “Hear Hear Singing” (Hayward Gallery, Southbank Centre, London, 2017), “Water Moon”(Institute of Contemporary Art, Villeurbanne, 2016) and more. She has published an independent curatorial journal Lovely Daze since 2005. The complete sets of Lovely Daze are in the library collections of Tate Modern, London, Centre Pompidou, Paris, and MoMA, New York.` },
        },
        statement: "none"
    },
    {
        id: "artist10",
        img_portrait: "./imgs/artists/portrait/yokoyama.jpg",
        img_work: ["./imgs/artists/work/yokoyama1.jpg", "./imgs/artists/work/yokoyama2.jpg"],
        text: {
            name: { id: "a10name", ja: "横山奈美", en: "Nami Yokoyama" },
            caption1: {
                id: "a10c1",
                ja: `星条旗, 2021年, 油絵, 291ｘ218.2ｘ5.3㎝`,
                en: `Stars and Stripes(US flag), 2021, Oil on canvas, 291ｘ218.2ｘ5.3㎝`
            },
            div_description: { id: "a10d1", ja: `1986年岐阜県出身、2012年愛知県立芸術大学大学院 美術研究科 油画版画領域修了。消費され捨てられる物に光を当て、それを描く「最初の物体」シリーズ（2012〜）や、ネオンをモチーフに、ガラス管や背後に存在する配電線、フレームまで克明に描く「ネオン」シリーズ（2016〜）など、物を見て描くという行為を通し、私達や物に与えられた役割や制度を再考する。主な個展に「誰もいない」 (KENJI TAKI GALLERY 、2020年)、「アペルト10  横山奈美   LOVEと私のメモリーズ」 (金沢21世紀美術館、2019年）、主なグループ展に「開館25周年記念コレクション展　VISION Part 1 光について / 光をともして」 （豊田市美術館、2020年）、「日産アートアワード 2017 」（BankART Studio NYK 2F、2017年）などがある。`, en: `Born in 1986, Gifu, Japan. Completed Oil Painting and Printmaking Course at the Aichi Prefectural University of Fine Arts and Music in 2012. Through the act of observing and drawing objects, she reconsiders the roles and systems given to us and objects. Her works include the "First Object" series (2012-), in which she shines the light on objects that are consumed and discarded, and the "Neon" series (2016-), in which she uses neon lights as a motif to clearly depict the glass tubes, power distribution lines behind them, and even the frames. Nami has held several solo exhibitions. Her major solo exhibitions include "Nobody" (Kenji Ishii Gallery, 2020), "Aperto 10: Nami Yokoyama's Memories of LOVE and Me" (21st Century Museum of Contemporary Art, Kanazawa, 2019), and her major group exhibitions include "The 25th Anniversary Collection Exhibition VISION Part 1: About Light / Let There Be Light" (Toyota Municipal Museum of Art, 2020), "The City of Toyota" (Toyota Municipal Museum of Art, 2020), and "The City of Toyota" (Toyota Municipal Museum of Art, 2020). (21st Century Museum of Contemporary Art, Kanazawa, 2019), and "Nissan Art Award 2017" (BankART Studio NYK 2F, 2017).` },
            caption2: {
                id: "a10c2",
                ja: `PAINTING、2020年、油画
            Photo by Hayato Wakabayashi`,
                en: `PAINTING, 2020, Oil on canvas
            Photo by Hayato Wakabayashi`},
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
    if (caption2data != null) {
        var nullspace = document.createElement("div");
        nullspace.className = "modal-space";
        root.appendChild(nullspace);
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
    }
    var caption3data = artistdata.text.caption3;
    if (caption3data != null) {
        var nullspace = document.createElement("div");
        nullspace.className = "modal-space";
        root.appendChild(nullspace);
        var image3 = document.createElement("img");
        image3.src = artistdata.img_work[2];
        root.appendChild(image3);
        var div = document.createElement("div");
        div.className = "modal-captionbox";
        var caption3 = document.createElement("div");
        caption3.id = caption3data.id;
        caption3.className = "modal-caption";
        div.appendChild(caption3);
        root.appendChild(div);
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
            var target = document.getElementById(this[key].id);
            if (target != null) {
                console.log(this[key].id + this[key].ja + document.getElementById(this[key].id).textContent);
                target.innerHTML = ht_str(currentLang == "ja" ? this[key].ja : this[key].en);
            }
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