import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  products = [
    {
      "id": 1,
      "title": "Apple MacBook Air M1",
      "price": 99999.99,
      "description": "Apple M1 chip with 8-core CPU and 7-core GPU, 256GB SSD storage, 13.3-inch Retina display.",
      "category": "electronics",
      "image": "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111883_macbookair.png",
      "rating": {
        "rate": 4.8,
        "count": 1500
      }
    },
    {
      "id": 2,
      "title": "Sony WH-1000XM4 Noise Cancelling Headphones",
      "price": 2000.99,
      "description": "Industry-leading noise canceling with Dual Noise Sensor technology. Up to 30 hours battery life.",
      "category": "electronics",
      "image": "https://m.media-amazon.com/images/I/510cs9VwjUL.jpg",
      "rating": {
        "rate": 4.6,
        "count": 2300
      }
    },
    {
      "id": 3,
      "title": "Nike Air Force 1 '07",
      "price": 1110,
      "description": "The classic silhouette of the Nike Air Force 1 '07 in all-white leather.",
      "category": "shoes",
      "image": "https://images.squarespace-cdn.com/content/v1/532313ece4b08487acaec7a2/1626022578795-WBOOSK9EYB3X3EYYHUCE/plain-white-background.jpeg",
      "rating": {
        "rate": 4.7,
        "count": 1800
      }
    },
    {
      "id": 4,
      "title": "The North Face Men's Waterproof Jacket",
      "price": 1500,
      "description": "Waterproof, windproof, and breathable jacket perfect for outdoor adventures.",
      "category": "men's clothing",
      "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSqwSOxRNZ64FIJF_3wy2PrGFtp1M2WqfHy9qkd4idAes1bADhdo49cpdO3IENDMcZyYTNxVcNQ8xhYF7d9q1cZtxtdaTlKyDniQz8zO94Ruts8quESv5zMOA",
      "rating": {
        "rate": 4.5,
        "count": 900
      }
    },
    {
      "id": 5,
      "title": "Samsung Galaxy S23 Ultra",
      "price": 90000.99,
      "description": "6.8-inch Dynamic AMOLED 2X display, 200MP main camera, S Pen included.",
      "category": "electronics",
      "image": "https://m.media-amazon.com/images/I/71lD7eGdW-L.jpg",
      "rating": {
        "rate": 4.9,
        "count": 5000
      }
    },
    {
      "id": 6,
      "title": "Adidas Ultraboost 22",
      "price": 1800,
      "description": "Performance running shoes with responsive Boost cushioning for all-day comfort.",
      "category": "shoes",
      "image": "https://cdn-images.farfetch-contents.com/19/41/92/92/19419292_42685107_600.jpg",
      "rating": {
        "rate": 4.8,
        "count": 2000
      }
    },
    {
      "id": 7,
      "title": "Fossil Men's Chronograph Watch",
      "price": 1200.99,
      "description": "Classic stainless steel design with a chronograph display and water resistance.",
      "category": "jewelry",
      "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTS69hlF_F7ELiV3W920qHWXErCDoR1WrCpiRbzuQO9jJpwCt_ob_QmnZdfgsCA5Ooh2xo5Eq6PAN-tsLF6sAEE7Bkcb52r0Hfe29y87EyIkF-G-y95zFV6",
      "rating": {
        "rate": 4.3,
        "count": 700
      }
    },
    {
      "id": 8,
      "title": "Levi's 501 Original Fit Jeans",
      "price": 12000,
      "description": "Timeless straight-leg fit jeans with a button fly and classic five-pocket styling.",
      "category": "men's clothing",
      "image": "https://www.collinsdictionary.com/images/full/jeans_96398333_1000.jpg",
      "rating": {
        "rate": 4.6,
        "count": 1300
      }
    },
    {
      "id": 9,
      "title": "Dyson V11 Cordless Vacuum Cleaner",
      "price": 599.99,
      "description": "Powerful suction, LCD screen, and intelligent cleaning modes for all surfaces.",
      "category": "home appliances",
      "image": "https://images-cdn.ubuy.co.in/6361761d3ff0d50f6659ca83-dyson-v11-outsize-origin-cordless-vacuum.jpg",
      "rating": {
        "rate": 4.7,
        "count": 2500
      }
    },
    {
      "id": 10,
      "title": "Ray-Ban Aviator Sunglasses",
      "price": 800,
      "description": "Iconic aviator design with polarized lenses and durable metal frame.",
      "category": "accessories",
      "image": "https://image4.cdnsbg.com/1/14/632757_1679362310313.jpg?width=640&height=320",
      "rating": {
        "rate": 4.9,
        "count": 1100
      }
    }
  ]
  
}
