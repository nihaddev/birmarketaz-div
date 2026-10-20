const aktualitems = [
    { title: "Telefonlar, Smart cihazlar və telefon aksessuarları", img: "https://strgimgr.umico.az/img/category/188/764e0397-6321-4008-b274-95f12fba59c4.jpeg", url: "/categories/2-telefonlar-ve-aksessuarlar?location_id=homepage_actual_today_52" },
    { title: "Notbuk və kompüterlər", img: "https://strgimgr.umico.az/img/category/188/194a575e-619b-46c2-b080-6f718998ddca.jpeg", url: "/categories/15-noutbuklar-ve-komputer-texnikasi?location_id=homepage_actual_today_55" },
    { title: "Məişət texnikası", img: "https://strgimgr.umico.az/img/category/188/944e559f-819f-4e8f-a09c-a3fceae9e641.jpeg", url: "/categories/106-meishet-texnikasi?location_id=homepage_actual_today_93" },
    { title: "TV, audio və video", img: "https://strgimgr.umico.az/img/category/188/26f24528-c5cc-4847-b209-6a4a72923411.jpeg", url: "/categories/70-tv-audio-ve-video?location_id=homepage_actual_today_92" },
    { title: "Gözəllik", img: "https://strgimgr.umico.az/img/category/188/9400a216-bfca-4434-aac2-ac64752baa6d.jpeg", url: "/categories/257-gozellik-ve-saglamliq?location_id=homepage_actual_today_65" },
    { title: "Bağ üçün məhsullar", img: "https://strgimgr.umico.az/img/category/188/7d53cf6b-98c7-407e-8b68-411eaec6c2d4.jpeg", url: "/categories/1232-bag-ve-bostan?location_id=homepage_actual_today_102" },
    { title: "Saat, zinət və bəzək əşyaları", img: "https://strgimgr.umico.az/img/category/188/00902c8c-5c83-4cec-8088-91846480c788.jpeg", url: "/categories/2266-aksessuarlar-saatlar-bezek-eshyalari?location_id=homepage_actual_today_89" },
    { title: "Idman və Əyləncə", img: "https://strgimgr.umico.az/img/category/188/3d8cf4c5-b955-4fc8-a521-3c841f95247a.jpeg", url: "/categories/516-idman-ve-feal-istirahet?location_id=homepage_actual_today_104" },
    { title: "Avtomobil məhsulları", img: "https://strgimgr.umico.az/img/category/188/e3098bf4-66dd-49dd-b980-eda7caf09b56.jpeg", url: "/categories/1708-avtomobil-uchun-mehsullar?location_id=homepage_actual_today_59" },
    { title: "Uşaqlar üçün məhsullar", img: "https://strgimgr.umico.az/img/category/188/ecb6761d-0918-445e-8250-806c666aaade.jpeg", url: "/categories/779-analar-ve-balalar-uchun?location_id=homepage_actual_today_98" },
    { title: "Təmir və tikinti", img: "https://strgimgr.umico.az/img/category/188/e6fecd53-b785-48fd-86ff-db975b14e38a.jpeg", url: "/categories/2627-temir-ve-tikinti?location_id=homepage_actual_today_96" }
];

const catalogCategories = [
    { title: "60%-dək payız endirimləri", img: "https://strgimgr.umico.az/dcmimages/10093/webpyz_67991.png", url: "#", arrow: false },
    { title: "iPhone 18 artıq satışdadır! ", img: "https://strgimgr.umico.az/dcmimages/10039/Icon-1_67568.png", url: "#", arrow: false },
    { title: "Mega endirimlər", img: "https://birmarket.az/images/icon_mega_discounts.webp", url: "/mega-discounts", arrow: false },
    { title: "Telefonlar, Smart cihazlar və telefon aksessuarları", img: "https://strgimgr.umico.az/img/svg-icon-category-shortcuts/original/c5ebd954-c11b-4292-8774-8d2429a058b5.svg", url: "/categories/2-telefonlar-ve-aksessuarlar", arrow: true },
    { title: "Məişət texnikası", img: "https://strgimgr.umico.az/img/svg-icon-category-shortcuts/original/a578e619-a66c-4aee-9882-2fa6234bec17.svg", url: "/categories/106-meishet-texnikasi", arrow: true },
    { title: "Notbuk və kompüterlər", img: "https://strgimgr.umico.az/img/svg-icon-category-shortcuts/original/e7757c43-b757-45b2-96bb-8aa9750b0854.svg", url: "/categories/15-noutbuklar-ve-komputer-texnikasi", arrow: true },
    { title: "TV, audio və video", img: "https://strgimgr.umico.az/img/svg-icon-category-shortcuts/original/9b4619b4-6edb-4fe6-8214-c2c5994e8292.svg", url: "/categories/70-tv-audio-ve-video", arrow: true },
    { title: "Ev əşyaları", img: "https://strgimgr.umico.az/img/svg-icon-category-shortcuts/original/23f03088-8850-4284-94ef-2c5c89481ca3.svg", url: "/categories/937-ev-ve-bag-uchun-mehsullar", arrow: true },
    { title: "Avtomobil məhsulları", img: "https://strgimgr.umico.az/img/svg-icon-category-shortcuts/original/358e84ed-f0c5-47fc-ac98-0b02634ecae.svg", url: "/categories/1708-avtomobil-uchun-mehsullar", arrow: true },
    { title: "Gözəllik", img: "https://strgimgr.umico.az/img/svg-icon-category-shortcuts/original/08f3017e-4663-489c-89b2-83af22a8f342.svg", url: "/categories/257-gozellik-ve-saglamliq", arrow: true },
    { title: "Sağlamlıq", img: "https://strgimgr.umico.az/img/svg-icon-category-shortcuts/original/1ef6a3fc-c73b-40f0-818d-e7ed3f27c62d.png", url: "/categories/5224-saglamliq", arrow: true },
    { title: "Uşaqlar üçün", img: "https://strgimgr.umico.az/img/svg-icon-category-shortcuts/original/93bd3d4a-37a4-4d5f-b72b-fb2a9946317b.svg", url: "/categories/779-analar-ve-balalar-uchun", arrow: true },
    { title: "Qida məhsulları və içkilər", img: "https://strgimgr.umico.az/img/svg-icon-category-shortcuts/original/7cfaef25-1e90-4277-a02f-2cec08cc2a80.svg", url: "/categories/2492-iri-baglamada-qida-mehsullari", arrow: true },
    { title: "Məişət kimyası", img: "https://strgimgr.umico.az/img/svg-icon-category-shortcuts/original/53fd557b-44fa-4153-80a7-7574bb873432.svg", url: "/categories/746-meishet-kimyevi-maddeler", arrow: true },
    { title: "Idman və Əyləncə", img: "https://strgimgr.umico.az/img/svg-icon-category-shortcuts/original/c9ba4168-dd25-4619-85dc-dd3d15889e38.svg", url: "/categories/516-idman-ve-feal-istirahet", arrow: true },
    { title: "Bağ üçün məhsullar", img: "https://strgimgr.umico.az/img/svg-icon-category-shortcuts/original/b53a94ed-3f34-4b4e-8f58-4f8ada040b00.svg", url: "/categories/1232-bag-ve-bostan", arrow: true },
    { title: "Bir Gaming", img: "https://strgimgr.umico.az/img/svg-icon-category-shortcuts/original/55adaf55-282a-4be8-8df3-fb3d1964004d.svg", url: "/categories/4835-oyunchular-uchun-mehsullar", arrow: true },
    { title: "Saat, zinət və bəzək əşyaları", img: "https://strgimgr.umico.az/img/svg-icon-category-shortcuts/original/7a1ae86a-162a-4961-9c74-0b122d57d39f.svg", url: "/categories/2266-aksessuarlar-saatlar-bezek-eshyalari", arrow: true },
    { title: "Foto və videokameralar", img: "", url: "/categories/204-foto-ve-videokameralar", arrow: true },
    { title: "Təmir-tikinti", img: "https://strgimgr.umico.az/img/svg-icon-category-shortcuts/original/066f3554-ca28-440b-8c10-41e72c2ac975.svg", url: "/categories/2627-temir-ve-tikinti", arrow: true },
    { title: "Kitablar, Hobbi, Məktəb və ofis ləvazimatları", img: "https://strgimgr.umico.az/img/svg-icon-category-shortcuts/original/2914c732-53ef-4867-8a67-c3dd4b9c3559.svg", url: "/categories/1657-ofis-ve-mekteb-levazimatlari", arrow: true },
    { title: "Zoo məhsullar", img: "https://strgimgr.umico.az/img/svg-icon-category-shortcuts/original/80dcdc34-ca44-4931-8d56-5fbbe37d6638.svg", url: "/categories/2164-ev-heyvanlari-uchun-mehsullar", arrow: true },
    { title: "Geyim,ayaqqabı və aksessuarlar", img: "https://strgimgr.umico.az/img/svg-icon-category-shortcuts/original/f7ff6723-096e-49b8-a333-e894324910d5.svg", url: "/categories/3003-geyim-ve-ayaqqabi", arrow: true }
];

const discountedProducts = [
  {
    id: 1,
    title: "Vakuum qablaşdırıcı Kumtel VP053-HVSE-01 125 W qara",
    desc: "Qida məhsullarını vakuumla qablaşdıraraq daha uzun müddət təzə saxlayır. Ət, tərəvəz və quru məhsullar üçün uyğundur, 125 W gücə malikdir.",
    image: "https://images.unsplash.com/photo-1617664759233-484e38145c07?w=500&q=80",
    category: "Mətbəx texnikası",
    price: 54.99,
    oldPrice: 100.0,
    discount: 45,
    isNew: false,
    installment: { monthly: 2.82, months: 24 },
    rating: 5,
    reviewCount: 1,
    timer: "12:02:55",
    delivery: "14 oktyabr"
  },
  {
    id: 2,
    title: "Masaüstü oyun 4-ü 1-də (futbol + bilyard + xokey + tennis)",
    desc: "Bir masada dörd oyun: stolüstü futbol, bilyard, hava xokeyi və stolüstü tennis. Ailəvi əyləncə üçün idealdır, 3 yaşdan yuxarı uşaqlar üçün tövsiyə olunur.",
    image: "https://images.unsplash.com/photo-1690073939470-bc10bde2e8f5?w=500&q=80",
    category: "Oyuncaqlar",
    price: 149.89,
    oldPrice: 200.0,
    discount: 25,
    isNew: true,
    installment: { monthly: 7.68, months: 24 },
    rating: 5,
    reviewCount: 1,
    timer: "12:02:55",
    delivery: "14 oktyabr"
  },
  {
    id: 3,
    title: "Səyahət və ev üçün şişmə döşək BM-10202, 199x156x22 sm",
    desc: "İki nəfərlik məxmər örtüklü şişmə döşək. Kampinq, səyahət və qonaqlar üçün əlavə yataq kimi istifadə etmək olar, yığılanda az yer tutur.",
    image: "https://images.unsplash.com/photo-1722356541555-eeabc38f80a8?w=500&q=80",
    category: "Səyahət və istirahət",
    price: 99.77,
    oldPrice: 200.0,
    discount: 50,
    isNew: false,
    installment: { monthly: 5.11, months: 24 },
    rating: 5,
    reviewCount: 1,
    timer: "12:02:55",
    delivery: "14 oktyabr"
  },
  {
    id: 4,
    title: "Qadınlar üçün əlcək snh004, tül, qara, ölçü One size",
    desc: "Tül və krujevadan hazırlanmış zərif qara əlcək, bilək hissəsində bant bəzəyi var. Toy, gecə tədbirləri və fotosessiyalar üçün uyğundur.",
    image: "https://images.unsplash.com/photo-1772355325489-442a672e432c?w=500&q=80",
    category: "Aksesuarlar",
    price: 13.2,
    oldPrice: 32.88,
    discount: 60,
    isNew: false,
    installment: { monthly: 0.68, months: 24 },
    rating: 0,
    reviewCount: 0,
    timer: "12:02:55",
    delivery: "14 oktyabr"
  },
  {
    id: 5,
    title: "Mayka qızlar üçün SHN003-0801, pambıq, ağ, 5-6 yaş",
    desc: "100% pambıqdan hazırlanmış yumşaq alt mayka. Dərini qıcıqlandırmır, gündəlik geyim üçün rahatdır.",
    image: "https://images.unsplash.com/photo-1788228934349-3164c5465eee?w=500&q=80",
    category: "Uşaq geyimi",
    price: 12.54,
    oldPrice: 31.23,
    discount: 60,
    isNew: false,
    installment: { monthly: 0.64, months: 24 },
    rating: 0,
    reviewCount: 0,
    timer: "12:02:55",
    delivery: "14 oktyabr"
  },
  {
    id: 6,
    title: "Elektrik çaydan 1.7 L, 2200 W, ağ",
    desc: "Sürətli qızdırma funksiyalı elektrik çaydan. Su bitdikdə avtomatik sönür, gizli qızdırıcı elementi təmizlənməni asanlaşdırır.",
    image: "https://images.unsplash.com/photo-1685514128186-c5d8d7e90e1a?w=500&q=80",
    category: "Mətbəx texnikası",
    price: 39.9,
    oldPrice: 66.5,
    discount: 40,
    isNew: false,
    installment: { monthly: 2.04, months: 24 },
    rating: 4,
    reviewCount: 12,
    timer: "12:02:55",
    delivery: "14 oktyabr"
  },
  {
    id: 7,
    title: "Uşaq konstruktoru 500 hissə, rəngli",
    desc: "Təxəyyülü və motor bacarıqlarını inkişaf etdirən 500 hissəli konstruktor dəsti. Saxlama qutusu ilə birlikdə gəlir, 6 yaşdan yuxarı uşaqlar üçün.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&q=80",
    category: "Oyuncaqlar",
    price: 29.99,
    oldPrice: 49.99,
    discount: 40,
    isNew: true,
    installment: { monthly: 1.54, months: 24 },
    rating: 5,
    reviewCount: 8,
    timer: "12:02:55",
    delivery: "15 oktyabr"
  },
  {
    id: 8,
    title: "Simsiz Bluetooth qulaqlıq TWS, qara",
    desc: "Bluetooth 5.3 dəstəkli simsiz qulaqlıq. Doldurma qutusu ilə birlikdə 24 saata qədər işləyir, toxunma ilə idarə olunur.",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
    category: "Elektronika",
    price: 24.5,
    oldPrice: 49.0,
    discount: 50,
    isNew: false,
    installment: { monthly: 1.26, months: 24 },
    rating: 4,
    reviewCount: 27,
    timer: "12:02:55",
    delivery: "14 oktyabr"
  },
  {
    id: 9,
    title: "Saç qurudan fen 1600 W, 3 temperatur rejimi",
    desc: "Kompakt və yüngül fen, 3 temperatur və 2 sürət rejimi var. Soyuq hava düyməsi saç düzümünü sabitləşdirməyə kömək edir.",
    image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=500&q=80",
    category: "Gözəllik və sağlamlıq",
    price: 45.6,
    oldPrice: 76.0,
    discount: 40,
    isNew: false,
    installment: { monthly: 2.34, months: 24 },
    rating: 5,
    reviewCount: 4,
    timer: "12:02:55",
    delivery: "15 oktyabr"
  },
  {
    id: 10,
    title: "Termos paslanmayan polad 1 L, gümüşü",
    desc: "İki qatlı vakuum izolyasiyası içkini 12 saat isti, 24 saat soyuq saxlayır. Qapağı stəkan kimi istifadə etmək olar.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80",
    category: "Səyahət və istirahət",
    price: 18.75,
    oldPrice: 25.0,
    discount: 25,
    isNew: false,
    installment: { monthly: 0.96, months: 24 },
    rating: 4,
    reviewCount: 6,
    timer: "12:02:55",
    delivery: "14 oktyabr"
  },
  {
    id: 11,
    title: "Kişi idman ayaqqabısı, toxuma, boz, ölçü 42",
    desc: "Nəfəs alan toxuma üzlüyü və yumşaq altlığı olan yüngül idman ayaqqabısı. Qaçış, gəzinti və gündəlik istifadə üçün uyğundur.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    category: "Ayaqqabı",
    price: 59.0,
    oldPrice: 118.0,
    discount: 50,
    isNew: true,
    installment: { monthly: 3.02, months: 24 },
    rating: 5,
    reviewCount: 3,
    timer: "12:02:55",
    delivery: "16 oktyabr"
  },
  {
    id: 12,
    title: "Uşaq velosipedi 16\", əlavə təkərli, qırmızı",
    desc: "4-7 yaşlı uşaqlar üçün möhkəm metal çərçivəli velosiped. Çıxarıla bilən köməkçi təkərlər, zəng və ön səbət ilə gəlir.",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&q=80",
    category: "İdman və hobbi",
    price: 189.0,
    oldPrice: 270.0,
    discount: 30,
    isNew: false,
    installment: { monthly: 9.69, months: 24 },
    rating: 5,
    reviewCount: 9,
    timer: "12:02:55",
    delivery: "16 oktyabr"
  },
  {
    id: 13,
    title: "Mətbəx bıçaq dəsti 6 əşya, altlıqla",
    desc: "Paslanmayan poladdan hazırlanmış 5 bıçaq və altlıqdan ibarət dəst. Ergonomik dəstəklər kəsim zamanı rahatlıq təmin edir.",
    image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=500&q=80",
    category: "Mətbəx ləvazimatı",
    price: 34.8,
    oldPrice: 58.0,
    discount: 40,
    isNew: false,
    installment: { monthly: 1.78, months: 24 },
    rating: 4,
    reviewCount: 15,
    timer: "12:02:55",
    delivery: "14 oktyabr"
  },
  {
    id: 14,
    title: "Yataq dəsti iki nəfərlik, ranforce pambıq, bej",
    desc: "Yorğanüzü, döşəkağı və 2 yastıqüzündən ibarət dəst. Yüksək keyfiyyətli pambıq parça yuyulduqdan sonra rəngini itirmir.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&q=80",
    category: "Ev tekstili",
    price: 64.35,
    oldPrice: 99.0,
    discount: 35,
    isNew: false,
    installment: { monthly: 3.3, months: 24 },
    rating: 5,
    reviewCount: 21,
    timer: "12:02:55",
    delivery: "15 oktyabr"
  },
  {
    id: 15,
    title: "Ağıllı saat, 1.8\" ekran, nəbz ölçən, qara",
    desc: "Nəbz, addım sayğacı və yuxu izləmə funksiyaları olan ağıllı saat. Telefon bildirişlərini göstərir, suya davamlıdır.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    category: "Elektronika",
    price: 79.99,
    oldPrice: 159.98,
    discount: 50,
    isNew: true,
    installment: { monthly: 4.1, months: 24 },
    rating: 4,
    reviewCount: 18,
    timer: "12:02:55",
    delivery: "14 oktyabr"
  },
  {
    id: 16,
    title: "Rəngli karandaş dəsti 24 rəng",
    desc: "Parlaq və canlı rəngli karandaşlar, qırılmağa davamlı içlik. Məktəb və rəsm dərsləri üçün ideal seçimdir.",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500&q=80",
    category: "Dəftərxana",
    price: 6.3,
    oldPrice: 9.0,
    discount: 30,
    isNew: false,
    installment: { monthly: 0.32, months: 24 },
    rating: 5,
    reviewCount: 34,
    timer: "12:02:55",
    delivery: "14 oktyabr"
  },
  {
    id: 17,
    title: "Simsiz şaquli tozsoran 150 W, göy",
    desc: "Yüngül şaquli tozsoran, bir doldurma ilə 40 dəqiqəyə qədər işləyir. Əl tozsoranına çevrilir, mebel və maşın üçün uyğundur.",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&q=80",
    category: "Ev texnikası",
    price: 129.0,
    oldPrice: 215.0,
    discount: 40,
    isNew: true,
    installment: { monthly: 6.61, months: 24 },
    rating: 4,
    reviewCount: 7,
    timer: "12:02:55",
    delivery: "16 oktyabr"
  },
  {
    id: 18,
    title: "Qadın çantası eko-dəri, bej",
    desc: "Geniş daxili bölməsi və tənzimlənən çiyin qayışı olan gündəlik çanta. Fermuarlı cib əşyaları təhlükəsiz saxlayır.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80",
    category: "Aksesuarlar",
    price: 42.0,
    oldPrice: 70.0,
    discount: 40,
    isNew: false,
    installment: { monthly: 2.15, months: 24 },
    rating: 5,
    reviewCount: 5,
    timer: "12:02:55",
    delivery: "15 oktyabr"
  },
  {
    id: 19,
    title: "Ortopedik məktəb çantası, göy",
    desc: "Ortopedik arxa hissəsi kürəyə düşən yükü bərabər paylayır. İşıq əks etdirən zolaqlar və çoxlu bölmələr var.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    category: "Dəftərxana",
    price: 38.4,
    oldPrice: 64.0,
    discount: 40,
    isNew: false,
    installment: { monthly: 1.97, months: 24 },
    rating: 5,
    reviewCount: 11,
    timer: "12:02:55",
    delivery: "14 oktyabr"
  },
  {
    id: 20,
    title: "Stolüstü blender 600 W, 1.5 L",
    desc: "Smuzi, kokteyl və souslar üçün güclü blender. Paslanmayan polad bıçaqlar və buz doğrama rejimi var.",
    image: "https://images.unsplash.com/photo-1564940735784-b15466e8dc09?w=500&q=80",
    category: "Mətbəx texnikası",
    price: 49.5,
    oldPrice: 90.0,
    discount: 45,
    isNew: false,
    installment: { monthly: 2.54, months: 24 },
    rating: 4,
    reviewCount: 10,
    timer: "12:02:55",
    delivery: "15 oktyabr"
  }
];

const newProducts = [
  {
    id: 21,
    title: "Ağ küncüt İlğım, Universal, 30 q",
    desc: "Təbii ağ küncüt. Çörək, salat və şirniyyatlara əlavə etmək üçün uyğundur.",
    image: "https://picsum.photos/seed/new1/500/500",
    category: "Ədviyyatlar",
    price: 2.0,
    oldPrice: null,
    discount: 0,
    isNew: true,
    installment: null,
    rating: 0,
    reviewCount: 0,
    delivery: "14 oktyabr"
  },
  {
    id: 22,
    title: "Küncüt İlğım, Universal, 15 q",
    desc: "Qovrulmamış təbii küncüt, kiçik qablaşdırmada. Gündəlik istifadə üçün rahatdır.",
    image: "https://picsum.photos/seed/new2/500/500",
    category: "Ədviyyatlar",
    price: 1.79,
    oldPrice: null,
    discount: 0,
    isNew: true,
    installment: null,
    rating: 0,
    reviewCount: 0,
    delivery: "14 oktyabr"
  },
  {
    id: 23,
    title: "Qara küncüt İlğım, Universal, 15 q",
    desc: "Zəngin dadlı qara küncüt. Suşi, çörək və salatlar üçün ideal seçimdir.",
    image: "https://picsum.photos/seed/new3/500/500",
    category: "Ədviyyatlar",
    price: 3.0,
    oldPrice: null,
    discount: 0,
    isNew: true,
    installment: null,
    rating: 0,
    reviewCount: 0,
    delivery: "14 oktyabr"
  },
  {
    id: 24,
    title: "Videoqeydiyyatçı 1080p FHD 170°",
    desc: "3 kanallı videoqeydiyyatçı: ön, salon və arxa kamera. 170° geniş bucaq, gecə çəkilişi və parkinq rejimi var.",
    image: "https://picsum.photos/seed/new4/500/500",
    category: "Avto məhsullar",
    price: 68.0,
    oldPrice: 100.0,
    discount: 32,
    isNew: true,
    installment: { monthly: 3.49, months: 24 },
    rating: 0,
    reviewCount: 0,
    delivery: "14 oktyabr"
  },
  {
    id: 25,
    title: "Masaüstü dayaq No brand, Qırmızı, Plastik",
    desc: "Telefon və planşet üçün yığcam masaüstü dayaq. Video izləmək və zəng üçün rahatdır.",
    image: "https://picsum.photos/seed/new5/500/500",
    category: "Aksesuarlar",
    price: 1.0,
    oldPrice: null,
    discount: 0,
    isNew: true,
    installment: null,
    rating: 0,
    reviewCount: 0,
    delivery: "14 oktyabr"
  },
  {
    id: 26,
    title: "Üyüdülmüş darçın İlğım, 50 q",
    desc: "Ətirli üyüdülmüş darçın. Şirniyyat, çay və qəhvəyə əlavə etmək üçün.",
    image: "https://picsum.photos/seed/new6/500/500",
    category: "Ədviyyatlar",
    price: 2.4,
    oldPrice: null,
    discount: 0,
    isNew: true,
    installment: null,
    rating: 0,
    reviewCount: 0,
    delivery: "14 oktyabr"
  },
  {
    id: 27,
    title: "Avtomobil üçün maqnitli telefon tutacağı, qara",
    desc: "Güclü maqnitli tutacaq, ventilyasiya barmaqlığına bərkidilir və 360° fırlanır.",
    image: "https://picsum.photos/seed/new7/500/500",
    category: "Avto məhsullar",
    price: 12.9,
    oldPrice: 18.9,
    discount: 32,
    isNew: true,
    installment: { monthly: 0.66, months: 24 },
    rating: 0,
    reviewCount: 0,
    delivery: "14 oktyabr"
  },
  {
    id: 28,
    title: "USB-C kabel 1 m, ağ",
    desc: "Sürətli doldurma və məlumat ötürmə dəstəkli davamlı kabel.",
    image: "https://picsum.photos/seed/new8/500/500",
    category: "Aksesuarlar",
    price: 4.5,
    oldPrice: null,
    discount: 0,
    isNew: true,
    installment: null,
    rating: 0,
    reviewCount: 0,
    delivery: "14 oktyabr"
  },
  {
    id: 29,
    title: "Kətan toxumu İlğım, 100 q",
    desc: "Liflə zəngin təbii kətan toxumu. Səhər yeməyi və salatlara əlavə etmək üçün.",
    image: "https://picsum.photos/seed/new9/500/500",
    category: "Ədviyyatlar",
    price: 1.6,
    oldPrice: null,
    discount: 0,
    isNew: true,
    installment: null,
    rating: 0,
    reviewCount: 0,
    delivery: "14 oktyabr"
  },
  {
    id: 30,
    title: "Simsiz siçan, 2.4 GHz, qara",
    desc: "Səssiz düymələri olan ergonomik simsiz siçan. Bir batareya ilə aylarla işləyir.",
    image: "https://picsum.photos/seed/new10/500/500",
    category: "Kompüter aksesuarları",
    price: 15.9,
    oldPrice: 21.9,
    discount: 27,
    isNew: true,
    installment: { monthly: 0.81, months: 24 },
    rating: 0,
    reviewCount: 0,
    delivery: "14 oktyabr"
  }
];

const bestSellerProducts = [
  {
    id: 31,
    title: "Smartfon Xiaomi Redmi Note 15 8GB/256GB Black",
    desc: "6.67\" AMOLED ekran, 108 MP kamera və 5500 mAh batareya. Gündəlik istifadə üçün güclü və sürətli smartfon.",
    image: "https://picsum.photos/seed/best1/500/500",
    category: "Smartfonlar",
    price: 539.0,
    oldPrice: 799.0,
    discount: 33,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 27.63, months: 24 },
    rating: 4.5,
    reviewCount: 294,
    delivery: "14 oktyabr"
  },
  {
    id: 32,
    title: "Avtomobil üçün ön şüşə siləcəyi Opel Vectra B 1995-2002",
    desc: "19\" ölçülü siləcək dəsti, şüşəni iz qoymadan təmizləyir. Asan quraşdırılır.",
    image: "https://picsum.photos/seed/best2/500/500",
    category: "Avto məhsullar",
    price: 15.0,
    oldPrice: 20.0,
    discount: 25,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 0.77, months: 24 },
    rating: 0,
    reviewCount: 0,
    delivery: "14 oktyabr"
  },
  {
    id: 33,
    title: "Duş geli Bioderma Atoderm, nəmləndirici, quru və həssas dəri üçün, 1 L",
    desc: "Quru və həssas dəri üçün yumşaq təmizləyici gel. Dərini qurutmadan nəmləndirir.",
    image: "https://picsum.photos/seed/best3/500/500",
    category: "Gözəllik və baxım",
    price: 27.0,
    oldPrice: 54.0,
    discount: 50,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 1.38, months: 24 },
    rating: 5,
    reviewCount: 65,
    delivery: "14 oktyabr"
  },
  {
    id: 34,
    title: "Energetik içki Bizon mavi, 450 ml By Birmarket",
    desc: "Enerji verən qazlı içki. Soyuq halda içilməsi tövsiyə olunur.",
    image: "https://picsum.photos/seed/best4/500/500",
    category: "İçkilər",
    price: 0.86,
    oldPrice: 1.49,
    discount: 42,
    isNew: false,
    isPartnerPremium: true,
    isBestSeller: false,
    installment: null,
    rating: 5,
    reviewCount: 1,
    delivery: "Sabah"
  },
  {
    id: 35,
    title: "Qol saatı Longines L33704966 Silver/Blue",
    desc: "Paslanmayan polad korpus və qolbaq, göy siferblat. Suya davamlı klassik kişi saatı.",
    image: "https://picsum.photos/seed/best5/500/500",
    category: "Saatlar",
    price: 3207.0,
    oldPrice: null,
    discount: 0,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 164.41, months: 24 },
    rating: 0,
    reviewCount: 0,
    delivery: "14 oktyabr"
  },
  {
    id: 36,
    title: "Qabyuyan maşın üçün tabletlər Finish Quantum, 60 ədəd",
    desc: "Yağ və ləkələri ilk yuyuşda təmizləyir, qablara parlaqlıq verir.",
    image: "https://picsum.photos/seed/best6/500/500",
    category: "Məişət kimyası",
    price: 24.9,
    oldPrice: 35.9,
    discount: 31,
    isNew: true,
    isPartnerPremium: true,
    isBestSeller: false,
    installment: { monthly: 1.28, months: 24 },
    rating: 5,
    reviewCount: 42,
    delivery: "14 oktyabr"
  },
  {
    id: 37,
    title: "Universal təmizləyici sprey, 500 ml",
    desc: "Mətbəx və vanna otağı səthləri üçün. Yağ və əhəng qalıqlarını asanlıqla təmizləyir.",
    image: "https://picsum.photos/seed/best7/500/500",
    category: "Məişət kimyası",
    price: 3.2,
    oldPrice: 4.5,
    discount: 29,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 0.16, months: 24 },
    rating: 4,
    reviewCount: 18,
    delivery: "Sabah"
  },
  {
    id: 38,
    title: "Paltaryuyan toz Persil Color, 6 kq",
    desc: "Rəngli paltarlar üçün yuyucu toz. Rəngləri qoruyur və ləkələri aşağı temperaturda belə çıxarır.",
    image: "https://picsum.photos/seed/best8/500/500",
    category: "Məişət kimyası",
    price: 18.9,
    oldPrice: 29.9,
    discount: 37,
    isNew: false,
    isPartnerPremium: true,
    isBestSeller: false,
    installment: { monthly: 0.97, months: 24 },
    rating: 5,
    reviewCount: 120,
    delivery: "14 oktyabr"
  },
  {
    id: 39,
    title: "Portativ Bluetooth dinamik JBL Go 3, qara",
    desc: "Kompakt və suya davamlı dinamik, 5 saata qədər fasiləsiz işləyir.",
    image: "https://picsum.photos/seed/best9/500/500",
    category: "Elektronika",
    price: 69.0,
    oldPrice: 89.0,
    discount: 22,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 3.54, months: 24 },
    rating: 4.5,
    reviewCount: 57,
    delivery: "14 oktyabr"
  },
  {
    id: 40,
    title: "Protein tozu Gold Standard Whey, şokolad, 2.27 kq",
    desc: "Bir porsiyada 24 q protein. Məşqdən sonra əzələlərin bərpası üçün.",
    image: "https://picsum.photos/seed/best10/500/500",
    category: "İdman qidası",
    price: 139.0,
    oldPrice: 179.0,
    discount: 22,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: true,
    installment: { monthly: 7.12, months: 24 },
    rating: 5,
    reviewCount: 88,
    delivery: "14 oktyabr"
  },
  {
    id: 41,
    title: "Smartfon Samsung Galaxy A56 8GB/256GB Graphite",
    desc: "6.7\" Super AMOLED ekran, 50 MP kamera, 5000 mAh batareya və sürətli doldurma.",
    image: "https://picsum.photos/seed/best11/500/500",
    category: "Smartfonlar",
    price: 649.0,
    oldPrice: 829.0,
    discount: 22,
    isNew: true,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 33.26, months: 24 },
    rating: 4.5,
    reviewCount: 76,
    delivery: "14 oktyabr"
  },
  {
    id: 42,
    title: "Aerogril (air fryer) 4.2 L, 1500 W, qara",
    desc: "Yağsız qızartma, bişirmə və isitmə funksiyaları. 8 hazır proqramı var.",
    image: "https://picsum.photos/seed/best12/500/500",
    category: "Mətbəx texnikası",
    price: 129.0,
    oldPrice: 189.0,
    discount: 32,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: true,
    installment: { monthly: 6.61, months: 24 },
    rating: 4.5,
    reviewCount: 143,
    delivery: "15 oktyabr"
  },
  {
    id: 43,
    title: "Paltaryuyan kapsullar Ariel All in 1, 40 ədəd",
    desc: "Yuyucu, ləkə təmizləyici və parlaqlıq verən vasitə bir kapsulda.",
    image: "https://picsum.photos/seed/best13/500/500",
    category: "Məişət kimyası",
    price: 15.4,
    oldPrice: 22.0,
    discount: 30,
    isNew: false,
    isPartnerPremium: true,
    isBestSeller: false,
    installment: { monthly: 0.79, months: 24 },
    rating: 5,
    reviewCount: 39,
    delivery: "Sabah"
  },
  {
    id: 44,
    title: "Nəmləndirici krem Nivea Soft, 200 ml",
    desc: "Üz, bədən və əllər üçün yüngül krem. Tez hopur və dərini yumşaldır.",
    image: "https://picsum.photos/seed/best14/500/500",
    category: "Gözəllik və baxım",
    price: 6.5,
    oldPrice: 8.9,
    discount: 27,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 0.33, months: 24 },
    rating: 5,
    reviewCount: 211,
    delivery: "14 oktyabr"
  },
  {
    id: 45,
    title: "Simsiz qulaqlıq Apple AirPods 4, ağ",
    desc: "Yenilənmiş dizayn, uzun batareya ömrü və USB-C doldurma qutusu.",
    image: "https://picsum.photos/seed/best15/500/500",
    category: "Elektronika",
    price: 299.0,
    oldPrice: 349.0,
    discount: 14,
    isNew: true,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 15.32, months: 24 },
    rating: 5,
    reviewCount: 64,
    delivery: "14 oktyabr"
  },
  {
    id: 46,
    title: "Uşaq bezi Pampers Active Baby, 4 ölçü, 52 ədəd",
    desc: "12 saata qədər quruluq təmin edir, yumşaq və elastik kənarları var.",
    image: "https://picsum.photos/seed/best16/500/500",
    category: "Uşaq məhsulları",
    price: 32.9,
    oldPrice: 45.9,
    discount: 28,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: true,
    installment: { monthly: 1.69, months: 24 },
    rating: 5,
    reviewCount: 175,
    delivery: "Sabah"
  },
  {
    id: 47,
    title: "Həll olunan qəhvə Jacobs Monarch, 190 q",
    desc: "Zəngin ətirli və tündlüyü orta olan həll olunan qəhvə.",
    image: "https://picsum.photos/seed/best17/500/500",
    category: "Qida",
    price: 11.8,
    oldPrice: 15.9,
    discount: 26,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 0.6, months: 24 },
    rating: 4.5,
    reviewCount: 93,
    delivery: "Sabah"
  },
  {
    id: 48,
    title: "Buxarlı ütü Philips 2400 W, göy",
    desc: "Keramik altlıq, güclü buxar zərbəsi və avtomatik təmizlənmə funksiyası.",
    image: "https://picsum.photos/seed/best18/500/500",
    category: "Ev texnikası",
    price: 89.0,
    oldPrice: 129.0,
    discount: 31,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 4.56, months: 24 },
    rating: 4.5,
    reviewCount: 31,
    delivery: "15 oktyabr"
  },
  {
    id: 49,
    title: "Fitnes qolbağı Xiaomi Smart Band 9, qara",
    desc: "AMOLED ekran, nəbz və yuxu izləmə, 21 günə qədər batareya ömrü.",
    image: "https://picsum.photos/seed/best19/500/500",
    category: "Elektronika",
    price: 79.0,
    oldPrice: 99.0,
    discount: 20,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 4.05, months: 24 },
    rating: 4.5,
    reviewCount: 102,
    delivery: "14 oktyabr"
  },
  {
    id: 50,
    title: "Şampun Head & Shoulders, kəpəyə qarşı, 400 ml",
    desc: "Kəpəyə qarşı təsirli şampun, saçı təravətli və təmiz saxlayır.",
    image: "https://picsum.photos/seed/best20/500/500",
    category: "Gözəllik və baxım",
    price: 8.4,
    oldPrice: 12.0,
    discount: 30,
    isNew: false,
    isPartnerPremium: false,
    isBestSeller: false,
    installment: { monthly: 0.43, months: 24 },
    rating: 4,
    reviewCount: 48,
    delivery: "Sabah"
  }
];

function makeStars() {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += '<svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>';
    }
    return stars;
}

let allProductsList = discountedProducts.concat(newProducts, bestSellerProducts);

function toggleCardFavorite(btn, productId) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let foundIndex = -1;

    for (let i = 0; i < favorites.length; i++) {
        let favId = favorites[i].id ? favorites[i].id : favorites[i];
        if (favId == productId) {
            foundIndex = i;
            break;
        }
    }

    let svg = btn.querySelector('svg');

    if (foundIndex != -1) {
        favorites.splice(foundIndex, 1);
        btn.style.color = '#9497ad';
        if (svg) svg.style.fill = 'none';
    } else {
        let productToAdd = null;
        for (let i = 0; i < allProductsList.length; i++) {
            if (allProductsList[i].id == productId) {
                productToAdd = allProductsList[i];
                break;
            }
        }
        if (productToAdd) {
            let smallImg = productToAdd.image || "";
            if (!smallImg && productToAdd.main_img) {
                smallImg = productToAdd.main_img.small || productToAdd.main_img.medium || productToAdd.main_img.big || "";
            } else if (!smallImg && productToAdd.images && productToAdd.images[0]) {
                smallImg = productToAdd.images[0].small || productToAdd.images[0].medium || productToAdd.images[0].big || "";
            } else if (!smallImg && productToAdd.img) {
                smallImg = productToAdd.img;
            }
            let retailPrice = 0;
            let oldPrice = 0;
            if (productToAdd.price !== undefined && productToAdd.price !== null) {
                retailPrice = Number(productToAdd.price);
                oldPrice = Number(productToAdd.oldPrice || 0);
            } else if (productToAdd.default_offer) {
                retailPrice = productToAdd.default_offer.retail_price || 0;
                oldPrice = productToAdd.default_offer.old_price || 0;
            }

            favorites.push({
                id: productToAdd.id,
                title: productToAdd.title || productToAdd.name,
                name: productToAdd.title || productToAdd.name,
                image: smallImg,
                main_img: { small: smallImg },
                price: retailPrice,
                oldPrice: oldPrice,
                default_offer: { retail_price: retailPrice, old_price: oldPrice }
            });
        }
        btn.style.color = '#ea207e';
        if (svg) svg.style.fill = 'currentColor';
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
}

function addToCart(btn, productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let found = false;

    for (let i = 0; i < cart.length; i++) {
        let cId = cart[i].id ? cart[i].id : cart[i];
        if (cId == productId) {
            cart[i].count = (cart[i].count || 1) + 1;
            found = true;
            break;
        }
    }

    if (!found) {
        let productToAdd = null;
        for (let i = 0; i < allProductsList.length; i++) {
            if (allProductsList[i].id == productId) {
                productToAdd = allProductsList[i];
                break;
            }
        }

        if (!productToAdd) {
            let favs = JSON.parse(localStorage.getItem("favorites")) || [];
            for (let f = 0; f < favs.length; f++) {
                if (favs[f].id == productId) {
                    productToAdd = favs[f];
                    break;
                }
            }
        }

        if (productToAdd) {
            let smallImg = productToAdd.image || "";
            if (!smallImg && productToAdd.main_img) {
                smallImg = productToAdd.main_img.small || productToAdd.main_img.medium || productToAdd.main_img.big || "";
            } else if (!smallImg && productToAdd.images && productToAdd.images[0]) {
                smallImg = productToAdd.images[0].small || productToAdd.images[0].medium || productToAdd.images[0].big || "";
            } else if (!smallImg && productToAdd.img) {
                smallImg = productToAdd.img;
            }
            let retailPrice = 0;
            let oldPrice = 0;
            if (productToAdd.price !== undefined && productToAdd.price !== null) {
                retailPrice = Number(productToAdd.price);
                oldPrice = Number(productToAdd.oldPrice || 0);
            } else if (productToAdd.default_offer) {
                retailPrice = productToAdd.default_offer.retail_price || 0;
                oldPrice = productToAdd.default_offer.old_price || 0;
            }

            cart.push({
                id: productToAdd.id,
                title: productToAdd.title || productToAdd.name,
                name: productToAdd.title || productToAdd.name,
                image: smallImg,
                main_img: { small: smallImg },
                price: retailPrice,
                oldPrice: oldPrice,
                default_offer: { retail_price: retailPrice, old_price: oldPrice },
                count: 1
            });
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateNavCartBadge();

    if (btn) {
        let oldHtml = btn.innerHTML;
        btn.innerHTML = '<span>Səbətə atıldı ✓</span>';
        btn.style.backgroundColor = '#13ae5f';
        btn.style.color = '#ffffff';
        setTimeout(function() {
            btn.innerHTML = oldHtml;
            btn.style.backgroundColor = '';
            btn.style.color = '';
        }, 1200);
    }
}

function updateNavCartBadge() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let count = 0;
    for (let i = 0; i < cart.length; i++) {
        count += (cart[i].count || 1);
    }
    let badges = document.querySelectorAll(".nav-cart-badge-count, #nav-cart-badge");
    for (let i = 0; i < badges.length; i++) {
        if (count > 0) {
            badges[i].innerText = count;
            badges[i].style.display = "flex";
        } else {
            badges[i].style.display = "none";
        }
    }
}

updateNavCartBadge();

function makeCardHtml(product, wrapperClass) {
    let exists = false;
    for (let i = 0; i < allProductsList.length; i++) {
        if (allProductsList[i].id == product.id) {
            exists = true;
            break;
        }
    }
    if (!exists) {
        allProductsList.push(product);
    }

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let isFav = false;
    for (let f = 0; f < favorites.length; f++) {
        let favId = favorites[f].id ? favorites[f].id : favorites[f];
        if (favId == product.id) {
            isFav = true;
            break;
        }
    }

    let title = product.title || product.name || '';
    let imgUrl = product.image || '';
    if (!imgUrl && product.main_img) {
        imgUrl = product.main_img.small || product.main_img.medium || product.main_img.big || '';
    }
    if (!imgUrl && product.images && product.images[0]) {
        imgUrl = product.images[0].small || product.images[0].medium || product.images[0].big || '';
    }

    let labelHtml = '';
    if (product.isNew) {
        labelHtml = '<div class="absolute top-[16px] left-[16px] z-10"><div class="bg-[#ea207e] text-white text-[11px] font-bold px-[6px] py-[3px] rounded-[4px]">Yenilik</div></div>';
    } else if (product.isPartnerPremium) {
        labelHtml = '<div class="absolute top-[16px] left-[16px] z-10"><div class="bg-[#1E244D] text-white text-[11px] font-bold px-[6px] py-[3px] rounded-[4px]">PARTNER PREMIUM</div></div>';
    } else if (product.isBestSeller) {
        labelHtml = '<div class="absolute top-[16px] left-[16px] z-10"><div class="bg-[#ea207e] text-white text-[11px] font-bold px-[6px] py-[3px] rounded-[4px]">Çox satılan</div></div>';
    } else if (product.product_labels && product.product_labels.length > 0) {
        labelHtml = '<div class="absolute top-[16px] left-[16px] z-10"><div class="bg-[#ea207e] text-white text-[11px] font-bold px-[6px] py-[3px] rounded-[4px]">' + product.product_labels[0].text + '</div></div>';
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

    let discountPercent = product.discount || 0;
    if (!discountPercent && oldPrice > price) {
        discountPercent = Math.round((1 - price / oldPrice) * 100);
    }

    let discountHtml = '';
    if (discountPercent > 0) {
        discountHtml = '<div class="absolute bottom-0 left-0 bg-[#ea207e] text-white text-[11px] font-bold px-[6px] py-[3px] rounded-[4px]">-' + discountPercent + '%</div>';
    }

    let retail = price.toFixed(2);
    let oldPriceHtml = '';
    if (oldPrice > price) {
        oldPriceHtml = '<span class="text-[#9497AD] text-[12px] line-through leading-[1.2] pb-[1px]">' + oldPrice.toFixed(2) + ' ₼</span>';
    }

    let installHtml = '<div class="h-[25px] mt-1 mb-2"></div>';
    if (product.installment && product.installment.monthly) {
        installHtml = '<div class="bg-[#ffcc00] text-[#1E244D] text-[11px] font-bold px-[6px] py-[2px] rounded-[4px] w-max mt-1 mb-2">' + product.installment.monthly + ' ₼ x ' + (product.installment.months || 24) + ' ay</div>';
    } else if (product.default_offer && product.default_offer.installment_text) {
        installHtml = '<div class="bg-[#ffcc00] text-[#1E244D] text-[11px] font-bold px-[6px] py-[2px] rounded-[4px] w-max mt-1 mb-2">' + product.default_offer.installment_text + '</div>';
    } else if (product.default_offer && product.default_offer.installment_enabled && product.default_offer.max_installment_months > 0) {
        let monthly = (product.default_offer.retail_price / product.default_offer.max_installment_months).toFixed(2);
        installHtml = '<div class="bg-[#ffcc00] text-[#1E244D] text-[11px] font-bold px-[6px] py-[2px] rounded-[4px] w-max mt-1 mb-2">' + monthly + ' ₼ x ' + product.default_offer.max_installment_months + ' ay</div>';
    }

    let ratingCount = product.reviewCount || (product.ratings ? product.ratings.session_count : 0) || 0;
    let ratingHtml = '<div class="h-[18px] mt-1"></div>';
    if (ratingCount > 0) {
        ratingHtml = '<div class="flex items-center gap-1 mt-1"><div class="flex text-[#ff9800]">' + makeStars() + '</div><span class="text-[10px] text-[#ea207e] ml-[2px]">' + ratingCount + ' reytinq</span></div>';
    }

    let card = '<div class="' + wrapperClass + ' relative group bg-white border border-[#f1f2f3] rounded-[10px] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between">';
    card += '<button type="button" onclick="toggleCardFavorite(this, ' + product.id + ')" style="color: ' + (isFav ? '#ea207e' : '#9497ad') + ';" class="card-fav-btn absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center transition-all cursor-pointer">';
    card += '<svg style="fill: ' + (isFav ? 'currentColor' : 'none') + ';" width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>';
    card += '</button>';
    card += '<a href="detail.html?id=' + product.id + '" style="text-decoration:none;display:flex;flex-direction:column;flex:1;" class="MPProductItem text-inherit">';
    card += '<div class="p-[16px] relative" style="flex:1;">';
    card += labelHtml;
    card += '<div class="relative h-[160px] flex items-center justify-center mb-4 mt-2">';
    card += '<img src="' + imgUrl + '" class="max-h-full object-contain mix-blend-multiply" alt="' + title + '">';
    card += discountHtml;
    card += '</div>';
    card += '<div class="flex flex-col gap-[2px]">';
    card += '<div class="flex items-end gap-2 mb-1">';
    card += '<span class="text-[#EA207E] text-[18px] font-bold leading-none tracking-tight">' + retail + ' <span class="font-normal text-[14px]">₼</span></span>';
    card += oldPriceHtml;
    card += '</div>';
    card += installHtml;
    card += '<span class="text-[#1E244D] text-[13px] leading-[1.4] h-[36px] overflow-hidden line-clamp-2 mt-[6px] block">' + title + '</span>';
    card += ratingHtml;
    card += '</div></div></a>';
    card += '<div class="p-[16px] pt-0">';
    card += '<button type="button" onclick="addToCart(this, ' + product.id + ')" class="w-full h-[40px] flex items-center justify-center gap-2 bg-[#fff0f6] text-[#ea207e] font-[600] text-[13px] rounded-[6px] transition-colors hover:bg-[#ea207e] hover:text-white cursor-pointer">';
    card += '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>';
    card += '<span>Səbətə at</span>';
    card += '</button></div>';
    card += '</div>';

    return card;
}

let isCatalogOpen = false;
let megaSwiperInstance = null;
let topProductsSwiperInstance = null;
let newProductsSwiperInstance = null;

document.addEventListener('DOMContentLoaded', function() {

    let menu = document.querySelector('.MPLandingMenu');
    if (menu) {
        let lis = menu.querySelectorAll('ul li');
        for (let i = 0; i < lis.length; i++) {
            let li = lis[i];
            li.className = 'group mb-[1px] static';
            let a = li.querySelector('a');
            if (a) {
                a.className += ' flex items-center py-1 px-3 rounded text-[#50557A] text-[13px] hover:bg-[#f1f2f3] group-hover:bg-transparent group-hover:text-[#ea207e] transition-colors';
                let span = a.querySelector('span');
                if (span) {
                    span.style.paddingLeft = '';
                    span.className = 'pl-3 flex-1';
                }
                let iconWrap = a.querySelector('.ProductCategoriesMenu-Icon, .SmartProductCategoriesMenu-Icon');
                if (iconWrap) {
                    iconWrap.className = 'w-6 h-6 flex items-center justify-center shrink-0';
                    let img = iconWrap.querySelector('img');
                    if (img) img.className = 'w-6 h-6 object-contain';
                }
            }
        }
    }

    let topMenu = document.querySelector('.TopLandingMenu');
    let mainMenu = document.querySelector('.MPLandingMenu');
    let showAllBtn = document.querySelector('.MPLandingMenu-ShowAllCategory');
    let overlay = document.querySelector('.MPLandingHeader-Overlay');
    let leftPanel = document.querySelector('.Left');
    let menuWrapper = document.querySelector('.MPLandingMenu-Wrapper');

    if (menuWrapper && topMenu && mainMenu && showAllBtn && overlay && leftPanel) {
        menuWrapper.className += ' flex flex-col h-full transition-all duration-300 relative';
        topMenu.className += ' flex-1 overflow-hidden static menu-scrollbar pr-1';
        mainMenu.className += ' bg-white w-full h-full rounded-md z-50';

        leftPanel.addEventListener('mouseenter', function() {
            topMenu.classList.remove('overflow-hidden', 'flex-1');
            topMenu.classList.add('overflow-y-auto', 'max-h-[516px]', 'overscroll-y-contain');
            mainMenu.classList.remove('h-[400px]', 'h-full');
            mainMenu.classList.add('absolute', 'h-auto', 'w-full', 'rounded-b-md', 'shadow-[4px_10px_20px_rgba(0,0,0,0.1)]', 'pb-2');
            showAllBtn.style.display = 'none';
            overlay.style.display = 'block';
            overlay.className = 'fixed inset-0 bg-black/40 z-40 transition-opacity';
            leftPanel.classList.add('z-50');
        });

        leftPanel.addEventListener('mouseleave', function() {
            topMenu.classList.add('overflow-hidden', 'flex-1');
            topMenu.classList.remove('overflow-y-auto', 'max-h-[516px]', 'max-h-[800px]', 'overscroll-y-contain');
            mainMenu.classList.add('h-full');
            mainMenu.classList.remove('absolute', 'h-auto', 'w-full', 'rounded-b-md', 'shadow-[4px_10px_20px_rgba(0,0,0,0.1)]', 'pb-2');
            showAllBtn.style.display = 'flex';
            overlay.style.display = 'none';
            leftPanel.classList.remove('z-50');
        });
    }

    if (document.querySelector('.mainSwiper')) {
        new Swiper('.mainSwiper', {
            loop: true,
            autoplay: { delay: 3500, disableOnInteraction: false },
            pagination: { el: '.custom-pagination', clickable: true },
            slidesPerView: 1.2,
            spaceBetween: 10,
            breakpoints: {
                768: {
                    slidesPerView: 1.25,
                    spaceBetween: 12
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
            }
        });
    }

    let catalogBtn = document.getElementById('catalog-btn');
    let catalogDropdown = document.getElementById('header-catalog-dropdown');
    let catalogArrow = document.getElementById('catalog-btn-arrow');
    let catalogOverlay = document.getElementById('catalog-backdrop-overlay');
    let headerCatalogContent = document.getElementById('header-catalog-content');
    let headerCategoryWrapper = document.getElementById('header-category-wrapper');

    if (catalogBtn && catalogDropdown && headerCatalogContent) {
        let catHtml = '<div class="overflow-y-auto max-h-[500px] menu-scrollbar pr-1"><ul class="flex flex-col py-1">';
        for (let c = 0; c < catalogCategories.length; c++) {
            let cat = catalogCategories[c];
            let iconHtml = '<div class="w-6 h-6 flex items-center justify-center shrink-0">';
            if (cat.img) {
                iconHtml += '<img src="' + cat.img + '" class="w-6 h-6 object-contain" alt="' + cat.title + '">';
            }
            iconHtml += '</div>';

            let arrowHtml = '';
            if (cat.arrow) {
                arrowHtml = '<div class="TurningArrowIcon flex justify-center items-center h-[10px] ml-auto" style="transform: rotate(270deg);"><svg width="10" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.06 0L4 3.05333L0.94 0L0 0.94L4 4.94L8 0.94L7.06 0Z" fill="#BDBFCD"></path></svg></div>';
            }

            catHtml += '<li class="group mb-[1px] static">';
            catHtml += '<a href="' + cat.url + '" class="cursor-pointer flex items-center py-1 px-3 rounded text-[#50557A] text-[13px] hover:bg-[#f1f2f3] hover:text-[#ea207e] transition-colors">';
            catHtml += iconHtml + '<span class="pl-3 flex-1">' + cat.title + '</span>' + arrowHtml;
            catHtml += '</a></li>';
        }
        catHtml += '</ul></div>';
        headerCatalogContent.innerHTML = catHtml;

        catalogBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (isCatalogOpen) {
                catalogDropdown.style.display = 'none';
                if (catalogArrow) catalogArrow.style.transform = 'rotate(0deg)';
                if (catalogOverlay) catalogOverlay.style.display = 'none';
                isCatalogOpen = false;
            } else {
                catalogDropdown.style.display = 'block';
                if (catalogArrow) catalogArrow.style.transform = 'rotate(180deg)';
                if (catalogOverlay) catalogOverlay.style.display = 'block';
                isCatalogOpen = true;
            }
        });

        if (catalogOverlay) {
            catalogOverlay.addEventListener('click', function() {
                catalogDropdown.style.display = 'none';
                if (catalogArrow) catalogArrow.style.transform = 'rotate(0deg)';
                catalogOverlay.style.display = 'none';
                isCatalogOpen = false;
            });
        }

        document.addEventListener('click', function(e) {
            if (isCatalogOpen && headerCategoryWrapper && !headerCategoryWrapper.contains(e.target)) {
                catalogDropdown.style.display = 'none';
                if (catalogArrow) catalogArrow.style.transform = 'rotate(0deg)';
                if (catalogOverlay) catalogOverlay.style.display = 'none';
                isCatalogOpen = false;
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && isCatalogOpen) {
                catalogDropdown.style.display = 'none';
                if (catalogArrow) catalogArrow.style.transform = 'rotate(0deg)';
                if (catalogOverlay) catalogOverlay.style.display = 'none';
                isCatalogOpen = false;
            }
        });
    }

    let creditBtns = document.querySelectorAll('.credit-calc-btn');
    let installmentPill = document.getElementById('installment-pill');
    for (let b = 0; b < creditBtns.length; b++) {
        creditBtns[b].addEventListener('click', function() {
            for (let j = 0; j < creditBtns.length; j++) {
                creditBtns[j].className = 'credit-calc-btn border border-[#E7E8ED] text-[#1E244D] rounded-md grow h-[38px] transition-colors font-medium text-[13px] hover:border-[#ea207e]';
            }
            this.className = 'credit-calc-btn border border-transparent text-[#1E244D] rounded-md grow h-[38px] transition-colors font-bold text-[13px] bg-[#FFD447] shadow-sm';
            let months = this.dataset.months;
            let price = this.dataset.price;
            if (installmentPill && price && months) {
                installmentPill.textContent = price + ' ₼ x ' + months + ' ay';
            }
        });
    }

    let tabLinks = document.querySelectorAll('.MPProductDescription-TabsWrapper a');
    for (let t = 0; t < tabLinks.length; t++) {
        tabLinks[t].addEventListener('click', function(e) {
            if (this.getAttribute('data-id')) {
                e.preventDefault();
                for (let k = 0; k < tabLinks.length; k++) {
                    tabLinks[k].classList.remove('active');
                }
                this.classList.add('active');
            }
        });
    }
});

function initAktualCategories() {
    let container = document.querySelector('.MPLandingCategories-Items');
    if (!container) return;

    let html = '';
    for (let i = 0; i < aktualitems.length; i++) {
        let item = aktualitems[i];
        html += '<div class="Item">';
        html += '<a href="' + item.url + '" class="flex flex-col items-center text-center group cursor-pointer block">';
        html += '<span class="MPLandingCategories-ItemsLogo block w-[110px] h-[95px] bg-contain bg-center bg-no-repeat mb-3 transition-transform duration-200 group-hover:scale-105" style="background-image: url(\'' + item.img + '\');"></span>';
        html += '<span class="text-center text-[#1E244D] text-[12.5px] font-normal leading-[1.3] group-hover:text-[#ea207e] transition-colors max-w-[145px] block mx-auto"><span>' + item.title + '</span></span>';
        html += '</a></div>';
    }
    container.innerHTML = html;
}

initAktualCategories();

function initSaleOfDay() {
    let wrapper = document.getElementById('sale-swiper-wrapper');
    if (!wrapper) return;

    let html = '';
    for (let i = 0; i < discountedProducts.length; i++) {
        html += makeCardHtml(discountedProducts[i], 'swiper-slide w-[248px] !h-auto');
    }
    wrapper.innerHTML = html;

    new Swiper('.saleSwiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        preventClicks: false,
        preventClicksPropagation: false,
        navigation: { nextEl: '.sale-button-next' },
        pagination: { el: '.sale-pagination', clickable: true }
    });
}

initSaleOfDay();

function initBrandsSwiper() {
    new Swiper('.brandsSwiper', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        navigation: { nextEl: '.brands-button-next', prevEl: '.brands-button-prev' },
        breakpoints: { 768: { spaceBetween: 10 }, 1024: { spaceBetween: 12 } }
    });
}

initBrandsSwiper();

function initSellersSwiper() {
    new Swiper('.sellersSwiper', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        navigation: { nextEl: '.sellers-button-next', prevEl: '.sellers-button-prev' },
        breakpoints: { 768: { spaceBetween: 10 }, 1024: { spaceBetween: 12 } }
    });
}

initSellersSwiper();

function initBestSellers() {
    let grid = document.getElementById('bestsellers-grid');
    if (!grid) return;

    let html = '';
    for (let i = 0; i < bestSellerProducts.length; i++) {
        html += makeCardHtml(bestSellerProducts[i], 'w-full');
    }
    grid.innerHTML = html;
}

initBestSellers();

function renderMegaProducts(products) {
    let wrapper = document.getElementById('mega-swiper-wrapper');
    if (!wrapper) return;

    let html = '';
    for (let i = 0; i < products.length; i++) {
        html += makeCardHtml(products[i], 'swiper-slide w-[248px] !h-auto');
    }
    wrapper.innerHTML = html;

    if (megaSwiperInstance) {
        megaSwiperInstance.destroy(true, true);
    }

    megaSwiperInstance = new Swiper('.megaSwiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        preventClicks: false,
        preventClicksPropagation: false,
        navigation: { nextEl: '.mega-button-next', prevEl: '.mega-button-prev' },
        pagination: { el: '.mega-pagination', clickable: true },
        breakpoints: { 1280: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 16 } }
    });
}

function initMegaDiscounts() {
    renderMegaProducts(discountedProducts);
}

initMegaDiscounts();

function renderTopProducts(products) {
    let wrapper = document.getElementById('top-products-swiper-wrapper');
    if (!wrapper) return;

    let html = '';
    for (let i = 0; i < products.length; i++) {
        html += makeCardHtml(products[i], 'swiper-slide w-[248px] !h-auto');
    }
    wrapper.innerHTML = html;

    if (topProductsSwiperInstance) {
        topProductsSwiperInstance.destroy(true, true);
    }

    topProductsSwiperInstance = new Swiper('.topProductsSwiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        preventClicks: false,
        preventClicksPropagation: false,
        navigation: { nextEl: '.top-products-button-next', prevEl: '.top-products-button-prev' },
        pagination: { el: '.top-products-pagination', clickable: true },
        breakpoints: { 1280: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 16 } }
    });
}

function initTopProducts() {
    renderTopProducts(bestSellerProducts);
}

initTopProducts();

function renderNewProducts(products) {
    let wrapper = document.getElementById('new-products-swiper-wrapper');
    if (!wrapper) return;

    let html = '';
    for (let i = 0; i < products.length; i++) {
        html += makeCardHtml(products[i], 'swiper-slide w-[248px] !h-auto');
    }
    wrapper.innerHTML = html;

    if (newProductsSwiperInstance) {
        newProductsSwiperInstance.destroy(true, true);
    }

    newProductsSwiperInstance = new Swiper('.newProductsSwiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        preventClicks: false,
        preventClicksPropagation: false,
        navigation: { nextEl: '.new-products-button-next', prevEl: '.new-products-button-prev' },
        pagination: { el: '.new-products-pagination', clickable: true },
        breakpoints: { 1280: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 16 } }
    });
}

function initNewProducts() {
    renderNewProducts(newProducts);
}

initNewProducts();

let searchInput = document.querySelector('.QuickSearch-Input');
let searchClearBtn = document.querySelector('.quick-search-clear');
let searchDropdown = document.querySelector('.quick-search-dropdown');
let searchTags = document.querySelector('.quick-search-tags');
let searchResults = document.querySelector('.quick-search-results');

let searchTagsList = ["Smartfon", "Qulaqlıq", "Saat", "Çaydan", "Tozsoran", "Küncüt", "Blender", "Ayaqqabı"];

function clickSearchTag(tag) {
    if (searchInput) {
        searchInput.value = tag;
        doSearch();
    }
}

function clearSearch() {
    if (searchInput) {
        searchInput.value = "";
    }
    if (searchDropdown) {
        searchDropdown.style.display = "none";
    }
    if (searchClearBtn) {
        searchClearBtn.style.display = "none";
    }
}

function doSearch() {
    if (!searchInput) return;

    let text = searchInput.value.toLowerCase().trim();

    if (text == "") {
        searchDropdown.style.display = "none";
        searchClearBtn.style.display = "none";
        return;
    }

    searchDropdown.style.display = "block";
    searchClearBtn.style.display = "block";

    let tagsHtml = "";
    for (let i = 0; i < searchTagsList.length; i++) {
        tagsHtml += '<button type="button" onclick="clickSearchTag(\'' + searchTagsList[i] + '\')" class="bg-[#f1f2f5] hover:bg-[#e4e6ea] text-[#1E244D] text-[13px] px-3.5 py-1.5 rounded-[8px] cursor-pointer">' + searchTagsList[i] + '</button>';
    }
    searchTags.innerHTML = tagsHtml;

    let resultHtml = "";
    let count = 0;
    for (let i = 0; i < allProductsList.length; i++) {
        let product = allProductsList[i];
        let title = product.title || product.name || "";
        let category = product.category || "";

        if (title.toLowerCase().indexOf(text) !== -1 || category.toLowerCase().indexOf(text) !== -1) {
            let highlighted = title;
            let pos = title.toLowerCase().indexOf(text);
            if (pos !== -1) {
                let before = title.slice(0, pos);
                let match = title.slice(pos, pos + text.length);
                let after = title.slice(pos + text.length);
                highlighted = before + '<span class="font-bold text-[#EA207E]">' + match + '</span>' + after;
            }

            let img = product.image || "";
            let price = product.price ? Number(product.price).toFixed(2) + " ₼" : "";

            resultHtml += '<a href="detail.html?id=' + product.id + '" class="flex items-center justify-between py-2 px-2 hover:bg-[#F8F9FA] rounded cursor-pointer text-[#1E244D] text-decoration-none">';
            resultHtml += '<div class="flex items-center gap-2.5 min-w-0 pr-2">';
            if (img) {
                resultHtml += '<img src="' + img + '" class="w-8 h-8 object-contain shrink-0" alt="">';
            }
            resultHtml += '<span class="text-[13px] truncate">' + highlighted + '</span>';
            resultHtml += '</div>';
            resultHtml += '<div class="flex items-center gap-2 shrink-0">';
            if (category) {
                resultHtml += '<span class="bg-[#F1F2F5] text-[#50557A] text-[11px] px-2 py-0.5 rounded">' + category + '</span>';
            }
            if (price) {
                resultHtml += '<span class="text-[#EA207E] text-[13px] font-bold">' + price + '</span>';
            }
            resultHtml += '</div>';
            resultHtml += '</a>';

            count++;
            if (count >= 10) {
                break;
            }
        }
    }

    if (resultHtml === "") {
        resultHtml = '<div class="py-3 px-2 text-[#9497AD] text-[13px] text-center">Nəticə tapılmadı</div>';
    }

    searchResults.innerHTML = resultHtml;
}

if (searchInput) {
    searchInput.oninput = doSearch;
}

if (searchClearBtn) {
    searchClearBtn.onclick = clearSearch;
}

let searchForm = document.querySelector('.QuickSearch');
if (searchForm) {
    searchForm.onsubmit = function(e) {
        e.preventDefault();
        let text = searchInput ? searchInput.value.toLowerCase().trim() : "";
        if (text) {
            for (let i = 0; i < allProductsList.length; i++) {
                let title = (allProductsList[i].title || "").toLowerCase();
                let cat = (allProductsList[i].category || "").toLowerCase();
                if (title.indexOf(text) !== -1 || cat.indexOf(text) !== -1) {
                    window.location.href = "detail.html?id=" + allProductsList[i].id;
                    return;
                }
            }
        }
    };
}

document.addEventListener('click', function(e) {
    if (!e.target.closest('.header-search-wrapper') && searchDropdown) {
        searchDropdown.style.display = "none";
    }
});

let mobileMenuBtn = document.querySelector('.mobile-menu-toggle-btn');
let mobileDrawer = document.querySelector('.mobile-drawer-menu');
let hamburgerIcon = document.querySelector('.hamburger-icon-svg');
let closeIcon = document.querySelector('.close-icon-svg');

if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.onclick = function() {
        let isClosed = mobileDrawer.classList.contains('hidden');
        if (isClosed) {
            mobileDrawer.classList.remove('hidden');
            if (hamburgerIcon) hamburgerIcon.classList.add('hidden');
            if (closeIcon) closeIcon.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        } else {
            mobileDrawer.classList.add('hidden');
            if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
            if (closeIcon) closeIcon.classList.add('hidden');
            document.body.style.overflow = '';
        }
    };
}

let mobileCatalogBtn = document.querySelector('.mobile-catalog-btn');
let mobileCatalogDropdown = document.querySelector('.mobile-catalog-dropdown');
let mobileCatalogArrow = document.querySelector('.mobile-catalog-arrow');

if (mobileCatalogBtn && mobileCatalogDropdown) {
    let mobileCatHtml = '<ul class="flex flex-col py-1">';
    for (let c = 0; c < catalogCategories.length; c++) {
        let cat = catalogCategories[c];
        let iconHtml = '<div class="w-6 h-6 flex items-center justify-center shrink-0">';
        if (cat.img) {
            iconHtml += '<img src="' + cat.img + '" class="w-6 h-6 object-contain" alt="' + cat.title + '">';
        }
        iconHtml += '</div>';

        mobileCatHtml += '<li class="mb-1">';
        mobileCatHtml += '<a href="' + cat.url + '" class="cursor-pointer flex items-center py-1.5 px-2 rounded text-[#50557A] text-[13px] hover:bg-[#f1f2f3] hover:text-[#ea207e] transition-colors">';
        mobileCatHtml += iconHtml + '<span class="pl-2.5 flex-1">' + cat.title + '</span>';
        mobileCatHtml += '</a></li>';
    }
    mobileCatHtml += '</ul>';
    mobileCatalogDropdown.innerHTML = mobileCatHtml;

    mobileCatalogBtn.onclick = function() {
        let isClosed = mobileCatalogDropdown.classList.contains('hidden');
        if (isClosed) {
            mobileCatalogDropdown.classList.remove('hidden');
            if (mobileCatalogArrow) mobileCatalogArrow.classList.add('rotate-180');
        } else {
            mobileCatalogDropdown.classList.add('hidden');
            if (mobileCatalogArrow) mobileCatalogArrow.classList.remove('rotate-180');
        }
    };

    document.addEventListener('click', function(e) {
        if (!mobileCatalogBtn.contains(e.target) && !mobileCatalogDropdown.contains(e.target)) {
            mobileCatalogDropdown.classList.add('hidden');
            if (mobileCatalogArrow) mobileCatalogArrow.classList.remove('rotate-180');
        }
    });
}

let badgesScroll = document.getElementById('mobile-badges-scroll');
let badgesThumb = document.getElementById('mobile-badges-thumb');
if (badgesScroll && badgesThumb) {
    badgesScroll.onscroll = function() {
        let maxScroll = badgesScroll.scrollWidth - badgesScroll.clientWidth;
        if (maxScroll > 0) {
            let percent = badgesScroll.scrollLeft / maxScroll;
            let track = badgesThumb.parentElement;
            let maxMove = track.clientWidth - badgesThumb.clientWidth;
            badgesThumb.style.transform = 'translateX(' + (percent * maxMove) + 'px)';
        }
    };
}

let bottomCatalogBtn = document.querySelector('.bottom-nav-catalog-btn');
if (bottomCatalogBtn) {
    bottomCatalogBtn.onclick = function() {
        let mobileCatBtn = document.querySelector('.mobile-catalog-btn');
        if (mobileCatBtn) {
            mobileCatBtn.click();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.location.href = 'index.html';
        }
    };
}



