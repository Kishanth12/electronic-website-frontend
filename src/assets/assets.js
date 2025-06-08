
import logo from './logoo.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import contact_img from './contact_img.png'
import cross_icon from './cross_icon.png'
import banner from './banner.png'


export const assets = {
    logo,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    contact_img,
    cross_icon,
    banner
}

export const products = [
    {
      "_id": "elect001",
      "name": "UltraX Pro Gaming Laptop",
      "description": "High-performance gaming laptop with Intel i9, RTX 4080, 32GB RAM, 1TB SSD.",
      "price": 2999,
      "image": [
        'https://m.media-amazon.com/images/I/718zbAOG7HL._AC_UY327_FMwebp_QL65_.jpg'
     ],
      "category": "Electronics",
      "subCategory": "Laptops",
      "sizes": ["15.6-inch", "17-inch"],
      "brand": "UltraTech",
      "rating": 4.8,
      "stock": 24,
      "warranty": "2 years",
      "features": [
        "Intel i9 13th Gen",
        "RTX 4080",
        "32GB RAM",
        "1TB SSD",
        "RGB Keyboard"
      ],
      "reviews": [
        {
          "user": "John Doe",
          "comment": "Plays all the latest games smoothly!",
          "rating": 5
        }
      ],
      "date": 1716623423448,
      "bestseller": true
    },
    {
      "_id": "elect002",
      "name": "SmartLife 4K LED TV 55\"",
      "description": "Crystal-clear 4K UHD TV with voice control and built-in apps.",
      "price": 799,
      "image": [
        'https://m.media-amazon.com/images/I/61Zqq7Dzh2L._AC_UY327_FMwebp_QL65_.jpg'      
    ],
      "category": "Electronics",
      "subCategory": "TVs",
      "sizes": ["55-inch", "65-inch"],
      "brand": "SmartLife",
      "rating": 4.5,
      "stock": 40,
      "warranty": "1 year",
      "features": [
        "4K UHD Display",
        "HDR10",
        "Voice Control",
        "Built-in Netflix & YouTube"
      ],
      "reviews": [
        {
          "user": "Elena",
          "comment": "Picture quality is amazing!",
          "rating": 4.6
        }
      ],
      "date": 1716623567890,
      "bestseller": false
    },
    {
      "_id": "elect003",
      "name": "XPhone Max 14",
      "description": "Flagship smartphone with A16 chip, triple camera, and 5G.",
      "price": 1099,
      "image": [
        'https://m.media-amazon.com/images/I/619oqSJVY5L._AC_UY327_FMwebp_QL65_.jpg' ],
      "category": "Electronics",
      "subCategory": "Smartphones",
      "sizes": ["128GB", "256GB", "512GB"],
      "brand": "Apple",
      "rating": 3.9,
      "stock": 60,
      "warranty": "1 year",
      "features": [
        "A16 Bionic Chip",
        "Triple Camera",
        "5G",
        "Face ID"
      ],
      "reviews": [
        {
          "user": "TechSavvy",
          "comment": "Incredible speed and camera performance.",
          "rating": 5
        }
      ],
      "date": 1716623987653,
      "bestseller": true
    },
    {
      "_id": "elect004",
      "name": "PowerBeat Wireless Headphones",
      "description": "Noise-cancelling wireless headphones with deep bass and long battery life.",
      "price": 179,
      "image": [
        "https://m.media-amazon.com/images/I/61I0TkIxwfL._AC_UL480_FMwebp_QL65_.jpg"
      ],
      "category": "Electronics",
      "subCategory": "Audio",
      "sizes": ["Standard"],
      "brand": "PowerBeat",
      "rating": 4.4,
      "stock": 75,
      "warranty": "6 months",
      "features": [
        "30-Hour Battery",
        "Bluetooth 5.2",
        "Noise Cancellation",
        "Comfortable Design"
      ],
      "reviews": [
        {
          "user": "Mila",
          "comment": "Great sound quality and battery backup.",
          "rating": 4.5
        }
      ],
      "date": 1716624238765,
      "bestseller": false
    },
    {
      "_id": "elect005",
      "name": "UltraTech Smart Watch",
      "description": "Fitness-focused smart watch with heart rate monitoring, GPS, and 7-day battery life.",
      "price": 250,
      "image": [
        "https://m.media-amazon.com/images/I/71FFa3U4SzL._AC_UL480_FMwebp_QL65_.jpg"
      ],
      "category": "Electronics",
      "subCategory": "Wearables",
      "sizes": ["Standard"],
      "brand": "UltraTech",
      "rating": 4.3,
      "stock": 100,
      "warranty": "1 year",
      "features": [
        "Heart Rate Monitor",
        "GPS",
        "7-Day Battery",
        "Sleep Tracker"
      ],
      "reviews": [
        {
          "user": "Sophia",
          "comment": "Very useful for fitness tracking!",
          "rating": 4.4
        }
      ],
      "date": 1716624323321,
      "bestseller": false
    },
    {
      "_id": "elect006",
      "name": "Samsung Galaxy S22 Ultra",
      "description": "Flagship smartphone with 108MP camera and 5G connectivity.",
      "price": 1199,
      "image": [
        "https://m.media-amazon.com/images/I/71T-f5f-VlL._AC_UL480_FMwebp_QL65_.jpg"
      ],
      "category": "Electronics",
      "subCategory": "Smartphones",
      "sizes": ["128GB", "256GB", "512GB"],
      "brand": "Samsung",
      "rating": 4.7,
      "stock": 50,
      "warranty": "1 year",
      "features": [
        "108MP Camera",
        "5G Connectivity",
        "120Hz AMOLED Display",
        "5000mAh Battery"
      ],
      "reviews": [
        {
          "user": "Lucas",
          "comment": "Best camera phone I've ever used!",
          "rating": 5
        }
      ],
      "date": 1716624442201,
      "bestseller": true
    },
    {
      "_id": "elect007",
      "name": "Sony PlayStation 5",
      "description": "Next-gen gaming console with ultra-fast SSD and ray tracing.",
      "price": 499,
      "image": [
        "https://m.media-amazon.com/images/I/51QoWUMybjL._AC_UY327_FMwebp_QL65_.jpg"
      ],
      "category": "Electronics",
      "subCategory": "Gaming Consoles",
      "sizes": ["Standard"],
      "brand": "Sony",
      "rating": 4.9,
      "stock": 100,
      "warranty": "1 year",
      "features": [
        "Ultra-fast SSD",
        "Ray Tracing",
        "4K Gaming",
        "DualSense Controller"
      ],
      "reviews": [
        {
          "user": "Emily",
          "comment": "The best console for gamers!",
          "rating": 5
        }
      ],
      "date": 1716624568801,
      "bestseller": true
    },
    {
      "_id": "elect008",
      "name": "Bose QuietComfort 35 II",
      "description": "Noise-cancelling wireless headphones with 20-hour battery life.",
      "price": 349,
      "image": [
        "https://m.media-amazon.com/images/I/51aXvjzcukL._AC_UY327_FMwebp_QL65_.jpg"
      ],
      "category": "Electronics",
      "subCategory": "Audio",
      "sizes": ["Standard"],
      "brand": "Bose",
      "rating": 4.8,
      "stock": 80,
      "warranty": "1 year",
      "features": [
        "Noise Cancellation",
        "20-Hour Battery",
        "Comfortable Fit",
        "Voice Assistant Integration"
      ],
      "reviews": [
        {
          "user": "David",
          "comment": "Excellent sound and comfort.",
          "rating": 5
        }
      ],
      "date": 1716624689371,
      "bestseller": false
    },
    {
      "_id": "elect009",
      "name": "Apple MacBook Pro 16-inch",
      "description": "High-performance laptop with Apple M1 Pro chip, 16-inch Retina display.",
      "price": 2499,
      "image": [
        "https://m.media-amazon.com/images/I/71gn83R0DPL._AC_UY327_FMwebp_QL65_.jpg"
      ],
      "category": "Electronics",
      "subCategory": "Laptops",
      "sizes": ["16-inch"],
      "brand": "Apple",
      "rating": 4.7,
      "stock": 40,
      "warranty": "1 year",
      "features": [
        "Apple M1 Pro Chip",
        "16-inch Retina Display",
        "32GB RAM",
        "1TB SSD"
      ],
      "reviews": [
        {
          "user": "James",
          "comment": "Best laptop for content creators!",
          "rating": 5
        }
      ],
      "date": 1716624802189,
      "bestseller": true
    },
    {
          "_id": "elect010",
          "name": "Dell XPS 13 Laptop",
          "description": "Compact and powerful laptop with Intel i7, 16GB RAM, 512GB SSD.",
          "price": 1499,
          "image": [
            "https://m.media-amazon.com/images/I/61MplWm+QpL._AC_UY327_FMwebp_QL65_.jpg"
          ],
          "category": "Electronics",
          "subCategory": "Laptops",
          "sizes": ["13-inch"],
          "brand": "Dell",
          "rating": 4.6,
          "stock": 55,
          "warranty": "1 year",
          "features": [
            "Intel i7 Processor",
            "16GB RAM",
            "512GB SSD",
            "13-inch InfinityEdge Display"
          ],
          "reviews": [
            {
              "user": "Alice",
              "comment": "Great performance in a small form factor.",
              "rating": 4.7
            }
          ],
          "date": 1716625102395,
          "bestseller": false
    },
    {
          "_id": "elect011",
          "name": "Lenovo ThinkPad X1 Carbon",
          "description": "Business laptop with Intel i7, 16GB RAM, 1TB SSD, 14-inch display.",
          "price": 1800,
          "image": [
            "https://m.media-amazon.com/images/I/518BYF8LHRL._AC_UY327_FMwebp_QL65_.jpg"
          ],
          "category": "Electronics",
          "subCategory": "Laptops",
          "sizes": ["14-inch"],
          "brand": "Lenovo",
          "rating": 4.8,
          "stock": 80,
          "warranty": "1 year",
          "features": [
            "Intel i7 Processor",
            "16GB RAM",
            "1TB SSD",
            "14-inch Full HD Display"
          ],
          "reviews": [
            {
              "user": "Charlie",
              "comment": "Perfect for business needs and portability.",
              "rating": 5
            }
          ],
          "date": 1716625234562,
          "bestseller": true
    },
    {
          "_id": "elect012",
          "name": "HP Spectre x360",
          "description": "Convertible laptop with Intel i7, 16GB RAM, 512GB SSD, and 13-inch 4K touchscreen.",
          "price": 1699,
          "image": [
            "https://m.media-amazon.com/images/I/71KDRsw3VYL._AC_UY327_FMwebp_QL65_.jpg"
          ],
          "category": "Electronics",
          "subCategory": "Laptops",
          "sizes": ["13-inch"],
          "brand": "HP",
          "rating": 4.7,
          "stock": 65,
          "warranty": "1 year",
          "features": [
            "Intel i7 Processor",
            "16GB RAM",
            "512GB SSD",
            "13-inch 4K Touchscreen"
          ],
          "reviews": [
            {
              "user": "Sophie",
              "comment": "A very versatile and powerful laptop.",
              "rating": 4.8
            }
          ],
          "date": 1716625357850,
          "bestseller": false
    },
    {
          "_id": "elect013",
          "name": "Google Nest Hub Max",
          "description": "Smart display with 10-inch screen, Google Assistant, and camera.",
          "price": 229,
          "image": [
            "https://m.media-amazon.com/images/I/61qQrZIseQL._AC_UL480_FMwebp_QL65_.jpg"
          ],
          "category": "Electronics",
          "subCategory": "Smart Home",
          "sizes": ["Standard"],
          "brand": "Google",
          "rating": 4.3,
          "stock": 50,
          "warranty": "1 year",
          "features": [
            "10-inch Screen",
            "Google Assistant",
            "Camera",
            "Smart Home Integration"
          ],
          "reviews": [
            {
              "user": "Lucas",
              "comment": "Great for controlling smart devices!",
              "rating": 4.6
            }
          ],
          "date": 1716625472642,
          "bestseller": false
    },
    {
          "_id": "elect014",
          "name": "Apple AirPods Pro",
          "description": "Wireless noise-canceling earbuds with Transparency mode and customizable fit.",
          "price": 249,
          "image": [
            "https://m.media-amazon.com/images/I/41-XvBO5K4L._AC_UY327_FMwebp_QL65_.jpg"
          ],
          "category": "Electronics",
          "subCategory": "Audio",
          "sizes": ["Standard"],
          "brand": "Apple",
          "rating": 4.8,
          "stock": 100,
          "warranty": "1 year",
          "features": [
            "Noise Cancellation",
            "Transparency Mode",
            "Customizable Fit",
            "Wireless Charging"
          ],
          "reviews": [
            {
              "user": "Michael",
              "comment": "Incredible sound quality and fit!",
              "rating": 5
            }
          ],
          "date": 1716625591234,
          "bestseller": true
    },
    {
          "_id": "elect015",
          "name": "JBL Charge 5 Bluetooth Speaker",
          "description": "Portable Bluetooth speaker with deep bass and IP67 waterproof rating.",
          "price": 149,
          "image": [
            "https://m.media-amazon.com/images/I/71zDU8JBLZL._AC_UY327_FMwebp_QL65_.jpg"
          ],
          "category": "Electronics",
          "subCategory": "Audio",
          "sizes": ["Standard"],
          "brand": "JBL",
          "rating": 4.7,
          "stock": 70,
          "warranty": "1 year",
          "features": [
            "Bluetooth 5.1",
            "IP67 Waterproof",
            "12 Hours Playtime",
            "Deep Bass"
          ],
          "reviews": [
            {
              "user": "Sarah",
              "comment": "Perfect speaker for outdoor activities.",
              "rating": 4.9
            }
          ],
          "date": 1716625736015,
          "bestseller": true
    },
    {
          "_id": "elect016",
          "name": "GoPro HERO 10 Black",
          "description": "Action camera with 5.3K video, HyperSmooth 4.0 stabilization, and waterproof up to 33ft.",
          "price": 399,
          "image": [
            "https://m.media-amazon.com/images/I/61wsvCGXqnL._AC_UY327_FMwebp_QL65_.jpg"
          ],
          "category": "Electronics",
          "subCategory": "Cameras",
          "sizes": ["Standard"],
          "brand": "GoPro",
          "rating": 4.8,
          "stock": 40,
          "warranty": "1 year",
          "features": [
            "5.3K Video",
            "HyperSmooth 4.0 Stabilization",
            "33ft Waterproof",
            "TimeWarp 3.0"
          ],
          "reviews": [
            {
              "user": "Emma",
              "comment": "Best action camera for extreme sports.",
              "rating": 5
            }
          ],
          "date": 1716625861402,
          "bestseller": false
    }
      
      
  ]
  
  