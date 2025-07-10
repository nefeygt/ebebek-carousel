(() => {
    // Ana sayfadaysak fonksiyona giriyor yoksa direkt çıkıyor
    if($(`link[rel="canonical"]`).attr("href") === "https://www.e-bebek.com") {
        let items = [];

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

        (function init() {
            loadItems();
        })();

    } else {
        console.log("wrong page");
    }
})();