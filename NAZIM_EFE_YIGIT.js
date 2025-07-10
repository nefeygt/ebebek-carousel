// Burası siteye jquery eklemek için, jquery ile daha kolay erişiyorum variablelara
new Promise((resolve, reject) => {
  var jqueryCdn = document.createElement("script");
  jqueryCdn.onload = resolve;
  jqueryCdn.onerror = reject;
  jqueryCdn.src =
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
  jqueryCdn.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(jqueryCdn);
  var fontAwesomeCdn = document.createElement("script");
  fontAwesomeCdn.onload = resolve;
  fontAwesomeCdn.onerror = reject;
  fontAwesomeCdn.src =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js";
  fontAwesomeCdn.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(fontAwesomeCdn);
}).then(addCarousel);

function addCarousel() {
    // Ana sayfadaysak fonksiyona giriyor yoksa direkt çıkıyor
    if($(`link[rel="canonical"]`).attr("href") === "https://www.e-bebek.com") {
        let items = [];
        let html = `<div class="ney-container">
                        <div class="ney-header">
                            <div class="ney-title">
                                <h2 class="ney-title-primary">Beğenebileceğinizi Düşündüklerimiz</h2>
                            </div>
                        </div>
                        <div class="ney-carousel">
                            <div class="ney-products">
                                <!-- BİR ADET ÜRÜNÜN KODU, DİNAMİK JS İLE OLUŞTURULACAK, BEN ÖRNEK DOLDURDUM İLK İTEM İLE TOPLAM 8 İTEM VAR-->
                                
                            </div>
                            <!-- SİTEDE BUTONLAR DISABLED OLSA BİLE CURSOR POINTER GÖSTERİYOR ONU DÜZELTİCEM -->
                            <div class="ney-button-left">
                                <button aria-label="back" class="ney-prev"></button>
                            </div>
                            <div class="ney-button-right">
                                <button aria-label="back" class="ney-next"></button>
                            </div>
                        </div>
                    </div>`;
        let css = `.ney-container {
            display: flex;
            flex-direction: column;
            padding-top: 20px;
            padding-bottom: 50px;
            min-width: 0 !important;
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
            max-width: 1320px;
        }
        @media (min-width: 1580px) {
            .ney-container {
                max-width: 1320px;
            }
            .ney-product {
                width: 237.2px;
            }
        }
        @media (min-width: 1480px) {
            .ney-container {
                max-width: 1296px;
            }
            .ney-product {
                width: 272.5px;
            }
        }
        @media (min-width: 1280px) {
            .ney-container {
                max-width: 1180px;
            }
            .ney-product {
                width: 296.667px;
            }
        }
        @media (min-width: 992px) {
            .ney-container {
                max-width: 960px;
            }
            .ney-product {
                width: 335px;
            }
        }
        @media (min-width: 768px) {
            .ney-container {
                max-width: 720px;
            }
            .ney-product {
                width: 245px;
            }
        }
        @media (min-width: 576px) {
            .ney-container {
                max-width: 540px;
            }
            .ney-product {
                width: 300px;
            }
        }
        .ney-title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #fef6eb;
            padding: 25px 67px;
            border-top-left-radius: 35px;
            border-top-right-radius: 35px;
            font-family: Quicksand-Bold;
            font-weight: 700;
        }
        .ney-title-primary {
            font-family: Quicksand-Bold;
            font-size: 3rem;
            font-weight: 700;
            line-height: 1.11;
            color: #f28e00;
            margin: 0;
        }
        .ney-carousel {
            box-shadow: 15px 15px 30px 0 #ebebeb80;
            background-color: #fff;
            border-bottom-left-radius: 35px;
            border-bottom-right-radius: 35px;
            display: flex;
        }
        .ney-products {
            display: flex;
        }
        .ney-button-left {

        }
        .ney-prev {
            background: url(/assets/svg/prev.svg) no-repeat;
            background-color: #fef6eb;
            background-position: 18px;
            left: -65px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            position: absolute;
            bottom: 50%;
            top: auto;
            border: 1px solid #0000;
        }
        .ney-button-right {
            
        }
        .ney-next {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            position: absolute;
            bottom: 50%;
            top: auto;
            background: url(/assets/svg/next.svg) no-repeat;
            background-color: #fef6eb;
            background-position: 18px;
            right: -65px;
            border: 1px solid #0000;
        }
        .ney-product {
            width: 242px;
            margin-right: 20px;
        }
        .ney-product:hover {
            box-shadow: 0 0 0 0 #00000030, inset 0 0 0 3px #f28e00;
            color: #7d7d7d;
            cursor: pointer;
            z-index: 2;
        }
        .ney-product-fav {
            position: absolute;
            right: 15px;
            top: 10px;
            cursor: pointer;
            background-color: #fff;
            border-radius: 50%;
            box-shadow: 0 2px 4px 0 #00000024;
            width: 50px;
            height: 50px;
        }
        #ney-default-favorite {
            width: 25px;
            height: 25px;
            position: absolute;
            top: 13px;
            right: 12px;
            display: block;
        }
        .ney-product-fav img {
            width: 50px;
            height: 50px;
            display: block;
            transition: opacity .3s ease-in-out;
            max-width: 100% !important;
            object-fit: contain;
        }
        .ney-product-fav img.hovered {
            display: none;
        }
        .ney-product img {
            display: block;
            width: 100%;
        }
        .ney-product-image img {
            max-height: 100%;
            object-fit: contain;
            transform: scale(1);
            opacity: 1;
            transition: all .6s;
        }
        .ney-product-name-text {
            font-size: 1.2rem;
            height: 42px;
            overflow: hidden;
            margin-bottom: 10px;
        }
        .ney-product-price {
            position: relative;
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
            height: 43px;
        }
        .ney-product-price-text {
            display: block;
            width: 100%;
            font-size: 2.2rem;
            font-weight: 600;
        }
        .ney-product-indirim {
            min-height: 70px;
            padding-left: 7.5px;
        }
        .ney-product-indirim p {
            background: #eaf8f3;
            color: #4bb788;
            border-radius: 15px;
            width: -moz-fit-content;
            width: fit-content;
            padding: 5.5px 9px 4.5px;
            font-weight: 600;
            font-size: 1.08rem;
        }
        .ney-product-indirim p:last-child {
            margin-bottom: 0;
        }
        .ney-sepet {
            padding-bottom: 13px;
            padding: 0 17px 17px;
            position: relative;
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
            height: 43px;
        }
        .ney-sepet-buton {
            position: relative;
            z-index: 2;
            margin-top: 19px;
            width: 100%;
            padding: 15px 20px;
            border-radius: 37.5px;
            background-color: #fff7ec;
            color: #f28e00;
            font-family: Poppins, "cursive";
            font-size: 1.4rem;
            font-weight: 700;
            margin-top: 25px;
            cursor: pointer;
        }
        .ney-sepet-buton:hover {
            background-color: #f28e00;
            color: #fff;
        }`;
        let emptyHeart = `<img id="ney-default-favorite" src="assets/svg/default-favorite.svg" alt="heart" class="ney-heart-icon">
                          <img src="assets/svg/default-hover-favorite.svg" alt="heart" class="ney-heart-icon hovered">`;
        let filledHeart = `<img src="assets/svg/added-favorite.svg" alt="heart fill" class="ney-heart-icon">
                           <img src="assets/svg/added-favorite-hover.svg" alt="heart fill" class="ney-heart-icon hovered">`;

        // GET request ürünleri çekmek için
        async function getData() {
            const url = "https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json";
            try {
                const response = await fetch(url);
                if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
                }

                let json = await response.json();
                json = json.map(item => {
                    item.isFav = false;
                    return item;
                })
                localStorage.setItem("neyItems", JSON.stringify(json));
                return json;
            } catch (error) {
                console.error(error.message);
            }
        }

        async function loadItems() {
            const cached = localStorage.getItem("neyItems");

            if(cached) {
                items = JSON.parse(cached);
            } else {
                items = await getData();
            }
        };

        // Carousel birden fazla kez gelmesin diye clear
        function clear() {
            $(".ney-css").remove();
            $(".ney-container").remove();
        }

        // HTML ve CSS'i ekliyoruz
        function addComponents() {
            $("head").append(`<style class="ney-css">${css}</style>`)
            $(html).insertAfter(".Section1");
        }

        // Ürünleri ekliyoruz
        function addItems(arr) {
            arr.forEach(item => {
                let itemHTML = `<div class="ney-product">
                                    <div class="ney-product-link"></div>
                                    <div class="ney-product-fav">
                                        <!-- SİTEDEN OLDUĞU GİBİ ALDIM -->
                                        <!-- KALP BURAYA -->
                                    </div>
                                    <div class="ney-product-image">
                                        <img class="ney-image-element" alt="${item.name}" src="${item.img}">
                                    </div>
                                    <div class="ney-product-name">
                                        <h2 class="ney-product-name-text">
                                            <b> ${item.brand} </b>
                                            <span> ${item.name} </span>
                                        </h2>
                                    </div>
                                    <div class="ney-product-price">
                                        <!-- EĞER KAYARSA ORİJİNAL SİTEDE BURADA BİR ELEMENT VAR O ALINABİLİR -->
                                        <span class="ney-product-price-text">${item.original_price} TL</span>
                                    </div>
                                    <div class="ney-product-indirim">
                                        <!-- EĞER İNDİRİM VARSA BUNUN İÇİ DOLU YOKSA BU DİREKT YOK -->
                                        <p>Sepette ${item.price} TL!</p>
                                    </div>
                                    <div class="ney-sepet">
                                        <button type="submit" class="ney-sepet-buton">Sepete Ekle</button>
                                    </div>
                                </div>`;
                                    
                $(".ney-products").append(itemHTML);
            });
        }
        
        (function init() {
            loadItems();
            clear();
            addComponents();
            addItems(items);
        })();

    } else {
        console.log("wrong page");
    }
};