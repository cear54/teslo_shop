interface SeedProduct {
    descripcion: string;
    imagenes: string[];
    stock: number;
    precio: number;
    sizes: ValidSizes[];
    slug: string;
    tags: string[];
    titulo: string;
    type: ValidTypes;
    genero: 'men' | 'women' | 'kid' | 'unisex'
}

type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
type ValidTypes = 'shirts' | 'pants' | 'hoodies' | 'hats';


interface SeedData {
    productos: SeedProduct[];
}


export const initialData: SeedData = {
    productos: [
        {
            descripcion: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            imagenes: [
                '1740176-00-A_0_2000.jpg',
                '1740176-00-A_1.jpg',
            ],
            stock: 7,
            precio: 75,
            sizes: ['XS'],
            slug: "mens_chill_crew_neck_sweatshirt",
            type: 'shirts',
            tags: ['sweatshirt'],
            titulo: "Men’s Chill Crew Neck Sweatshirt",
            genero: 'men'
        },
        {
            descripcion: "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
            imagenes: [
                '1740507-00-A_0_2000.jpg',
                '1740507-00-A_1.jpg',
            ],
            stock: 5,
            precio: 200,
            sizes: ['XS'],
            slug: "men_quilted_shirt_jacket",
            type: 'shirts',
            tags: ['jacket'],
            titulo: "Men's Quilted Shirt Jacket",
            genero: 'men'
        },

        {
            descripcion: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
            imagenes: [
                '1740250-00-A_0_2000.jpg',
                '1740250-00-A_1.jpg'
            ],
            stock: 10,
            precio: 130,
            sizes: ['XS'],
            slug: "men_raven_lightweight_zip_up_bomber_jacket",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Men's Raven Lightweight Zip Up Bomber Jacket",
            genero: 'men'
        },

        {
            descripcion: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
            imagenes: [
                '1740280-00-A_0_2000.jpg',
                '1740280-00-A_1.jpg',
            ],
            stock: 50,
            precio: 45,
            sizes: ['XS'],
            slug: "men_turbine_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Men's Turbine Long Sleeve Tee",
            genero: 'men'
        },
        {
            descripcion: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
            imagenes: [
                '1741416-00-A_0_2000.jpg',
                '1741416-00-A_1.jpg',
            ],
            stock: 50,
            precio: 40,
            sizes: ['XS'],
            slug: "men_turbine_short_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Men's Turbine Short Sleeve Tee",
            genero: 'men'
        },
        {
            descripcion: "Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
            imagenes: [
                '7654393-00-A_2_2000.jpg',
                '7654393-00-A_3.jpg',
            ],
            stock: 0,
            precio: 35,
            sizes: ['XS'],
            slug: "men_cybertruck_owl_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Men's Cybertruck Owl Tee",
            genero: 'men'
        },
        {
            descripcion: "Inspired by our fully integrated home solar and storage system, the Tesla Solar Roof Tee advocates for clean, sustainable energy wherever you go. Designed for fit, comfort and style, the tee features an aerial view of our seamless Solar Roof design on the front with our signature T logo above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
            imagenes: [
                '1703767-00-A_0_2000.jpg',
                '1703767-00-A_1.jpg',
            ],
            stock: 15,
            precio: 35,
            sizes: ['XS'],
            slug: "men_solar_roof_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Men's Solar Roof Tee",
            genero: 'men'
        },
        {
            descripcion: "Inspired by the world’s most unlimited resource, the Let the Sun Shine Tee highlights our fully integrated home solar and storage system. Designed for fit, comfort and style, the tee features a sunset graphic along with our Tesla wordmark on the front and our signature T logo printed above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
            imagenes: [
                '1700280-00-A_0_2000.jpg',
                '1700280-00-A_1.jpg',
            ],
            stock: 17,
            precio: 35,
            sizes: ['XS'],
            slug: "men_let_the_sun_shine_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Men's Let the Sun Shine Tee",
            genero: 'men'
        },
        {
            descripcion: "Designed for fit, comfort and style, the Men's 3D Large Wordmark Tee is made from 100% Peruvian cotton with a 3D silicone-printed Tesla wordmark printed across the chest.",
            imagenes: [
                '8764734-00-A_0_2000.jpg',
                '8764734-00-A_1.jpg',
            ],
            stock: 12,
            precio: 35,
            sizes: ['XS'],
            slug: "men_3d_large_wordmark_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Men's 3D Large Wordmark Tee",
            genero: 'men'
        },
        {
            descripcion: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
            imagenes: [
                '7652426-00-A_0_2000.jpg',
                '7652426-00-A_1.jpg',
            ],
            stock: 5,
            precio: 35,
            sizes: ['XS'],
            slug: "men_3d_t_logo_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Men's 3D T Logo Tee",
            genero: 'men'
        },
        {
            descripcion: "Designed for comfort and style in any size, the Tesla Small Wordmark Tee is made from 100% Peruvian cotton and features a 3D silicone-printed wordmark on the left chest.",
            imagenes: [
                '8528839-00-A_0_2000.jpg',
                '8528839-00-A_2.jpg',
            ],
            stock: 2,
            precio: 35,
            sizes: ['XS'],
            slug: "men_3d_small_wordmark_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Men’s 3D Small Wordmark Tee",
            genero: 'men'
        },
        {
            descripcion: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
            imagenes: [
                '1549268-00-A_0_2000.jpg',
                '1549268-00-A_2.jpg',
            ],
            stock: 82,
            precio: 35,
            sizes: ['XS'],
            slug: "men_plaid_mode_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Men's Plaid Mode Tee",
            genero: 'men'
        },
        {
            descripcion: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any environment.",
            imagenes: [
                '9877034-00-A_0_2000.jpg',
                '9877034-00-A_2.jpg',
            ],
            stock: 24,
            precio: 35,
            sizes: ['XS'],
            slug: "men_powerwall_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Men's Powerwall Tee",
            genero: 'men'
        },
        {
            descripcion: "Inspired by Tesla Battery Day and featuring the unveiled tabless battery cell, Battery Day Tee celebrates the future of energy storage and cell manufacturing. Designed for fit, comfort and style, Battery Day Tee is made from 100% cotton with a stylized cell printed across the chest. Made in Peru.",
            imagenes: [
                '1633802-00-A_0_2000.jpg',
                '1633802-00-A_2.jpg',
            ],
            stock: 5,
            precio: 30,
            sizes: ['XS'],
            slug: "men_battery_day_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Men's Battery Day Tee",
            genero: 'men'
        },
        {
            descripcion: "Designed for exceptional comfort and inspired by the Cybertruck unveil event, the Cybertruck Bulletproof Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
            imagenes: [
                '7654399-00-A_0_2000.jpg',
                '7654399-00-A_1.jpg',
            ],
            stock: 150,
            precio: 30,
            sizes: ['XS'],
            slug: "men_cybertruck_bulletproof_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Men’s Cybertruck Bulletproof Tee",
            genero: 'men'
        },
        {
            descripcion: "Inspired by the Model Y order confirmation graphic, the limited edition Haha Yes Tee is designed for comfort and style. Made from 100% Peruvian cotton and featuring the Tesla wordmark across the chest, the exclusive tee will commemorate your order for years to come.",
            imagenes: [
                '7652410-00-A_0.jpg',
                '7652410-00-A_1_2000.jpg',
            ],
            stock: 10,
            precio: 35,
            sizes: ['XS'],
            slug: "men_haha_yes_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Men's Haha Yes Tee",
            genero: 'men'
        },
        {
            descripcion: "Designed for fit, comfort and style, the limited edition S3XY Tee is made from 100% cotton with a 3D silicone-printed “S3XY” logo across the chest. Made in Peru. Available in black.",
            imagenes: [
                '8764600-00-A_0_2000.jpg',
                '8764600-00-A_2.jpg',
            ],
            stock: 34,
            precio: 35,
            sizes: ['XS'],
            slug: "men_s3xy_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Men's S3XY Tee",
            genero: 'men'
        },
        {
            descripcion: "Designed for fit, comfort and style, the Men's 3D Wordmark Long Sleeve Tee is made from 100% cotton and features an understated wordmark logo on the left chest.",
            imagenes: [
                '8764813-00-A_0_2000.jpg',
                '8764813-00-A_1.jpg',
            ],
            stock: 15,
            precio: 40,
            sizes: ['XS'],
            slug: "men_3d_wordmark_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Men's 3D Wordmark Long Sleeve Tee",
            genero: 'men'
        },
        {
            descripcion: "Designed for fit, comfort and style, the Men's 3D T Logo Long Sleeve Tee is made from 100% cotton and features an understated T logo on the left chest.",
            imagenes: [
                '8529198-00-A_0_2000.jpg',
                '8529198-00-A_1.jpg',
            ],
            stock: 12,
            precio: 40,
            sizes: ['XS'],
            slug: "men_3d_t_logo_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Men's 3D T Logo Long Sleeve Tee",
            genero: 'men'
        },
        {
            descripcion: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
            imagenes: [
                '1740245-00-A_0_2000.jpg',
                '1740245-00-A_1.jpg',
            ],
            stock: 10,
            precio: 115,
            sizes: ['XS'],
            slug: "men_raven_lightweight_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            titulo: "Men's Raven Lightweight Hoodie",
            genero: 'men'
        },
        {
            descripcion: "Introducing the Tesla Chill Collection. The Chill Pullover Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The unisex hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            imagenes: [
                '1740051-00-A_0_2000.jpg',
                '1740051-00-A_1.jpg',
            ],
            stock: 10,
            precio: 130,
            sizes: ['XS'],
            slug: "chill_pullover_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            titulo: "Chill Pullover Hoodie",
            genero: 'unisex'
        },
        {
            descripcion: "Introducing the Tesla Chill Collection. The Men's Chill Full Zip Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            imagenes: [
                '1741111-00-A_0_2000.jpg',
                '1741111-00-A_1.jpg',
            ],
            stock: 100,
            precio: 85,
            sizes: ['XS'],
            slug: "men_chill_full_zip_hoodie",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Men's Chill Full Zip Hoodie",
            genero: 'men'
        },
        {
            descripcion: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
            imagenes: [
                '1740140-00-A_0_2000.jpg',
                '1740140-00-A_1.jpg',
            ],
            stock: 7,
            precio: 85,
            sizes: ['XS'],
            slug: "men_chill_quarter_zip_pullover_-_gray",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Men's Chill Quarter Zip Pullover - Gray",
            genero: 'men'
        },
        {
            descripcion: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
            imagenes: [
                '1740145-00-A_2_2000.jpg',
                '1740145-00-A_1.jpg',
            ],
            stock: 15,
            precio: 85,
            sizes: ['XS'],
            slug: "men_chill_quarter_zip_pullover_-_white",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Men's Chill Quarter Zip Pullover - White",
            genero: 'men'
        },
        {
            descripcion: "The Unisex 3D Large Wordmark Pullover Hoodie features soft fleece and an adjustable, jersey-lined hood for comfort and coverage. Designed in a unisex style, the pullover hoodie includes a tone-on-tone 3D silicone-printed wordmark across the chest.",
            imagenes: [
                '8529107-00-A_0_2000.jpg',
                '8529107-00-A_1.jpg',
            ],
            stock: 15,
            precio: 70,
            sizes: ['XS'],
            slug: "3d_large_wordmark_pullover_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            titulo: "3D Large Wordmark Pullover Hoodie",
            genero: 'unisex'
        },
        {
            descripcion: "As with the iconic Tesla logo, the Cybertruck Graffiti Hoodie is a classic in the making. Unisex style featuring soft fleece and an adjustable, jersey-lined hood for comfortable coverage.",
            imagenes: [
                '7654420-00-A_0_2000.jpg',
                '7654420-00-A_1_2000.jpg',
            ],
            stock: 13,
            precio: 60,
            sizes: ['XS'],
            slug: "cybertruck_graffiti_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            titulo: "Cybertruck Graffiti Hoodie",
            genero: 'unisex'
        },
        {
            descripcion: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
            imagenes: [
                '1657932-00-A_0_2000.jpg',
                '1657932-00-A_1.jpg',
            ],
            stock: 11,
            precio: 30,
            sizes: ['XS'],
            slug: "relaxed_t_logo_hat",
            type: 'hats',
            tags: ['hats'],
            titulo: "Relaxed T Logo Hat",
            genero: 'unisex'
        },
        {
            descripcion: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
            imagenes: [
                '1740417-00-A_0_2000.jpg',
                '1740417-00-A_1.jpg',
            ],
            stock: 13,
            precio: 35,
            sizes: ['XS'],
            slug: "thermal_cuffed_beanie",
            type: 'hats',
            tags: ['hats'],
            titulo: "Thermal Cuffed Beanie",
            genero: 'unisex'
        },
        {
            descripcion: "The Women's Cropped Puffer Jacket features a uniquely cropped silhouette for the perfect, modern style while on the go during the cozy season ahead. The puffer features subtle silicone injected Tesla logos below the back collar and on the right sleeve, custom matte metal zipper pulls and a soft, fleece lined collar. Made from 87% nylon and 13% polyurethane.",
            imagenes: [
                '1740535-00-A_0_2000.jpg',
                '1740535-00-A_1.jpg',
            ],
            stock: 85,
            precio: 225,
            sizes: ['XS'],
            slug: "women_cropped_puffer_jacket",
            type: 'hoodies',
            tags: ['hoodie'],
            titulo: "Women's Cropped Puffer Jacket",
            genero: 'women'
        },
        {
            descripcion: "Introducing the Tesla Chill Collection. The Women's Chill Half Zip Cropped Hoodie has a premium, soft fleece exterior and cropped silhouette for comfort in everyday lifestyle. The hoodie features an elastic hem that gathers at the waist, subtle thermoplastic polyurethane Tesla logos along the hood and on the sleeve, a double layer single seam hood and a custom ring zipper pull. Made from 60% cotton and 40% recycled polyester.",
            imagenes: [
                '1740226-00-A_0_2000.jpg',
                '1740226-00-A_1.jpg',
            ],
            stock: 10,
            precio: 130,
            sizes: ['XS'],
            slug: "women_chill_half_zip_cropped_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            titulo: "Women's Chill Half Zip Cropped Hoodie",
            genero: 'women'
        },
        {
            descripcion: "Introducing the Tesla Raven Collection. The Women's Raven Slouchy Crew Sweatshirt has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The slouchy crew features a subtle thermoplastic polyurethane Tesla wordmark on the left sleeve and a french terry interior for a cozy look and feel in every season. Pair it with your Raven Joggers or favorite on the go fit. Made from 70% bamboo and 30% cotton.",
            imagenes: [
                '1740260-00-A_0_2000.jpg',
                '1740260-00-A_1.jpg',
            ],
            stock: 9,
            precio: 110,
            sizes: ['XS'],
            slug: "women_raven_slouchy_crew_sweatshirt",
            type: 'hoodies',
            tags: ['hoodie'],
            titulo: "Women's Raven Slouchy Crew Sweatshirt",
            genero: 'women'
        },
        {
            descripcion: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Long Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50%",
            imagenes: [
                '1740290-00-A_0_2000.jpg',
                '1740290-00-A_1.jpg',
            ],
            stock: 10,
            precio: 45,
            sizes: ['XS'],
            slug: "women_turbine_cropped_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Women's Turbine Cropped Long Sleeve Tee",
            genero: 'women'
        },
        {
            descripcion: "ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
            imagenes: [
                '1741441-00-A_0_2000.jpg',
                '1741441-00-A_1.jpg',
            ],
            stock: 0,
            precio: 40,
            sizes: ['XS'],
            slug: "women_turbine_cropped_short_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Women's Turbine Cropped Short Sleeve Tee",
            genero: 'women'
        },
        {
            descripcion: "Designed for style and comfort, the ultrasoft Women's T Logo Short Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
            imagenes: [
                '8765090-00-A_0_2000.jpg',
                '8765090-00-A_1.jpg',
            ],
            stock: 30,
            precio: 35,
            sizes: ['XS'],
            slug: "women_t_logo_short_sleeve_scoop_neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Women's T Logo Short Sleeve Scoop Neck Tee",
            genero: 'women'
        },
        {
            descripcion: "Designed for style and comfort, the ultrasoft Women's T Logo Long Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
            imagenes: [
                '8765100-00-A_0_2000.jpg',
                '8765100-00-A_1.jpg',
            ],
            stock: 16,
            precio: 40,
            sizes: ['XS'],
            slug: "women_t_logo_long_sleeve_scoop_neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Women's T Logo Long Sleeve Scoop Neck Tee",
            genero: 'women'
        },
        {
            descripcion: "Designed for style and comfort, the Women's Small Wordmark Short Sleeve V-Neck Tee features a tonal 3D silicone-printed wordmark on the left chest. Made of 100% Peruvian cotton.",
            imagenes: [
                '8765120-00-A_0_2000.jpg',
                '8765120-00-A_1.jpg',
            ],
            stock: 18,
            precio: 35,
            sizes: ['XS'],
            slug: "women_small_wordmark_short_sleeve_v-neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Women's Small Wordmark Short Sleeve V-Neck Tee",
            genero: 'women'
        },
        {
            descripcion: "Designed for style and comfort, the Women's Large Wordmark Short Sleeve Crew Neck Tee features a tonal 3D silicone-printed wordmark across the chest. Made of 100% Peruvian pima cotton.",
            imagenes: [
                '8765115-00-A_0_2000.jpg',
                '8765115-00-A_1.jpg',
            ],
            stock: 5,
            precio: 35,
            sizes: ['XS'],
            slug: "women_large_wordmark_short_sleeve_crew_neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Women's Large Wordmark Short Sleeve Crew Neck Tee",
            genero: 'women'
        },
        {
            descripcion: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
            imagenes: [
                '1549275-00-A_0_2000.jpg',
                '1549275-00-A_1.jpg',
            ],
            stock: 16,
            precio: 35,
            sizes: ['XS'],
            slug: "women_plaid_mode_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Women's Plaid Mode Tee",
            genero: 'women'
        },
        {
            descripcion: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any",
            imagenes: [
                '9877040-00-A_0_2000.jpg',
                '9877040-00-A_1.jpg',
            ],
            stock: 10,
            precio: 130,
            sizes: ['XS'],
            slug: "women_powerwall_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Women’s Powerwall Tee",
            genero: 'women'
        },
        {
            descripcion: "Fully customized and uniquely styled, the Women's Corp Jacket features a silicone-printed 'T' logo on the left chest and prominent Tesla wordmark across the back.",
            imagenes: [
                '5645680-00-A_0_2000.jpg',
                '5645680-00-A_3.jpg',
            ],
            stock: 3,
            precio: 90,
            sizes: ['XS'],
            slug: "women_corp_jacket",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Women's Corp Jacket",
            genero: 'women'
        },
        {
            descripcion: "Introducing the Tesla Raven Collection. The Women's Raven Joggers have a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The joggers feature a subtle thermoplastic polyurethane Tesla wordmark and T logo and a french terry interior for a cozy look and feel in every season. Pair them with your Raven Slouchy Crew Sweatshirt, Raven Lightweight Zip Up Jacket or other favorite on the go fit. Made from 70% bamboo and 30% cotton.",
            imagenes: [
                '1740270-00-A_0_2000.jpg',
                '1740270-00-A_1.jpg',
            ],
            stock: 162,
            precio: 100,
            sizes: ['XS'],
            slug: "women_raven_joggers",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Women's Raven Joggers",
            genero: 'women'
        },
        {
            descripcion: "Designed for fit, comfort and style, the Kids Cybertruck Graffiti Long Sleeve Tee features a water-based Cybertruck graffiti wordmark across the chest, a Tesla wordmark down the left arm and our signature T logo on the back collar. Made from 50% cotton and 50% polyester.",
            imagenes: [
                '1742694-00-A_1_2000.jpg',
                '1742694-00-A_3.jpg',
            ],
            stock: 10,
            precio: 30,
            sizes: ['XS'],
            slug: "kids_cybertruck_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Kids Cybertruck Long Sleeve Tee",
            genero: 'kid'
        },
        {
            descripcion: "The Kids Scribble T Logo Tee is made from 100% Peruvian cotton and features a Tesla T sketched logo for every young artist to wear.",
            imagenes: [
                '8529312-00-A_0_2000.jpg',
                '8529312-00-A_1.jpg',
            ],
            stock: 0,
            precio: 25,
            sizes: ['XS'],
            slug: "kids_scribble_t_logo_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Kids Scribble T Logo Tee",
            genero: 'kid'
        },
        {
            descripcion: "The Kids Cybertruck Tee features the iconic Cybertruck graffiti wordmark and is made from 100% Peruvian cotton for maximum comfort.",
            imagenes: [
                '8529342-00-A_0_2000.jpg',
                '8529342-00-A_1.jpg',
            ],
            stock: 10,
            precio: 25,
            sizes: ['XS'],
            slug: "kids_cybertruck_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Kids Cybertruck Tee",
            genero: 'kid'
        },
        {
            descripcion: "The refreshed Kids Racing Stripe Tee is made from 100% Peruvian cotton, featuring a newly enhanced racing stripe with a brushed Tesla wordmark that's perfect for any speed racer.",
            imagenes: [
                '8529354-00-A_0_2000.jpg',
                '8529354-00-A_1.jpg',
            ],
            stock: 10,
            precio: 30,
            sizes: ['XS'],
            slug: "kids_racing_stripe_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Kids Racing Stripe Tee",
            genero: 'kid'
        },
        {
            descripcion: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
            imagenes: [
                '7652465-00-A_0_2000.jpg',
                '7652465-00-A_1.jpg',
            ],
            stock: 10,
            precio: 30,
            sizes: ['XS'],
            slug: "kids_3d_t_logo_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Kids 3D T Logo Tee",
            genero: 'kid'
        },
        {
            descripcion: "The checkered tee is made from long grain, GMO free Peruvian cotton. Peru is the only country in the world where cotton is picked by hand on a large scale. The 4,500-year-old tradition prevents damage to the fiber during the picking process and removes the need to use chemicals to open the cotton plants before harvest. This environmentally friendly process results in cotton that is soft, strong, and lustrous – and the tee will get even softer with every wash.",
            imagenes: [
                '100042307_0_2000.jpg',
                '100042307_alt_2000.jpg',
            ],
            stock: 10,
            precio: 30,
            sizes: ['XS'],
            slug: "kids_checkered_tee",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Kids Checkered Tee",
            genero: 'kid'
        },
        {
            descripcion: "For the future space traveler with discerning taste, a soft, cotton onesie with snap closure bottom. Clear labeling provided in case of contact with a new spacefaring civilization. 100% Cotton. Made in Peru",
            imagenes: [
                '1473809-00-A_1_2000.jpg',
                '1473809-00-A_alt.jpg',
            ],
            stock: 16,
            precio: 25,
            sizes: ['XS'],
            slug: "made_on_earth_by_humans_onesie",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Made on Earth by Humans Onesie",
            genero: 'kid'
        },
        {
            descripcion: "The Kids Scribble T Logo Onesie is made from 100% Peruvian cotton and features a Tesla T sketched logo for every little artist to wear.",
            imagenes: [
                '8529387-00-A_0_2000.jpg',
                '8529387-00-A_1.jpg',
            ],
            stock: 0,
            precio: 30,
            sizes: ['XS'],
            slug: "scribble_t_logo_onesie",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Scribble T Logo Onesie",
            genero: 'kid'
        },
        {
            descripcion: "Show your commitment to sustainable energy with this cheeky onesie for your young one. Note: Does not prevent emissions. 100% Cotton. Made in Peru.",
            imagenes: [
                '1473834-00-A_2_2000.jpg',
                '1473829-00-A_2_2000.jpg',
            ],
            stock: 10,
            precio: 30,
            sizes: ['XS'],
            slug: "zero_emissions_(almost)_onesie",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Zero Emissions (Almost) Onesie",
            genero: 'kid'
        },
        {
            descripcion: "Wear your Kids Cyberquad Bomber Jacket during your adventures on Cyberquad for Kids. The bomber jacket features a graffiti-style illustration of our Cyberquad silhouette and wordmark. With three zippered pockets and our signature T logo and Tesla wordmark printed along the sleeves, Kids Cyberquad Bomber Jacket is perfect for wherever the trail takes you. Made from 60% cotton and 40% polyester.",
            imagenes: [
                '1742702-00-A_0_2000.jpg',
                '1742702-00-A_1.jpg',
            ],
            stock: 10,
            precio: 65,
            sizes: ['XS'],
            slug: "kids_cyberquad_bomber_jacket",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Kids Cyberquad Bomber Jacket",
            genero: 'kid'
        },
        {
            descripcion: "Cruise the playground in style with the Kids Corp Jacket. Modeled after the original Tesla Corp Jacket, the Kids Corp Jacket features the same understated style and high-quality materials but at a pint-sized scale.",
            imagenes: [
                '1506211-00-A_0_2000.jpg',
                '1506211-00-A_1_2000.jpg',
            ],
            stock: 10,
            precio: 30,
            sizes: ['XS'],
            slug: "kids_corp_jacket",
            type: 'shirts',
            tags: ['shirt'],
            titulo: "Kids Corp Jacket",
            genero: 'kid'
        },
    ]
}