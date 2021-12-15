const products = [
  {
    name: '820 EcoPlus-E',
    image: '/images/bike1.jpg',
    description:
      'The EcoPlus-E is a heavy duty electric bike. This bike is a good choice for commuters, college students, and anyone who wants to reduce their carbon footprint. It is equipped with a front and rear light for visibility in the dark. It has a digital display that displays speed, battery life, and pedal assist. It has a seat that is adjustable for your comfort. The seat is covered with an anti-slip material for safety. It has a six-speed Shimano drivetrain for easy pedaling.',
    brand: 'Specialized',
    category: 'Bikes',
    price: 289.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },

  {
    name: 'Synapse Neo SE',
    image: '/images/bike3.jpg',
    description:
      'The Neo SE bike from Bike Synapse is a bike that is designed for those who love to explore. The bike is made from high-quality aluminum alloy that is light and durable. The bike features a Shimano Acera 9-speed drivetrain that will help you find the perfect gear to ride up any hill.It has Shimano ST-RS505 Shifters, an FSA Vero Single Chainring, and Shimano R501 brake levers.',
    brand: 'Trek',
    category: 'Bikes',
    price: 329.99,
    countInStock: 0,
    rating: 3,
    numReviews: 12,
  },
  {
    name: 'SuperX V2',
    image: '/images/bike4.jpg',
    description:
      'Bike SuperX V2 is a high-performance mountain bike designed for speed and efficiency. The frame is made of high-quality aluminum alloy, which is both light and durable. The handlebars are ergonomically designed for maximum comfort and efficiency. The seat is designed to reduce pressure on the rider body. The seat post is made of steel, so it can be adjusted to the rider height.',
    brand: 'Canyon',
    category: 'Iper Bikes',
    price: 399.99,
    countInStock: 11,
    rating: 3.5,
    numReviews: 12,
  },
  {
    name: 'ORCA M21eLTD PWR',
    image: '/images/bike5.jpg',
    description:
      'The ORCA M21eLTD PWR is a high-quality bicycle that has been carefully designed to be used in urban areas. It has a light and durable aluminum frame that has been custom-designed to be durable and lightweight. The M21eLTD PWR also has a front suspension fork that is designed to absorb bumps on the road. The M21eLTD PWR is also equipped with hydraulic disc brakes for powerful stopping',
    brand: 'Giant',
    category: 'Bikes',
    price: 249.99,
    countInStock: 7,
    rating: 3,
    numReviews: 10,
  },
  {
    name: 'RISE H10',
    image: '/images/bike6.jpg',
    description:
      'The Bike RISE H10 is a light-weight, foldable, portable, and compact folding bike. It is ideal for everyday commutes, for shopping, for commuting to work, or for just taking a ride. The Bike RISE H10 is perfect for short distance trips that require only a bicycle. This bike is easy to assemble and has an adjustable height. It also features an adjustable seat. The Bike RISE H10 is available in two colors: Black and Blue.',
    brand: 'Cannondale',
    category: 'Bikes',
    price: 429.99,
    countInStock: 14,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'OCCAM LT',
    image: '/images/bike7.jpg',
    description:
      'Bike OCCAM LT is a light-weight bike with the quality of a road bike. This bike has a carbon fiber frame and carbon fiber fork, making it light and durable. This bike is also made of lightweight, high-quality aluminum. The bike is easy to fold up and transport in the included bag. The saddle is ergonomic and comfortable, making it easy to ride for long periods of time. The tires are slick, making it easy to ride in any condition.',
    brand: 'Orbea',
    category: 'Super Bikes',
    price: 119.99,
    countInStock: 7,
    rating: 5,
    numReviews: 10,
  },
  {
    name: 'ORCA M21eLTD PWR',
    image: '/images/bike8.png',
    description:
      'The ORCA M21eLTD PWR is a versatile and lightweight bike that is perfect for commuting and riding around town. This bike features a low-maintenance design that includes a Shimano Nexus 8-speed internal hub and a Gates Carbon Drive belt. The bike also features a Shimano Acera 27-speed drivetrain with an aluminum frame and steel fork.',
    brand: 'BMC',
    category: 'Bikes',
    price: 329.99,
    countInStock: 0,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'CAAD OPTIMO 105',
    image: '/images/bike9.jpg',
    description:
      'Bike CAAD OPTIMO 105 is a lightweight and efficient road bike that is perfect for both long and short distance rides. It features a CAAD Optimo carbon frame and carbon fork that delivers an agile and responsive ride. The bike is equipped with Shimano 105 components and a compact crank for efficient power transfer. Other features include a deep-section carbon wheel set, the CAAD is signature FACT carbon seatpost, and a full Shimano 105 groupset.',
    brand: 'Felt',
    category: 'Bikes',
    price: 199.99,
    countInStock: 12,
    rating: 4.5,
    numReviews: 14,
  },
  {
    name: 'SuperSix EVO carbon',
    image: '/images/bike10.jpg',
    description:
      'With a SuperSix EVO Carbon frame, the SuperSix EVO SL Ultegra Di2 is a bicycle that is perfect for the rider who wants to ride without limits. Its carbon frame and fork is lightweight and stiff, and with Shimano Ultegra Di2 drivetrain, the bike is powerful and efficient. The SuperSix EVO SL Ultegra Di2 has Shimano Ultegra brakes for powerful braking, and Shimano Ultegra 11-speed derailleurs for smooth gear changes. ',
    brand: 'Orbea',
    category: 'Bikes',
    price: 409.99,
    countInStock: 6,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: 'ORDU M20LTD',
    image: '/images/bike11.jpg',
    description:
      'The ORDU M20LTD is a bike that can be used by people of all ages. It has an aluminum frame and alloy wheels, making it lightweight and easy to maneuver. The bike is equipped with a suspension fork, providing a smooth ride. The bike also has an adjustable stem, which makes it easy to customize the bike to the riders needs. The bike has a quick release seat clamp, making it easy to adjust the seat.',
    brand: 'Specialized',
    category: 'Bikes',
    price: 689.99,
    countInStock: 10,
    rating: 5,
    numReviews: 12,
  },
  {
    name: 'MASTER 105-P',
    image: '/images/bike9.jpg',
    description:
      'Bike MASTER 105-P is a lightweight and efficient road bike that is perfect for both long and short distance rides. It features a CAAD Optimo carbon frame and carbon fork that delivers an agile and responsive ride. The bike is equipped with Shimano 105 components and a compact crank for efficient power transfer. Other features include a deep-section carbon wheel set, the CAAD is signature FACT carbon seatpost, and a full Shimano 105 groupset.',
    brand: 'Felt',
    category: 'Super Bikes',
    price: 199.99,
    countInStock: 0,
    rating: 3.5,
    numReviews: 4,
  },
  {
    name: 'Supercaliber',
    image: '/images/bike2.jpg',
    description:
      ' The Bike Supercaliber is a durable, lightweight, and aerodynamic road bike. It has a Shimano 10-speed rear derailleur and FSA Gossamer Double Crankset. The frame is made of aluminum and carbon fiber, with carbon forks and aluminum stem. The bike also has a rear rack for carrying items',
    brand: 'Scott',
    category: 'Bikes',
    price: 499.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
];

export default products;
