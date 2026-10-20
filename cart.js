let cartEmpty = document.getElementById("cart-empty");
let cartFilled = document.getElementById("cart-filled");
let cartItemsContainer = document.getElementById("cart-items-container");
let cartCountTitle = document.getElementById("cart-count-title");
let summaryLabel = document.getElementById("summary-label");
let summaryPrice = document.getElementById("summary-price");
let selectAllCheckbox = document.getElementById("select-all-checkbox");
let deleteSelectedBtn = document.getElementById("delete-selected-btn");
let navCartBadge = document.getElementById("nav-cart-badge");
let cartCatalogBtn = document.getElementById("cart-catalog-btn");

if (cartCatalogBtn) {
    cartCatalogBtn.onclick = function() {
        let btn = document.getElementById("catalog-btn");
        if (btn) btn.click();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

for (let i = 0; i < cart.length; i++) {
    if (cart[i].selected === undefined) {
        cart[i].selected = true;
    }
    if (!cart[i].count || cart[i].count < 1) {
        cart[i].count = 1;
    }
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateSummary() {
    let totalItems = 0;
    let selectedItems = 0;
    let selectedSum = 0;

    for (let i = 0; i < cart.length; i++) {
        let count = cart[i].count || 1;
        totalItems += count;

        if (cart[i].selected !== false) {
            selectedItems += count;
            let price = 0;
            if (cart[i].default_offer && cart[i].default_offer.retail_price) {
                price = cart[i].default_offer.retail_price;
            } else if (cart[i].price) {
                price = Number(cart[i].price) || 0;
            }
            selectedSum += price * count;
        }
    }

    if (cartCountTitle) {
        cartCountTitle.innerText = "Səbətinizdə " + totalItems + " məhsul var";
    }

    if (summaryLabel) {
        summaryLabel.innerText = "Sifarişin məbləği (" + selectedItems + " məhsul):";
    }

    if (summaryPrice) {
        summaryPrice.innerText = selectedSum.toFixed(2) + " ₼";
    }

    let navBadges = document.querySelectorAll(".nav-cart-badge-count, #nav-cart-badge");
    for (let b = 0; b < navBadges.length; b++) {
        if (totalItems > 0) {
            navBadges[b].innerText = totalItems;
            navBadges[b].style.display = "flex";
        } else {
            navBadges[b].style.display = "none";
        }
    }

    if (selectAllCheckbox) {
        let allChecked = true;
        if (cart.length === 0) {
            allChecked = false;
        } else {
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].selected === false) {
                    allChecked = false;
                    break;
                }
            }
        }
        selectAllCheckbox.checked = allChecked;
    }
}

function renderCart() {
    if (cart.length == 0) {
        if (cartEmpty) cartEmpty.style.display = "flex";
        if (cartFilled) cartFilled.style.display = "none";
        let navBadges = document.querySelectorAll(".nav-cart-badge-count, #nav-cart-badge");
        for (let b = 0; b < navBadges.length; b++) {
            navBadges[b].style.display = "none";
        }
        return;
    }

    if (cartEmpty) cartEmpty.style.display = "none";
    if (cartFilled) cartFilled.style.display = "block";

    if (!cartItemsContainer) return;

    let html = "";
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let id = item.id || item;
        let name = item.title || item.name || ("Məhsul " + id);
        let count = item.count || 1;
        let isSelected = (item.selected !== false);

        let img = item.image || "";
        if (!img && item.main_img && item.main_img.small) {
            img = item.main_img.small;
        } else if (!img && item.img) {
            img = item.img;
        } else if (!img) {
            img = "https://strgimgr.b-cdn.net/img/product/280/9c2c3f7f-4cc3-4247-ba10-255e8bcd08df.jpeg?width=280&height=280";
        }

        let price = 0;
        let oldPrice = 0;
        if (item.default_offer) {
            price = item.default_offer.retail_price || 0;
            oldPrice = item.default_offer.old_price || 0;
        } else if (item.price) {
            price = Number(item.price) || 0;
        }

        let discountHtml = "";
        let oldPriceHtml = "";
        if (oldPrice > price) {
            let percent = Math.round(((oldPrice - price) / oldPrice) * 100);
            discountHtml = '<span class="bg-[#EA207E] text-white text-[11px] font-bold px-1.5 py-0.5 rounded mr-2">-' + percent + '%</span>';
            oldPriceHtml = '<span class="line-through text-[#9497AD] text-[12px] ml-2">' + oldPrice.toFixed(2) + ' ₼</span>';
        }

        let installmentHtml = "";
        if (price > 0) {
            let taksit18 = (price / 18).toFixed(2);
            installmentHtml = '<div class="text-[12px] text-[#50557A] mt-2 flex items-center gap-1.5 flex-wrap"><span>Taksitli ödəniş</span><span class="bg-[#FFD447] text-[#1E244D] font-bold px-1.5 py-0.5 rounded text-[11px]">' + taksit18 + ' ₼</span><span>x 18 ay</span></div>';
        }

        let totalRowPrice = (price * count).toFixed(2);

        html += '<div class="bg-white rounded-lg border border-[#F1F2F5] p-5 shadow-xs">';
        html += '<div class="text-[12px] text-[#50557A] mb-4 flex items-center gap-1.5"><span>Satıcı-şirkət:</span><strong class="text-[#1E244D]">AREL Market</strong><span class="text-[#9497AD] cursor-pointer">ⓘ</span></div>';
        html += '<div class="flex items-start gap-4">';
        html += '<input type="checkbox" onchange="toggleSelect(' + i + ', this.checked)" ' + (isSelected ? 'checked' : '') + ' class="w-4 h-4 mt-2 accent-[#EA207E] cursor-pointer shrink-0">';
        html += '<a href="detail.html?id=' + id + '" class="w-20 h-20 shrink-0 flex items-center justify-center"><img src="' + img + '" class="max-h-full max-w-full object-contain" alt="' + name + '"></a>';
        html += '<div class="flex-1 min-w-0 pr-4">';
        html += '<div class="text-[12px] text-[#9497AD] mb-1">Çatdırılma: <strong class="text-[#1E244D]">sabah</strong></div>';
        html += '<a href="detail.html?id=' + id + '" class="text-[14px] font-semibold text-[#1E244D] hover:text-[#EA207E] transition-colors leading-snug line-clamp-2 block">' + name + '</a>';
        html += '<div class="flex items-center mt-2.5">' + discountHtml + '<span class="text-[#EA207E] font-bold text-[18px]">' + price.toFixed(2) + ' ₼</span>' + oldPriceHtml + '</div>';
        html += installmentHtml;
        html += '</div>';
        html += '<div class="flex items-center shrink-0 ml-auto">';
        html += '<div class="flex items-center border border-[#E7E8ED] rounded h-8 bg-white">';
        html += '<button type="button" onclick="changeCount(' + i + ', -1)" class="w-8 h-full flex items-center justify-center text-[#50557A] hover:bg-[#F8F9FA] text-base cursor-pointer select-none">−</button>';
        html += '<span class="w-8 text-center text-[13px] font-bold text-[#1E244D]">' + count + '</span>';
        html += '<button type="button" onclick="changeCount(' + i + ', 1)" class="w-8 h-full flex items-center justify-center text-[#50557A] hover:bg-[#F8F9FA] text-base cursor-pointer select-none">+</button>';
        html += '</div>';
        html += '<button type="button" onclick="deleteCartItem(' + i + ')" class="text-[#9497AD] hover:text-[#EA207E] p-1 ml-4 cursor-pointer transition-colors">';
        html += '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>';
        html += '</button>';
        html += '</div>';
        html += '</div>';
        html += '<div class="text-right pt-3 border-t border-[#F8F9FA] mt-4 text-[13px] text-[#9497AD]">';
        html += 'Ümumi qiymət: <span class="text-[16px] font-bold text-[#1E244D] ml-1">' + totalRowPrice + ' ₼</span>';
        html += '</div>';
        html += '</div>';
    }

    cartItemsContainer.innerHTML = html;
    updateSummary();
}

function changeCount(index, delta) {
    if (cart[index]) {
        cart[index].count = (cart[index].count || 1) + delta;
        if (cart[index].count <= 0) {
            cart.splice(index, 1);
        }
        saveCart();
        renderCart();
    }
}

function deleteCartItem(index) {
    if (cart[index]) {
        cart.splice(index, 1);
        saveCart();
        renderCart();
    }
}

function toggleSelect(index, checked) {
    if (cart[index]) {
        cart[index].selected = checked;
        saveCart();
        updateSummary();
    }
}

if (selectAllCheckbox) {
    selectAllCheckbox.onchange = function() {
        let isChecked = selectAllCheckbox.checked;
        for (let i = 0; i < cart.length; i++) {
            cart[i].selected = isChecked;
        }
        saveCart();
        renderCart();
    };
}

if (deleteSelectedBtn) {
    deleteSelectedBtn.onclick = function() {
        let remaining = [];
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].selected === false) {
                remaining.push(cart[i]);
            }
        }
        cart = remaining;
        saveCart();
        renderCart();
    };
}

renderCart();
