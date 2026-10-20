let empty = document.getElementById("favorites-empty");
let grid = document.getElementById("favorites-grid");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function deleteItem(index) {
    favorites.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    location.reload();
}

if (favorites.length == 0) {
    empty.style.display = "flex";
    grid.style.display = "none";
} else {
    empty.style.display = "none";
    grid.style.display = "grid";

    let html = "";
    for (let i = 0; i < favorites.length; i++) {
        let item = favorites[i];

        let id = item.id || item;
        let name = item.title || item.name || ("Məhsul " + id);
        let img = item.image || "";
        if (!img && item.main_img && item.main_img.small) {
            img = item.main_img.small;
        } else if (!img && item.img) {
            img = item.img;
        } else if (!img) {
            img = "https://strgimgr.b-cdn.net/img/product/280/9c2c3f7f-4cc3-4247-ba10-255e8bcd08df.jpeg?width=280&height=280";
        }

        let price = "0.00";
        if (item.default_offer && item.default_offer.retail_price) {
            price = item.default_offer.retail_price;
        } else if (item.price) {
            price = item.price;
        }

        html += '<div class="w-full bg-white border border-[#f1f2f3] rounded-[10px] p-4 flex flex-col justify-between relative hover:shadow-md transition-all">';
        html += '<button onclick="deleteItem(' + i + ')" class="absolute top-2 right-2 text-[#ea207e] bg-[#fff0f6] rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-[#ffe1ee] transition-colors"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg></button>';
        html += '<a href="detail.html?id=' + id + '" style="text-decoration:none;" class="flex flex-col items-center text-center">';
        html += '<div class="h-[150px] flex items-center justify-center mb-3 mt-1 w-full"><img src="' + img + '" class="max-h-full max-w-full object-contain" alt="' + name + '"></div>';
        html += '<span class="text-[#ea207e] font-bold text-[18px] mb-1">' + price + ' ₼</span>';
        html += '<span class="text-[#1e244d] text-[13px] line-clamp-2 h-[36px] overflow-hidden leading-tight">' + name + '</span>';
        html += '</a>';
        html += '<button onclick="addToCart(this, ' + id + ')" class="mt-4 w-full h-[38px] flex items-center justify-center gap-2 bg-[#fff0f6] text-[#ea207e] font-semibold text-[13px] rounded-[6px] hover:bg-[#ffe1ee] transition-colors cursor-pointer">Səbətə at</button>';
        html += '</div>';
    }
    grid.innerHTML = html;
}
