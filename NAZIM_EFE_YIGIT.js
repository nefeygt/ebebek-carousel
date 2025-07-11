// Burası siteye jquery eklemek için, jquery ile daha kolay erişiyorum variablelara
new Promise((resolve, reject) => {
    const loadScript = (src) => {
        return new Promise((res, rej) => {
            const script = document.createElement("script");
            script.onload = res;
            script.onerror = rej;
            script.src = src;
            script.type = "text/javascript";
            document.getElementsByTagName("head")[0].appendChild(script);
        });
    };

    Promise.all([
        loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"),
        loadScript("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/js/all.min.js")
    ])
    .then(resolve)
    .catch(reject);
}).then(addCarousel)
.catch(error => {
    console.error("Failed to load necessary scripts:", error);
});

function addCarousel() {
    // Ana sayfadaysak fonksiyona giriyor yoksa direkt çıkıyor
    if($(`link[rel="canonical"]`).attr("href") === "https://www.e-bebek.com") {
        let items = [];
        let sliderInfo = {
            currentSlide: 5,
            shownItem: 5
        };
        let html = `<div class="ney-container">
                        <div class="ney-button-left"></div>
                        <div class="ney-button-right"></div>
                        <div class="ney-header">
                            <div class="ney-title">
                                <h2 class="ney-title-primary">Beğenebileceğinizi Düşündüklerimiz</h2>
                            </div>
                        </div>
                        <div class="ney-carousel">
                            <div class="ney-products">
                                <!-- BİR ADET ÜRÜNÜN KODU, DİNAMİK JS İLE OLUŞTURULACAK, BEN ÖRNEK DOLDURDUM İLK İTEM İLE TOPLAM 8 İTEM VAR-->
                                
                            </div>
                        </div>
                    </div>`;
        let css = `.ney-container {
            display: flex;
            flex-direction: column;
            padding-top: 20px;
            padding-bottom: 50px;
            min-width: 0 !important;
            width: 1320px;
            margin-right: auto;
            margin-left: auto;
            max-width: 1320px;
            position: relative;
            gap: 20px;
        }
        .ney-products .ney-product {
            width: calc((1320px / 5) - 20px);
        }
        @media (max-width: 1580px) {
            .ney-container {
                width: 1320px;
            }
            .ney-products .ney-product {
                width: calc((1320px / 5) - 20px);
            }
        }
        @media (max-width: 1480px) {
            .ney-container {
                width: 1296px;
            }
            .ney-products .ney-product {
                width: calc((1296px / 4) - 48px);
            }
        }
        @media (max-width: 1280px) {
            .ney-container {
                width: 930px;
            }
            .ney-products .ney-product {
                width: calc((930px / 3) - 20px);
            }
        }
        @media (max-width: 992px) {
            .ney-container {
                width: 720px;
            }
            .ney-products .ney-product {
                width: calc((720px / 2) - 20px);
            }
        }
        @media (max-width: 768px) {
            .ney-container {
                width: 690px;
            }
            .ney-product {
                width: calc((690px / 2) - 20px);
            }
        }
            /* TELEFONDA ÇALIŞTIRMAK İÇİN
        @media (max-width: 576px) {
            .ney-container {
                width: 400px;
            }
            .ney-product {
                width: 380px;
            }
        } */

        .ney-button-left {
            position: absolute;
            top: 50%;
            background: url(https://cdn06.e-bebek.com/assets/svg/prev.svg) no-repeat;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #fef6eb;
            background-position: 18px;
            left: -65px;
        }
        .ney-button-left:hover, .ney-button-right:hover {
            cursor: pointer;
            background-color: #fff;
            border: 1px solid #f28e00;
        }
        .ney-button-right {
            position: absolute;
            top: 50%;
            background: url(https://cdn06.e-bebek.com/assets/svg/next.svg) no-repeat;
            background-color: #fef6eb;
            background-position: 18px;
            right: -65px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
        .ney-header {
            width: 100%;
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
            overflow: hidden;
        }
        .ney-products {
            display: flex;
            gap: 20px;
            transition: transform .3s ease-in-out;
        }
        .ney-product {
            width: 242px;
            border: 1px solid #ededed;
            border-radius: 10px;
            position: relative;
            margin-left: 0px;
            margin-bottom: 30px;
            /* TRANSITION EKLEDİM */
            transition: all 0.3s ease;
        }
        .ney-product:hover {
            border:1px solid #f28e00;
            box-shadow: inset 0 0 0 2px #f28e00;
            color: #7d7d7d;
            cursor: pointer;
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
            z-index: 1;
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
            margin-bottom: 26px;
        }
        .ney-product-image img {
            max-height: 100%;
            object-fit: contain;
            transform: scale(1);
            opacity: 1;
            transition: all .6s;
            padding: 24px;
        }
        .ney-product-name {
            padding-left: 24px;
            padding-right: 28px;
            margin-bottom: 30px;
        }
        .ney-product-name-text {
            font-size: 1.2rem;
            height: 42px;
            overflow: hidden;
        }
        .ney-product-price {
            position: relative;
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
            height: 43px;
            padding: 24px;
        }
        .ney-product-price-text {
            display: block;
            width: 100%;
            font-size: 2.2rem;
            font-weight: 600;
        }
        .ney-product-indirim {
            min-height: 70px;
            padding-left: 13.5px;
            margin-bottom: 40px;
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
            transition: all 0.3s ease;
            border: none;
        }
        .ney-sepet-buton:hover {
            background-color: #f28e00;
            color: #fff;
        }`;
        let emptyHeart = `<img id="ney-default-favorite" src="https://www.e-bebek.com/assets/svg/default-favorite.svg" alt="heart" class="ney-heart-empty">`;
        let filledHeart = `<img src="https://www.e-bebek.com/assets/svg/added-favorite.svg" alt="heart fill" class="ney-heart-filled">`;
        let emptyHover = "https://www.e-bebek.com/assets/svg/default-hover-favorite.svg";
        let filledHover = "https://www.e-bebek.com/assets/svg/added-favorite-hover.svg";

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
                // Önceden fava eklenmiş mi
                let heart = emptyHeart;
                if(item.isFav) {
                    heart = filledHeart;
                }
                
                // İndirimli mi değil mi
                let discountHTML = '';
                if(item.price < item.original_price) {
                    let discountRate = Math.floor(100 - ((item.price * 100) / item.original_price));
                    discountHTML = `<p>%${discountRate} indirim! Sepette sadece ${item.price} TL!</p>`;
                }
                
                let itemHTML = `<div class="ney-product" data-url="${item.url}">
                                    <div class="ney-product-fav">
                                        <!-- KALP BURAYA -->
                                        ${heart}
                                    </div>
                                    <div class="ney-product-image">
                                        <img class="ney-image-element" alt="${item.name}" src="${item.img}">
                                    </div>
                                    <div class="ney-product-name">
                                        <h2 class="ney-product-name-text">
                                            <b> ${item.brand} -</b>
                                            <span> ${item.name} </span>
                                        </h2>
                                    </div>
                                    <div class="ney-product-price">
                                        <!-- EĞER KAYARSA ORİJİNAL SİTEDE BURADA BİR ELEMENT VAR O ALINABİLİR -->
                                        <span class="ney-product-price-text">${item.original_price} TL</span>
                                    </div>
                                    <div class="ney-product-indirim">
                                        <!-- EĞER İNDİRİM VARSA BUNUN İÇİ DOLU YOKSA BU DİREKT YOK -->
                                        ${discountHTML}
                                    </div>
                                    <div class="ney-sepet">
                                        <button type="submit" class="ney-sepet-buton">Sepete Ekle</button>
                                    </div>
                                </div>`;
                                    
                $(".ney-products").append(itemHTML);
            });
        }
        
        function handleEventListenerSet() {
            // Yeni sekmede ürünün sayfası
            $(".ney-product").on("click", function () {
                let url = $(this).data("url");
                if (url) {
                    window.open(url, "_blank");
                }
            });

            $(".ney-sepet-buton").on("click", function (e) {
                // Sepete ekleye basınca linke gitmesin diye
                e.stopPropagation();
            });
            // Kalbe tıklayınca olacaklar
            $(".ney-product-fav").on("click", function (e) {
                // Kalbe basınca linke gitmesin diye
                e.stopPropagation();
                // O iteme ulaşmanın en yakın yolu
                let itemLink = $(this).closest(".ney-product").data("url");
                let curItem = items.find(item => item.url === itemLink);
                const img = $(this).find("img");

                curItem.isFav = !curItem.isFav;

                if(curItem.isFav) {
                    img.attr("src", "https://www.e-bebek.com/assets/svg/added-favorite.svg");
                    img.removeAttr('id');
                } else {
                    img.attr("src", "https://www.e-bebek.com/assets/svg/default-favorite.svg");
                    img.attr('id', 'ney-default-favorite');
                }

                localStorage.setItem("neyItems", JSON.stringify(items));
            });

            // Hoverı burada yapmak daha kolay
            $(".ney-product-fav").on("mouseenter", function () {
                let itemLink = $(this).closest(".ney-product").data("url");
                let curItem = items.find(item => item.url === itemLink);
                const img = $(this).find("img");

                if (curItem.isFav) {
                    img.attr("src", filledHover);
                } else {
                    img.attr("src", emptyHover);
                    img.removeAttr('id');
                }
            });

            $(".ney-product-fav").on("mouseleave", function () {
                let itemLink = $(this).closest(".ney-product").data("url");
                let curItem = items.find(item => item.url === itemLink);
                const img = $(this).find("img");

                if (curItem.isFav) {
                    img.attr("src", "https://www.e-bebek.com/assets/svg/added-favorite.svg");
                } else {
                    img.attr("src", "https://www.e-bebek.com/assets/svg/default-favorite.svg");
                    img.attr('id', 'ney-default-favorite');
                }
            });

            // Resize olunca
            window.addEventListener('resize', () => {
                // Medianın hangisine giriyor diye bakmak için
                let windowWidth = window.innerWidth;

                if (windowWidth < 768) {
                    sliderInfo.shownItem = 2;
                } else if (windowWidth >= 768 && windowWidth < 992) {
                    sliderInfo.shownItem = 2;
                }
                else if (windowWidth >= 992 && windowWidth < 1280) {
                    sliderInfo.shownItem = 3;
                }
                else if (windowWidth >= 1280 && windowWidth < 1480) {
                    sliderInfo.shownItem = 4;
                }
                else if (windowWidth >= 1480 && windowWidth < 1580) {
                    sliderInfo.shownItem = 5;
                } else {
                    sliderInfo.shownItem = 5;
                }
            });

            $(".ney-button-left").on("click", function () {
                // İlk slaytta değilse
                if (sliderInfo.currentSlide >= sliderInfo.shownItem) {
                    sliderInfo.currentSlide--;
                    // Bir adet ürünün o anki widthi
                    let productWidth = $(".ney-product").outerWidth(true);
                    $(".ney-products").css("transform", "translateX(-" + (sliderInfo.currentSlide - sliderInfo.shownItem) * productWidth + "px)");
                }
            });

            $(".ney-button-right").on("click", function () {
                // Son slaytta değilse
                if (sliderInfo.currentSlide < items.length) {
                    sliderInfo.currentSlide++;
                    let productWidth = $(".ney-product").outerWidth(true);
                    $(".ney-products").css("transform", "translateX(-" + ((sliderInfo.currentSlide - sliderInfo.shownItem) * productWidth + 20)+ "px)");

                }
            });
        }

        (function init() {
            loadItems();
            clear();
            addComponents();
            addItems(items);
            handleEventListenerSet();
        })();

    } else {
        console.log("wrong page");
    }
};


// BENİM GÖRDÜĞÜM PROBLEMLER
// svgler sıkıntılı boş olan büyük diğerleri aynı
// ürün linklerinin bir kısmı patlak
// son üründe zam olmuş indirim olmamış