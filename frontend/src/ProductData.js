const productData = [
    {
        id:1,
        category:'Headsets',
        items:[
            { id: 1, name: 'Apple AirPods Pro', price: '19,900', img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985' },
            { id: 2, name: 'Samsung Galaxy Buds Pro', price: '6,999', img: 'https://dailydeals365.in/wp-content/uploads/2023/05/516h7HKsyL._SL1002_.jpg' },
            { id: 3, name: 'Google Pixel Buds', price: '19,990', img: 'https://m.media-amazon.com/images/I/61FwbxlXSfL.jpg' },
            { id: 4, name: 'Redmi Earbuds S', price: '999', img: 'https://www.91-img.com/pictures/mobile-accessories/xiaomi/xiaomi-redmi-earbuds-s-138428-large-4.jpg?tr=h-340,c-at_max,q-80,t-true' },
            { id: 5, name: 'OnePlus Buds Pro', price: '5,999', img: 'https://d2xamzlzrdbdbn.cloudfront.net/products/a3589c25-cae0-42c3-8ebe-dc74f9ac2d1123131344_416x416.jpg' },
            { id: 6, name: 'Apple EarPods with Lightning Connector', price: '2,000', img: 'https://hiforit.com/wp-content/uploads/2020/02/14.png' },
            { id: 7, name: 'JBL Tune 210', price: '679', img: 'https://m.media-amazon.com/images/I/51+qF7cfQwL.jpg' },
            { id: 8, name: 'Realme Buds Wireless Pro', price: '799', img: 'https://m.media-amazon.com/images/I/71iZtxkJ2jL._AC_UF1000,1000_QL80_.jpg' },
            { id: 9, name: 'Realme Buds Air 2', price: '2,699', img: 'https://dailydeals365.in/wp-content/uploads/2023/05/61FeZoQ7DmL._SL1500_.jpg' },
            { id: 10, name: 'Redmi Earbuds 3 Pro', price: '5,999', img: 'https://m.media-amazon.com/images/I/31Zkaa4jD6L._AC_UF1000,1000_QL80_.jpg' }
        ]
    },
    {
        id:2,
        category:'Cases & Covers',
        items:[
            {id:1, name:'Spigen Tough Armor Case', price:'2,299', img:'https://m.media-amazon.com/images/I/61XkeWCR1vL._AC_UF1000,1000_QL80_.jpg'},
            {id:2, name:'OtterBox Defender Series Case', price:'13,588', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC7GOFnTF3RHd-3ZdzU2bEsrSTiiYkyOPKFQ&s'},
            {id:3, name:'UAG Monarch Series Case', price:'1,500', img:'https://www.maplestore.in/cdn/shop/products/RAOTPA1217_Mallard_Mallard_1_533x.webp?v=1701091917'},
            {id:4, name:'Ringke Fusion-X Case', price:'1,699', img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSnIKG0DBzL7nbzM3d0FPa4dP0dVIZ6bPqOX9RzgMJHZuiu_Uks0wlzOHh7dN9F1wQveISQaAqNTwlyfgH5fVtk8X6cOquTsP-W6o4zeuxWUVrPB5NN7njeGg&usqp=CAE'},
            {id:5, name:'Caseology Parallax Case', price:'1,325', img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRSvdtSINe8j3zKu0PUzWkBC24NnZmRXLPx1wB-L1qOmQmX0_2L0EkzKRRmdok4hhK1bW9psk7dpPOiw-hlzyqdl4IRHhcP_sQ1FZSZ4kTKjR4TjYzrkMPtXw&usqp=CAE'},
            {id:6, name:'Supcase Unicorn Beetle Pro Case', price:'1,619', img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ-Gln-qP1SYC9NDpDi1unKuSE4tVwjco4-_3zTsL2VF-wv7vkmnkPcBYkcZOT_uyon9JAzahLd32RvQst7YLy7XhEFxOKejHbI6B4Fin2hbxHAmfS9dx-M5Q&usqp=CAE'},
            {id:7, name:'ESR Metal Kickstand Case', price:'4,388', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXoPros7m2Pq2W2w53V5fN3T1JunvpsgI9ow&s'},
            {id:8, name:'Mous Limitless 3.0 Case', price:'3,300', img:'https://m.media-amazon.com/images/I/51AzEiCmgoS.jpg'},
            {id:9, name:'Tech21 Evo Check Case', price:'3,403', img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRrg5NGhcH7XG-0AunyilkMyKJcXSVwM51tFrhy4MknwOkE5yBbzU4zfBYN5kWIjrnZ2nwQFdwqyM_ipZJvhr9LKVs5JLFtOA8fuxAJrYt7mKMkXxVLeOBhQg&usqp=CAE'},
            {id:10, name:'Poetic Revolution Series Case', price:'8,000', img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTHP32gODiXbxvxmKJHfcBEwdwIBQSVVRv5tXCTQ7M_w9YHBFTaOaOGByORKgCHfmvXaEOTeFitgaDdstaw1QlxSmAJCJA-wTp5fYyyNug&usqp=CAE'},
        ]
    },
    {
        id:3,
        category:'PowerBanks',
        items:[
            { id: 1, name: 'Mi Power Bank 3i 20000mAh', price: 1499, img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRaM7UNqnGLKbpQy-9vM_6dyLZEWnEwCHxmDSzSFQQIEhtWd5fiKEtihj2X3km4wPIdJbfOW3sHr0HyDbEWUuapqgz4cmPNSyLOsPDAqBu9GzNuRdw3iAS3&usqp=CAE' },
            { id: 2, name: 'Realme 10000mAh Power Bank', price: 999, img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ_ShAz9fLSJQChv0gjhmz0gIENemW5fuOusF_vALofW4cEuaYyLIDyrGgXtkmaE06TEWA0-lAjONha2QZw5vhWAVD6N-kv5uT1u1f5kTRwJeb4QT_X3oZQ&usqp=CAE' },
            { id: 3, name: 'Ambrane 20000mAh Power Bank', price: 1299, img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRcQ-weVyMZ9Z1qOdniNOvORv0cj1YQ6gGnp40-B1tpILf7bp6NHF53YqPGceq5mBJ8Rku12_yVjWG1-gAY-okaIgTFvOKYhH-e0nFem_Hq1jlIz_0rajLTGA&usqp=CAE' },
            { id: 4, name: 'Anker PowerCore 20100mAh', price: 3499, img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRuoFtLTMxL7JJ8J8HOCFNMbkhRmLoLH9Rda5IgJ_6yNl61YV-tyWTFxr4tGNfayjS0YsgTYtnADYlVwuh16OnpAHgLsCxSKkY8zOyw0D3ygoeaqF6f74o0Kg&usqp=CAE' },
            { id: 5, name: 'Samsung 10000mAh Wireless Power Bank', price: 2499, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRMSdzEE_s_3g3ufU3ROGwEmfYtXISrFD8d5VrfQTyAPtiZJtMyLhrpturZYqyTgMlY_ZW3c6oOAYFLq2qwNyKg6mFZAygDva9khvmNid6-Se600rvqeLnEUg&usqp=CAE' },
            { id: 6, name: 'Syska Power Pro 200 20000mAh', price: 1399, img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRqUWpxCWURl2BNLBKCa9ew9fKOXin8eV9L-o_Sa-dNlXUCdVsvJIuuq2AmgnZz5FJERFFbeKZepKMGjiqU3RiNoSOUhrfz7g6oxNDC10fl_B6GTle7L0nItA&usqp=CAE' },
            { id: 7, name: 'OnePlus 10000mAh Power Bank', price: 1299, img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTPsS_LIG7BeDw-wDCYM5XUaUjGTOvIJfTN2Fp9C3-WyFE2LHFz-zdGMafaNA5yxXsNZR--te5HtaXdvfZ05KZuTdpqQuMQYGHrvWfiCWnQYoIJDzh71NVrSoTX&usqp=CAE' },
            { id: 8, name: 'Portronics Power Brick 20 20000mAh', price: 1399, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQjwZI7d0mO4m7wY8RSc4Av1vBC1th8Zi9-ZlVYKX3lTvrknjqCdPXfBF8Lbo8C2RxzKvP2Ma5tyE2pB0MowjUiFZnZMk7iZhwZgKMAlMbPwGFRCGMHwK50eA&usqp=CAE' },
            { id: 9, name: 'URBN 20000mAh Power Bank', price: 1199, img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTEzyT1_a6XG77BQmmJc0C-NMVvDQ2YJz9l0JPAifwCPeivVIjCA-Ttmo3BlVCkjnJQ9U_aT_oxx4QdymjfUM4XPJY2E69LMCQOTKtiwEhcGwbidcVtcke0&usqp=CAE' },
            { id: 10, name: 'Sony CP-V10A/BC 10000mAh Power Bank', price: 2499, img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTnOl_F6161HpY-dTXkb309L8G6SHQiB-0xWOfWOxqlGIjVYFGTT2LDc5ps9QEqGp6RJ-TXd7UzaPQHjkfsVPtdtwffk3KmNxfkbVvnfH-I7Ya0GxPFIZGI&usqp=CAE' }
        ]
    },
    {
        id: 4,
        category: 'Cables & Chargers',
        items: [
            { id: 1, name: 'Anker PowerLine+ III Lightning Cable', price: 1299, img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSE5vbHbd_HvIPc9OImIOMLygk3_uptiDfStL9Twv_axER2pD0b-NYhD8Y5l0VYjdg-jEivh6nhGB7RJlFIm809E2A55ty8NXmpHdp8tzHk&usqp=CAE' },
            { id: 2, name: 'Belkin BoostCharge USB-C Cable', price: 999, img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQBZPh-o-ynQE64xose2ghVcgpcxlh1fdJYabO3Rmd9DD721poG7ZIQGNQMslHu7SEerWrjzWORKLl95qBT8tBmN0_s5r-ozcjHR0d0UPI&usqp=CAE' },
            { id: 3, name: 'Apple USB-C to Lightning Cable', price: 1599, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR7QMJkgDrAK2kbpXgmTrBQTbHW2REjVqh2-J9XaTXecjLabHJoSzKQh-1du6bVCfcT6qqtspM0-jaHKOO2ESr8DshhbNgI_2WW8YeplRZrqkPK5mq-TIyA&usqp=CAE' },
            { id: 4, name: 'Samsung Super Fast Charging Wall Charger', price: 1999, img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTSLSQV5SH2C4ju9dpnZsYYHvxQ6NZOmvp_d9TxnOTbAUrEyyEg0IH2H2zIpvTniFeImYmGgCmvc5H3d2dOI1vWr7vDxRz6GOUdNxVGGLekbzkYobTULfNqKw&usqp=CAE' },
            { id: 5, name: 'AmazonBasics USB Type-C to USB-A 2.0 Male Cable', price: 499, img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTaW6F59JrghkU6CDAlEgYRkmugaLtnB3J1_tzgulMVhlN1R_-wBzmVKjFsUNn-yBjF1cIK25apv3lDHpBXnpAB-fX9iH90-ixZqom50bLpN1poMNsGEdzp&usqp=CAE' },
            { id: 6, name: 'AUKEY USB C Charger', price: 1299, img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTgFzmN4avZMN8CA0LlKFtCbyqYjVg-J8XKxb7WBfH8BAr1kzg5a0HqVQ28ybtYdTzoBTJzE7YBEYRXth5jfWvFemXJ2Gth&usqp=CAE' },
            { id: 7, name: 'RAVPower 61W PD 3.0 Wall Charger', price: 2499, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcShrYMzxeEKzNWt3R7oeRnhz2s-PhCt9Wj5wp259O2CEwsjaZMFZvJu9I6kO7iFoyt2R-WgZzDxKv6D7wQ3TuWd1qZ42l4C&usqp=CAE' },
            { id: 8, name: 'Ugreen USB-C to USB-C Cable', price: 799, img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRG2kNjo8BuZoXsSBVE52idvq3QUIeRluUAEq0mVLhcs6arMcSoHrsYrirEJQs_vSzmMmw0j2k0qk07p0dMeJUPSfPU-hFtQjQNpu-yH9cE7yjqBo__hLhsAw&usqp=CAE' },
            { id: 9, name: 'Baseus 65W GaN Charger', price: 2799, img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRlNz3sBbvcO-ab39L27aHv_Iio3wXk7ikuFgGDJzY-iA_ExoC5-kYOcL_oKwPa_qZbJyZd1cpkVlpXMDDDC1WjdkSuwkyJ7acTqPUt6tI0l8xSPlKNGkj1&usqp=CAE' },
            { id: 10, name: 'Anker 60W 6-Port USB Wall Charger', price: 2999, img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTWuLmC6s74zdLxsciK0Up1SZgZrltjWwbkUunviFQMA-ADPr8IhBCr70yFW3_HAKC9gJ4SjLHjHSi7m6zwTftQR7szpeOjz-OOVyWWbr1_Vts7Ngn3Ru-IvA&usqp=CAE' }
        ]
    },
    {
        id: 5,
        category: 'Screen Protector',
        items: [
            { id: 1, name: 'amFilm Tempered Glass Screen Protector', price: 599, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRzGPfKhiY4J8jqvpzRF9Wo6V2OJf46UMxNk88urP-JDBw1LN_f6yJ5lRrZMCANpGnBGIXKzlNAR2-3qzlFj5UTi7W5xx7ptDF8YT-dICj33gQBx8RhklZbkw&usqp=CAE' },
            { id: 2, name: 'JETech Screen Protector', price: 399, img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSN4w0JP2roaDAb0FlY-nIXiRURMFfJY5GM37mOhiJhh_FGBCJ5jxzjPcJHgLJEGhv6AVbvKIXd1z24EnIqPnvrn3i6IB_DDaduH76h0LJ5q7Qsn9zVkIuh&usqp=CAE' },
            { id: 3, name: 'Spigen Tempered Glass Screen Protector', price: 999, img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSWRpQ9BQGEo-oLi2_FZTn3d3qdBKRxePXgT1s_cptwXbCNVMgBBpphHZZS6of5wutO7rqYfoDuO2B8kjLZN9EiTmnGVPrjTtAR_25l3vZV2HemBG71nWK1&usqp=CAE' },
            { id: 4, name: 'ZAGG InvisibleShield Glass Elite', price: 1499, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwT__H-ktcasW42UwXMImRlVOBeFc4BSgG2A&s' },
            { id: 5, name: 'ESR Tempered-Glass Screen Protector', price: 499, img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSIM6yCZfmp92vUaCZqKSp0ny9nGZDKtalFLzCAa486Jwz8b8dU4xcQ2Hr5mJOk-dDYZywCsTIOMxTC2qRFBcc6RMyCm5k9QgE4NkNfjW3OmojsnzkJuvph&usqp=CAE' },
            { id: 6, name: 'Tech Armor Ballistic Glass Screen Protector', price: 899, img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR_67GqTRxoVGbcw0jdAfs-a0serv03BnTLz6mG4vctwGQZiF75uV-_iBvSERcBOQnNUfpoU4rfmazvzmV1ol_FZScf98koXYRV7uxIEaDnrtPRLTQ2y3nW&usqp=CAE' },
            { id: 7, name: 'OtterBox Alpha Glass Screen Protector', price: 1299, img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSh9IncHyRWnRxF4x9xnx2YQgzkXKBNs5YrHD8Gcic4Cwi0yZsscEClJF771AjGaxwYyWowuhqwcvGyFcxPYtXM7Wc3C5UCAw&usqp=CAE' },
            { id: 8, name: 'Moshi AirFoil Glass Screen Protector', price: 1199, img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT4mF_-9ILzCFaWQCUxh3jvZ2piiUyVxfTNDB8cAtHrGG_flEd_r8o8surQoID_fNflWBLYvxxh7uuexnXInIBwkXOCbApXirJzYc26bx_Aua74C676Dl6y&usqp=CAE' },
            { id: 9, name: 'BodyGuardz Pure 2 EyeGuard Screen Protector', price: 1399, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTnu2eLXD64dzpqJTTAd4sl-CmAigjk5oyHT-ZPt7xZpsZ88N7Fz5Kx2yhfJU-NyX15PnvgF0E7yRPfOWgP6anC2fz4NFup2w&usqp=CAE' },
            { id: 10, name: 'InvisibleShield Glass+ VisionGuard', price: 1699, img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSMJlk6zNwRuDPx28XsILXWo_v_ie3fBa92U0hPxDwhHINal-bYdoDH-GaaAEirSb2BU4MLZ-d1oQ7av7-KKxw3qwhWjE0RzxLs5srZNNE&usqp=CAE' }
        ]
    },
    {
        id: 6,
        category: 'Mobile Holder',
        items: [
            { id: 1, name: 'iOttie Easy One Touch 4 Dash & Windshield Mount', price: 1499, img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR6vZYBd9nReD9HjI1jHHlEtgfSMyvFSAn-JrLrwaICp7HkFlgOVd8WbyX61QhAqE5Ga3a5gFp7QGLl3Lg_O2M4QxrdgZ9xp7gOWoSKulkrxN1PAsDZHn0W&usqp=CAE' },
            { id: 2, name: 'Belkin Car Vent Mount', price: 999, img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTsNgiE-G7s1BtNjTF_6lN3FHyLXEivOyCIPw06h_BofIQJFn6ysaSMbvAhJBllGxtCxundrG6ilv9bzMkmzEb3PVVZnOk58pjiXIMRmv64sg0XIfkLsuGypxc' },
            { id: 3, name: 'Scosche MagicMount Pro', price: 1299, img: 'https://m.media-amazon.com/images/I/71sUPbtXcRL._AC_UF1000,1000_QL80_.jpg' },
            { id: 4, name: 'Ram Mount X-Grip', price: 1899, img: 'https://m.media-amazon.com/images/I/51U0MWUVchL._AC_UF1000,1000_QL80_.jpg' },
            { id: 5, name: 'Mpow Car Phone Mount', price: 799, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1rLYZ1zO07X7qqIanIP2blPL_fe_M_jhTg&s' },
            { id: 6, name: 'WizGear Universal Air Vent Magnetic Phone Car Mount', price: 599, img: 'https://m.media-amazon.com/images/I/71I-Ymz42XL._AC_UF1000,1000_QL80_.jpg' },
            { id: 7, name: 'Kenu Airframe Pro', price: 1199, img: 'https://m.media-amazon.com/images/I/51GHbMH6ndL.jpg' },
            { id: 8, name: 'TechMatte MagGrip Air Vent Magnetic Universal Car Mount', price: 499, img: 'https://images-eu.ssl-images-amazon.com/images/I/61HYtLChAvL._AC_UL600_SR600,600_.jpg' },
            { id: 9, name: 'Arteck Car Mount', price: 899, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpEXN181NvrOtGqLdpdK1fYFKlO50U5-Hy7A&s' },
            { id: 10, name: 'AUKEY Car Phone Mount', price: 699, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU3Jzce8LbTZrvUSnUAGI7dMIZojxLEqsFaQ&s' }
        ]
    }
];
export default productData;