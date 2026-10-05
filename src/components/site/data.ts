import catConstruction from "@/assets/cat-construction.jpg";
import catManufacturing from "@/assets/cat-manufacturing.jpg";
import catOilGas from "@/assets/cat-oilgas.jpg";
import catTransport from "@/assets/cat-transport.jpg";
import catFacilities from "@/assets/cat-facilities.jpg";
import catHealthcare from "@/assets/cat-healthcare.jpg";
import catHospitality from "@/assets/cat-hospitality.jpg";
import catFinance from "@/assets/cat-finance.jpg";
import catAgriculture from "@/assets/cat-agriculture.jpg";
import catSecurity from "@/assets/cat-security.jpg";
import catRetail from "@/assets/cat-retail.jpg";
import catLogistics from "@/assets/cat-logistics.jpg";

import logoKharafiNational from "@/assets/clients/client-kharafi-national.png";
import logoKossanRubber from "@/assets/clients/client-kossan-rubber.png";
import logoAgility from "@/assets/clients/client-agility.jpg";
import logoUnileverGulf from "@/assets/clients/client-unilever-gulf.png";
import logoDubaiContracting from "@/assets/clients/client-dubai-contracting.png";
import logoLandmarkGroup from "@/assets/clients/client-landmark-group.png";
import logoAlFuttaim from "@/assets/clients/client-al-futtaim.png";
import logoMarriottInternational from "@/assets/clients/client-marriott-international.png";
import logoNassCorporation from "@/assets/clients/client-nass-corporation.png";
import logoBahrainFacilityServices from "@/assets/clients/client-bahrain-facility-services.png";
import logoAlmoayyedContracting from "@/assets/clients/client-almoayyed-contracting.png";
import logoCrownePlazaKuwait from "@/assets/clients/client-crowne-plaza-kuwait.jpg";
import logoAlJaberEngineering from "@/assets/clients/client-al-jaber-engineering.png";
import logoQatarAirways from "@/assets/clients/client-qatar-airways.png";
import logoAbdulLatifJameel from "@/assets/clients/client-abdul-latif-jameel.png";
import logoAlfanar from "@/assets/clients/client-alfanar.png";
import logoAlmarai from "@/assets/clients/client-almarai.png";
import logoAlghanimIndustries from "@/assets/clients/client-alghanim-industries.jpg";
import logoGentingMalaysia from "@/assets/clients/client-genting-malaysia.jpg";
import logoSunwayConstruction from "@/assets/clients/client-sunway-construction.jpg";
import logoTopGlove from "@/assets/clients/client-top-glove.jpg";
import logoAjinomotoMalaysia from "@/assets/clients/client-ajinomoto-malaysia.jpg";
import logoGulfHotelsGroup from "@/assets/clients/client-gulf-hotels-group.jpg";
import logoMcdonaldsBahrain from "@/assets/clients/client-mcdonalds-bahrain.jpg";
import logoHolidayInnDoha from "@/assets/clients/client-holiday-inn-doha.jpg";
import logoCrownePlazaDoha from "@/assets/clients/client-crowne-plaza-doha.jpg";
import logoMarriottRiyadh from "@/assets/clients/client-marriott-riyadh.jpg";
import logoAlBawani from "@/assets/clients/client-al-bawani.jpg";

export type NavLink = { label: string; href: string };
export type NavItem = NavLink | { label: string; href: string; children: NavLink[] };

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/introduction",
    children: [
      { label: "Introduction", href: "/introduction" },
      { label: "Chairman's Message", href: "/chairman-message" },
      { label: "Sister Concerns", href: "/sister-concerns" },
      { label: "Mission, Vision & Core Values", href: "/mission-vision" },
      { label: "Certificates", href: "/certificates" },
    ],
  },
  {
    label: "What We Do",
    href: "/what-we-do",
    children: [
      { label: "Introduction", href: "/what-we-do" },
      { label: "Organization Chart", href: "/organization-chart" },
      { label: "Our Service Categories", href: "/service-categories" },
    ],
  },
  { label: "Recruitment Process", href: "/process" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

// Get a free access key at https://web3forms.com using info@takuraoverseas.com,
// then paste it here. This powers the Hire Talent form (including CV attachments) -
// submissions are emailed straight to CONTACT.email once this is set.
export const WEB3FORMS_ACCESS_KEY = "REPLACE_WITH_WEB3FORMS_ACCESS_KEY";

export const CONTACT = {
  address: "Manbhawan-14, Lalitpur, Nepal",
  phones: ["+977 1 4529674", "+977 1 4529675"],
  email: "info@takuraoverseas.com",
  website: "www.takuraoverseas.com",
  mapHref: "https://www.google.com/maps/search/?api=1&query=Manbhawan-14%2C%20Lalitpur%2C%20Nepal",
  licence: "1538/078/79",
};

export const CATEGORIES = [
  { name: "Construction", image: catConstruction, alt: "Construction workers reviewing site plans" },
  { name: "Manufacturing", image: catManufacturing, alt: "Technicians on a modern manufacturing floor" },
  { name: "Oil & Gas Industries", image: catOilGas, alt: "Engineer overlooking an oil and gas refinery" },
  { name: "Transportation", image: catTransport, alt: "Professional driver beside a logistics fleet" },
  { name: "Facilities Management", image: catFacilities, alt: "Facilities team maintaining an office lobby" },
  { name: "Healthcare", image: catHealthcare, alt: "Healthcare professionals in a hospital corridor" },
  { name: "Hospitality Sector", image: catHospitality, alt: "Hotel reception staff welcoming guests" },
  { name: "Finance & Education", image: catFinance, alt: "Business professionals in a finance meeting" },
  { name: "Agriculture", image: catAgriculture, alt: "Farm worker tending crops with a tractor in the field" },
  { name: "Security", image: catSecurity, alt: "Security guard on patrol outside a commercial building" },
  { name: "Retail and Shopping Malls", image: catRetail, alt: "Retail associate arranging merchandise in a shopping mall" },
  { name: "Logistics and Transportation", image: catLogistics, alt: "Logistics worker inspecting containers at a freight yard" },
];

export const STEPS: { title: string; detail: string }[] = [
  { title: "Client Approach", detail: "We study your manpower requirement, timelines and budget before anything else." },
  { title: "Kickoff Meeting", detail: "Roles, salary structures, contract terms and mobilisation plans are agreed in writing." },
  { title: "Demand Letter Attestation", detail: "Demand letter, power of attorney and agreement attested through the concerned embassy." },
  { title: "Releasing Newspaper", detail: "Public advertisement published as required by the Department of Foreign Employment." },
  { title: "Sourcing from Data Bank", detail: "Our verified candidate database is filtered against your trade and experience criteria." },
  { title: "Screening of Applicants", detail: "Documents, experience and references of every shortlisted applicant are validated." },
  { title: "Interview Procedure", detail: "In-person or virtual interviews arranged with your panel at our Lalitpur office." },
  { title: "Practical Trade Test", detail: "Hands-on skill tests conducted at accredited trade testing centres." },
  { title: "Initial Orientation", detail: "Selected candidates complete pre-departure orientation on culture, safety and law." },
  { title: "Medical Checkup", detail: "GAMCA/approved medical centres certify each candidate's fitness for deployment." },
  { title: "Visa Stamp Processing", detail: "Visa applications submitted, tracked and stamped with full documentation control." },
  { title: "Immigration Clearance", detail: "Labour approval, insurance, welfare fund and immigration paperwork completed." },
  { title: "Departure of Candidates", detail: "Ticketing, briefing and airport assistance right up to boarding." },
  { title: "Candidate Assessment Form", detail: "Post-arrival feedback loop so performance and retention stay measurable." },
];

export const ADVERTISEMENTS = [
  {
    title: "Skilled & Semi-Skilled Workers - Construction Sector",
    category: "Construction",
    status: "Currently Open",
    image: catConstruction,
    summary:
      "Actively sourcing carpenters, masons, steel fixers, scaffolders and general labourers for active overseas project sites.",
  },
  {
    title: "Hospitality Staff - Hotels & Restaurants",
    category: "Hospitality",
    status: "Currently Open",
    image: catHospitality,
    summary:
      "Recruiting waitstaff, housekeeping, front office and kitchen crew for hotel and restaurant group clients abroad.",
  },
  {
    title: "Healthcare Support Staff",
    category: "Healthcare",
    status: "Currently Open",
    image: catHealthcare,
    summary:
      "Sourcing nursing aides, ward assistants and healthcare support staff for hospital and clinic placements.",
  },
  {
    title: "Factory & Production Line Workers",
    category: "Manufacturing",
    status: "Currently Open",
    image: catManufacturing,
    summary: "Hiring machine operators, QC assistants and production line staff for manufacturing facility clients.",
  },
];

export const CURRENT_OPENINGS = [
  {
    position: "Mason / Steel Fixer",
    country: "Qatar",
    sector: "Construction",
    vacancies: 40,
    contract: "2 years (renewable)",
    status: "Interview Scheduled",
  },
  {
    position: "Heavy Vehicle Driver",
    country: "Saudi Arabia",
    sector: "Transportation",
    vacancies: 25,
    contract: "2 years (renewable)",
    status: "Open",
  },
  {
    position: "Kitchen Helper / Steward",
    country: "UAE",
    sector: "Hospitality",
    vacancies: 30,
    contract: "2 years (renewable)",
    status: "Open",
  },
  {
    position: "Security Guard",
    country: "Malaysia",
    sector: "Facilities Management",
    vacancies: 50,
    contract: "3 years",
    status: "Shortlisting",
  },
  {
    position: "Production Line Operator",
    country: "Malaysia",
    sector: "Manufacturing",
    vacancies: 60,
    contract: "3 years",
    status: "Open",
  },
  {
    position: "Housekeeping Attendant",
    country: "Kuwait",
    sector: "Hospitality",
    vacancies: 20,
    contract: "2 years (renewable)",
    status: "Open",
  },
];

export const CORE_VALUES = [
  {
    title: "Integrity & Transparency",
    body: "We hold the highest ethical standards in every placement - no hidden fees, no false promises, fully compliant recruitment.",
  },
  {
    title: "Empowerment & Growth",
    body: "We upskill Nepali talent through structured training so workers step into global roles ready to perform.",
  },
  {
    title: "Reliability & Excellence",
    body: "Disciplined operations, documented processes and measurable outcomes that deliver long-term value to employers.",
  },
];

export const CLIENT_LOGOS = [
  { name: "Kharafi National", logo: logoKharafiNational },
  { name: "Kossan Rubber Industries", logo: logoKossanRubber },
  { name: "Agility", logo: logoAgility },
  { name: "Unilever Gulf", logo: logoUnileverGulf },
  { name: "Dubai Contracting Company", logo: logoDubaiContracting },
  { name: "Landmark Group", logo: logoLandmarkGroup },
  { name: "Al Futtaim Group", logo: logoAlFuttaim },
  { name: "Marriott International", logo: logoMarriottInternational },
  { name: "Nass Corporation", logo: logoNassCorporation },
  { name: "Bahrain Facility Services", logo: logoBahrainFacilityServices },
  { name: "Almoayyed Contracting", logo: logoAlmoayyedContracting },
  { name: "Crowne Plaza Kuwait", logo: logoCrownePlazaKuwait },
  { name: "Al Jaber Engineering", logo: logoAlJaberEngineering },
  { name: "Qatar Airways", logo: logoQatarAirways },
  { name: "Abdul Latif Jameel", logo: logoAbdulLatifJameel },
  { name: "Alfanar Engineering Services", logo: logoAlfanar },
  { name: "Almarai", logo: logoAlmarai },
  { name: "Alghanim Industries", logo: logoAlghanimIndustries },
  { name: "Genting Malaysia", logo: logoGentingMalaysia },
  { name: "Sunway Construction", logo: logoSunwayConstruction },
  { name: "Top Glove Corporation", logo: logoTopGlove },
  { name: "Ajinomoto Malaysia", logo: logoAjinomotoMalaysia },
  { name: "Gulf Hotels Group", logo: logoGulfHotelsGroup },
  { name: "McDonald's Bahrain", logo: logoMcdonaldsBahrain },
  { name: "Holiday Inn Doha", logo: logoHolidayInnDoha },
  { name: "Crowne Plaza Doha", logo: logoCrownePlazaDoha },
  { name: "Marriott Riyadh", logo: logoMarriottRiyadh },
  { name: "Al Bawani", logo: logoAlBawani },
];

export const COUNTRIES = [
  {
    country: "Saudi Arabia",
    flag: "🇸🇦",
    clients: [
      "Almarai Company",
      "Al Bawani Contracting",
      "Nesma & Partners",
      "Saudi Binladin Group",
      "Marriott Riyadh",
      "Al Fanar Facility Management",
      "Abdul Latif Jameel",
    ],
  },
  {
    country: "Qatar",
    flag: "🇶🇦",
    clients: [
      "Qatar Airways",
      "Crowne Plaza Doha",
      "Holiday Inn Doha",
      "QDVC Construction",
      "Al Jaber Engineering",
      "Doha Facilities Management",
    ],
  },
  {
    country: "Bahrain",
    flag: "🇧🇭",
    clients: [
      "McDonald's Bahrain",
      "Gulf Hotels Group",
      "Almoayyed Contracting",
      "Bahrain Facility Services",
      "Nass Corporation",
    ],
  },
  {
    country: "United Arab Emirates",
    flag: "🇦🇪",
    clients: [
      "Marriott International UAE",
      "Emirates Facilities Management",
      "Al Futtaim Group",
      "Landmark Group",
      "Dubai Contracting Company",
      "Unilever Gulf",
    ],
  },
  {
    country: "Malaysia",
    flag: "🇲🇾",
    clients: [
      "Ajinomoto Malaysia",
      "Top Glove Corporation",
      "Sunway Construction",
      "Genting Hospitality",
      "Kossan Rubber Industries",
    ],
  },
  {
    country: "Kuwait",
    flag: "🇰🇼",
    clients: [
      "Kuwait Oil Field Services",
      "Alghanim Industries",
      "Kharafi National",
      "Crowne Plaza Kuwait",
      "Agility Logistics",
    ],
  },
];

export const SISTER_CONCERNS = [
  {
    name: "Vintage Dé Home Restaurant",
    image: "vintage-de-restaurant",
    body: "The great new venture in the hospitality industry of Nepal, Vintage Dé Home Restaurant is inclined to be one of the finest restaurants in the city, acclaimed for its multi-cuisine delicacies like spicy Indian, Chinese & continental foods of international standard. The coffee & cake shop is home to aromas from around the world and a favourite hangout place for everyone, and the bar welcomes guests into a world of lively five-star experience & comfort.",
  },
  {
    name: "Lhotse Thakali & Sekuwa",
    image: "lhotse-thakali",
    body: "The new destination for authentic Nepali cuisine, Lhotse Thakali & Sekuwa is dedicated to delivering the rich taste and tradition of Nepal through its signature Thakali meals and expertly grilled sekuwa. Renowned for its fresh ingredients, hygienic preparation and warm hospitality, the restaurant offers an unforgettable dining experience featuring authentic Thakali sets, flavourful barbeque specialities, traditional Nepali delicacies and refreshing beverages. With a welcoming ambiance and exceptional service, Lhotse Thakali & Sekuwa is the perfect place for families, friends and food lovers to enjoy the true essence of Nepali flavours in comfort and style.",
  },
  {
    name: "Vintage Hub Private Limited",
    image: "vintage-hub",
    body: "Vintage Hub Private Limited is a dynamic hospitality and lifestyle company dedicated to delivering exceptional dining, café and customer experiences through its portfolio of renowned brands. With a strong commitment to quality, innovation and service excellence, the company manages premium restaurants, cafés and franchise operations that cater to diverse tastes and lifestyles. By combining authentic flavours, modern concepts and outstanding hospitality, Vintage Hub Private Limited has established itself as a trusted name in Nepal's hospitality industry, driven by professionalism, customer satisfaction and continuous growth.",
  },
  {
    name: "Himalayan Java Coffee (Franchise Partner) - Kumaripati",
    image: "himalayan-java-kumaripati",
    body: "Located in the heart of Kumaripati, Himalayan Java Coffee - Kumaripati is a premium franchise outlet offering an exceptional café experience in a warm and contemporary setting. Renowned for its freshly brewed coffee, handcrafted beverages, delicious meals and freshly baked pastries, the outlet serves as an ideal destination for business meetings, casual gatherings and family get-togethers. With a commitment to quality, consistency and outstanding customer service, the Kumaripati outlet continues to uphold the trusted standards and reputation of the Himalayan Java brand.",
  },
  {
    name: "Himalayan Java Coffee (Franchise Partner) - Kamaladi",
    image: "himalayan-java-kamaladi",
    body: "Situated within the iconic Skywalk Tower, Himalayan Java Coffee - Skywalk Tower provides a modern and relaxing café experience, combining premium coffee with a vibrant atmosphere. As an authorized franchise outlet, it offers a wide selection of specialty coffees, refreshing beverages, gourmet meals and delectable desserts prepared to the highest quality standards. Whether guests are looking for a quiet coffee break, a productive workspace or a place to socialise, the Skywalk Tower outlet delivers exceptional hospitality and an unforgettable café experience in one of Kathmandu's most dynamic locations.",
  },
];
