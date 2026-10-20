const id = new URLSearchParams(window.location.search).get("id");

let currentProduct = null;

if (typeof allProductsList !== "undefined" && allProductsList.length > 0) {
    if (id) {
        for (let i = 0; i < allProductsList.length; i++) {
            if (allProductsList[i].id == id) {
                currentProduct = allProductsList[i];
                break;
            }
        }
    }
    if (!currentProduct && allProductsList.length > 0) {
        currentProduct = allProductsList[0];
    }
}

if (currentProduct) {
    renderProduct(currentProduct);
}

function renderProduct(product) {
    let productName = product.title || product.name || "Məhsul";
    let productCategory = product.category || "Ümumi";
    let productDesc = product.desc || "";
    let productImg = product.image || "";
    if (!productImg && product.main_img) {
        productImg = product.main_img.small || product.main_img.medium || product.main_img.big || "";
    }

    let titleEl = document.querySelector(".MPProductMainDesc h1");
    if (titleEl) {
        titleEl.innerText = productName;
    }

    let breadcrumb = document.querySelector(".MPProduct-Breadcrumb-Active");
    if (breadcrumb) {
        breadcrumb.innerText = productName;
    }

    let mainImage = document.querySelector(".MPProductSlider-Main-Image img");
    if (mainImage && productImg) {
        mainImage.src = productImg;
        mainImage.alt = productName;
    }

    let thumbImage = document.querySelector(".MPProductSlider-Thumbnails-Thumbnail img");
    if (thumbImage && productImg) {
        thumbImage.src = productImg;
        thumbImage.alt = productName;
    }

    let code = document.getElementById("product-detail-code");
    if (code) {
        code.innerText = "Məhsulun kodu: " + product.id;
    }

    let price = 0;
    if (product.price !== undefined && product.price !== null) {
        price = Number(product.price);
    } else if (product.default_offer && product.default_offer.retail_price) {
        price = Number(product.default_offer.retail_price);
    }

    let oldPrice = 0;
    if (product.oldPrice !== undefined && product.oldPrice !== null) {
        oldPrice = Number(product.oldPrice);
    } else if (product.default_offer && product.default_offer.old_price) {
        oldPrice = Number(product.default_offer.old_price);
    }

    let priceEl = document.querySelector(".MPProductMainDesc-OfferPrice .text-\\[30px\\]");
    if (priceEl) {
        priceEl.innerText = price.toFixed(2) + " ₼";
    }

    let oldPriceEl = document.querySelector(".MPProductMainDesc-OfferPrice .line-through");
    let discountEl = document.querySelector(".MPProductMainDesc-OfferPrice .bg-\\[\\#FF4B81\\]");

    if (oldPrice > price) {
        if (oldPriceEl) {
            oldPriceEl.innerText = oldPrice.toFixed(2) + " ₼";
            oldPriceEl.style.display = "inline";
        }
        if (discountEl) {
            let percent = product.discount || Math.round(((oldPrice - price) / oldPrice) * 100);
            discountEl.innerText = "-" + percent + "%";
            discountEl.style.display = "inline";
        }
    } else {
        if (oldPriceEl) oldPriceEl.style.display = "none";
        if (discountEl) discountEl.style.display = "none";
    }

    let monthly = "0.00";
    let months = 24;
    if (product.installment && product.installment.monthly) {
        monthly = Number(product.installment.monthly).toFixed(2);
        months = product.installment.months || 24;
    } else if (price > 0) {
        monthly = (price / 24).toFixed(2);
    }

    let pill = document.getElementById("installment-pill");
    if (pill) {
        pill.innerText = monthly + " ₼ x " + months + " ay";
    }

    let creditBadge = document.getElementById("promo-credit-monthly");
    if (creditBadge) {
        creditBadge.innerText = monthly;
    }
    let installmentBadge = document.getElementById("promo-installment-months");
    if (installmentBadge) {
        installmentBadge.innerText = (product.installment && product.installment.months ? product.installment.months : 6) + " aylıq";
    }

    let calcButtons = document.querySelectorAll("#credit-month-tabs button");
    for (let b = 0; b < calcButtons.length; b++) {
        let btn = calcButtons[b];
        let m = btn.getAttribute("data-months") || 24;
        let mPrice = (price / m).toFixed(2);
        btn.setAttribute("data-price", mPrice);
    }

    let descEl = document.querySelector(".MPProductDescriptionContentInfo .text-block");
    if (descEl && productDesc) {
        descEl.innerText = productDesc;
    }

    let specTable = document.querySelector(".MPProductMainDesc table tbody");
    if (specTable) {
        specTable.innerHTML = '<tr class="text-[13px] leading-[150%] h-6"><td class="w-2/5 text-[#9497ad]">Kateqoriya:</td><td class="w-3/5 font-[600] text-[#565671]">' + productCategory + '</td></tr>' +
            '<tr class="text-[13px] leading-[150%] align-top h-6"><td class="w-2/5 text-[#9497ad]">Çatdırılma:</td><td class="w-3/5 font-[600] text-[#565671]">' + (product.delivery || "Sabah") + '</td></tr>' +
            '<tr class="text-[13px] leading-[150%] align-top h-6"><td class="w-2/5 text-[#9497ad]">Qiymət:</td><td class="w-3/5 font-[600] text-[#565671]">' + price.toFixed(2) + ' ₼</td></tr>';
    }

    let fullSpecTable = document.querySelector(".Features-Table table tbody");
    if (fullSpecTable) {
        fullSpecTable.innerHTML = '<tr><td>Kateqoriya:</td><td><div class="v">' + productCategory + '</div></td></tr>' +
            '<tr><td>Məhsul adı:</td><td><div class="v">' + productName + '</div></td></tr>' +
            '<tr><td>Çatdırılma:</td><td><div class="v">' + (product.delivery || "Sabah") + '</div></td></tr>' +
            '<tr><td>Zəmanət:</td><td><div class="v">12 ay</div></td></tr>';
    }

    let ratingCount = product.reviewCount || 0;
    let ratingVal = product.rating || 0;
    let ratingEl = document.getElementById("product-detail-rating");
    if (ratingEl) {
        if (ratingCount > 0 && ratingVal > 0) {
            let stars = "";
            for (let s = 1; s <= 5; s++) {
                stars += s <= Math.round(ratingVal) ? '<span class="text-[#FF9E00]">★</span>' : '<span class="text-[#DCDDE4]">★</span>';
            }
            ratingEl.innerHTML = '<div class="flex text-[16px] leading-none">' + stars + '</div> <span class="text-xs font-bold text-[#1E244D] ml-1">' + ratingVal + '</span> <span class="text-xs text-[#9497AD] ml-2">(' + ratingCount + ' rəy)</span>';
        } else {
            ratingEl.innerHTML = '<div class="flex text-[#DCDDE4] text-[16px] leading-none"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div> <span class="text-[#9497AD] text-[13px]">Reytinq yoxdur</span>';
        }
    }

    let favBtn = document.getElementById("product-favorite-btn");
    if (favBtn) {
        let favSvg = favBtn.querySelector("svg");
        let favText = favBtn.querySelector(".font-medium");

        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        let isFav = false;
        for (let f = 0; f < favorites.length; f++) {
            let favId = favorites[f].id ? favorites[f].id : favorites[f];
            if (favId == product.id) {
                isFav = true;
                break;
            }
        }

        if (isFav) {
            if (favSvg) favSvg.style.fill = "currentColor";
            if (favText) favText.innerText = "Seçilmişlərdən sil";
        } else {
            if (favSvg) favSvg.style.fill = "none";
            if (favText) favText.innerText = "Seçilmişlərə əlavə et";
        }

        favBtn.onclick = function() {
            let currentFavs = JSON.parse(localStorage.getItem("favorites")) || [];
            let foundIndex = -1;
            for (let j = 0; j < currentFavs.length; j++) {
                let fId = currentFavs[j].id ? currentFavs[j].id : currentFavs[j];
                if (fId == product.id) {
                    foundIndex = j;
                    break;
                }
            }

            if (foundIndex != -1) {
                currentFavs.splice(foundIndex, 1);
                if (favSvg) favSvg.style.fill = "none";
                if (favText) favText.innerText = "Seçilmişlərə əlavə et";
            } else {
                currentFavs.push({
                    id: product.id,
                    title: productName,
                    name: productName,
                    image: productImg,
                    main_img: { small: productImg },
                    price: price,
                    oldPrice: oldPrice,
                    default_offer: { retail_price: price, old_price: oldPrice }
                });
                if (favSvg) favSvg.style.fill = "currentColor";
                if (favText) favText.innerText = "Seçilmişlərdən sil";
            }

            localStorage.setItem("favorites", JSON.stringify(currentFavs));
        };
    }

    let mainAddToCartBtn = document.querySelector(".MPProductMainDesc-AddToCart-BuyOnCredit button.AddToCart");
    if (mainAddToCartBtn) {
        mainAddToCartBtn.onclick = function() {
            addToCart(this, product.id);
        };
    }

    let otherAddCartBtns = document.querySelectorAll(".MPProductPricesOtherSellers-AddCart");
    for (let o = 0; o < otherAddCartBtns.length; o++) {
        otherAddCartBtns[o].onclick = function() {
            addToCart(this, product.id);
        };
    }
}
