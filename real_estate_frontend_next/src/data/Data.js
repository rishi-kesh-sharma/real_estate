import getConfig from "next/config";
import Logo from "../../public/assets/images/logo.png";
import BlogImage from "../../public/assets/images/properties/p1.png";
import AuthorImage from "../../public/assets/images/people/person1.jpg";
import {
  person1,
  person2,
  person3,
  person4,
  person5,
} from "../../public/assets/images/people";
import { p1, p2, p3, p4, p5, p6 } from "../../public/assets/images/properties";
import {
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
} from "../../public/assets/images/Avatars";
import {
  city1,
  city2,
  city3,
  city4,
  city5,
  city6,
} from "../../public/assets/images/cities";
import Avatar from "@/components/utils/ProfileAvatar";
import { HiIdentification } from "react-icons/hi";
import {
  MdArticle,
  MdContactMail,
  MdFavorite,
  MdRealEstateAgent,
} from "react-icons/md";

import { RiLogoutCircleFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";

import {
  FaFacebook,
  FaLinkedin,
  FaMoneyBillAlt,
  FaMoneyCheck,
  FaTwitter,
} from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { GrResources } from "react-icons/gr";
import { AiFillHome, AiTwotonePropertySafety } from "react-icons/ai";

export const helpSectionData = [
  {
    image: Avatar1,
    title: "Buy a home",
    subtitle:
      "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
    buttonText: "Find a home",
  },
  {
    image: Avatar2,
    title: "Rent a home",
    subtitle:
      "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
    buttonText: "Rent a home",
  },
  {
    image: Avatar3,
    title: "See neighborhoods",
    subtitle:
      "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
    buttonText: "Learn more",
  },
];

export const categoryOptions = [
  { key: "Mansion", text: "Mansion", value: "Mansion" },
  { key: "Family House", text: "Family House", value: "Family House" },
  { key: "Apartment", text: "Apartment", value: "Apartment" },
  { key: "Loft", text: "Loft", value: "Loft" },
  { key: "Studio", text: "Studio", value: "Studio" },
  { key: "Roomlet", text: "Roomlet", value: "Roomlet" },
];

export const provinceOptions = [
  {
    key: "province1",
    value: "province1",
    flag: "province1",
    text: "Province1",
  },
  {
    key: "province2",
    value: "province2",
    flag: "province2",
    text: "Province2",
  },
  {
    key: "province3",
    value: "province3",
    flag: "province3",
    text: "Province3",
  },
  {
    key: "province4",
    value: "province4",
    flag: "province4",
    text: "Province4",
  },

  {
    key: "province5",
    value: "province5",
    flag: "province5",
    text: "Province5",
  },
  {
    key: "province6",
    value: "province6",
    flag: "province6",
    text: "Province6",
  },
  {
    key: "province7",
    value: "province7",
    flag: "province7",
    text: "Province7",
  },
];
export const districtOptions = [
  {
    key: "district1",
    value: "district1",
    flag: "district1",
    text: "district1",
  },
  {
    key: "district2",
    value: "district2",
    flag: "district2",
    text: "district2",
  },
  {
    key: "district3",
    value: "district3",
    flag: "district3",
    text: "district3",
  },
  {
    key: "district4",
    value: "district4",
    flag: "district4",
    text: "district4",
  },

  {
    key: "district5",
    value: "district5",
    flag: "district5",
    text: "district5",
  },
  {
    key: "district6",
    value: "district6",
    flag: "district6",
    text: "district6",
  },
  {
    key: "district7",
    value: "district7",
    flag: "district7",
    text: "district7",
  },
];
export const municipalityOptions = [
  {
    key: "muncipality1",
    value: "muncipality1",
    flag: "muncipality1",
    text: "muncipality1",
  },
  {
    key: "muncipality2",
    value: "muncipality2",
    flag: "muncipality2",
    text: "muncipality2",
  },
  {
    key: "muncipality3",
    value: "muncipality3",
    flag: "muncipality3",
    text: "muncipality3",
  },
  {
    key: "muncipality4",
    value: "muncipality4",
    flag: "muncipality4",
    text: "muncipality4",
  },

  {
    key: "muncipality5",
    value: "muncipality5",
    flag: "muncipality5",
    text: "muncipality5",
  },
  {
    key: "muncipality6",
    value: "muncipality6",
    flag: "muncipality6",
    text: "muncipality6",
  },
  {
    key: "muncipality7",
    value: "muncipality7",
    flag: "muncipality7",
    text: "muncipality7",
  },
];

export const areaUnitOptions = [
  {
    key: 1,
    value: "Sq. Meter",
    flag: "Sq. Meter",
    text: "Sq. Meter",
  },
  {
    key: 2,
    value: "Ropani-Aana-Paisa-Daam",
    flag: "Ropani-Aana-Paisa-Daam",
    text: "Ropani-Aana-Paisa-Daam",
  },
  {
    key: 3,
    value: "Biga-Kattha-Dhur",
    flag: "Biga-Kattha-Dhur",
    text: "Biga-Kattha-Dhur",
  },
];
export const estates = [
  //Data copied directly from MongoDB Atlas personal Cluster & Database
  {
    _id: "611e520ffa5eab373dd9ba37",
    title: "Modern Apartment Downtown Los Angeles",
    price: "2500",
    status: "rent",
    address: "2465 Evergreen Lane",
    province: "California",
    postal_code: "90042",
    country: "United States",
    category: "Apartment",
    bedrooms: "2",
    baths: "1",
    surface_area: "200",
    property_briefing:
      "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    additional_info: "",
    cooling: true,
    heating: true,
    internet: true,
    furniture: false,
    parking: true,
    email: "madara@konoha.com",
    telephone: "+237696740298",
    createdDate: "2021-08-19T12:43:42.180Z",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/real-estate-2ff9c.appspot.com/o/Estates?alt=media&token=03b46643-93ed-4057-adf1-b8308cdaabbb",
    rating: "0",
    reviews: "3",
    totalRating: "13",
  },
  {
    _id: "611e5248fa5eab373dd9ba38",
    title: "Modern Apartment Downtown Los Angeles",
    price: "2500",
    status: "rent",
    address: "2465 Evergreen Lane",
    province: "California",
    postal_code: "90042",
    country: "United States",
    category: "Apartment",
    bedrooms: "2",
    baths: "1",
    surface_area: "200",
    property_briefing:
      "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    additional_info: "",
    cooling: true,
    heating: true,
    internet: true,
    furniture: false,
    parking: true,
    email: "madara@konoha.com",
    telephone: "+237696740298",
    createdDate: "2021-08-19T12:44:42.041Z",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/real-estate-2ff9c.appspot.com/o/Estates?alt=media&token=a3fbec61-d9e2-484c-be45-f1f667d1f58f",
    rating: "0",
    reviews: "9",
    totalRating: "40",
  },
];

export const roadTypesOptions = [
  { key: "paved", flag: "paved", value: "paved", text: "paved" },
  {
    key: "black topped",
    flag: "black topped",
    value: "black topped",
    text: "black topped",
  },
  { key: "alley", flag: "alley", value: "alley", text: "alley" },
  { key: "dhalan", flag: "dhalan", value: "dhalan", text: "dhalan" },
  { key: "dhalan", flag: "dhalan", value: "dhalan", text: "dhalan" },
  {
    key: "gravelled",
    flag: "gravelled",
    value: "gravelled",
    text: "gravelled",
  },
  {
    key: "soil stabalized",
    flag: "soil stabalized",
    value: "soil stabalized",
    text: "soil stabalized",
  },
];

export const facingOptions = [
  { key: "south", flag: "south", value: "south", text: "south" },
  { key: "north", flag: "north", value: "north", text: "north" },
  { key: "east", flag: "east", value: "east", text: "east" },
  { key: "west", flag: "west", value: "west", text: "west" },
];

export const featuresOptions = [
  { key: "drainage", flag: "drainage", value: "drainage", text: "drainage" },
  {
    key: "drinking_water",
    flag: "drinking_water",
    value: "drinking_water",
    text: "drinking water",
  },
  {
    key: "boring_water",
    flag: "boring_water",
    value: "boring_water",
    text: "boring water",
  },
];

export const validationRegex = {
  numericPattern: /^-?\d*\.?\d*$/,

  emailPattern:
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,

  phonePattern: /^\+(?:[0-9] ?){8,14}[0-9]$/,
};
export const profileLinks = [
  {
    icon: <FaUserAlt />,
    name: "Profile",
    path: "/dashboard/profile",
  },

  {
    icon: <MdFavorite />,
    name: "Saved Properties",
    path: "/dashboard/properties/saved",
    forAuthenticated: true,
  },
  {
    icon: <AiTwotonePropertySafety />,
    name: "My Properties",
    path: "/dashboard/properties",
  },
  {
    icon: <RiLogoutCircleFill />,
    name: "Logout",
  },
];
export const nav = {
  logo: { image: Logo, path: "/" },
  links: {
    leftLinks: [
      {
        name: "Buy",
        path: "/buy",
        dropItems: [
          { name: "Homes for Sale", path: "/homes-for-sale" },
          { name: "Open Houses", path: "/open-houses" },
          { name: "New Houses", path: "/new-homes" },
          { name: "Recently Sold", path: "/recently-sold" },
        ],
      },
      {
        name: "Rent",
        path: "/rent",
        dropItems: [
          { name: "All Rentals", path: "/rent/all" },
          { name: "Apartments For Rent", path: "/rent/apartments" },
          { name: "Houses For Rent", path: "/rent/houses" },
          { name: "Post A Rental Listing", path: "/post" },
        ],
      },
      {
        name: "Mortgage",
        path: "mortgage",
        dropItems: [
          { name: "Mortgage overview", path: "/mortgage/overview" },
          { name: "Get Pre-Qualified", path: "/mortgage/prequalified" },
          { name: "Mortgage Rates", path: "/mortgage/rates" },
          { name: "Refinance Rates", path: "/mortgage/refinance/rates" },
          { name: "Mortgage Calculator", path: "/mortgage/calculator" },
          {
            name: "Affordibility Calculator",
            path: "/mortgage/affordibility/calculator",
          },
          {
            name: "Refinance Calculator",
            path: "/mortgage/refinance/calculator",
          },
        ],
      },
    ],
    rightLinks: [
      {
        name: "Sign up or Log in",
        path: "/auth",
        isButton: true,
        forAuthenticated: false,
      },
    ],
    sideBarLinks: [
      {
        icon: <HiIdentification />,
        name: "About",
        path: "/about",
      },
      {
        icon: <MdArticle />,
        name: "Blogs",
        path: "/blogs",
      },
      {
        icon: <MdRealEstateAgent />,
        name: "Agencies",
        path: "/agencies",
      },
      {
        icon: <FaMoneyCheck />,
        name: "Buy",
        path: "/buy",
        dropItems: [
          { name: "Homes for Sale", path: "/homes-for-sale" },
          { name: "Open Houses", path: "/open-houses" },
          { name: "New Houses", path: "/new-homes" },
          { name: "Recently Sold", path: "/recently-sold" },
        ],
      },
      {
        icon: <AiFillHome />,
        name: "Rent",
        path: "/rent",
        dropItems: [
          { name: "All Rentals", path: "/rent/all" },
          { name: "Apartments For Rent", path: "/rent/apartments" },
          { name: "Houses For Rent", path: "/rent/houses" },
          { name: "Post A Rental Listing", path: "/post" },
        ],
      },
      {
        icon: <FaMoneyBillAlt />,
        name: "Mortgage",
        path: "mortgage",
        dropItems: [
          { name: "Mortgage overview", path: "/mortgage/overview" },
          { name: "Get Pre-Qualified", path: "/mortgage/prequalified" },
          { name: "Mortgage Rates", path: "/mortgage/rates" },
          { name: "Refinance Rates", path: "/mortgage/refinance/rates" },
          { name: "Mortgage Calculator", path: "/mortgage/calculator" },
          {
            name: "Affordibility Calculator",
            path: "/mortgage/affordibility/calculator",
          },
          {
            name: "Refinance Calculator",
            path: "/mortgage/refinance/calculator",
          },
        ],
      },
      {
        icon: <BsPeopleFill />,
        name: "Local Info",
        path: "/local-info",
        dropItems: [
          {
            name: "All Neighbourhood Guides",
            path: "/neighbourhood/guides",
          },
        ],
      },
      {
        icon: <GrResources />,
        name: "Additional Resources",
        path: "/additional-resources",
        dropItems: [
          {
            name: "Our Blogs",
            path: "/blogs",
          },
          {
            name: "Help Center",
            path: "/help",
          },
        ],
      },
      {
        icon: <MdContactMail />,
        name: "Contact",
        path: "/contact",
      },
    ],
  },
};
export const locationData = {
  provinces: [
    {
      label: "Province1",
      value: "province1",
    },
    {
      label: "Province2",
      value: "province2",
    },
    {
      label: "Province3",
      value: "province3",
    },
    {
      label: "Province4",
      value: "province4",
    },
    {
      label: "Province5",
      value: "province5",
    },
    {
      label: "Province6",
      value: "province6",
    },
    {
      label: "Province7",
      value: "province7",
    },
  ],
  districts: [
    {
      label: "district1",
      value: "district1",
    },
    {
      label: "district2",
      value: "district2",
    },
    {
      label: "district3",
      value: "district3",
    },
    {
      label: "district4",
      value: "district4",
    },
    {
      label: "district5",
      value: "district5",
    },
    {
      label: "district7",
      value: "district7",
    },
    {
      label: "district7",
      value: "district7",
    },
    {
      label: "district8",
      value: "district8",
    },
  ],
  localLevels: [
    { label: "localLevel1", value: "localLevel1" },
    { label: "localLevel2", value: "localLevel2" },
    { label: "localLevel3", value: "localLevel3" },
    { label: "localLevel4", value: "localLevel4" },
    { label: "localLevel5", value: "localLevel5" },
    { label: "localLevel6", value: "localLevel6" },
    { label: "localLevel8", value: "localLevel8" },
    { label: "localLevel9", value: "localLevel9" },
  ],
};

export const propertyMeta = {
  purposes: [
    { label: "Buy", value: "buy" },
    { label: "Rent", value: "rent" },
  ],
  types: [
    { label: "House", value: "house" },
    { label: "Land", value: "land" },
    { label: "Flat", value: "Flat" },
    { label: "officeSpace", value: "officeSpace" },
    { label: "Shop Space", value: "shopSpace" },
    { label: "Apartment", value: "apartment" },
  ],
  budget: [
    { label: "Up to 50k", value: "0to50k" },
    { label: "50k to 5 Lakhs", value: "50kto5lakhs" },
    { label: "5 Lakhs to 50 Lakhs", value: "o5lakhsto50lakhs" },
    { label: " 50 Lakhs to 5 crores", value: "50lakhsto5crores" },
    { label: "Above 3 Crores", value: "above3Crores" },
  ],
};

export const featured = [
  {
    image: Avatar1,
    name: "Family House",
    total: "122 Property",
  },
  {
    image: Avatar2,
    name: "House & Villa",
    total: "155 Property",
  },
  {
    image: Avatar3,
    name: "Apartment",
    total: "300 Property",
  },
  {
    image: Avatar4,
    name: "Office & Studio",
    total: "80 Property",
  },
  {
    image: Avatar5,
    name: "Villa & Condo",
    total: "80 Property",
  },
];
export const list = [
  {
    locationInfo: {
      province: "3",
      district: "lalitpur",
    },
    id: 1,
    image: p1,
    name: "Red Carpet Real Estate",
    location: "210 Zirak Road, Canada",
    category: "For Rent",
    price: "$3,700",
    type: "Apartment",
    rentFrequency: "monthly",
    rooms: "2",
    baths: "3",
    area: 50,
    // agency: "Nepal real Estate",
    isVerified: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    type: "Villa",
    purpose: "Buy",
    furnishingStatus: "fully furnished",
    amenities: [
      {
        amenities: [
          { text: "Cooling System" },
          { text: "Parking" },
          { text: "Electricity" },
        ],
      },
    ],
    photos: [p1, p2, p3],
  },
  {
    locationInfo: {
      province: "3",
      district: "bhaktapur",
    },
    id: 2,
    image: p1,
    name: "Fairmount Properties",
    location: "5698 Zirak Road, NewYork",
    category: "For Sale",
    price: "$9,750",
    type: "Condos",
    rentFrequency: "monthly",
    rooms: "2",
    baths: "3",
    area: 50,
    // agency: "Nepal real Estate",
    isVerified: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    type: "Villa",
    purpose: "Buy",
    furnishingStatus: "fully furnished",
    amenities: [
      {
        amenities: [
          { text: "Cooling System" },
          { text: "Parking" },
          { text: "Electricity" },
        ],
      },
    ],
    photos: [p1, p2, p3],
  },
  {
    locationInfo: {
      province: "3",
      district: "kathmandu",
    },
    id: 3,
    image: p2,
    name: "The Real Estate Corner",
    location: "5624 Mooker Market, USA",
    category: "For Rent",
    price: "$5,860",
    type: "Offices",
    rentFrequency: "monthly",
    rooms: "2",
    baths: "3",
    area: 50,
    isVerified: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    type: "Villa",
    purpose: "Buy",
    furnishingStatus: "fully furnished",
    amenities: [
      {
        amenities: [
          { text: "Cooling System" },
          { text: "Parking" },
          { text: "Electricity" },
        ],
      },
    ],
    photos: [p1, p2, p3],
  },
  {
    locationInfo: {
      province: "3",
      district: "lalitpur",
    },
    id: 4,
    image: p3,
    name: "Herringbone Realty",
    location: "5621 Liverpool, London",
    category: "For Sale",
    price: "$7,540",
    type: "Homes & Villas",
    rentFrequency: "monthly",
    rooms: "2",
    baths: "3",
    area: 50,
    isVerified: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    type: "Villa",
    purpose: "Buy",
    furnishingStatus: "fully furnished",
    amenities: [
      {
        amenities: [
          { text: "Cooling System" },
          { text: "Parking" },
          { text: "Electricity" },
        ],
      },
    ],
    photos: [p1, p2, p3],
  },
  {
    locationInfo: {
      province: "3",
      district: "kathmandu",
    },
    id: 5,
    image: p4,
    name: "Brick Lane Realty",
    location: "210 Montreal Road, Canada",
    category: "For Rent",
    price: "$4,850",
    type: "Commercial",
    rentFrequency: "monthly",
    rooms: "2",
    baths: "3",
    area: 50,
    // agency: "Nepal real Estate",
    isVerified: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    type: "Villa",
    purpose: "Buy",
    furnishingStatus: "fully furnished",
    amenities: [
      {
        amenities: [
          { text: "Cooling System" },
          { text: "Parking" },
          { text: "Electricity" },
        ],
      },
    ],
    photos: [p1, p2, p3],
  },
  {
    locationInfo: {
      province: "3",
      district: "lalitpur",
    },
    id: 6,
    image: p5,
    name: "Banyon Tree Realty",
    location: "210 Zirak Road, Canada",
    category: "For Sale",
    price: "$2,742",
    type: "Apartment",
    rentFrequency: "monthly",
    rooms: "2",
    baths: "3",
    area: 50,
    isVerified: true,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    type: "Villa",
    purpose: "Buy",
    furnishingStatus: "fully furnished",
    amenities: [
      {
        amenities: [
          { text: "Cooling System" },
          { text: "Parking" },
          { text: "Electricity" },
        ],
      },
    ],
    photos: [p1, p2, p3],
  },
];
export const agencies = [
  {
    image: Avatar1,
    name: "Nepal Bhoomi Real Estate Agency",
    total: "96",
  },
  {
    image: Avatar2,
    name: "Nepal Home Search",
    total: "225",
  },
  {
    image: Avatar3,
    name: "Smart D Estate",
    total: "165",
  },
  {
    image: Avatar4,
    name: "Property 247",
    total: "20",
  },
  {
    image: Avatar5,
    name: "Property 360 Nepal",
    total: "82",
  },
];

// filterData
export const filterData = [
  {
    type: "radio",
    name: "Purpose",
    items: [
      { name: "Buy", value: "for-sale" },
      { name: "Rent", value: "for-rent" },
    ],
    placeholder: "Purpose",
    queryName: "purpose",
  },
  {
    name: "rentFrequency",
    type: "radio",
    items: [
      { name: "Daily", value: "daily" },
      { name: "Weekly", value: "weekly" },
      { name: "Monthly", value: "monthly" },
      { name: "Yearly", value: "yearly" },
    ],
    placeholder: "Rent Frequency",
    queryName: "rentFrequency",
  },

  {
    name: "sort",
    type: "radio",
    items: [
      { name: "Lowest Price", value: "price-asc" },
      { name: "Highest Price", value: "price-des" },
      { name: "Newest", value: "date-asc" },
      { name: "Oldest", value: "date-desc" },
      { name: "Verified", value: "verified-score" },
      { name: "City Level Score", value: "city-level-score" },
    ],
    placeholder: "Sort",
    queryName: "sort",
  },

  {
    name: "furnishingStatus",
    type: "radio",
    items: [
      { name: "Furnished", value: "furnished" },
      { name: "Unfurnished", value: "unfurnished" },
    ],
    placeholder: "Furnish Type",
    queryName: "furnishingStatus",
  },
  {
    items: [
      { name: "Apartment", value: "4" },
      { name: "Townhouses", value: "16" },
      { name: "Villas", value: "3" },
      { name: "Penthouses", value: "18" },
      { name: "Hotel Apartments", value: "21" },
      { name: "Villa Compound", value: "19" },
      { name: "Residential Plot", value: "14" },
      { name: "Residential Floor", value: "12" },
      { name: "Residential Building", value: "17" },
    ],
    placeholder: "Property Type",
    queryName: "categoryExternalID",
  },
];

export const awards = [
  {
    icon: <i className="fa-solid fa-trophy"></i>,
    num: "32 M	",
    name: "Blue Burmin Award",
  },
  {
    icon: <i className="fa-solid fa-briefcase"></i>,
    num: "43 M",
    name: "Mimo X11 Award",
  },
  {
    icon: <i className="fa-solid fa-lightbulb"></i>,
    num: "51 M",
    name: "Australian UGC Award",
  },
  {
    icon: <i className="fa-solid fa-heart"></i>,
    num: "42 M",
    name: "IITCA Green Award",
  },
];
export const location = [
  {
    locationInfo: {
      province: "3",
      district: "kathmandu",
    },
    id: 1,
    name: "New Orleans, Louisiana",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    image: city1,
  },
  {
    locationInfo: {
      province: "3",
      district: "kathmandu",
    },
    id: 2,
    name: "Jerrsy, United State",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    image: city2,
  },
  {
    locationInfo: {
      province: "3",
      district: "kathmandu",
    },
    id: 3,
    name: "Liverpool, London",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    image: city3,
  },
  {
    locationInfo: {
      province: "3",
      district: "kathmandu",
    },
    id: 4,
    name: "NewYork, United States",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    image: city4,
  },
  {
    locationInfo: {
      province: "3",
      district: "kathmandu",
    },
    id: 5,
    name: "Montreal, Canada",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    image: city5,
  },
  {
    locationInfo: {
      province: "3",
      district: "kathmandu",
    },
    id: 6,
    name: "California, USA",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    image: city6,
  },
];

export const testimonials = [
  {
    name: "john doe",
    profession: "developer",
    avatar: Avatar1,
    text: "Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.",
  },
  {
    name: "Mark Wood",
    profession: "designer",
    avatar: Avatar2,
    text: "Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.",
  },
  {
    name: "john doe",
    profession: "developer",
    avatar: Avatar3,
    text: "Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.",
  },
  {
    name: "Harry Styles",
    profession: "analyst",
    avatar: Avatar4,
    text: "Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.",
  },
];

export const blogs = [
  {
    slug: {
      current: 1,
    },
    mainImage: BlogImage,
    tags: [{ title: "Buy", color: "#c75840" }],
    keywords: [
      { title: "keyword1" },
      { title: "keyword2" },
      { title: "keyword3" },
    ],
    meta_tag: [
      { title: "meta tag1" },
      { title: "meta tag2" },
      { title: "meta tag3" },
    ],

    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    categories: [{ title: "Buy", color: "#c75840" }],
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
  {
    slug: {
      current: 2,
    },
    mainImage: BlogImage,
    tags: [{ title: "Buy", color: "#c75840" }],
    keywords: [
      { title: "keyword1" },
      { title: "keyword2" },
      { title: "keyword3" },
    ],
    meta_tag: [
      { title: "meta tag1" },
      { title: "meta tag2" },
      { title: "meta tag3" },
    ],
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    categories: [{ title: "Buy", color: "#c75840" }],
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
  {
    slug: {
      current: 3,
    },
    mainImage: BlogImage,
    tags: [{ title: "Buy", color: "#c75840" }],
    keywords: [
      { title: "keyword1" },
      { title: "keyword2" },
      { title: "keyword3" },
    ],
    meta_tag: [
      { title: "meta tag1" },
      { title: "meta tag2" },
      { title: "meta tag3" },
    ],
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    categories: [{ title: "Buy", color: "#c75840" }],
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
  {
    slug: {
      current: 4,
    },
    mainImage: BlogImage,
    tags: [{ title: "Buy", color: "#c75840" }],
    keywords: [
      { title: "keyword1" },
      { title: "keyword2" },
      { title: "keyword3" },
    ],
    meta_tag: [
      { title: "meta tag1" },
      { title: "meta tag2" },
      { title: "meta tag3" },
    ],
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    categories: [{ title: "Buy", color: "#c75840" }],
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
  {
    slug: {
      current: 5,
    },
    mainImage: BlogImage,
    tags: [{ title: "Buy", color: "#c75840" }],
    keywords: [
      { title: "keyword1" },
      { title: "keyword2" },
      { title: "keyword3" },
    ],
    meta_tag: [
      { title: "meta tag1" },
      { title: "meta tag2" },
      { title: "meta tag3" },
    ],
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    categories: [{ title: "Buy", color: "#c75840" }],
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
  {
    slug: {
      current: 6,
    },
    mainImage: BlogImage,
    tags: [{ title: "Buy", color: "#c75840" }],
    keywords: [
      { title: "keyword1" },
      { title: "keyword2" },
      { title: "keyword3" },
    ],
    meta_tag: [
      { title: "meta tag1" },
      { title: "meta tag2" },
      { title: "meta tag3" },
    ],
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    categories: [{ title: "Buy", color: "#c75840" }],
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
  // {
  //   slug: {
  //     current: 7,
  //   },
  //   mainImage: BlogImage,
  //   tags: [{ title: "Buy", color: "#c75840" }],
  //   keywords: [
  //     { title: "keyword1" },
  //     { title: "keyword2" },
  //     { title: "keyword3" },
  //   ],
  //   meta_tag: [
  //     { title: "meta tag1" },
  //     { title: "meta tag2" },
  //     { title: "meta tag3" },
  //   ],
  //   author: {
  //     name: "john Doe",
  //     image: AuthorImage,
  //     alt: "author image",
  //   },
  //   categories: [{ title: "Buy", color: "#c75840" }],
  //   title:
  //     "Architectural Engineering Wonders of the modern era for your Inspiration",
  //   publishedAt: "October 21, 2022",
  //   createdAt: "October 21, 2022",
  // },
];
export const footer = [
  {
    title: "LINKS",
    text: [
      { list: "About", link: "/about" },
      { list: "Blog", link: "/blogs" },
      { list: "Contact", link: "/contact" },
      { list: "Affiliate" },
      { list: "Login" },
      { list: "Changelog" },
    ],
  },
  {
    title: "PAGES",
    text: [
      { list: "Home Page", link: "/" },
      { list: "About Page", link: "/about" },
      { list: "Properties Page", link: "/properties" },
      { list: "Property Detail Page", link: "/properties/1" },
      { list: "Blogs", link: "/blogs" },
      { list: "Single Blog", link: "/blog/1" },
    ],
  },
  {
    title: "CONTACT US",
    text: [
      { list: "myraz@gmail.com" },
      { list: "9876543210" },
      { list: "Lagankhel,Lalitpur" },
      {
        list: (
          <div className="mt-2 flex gap-2">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        ),
      },
    ],
  },
];
