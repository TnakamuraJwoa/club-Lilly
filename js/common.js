// JavaScriptからHTMLにコンテンツを追加する
var navi_content_code = `
     <div class="container-fluid">
       <a class="navbar-brand" href="#"><img class="logo_class" src="./img/Lilly_Yoko_kakou-2.png" alt=""></a>
       <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
         <div class="offcanvas-header">
           <h5 class="offcanvas-title" id="offcanvasNavbarLabel">最高級の美女と最高級の一夜</h5>
           <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
         </div>
         <div class="offcanvas-body">
           <ul class="navbar-nav">
             <li class="nav-item" onclick="window.location.href='./index.html';" style="cursor: pointer;">
               <a class="nav-link" href="#">Home</a>
               <h3 class="">ホーム</h3>
             </li>
             <li class="nav-item" onclick="window.location.href='./system.html';" style="cursor: pointer;">
               <a class="nav-link" href="#">SYSTEM</a>
               <h3 class="">システム</h3>
             </li>

             <li class="nav-item" onclick="window.location.href='./photo.html';" style="cursor: pointer;">
               <a class="nav-link" href="#">PHOTO</a>
               <h3 class="">店内写真</h3>
             </li>

             <li class="nav-item" onclick="window.location.href='./recruit.html';" style="cursor: pointer;">
               <a class="nav-link" href="#">CAST RECRUIT</a>
               <h3 class="">求人</h3>
             </li>
           </ul>
         </div>
       </div>
     </div>
`;

// コンテンツを追加するコンテナーにHTML文字列を直接追加
document.getElementById('navi-content').innerHTML = navi_content_code;




// JavaScriptからHTMLにコンテンツを追加する
var fotter_content_code = `
        <!-- Map section-->
        <section class="py-2 border-bottom">
            <div class="container">
                <iframe id="access-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12959.687042895386!2d139.57295306977542!3d35.70354290000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ef13be52120b%3A0x73c7593216c954ed!2zQ2x1YiBMaWxpeSAo5ZCJ56Wl5a-6IOOCreODo-ODkOOCr-ODqSDjg6rjg6op!5e0!3m2!1sja!2sjp!4v1706235954853!5m2!1sja!2sjp" width="100%" height="500px" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </section>
        <!-- Contact section-->
        <section class="bg-light py-5">
            <div class="container px-5 my-5 px-5">
                <div class="text-center mb-5">
                    <!-- <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div> -->
                    <h2 class="fw-bolder title_class">Contact</h2>
                    <p class="lead mt-3 sub-title">お問い合わせは<wbr>【公式】Lineからお願い致します</p>
                    <!--本番-->
                    <div class="mt-5">
                        <a id="line-button" href="https://lin.ee/gZ4OQ8I"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="40px" border="0"></a>
                    </div>
                </div>
            </div>
        </section>
        <!-- Footer-->
        <footer class="py-5 my_bar_coler">
            <div class="container px-5"><p class="m-0 text-center">Copyright &copy; CLUB Lilly 2024</p></div>
        </footer>
`;

// コンテンツを追加するコンテナーにHTML文字列を直接追加
document.getElementById('fotter-content').innerHTML = fotter_content_code;


// JavaScriptからHTMLにコンテンツを追加する
var fotter_content_code = `
        <!-- shop info-->
        <section class="bg-light py-5 border-bottom" style="background-image: url(./img/wasi.png);">
          <div class="container col-12 col-md-8">
            <h2 id="f--shopinfo">店舗基本情報</h2>
            <ul class="shop_info">
                <li>
                    <h5>店舗名</h5>
                    <p>CLUB Lilly (リリ)</p>
                </li>
                <li>
                    <h5>業種</h5>
                    <p>吉祥寺高級キャバクラ</p>
                </li>
                <li>
                    <h5>住所</h5>
                    <p>東京都武蔵野市吉祥寺本町1丁目24-5 ライトビル3F</p>
                </li>
                <li>
                    <h5>アクセス</h5>
                    <p>「吉祥寺駅」より徒歩3分</p>
                </li>
                <li>
                    <h5>電話番号</h5>
                    <p>0422-22-0778</p>
                </li>
                <li>
                    <h5>営業時間</h5>
                    <p>19:00～LAST</p>
                </li>
                <li>
                    <h5>定休日</h5>
                    <p>日曜日</p>
                </li>
            </ul>
          </div>
        </section>
`;

// コンテンツを追加するコンテナーにHTML文字列を直接追加
document.getElementById('shop-info-content').innerHTML = fotter_content_code;
