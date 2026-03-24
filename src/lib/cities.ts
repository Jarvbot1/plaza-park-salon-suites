export interface CityData {
  slug: string
  name: string
  state: string
  tagline: string
  driveTime: string
  driveDistance: string
  direction: string
  ring: 'primary' | 'inner' | 'mid' | 'outer'
  population: string
  keywords: string[]
  description: string
  neighborhoods: string[]
  highways: string[]
  faqs: { question: string; answer: string }[]
}

const ringOrder: Record<CityData['ring'], number> = {
  primary: 0,
  inner: 1,
  mid: 2,
  outer: 3,
}

export const cities: CityData[] = [
  // ── PRIMARY ───────────────────────────────────────────────
  {
    slug: 'irving',
    name: 'Irving',
    state: 'TX',
    tagline: 'Right here in the heart of Irving',
    driveTime: '0-10 min',
    driveDistance: '0-5 miles',
    direction: 'local',
    ring: 'primary',
    population: '256,000+',
    keywords: [
      'salon suites Irving TX',
      'salon suite for rent Irving',
      'private salon Irving',
      'beauty suite Irving Texas',
      'Irving salon suites for lease',
    ],
    description:
      'Plaza Park Salon Suites sits right here in Irving, on the north end of MacArthur Boulevard where the canal district meets Valley Ranch. If you already work in Irving, you know how central this location is — minutes from the entertainment district, Toyota Music Factory, and the Las Colinas business corridor. SH-161 and SH-114 put you within easy reach of clients across the city, and Loop 12 connects you south toward DFW Airport and the Medical District. With forty private suites inside an 8,000-square-foot building, we are one of the most established salon suite facilities in Irving. More than 25 independent professionals already call this home.',
    neighborhoods: [
      'Valley Ranch',
      'Las Colinas',
      'South Irving',
      'Northwest Park',
      'MacArthur Park',
      'Heritage District',
    ],
    highways: ['SH-161', 'SH-114', 'Loop 12', 'N MacArthur Blvd'],
    faqs: [
      {
        question: 'Where exactly in Irving is Plaza Park Salon Suites?',
        answer:
          'We are at 9425 N MacArthur Blvd, Suite 150, in the Valley Ranch area of Irving. The building faces the canal with free parking right outside.',
      },
      {
        question: 'What makes Plaza Park different from other Irving salon suites?',
        answer:
          'Every suite is move-in ready with a styling station, shampoo bowl, and storage included. Your lease covers electricity, water, WiFi, and 24/7 building access. We also offer a four-week free signing bonus for new tenants.',
      },
      {
        question: 'Can I tour Plaza Park today if I live in Irving?',
        answer:
          'We welcome same-day tours when availability allows. Call Brandi Williams, our salon manager, at (469) 917-8050 to check the schedule or book a time that works for you.',
      },
      {
        question: 'How many salon professionals work at Plaza Park?',
        answer:
          'More than 25 independent beauty professionals lease suites here, spanning hair care, barbering, skin care, lash extensions, braiding, waxing, massage, and more.',
      },
    ],
  },
  {
    slug: 'valley-ranch',
    name: 'Valley Ranch',
    state: 'TX',
    tagline: 'In the heart of Valley Ranch',
    driveTime: '2-5 min',
    driveDistance: '0-2 miles',
    direction: 'local',
    ring: 'primary',
    population: '40,000+',
    keywords: [
      'salon suites Valley Ranch TX',
      'Valley Ranch salon suite for rent',
      'beauty suite Valley Ranch',
      'private salon suite Valley Ranch Irving',
      'salon suites near Valley Ranch',
    ],
    description:
      'Plaza Park Salon Suites is a Valley Ranch address. The building sits on North MacArthur Boulevard overlooking the canal, steps from the trails, restaurants, and shops that make this master-planned community one of the most desirable neighborhoods in the DFW metroplex. If you live or work in Valley Ranch, your commute might be measured in blocks rather than miles. The 8,000-square-foot building holds forty private suites occupied by more than 25 specialists in hair, skin, nails, lashes, and wellness. Whether your clients come from the townhomes along the canal or drive in from across Irving, Valley Ranch offers the walkable, upscale atmosphere that elevates a personal-care business.',
    neighborhoods: [
      'Valley Ranch North',
      'Valley Ranch South',
      'Cimarron Park',
      'Canal District',
      'Riverside',
    ],
    highways: ['N MacArthur Blvd', 'SH-161', 'Riverside Dr'],
    faqs: [
      {
        question: 'How close is Plaza Park to the Valley Ranch canal trails?',
        answer:
          'The building is directly on the canal. You can see the water from several of our suites. Clients who walk or bike the trails often discover us that way.',
      },
      {
        question: 'Is parking free at Plaza Park in Valley Ranch?',
        answer:
          'Yes. Free, dedicated parking is available right outside the building at 9425 N MacArthur Blvd, Suite 150. Your clients will never pay for parking.',
      },
      {
        question: 'What is included in a Valley Ranch salon suite lease?',
        answer:
          'Every suite comes with a styling station, shampoo bowl, and storage. Electricity, water, WiFi, parking, and 24/7 access are all included. New tenants receive a four-week signing bonus.',
      },
      {
        question: 'Who manages Plaza Park Salon Suites?',
        answer:
          'Brandi Williams is the salon manager. She handles tours, lease questions, and day-to-day operations. Reach her at (469) 917-8050 or valleyranchsuitetours@gmail.com.',
      },
    ],
  },
  {
    slug: 'las-colinas',
    name: 'Las Colinas',
    state: 'TX',
    tagline: 'Minutes from the Las Colinas Urban Center',
    driveTime: '5-10 min',
    driveDistance: '2-5 miles',
    direction: 'south along MacArthur Blvd',
    ring: 'primary',
    population: '70,000+',
    keywords: [
      'salon suites Las Colinas TX',
      'private salon Las Colinas',
      'beauty suite Las Colinas Irving',
      'Las Colinas salon suite lease',
      'salon suites near Las Colinas Urban Center',
    ],
    description:
      'Las Colinas is one of the most recognized business and residential districts in Texas, and Plaza Park Salon Suites is just a short drive north along MacArthur Boulevard. The Urban Center, Mandalay Canal Walk, and the convention district draw a well-heeled clientele who expect premium service environments. Leasing a suite at Plaza Park puts you within easy reach of that market while keeping your overhead manageable. The drive from O\'Connor Road or the Urban Center takes five to ten minutes on MacArthur — no highway required. Inside the 8,000-square-foot building you will find forty private suites, each move-in ready with a styling station, shampoo bowl, and storage. More than 25 professionals already serve clients here.',
    neighborhoods: [
      'Las Colinas Urban Center',
      'Mandalay Canal',
      'Lake Carolyn',
      'Hackberry Creek',
      'Los Rios',
    ],
    highways: ['N MacArthur Blvd', 'SH-114', 'O\'Connor Rd', 'Rochelle Blvd'],
    faqs: [
      {
        question: 'How far is Plaza Park from the Las Colinas Urban Center?',
        answer:
          'About five to ten minutes straight up MacArthur Boulevard, roughly three miles. No highway merging necessary — it is a direct surface-street drive.',
      },
      {
        question: 'Will my Las Colinas clients find the location convenient?',
        answer:
          'Yes. Clients coming from Las Colinas take MacArthur north and arrive in under ten minutes. Free parking is available right at the door.',
      },
      {
        question: 'What does a suite at Plaza Park cost compared to Las Colinas commercial space?',
        answer:
          'We do not publish rates online because suite sizes vary, but leases include all utilities, WiFi, parking, and 24/7 access. Call Brandi Williams at (469) 917-8050 for current pricing and the four-week signing bonus details.',
      },
      {
        question: 'Can I see the suites before signing a lease?',
        answer:
          'Absolutely. Brandi offers tours throughout the week. Call (469) 917-8050 or email valleyranchsuitetours@gmail.com to schedule a walkthrough.',
      },
    ],
  },

  // ── INNER ─────────────────────────────────────────────────
  {
    slug: 'coppell',
    name: 'Coppell',
    state: 'TX',
    tagline: 'A quick 10-minute drive from Coppell',
    driveTime: '10-15 min',
    driveDistance: '6-9 miles',
    direction: 'south on MacArthur Blvd or Belt Line Rd',
    ring: 'inner',
    population: '44,000+',
    keywords: [
      'salon suites near Coppell TX',
      'Coppell salon suite for rent',
      'private salon suite Coppell area',
      'beauty suite near Coppell Texas',
      'salon suites Coppell Irving',
    ],
    description:
      'Coppell is one of those rare suburbs where family-oriented neighborhoods sit alongside a thriving small-business scene. Beauty professionals from Coppell already make the short drive south to Plaza Park Salon Suites because the route is simple: MacArthur Boulevard or Belt Line Road straight into Valley Ranch, about ten minutes with normal traffic. SH-121 is another option if you are coming from the west side of town. The 8,000-square-foot building holds forty private suites, and every one comes move-in ready with a styling station, shampoo bowl, and storage. Your lease includes electricity, water, WiFi, parking, and 24/7 building access. With a four-week signing bonus and more than 25 professionals already building their businesses here, the short commute from Coppell pays for itself.',
    neighborhoods: [
      'Old Town Coppell',
      'Riverchase',
      'Northlake Woodlands',
      'Coppell Greens',
      'Braewood',
    ],
    highways: ['SH-121', 'Belt Line Rd', 'MacArthur Blvd', 'Sandy Lake Rd'],
    faqs: [
      {
        question: 'How do I get to Plaza Park from Coppell?',
        answer:
          'The quickest route is south on MacArthur Boulevard into Valley Ranch. You can also take Belt Line Road to MacArthur. The drive is about ten minutes and ends at 9425 N MacArthur Blvd, Suite 150, with free parking.',
      },
      {
        question: 'Are there salon suites in Coppell itself?',
        answer:
          'Options in Coppell are limited. Many Coppell-based professionals choose Plaza Park because of the short commute, the move-in ready suites, and the four-week signing bonus that offsets startup costs.',
      },
      {
        question: 'What hours can I access my suite if I commute from Coppell?',
        answer:
          'Tenants have 24/7 building access, so you can set your own hours regardless of when you leave Coppell. Lobby hours are Mon 9-7, Tue-Fri 8-8, and Sat 7-6.',
      },
      {
        question: 'Who should I call to learn more about leasing?',
        answer:
          'Contact Brandi Williams, our salon manager, at (469) 917-8050. She can walk you through suite options, pricing, and schedule a tour at a time that works around your Coppell commute.',
      },
    ],
  },
  {
    slug: 'grapevine',
    name: 'Grapevine',
    state: 'TX',
    tagline: 'Just 15 minutes from Grapevine',
    driveTime: '12-18 min',
    driveDistance: '8-12 miles',
    direction: 'east on SH-114 or SH-121',
    ring: 'inner',
    population: '54,000+',
    keywords: [
      'salon suites near Grapevine TX',
      'Grapevine salon suite for rent',
      'private salon Grapevine area',
      'beauty suite near Grapevine Texas',
      'salon suites Grapevine Irving',
    ],
    description:
      'Grapevine sits at the crossroads of SH-114 and SH-121, which means the drive to Plaza Park Salon Suites is a straight shot east along either highway. Most Grapevine professionals reach us in twelve to fifteen minutes, even during the afternoon rush. The town itself is known for its historic Main Street, the Grapevine Vintage Railroad, and a loyal base of clients who value local, independent businesses. Leasing a suite at Plaza Park lets you tap into that same entrepreneurial spirit while serving a broader DFW clientele. Inside the 8,000-square-foot building you will find forty private suites ready for move-in — styling station, shampoo bowl, and storage included. More than 25 specialists already work here, and a four-week signing bonus makes the transition even easier.',
    neighborhoods: [
      'Historic Downtown Grapevine',
      'Grapevine Lake',
      'Silver Lake',
      'Stone Bridge Oaks',
      'Grapevine Mills',
    ],
    highways: ['SH-114', 'SH-121', 'SH-26', 'Grapevine Mills Blvd'],
    faqs: [
      {
        question: 'How far is Plaza Park Salon Suites from Grapevine?',
        answer:
          'About 15 minutes east via SH-114 to SH-161 south, roughly 10 miles. The route avoids most bottleneck traffic.',
      },
      {
        question: 'I run a booth at a Grapevine salon now. Why switch to a suite?',
        answer:
          'A private suite gives you your own space, your own schedule, and your own branding. At Plaza Park you get a move-in ready suite with all utilities included, plus a four-week signing bonus to ease the transition.',
      },
      {
        question: 'What kind of professionals work at Plaza Park?',
        answer:
          'The building is home to more than 25 specialists covering hair care, barbering, skin care, lash extensions, braiding, waxing, makeup artistry, chiropractic, and massage therapy.',
      },
      {
        question: 'How do I schedule a tour from Grapevine?',
        answer:
          'Call Brandi Williams at (469) 917-8050 or email valleyranchsuitetours@gmail.com. Tours are available throughout the week and usually last about twenty minutes.',
      },
    ],
  },
  {
    slug: 'farmers-branch',
    name: 'Farmers Branch',
    state: 'TX',
    tagline: 'A short drive from Farmers Branch',
    driveTime: '10-15 min',
    driveDistance: '6-10 miles',
    direction: 'west on I-635 to SH-161',
    ring: 'inner',
    population: '37,000+',
    keywords: [
      'salon suites near Farmers Branch TX',
      'Farmers Branch salon suite for rent',
      'private salon Farmers Branch area',
      'beauty suite near Farmers Branch',
      'salon suites Farmers Branch Irving',
    ],
    description:
      'Farmers Branch straddles the I-635 and I-35E corridors, making it one of the most connected suburbs in north Dallas. The drive west to Plaza Park Salon Suites follows I-635 to SH-161 north and takes about ten to fifteen minutes depending on traffic. If you work in Farmers Branch today and want to own your schedule, a private suite at Plaza Park offers the independence without the overhead headaches. The 8,000-square-foot building sits in Valley Ranch with canal views, free parking, and forty suites that come move-in ready — styling station, shampoo bowl, and storage are already installed. Electricity, water, WiFi, and 24/7 access are included in every lease. More than 25 professionals have already made this move, and new tenants start with a four-week signing bonus.',
    neighborhoods: [
      'Mercer Crossing',
      'Brookhaven',
      'Valwood',
      'Town Center',
      'Rawhide Creek',
    ],
    highways: ['I-635 (LBJ)', 'I-35E', 'SH-161', 'Josey Ln', 'Valley View Ln'],
    faqs: [
      {
        question: 'What is the best route from Farmers Branch to Plaza Park?',
        answer:
          'Take I-635 west to SH-161 north, then exit at MacArthur Blvd. The drive is about ten to fifteen minutes and ends at 9425 N MacArthur Blvd, Suite 150, Irving TX 75063.',
      },
      {
        question: 'Do I need to bring my own equipment?',
        answer:
          'Every suite comes with a styling station, shampoo bowl, and storage. You bring your tools and personal supplies — the big-ticket items are already in place.',
      },
      {
        question: 'Is there a minimum lease term?',
        answer:
          'Lease terms vary. Call Brandi Williams at (469) 917-8050 to discuss options that fit your situation. All new leases include a four-week signing bonus.',
      },
      {
        question: 'Can my clients book appointments outside normal business hours?',
        answer:
          'Yes. Tenants have 24/7 building access, so you can see clients early mornings, late evenings, or on Sundays — whatever your business requires.',
      },
    ],
  },

  // ── MID ───────────────────────────────────────────────────
  {
    slug: 'carrollton',
    name: 'Carrollton',
    state: 'TX',
    tagline: 'About 20 minutes from Carrollton',
    driveTime: '18-25 min',
    driveDistance: '12-16 miles',
    direction: 'south on I-35E to SH-161',
    ring: 'mid',
    population: '141,000+',
    keywords: [
      'salon suites near Carrollton TX',
      'Carrollton salon suite for rent',
      'private salon suite Carrollton area',
      'beauty suite near Carrollton Texas',
      'salon suites Carrollton Irving',
    ],
    description:
      'Carrollton spans a wide swath of north Dallas between I-35E and the Bush Turnpike, known for its Korean dining corridor, historic downtown square, and rapidly growing population. Beauty professionals from Carrollton reach Plaza Park Salon Suites in about twenty minutes by taking I-35E south to I-635 west, then hopping on SH-161 north. The President George Bush Turnpike is another clean route if you are starting from the Hebron or Old Denton Road area. The commute is against the morning rush, which helps. Inside the 8,000-square-foot Valley Ranch building you will find forty private suites, each move-in ready with a styling station, shampoo bowl, and storage. More than 25 professionals serve clients here daily, and every new lease includes a four-week signing bonus.',
    neighborhoods: [
      'Downtown Carrollton',
      'Hebron',
      'Castle Hills',
      'Indian Creek',
      'Rosemeade',
      'Trinity Mills',
    ],
    highways: ['I-35E', 'President George Bush Turnpike', 'SH-161', 'Josey Ln', 'Old Denton Rd'],
    faqs: [
      {
        question: 'How far is Plaza Park from Carrollton?',
        answer:
          'About twenty minutes and fourteen miles. The most direct route follows I-35E south to I-635 west, then SH-161 north to the MacArthur Blvd exit.',
      },
      {
        question: 'Is the commute from Carrollton manageable during rush hour?',
        answer:
          'Most of the drive runs against peak traffic flow, so it stays close to twenty minutes even during busy periods. Several of our tenants make this drive daily.',
      },
      {
        question: 'What utilities are included in the lease?',
        answer:
          'Electricity, water, WiFi, free parking, and 24/7 building access are all included. Your only extra costs are your own products and tools.',
      },
      {
        question: 'How do I get started with a lease from Carrollton?',
        answer:
          'Call Brandi Williams at (469) 917-8050 to schedule a tour. She will show you available suites, walk through lease terms, and explain the four-week signing bonus.',
      },
    ],
  },
  {
    slug: 'lewisville',
    name: 'Lewisville',
    state: 'TX',
    tagline: 'Just 20 minutes from Lewisville',
    driveTime: '18-25 min',
    driveDistance: '14-18 miles',
    direction: 'south on I-35E to SH-121 to SH-161',
    ring: 'mid',
    population: '111,000+',
    keywords: [
      'salon suites near Lewisville TX',
      'Lewisville salon suite for rent',
      'private salon Lewisville area',
      'beauty suite near Lewisville Texas',
      'salon suites Lewisville Irving',
    ],
    description:
      'Lewisville has grown from a lakeside town into one of the largest cities in Denton County, with a strong mix of young professionals and established families. The drive from Lewisville to Plaza Park Salon Suites follows I-35E south to SH-121, then SH-161 south into Valley Ranch — about twenty minutes on a clear day. You can also take the Dallas North Tollway south if you are starting near Vista Ridge Mall. The 8,000-square-foot building offers forty private suites, all move-in ready with a styling station, shampoo bowl, and storage. Utilities, WiFi, parking, and 24/7 access are included. If you have been thinking about leaving a commission-based salon, the four-week signing bonus and the community of more than 25 independent professionals make Plaza Park a compelling next step.',
    neighborhoods: [
      'Old Town Lewisville',
      'Castle Hills',
      'Vista Ridge',
      'Highland Village border',
      'Lakewood Hills',
    ],
    highways: ['I-35E', 'SH-121', 'SH-161', 'Business 121', 'FM 3040'],
    faqs: [
      {
        question: 'What is the best route from Lewisville to Plaza Park?',
        answer:
          'Take I-35E south to SH-121 west, then SH-161 south. Exit at MacArthur Blvd. The trip is about twenty minutes and sixteen miles.',
      },
      {
        question: 'Will Lewisville clients come to Valley Ranch for appointments?',
        answer:
          'Many of our professionals serve clients from across the metroplex. Valley Ranch is easy to reach from Lewisville, and the free parking and canal-side setting make a strong first impression.',
      },
      {
        question: 'Do I need a cosmetology license to lease a suite?',
        answer:
          'Yes. All beauty professionals must hold a valid Texas license for their discipline. The building also houses chiropractors and massage therapists with their respective credentials.',
      },
      {
        question: 'How can I tour the suites?',
        answer:
          'Call Brandi Williams at (469) 917-8050 or email valleyranchsuitetours@gmail.com. Tours are available most days and take about twenty minutes.',
      },
    ],
  },
  {
    slug: 'flower-mound',
    name: 'Flower Mound',
    state: 'TX',
    tagline: 'About 20 minutes from Flower Mound',
    driveTime: '18-25 min',
    driveDistance: '12-17 miles',
    direction: 'south on SH-121 to SH-161',
    ring: 'mid',
    population: '79,000+',
    keywords: [
      'salon suites near Flower Mound TX',
      'Flower Mound salon suite for rent',
      'private salon suite Flower Mound area',
      'beauty suite near Flower Mound Texas',
      'salon suites Flower Mound Irving',
    ],
    description:
      'Flower Mound sits northwest of DFW Airport with Grapevine Lake along its eastern edge, and the community has long been known for its high household incomes and well-kept neighborhoods. Beauty professionals here often struggle to find independent suite space locally. Plaza Park Salon Suites is about twenty minutes south via SH-121 to SH-161, a straightforward highway-to-highway route that bypasses most surface-street congestion. The 8,000-square-foot building in Valley Ranch holds forty private suites, each outfitted with a styling station, shampoo bowl, and storage. Electricity, water, WiFi, parking, and 24/7 access come standard with every lease. More than 25 specialists already work here, and a four-week signing bonus helps offset the cost of transitioning from a booth rental or commission arrangement.',
    neighborhoods: [
      'Bridlewood',
      'Wellington',
      'Tour 18',
      'Lakeside DFW',
      'Canyon Falls',
      'Flower Mound Town Center',
    ],
    highways: ['SH-121', 'SH-161', 'FM 2499', 'Long Prairie Rd', 'FM 1171'],
    faqs: [
      {
        question: 'How do I drive from Flower Mound to Plaza Park?',
        answer:
          'Head south on FM 2499 to SH-121, then take SH-161 south. Exit MacArthur Blvd and look for 9425 N MacArthur Blvd, Suite 150. The drive runs about twenty minutes.',
      },
      {
        question: 'Are there salon suites closer to Flower Mound?',
        answer:
          'A few options exist near Grapevine and Lewisville, but the move-in ready suites, included utilities, canal views, and four-week signing bonus at Plaza Park are hard to match. Many Flower Mound professionals make the commute daily.',
      },
      {
        question: 'What size suites are available?',
        answer:
          'Suite sizes vary within the forty-unit building. Brandi Williams can show you the current openings during a tour. Call (469) 917-8050 to set one up.',
      },
      {
        question: 'Can I keep my Flower Mound clientele if I move to Valley Ranch?',
        answer:
          'Absolutely. The twenty-minute drive is easy for most DFW residents, and the free parking and professional setting tend to impress clients when they visit.',
      },
    ],
  },
  {
    slug: 'euless',
    name: 'Euless',
    state: 'TX',
    tagline: 'About 15 minutes from Euless',
    driveTime: '12-18 min',
    driveDistance: '8-12 miles',
    direction: 'north on SH-121 to SH-161',
    ring: 'mid',
    population: '61,000+',
    keywords: [
      'salon suites near Euless TX',
      'Euless salon suite for rent',
      'private salon Euless area',
      'beauty suite near Euless Texas',
      'salon suites Euless Irving',
    ],
    description:
      'Euless anchors the mid-cities area between Dallas and Fort Worth, sharing borders with Bedford and Grapevine and sitting just south of DFW Airport. The route to Plaza Park Salon Suites heads north on SH-121 to SH-161, a clean highway drive of about fifteen minutes. The mid-cities population gives you a deep pool of potential clients, and leasing at Plaza Park positions you near the intersection of several major highways. Inside the 8,000-square-foot building in Valley Ranch you will find forty private suites, each equipped with a styling station, shampoo bowl, and storage. Electricity, water, WiFi, parking, and 24/7 access are included. The four-week signing bonus and more than 25 professionals already on site create a ready-made community for your business.',
    neighborhoods: [
      'Midway District',
      'Bear Creek',
      'Lakewood Trails',
      'Industrial Boulevard corridor',
      'North Euless',
    ],
    highways: ['SH-121', 'SH-183', 'SH-10', 'SH-161', 'Pipeline Rd'],
    faqs: [
      {
        question: 'How far is Plaza Park from Euless?',
        answer:
          'About fifteen minutes north via SH-121 to SH-161, roughly ten miles. The route skirts the east side of DFW Airport and drops you right into Valley Ranch.',
      },
      {
        question: 'Does Plaza Park offer suites for barbers?',
        answer:
          'Yes. Several barbers lease suites here alongside hairstylists, estheticians, lash techs, braiders, and wellness professionals. Each suite is private and fully equipped.',
      },
      {
        question: 'What is the signing bonus?',
        answer:
          'New tenants receive four weeks free as a signing bonus. It applies to your first lease term and helps you transition without a gap in income.',
      },
      {
        question: 'How do I schedule a tour from Euless?',
        answer:
          'Call Brandi Williams at (469) 917-8050. She typically has availability throughout the week and can show you open suites in about twenty minutes.',
      },
    ],
  },
  {
    slug: 'bedford',
    name: 'Bedford',
    state: 'TX',
    tagline: 'About 18 minutes from Bedford',
    driveTime: '15-22 min',
    driveDistance: '10-14 miles',
    direction: 'north on SH-121 to SH-161',
    ring: 'mid',
    population: '49,000+',
    keywords: [
      'salon suites near Bedford TX',
      'Bedford salon suite for rent',
      'private salon Bedford area',
      'beauty suite near Bedford Texas',
      'salon suites Bedford Irving',
    ],
    description:
      'Bedford sits in the heart of the HEB (Hurst-Euless-Bedford) corridor, a suburban stretch with steady demand for personal-care services. SH-121 runs right through town, giving you a direct fifteen-to-twenty-minute highway route north to Plaza Park Salon Suites in Valley Ranch. The area around Bedford Boys Ranch Park and Harwood Road is packed with retail and restaurants, so you already know the local market supports independent businesses. At Plaza Park, the 8,000-square-foot building holds forty private suites that come move-in ready — styling station, shampoo bowl, and storage installed. Every lease includes electricity, water, WiFi, parking, and 24/7 access. A four-week signing bonus and a community of more than 25 professionals make the switch from booth rental a practical decision, not just a dream.',
    neighborhoods: [
      'Bedford Heights',
      'Harwood corridor',
      'Bedford Commons',
      'Stonegate',
      'Shady Brook',
    ],
    highways: ['SH-121', 'SH-183', 'SH-10', 'Airport Freeway', 'Harwood Rd'],
    faqs: [
      {
        question: 'What is the drive from Bedford to Plaza Park like?',
        answer:
          'Take SH-121 north past DFW Airport to SH-161 north, then exit at MacArthur Blvd. It is about eighteen minutes and twelve miles with mostly highway driving.',
      },
      {
        question: 'Can I bring my own furniture and decor?',
        answer:
          'Yes. The suite comes with a styling station, shampoo bowl, and storage, but you are welcome to personalize the space to match your brand.',
      },
      {
        question: 'Is there a community of professionals at Plaza Park?',
        answer:
          'More than 25 independent specialists work here. The mix includes hair stylists, barbers, estheticians, lash techs, braiders, waxing specialists, massage therapists, and a chiropractor.',
      },
      {
        question: 'How do I contact the salon manager?',
        answer:
          'Brandi Williams manages the building. Call her at (469) 917-8050 or email valleyranchsuitetours@gmail.com to schedule a tour or ask questions.',
      },
    ],
  },
  {
    slug: 'hurst',
    name: 'Hurst',
    state: 'TX',
    tagline: 'About 18 minutes from Hurst',
    driveTime: '15-22 min',
    driveDistance: '10-14 miles',
    direction: 'north on SH-121 to SH-161',
    ring: 'mid',
    population: '39,000+',
    keywords: [
      'salon suites near Hurst TX',
      'Hurst salon suite for rent',
      'private salon Hurst area',
      'beauty suite near Hurst Texas',
      'salon suites Hurst Irving',
    ],
    description:
      'Hurst rounds out the HEB triangle on its western side, anchored by North East Mall and a dense residential grid where beauty professionals have served loyal clients for decades. The drive to Plaza Park Salon Suites follows SH-121 north, skirting DFW Airport before connecting to SH-161 — about eighteen minutes door to door. If you are looking for a private suite that lets you keep your Hurst clientele while growing into the broader DFW market, Plaza Park delivers. The 8,000-square-foot building in Valley Ranch offers forty move-in ready suites with a styling station, shampoo bowl, and storage in each. All utilities, WiFi, parking, and 24/7 access are included. New tenants receive a four-week signing bonus, and more than 25 professionals already call this building home.',
    neighborhoods: [
      'North East Mall area',
      'Bellaire Park',
      'Brookside',
      'Redbud',
      'Precinct Line corridor',
    ],
    highways: ['SH-121', 'SH-183', 'Pipeline Rd', 'Precinct Line Rd', 'SH-10'],
    faqs: [
      {
        question: 'How do I get to Plaza Park from Hurst?',
        answer:
          'Head north on SH-121 past DFW Airport, merge onto SH-161 north, and exit at MacArthur Blvd. The address is 9425 N MacArthur Blvd, Suite 150, Irving TX 75063. Free parking on site.',
      },
      {
        question: 'Will my Hurst clients follow me to Valley Ranch?',
        answer:
          'The eighteen-minute drive is comparable to crossing town in most DFW cities. Clients who value your work will make the trip, especially when they see the professional setting and easy parking.',
      },
      {
        question: 'What makes a salon suite better than booth rental?',
        answer:
          'You get a private, lockable space with your own key. You set your own hours, choose your own products, and keep your entire service revenue. The four-week signing bonus at Plaza Park lowers your startup risk.',
      },
      {
        question: 'Who do I talk to about available suites?',
        answer:
          'Brandi Williams, the salon manager, handles all tours and lease inquiries. Reach her at (469) 917-8050 or valleyranchsuitetours@gmail.com.',
      },
    ],
  },

  // ── OUTER ─────────────────────────────────────────────────
  {
    slug: 'plano',
    name: 'Plano',
    state: 'TX',
    tagline: 'About 25 minutes from Plano',
    driveTime: '22-30 min',
    driveDistance: '18-24 miles',
    direction: 'south on Dallas North Tollway to SH-161',
    ring: 'outer',
    population: '285,000+',
    keywords: [
      'salon suites near Plano TX',
      'Plano salon suite for rent',
      'private salon suite Plano area',
      'beauty suite near Plano Texas',
      'salon suites Plano Irving',
    ],
    description:
      'Plano is one of the largest cities in the DFW metroplex, stretching from the Legacy West corridor to the neighborhoods along Spring Creek. The concentration of corporate headquarters and high-income households creates strong demand for premium personal-care services. The drive to Plaza Park Salon Suites takes about twenty-five minutes: south on the Dallas North Tollway to SH-121, then SH-161 south into Valley Ranch. If you start from the Legacy or Shops at Legacy area, you can also pick up the Sam Rayburn Tollway west to SH-161. The 8,000-square-foot building holds forty private suites, all move-in ready with a styling station, shampoo bowl, and storage. More than 25 professionals already work here, and new tenants start with a four-week signing bonus that makes the transition from Plano practical.',
    neighborhoods: [
      'Legacy West',
      'Shops at Legacy',
      'Downtown Plano',
      'Willow Bend',
      'Preston Hollow',
      'Spring Creek',
    ],
    highways: [
      'Dallas North Tollway',
      'SH-121 (Sam Rayburn Tollway)',
      'SH-161',
      'US-75 (Central Expressway)',
      'President George Bush Turnpike',
    ],
    faqs: [
      {
        question: 'How far is Plaza Park Salon Suites from Plano?',
        answer:
          'About 25 minutes via the Dallas North Tollway to SH-161, roughly 20 miles.',
      },
      {
        question: 'Is the drive from Plano worth it?',
        answer:
          'Many of our professionals make this drive daily. The four-week signing bonus, canal views, and move-in ready suites make the commute worthwhile.',
      },
      {
        question: 'How do I get to Plaza Park from Plano?',
        answer:
          'Take the Dallas North Tollway south to SH-121, then SH-161 south. Exit at MacArthur Blvd. Free parking when you arrive.',
      },
      {
        question: 'Can I lease a suite if I live in Plano?',
        answer:
          'Absolutely. Several of our 25+ professionals commute from across DFW. Call Brandi at (469) 917-8050 to schedule a tour.',
      },
    ],
  },
  {
    slug: 'frisco',
    name: 'Frisco',
    state: 'TX',
    tagline: 'About 30 minutes from Frisco',
    driveTime: '28-38 min',
    driveDistance: '25-32 miles',
    direction: 'south on Dallas North Tollway to SH-121 to SH-161',
    ring: 'outer',
    population: '220,000+',
    keywords: [
      'salon suites near Frisco TX',
      'Frisco salon suite for rent',
      'private salon suite Frisco area',
      'beauty suite near Frisco Texas',
      'salon suites Frisco Irving',
    ],
    description:
      'Frisco is the fastest-growing city in the DFW metroplex, fueled by the PGA headquarters, the Star district, and an influx of young families and tech workers. The beauty market here is competitive, and many professionals find that independent suite options in Frisco come with premium price tags. Plaza Park Salon Suites in Valley Ranch offers an alternative: a thirty-minute drive south on the Dallas North Tollway to SH-121 west, then SH-161 south. The 8,000-square-foot building provides forty private suites, each move-in ready with a styling station, shampoo bowl, and storage. Utilities, WiFi, parking, and 24/7 access are all included in the lease. With more than 25 professionals already on site and a four-week signing bonus for new tenants, the commute from Frisco trades a few extra minutes on the road for meaningful savings and a supportive environment.',
    neighborhoods: [
      'The Star District',
      'Stonebriar',
      'Frisco Square',
      'Plantation Resort',
      'Panther Creek',
      'Phillips Creek Ranch',
    ],
    highways: [
      'Dallas North Tollway',
      'SH-121 (Sam Rayburn Tollway)',
      'SH-161',
      'US-380',
      'Preston Rd',
    ],
    faqs: [
      {
        question: 'How long is the drive from Frisco to Plaza Park?',
        answer:
          'About thirty minutes via the Dallas North Tollway south to SH-121 west, then SH-161 south. The route is roughly twenty-eight miles and mostly highway.',
      },
      {
        question: 'Why would I commute from Frisco instead of leasing locally?',
        answer:
          'Frisco suite prices tend to run higher, and availability is limited. At Plaza Park, you get a move-in ready suite with all utilities included, a four-week signing bonus, and a canal-side setting that clients love — often at a lower total cost than comparable Frisco options.',
      },
      {
        question: 'Can I see the building before committing?',
        answer:
          'Of course. Brandi Williams offers tours throughout the week. Call (469) 917-8050 to find a time that fits your schedule.',
      },
      {
        question: 'What services are represented at Plaza Park?',
        answer:
          'More than 25 professionals work here across hair care, barbering, skin care, lash extensions, braiding, waxing, makeup, chiropractic, and massage. The diversity creates referral opportunities among tenants.',
      },
    ],
  },
  {
    slug: 'dallas',
    name: 'Dallas',
    state: 'TX',
    tagline: 'About 20 minutes from Downtown Dallas',
    driveTime: '18-30 min',
    driveDistance: '12-20 miles',
    direction: 'west on I-635 or SH-183 to SH-161',
    ring: 'outer',
    population: '1,300,000+',
    keywords: [
      'salon suites near Dallas TX',
      'Dallas salon suite for rent',
      'private salon suite Dallas area',
      'beauty suite near Dallas Texas',
      'salon suites Dallas Irving',
    ],
    description:
      'Dallas is the economic engine of North Texas, and beauty professionals across the city serve a diverse, demanding clientele. Whether you work in Uptown, Oak Lawn, Deep Ellum, or the Design District, the drive to Plaza Park Salon Suites in Valley Ranch takes roughly twenty to thirty minutes depending on your starting point. I-635 west to SH-161 north is the most common route from north Dallas. From downtown or the Medical District, SH-183 west connects to SH-161 as well. The 8,000-square-foot building holds forty private suites, all move-in ready with a styling station, shampoo bowl, and storage. Utilities, WiFi, parking, and 24/7 access are included with every lease. More than 25 professionals work here, serving clients from across the metroplex. A four-week signing bonus makes the transition from a Dallas booth or commission arrangement easier on your bottom line.',
    neighborhoods: [
      'Uptown',
      'Oak Lawn',
      'Deep Ellum',
      'Design District',
      'North Dallas',
      'Medical District',
    ],
    highways: ['I-635 (LBJ)', 'SH-183', 'SH-161', 'I-35E', 'Dallas North Tollway'],
    faqs: [
      {
        question: 'How do I get to Plaza Park from Dallas?',
        answer:
          'From north Dallas, take I-635 west to SH-161 north and exit at MacArthur Blvd. From downtown, take SH-183 west to SH-161 north. Either route runs about twenty to twenty-five minutes.',
      },
      {
        question: 'Is Valley Ranch easy for my Dallas clients to find?',
        answer:
          'Yes. The building is right off MacArthur Blvd at 9425 N MacArthur Blvd, Suite 150. Free parking is available on site, and the canal-side location is distinctive and easy to remember.',
      },
      {
        question: 'Are the suites large enough for a full Dallas clientele?',
        answer:
          'The suites are designed for one-on-one service, which is the salon-suite model. Each comes equipped with a styling station, shampoo bowl, and storage. Suite sizes vary — call Brandi at (469) 917-8050 to find the right fit.',
      },
      {
        question: 'What is the four-week signing bonus?',
        answer:
          'New tenants receive four weeks free on their lease. It gives you time to move, redirect your clients, and build revenue without paying rent from day one.',
      },
    ],
  },
  {
    slug: 'arlington',
    name: 'Arlington',
    state: 'TX',
    tagline: 'About 25 minutes from Arlington',
    driveTime: '22-32 min',
    driveDistance: '18-25 miles',
    direction: 'east on I-30 to SH-161 north',
    ring: 'outer',
    population: '394,000+',
    keywords: [
      'salon suites near Arlington TX',
      'Arlington salon suite for rent',
      'private salon suite Arlington area',
      'beauty suite near Arlington Texas',
      'salon suites Arlington Irving',
    ],
    description:
      'Arlington sits between Dallas and Fort Worth, home to AT&T Stadium, Globe Life Field, and a population pushing four hundred thousand. The entertainment district draws visitors from across Texas, and beauty professionals here serve a broad, sports-and-event-driven clientele. The drive to Plaza Park Salon Suites follows I-30 east to SH-360 north or SH-161 north — about twenty-five minutes depending on where you start. From the UTA campus area, SH-360 to SH-183 to SH-161 is another option. Once you arrive in Valley Ranch, the 8,000-square-foot building holds forty private suites, each move-in ready with a styling station, shampoo bowl, and storage. Utilities, WiFi, parking, and 24/7 access are part of every lease, and a four-week signing bonus welcomes new tenants.',
    neighborhoods: [
      'Entertainment District',
      'Downtown Arlington',
      'North Arlington',
      'Dalworthington Gardens',
      'Pantego',
      'UTA area',
    ],
    highways: ['I-30', 'SH-360', 'SH-161', 'SH-183', 'I-20', 'Division St'],
    faqs: [
      {
        question: 'How far is Plaza Park from Arlington?',
        answer:
          'About twenty-five minutes via I-30 east to SH-161 north, roughly twenty miles depending on your starting point in Arlington.',
      },
      {
        question: 'Is there enough demand in Valley Ranch for an Arlington-based professional?',
        answer:
          'Valley Ranch and the surrounding Irving area have strong demographics for personal care. You also draw from Coppell, Las Colinas, and Grapevine — a wider client pool than most single-city locations offer.',
      },
      {
        question: 'What is included in the lease at Plaza Park?',
        answer:
          'A styling station, shampoo bowl, and storage come with the suite. The lease also covers electricity, water, WiFi, parking, and 24/7 building access. New tenants get four weeks free.',
      },
      {
        question: 'How do I book a tour from Arlington?',
        answer:
          'Call Brandi Williams, the salon manager, at (469) 917-8050. She can set up a tour that works with your schedule and answer any questions about the commute.',
      },
    ],
  },
  {
    slug: 'fort-worth',
    name: 'Fort Worth',
    state: 'TX',
    tagline: 'About 35 minutes from Fort Worth',
    driveTime: '30-40 min',
    driveDistance: '30-40 miles',
    direction: 'east on I-30 or I-820 to SH-121 to SH-161',
    ring: 'outer',
    population: '935,000+',
    keywords: [
      'salon suites near Fort Worth TX',
      'Fort Worth salon suite for rent',
      'private salon suite Fort Worth area',
      'beauty suite near Fort Worth Texas',
      'salon suites Fort Worth Irving',
    ],
    description:
      'Fort Worth is the second-largest city in the metroplex, with a character all its own — from the Stockyards to the Cultural District to the booming Alliance corridor in the north. The drive to Plaza Park Salon Suites runs east along I-30 to SH-161 north, or up I-820 to SH-121 east to SH-161 if you are starting from north Fort Worth. Either way, expect about thirty-five minutes of highway driving. That may sound like a stretch, but the economics often work in your favor: the four-week signing bonus, included utilities (electricity, water, WiFi), free parking, and 24/7 access at Plaza Park can save you thousands compared to premium Fort Worth suite locations. The 8,000-square-foot building holds forty suites, all move-in ready with a styling station, shampoo bowl, and storage. More than 25 professionals already make the commute work.',
    neighborhoods: [
      'Fort Worth Stockyards',
      'Cultural District',
      'Sundance Square',
      'North Fort Worth',
      'Alliance corridor',
      'TCU area',
    ],
    highways: ['I-30', 'I-820', 'SH-121', 'SH-161', 'I-35W', 'SH-183'],
    faqs: [
      {
        question: 'Is the drive from Fort Worth to Valley Ranch realistic for a daily commute?',
        answer:
          'Several of our professionals make similar commutes across the metroplex. The drive follows I-30 east to SH-161 north, about thirty-five minutes, mostly highway. Many find the savings and suite quality worth the time.',
      },
      {
        question: 'How does Plaza Park compare to Fort Worth salon suites?',
        answer:
          'The four-week signing bonus, included utilities, and canal-side setting differentiate Plaza Park. You get a move-in ready suite with a styling station, shampoo bowl, and storage — no hidden fees for electricity or WiFi.',
      },
      {
        question: 'Can I keep my Fort Worth clients while working in Valley Ranch?',
        answer:
          'Absolutely. Clients who trust your work will follow you. The address at 9425 N MacArthur Blvd is easy to navigate to, with free parking and a professional atmosphere that makes a strong impression.',
      },
      {
        question: 'Who handles lease questions?',
        answer:
          'Brandi Williams is the salon manager and your main point of contact. Call (469) 917-8050 or email valleyranchsuitetours@gmail.com to discuss availability and terms.',
      },
    ],
  },
  {
    slug: 'richardson',
    name: 'Richardson',
    state: 'TX',
    tagline: 'About 25 minutes from Richardson',
    driveTime: '20-28 min',
    driveDistance: '16-22 miles',
    direction: 'west on I-635 to SH-161',
    ring: 'outer',
    population: '121,000+',
    keywords: [
      'salon suites near Richardson TX',
      'Richardson salon suite for rent',
      'private salon suite Richardson area',
      'beauty suite near Richardson Texas',
      'salon suites Richardson Irving',
    ],
    description:
      'Richardson is a tech-corridor city northeast of Dallas, home to the Telecom Corridor, UTD, and a growing dining scene along Main Street. Beauty professionals here serve a highly educated, dual-income demographic that values quality and convenience. The drive to Plaza Park Salon Suites follows I-635 west to SH-161 north — about twenty-five minutes depending on LBJ traffic. The President George Bush Turnpike is an alternate route from the north end of Richardson. Inside the 8,000-square-foot Valley Ranch building you will find forty private suites, each move-in ready with a styling station, shampoo bowl, and storage. Every lease includes electricity, water, WiFi, parking, and 24/7 access. More than 25 professionals already work here, and a four-week signing bonus gives new tenants breathing room to build their client base.',
    neighborhoods: [
      'Telecom Corridor',
      'UTD area',
      'Downtown Richardson',
      'Canyon Creek',
      'Breckinridge Park',
      'Spring Valley',
    ],
    highways: [
      'I-635 (LBJ)',
      'US-75 (Central Expressway)',
      'President George Bush Turnpike',
      'SH-161',
      'Coit Rd',
    ],
    faqs: [
      {
        question: 'How do I get from Richardson to Plaza Park?',
        answer:
          'The most direct route is I-635 west to SH-161 north, exiting at MacArthur Blvd. From north Richardson, you can also take the President George Bush Turnpike west to SH-161. Either way, expect about twenty-five minutes.',
      },
      {
        question: 'Does the LBJ traffic make this commute difficult?',
        answer:
          'The I-635 express lanes help during peak hours. Many of our Richardson-area tenants stagger their schedules to avoid the worst traffic — and 24/7 building access makes that flexibility possible.',
      },
      {
        question: 'What kind of suites are available?',
        answer:
          'All forty suites come with a styling station, shampoo bowl, and storage. Sizes vary. Brandi Williams can walk you through current openings — call (469) 917-8050 to arrange a tour.',
      },
      {
        question: 'Is there a signing bonus for new tenants?',
        answer:
          'Yes. Every new lease includes four weeks free. Combined with the included utilities and 24/7 access, it makes the transition from Richardson practical and affordable.',
      },
    ],
  },
]

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug)
}

export function getNearbyCities(slug: string, limit = 6): CityData[] {
  const current = getCityBySlug(slug)
  if (!current) return cities.slice(0, limit)

  const currentRingOrder = ringOrder[current.ring]

  return cities
    .filter((c) => c.slug !== slug)
    .sort((a, b) => {
      const distA = Math.abs(ringOrder[a.ring] - currentRingOrder)
      const distB = Math.abs(ringOrder[b.ring] - currentRingOrder)
      if (distA !== distB) return distA - distB
      if (a.ring === current.ring && b.ring !== current.ring) return -1
      if (b.ring === current.ring && a.ring !== current.ring) return 1
      return 0
    })
    .slice(0, limit)
}
