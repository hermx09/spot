import React from 'react';
import "./index.css";
import Form from './Form';



function App() {

   
  
  return (
  <div>
  
   <header className=' mx-auto  container flex  md:p-5 flex-col items-center '>
    
     
        <span className=' font-medium text-gray-800 text-[min(5vw,50px)] underline decoration-red-200 mt-5'>第二回京王線スポット総選挙</span>
      
  </header>
      <nav className= 'text-base    bg-gray-600  text-white opacity-80  p-5 flex-row text-center text-[min(3vw,30px)] '>
            <a href="#Home" className='mr-10 hover:text-blue-400 duration-300'>Home</a>
            <a href="#Contents" className='mr-10 hover:text-blue-400 duration-300'>Contents</a>
            <a href="#Contact" className=' hover:text-blue-400 duration-300'>Contact</a>
      </nav>
      
      <div className=' text-base mt-auto text-[min(3vw,30px)] md:p-5 flex justify-end whitespace-nowrap' >明治大学出見世ゼミ✖️京王電鉄プロジェクト<a href = "https://www.instagram.com/keio_jinryu/"><img src="insta.png" className='h-8 w-8 ml-3 rounded hover:opacity-50 duration-300' /></a><a href = "https://twitter.com/keio_jinryu"><img src="x.jpeg" className='h-8 w-8 ml-1 rounded hover:opacity-50 duration-300' /></a></div>
    
   
  <a name= "Home"><div className='md:flex mt-auto my-auto'>
    <img src = "poster.png" className='w-2/3 md:w-1/3 max-h-screen rounded-2xl'/>
    <div className=' my-5 text-[min(3vw,30px)] animate-fadeIn ' >
     <span className='underline decoration-red-200 text-center '>
      京王線スポット総選挙とは？
     </span>
     <p></p>
     <div className=" text-base border-double border-2 text-[min(4vw,18px)]  border-cyan-700 rounded-2xl md:text-2xl" >
      京王線スポット総選挙とは、「10月1日~11月15日」の期間で大学生を中心に行われた、京王沿線の観光スポットの人気総選挙です！
      今回は第二回で、結果は左のポスターの通りです。<p></p>
      今回紹介するコースの中で、京王線スポット総選挙を見たと伝えれば、おまけや割引などのインセンティブを取り入れてくれているスポットもあるので
      ぜひ立ち寄ってみてはいかがですか？
     </div>
    </div>
    
  </div></a>
   
   <a href = "#" className='fixed right-5 bottom-5'><img src='arrow.png' className='h-10 w-10  md:h-20 md:w-20 rounded-full opacity-50 hover:opacity-80 ' /></a>
   <p></p>
        <a name= "Contents" className=' text-[min(5vw,60px)] underline decoration-red-200 mt-10'>京王沿線のスポットを楽しめるコース13選</a>
        <h2 className=' text-[min(3vw,30px)]'>第二回京王線スポット総選挙に出ていた観光スポットを絡めた13個のコースをご紹介します。おおよその所要時間と目安の金額も記載しているので、休みの日や授業の空きコマ等に電車で遊びに行ってもてください！</h2>
        <p></p>
        <p></p>
        <ol className='border-solid border-2 border-gray-200 text-cyan-700 text-[min(3vw,30px)] ' >
            <li><a href="#spot1" className='hover:underline hover:text-cyan-900 duration-500'>01 長沼公園で心と体をリフレッシュ (長沼駅~京王片倉駅)<br/>
            [5時間:3000円]</a></li>
            <li><a href="#spot2" className='hover:underline hover:text-cyan-900'>02 新鮮な海鮮を食べた後は大迫力の東京競馬場へ！(府中駅周辺)<br/>
            [3時間:1000円~]</a></li>
            <li><a href="#spot3" className='hover:underline hover:text-cyan-900'>03 温泉で体を洗い流した夜はキャンプ (高尾山口駅~高尾駅)<br/>
            [宿泊:6000円]</a></li>
            <li><a href="#spot4" className='hover:underline hover:text-cyan-900'>04 お洒落な古着&グルメ巡り (布田駅)<br/>
            [1時間半:3000円]</a></li>
            <li><a href="#spot5" className='hover:underline hover:text-cyan-900'>05 深大寺、植物園、温泉で喧騒から離れてゆったり (調布駅周辺)<br/>
            [3時間半:3000円]</a></li>
            <li><a href="#spot6" className='hover:underline hover:text-cyan-900'>06 映えるお寺カフェの後は食べ歩き (仙川駅)<br/>
            [2時間:1500円]</a></li>
            <li><a href="#spot7" className='hover:underline hover:text-cyan-900'>07 映画の撮影地にもなった商店街からのアウトレット! (南大沢駅)<br/>
            [半日:~]</a></li>
            <li><a href="#spot8" className='hover:underline hover:text-cyan-900'>08 ぶどう狩りも後は温泉でお腹も体も大満足 (仙川駅)<br/>
            [5時間:4000円]</a></li>
            <li><a href="#spot9" className='hover:underline hover:text-cyan-900'>09 食べ歩き、お参り、桜の名所! (調布駅)<br/>
            [1時間半:1000円]</a></li>
            <li><a href="#spot10" className='hover:underline hover:text-cyan-900'>10 よみうりランドとHANA・BIYORIで一日中遊べる (よみうりランド駅)<br/>
            [半日:7000円]</a></li>
            <li><a href="#spot11" className='hover:underline hover:text-cyan-900'>11 古着巡りからの映画コース (京王多摩センター駅)<br/>
            [5時間:5000円]</a></li>
            <li><a href="#spot12" className='hover:underline hover:text-cyan-900'>12 たくさんの猿を見て癒される! (高尾山口駅)<br/>
            [2時間:1500円]</a></li>
            <li><a href="#spot13" className='hover:underline hover:text-cyan-900'>13 内海果樹園の野菜を使った料理で健康的なご飯！ (八幡山駅)</a></li>
            <p></p>
            <p></p>
        </ol>
        <h2><a name = "spot1"><div id = "spots" className=' text-[min(5vw,50px)] mt-5 underline decoration-red-200'>01 東京都立長沼公園 → 鎌田鳥山 → 竜泉寺の湯八王子みなみ野店(長沼駅)</div></a></h2>
        <img src="長沼1.jpeg" className=' h-2/3 w-full  md:w-2/3' /><br/>
        <h3 className=' text-[min(3vw,30px)]'>都内にも関わらず森林浴が楽しめる長沼公園で景色を見た後は、鎌田鳥山でご飯を食べて締めに竜泉寺の湯でゆったり。</h3>
        <h3 className=' text-[min(3vw,30px)]'>日々の喧騒から離れた一日でデジタルデトックスしてみてはいかがですか？</h3>
            <p></p>
        <img src="長沼2.jpeg"  className=' w-full  md:w-2/3'/><br/>
        <h4  className='border-solid border-2 border-gray-300 text-[min(3vw,30px)]'>[infomation:長沼公園]<br/>
            <p></p>
            <p>住所:東京都八王子市長沼町・下柚木</p>
            <p>アクセス:京王線「長沼駅」徒歩5分</p>
            <p>詳細:<a href="https://www.tokyo-park.or.jp/park/format/access067.html" className='text-cyan-700 text-[min(3vw,30px)] hover:text-cyan-900 hover:underline'>長沼公園公式サイト</a></p></h4>
            <p></p>
            <h2><a name = "spot2"><div id = "spots"  className=' text-[min(5vw,50px)] underline decoration-red-200'>02 大東京綜合卸売センター → 東京競馬場 (分倍河原駅、府中競馬正門前駅)</div></a></h2>
        <img src="卸売り.jpeg"  className=' h-[20rem]  md:h-[40rem] w-full  md:w-2/3'/><br/>
        <h3 className=' text-[min(3vw,30px)]'>午前に新鮮な海鮮を食べて、賭けても賭けなくても楽しめる東京競馬場へ！</h3>
        <img src="競馬.jpeg"  className=' w-full  md:w-2/3'/><br/>
        <h4  className='border-solid border-2 border-gray-300 text-[min(3vw,30px)]'>[infomation:大東京綜合卸売センター]
            <p></p>
            <p>住所:東京都府中市矢崎町4-1</p>
            <p>アクセス:京王線「分倍河原駅」よりバスで「郷土の森総合体育館」下車徒歩5分</p>
            <p>詳細:<a href="https://www.fuchu-doc.co.jp" className='text-cyan-700 text-[min(3vw,30px)] hover:text-cyan-900 hover:underline'>大東京綜合卸売センター公式サイト</a></p></h4>
        <h4  className='border-solid border-2 border-gray-300 text-[min(3vw,30px)]'>[infomation:東京競馬場]<br/>
            <p></p>
            <p>住所:東京都府中市日吉町１−１</p>
            <p>アクセス:京王線「府中競馬正門前駅」徒歩２分</p>
            <p>詳細:<a href="https://www.jra.go.jp/facilities/race/tokyo/" className='text-cyan-700 text-[min(3vw,30px)] hover:text-cyan-900 hover:underline'>東京競馬場 JRA公式サイト</a></p></h4>
            <h2><a name = "spot3"><div id = "spots" className=' text-[min(5vw,50px)] underline decoration-red-200'>03 京王高尾山温泉 極楽湯 → TAKAO CAMP PARK -RAFT- (高尾駅)</div></a></h2>
        <img src="キャンプ1.jpeg"  className=' w-full  md:w-2/3 md:h-[40rem] h-[20rem]'/><br/>
        <h3 className=' text-[min(3vw,30px)]'>体を洗い流した後はキャンプへ！薪割り、ピザ作りなどの様々なアクティビティを楽しむことができます。</h3>
        <img src="キャンプ2.jpeg"  className=' w-full  md:w-2/3 h-[20rem] md:h-[40rem]'/><br/>
        <h4 className='border-solid border-2 border-gray-300 text-[min(3vw,30px)]'>[infomation:TAKAO CAMP PARK -RAFT-]<br/>
            <p></p>
            <p>住所:東京都八王子市元八王子町2-1419</p>
            <p>アクセス:京王線「高尾駅」よりバスで「元八二丁目北」徒５分</p>
            <p>詳細:<a href="https://raft.bz/camp" className='text-cyan-700 text-[min(3vw,30px)] hover:text-cyan-900 hover:underline'>高尾キャンプパーク公式サイト</a></p></h4>
            <h2><a name="spot4"><div id = "spots" className=' text-[min(5vw,50px)] underline decoration-red-200'>04 Vintage&Used BYRE → パンケーキ専門店バター&ミルク(布田駅)</div></a></h2>
        <img src="BYRE1.jpeg"  className=' w-full  md:w-2/3 md:h-[40rem] h-[20rem]' /><br/>
        <h3 className=' text-[min(3vw,30px)]'>牛舎を改装して作られたおしゃれな店内の古着屋を見た後はパンケーキを食べて一休み！</h3><br/>
        <img src="BYRE2.jpeg"  className=' w-full  md:w-2/3 md:h-[40rem] h-[20rem]'/><br/>
        <h4  className='border-solid border-2 border-gray-300 text-[min(3vw,30px)]'>[infomation:Vintage&Used BYRE]<br/>
            <p></p>
            <p>住所:東京都調布市布田3-53-3</p>
            <p>アクセス:京王線「布田駅」徒歩５分</p>
            <p>詳細:<a href = "https://byre-chofu.com/" className='text-cyan-700 text-[min(3vw,30px)] hover:text-cyan-900 hover:underline'>Vintage&Used BYRE公式サイト</a></p></h4> 
            <h2><a name = "spot5"><div id = "spots" className=' text-[min(5vw,50px)] underline decoration-red-200'>05 深大寺 → 神代植物公園 → 深大寺天然温泉 湯守の里(調布駅、つつじヶ丘駅)</div></a></h2>
        <img src="深大寺.jpeg"  className=' w-full  md:w-2/3 h-[20rem] md:h-[40rem]'/><br/>
        <h3 className=' text-[min(3vw,30px)]'>深大寺でお参りをした後に4500種類の植物が植えられている歴史ある植物園へ。</h3>
        <img src="神代植物公園.jpeg"  className=' w-full  md:w-2/3'/><br/>
        <h3 className=' text-[min(3vw,30px)]'>締めは深大寺天然温泉で！</h3>
        <img src="天然温泉.jpg"  className=' w-full  md:w-2/3 h-[20rem] md:h-[40rem]'/><br/>
        <h4  className='border-solid border-2 border-gray-300 text-[min(3vw,30px)]'>[infomation:深大寺]<br/>
            <p></p>
            <p>住所:東京都調布市深大寺元町５-15</p>
            <p>アクセス:京王線「調布駅」「つつじヶ丘駅」よりバスで「深大寺」徒歩１分</p>
            <p>詳細:<a href = "https://www.jindaiji.or.jp/" className='text-cyan-700 text-[min(3vw,30px)] hover:text-cyan-900 hover:underline'>深大寺公式サイト</a></p></h4>
        <h4 className="info1  text-[min(3vw,30px)]">[infomation:神代植物公園]<br/>
                <p></p>
                <p>住所:調布市深大寺元町5-31-10</p>
                <p>アクセス:京王線「調布駅」よりバスで「神代植物公園前」下車徒歩2分</p>
                <p>詳細:<a href = "https://www.tokyo-park.or.jp/jindai/" className='text-cyan-700 text-[min(3vw,30px)] hover:text-cyan-900 hover:underline'>神代植物公園公式サイト</a></p></h4>
        <h4  className='border-solid border-2 border-gray-300 text-[min(3vw,30px)]'>[infomation:深大寺天然温泉　湯守の里]<br/>
                    <p></p>
                    <p>住所:東京都調布市深大寺元町２-12-2</p>
                    <p>アクセス:京王線「調布駅」より無料シャトルバス10分</p>
                    <p>詳細:<a href = "https://www.yumorinosato.com" className='text-cyan-700 text-[min(3vw,30px)] hover:text-cyan-900 hover:underline'>深大寺天然温泉　湯守の里公式サイト</a></p></h4>
                    <h2><a name = "spot6"><div id = "spots" className=' text-[min(5vw,50px)] underline decoration-red-200'>06 一龍院 → 仙川商店街(仙川駅)</div></a></h2>
        <img src="一龍院.jpg"  className=' w-full  md:w-2/3'/><br/>
        <h3 className=' text-[min(3vw,30px)]'>他では見られない御朱印のデザイン、お寺の一部を改装した斬新なカフェを楽しんだあとは、最寄駅の仙川商店街へ。</h3>
        <img src="仙川商店街.jpeg"  className=' w-full  md:w-2/3 h-[20rem] md:h-[40rem]'/><br/>
        <h4  className='border-solid border-2 border-gray-300 text-[min(3vw,30px)]'>[infomation:一龍院]<br/>
            <p></p>
            <p>住所:東京都調布市入間町1-38-1</p>
            <p>アクセス:京王線「仙川駅」徒歩１５分</p>
            <p>詳細:<a href = "https://www.ichiryuin.com/" className='text-cyan-700 text-[min(3vw,30px)] hover:text-cyan-900 hover:underline'>一龍院公式サイト</a></p></h4>
        <h4  className='border-solid border-2 border-gray-300 text-[min(3vw,30px)]'>[infomation:仙川商店街]<br/>
                <p></p>
                <p>住所:東京都調布市仙川町１丁目６−１０</p>
                <p>アクセス:京王線「仙川駅」徒歩１分</p>
                <p>詳細:<a href = "https://www.sengawa.com" className='text-cyan-700 text-[min(3vw,30px)] hover:text-cyan-900 hover:underline'>仙川商店街公式サイト</a></p></h4>
                <h2><a name = "spot7"><div id = "spots" className=' text-[min(5vw,50px)] underline decoration-red-200'>07 南大沢三丁目商店街 → アウトレットパーク多摩南大沢(南大沢駅)</div></a></h2>
        <img src="南大沢1.jpeg"  className=' w-full  md:w-2/3 h-[20rem] md:h-[40rem]'/><br/>
        <h3 className=' text-[min(3vw,30px)]'>映画の撮影にも使われた、人が戻ってきた地域と繋がっている商店街で、おしゃれなお店もある</h3>
        <h3 className=' text-[min(3vw,30px)]'>商店街を楽しんだ後はアウトレットでお買い物！</h3>
        <img src="南大沢2.jpeg"  className=' w-full  md:w-2/3 h-[20rem] md:h-[40rem]'/><br/>
        <h4  className='border-solid border-2 border-gray-300 text-[min(3vw,30px)]'>[infomation:南大沢三丁目商店街]<br/>
            <p></p>
            <p>住所:東京都八王子市南大沢3</p>
            <p>アクセス:京王線「南大沢駅」徒歩１５分</p>
            </h4>
        <h2><a name = "spot8"><div id = "spots" className=' text-[min(5vw,50px)] underline decoration-red-200'>08 山内ぶどう園 → 仙川湯けむりの里 → 中華そば　しば田(仙川駅)</div></a></h2>
        <img src="ぶどう1.jpeg"  className=' w-full  md:w-2/3 h-[20rem] md:h-[40rem]'/><br/>
        <h3 className=' text-[min(3vw,30px)]'>山内ぶどう園でぶどう狩りや野菜を採ったをした後は、去年の人気選挙でランクインした温泉に行き、締めのラーメンで体もお腹も大満足！</h3>
        <img src="ぶどう2.jpeg"  className=' w-full  md:w-2/3 h-[20rem] md:h-[40rem]'/><br/>
        <h4  className='border-solid border-2 border-gray-300 text-[min(3vw,30px)]'>[infomation:山内ぶどう園]<br/>
            <p></p>
            <p>住所:東京都調布市若葉町3-28-2</p>
            <p>アクセス:京王線「仙川駅」徒歩10分</p>
            <p>詳細:<a href = "https://www.facebook.com/yamauchikaju/?locale=ja_JP" className='text-cyan-700 text-[min(3vw,30px)] hover:text-cyan-900 hover:underline'>山内ぶどう園公式Facebook</a></p></h4>
        <h2><a neme = "spot9"><div id = "spots" className=' text-[min(5vw,50px)] underline decoration-red-200'>09 天神通り商店会 → 布多天神社 → ハリウッドの大寒桜(調布駅)</div></a></h2>
        <img src="天神1.jpeg"  className=' w-full  md:w-2/3 h-[20rem] md:h-[40rem]'/><br/>
        <h3 className=' text-[min(3vw,30px)]'>ゲゲゲの鬼太郎のキャラクターたちを横目に商店街を楽しんだ後は布多天神社でお参り。</h3>
        <h3 className=' text-[min(3vw,30px)]'>帰り道は桜の名所へ！</h3>
        <img src="天神2.jpeg"  className=' w-full  md:w-2/3 h-[20rem] md:h-[40rem]'/><br/>
        <h4  className='border-solid border-2 border-gray-300 text-[min(3vw,30px)]'>[infomation:天神通り商店会]<br/>
            <p></p>
            <p>住所:東京都調布市布田1-3-1</p>
            <p>アクセス:京王線「調布駅」徒歩1分</p>
            <p>詳細:<a href = "https://tenjindo-ri.jp" className='text-cyan-700 text-[min(3vw,30px)] hover:text-cyan-900 hover:underline'>天神通り商店会公式サイト</a></p></h4>
        <h2><a name = "spot10"><div id ="spots" className=' text-[min(5vw,50px)] underline decoration-red-200'>10 HANA・BIYORI → よみうりランド(よみうりランド駅)</div></a></h2>
        <img src="HANA1.jpeg"  className=' w-full  md:w-2/3 h-[20rem] md:h-[40rem]'/><br/>
        <h3 className=' text-[min(3vw,30px)]'>多様な花だけでなく、デジタルアートとの融合も楽しめる革新的な施設であるHANA・BIYORIへ！</h3>
        <img src="HANA2.jpeg"  className=' w-full  md:w-2/3 h-[20rem] md:h-[40rem]'/><br/>
        <h3 className=' text-[min(3vw,30px)]'>そのあとはよみうりランドで五感が刺激される一日に！</h3>
        <h4  className='border-solid border-2 border-gray-300 text-[min(3vw,30px)]'>[infomation:HANA・BIYORI]<br/>
            <p></p>
            <p>住所:東京都稲城市矢野口４０１５−１</p>
            <p>アクセス:京王線「よみうりランド駅」より無料シャトルバス3分もしくは徒歩10分</p>
            <p>詳細:<a href = "https://www.yomiuriland.com/hanabiyori/" className='text-cyan-700 text-[min(3vw,30px)] hover:text-cyan-900 hover:underline'>HANA・BIYORI公式サイト</a></p></h4>
        <h2><a name = "spot11"><div id = "spots" className=' text-[min(5vw,50px)] underline decoration-red-200'>11 古着屋SAJI → イオンシネマ多摩センター → 喫茶リエート(多摩センター駅)</div></a></h2>
        <img src="SAJI1.jpeg"  className=' w-full  md:w-2/3 h-[20rem] md:h-[40rem]'/><br/>
        <h3 className=' text-[min(3vw,30px)]'>おしゃれな店内でドメスティックブランドやレディースも多く扱っている古着屋SAJIへ。</h3>
        <img src="SAJI2.jpeg"  className=' w-full  md:w-2/3 h-[20rem] md:h-[40rem]'/><br/>
        <h3 className=' text-[min(3vw,30px)]'>一通り楽しんだら映画を見て喫茶でゆったり！古着好きにもおすすめのコースです。</h3>
        <h4  className='border-solid border-2 border-gray-300 text-[min(3vw,30px)]'>[infomation:古着屋SAJI]<br/>
            <p></p>
            <p>住所:東京都多摩市落合４丁目８−１ 101</p>
            <p>アクセス:京王線「多摩センター駅」よりバスで「青木葉公園」下車徒歩7分</p>
            <p>詳細:<a href = "https://sajiused.theshop.jp" className='text-cyan-700 text-[min(3vw,30px)] hover:text-cyan-900 hover:underline'>古着屋SAJI公式サイト</a></p></h4>
        <h2><a name = "spot12"><div id = "spots" className=' text-[min(5vw,50px)] underline decoration-red-200'>12 高尾山さる園・野草園 → 高橋屋(高尾山駅)</div></a></h2>
        <img src="猿1.jpeg"  className=' w-full  md:w-2/3 h-[20rem] md:h-[40rem]'/><br/>
        <h3 className=' text-[min(3vw,30px)]'>70頭以上いるというさる達の可愛らしい姿に癒された後は高橋屋というそば屋さんへ！</h3>
        <img src="猿2.jpeg"  className=' w-full  md:w-2/3 h-[20rem] md:h-[40rem]'/><br/>
        <h4  className='border-solid border-2 border-gray-300 text-[min(3vw,30px)]'>[infomation:高尾山さる園・野草園]<br/>
            <p></p>
            <p>住所:東京都稲城市矢野口４０１５−１</p>
            <p>アクセス:ケーブルカー「高尾山乗り場」徒歩3分</p>
            <p>詳細:<a href="https://www.takao-monkey-park.jp" className='text-cyan-700 text-[min(3vw,30px)] hover:text-cyan-900 hover:underline'>高尾山さる園・野草園公式サイト</a></p>
        </h4>
        <h2><a name = "spot13"><div id = "spots" className=' text-[min(5vw,50px)] underline decoration-red-200'>13 内海果樹園 → さんぱち食堂(八幡山駅)</div></a></h2>
        <img src= "kaju.jpeg"  className=' w-full  md:w-2/3 h-[20rem] md:h-[40rem]'/><br/>
        <h3 className=' text-[min(3vw,30px)]'>内海果樹園は今年の天候の影響で不作のため、野菜を取るのは難しいけど、近くのさんぱち食堂で内海果樹園の野菜を使った食事ができる！</h3>
        <h4  className='border-solid border-2 border-gray-300 mb-14 text-[min(3vw,30px)]'>[infomation:内海果樹園]<br/>
            <p></p>
            <p>住所:東京都世田谷区千歳台4-10</p>
            <p>アクセス:京王線「八幡山駅」よりバスで「希望ヶ丘団地」下車徒歩10分</p>
            <p>詳細:<a href="https://www.facebook.com/apple.utsumi/?locale=ja_JP" className='text-cyan-700 text-[min(3vw,30px)] hover:text-cyan-900 hover:underline'>内海果樹園公式Facebook</a></p>
        </h4 >
        
        <Form />
        
        
        
        
  
  </div>

  );

  };


export default App;
