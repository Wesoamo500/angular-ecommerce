export const Products = [
    {
      productId: 1,
      company:'Sneaker Company',
      title:'Fall Limited Edition Sneakers',
      description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
      reviews:[{
        comment:"This Product was a good one 👍",
        replies:{
          Marvin: "It was very nice ❣️",
          Kwaku: "I bought even two",
          Sampson: "My girlfriend really loved it"
        }
      },
      {
        comment:"Bad product, the delivery system was bad, I wish I didn't order it.",
        replies:{
          Marvin: "Falsy 👎",
          Ben: "Shut up troll",
          Musky: "My girlfriend really loved it"
        }
      }],
      tags:['cloth, sneakers, shirts'],
      price: 250,
      discountPercent: 0.5,
      quantity: 0,
      images:[
        {
          id: 1,
          image: "../assets/images/image-product-1.jpg",
          thumbnail: "../assets/images/image-product-1-thumbnail.jpg"
        },
        {
          id: 2,
          image: "../assets/images/image-product-2.jpg",
          thumbnail: "../assets/images/image-product-2-thumbnail.jpg"
        },
        {
          id: 3,
          image: "../assets/images/image-product-3.jpg",
          thumbnail: "../assets/images/image-product-3-thumbnail.jpg"
        },
        {
          id: 4,
          image: "../assets/images/image-product-4.jpg",
          thumbnail: "../assets/images/image-product-4-thumbnail.jpg"
        }
      ]
    }
  ]