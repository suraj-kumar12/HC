/**
 * Centralized trip data configuration for Healing Circle Shangarh Girls Trip.
 * Updated with real trip assets, official itinerary, homestay photos, and contact information.
 */

export const TRIP_CONFIG = {
  title: "Healing Circle – Shangarh Girls Trip",
  tagline: "A Mindful Himalayan Retreat for Women in the Heart of the Himalayas",
  location: "Shangarh, Sainj Valley, Kullu, Himachal Pradesh",
  altitude: "6,900 ft (2,100 m) above sea level",
  duration: "3 Nights / 4 Days",
  basePrice: 6999, // Starting price: INR 6,999 per person
  priceNote: "Starting from ₹6,999 per person (50% Advance to Reserve)",
  gstNote: "5% GST applicable additionally",
  currency: "₹",
  leadInstructor: "Healing Circle Team (Certified Women Guides & Local Hosts)",

  // Client-specified pricing packages
  packages: [
    { id: "pkg-starting",  label: "Starting Price",         sharing: "Starting",       price: 6999 },
    { id: "pkg-quad-a",    label: "Quad Sharing Package",   sharing: "Quad Sharing",   price: 7499 },
    { id: "pkg-triple",    label: "Triple Sharing Package", sharing: "Triple Sharing", price: 8499 },
    { id: "pkg-quad-b",    label: "Double Sharing Package",   sharing: "Double Sharing",   price: 9499 }
  ],

  // Thursday – Sunday batch format
  batches: [
    { id: "batch-1", dates: "Thursday – Sunday Batch", status: "Upcoming Batch",      seatsLeft: 6 },
    { id: "batch-2", dates: "Thursday – Sunday Batch", status: "Limited Seats",       seatsLeft: 4 },
    { id: "batch-3", dates: "Thursday – Sunday Batch", status: "Autumn Special",      seatsLeft: 8 },
    { id: "batch-4", dates: "Thursday – Sunday Batch", status: "Festive Long Weekend", seatsLeft: 5 }
  ],

  stats: [
    { label: "Trip Duration",   value: "3N / 4D",  sub: "+ Overnight Travel"        },
    { label: "Starting Price",  value: "₹6,999",   sub: "Per Person"                },
    { label: "Batch Schedule",  value: "Thu–Sun",  sub: "Thursday to Sunday"        },
    { label: "Departure",       value: "Delhi / Chd", sub: "AC Bus & Mountain Taxi" }
  ],

  highlights: [
    {
      title: "Shangarh Meadows & Temple",
      description: "Sacred lush green Pandava meadows, traditional Shangchul Mahadev wooden pagoda temple & ancient pine canopy.",
      icon: "Sun",
      image: "/images/real-temple-meadow.jpg"
    },
    {
      title: "Barshangarh & Rupi Raila Waterfalls",
      description: "Trek through dense cedar forests to crystal clear cascading mountain falls, natural rock pools and fresh streams.",
      icon: "Compass",
      image: "/images/real-waterfall-traveler.jpg"
    },
    {
      title: "Mindful Painting & Crafts Session",
      description: "Expressive artistic journaling & painting on handcrafted Himalayan wooden planks with mountain backdrops.",
      icon: "Palette",
      image: "/images/real-painting-girl-1.jpg"
    },
    {
      title: "Bonfire & Music Under the Stars",
      description: "Evening acoustic vibes, warm fireside dancing, starry sky views and meaningful circle bonding.",
      icon: "Flame",
      image: "/images/real-bonfire-gathering.jpg"
    },
    {
      title: "Mud Bath & Refreshing Natural Reset",
      description: "Detoxify and reconnect with nature through rejuvenating therapeutic mud bath and forest bathing.",
      icon: "Sparkles",
      image: "/images/real-forest-trek.jpg"
    },
    {
      title: "Cozy Kathkuni Homestay Vibes",
      description: "Traditional wooden architecture, chamomile flower gardens, mountain-view balconies, and home-cooked pahadi meals.",
      icon: "Home",
      image: "/images/real-stay-flower-garden.jpg"
    }
  ],

  itinerary: [
    {
      day: "Day 0",
      date: "Thursday",
      title: "Delhi / Chandigarh to Shangarh (Overnight Journey)",
      theme: "Departure & The Mountain Road",
      description: "Meet your travel group in Delhi or Chandigarh. Settle into our comfortable AC transport and embark on an exciting overnight journey towards the serenity of Himachal Pradesh.",
      schedule: [
        { time: "10:00 PM", activity: "Departure from Akshardham Metro Station / Kashmiri Gate Bus Stand (Delhi). Meet & greet with group and luggage loading." },
        { time: "02:00 AM", activity: "Quick halt near Chandigarh for tea, snacks and freshening up." },
        { time: "Early Morning", activity: "Scenic winding drive along the Beas & Sainj rivers through Aut Tunnel and up the pine valleys to Shangarh." }
      ],
      image: "/images/real-group-bridge.jpg"
    },
    {
      day: "Day 1",
      date: "Friday",
      title: "Arrival in Shangarh, Barshangarh Waterfall & Valley Sunset",
      theme: "Arrival, Waterfalls & Forest Grounding",
      description: "Arrive in paradise by morning. Check into our cozy wooden homestay, relish a warm breakfast, and hike through the lush jungle to Barshangarh Waterfall.",
      schedule: [
        { time: "09:00 AM", activity: "Arrive in Shangarh. Check into your cozy homestay, freshen up, and enjoy a warm freshly prepared breakfast at the property." },
        { time: "11:30 AM", activity: "Excursion to the serene Barshangarh Waterfall, therapeutic Mud Bath, and leisurely walk through lush Shangarh Jungle." },
        { time: "02:30 PM", activity: "Warm home-style Pahadi lunch with mountain views." },
        { time: "05:30 PM", activity: "Relax and unwind as you witness a mesmerizing golden sunset in the valley." },
        { time: "08:30 PM", activity: "Delicious dinner followed by restful overnight stay in your cedar wood rooms." }
      ],
      image: "/images/real-waterfall-traveler.jpg"
    },
    {
      day: "Day 2",
      date: "Saturday",
      title: "Meadows, Shangchul Mahadev Temple, Painting & Bonfire",
      theme: "Stillness, Creativity",
      description: "Wake to birdsong. Begin with relaxing yoga & meditation, walk across the sacred Shangarh meadow, explore local cafes, create art on wooden planks, and dance by the bonfire.",
      schedule: [
        { time: "07:30 AM", activity: "Short & relaxing Yoga and Meditation session in fresh mountain air, followed by hearty breakfast." },
        { time: "10:30 AM", activity: "Visit the legendary Shangarh Meadows and the sacred Shangchul Mahadev Temple. Stroll through pine trails." },
        { time: "01:30 PM", activity: "Charming local café visit in the valley for tea and snacks." },
        { time: "03:30 PM", activity: "Return to homestay for afternoon rest & an expressive wooden plank painting session." },
        { time: "07:30 PM", activity: "Bonfire night with music, dance, and heartfelt circle conversations under starry skies." },
        { time: "09:00 PM", activity: "Celebration Dinner and overnight stay." }
      ],
      image: "/images/real-temple-meadow.jpg"
    },
    {
      day: "Day 3",
      date: "Sunday",
      title: "Yoga, Rupi Raila Waterfall & Return Journey",
      theme: "Renewal & Mountain Memories",
      description: "Final morning yoga session, wholesome breakfast, checkout, and a short 1 KM hike to Rupi Raila Waterfall before departing for Delhi/Chandigarh with full hearts.",
      schedule: [
        { time: "07:30 AM", activity: "Morning Yoga & Meditation session followed by early breakfast and homestay checkout." },
        { time: "10:00 AM", activity: "Enjoy a short picturesque hike (approx. 1 KM) to the roadside gem: Rupi Raila Waterfall." },
        { time: "02:00 PM", activity: "Lunch pitstop and embark on return road journey towards Chandigarh / Delhi via scenic Himachal roads." },
        { time: "Next Morning", activity: "Arrive in Delhi by 4:00 - 5:00 AM with a phone full of photos & videos, and a heart full of lifelong memories." }
      ],
      image: "/images/real-group-mountain.jpg"
    }
  ],

  activities: [
    {
      id: "act-1",
      title: "Shangarh Meadow & Temple Trails",
      category: "Nature & Heritage",
      description: "Stroll barefoot across the sacred Pandava meadow surrounded by cedar forests and visit the historic Shangchul Mahadev temple.",
      duration: "Half Day",
      image: "/images/real-temple-meadow.jpg"
    },
    {
      id: "act-2",
      title: "Barshangarh & Rupi Raila Waterfalls",
      category: "Adventure",
      description: "Hike through wild forest trails to crystal cascades tumbling over rocks, dip your toes and soak in mountain streams.",
      duration: "3-4 Hours",
      image: "/images/real-waterfall-traveler.jpg"
    },
    {
      id: "act-3",
      title: "Wood Plank Painting Workshop",
      category: "Creative Expression",
      description: "Channel your creative spirit by painting personalized mountain sunsets, trees, and quotes on natural Himachali cedar wood planks.",
      duration: "Afternoon Session",
      image: "/images/real-painting-girl-1.jpg"
    },
    {
      id: "act-4",
      title: "Nightly Bonfires & Music Circles",
      category: "Circle & Community",
      description: "Gather around crackling campfires under fairy-lit trees with music, laughter, dancing, and heartfelt conversations.",
      duration: "Every Evening",
      image: "/images/real-bonfire-gathering.jpg"
    },
    {
      id: "act-5",
      title: "Mud Bath & Gentle Yoga in Nature",
      category: "Wellness",
      description: "Gentle morning yoga, pranayama, and natural therapeutic mud bath in pristine Sainj valley mountain atmosphere.",
      duration: "Daily Morning",
      image: "/images/real-forest-trek.jpg"
    },
    {
      id: "act-6",
      title: "Milky Way Stargazing",
      category: "Wonder",
      description: "Zero light pollution gives you breathtaking unobstructed views of constellations, shooting stars, and the Milky Way galaxy.",
      duration: "Post-Dinner",
      image: "/images/real-milkyway-stargazing.jpg"
    }
  ],

  accommodation: {
    name: "Our Shangarh Wooden Homestay",
    type: "Traditional Himalayan Cedar Cottage",
    tagline: "Blooming chamomile gardens, mountain-view balconies, and cozy wooden warmth",
    description: "Our handpicked traditional wooden cottage features handcrafted cedar wood interiors, clean comfortable bedrooms with warm quilts, spacious panoramic balconies with cushions ('Prem Patra' deck), and fairy-lit bonfire spaces overlooking snow-kissed peaks.",
    features: [
      "Blooming chamomile flower garden and sunlit mountain balconies",
      "Ensuite clean washrooms with running hot water geysers",
      "Cozy wooden bedrooms with plush crimson duvets and heated blankets",
      "Dedicated indoor lounge & 'Prem Patra' chill-out balcony decks",
      "Nightly outdoor campfire area with fairy-lit trees and mountain views"
    ],
    gallery: [
      { url: "/images/real-stay-flower-garden.jpg", caption: "Chamomile Flower Garden & Cottage Exterior" },
      { url: "/images/real-stay-balcony-view.jpg", caption: "Panoramic Sun-Deck Balcony Overlooking Valley" },
      { url: "/images/real-stay-bedroom-1.jpg", caption: "Cozy Double Sharing Bedroom with Wooden Beams" },
      { url: "/images/real-stay-bedroom-2.jpg", caption: "Cedar Wood Bedroom with Warm Bedside Lamps" },
      { url: "/images/real-stay-girls-deck.jpg", caption: "Prem Patra Lounging Deck with Valley Panorama" },
      { url: "/images/real-stay-night-bonfire.jpg", caption: "Night Campfire Under Fairy-Lit Apple Tree" },
      { url: "/images/real-stay-night-cottage.jpg", caption: "Homestay Illuminated at Night" },
      { url: "/images/real-stay-sunset.jpg", caption: "Golden Sunset from the Homestay Balcony" }
    ]
  },

  inclusions: [
    "Transportation: Travel by comfortable AC Bus & Mountain Taxi (Ex-Delhi/Chandigarh to Shangarh & Return)",
    "Accommodation: 2 Nights stay in a boutique wooden homestay in Shangarh (Double Sharing)",
    "Meals Included: Day 1 (Breakfast, Lunch & Dinner), Day 2 (Breakfast & Dinner), Day 3 (Breakfast)",
    "Morning & Evening freshly brewed mountain tea & snacks",
    "All sightseeing and entry as per official itinerary",
    "Relaxing Yoga & Meditation sessions in mountain nature",
    "Outdoor Painting workshop with wooden planks and art materials provided",
    "Guided nature treks to Barshangarh Waterfall and Rupi Raila Waterfall",
    "Therapeutic Mud Bath & forest bathing experience",
    "Nightly bonfires with music, dancing, and stargazing",
    "Village & pine forest nature walks with local guidance",
    "Dedicated female trip facilitators ensuring a safe, supportive  environment"
  ],

  exclusions: [
    "Any personal expenses (souvenirs, cafes, laundry, extra snacks)",
    "Any meals not explicitly specified under the inclusions list",
    "Any emergency medical expenses or travel insurance",
    "5% GST applicable additionally on the booking amount"
  ],

  terms: [
    "A 50% advance payment is required to confirm your booking.",
    "The initial booking amount is strictly non-refundable.",
    "The remaining balance must be cleared at least 5 days before the trip departure date.",
    "A valid Government-issued photo ID (Aadhar/Passport/Voter ID) is mandatory for all participants.",
    "All travelers are expected to respect local mountain culture and community safety guidelines."
  ],

  logistics: {
    howToReach: [
      {
        mode: "Included Group AC Bus (Ex-Delhi / Chandigarh)",
        details: "Our package includes comfortable AC bus transportation starting from Akshardham Metro Station / Kashmiri Gate Bus Stand in Delhi at 10:00 PM, with intermediate pickup in Chandigarh around 2:00 AM, connecting smoothly to mountain taxis straight to our homestay in Shangarh."
      },
      {
        mode: "By Flight to Bhuntar (Kullu)",
        details: "Closest airport is Bhuntar Airport (Kullu - 48 km away). From Bhuntar, taxis can bring you through the scenic Sainj valley into Shangarh in about 1.5 to 2 hours."
      },
      {
        mode: "Self-Arrival at Aut Tunnel",
        details: "If you take an independent Volvo bus, alight at Aut Tunnel. We coordinate verified local taxis from Aut Tunnel to Shangarh homestay (approx. 32 km / 1.5 hours)."
      }
    ],
    packingList: [
      "Comfortable sneakers / trekking shoes with good grip",
      "Warm fleece jacket or windbreaker (mountain evenings get pleasantly cool)",
      "Comfortable cottons, dresses, and activewear for yoga and photography",
      "Sunscreen SPF 50, sunglasses, lip balm & personal toiletries",
      "Reusable water bottle & thermos",
      "Power bank for capturing endless photos and videos",
      "Government Photo ID card (Aadhar Card / Passport)"
    ]
  },

  contactInfo: {
    email: "retreats@healingcircle.travel",
    phone: "+91 8586020962", // Official contact number from brochure page 14
    whatsapp: "+91 8586020962",
    address: "Healing Circle Retreats, Shangarh Meadow, Sainj Valley, Kullu, HP – 175134",
    social: {
      instagram: "instagram.com/healingcircle.travel",
      facebook: "facebook.com/healingcircle.travel"
    }
  },

  // The 14 official brochure pages added by the user
  brochurePages: [
    { page: 1, title: "Trip Cover: Shangarh Girls Trip Only", src: "/images/page-1.jpg" },
    { page: 2, title: "About The Trip: Escape into Shant Beauty", src: "/images/page-2.jpg" },
    { page: 3, title: "Key Highlights: 19 Curated Himalayan Experiences", src: "/images/page-3.jpg" },
    { page: 4, title: "Brief Itinerary: 3 Days Ex-Delhi/Chandigarh", src: "/images/page-4.jpg" },
    { page: 5, title: "Day 0: Departure & Overnight Scenic Drive", src: "/images/page-5.jpg" },
    { page: 6, title: "Day 1: Arrival, Barshangarh Waterfall & Sunset", src: "/images/page-6.jpg" },
    { page: 7, title: "Day 2: Yoga, Temple, Meadow & Painting", src: "/images/page-7.jpg" },
    { page: 8, title: "Day 3: Yoga, Rupi Raila Waterfall & Departure", src: "/images/page-8.jpg" },
    { page: 9, title: "Inclusions: Travel, Stay, Meals & Activities", src: "/images/page-9.jpg" },
    { page: 10, title: "Our Stay: 12 Real Photos of Homestay", src: "/images/page-10.jpg" },
    { page: 11, title: "Costing: Starting from ₹6,999 per person", src: "/images/page-11.jpg" },
    { page: 12, title: "Photo Gallery: Real Trip Memories", src: "/images/page-12.jpg" },
    { page: 13, title: "Terms & Conditions & Booking Policy", src: "/images/page-13.jpg" },
    { page: 14, title: "Thank You & Direct Contact: +91 8586020962", src: "/images/page-14.jpg" }
  ]
};
