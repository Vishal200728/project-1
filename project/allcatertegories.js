const products = [
  { id: 1, name: "KVM Switch: A Monitor, Keyboard, Mouse for Two Computers", price: 5.000, image: "AVA004241-1900x1069.jpg", category: "computers" },
    { id: 1, name: "Dell XPS 15", price: 1599.00, image: "Dell-XPS-15-9530-c.jpg", category: "laptops" },
  { id: 2, name: "Apple MacBook Pro 16", price: 2499.00, image: "OIP (12).webp", category: "laptops" },
   { "id": 1, "name": "Sony Bravia 32-Inch HD Ready Smart LED TV", "price": 199.99, "category": "Television", "image": "Sony Bravia 32-Inch HD Ready Smart LED TV.webp" },
 { "id": 2, "name": "Sony Bravia 43-Inch 4K Ultra HD Smart TV", "price": 349.99, "category": "Television", "image": "Sony Bravia 43-Inch 4K Ultra HD Smart TV.webp" },
 { "id": 3, "name": "Sony 55-Inch 4K OLED TV", "price": 899.99, "category": "Television", "image": "Sony 55-Inch 4K OLED TV.webp" },
 { "id": 4, "name": "Sony Bravia 65-Inch 4K Google TV", "price": 1199.99, "category": "Television", "image": "Sony Bravia 65-Inch 4K Google TV.webp" },
 { "id": 5, "name": "Sony XR-75Z9J 75-Inch 8K Smart TV", "price": 2999.99, "category": "Television", "image": "Sony XR-75Z9J 75-Inch 8K Smart TV.webp" },
      { id: 1, name: "Amazfit Bip 5 Smartwatch", price: 4999.00, image: "Amazfit Bip 5 Smartwatch.webp", category: "smartwatches" },
  { id: 2, name: "Fire-Boltt Ninja Call Pro Plus", price: 1599.00, image: "Fire-Boltt Ninja Call Pro Plus.webp", category: "smartwatches" },
   { id: 1, name: "Apple iPad Pro 12.9 (M4)", price: 3299.00, image: "ipad-pro-12-m4.webp", category: "tablets" },
{ id: 2, name: "Samsung Galaxy Tab S9 Ultra", price: 2499.00, image: "galaxy-tab-s9-ultra.webp", category: "tablets" },
{ id: 3, name: "Microsoft Surface Pro 9", price: 5499.00, image: "surface-pro-9.webp", category: "tablets" },
{ id: 4, name: "Lenovo Tab Extreme", price: 1699.00, image: "lenovo-tab-extreme.webp", category: "tablets" },
{ id: 5, name: "Xiaomi Pad 6 Max", price: 1999.00, image: "xiaomi-pad-6-max.webp", category: "tablets" },
  { id: 3, name: "Noise ColorFit Pulse Grand", price: 1799.00, image: "Noise ColorFit Pulse Grand.webp", category: "smartwatches" },
    { id: 1, name: "Samsung Galaxy S24 Ultra", price: 1299.00, image: "-original-imahyvntxfrpuw6g.webp", category: "mobiles" },
  { id: 2, name: "Apple iPhone 15 Pro Max", price: 1399.00, image: "-original-imagtc3h9h6kpbkc.webp", category: "mobiles" },
    { id: 6, name: "Leica Q3", price: 5999.00, image: "leica-q3.webp", category: "cameras" },
  { id: 7, name: "Olympus OM-D E-M1 Mark III", price: 1499.00, image: "olympus-e1m3.webp", category: "cameras" },
  { id: 8, name: "Sony ZV-E10", price: 799.00, image: "sony-zve10.webp", category: "cameras" },
  { id: 9, name: "Canon EOS R10", price: 999.00, image: "canon-r10.webp", category: "cameras" },
  { id: 10, name: "Nikon Zfc", price: 1099.00, image: "nikon-zfc.webp", category: "cameras" },
    { id: 1, name: "Sony MDR-ZX110 On-Ear Stereo Headphones.", price: 5.000, image: "shopping (11).webp", category: "Headphones" },
{ id: 2, name: "Sony Pulse 3D Wireless Headset.", price: 49.99, image: "shopping (9).webp", category: "Headphones" },
{ id: 3, name: "Sony XB950B1 Extra Bass Wireless Headphones .", price: 14.99, image: "shopping (8).webp", category: "Headphones" },
{ id: 4, name: " Sony MDR-M1 Closed Back Headphones.", price: 59.99, image: "shopping (7).webp", category: "Headphones" },
{ id: 5, name: "Sony WH-1000XM4 Wireless Noise-Canceling Headphones.", price: 59.99, image: "shopping (6).webp", category: "Headphones" },
    { id: 1, name: "MarQ by Flipkart Thunder 160, 160 Watts, 2.1 Channel", price: 5.00, image: "-original-imahed45pkjgs6yt.webp", category: "speakers" },
  { id: 2, name: "F FERONS Powerpact bass & stereo audio", price: 49.99, image: "stereo-audio-color-changing-led-light-wireless-portable-3-w-original-imah52u8qf3gbtyz.webp", category: "speakers" },
  { id: 2, name: "Best computers under ₹10000 for everyday use with reliable", price: 49.99, image: "computer_under_Rs_10000_1753357132468_1753357138570.avif", category: "computers" },
  { id: 3, name: "Google Pixel 9 Pro", price: 1099.00, image: "-original-imahegqhzpytd3kg.webp", category: "mobiles" },
  { id: 4, name: "OnePlus 12", price: 899.00, image: "12-5g-op12-5g-oneplus-original-imagxgt7uwerszh8.webp", category: "mobiles" },
    { id: 4, name: "boAt Wave Sigma", price: 1299.00, image: "boAt Wave Sigma.webp", category: "smartwatches" },
  { id: 5, name: "Samsung Galaxy Watch 6", price: 28999.00, image: "Samsung Galaxy Watch 6.webp", category: "smartwatches" },
  { id: 6, name: "Apple Watch SE (2nd Gen)", price: 29900.00, image: "Apple Watch SE (2nd Gen).webp", category: "smartwatches" },
  { id: 3, name: "HP Spectre x360", price: 1399.00, image: "hp-spectre.webp", category: "laptops" },
  { id: 4, name: "Lenovo ThinkPad X1 Carbon", price: 1799.00, image: "thinkpad-x1.webp", category: "laptops" },
  { id: 6, name: "Huawei MatePad Pro 13.2", price: 5999.00, image: "matepad-pro-13-2.webp", category: "tablets" },
{ id: 7, name: "Asus ROG Flow Z13", price: 1499.00, image: "rog-flow-z13.webp", category: "tablets" },
{ id: 8, name: "Realme Pad X", price: 799.00, image: "realme-pad-x.webp", category: "tablets" },
{ id: 9, name: "Apple iPad Air (M2)", price: 999.00, image: "ipad-air-m2.webp", category: "tablets" },
{ id: 10, name: "Samsung Galaxy Tab S7 FE", price: 1099.00, image: "galaxy-tab-s7-fe.webp", category: "tablets" },
   { "id": 6, "name": "Sony 40-Inch Full HD Smart LED TV", "price": 279.99, "category": "Television", "image": "Sony 40-Inch Full HD Smart LED TV.webp" },
 { "id": 7, "name": "Sony Bravia 50-Inch 4K LED TV", "price": 599.99, "category": "Television", "image": "Sony Bravia 50-Inch 4K LED TV.webp" },
 { "id": 8, "name": "Sony 75-Inch XR OLED 4K TV", "price": 2199.99, "category": "Television", "image": "Sony 75-Inch XR OLED 4K TV.webp" },
 { "id": 9, "name": "boAt Smart TV 43-Inch Full HD Android TV", "price": 239.99, "category": "Television", "image": "boAt Smart TV 43-Inch Full HD Android TV.webp" },
 { "id": 10, "name": "boAt 50-Inch 4K Android LED TV", "price": 349.99, "category": "Television", "image": "boAt 50-Inch 4K Android LED TV.webp" },
    { id: 3, name: "MZ M406SP Portable Bluetooth Speaker", price: 14.99, image: "m412sp-portable-dynamic-thunder-sound-with-high-bass-mz-original-imah77cxzzv4tbz8.webp", category: "speakers" },
  { id: 4, name: "F FERONS Wireless Premium Bass", price: 59.99, image: "brand-new-3d-sound-with-rock-beat-blast-stereo-deep-bass-original-imafvxczvzhcxcpp.webp", category: "speakers" },
  { id: 3, name: "Navigating the World of New Computer Systems", price: 14.99, image: "Navigating-the-World-of-New-Computer-Systems.jpg", category: "computers" },
    { id: 7, name: "Realme Watch 3 Pro", price: 3699.00, image: "Realme Watch 3 Pro.webp", category: "smartwatches" },
  { id: 8, name: "OnePlus Nord Watch", price: 3499.00, image: "OnePlus Nord Watch.webp", category: "smartwatches" },
  { id: 9, name: "Fastrack Reflex Vox", price: 1999.00, image: "Fastrack Reflex Vox.webp", category: "smartwatches" },
    { id: 5, name: "Asus ROG Zephyrus G14", price: 1899.00, image: "rog-g14.webp", category: "laptops" },
  { id: 6, name: "Acer Predator Helios 300", price: 1499.00, image: "acer-predator.webp", category: "laptops" },
    { id: 5, name: "F FERONS Firebar 12", price: 59.99, image: "firebar-12-2-infire-original-imah9kd9n8v5tfhp.webp", category: "speakers" },
  { id: 6, name: "iNFiRe Party Soundbar", price: 59.99, image: "m406sp-portable-bluetooth-speaker-dynamic-thunder-sound-1200mah-original-imah77ddwr2ynpfh.webp", category: "speakers" },
    { id: 5, name: "Xiaomi 14 Pro", price: 799.00, image: "OIP.webp", category: "mobiles" },
  { id: 6, name: "Realme GT Neo 6", price: 499.00, image: "download.webp", category: "mobiles" },
  { id: 6, name: "SONY Headphones.", price: 59.99, image: "shopping (5).webp", category: "Headphones" },
{ id: 7, name: "Sony WH-CH520 Wireless Bluetooth Headphones .", price: 59.99, image: "shopping (4).webp", category: "Headphones" },
{ id: 8, name: "Sony WH-CH720N Noise Canceling Wireless Headphones", price: 59.99, image: "shopping (3).webp", category: "Headphones" },
{ id: 9, name: "boAt Rockerz 551 ANC Pro Bluetooth Headphone.", price: 59.99, image: "shopping (2).webp", category: "Headphones" },
{ id: 10, name: "boAt Rockerz 430 Bluetooth Headphones.", price: 59.99, image: "shopping (1).webp", category: "Headphones" },
{ "id": 11, "name": "boAt 32-Inch HD Ready Smart TV", "price": 159.99, "category": "Television", "image": "boAt 32-Inch HD Ready Smart TV.webp" },
{ "id": 12, "name": "boAt 43-Inch Ultra HD Smart LED TV", "price": 269.99, "category": "Television", "image": "boAt 43-Inch Ultra HD Smart LED TV.webp" },
{ "id": 13, "name": "boAt 55-Inch 4K Smart Android TV", "price": 399.99, "category": "Television", "image": "boAt 55-Inch 4K Smart Android TV.webp" },
{ "id": 14, "name": "boAt 40-Inch Full HD Smart TV", "price": 209.99, "category": "Television", "image": "boAt 40-Inch Full HD Smart TV.webp" },
  { id: 4, name: "CHIST Core I5 Desktop Complete Computer System Full Setup", price: 59.99, image: "Microsofts-Surface-Studio-Failed-to-Understand-the-Market-it-Was-Selling-To.jpg", category: "computers" },
  { id: 5, name: "GeForce 4GB GDDR5 Desktop Gaming Computer", price: 59.99, image: "Desktop-Computer-by-edit-micro.jpg", category: "computers" },
    { id: 7, name: "GOBOULT Bassbox X160 2.1 Channel", price: 59.99, image: "-original-imaheqrrkqhfy6mk.webp", category: "speakers" },
  { id: 8, name: "MZ M423SP Portable Home TV", price: 59.99, image: "m423sp-portable-home-tv-dynamic-thunder-sound-2400mah-battery-mz-original-imahe2b4nxegrsay.webp", category: "speakers" },
  { id: 9, name: "iNFiRe FireBar 20", price: 59.99, image: "firebar-20-infire-original-imaha6ctaxz6ysjp.webp", category: "speakers" },
    { id: 10, name: "Fitbit Versa 4", price: 19990.00, image: "Fitbit Versa 4.webp", category: "smartwatches" },
  { id: 11, name: "Crossbeats Ignite S4 Max", price: 4499.00, image: "Crossbeats Ignite S4 Max.webp", category: "smartwatches" },
  { id: 12, name: "Fire-Boltt Phoenix AMOLED", price: 2999.00, image: "Fire-Boltt Phoenix AMOLED.webp", category: "smartwatches" },
    { id: 7, name: "Microsoft Surface Laptop 5", price: 1299.00, image: "surface-laptop5.webp", category: "laptops" },
      { id: 11, name: "Fujifilm X-S20", price: 1299.00, image: "fujifilm-xs20.webp", category: "cameras" },
  { id: 12, name: "Sony RX100 VII", price: 1199.00, image: "sony-rx100vii.webp", category: "cameras" },
  { id: 13, name: "Canon EOS M50 Mark II", price: 699.00, image: "canon-m50m2.webp", category: "cameras" },
  { id: 14, name: "Panasonic Lumix GH6", price: 1999.00, image: "lumix-gh6.webp", category: "cameras" },
  { id: 15, name: "Leica SL2-S", price: 4999.00, image: "leica-sl2s.webp", category: "cameras" },
  { id: 8, name: "MSI Stealth 16 Studio", price: 1999.00, image: "msi-stealth16.webp", category: "laptops" },
  { id: 9, name: "Samsung Galaxy Book 4 Pro", price: 1399.00, image: "galaxy-book4.webp", category: "laptops" },
    { id: 7, name: "Vivo X100 Pro", price: 999.00, image: "OIP.webp", category: "mobiles" },
  { id: 8, name: "Oppo Find X7 Ultra", price: 1099.00, image: "download (1).webp", category: "mobiles" },
  { id: 9, name: "Motorola Edge 50 Ultra", price: 899.00, image: "download (2).webp", category: "mobiles" },
  { id: 10, name: "Nothing Phone 2", price: 699.00, image: "download (3).webp", category: "mobiles" },
  { id: 15, name: " Boat Company Headphone Price BoAt Rockerz 450 Wireless Headphones.", price: 59.99, image: "download (8).jpg", category: "Headphones" },
{ id: 16, name: "boAt Rockerz 510 Specifications | FullSpecs.net." , price: 59.99, image: "download (7).jpg", category: "Headphones" },
{ id: 17, name: "Apple company headphone hotsell.", price: 59.99, image: "images (1).jpg", category: "Headphones" },
{ id: 18, name: "Apple AirPods Max review: The iPhone 12 Pro Max of headphones", price: 59.99, image: "download (7).jpg", category: "Headphones" },
  { id: 10, name: "boAt Stone 135", price: 59.99, image: "-original-image9ezeb6yzyya.webp", category: "speakers" },
  { id: 11, name: "F FERONS Neuton Powered", price: 59.99, image: "stone-1-f-ferons-original-imahdt3bdjep8pph.webp", category: "speakers" },
  { id: 12, name: "ZEBRONICS Sound Feast 40", price: 59.99, image: "zeb-sound-feast-40-zeb-pspk-48-zebronics-original-imah66wqjbgwzhfg.webp", category: "speakers" },
  { id: 13, name: "ZEBRONICS Zeb-Fame 5W", price: 59.99, image: "zeb-fame-zebronics-original-imahddkwggqghwnq.webp", category: "speakers" },
  { id: 6, name: "PC Gaming Computer Fisso Desktop Completo", price: 59.99, image: "desktop.jpg", category: "computers" },
  { id: 13, name: "NoiseFit Halo", price: 2999.00, image: "NoiseFit Halo.webp", category: "smartwatches" },
  { id: 7, name: "WeBlog - tower powerfull pc in offerta a giugno 2025", price: 59.99, image: "NZVGFGtR5xgjTMoDWwYjQP.jpg", category: "computers" },
  { id: 8, name: "PC Gaming Computer Fisso Desktop Completo GT1030", price: 59.99, image: "MSFT-All-in-One_1040x585.avif", category: "computers" },
    { id: 11, name: "Asus ROG Phone 8", price: 1099.00, image: "OIP (1).webp", category: "mobiles" },
  { id: 12, name: "Sony Xperia 1 VI", price: 1199.00, image: "OIP (11).webp", category: "mobiles" },
  { id: 13, name: "Honor Magic6 Pro", price: 1099.00, image: "OIP (10).webp", category: "mobiles" },
   { id: 16, name: "Nikon Z6 II", price: 1999.00, image: "nikon-z6ii.webp", category: "cameras" },
  { id: 17, name: "Sony Alpha A1", price: 6499.00, image: "sony-a1.webp", category: "cameras" },
  { id: 18, name: "Canon EOS R3", price: 5999.00, image: "canon-r3.webp", category: "cameras" },
  { id: 11, name: "OnePlus Pad", price: 1299.00, image: "oneplus-pad.webp", category: "tablets" },
{ id: 12, name: "Amazon Fire Max 11", price: 1199.00, image: "fire-max-11.webp", category: "tablets" },
{ id: 13, name: "Apple iPad (10th Gen)", price: 699.00, image: "ipad-10th-gen.webp", category: "tablets" },
{ id: 14, name: "Xiaomi Pad 5 Pro", price: 1999.00, image: "xiaomi-pad-5-pro.webp", category: "tablets" },
{ id: 15, name: "Lenovo Yoga Tab 13", price: 4999.00, image: "yoga-tab-13.webp", category: "tablets" },
  { id: 19, name: "Fujifilm GFX100S", price: 5999.00, image: "fujifilm-gfx100s.webp", category: "cameras" },
  { id: 20, name: "Olympus PEN-F", price: 1199.00, image: "olympus-penf.webp", category: "cameras" },
    { id: 14, name: "ZEBRONICS PSPK9 County", price: 59.99, image: "-original-imahb5tghxwy25gw.webp", category: "speakers" },
  { id: 15, name: "ZEBRONICS Sound Feast 90", price: 59.99, image: "pspk11-zebronics-original-imahdg2wwbhmhhsn.webp", category: "speakers" },
  { id: 16, name: "F FERONS Powerpact Spiral LED", price: 59.99, image: "ultra-f-ferons-original-imah7fj4bjwtesk6.webp", category: "speakers" },
  { id: 17, name: "Vedanta SBT-917", price: 59.99, image: "sbt-917-vedanta-original-imah26jkt5nu44jt.webp", category: "speakers" },
  { id: 14, name: "Huawei Mate 60 Pro", price: 1299.00, image: "download (4).webp", category: "mobiles" },
    { id: 15, name: "Infinix Zero Ultra", price: 499.00, image: "OIP (2).webp", category: "mobiles" },
  { id: 16, name: "Poco F6 Pro", price: 599.00, image: "download (5).webp", category: "mobiles" },
  { id: 17, name: "Samsung Galaxy Z Fold6", price: 1799.00, image: "OIP (3).webp", category: "mobiles" },
  { id: 18, name: "Samsung Galaxy Z Flip6", price: 1099.00, image: "OIP (4).webp", category: "mobiles" },
  { id: 19, name: "Apple iPhone 15", price: 999.00, image: "download (6).webp", category: "mobiles" },
    { id: 10, name: "Razer Blade 15", price: 2499.00, image: "razer-blade15.webp", category: "laptops" },
  { id: 11, name: "Asus ZenBook Duo", price: 1799.00, image: "zenbook-duo.webp", category: "laptops" },
  { id: 12, name: "Apple MacBook Air M3", price: 1199.00, image: "macbook-air-m3.webp", category: "laptops" },
  { id: 13, name: "Dell Alienware m18", price: 2899.00, image: "alienware-m18.webp", category: "laptops" },
   { "id": 15, "name": "boAt 60-Inch Smart 4K TV with Voice Assistant", "price": 499.99, "category": "Television", "image": "boAt 60-Inch Smart 4K TV with Voice Assistant.webp" },
 { "id": 16, "name": "boAt 75-Inch 4K UHD Smart LED TV", "price": 699.99, "category": "Television", "image": "boAt 75-Inch 4K UHD Smart LED TV.webp" },
 { "id": 17, "name": "Apple 32-Inch Smart Monitor TV", "price": 399.99, "category": "Television", "image": "Apple 32-Inch Smart Monitor TV.webp" },
 { "id": 18, "name": "Apple TV 4K 3rd Generation", "price": 129.99, "category": "Television", "image": "Apple TV 4K 3rd Generation.webp" },
  { id: 14, name: "HP Omen 17", price: 1799.00, image: "hp-omen17.webp", category: "laptops" },
  { id: 15, name: " Boat Company Headphone Price BoAt Rockerz 450 Wireless Headphones.", price: 59.99, image: "Apple company headphone hot sell.webp", category: "Headphones" },
{ id: 16, name: "boAt Rockerz 510 Specifications | FullSpecs.net." , price: 59.99, image: "download (7).jpg", category: "Headphones" },
{ id: 17, name: "Apple company headphone hotsell.", price: 59.99, image: "images (1).jpg", category: "Headphones" },
 { id: 1, name: "Canon EOS R5", price: 3299.00, image: "canon-eos-r5.web.webp", category: "cameras" },
  { id: 2, name: "Sony Alpha A7 IV", price: 2499.00, image: "sony-a7iv.webp", category: "cameras" },
  { id: 3, name: "Nikon Z9", price: 5499.00, image: "nikon-z9.webp", category: "cameras" },
  { id: 4, name: "Fujifilm X-T5", price: 1699.00, image: "fujifilm-xt5.webp", category: "cameras" },
  { id: 5, name: "Panasonic Lumix S5II", price: 1999.00, image: "lumix-s5ii.webp", category: "cameras" },
  { id: 16, name: "Samsung Galaxy Tab S8+", price: 1999.00, image: "galaxy-tab-s8-plus.webp", category: "tablets" },
{ id: 17, name: "Microsoft Surface Go 4", price: 6499.00, image: "surface-go-4.webp", category: "tablets" },
{ id: 18, name: "Apple iPad Mini (6th Gen)", price: 5999.00, image: "ipad-mini-6.webp", category: "tablets" },
{ id: 19, name: "Huawei MatePad 11.5 PaperMatte", price: 5999.00, image: "matepad-11-5-papermatte.webp", category: "tablets" },
{ id: 20, name: "Nokia T20 Tablet", price: 1199.00, image: "nokia-t20.webp", category: "tablets" },
{ id: 18, name: "Apple AirPods Max review: The iPhone 12 Pro Max of headphones", price: 59.99, image: "Apple company headphone hotsell.webp", category: "Headphones" },
{ id: 19, name: "Headphones & Speakers - All Accessories - Apple.", price: 59.99, image: "Headphones & Speakers - All Accessories - Apple.webp", category: "Headphones" },
  { id: 9, name: "GT1030 Full Desktop PC Gaming Computer", price: 59.99, image: "pexels-designecologist-1779487.jpg", category: "computers" },
  { id: 10, name: "The Best All-in-One powerfull pc Computers for sales", price: 59.99, image: "the-best-all-in-one-computers-for-2025_73yj.jpg", category: "computers" },
  { id: 18, name: "Intex Beast 603", price: 59.99, image: "beast-603-portable-wireless-bt-speaker-with-8w-sound-output-up-original-imaghnwzc2h7egnp.webp", category: "speakers" },
  { id: 19, name: "MZ S653 Portable Bluetooth", price: 59.99, image: "s653-portable-bluetooth-speaker-dynamic-thunder-sound-with-high-original-imahe29gwgsmzkuk.webp", category: "speakers" },
  { id: 20, name: "ZEBRONICS Zeb-Sunshine 60W", price: 59.99, image: "zeb-sunshine-zebronics-original-imafvzhfys5pjtmz.webp", category: "speakers" },
  { id: 21, name: "etmax NANO PLUS 30W", price: 59.99, image: "nano-plus-et-1414-bluetooth-etmax-original-imagywjgsncxm3qy.webp", category: "speakers" },
    { id: 14, name: "Zebronics Zeb-Fit7220CH", price: 2199.00, image: "Zebronics Zeb-Fit7220CH.webp", category: "smartwatches" },
  { id: 15, name: "TAGG Verve NEO", price: 1599.00, image: "TAGG Verve NEO.webp", category: "smartwatches" },
  { id: 16, name: "Fire-Boltt Invincible Plus", price: 3999.00, image: "Fire-Boltt Invincible Plus.webp", category: "smartwatches" },
  { id: 17, name: "boAt Xtend Smartwatch", price: 2299.00, image: "boAt Xtend Smartwatch.webp", category: "smartwatches" },
  { id: 15, name: "Lenovo Legion Pro 7i", price: 2299.00, image: "legion-pro7i.webp", category: "laptops" },
  { id: 16, name: "Acer Swift X 14", price: 1099.00, image: "acer-swiftx14.webp", category: "laptops" },
  { id: 17, name: "MSI Titan GT77 HX", price: 3499.00, image: "msi-titan77.webp", category: "laptops" },
  { id: 18, name: "Microsoft Surface Pro 9", price: 1399.00, image: "surface-pro9.webp", category: "laptops" },
  { id: 19, name: "Samsung Galaxy Book 4 Ultra", price: 1799.00, image: "galaxy-book4ultra.webp", category: "laptops" },
  { id: 20, name: "Asus TUF Gaming A17", price: 1399.00, image: "tuf-a17.webp", category: "laptops" },
    { id: 20, name: "Apple iPhone 15 Plus", price: 1099.00, image: "OIP (5).webp", category: "mobiles" },
  { id: 21, name: "OnePlus Nord 4", price: 499.00, image: "OIP (6).webp", category: "mobiles" },
  { id: 11, name: "Restored Fast Gaming HP 600 G1 Desktop SFF", price: 59.99, image: "lenovo-ideacentre-aio-5i-27-gen7-review-10.avif", category: "computers" },
  { id: 12, name: "MEINPC AMD Ryzen 7 5700G 8x 4.6 GHz 32 GB RAM", price: 59.99, image: "best_tower_desktop_computers_1750152910753_1750152918307.avif", category: "computers" },
  { id: 13, name: "AWD-IT Gaming PC Bundle - AMD Ryzen 5 Pro 3350G Quad", price: 59.99, image: "best_tower_desktop_computers_1750152910753_1750152918307.avif", category: "computers" },
  { id: 14, name: "BEASTCOM Q3 Gaming PC Set Complete AMD", price: 59.99, image: "computers_under_Rs_10000_1751609751440_1751609762564.avif", category: "computers" },
  { id: 21, name: "Razer Blade Stealth 13", price: 1699.00, image: "razer-stealth13.webp", category: "laptops" },
  { id: 22, name: "LG Gram 17", price: 1599.00, image: "lg-gram17.webp", category: "laptops" },
  { id: 15, name: "Amazon.com: BEASTCOM® Q3 Essential Gaming", price: 59.99, image: "hq720.jpg", category: "computers" },
  { id: 16, name: "HZG Gaming Computer PC Desktop", price: 59.99, image: "lenovo-ideacentre-aio-5i-27-gen7-review-10.avif", category: "computers" },
    { id: 18, name: "Samsung Galaxy Watch 4", price: 14999.00, image: "Samsung Galaxy Watch 4.webp", category: "smartwatches" },
  { id: 19, name: "Apple Watch Series 9", price: 41999.00, image: "Apple Watch Series 9.webp", category: "smartwatches" },
  { id: 20, name: "Garmin Venu Sq 2", price: 24999.00, image: "Garmin Venu Sq 2.webp", category: "smartwatches" },
  { id: 21, name: "Fossil Gen 6", price: 17999.00, image: "Fossil Gen 6.webp", category: "smartwatches" },
   { id: 22, name: "Xiaomi Redmi Note 14 Pro", price: 399.00, image: "OIP (7).webp", category: "mobiles" },
  { id: 23, name: "Realme Narzo 70 Pro", price: 349.00, image: "OIP (8).webp", category: "mobiles" },
  { id: 17, name: "STGAubron Gaming PC Intel Core i7, RX 590 8G, 32G RAM", price: 59.99, image: "new-02-1-600x600-1.jpg.webp", category: "computers" },
  { id: 18, name: "KOORUI 27 Inch Curved Monitor (1500R), Full HD", price: 59.99, image: "giant_240625.jpg", category: "computers" },
  { id: 19, name: "Gawfolk 27 Inch 100Hz Curved Gaming Monitor", price: 59.99, image: "new-02-1-600x600-1.jpg.webp", category: "computers" },
    { id: 22, name: "ZEBRONICS ZEB-WARRIOR 10W", price: 59.99, image: "zeb-warrior-zebronics-original-imah43f5jnzzhzsu.webp", category: "speakers" },
  { id: 23, name: "Mivi Play 12HRS Playback", price: 59.99, image: "-original-imahc45csq5dc8tm.webp", category: "speakers" },
  { id: 20, name: "GeForce 4GB GDDR5 Desktop Gaming Computer Complete", price: 59.99, image: "61j3otNa6sL._UF1000,1000_QL80_.jpg", category: "computers" },
  { id: 21, name: "T1030 Full Desktop PC Gaming Computer", price: 59.99, image: "41RbCADklWL._UF1000,1000_QL80_.jpg", category: "computers" },
    { id: 23, name: "Huawei MateBook X Pro", price: 1799.00, image: "matebook-xpro.webp", category: "laptops" },
  { id: 24, name: "Xiaomi Mi Notebook Pro X", price: 1399.00, image: "mi-notebook-prox.webp", category: "laptops" },
 { "id": 19, "name": "Apple 50-Inch 4K Pro Display", "price": 1099.99, "category": "Television", "image": "Apple 50-Inch 4K Pro Display.webp" },
 { "id": 20, "name": "Apple Smart TV 65-Inch UHD", "price": 1499.99, "category": "Television", "image": "Apple Smart TV 65-Inch UHD.webp" },
 { "id": 21, "name": "Apple OLED TV 55-Inch 4K", "price": 1699.99, "category": "Television", "image": "Apple OLED TV 55-Inch 4K.webp" },
 { "id": 22, "name": "Apple 75-Inch Mini-LED Smart TV", "price": 2299.99, "category": "Television", "image": "Apple 75-Inch Mini-LED Smart TV.webp" },
  { id: 22, name: "PC Gaming Computer Desktop Completo GeForce 4GB", price: 59.99, image: "1-fron889-frontech-gaming-pc-original-imah5ttvmpfmz6sd.webp", category: "computers" },
  { id: 23, name: "ULTRA FAST i3 i5 i7 Desktop Gaming Computer GTX 1660", price: 59.99, image: "dd49eb5bf3a6c340588c19036b8eb1dc.jpg", category: "computers" },
    { id: 24, name: "Oppo Reno12 Pro", price: 699.00, image: "OIP (9).webp", category: "mobiles" },
    { id: 20, name: "AirPods Max - Blue - Apple.", price: 59.99, image: "AirPods Max - Blue - Apple.webp", category: "Headphones" },
{ id: 21, name: "Apple AirPods Max Wireless Over-Ear Headphones.", price: 59.99, image: "Apple AirPods Max Wireless Over-Ear Headphones.webp", category: "Headphones" },
{ id: 22, name: "Apple AirPods Max Wireless Over-Ear Closed-Back Headphones", price: 59.99, image: "Apple AirPods Max Wireless Over-Ear Closed-Back Headphones.webp", category: "Headphones" },
{ id: 23, name: "Apple introduces AirPods Max, the magic of AirPods.", price: 59.99, image: "Apple introduces AirPods Max, the magic of AirPods.webp", category: "Headphones" },
{ id: 24, name: "apple headphone 2.0 Over The Ear Wireless Bluetooth Headphones.", price: 59.99, image: "apple headphone 2.0 Over The Ear Wireless Bluetooth Headphones.webp", category: "Headphones" },
  { id: 24, name: "F FERONS Wireless rechargeable portable Premium bass Mu...", price: 0.00, image: "brand-new-3d-sound-with-rock-beat-blast-stereo-deep-bass-original-imafvxczvzhcxcpp.webp", category: "speakers" },
  { id: 24, name: "Gaming PC Bundle i5 Computer Desktop 8GB RAM 1TB HDD", price: 59.99, image: "giant_240625.jpg", category: "computers" },
    { id: 21, name: "Panasonic Lumix G100", price: 749.00, image: "lumix-g100.webp", category: "cameras" },
  { id: 22, name: "Sony FX3 Cinema Line", price: 3899.00, image: "sony-fx3.webp", category: "cameras" },
  { id: 21, name: "TCL NXTPAPER 11", price: 749.00, image: "tcl-nxtpaper-11.webp", category: "tablets" },
{ id: 22, name: "Asus ZenPad 10", price: 3899.00, image: "zenpad-10.webp", category: "tablets" },
{ id: 23, name: "Teclast T50 Pro", price: 2999.00, image: "teclast-t50-pro.webp", category: "tablets" },
{ id: 24, name: "Blackview Tab 15", price: 749.00, image: "blackview-tab-15.webp", category: "tablets" },
  { id: 23, name: "Nikon D850", price: 2999.00, image: "nikon-d850.webp", category: "cameras" },
  { id: 24, name: "Canon PowerShot G7 X Mark III", price: 749.00, image: "canon-g7xiii.webp", category: "cameras" },
    { id: 22, name: "NoiseFit Evolve 3", price: 3499.00, image: "NoiseFit Evolve 3.webp", category: "smartwatches" },
  { id: 23, name: "Amazfit GTS 4 Mini", price: 6999.00, image: "Amazfit GTS 4 Mini.webp", category: "smartwatches" },
  { id: 24, name: "Crossbeats Orbit X", price: 5999.00, image: "Crossbeats Orbit X.webp", category: "smartwatches" },
 { "id": 23, "name": "Apple TV Display XDR 6K", "price": 4999.99, "category": "Television", "image": "Apple TV Display XDR 6K.webp" },
 { "id": 24, "name": "Apple 40-Inch Full HD TV with Siri Remote", "price": 899.99, "category": "Television", "image": "Apple 40-Inch Full HD TV with Siri Remote.webp" },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts(filter = "", category = "all") {
  const container = document.getElementById("products");
  container.innerHTML = "";

  const filtered = products.filter(p => {
    const matchName = p.name.toLowerCase().includes(filter.toLowerCase());
    const matchCategory = category === "all" || p.category === category;
    return matchName && matchCategory;
  });

  filtered.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(productId) {
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity++;
  } else {
    const product = products.find(p => p.id === productId);
    cart.push({ ...product, quantity: 1 });
  }
  saveCart();
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCart();
}

function increaseQuantity(index) {
  cart[index].quantity++;
  saveCart();
  updateCart();
}

function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    removeFromCart(index);
    return;
  }
  saveCart();
  updateCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function clearCart() {
  cart = [];
  saveCart();
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart");
  const cartCount = document.getElementById("cart-count");
  const totalDisplay = document.getElementById("total");

  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = "<li>Your cart is empty.</li>";
    totalDisplay.textContent = `Total: ₹0.00`;
    cartCount.textContent = `Cart: 0`;
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₹${item.price.toFixed(2)} × ${item.quantity}
      <button class="increase-btn" onclick="increaseQuantity(${index})">+</button>
      <button class="decrease-btn" onclick="decreaseQuantity(${index})">-</button>
      <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
    `;
    cartList.appendChild(li);
  });

  cartCount.textContent = `Cart: ${cart.length}`;
  totalDisplay.textContent = `Total: ₹${total.toFixed(2)}`;
}

// Event listeners
document.getElementById("clear-cart").addEventListener("click", clearCart);
document.getElementById("search").addEventListener("input", e => {
  const category = document.getElementById("category-filter").value;
  renderProducts(e.target.value, category);
});
document.getElementById("category-filter").addEventListener("change", e => {
  const search = document.getElementById("search").value;
  renderProducts(search, e.target.value);
});

// Initialize
renderProducts();
updateCart();
