import { addDoc, collection } from 'firebase/firestore'
import db from '../components/db/db.js'

const products = [
	{
        id: "california-roll",
        name: "California Roll",
        image: "https://www.justonecookbook.com/wp-content/uploads/2024/04/California-Roll-7066-I-1.jpg",
        category: "Sushi Rolls",
        description: "Rollo de imitación de cangrejo, aguacate, pepino y semillas de sésamo.",
        price: 7000,
        stock: 20
    },
    {
        id: "spicy-tuna-roll",
        name: "Spicy Tuna Roll",
        image: "https://www.justonecookbook.com/wp-content/uploads/2020/12/Spicy-Tuna-Rolls-8965.jpg",
        category: "Sushi Rolls",
        description: "Rollo de atún picante, pepino y semillas de sésamo.",
        price: 7500,
        stock: 15
    },
    {
        id: "dragon-roll",
        name: "Dragon Roll",
        image: "https://www.justonecookbook.com/wp-content/uploads/2020/06/Dragon-Roll-0286-I.jpg",
        category: "Sushi Rolls",
        description: "Rollo de anguila, aguacate, pepino y salsa de anguila.",
        price: 8500,
        stock: 10
    },
    {
        id: "philadelphia-roll",
        name: "Philadelphia Roll",
        image: "https://www.clarin.com/2020/06/18/5L2oDs4Ey_0x750__1.jpg",
        category: "Sushi Rolls",
        description: "Rollo de salmón ahumado, queso crema y pepino.",
        price: 8000,
        stock: 12
    },
    {
        id: "salmon-nigiri",
        name: "Salmón Nigiri (Sake)",
        image: "https://www.manusmenu.com/wp-content/uploads/2013/09/1-Salmon-Nigiri-1-1-of-1.jpg",
        category: "Nigiri Sushi",
        description: "Nigiri de salmón fresco sobre arroz avinagrado.",
        price: 9000,
        stock: 25
    },
    {
        id: "atun-nigiri",
        name: "Atún Nigiri (Maguro)",
        image: "https://izzycooking.com/wp-content/uploads/2020/09/Tuna-Nigiri-thumbnail.jpg",
        category: "Nigiri Sushi",
        description: "Nigiri de atún fresco sobre arroz avinagrado.",
        price: 9500,
        stock: 18
    },
    {
        id: "anguila-nigiri",
        name: "Anguila Nigiri (Unagi)",
        image: "https://www.siftandsimmer.com/wp-content/uploads/2022/04/unagi-nigiri2.jpg",
        category: "Nigiri Sushi",
        description: "Nigiri de anguila a la parrilla con salsa de anguila sobre arroz avinagrado.",
        price: 10000,
        stock: 20
    },
    {
        id: "rainbow-roll",
        name: "Rainbow Roll",
        image: "https://www.comedera.com/wp-content/uploads/2023/08/shutterstock_607776707.jpg",
        category: "Sushi Rolls",
        description: "Rollo de California cubierto con una variedad de sashimi.",
        price: 9500,
        stock: 15
    },
    {
        id: "tempura-roll",
        name: "Tempura Roll",
        image: "https://www.comedera.com/wp-content/uploads/2023/08/tempura-roll.jpg",
        category: "Sushi Rolls",
        description: "Rollo de tempura de camarón, aguacate, pepino, mayonesa picante y salsa de anguila.",
        price: 9000,
        stock: 10
    },
    {
        id: "rollo-aguacate",
        name: "Rollo de Aguacate",
        image: "https://www.sbfoods-worldwide.com/recipes/q78eit00000004lp-img/5_Dragonroll_Wasabi_recipe.jpg",
        category: "Vegetarian Sushi",
        description: "Rollo de aguacate, pepino y semillas de sésamo.",
        price: 6000,
        stock: 20
    },
    {
        id: "rollo-vegetal",
        name: "Rollo Vegetal",
        image: "https://a-akisushi.com/wp-content/uploads/2014/06/Mixed-Veggie-Roll.jpg",
        category: "Vegetarian Sushi",
        description: "Rollo de zanahoria, pepino, aguacate y pimiento.",
        price: 6500,
        stock: 18
    },
    {
        id: "inari-sishi",
        name: "Inari Sushi",
        image: "https://images.getrecipekit.com/v1617340903_Deep_Fried_Inari_Sushi_520x500_vavnvs.webp?aspect_ratio=16:9&quality=90&",
        category: "Vegetarian Sushi",
        description: "Bolsillos de tofu dulce rellenos de arroz avinagrado.",
        price: 7000,
        stock: 15
    },
	{
        id: "sushi-pulpo",
        name: "Sushi de Pulpo (Tako)",
        image: "https://www.tasteatlas.com/images/dishes/a9f827f1cae1423b93bdc04f09e29ec0.jpg",
        category: "Nigiri Sushi",
        description: "Nigiri de pulpo fresco sobre arroz avinagrado.",
        price: 9500,
        stock: 12
    },
	{
        id: "sushi-pez-mantequilla",
        name: "Sushi de Pez Mantequilla (Buri)",
        image: "https://www.bokksumarket.com/cdn/shop/products/Shutterstock_1991722295.jpg?v=1663017838&width=1080",
        category: "Nigiri Sushi",
        description: "v",
        price: 10000,
        stock: 10
    },
	{
        id: "sushi-vieiras",
        name: "Sushi de Vieiras (Hotate)",
        image: "https://www.sushirecetas.com/wp-content/uploads/2023/10/14658194004828.jpg",
        category: "Nigiri Sushi",
        description: "Nigiri de vieiras frescas sobre arroz avinagrado.",
        price: 10500,
        stock: 8
    },
	{
		id: "karaage",
		name: "KARAAGE",
		image: "https://www.justonecookbook.com/wp-content/uploads/2019/10/Karaage-9515-I-1-600x400.jpg",
		category: "Entradas",
		description: "Buñuelos de pollo fritos y rebozados en masa acompañado con salsa semi picante",
		price: 5000,
		stock: 5
	},
	{
		id: "gyoza",
		name: "GYOZA",
		image: "https://www.justonecookbook.com/wp-content/uploads/2024/04/Gyoza-7444-I-2.jpg",
		category: "Entradas",
		description: "Dumplings rellenos de carne de cerdo y nira (cebollín japonés), cocidos al vapos y sellados en aceite (5 unidades)",
		price: 5000,
		stock: 7
	},
	{
		id: "ebi-furai",
		name: "EBI FURAI",
		image: "https://www.justonecookbook.com/wp-content/uploads/2020/04/Ebi-Fry-Fried-Shrimp-1174-I-2-600x400.jpg",
		category: "Entradas",
		description: "Langostinos rebozados en panko, fritos (3 unidades)",
		price: 5000,
		stock: 10
	},
	{
		id: "takoyaki",
		name: "TAKOYAKI",
		image: "https://www.justonecookbook.com/wp-content/uploads/2020/11/Takoyaki-2994-I-1-600x400.jpg",
		category: "Entradas",
		description: "Buñuelos hechos de masa de harina con huevo y rellenos de pulpo (5 unidades)",
		price: 6500,
		stock: 12
	},
	{
		id: "rabas",
		name: "RABAS",
		image: "https://www.paulinacocina.net/wp-content/uploads/2021/11/como-hacer-rabas-receta-paso-a-paso-800x533.jpg",
		category: "Entradas",
		description: "Aros de calamar rebozados en panko, fritos.",
		price: 6000,
		stock: 15
	},
	{
		id: "tempura-udon",
		name: "TEMPURA UDON",
		image: "https://www.justonecookbook.com/wp-content/uploads/2023/02/Nabeyaki-Udon-5134-I.jpg",
		category: "Udon",
		description: "Sopa de udon con tempura de vegetales y kamaboko (pasta de pescado).",
		price: 8500,
		stock: 4
	},
	{
		id: "kitsune-udon",
		name: "KITSUNE UDON",
		image: "https://www.justonecookbook.com/wp-content/uploads/2020/03/Kitsune-Udon-3765-I.jpg",
		category: "Udon",
		description: "Sopa de udon con age (bocado de tofu frito agridulce), kamaboko (pasta de pescado) y variedad de vegetales.",
		price: 8500,
		stock: 6
	},
	{
		id: "yasai-udon",
		name: "YASAI UDON",
		image: "https://cdn.mos.cms.futurecdn.net/Mt8oJwuVWCvYVJpw6DbVDD.jpg",
		category: "Udon",
		description: "Udon de caldo de verduras con toppings vegetarianos.",
		price: 8500,
		stock: 10
	},
	{
		id: "tonkatsu",
		name: "TONKATSU",
		image: "https://www.justonecookbook.com/wp-content/uploads/2021/04/Baked-Tonkatsu-4914-768x512.jpg",
		category: "Plato Principal",
		description: "Milanesa de cerdo rebozada en panko, frita, crocante con salsa tonkatsu, acompañada por arroz.",
		price: 7000,
		stock: 2
	},
	{
		id: "chicken-teriyaki",
		name: "CHICKEN TERIYAKI",
		image: "https://www.justonecookbook.com/wp-content/uploads/2024/04/Chicken-Teriyaki-7895-I-1.jpg",
		category: "Plato Principal",
		description: "Salteado de pollo con morrones y cebolla al wok, glaseado en salsa teriyaki (agridulce), acompañado por arroz.",
		price: 7500,
		stock: 5
	},
	{
		id: "unagi-udon",
		name: "UNAGI DON",
		image: "https://www.justonecookbook.com/wp-content/uploads/2020/01/Unagi-Chazuke-3493-I-600x400.jpg",
		category: "Plato Principal",
		description: "Ánguila grillada estilo kabayaki, sobre colchón de arroz con salsa agridulce.",
		price: 19000,
		stock: 7
	},
	{
		id: "saba-teishoku",
		name: "SABA TEISHOKU",
		image: "https://www.yayoi.com.tw/upload/images/Menu/21211001_%E9%AF%96%E9%AD%9A%E4%BE%BF%E7%95%B6.jpg",
		category: "Plato Principal",
		description: "Caballa grillada a la plancha con arroz blanco, sopa de miso, ensalada fresca y acompañamientos del día.",
		price: 10500,
		stock: 5
	},
	{
		id: "yasai-itame",
		name: "YASAI ITAME",
		image: "https://www.justonecookbook.com/wp-content/uploads/2020/04/Stir-Fry-Vegetables-Yasai-Itame-7817-I.jpg",
		category: "Plato Principal",
		description: "Vegetales salteados con carne de cerdo.",
		price: 8500,
		stock: 12
	},
	{
		id: "matcha-swissroll",
		name: "MATCHA SWISS ROLL",
		image: "https://www.justonecookbook.com/wp-content/uploads/2021/12/Matcha-Swiss-Roll-5916-I-768x512.jpg",
		category: "Postres",
		description: "Bizcocho arrollado esponjoso con un remolino de relleno de crema de matcha fresca. Ligero, cremoso y dulce. (2 unidades + bebida)",
		price: 11500,
		stock: 2
	},
	{
		id: "berries-cake",
		name: "PASTEL DE FRESAS",
		image: "https://www.justonecookbook.com/wp-content/uploads/2020/02/Japanese-Strawberry-Shortcake-0448-I-1-600x400.jpg",
		category: "Postres",
		description: "Húmedo, aireado y ligero, el pastel de fresa japonés más popular. (1 porción + bebida)",
		price: 9500,
		stock: 3
	},
	{
		id: "apple-pie",
		name: "TARTA DE MANZANAS",
		image: "https://www.justonecookbook.com/wp-content/uploads/2019/11/Easy-Apple-Tart-2826-I-600x400.jpg",
		category: "Postres",
		description: "Manzanas y hojalde horneado, acompañado con una bocha de helado (1 porción + helado + bebida)",
		price: 9000,
		stock: 6
	},
	{
		id: "matcha-latte",
		name: "Matcha Latte",
		image: "https://www.sugimotousa.com/asset/5f6d2413c43f9",
		category: "Infusión",
		description: "Latte suave y cremoso hecho con polvo de matcha de alta calidad.",
		price: 3000,
		stock: 10
	},
	{
		id: "sakura-blossom-tea",
		name: "Té de Flor de Cerezo",
		image: "https://img.freepik.com/fotos-premium/taza-te-flor-cerezo-al-fondo_786255-10966.jpg",
		category: "Infusión",
		description: "Delicado té infusionado con flores de cerezo, con un sabor ligero y refrescante.",
		price: 3500,
		stock: 9
	},
	{
		id: "yusu-lemonade",
		name: "Limonada de Yuzu",
		image: "https://emilylaurae.com/wp-content/uploads/2023/07/yuzu-lemonade-2.jpg",
		category: "Infusión",
		description: "Limonada aromática y ácida hecha con yuzu fresco.",
		price: 2100,
		stock: 13
	},
	{
		id: "hojicha-latte",
		name: "Hojicha Latte",
		image: "https://www.justonecookbook.com/wp-content/uploads/2023/09/Iced-Hojicha-Latte-3679-I.jpg",
		category: "Infusión",
		description: "Latte rico y tostado hecho con hojas de té verde japonés tostadas.",
		price: 2300,
		stock: 4
	},
	{
		id: "plum-wine",
		name: "Vino de Ciruela",
		image: "https://nankaishochu.com/wp-content/uploads/2021/01/Umeko_S.jpg",
		category: "Vino",
		description: "Vino de ciruela japonés dulce y afrutado, perfecto como aperitivo.",
		price: 4700,
		stock: 10
	},
	{
		id: "mugi-cha",
		name: "Mugi-cha (Té de Cebada)",
		image: "https://casaperris.com/wp-content/uploads/2023/05/1583261941717ffffffffb1e74d9f.jpg?nocache=1715759499",
		category: "Infusión",
		description: "Té refrescante y terroso hecho con granos de cebada tostados",
		price: 2450,
		stock: 11
	},
	{
		id: "sake",
		name: "Sake",
		image: "https://www.elindependiente.com/wp-content/uploads/2018/07/sake-platea-1440x808.jpg",
		category: "Vino",
		description: "Vino de arroz japonés tradicional con un sabor limpio y fresco.",
		price: 7000,
		stock: 18
	},
	{
		id: "umeshu",
		name: "Umeshu",
		image: "https://www.justonecookbook.com/wp-content/uploads/2019/11/Umeshu-8907-I-3-600x400.jpg",
		category: "Vino",
		description: "Vino de ciruela dulce y aromático hecho con frutas de ume japonesas.",
		price: 4100,
		stock: 12
	},
	{
		id: "sencha-tea",
		name: "Té Sencha",
		image: "https://www.justonecookbook.com/wp-content/uploads/2020/10/How-to-Cold-Brew-Green-Tea-9839-600x400.jpg",
		category: "Infusión",
		description: "Té verde japonés clásico con un sabor refrescante y herbáceo.",
		price: 3070,
		stock: 17
	},
	{
		id: "mizudashi-cold-brew",
		name: "Mizudashi Cold Brew",
		image: "https://www.foxcoffee.com.au/cdn/shop/products/101564629_2371580962944626_7783223482578256138_n_5000x.jpg?v=1670905724",
		category: "Infusión",
		description: "Café frío suave con toques de chocolate y nueces.",
		price: 3110,
		stock: 16
	}
];

const seedProducts = () =>{
    products.map(({ id, ...rest }) =>{
        addDoc(collection(db, 'products'), rest)
    })
}

seedProducts();