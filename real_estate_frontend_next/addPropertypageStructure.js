import { getProvinces } from "@/apiCalls/general";

export const structure = {
  sections: [
    {
      title: "Property Overview",
      subSections: [
        {
          title: "Property Title",
          fieldType: "text_input_field",
          dependencies: {},
          name: "property_title",
          placeholder: "Enter Property Title",
        },
        {
          title: "For",
          fieldType: "btn_radio",
          dependencies: {},
          name: "purpose",
          radios: [
            {
              id: "rent",
              value: "rent",
              label: "Rent",
              dependencies: {},
            },
            {
              value: "sale",
              id: "sale",
              label: "Sale",
              dependencies: {},
            },
          ],
        },
        {
          title: "Property Category ",
          fieldType: "btn_radio",
          name: "property_category",
          radios: [
            {
              value: "land",
              id: "1",
              label: "Land",
              defaultValue: true,
            },
            {
              value: "flats",
              id: "2",
              label: "Flats",
            },
            {
              value: "office_space",
              id: "3",
              label: "Office Space",
            },
            {
              value: "shop_space",
              id: "5",
              label: "Shop Space",
            },
            {
              value: "house",
              id: "6",
              label: "House",
            },
            {
              value: "apartment",
              id: "7",
              label: "Apartment",
            },
          ],
          dependencies: { purpose: ["rent", "sale"] },
        },
        {
          title: "Land Type",
          placeHolder: "Select Land Type",

          fieldType: "select",
          name: "land_type",
          options: [
            {
              id: "agricultural",
              label: "Agricultural",
              value: "agricultural",
            },
            { id: "commercial", label: "Commercial", value: "commercial" },
            { id: "others", label: "Others", value: "others" },
          ],
          dependencies: {
            purpose: ["rent", "sale"],
            property_category: ["land"],
          },
        },
        {
          title: "Flat Type",
          placeHolder: "Select Flat Type",
          fieldType: "select",
          name: "flat_type",
          options: [
            { label: "1bhk", value: "1bhk" },
            { label: "2bhk", value: "2bhk" },
            { label: "3bhk", value: "3bhk" },
            { label: "4bhk", value: "4bhk" },
          ],
          dependencies: { purpose: ["rent"], property_category: ["flats"] },
        },
        {
          title: "Office Space Type",
          placeHolder: "Select Office Space Type",

          fieldType: "select",
          name: "office_space_type",
          options: [
            { label: "2bhk", value: "2bhk" },
            { label: "3bhk", value: "3bhk" },
            { label: "4bhk", value: "4bhk" },
            { label: "coworking", value: "coworking" },
            { label: "Open Space", value: "open_space" },
            { label: "others", value: "others" },
          ],
          dependencies: {
            purpose: ["sale", "rent"],
            property_category: ["office_space"],
          },
        },
        {
          title: "Shop Space Type",
          placeHolder: "Select Shop Space Type",

          fieldType: "select",
          name: "shop_space_type",
          options: [
            { label: "Restaurant", value: "restaurant" },
            { label: "Cafe", value: "cafe" },
            { label: "grocery", value: "grocery" },
            { label: "Gift Shop", value: "gift_shop" },
            { label: "Stationery", value: "stationery" },
            { label: "Fancy", value: "fancy" },
            { label: "Cosmetic", value: "cosmetic" },
            { label: "others", value: "others" },
          ],
          dependencies: {
            purpose: ["rent", "sale"],
            property_category: ["shop_space"],
          },
        },
        {
          title: "House Type",
          placeHolder: "Select House Type",

          fieldType: "select",
          name: "house_type",
          options: [
            { label: "others", value: "others" },
            {
              label: "bungalow",
              value: "bungalow",
            },
          ],
          dependencies: {
            purpose: ["rent", "sale"],
            property_category: ["house"],
          },
        },
        {
          title: "Apartment",
          placeHolder: "Select Apartment Type",
          fieldType: "select",
          name: "apartment_type",
          options: [
            { label: "others", value: "others" },
            {
              label: "2bhk",
              value: "2bhk",
            },
          ],
          dependencies: {
            purpose: ["rent", "sale"],
            property_category: ["apartment"],
          },
        },
        {
          title: "Availability",
          fieldType: "btn_radio",
          name: "availability",
          radios: [
            { label: "Available", id: "available", value: "available" },
            {
              label: "Available Soon",
              id: "available_soon",
              value: "available_soon",
            },
          ],
          dependencies: {
            purpose: ["rent"],
            property_category: [
              "flats",
              "office_space",
              "shop_space",
              "house",
              "apartment",
            ],
          },
        },
        {
          title: "Ownership",
          fieldType: "btn_radio",
          name: "ownership",
          radios: [
            {
              label: "Instituional",
              id: "institutional",
              value: "institutional",
            },
            {
              label: "instituional",
              id: "individual",
              value: "individual",
            },
          ],
          dependencies: {
            purpose: ["rent", "sale"],
            property_category: ["house"],
          },
        },
        {
          title: "Build Date(YYYY-MM)",
          fieldType: "date",
          name: "build_date",

          dependencies: {
            // purpose: ["rent", "sale"],
            property_category: ["house", "apartment"],
          },
        },
      ],
    },
    {
      title: "Property Location",
      subSections: [
        {
          fieldType: "btn_radio",
          name: "province",
          title: "Province",
          // dataUrl: getProvinces,
          radios: [
            { id: "state1", label: "State1", value: "state1" },
            {
              id: "district2",
              label: "Madhesh Province",
              value: "madhesh_province",
            },
          ],
        },
        {
          fieldType: "select",
          title: "District",
          name: "district",
          options: [
            { id: "district1", label: "district1", value: "district1" },
            {
              id: "district2",
              label: "Madhesh Province",
              value: "district2",
            },
          ],
        },
        {
          fieldType: "select",
          title: "Municipality",
          name: "municipality",
          options: [
            {
              id: "municipality1",
              label: "municipality1",
              value: "municipality1",
            },
            {
              id: "municipality2",
              label: "municipality2",
              value: "municipality2",
            },
          ],
        },
        {
          fieldType: "text_input_field",
          title: "Google Map",
          name: "map_link",
          placeholder: "Enter  Google Map Link",
        },
        {
          title: "Postal Code",
          fieldType: "number_input_field",
          dependencies: {},
          name: "postal_code",
          placeholder: "Enter Postal Code ",
        },
      ],
    },
    {
      title: "Property Highlights",
      subSections: [
        {
          fieldType: "select",
          name: "property_facing",
          title: "Facing",
          options: [
            { id: "south", label: "South", value: "south" },
            { id: "north", label: "North", value: "north" },
            { id: "east", label: "East", value: "east" },
            { id: "west", label: "West", value: "west" },
          ],
        },
        {
          fieldType: "number_input_field",
          name: "built_up_area",
          title: "Built-Up-Area (Sq.meter)",
          placeholder: "Enter Built Up Area(Sq.meter)",
          dependencies: {
            purpose: ["rent"],
            property_category: ["flats", "office_space"],
          },
        },
        {
          fieldType: "select",
          name: "road_type",
          title: "Road Type",
          options: [
            { id: "paved", label: "Paved", value: "paved" },
            {
              id: "black topped",
              label: "Black topped",
              value: "black topped",
            },
            { id: "alley", label: "alley", value: "alley" },
            { id: "dhalan", label: "dhalan", value: "dhalan" },
            { id: "dhalan", label: "dhalan", value: "dhalan" },
            {
              id: "gravelled",
              label: "gravelled",
              value: "gravelled",
            },
            {
              id: "soil stabalized",
              label: "soil stabalized",
              value: "soil stabalized",
            },
          ],
        },
        {
          fieldType: "number_input_field",
          title: "Road Access",
          name: "road_access",
          placeholder: "Enter Access From Road (Meters)",
          dependencies: {},
        },
      ],
    },
    {
      title: "Parking Space",
      subSections: [
        {
          fieldType: "select",
          name: "parking_space_for_cars",
          title: "Parking Space(Cars)",
          options: [
            { id: "1", label: "1", value: "1" },
            { id: "2", label: "2", value: "2" },
            { id: "3", label: "3", value: "3" },
            { id: "4", label: "4", value: "4" },
            { id: "5", label: "5", value: "5" },
            { id: "6", label: "6", value: "6" },
            { id: "7", label: "7", value: "7" },
            { id: "8", label: "8", value: "8" },
            { id: "8", label: "8", value: "9" },
          ],
        },
        {
          fieldType: "select",
          name: "parking_space_for_bikes",
          title: "Parking Space(Bikes)",
          options: [
            { id: "1", label: "1", value: "1" },
            { id: "2", label: "2", value: "2" },
            { id: "3", label: "3", value: "3" },
            { id: "4", label: "4", value: "4" },
            { id: "5", label: "5", value: "5" },
            { id: "6", label: "6", value: "6" },
            { id: "7", label: "7", value: "7" },
            { id: "8", label: "8", value: "8" },
            { id: "8", label: "8", value: "9" },
          ],
        },
      ],
      dependencies: {
        purpose: ["rent"],
        property_category: ["flats", "office_space"],
      },
    },
    {
      title: "Total Area",
      subSections: [
        {
          title: "Property Area",
          fieldType: "btn_radio",
          dependencies: {},
          name: "property_area",
          radios: [
            {
              id: "hilly",
              value: "hilly",
              label: "Hilly",
              dependencies: {},
            },
            {
              value: "terai",
              id: "terai",
              label: "Terai",
              dependencies: {},
            },
            {
              value: "sq.meter",
              id: "sq.meter",
              label: "Sq.Meter",
              dependencies: {},
            },
          ],
        },
        {
          fieldType: "number_input_field",
          title: "Ropani",
          name: "ropani",
          placeholder: "Enter Area in Ropani",
          dependencies: { property_area: ["hilly"] },
        },
        {
          fieldType: "number_input_field",
          title: "ANNA",
          name: "anna",
          placeholder: "Enter Total Area in Anna",
          dependencies: { property_area: ["hilly"] },
        },
        {
          fieldType: "number_input_field",
          title: "Paisa",
          name: "paisa",
          placeholder: "Enter Total Area in Paisa",
          dependencies: { property_area: ["hilly"] },
        },
        {
          fieldType: "number_input_field",
          title: "Daam",
          name: "daam",
          placeholder: "Enter Total Area in Paisa",
          dependencies: { property_area: ["hilly"] },
        },
        {
          fieldType: "number_input_field",
          title: "bigha",
          name: "bigha",
          placeholder: "Enter Area in bigha",
          dependencies: { property_area: ["terai"] },
        },
        {
          fieldType: "number_input_field",
          title: "katha",
          name: "katha",
          placeholder: "Enter Total Area in katha",
          dependencies: { property_area: ["terai"] },
        },
        {
          fieldType: "number_input_field",
          title: "dhur",
          name: "dhur",
          placeholder: "Enter Total Area in dhur",
          dependencies: { property_area: ["terai"] },
        },
        {
          fieldType: "number_input_field",
          title: "sq.meter",
          name: "sq.meter",
          placeholder: "Enter Total Area in sq.meter",
          dependencies: { property_area: ["sq.meter"] },
        },
      ],
      dependencies: { property_category: ["land", "house"] },
    },
    {
      title: "Amenities and Features",
      subSections: [
        {
          fieldType: "select",
          name: "no_of_bedroom",
          title: "Bedroom",
          options: [
            { id: "1", label: "1", value: "1" },
            { id: "2", label: "2", value: "2" },
            { id: "3", label: "3", value: "3" },
            { id: "4", label: "4", value: "4" },
            { id: "5", label: "5", value: "5" },
            { id: "6", label: "6", value: "6" },
            { id: "7", label: "7", value: "7" },
            { id: "8", label: "8", value: "8" },
            { id: "8", label: "8", value: "9" },
          ],
          dependencies: { property_category: ["flats", "house", "apartment"] },
        },
        {
          fieldType: "select",
          name: "no_of_hall",
          title: "Hall",
          options: [
            { id: "1", label: "1", value: "1" },
            { id: "2", label: "2", value: "2" },
            { id: "3", label: "3", value: "3" },
            { id: "4", label: "4", value: "4" },
            { id: "5", label: "5", value: "5" },
            { id: "6", label: "6", value: "6" },
            { id: "7", label: "7", value: "7" },
            { id: "8", label: "8", value: "8" },
            { id: "8", label: "8", value: "9" },
          ],
          dependencies: { property_category: ["flats", "house", "apartment"] },
        },
        {
          fieldType: "select",
          name: " no_of_kitchen",
          title: "Kitchen",
          options: [
            { id: "1", label: "1", value: "1" },
            { id: "2", label: "2", value: "2" },
            { id: "3", label: "3", value: "3" },
            { id: "4", label: "4", value: "4" },
            { id: "5", label: "5", value: "5" },
            { id: "6", label: "6", value: "6" },
            { id: "7", label: "7", value: "7" },
            { id: "8", label: "8", value: "8" },
            { id: "8", label: "8", value: "9" },
          ],
          dependencies: { property_category: ["flats", "house", "apartment"] },
        },
        {
          fieldType: "select",
          name: " no_of_dining_room",
          title: "Dining Room",
          options: [
            { id: "1", label: "1", value: "1" },
            { id: "2", label: "2", value: "2" },
            { id: "3", label: "3", value: "3" },
            { id: "4", label: "4", value: "4" },
            { id: "5", label: "5", value: "5" },
            { id: "6", label: "6", value: "6" },
            { id: "7", label: "7", value: "7" },
            { id: "8", label: "8", value: "8" },
            { id: "8", label: "8", value: "9" },
          ],
          dependencies: { property_category: ["flats", "house", "apartment"] },
        },
        {
          fieldType: "select",
          name: " no_of_bath_room",
          title: "BathRoom",
          options: [
            { id: "1", label: "1", value: "1" },
            { id: "2", label: "2", value: "2" },
            { id: "3", label: "3", value: "3" },
            { id: "4", label: "4", value: "4" },
            { id: "5", label: "5", value: "5" },
            { id: "6", label: "6", value: "6" },
            { id: "7", label: "7", value: "7" },
            { id: "8", label: "8", value: "8" },
            { id: "8", label: "8", value: "9" },
          ],
          dependencies: { property_category: ["flats", "house", "apartment"] },
        },
        {
          fieldType: "select",
          name: "situated_floor",
          title: "Situated Floor",
          options: [
            { id: "1", label: "1", value: "1" },
            { id: "2", label: "2", value: "2" },
            { id: "3", label: "3", value: "3" },
            { id: "4", label: "4", value: "4" },
            { id: "5", label: "5", value: "5" },
            { id: "6", label: "6", value: "6" },
            { id: "7", label: "7", value: "7" },
            { id: "8", label: "8", value: "8" },
            { id: "8", label: "8", value: "9" },
          ],
          dependencies: {
            property_category: ["flats", "office_space"],
          },
        },
        {
          fieldType: "select",
          name: "no_of_floors",
          title: "NO of Floors",
          options: [
            { id: "1", label: "1", value: "1" },
            { id: "2", label: "2", value: "2" },
            { id: "3", label: "3", value: "3" },
            { id: "4", label: "4", value: "4" },
            { id: "5", label: "5", value: "5" },
            { id: "6", label: "6", value: "6" },
            { id: "7", label: "7", value: "7" },
            { id: "8", label: "8", value: "8" },
            { id: "8", label: "8", value: "9" },
          ],
          dependencies: {
            property_category: ["house"],
          },
        },
        {
          title: "Furnish Status",
          fieldType: "btn_radio",
          name: "furnish_status",
          radios: [
            {
              label: "Full-Furnished",
              id: "full_furnished",
              value: "full_furnished",
            },
            {
              label: "Un-Furnished",
              id: "un_furnished",
              value: "un_furnished",
            },
            {
              label: "Semi-Furnished",
              id: "semi_furnished",
              value: "semi_furnished",
            },
          ],
          dependencies: {
            property_category: ["flats", "office_space", "house", "apartment"],
          },
        },
        {
          fieldType: "checkbox",
          title: "Main Features",
          name: "main_features",
          items: [
            {
              id: "drainage",
              value: "drainage",
              label: "drainage",
              dependencies: {},
            },
            {
              id: "drinking_water",
              value: "drinking_water",
              label: "drinking water",
              dependencies: {},
            },
            {
              id: "boring_water",
              value: "boring_water",
              label: "boring water",
              dependencies: {},
            },
          ],
          dependencies: {
            property_category: [
              "land",
              "flats",
              "office_space",
              "house",
              "apartment",
            ],
          },
        },
        {
          fieldType: "checkbox",
          title: "Community Features",
          name: "community_features",
          items: [
            {
              id: "lift",
              value: "lift",
              label: "lift",
              dependencies: {},
            },
            {
              id: "security_guard",
              value: "security_guard",
              label: "security_guard",
              dependencies: {},
            },
          ],
          dependencies: {
            property_category: ["flats", "office_space", "house", "apartment"],
          },
        },
        {
          fieldType: "checkbox",
          title: "Furnished Items",
          name: "furnished_items",
          items: [
            {
              id: "sofa",
              value: "sofa",
              label: "sofa",
              dependencies: {},
            },
            {
              id: "fridge",
              value: "fridge",
              label: "fridge",
              dependencies: {},
            },
            {
              id: "aircon",
              value: "aircon",
              label: "aircon",
              dependencies: {},
            },
            {
              id: "water purifier",
              value: "water purifier",
              label: "water purifier",
              dependencies: {},
            },
          ],
          dependencies: {
            property_category: ["flats", "office_space", "house", "apartment"],
          },
        },
        {
          fieldType: "checkbox",
          title: "Rooms",
          name: "rooms",
          items: [
            {
              id: "dining_room",
              value: "dining_room",
              label: "dining_room",
              dependencies: {},
            },
            {
              id: "bed_room",
              value: "bed_room",
              label: "bed_room",
              dependencies: {},
            },
            {
              id: "bath_room",
              value: "bath_room",
              label: "bath_room",
              dependencies: {},
            },
            {
              id: "living_room",
              value: "living_room",
              label: "living_room",
              dependencies: {},
            },
          ],
          dependencies: {
            property_category: ["flats", "office_space", "house", "apartment"],
          },
        },
      ],
    },
    {
      title: "Nearby Landmarks",
      subSections: [
        {
          fieldType: "btn_radio",
          name: "nearby_landmarks",
          radios: [
            {
              id: "school_colleges",
              value: "school_colleges",
              label: "school and colleges",
              dependencies: {},
            },
            {
              id: "hospital",
              value: "hospital",
              label: "Hospital",
              dependencies: {},
            },
            {
              id: "religious_site",
              value: "religious_site",
              label: "Religious Site",
              dependencies: {},
            },
            {
              id: "mart",
              value: "mart",
              label: "Mart",
              dependencies: {},
            },
          ],
        },
        {
          title: "School Name",
          fieldType: "text_input_field",
          name: "school_name",
          placeholder: "Enter School Name",
          dependencies: { nearby_landmarks: ["school_colleges"] },
        },
        {
          title: "School Distance Approx(m)",
          fieldType: "number_input_field",
          name: "school_name",
          placeholder: "Enter School Name",
          dependencies: { nearby_landmarks: ["school_colleges"] },
        },
        {
          title: "Hospital Name",
          fieldType: "text_input_field",
          name: "hospital_name",
          placeholder: "Enter Hospital Name",
          dependencies: { nearby_landmarks: ["hospital"] },
        },
        {
          title: "Hospital Distance Approx(m)",
          fieldType: "number_input_field",
          name: "hospital_distance",
          placeholder: "Enter Hospital Name",
          dependencies: { nearby_landmarks: ["hospital"] },
        },
        {
          title: "Religious Site Name",
          fieldType: "text_input_field",
          name: "religious_site_name",
          placeholder: "Religious Site Name",
          dependencies: { nearby_landmarks: ["religious_site"] },
        },
        {
          title: "Religious Site Approx(m)",
          fieldType: "number_input_field",
          name: "religous_site_distance",
          placeholder: "Enter Religious Site Name",
          dependencies: { nearby_landmarks: ["religious_site"] },
        },
        {
          title: "Mart Name",
          fieldType: "text_input_field",
          name: "mart_name",
          placeholder: "Enter Mart Name",
          dependencies: { nearby_landmarks: ["mart"] },
        },
        {
          title: "Mart Distance Approx(m)",
          fieldType: "number_input_field",
          name: "mart_distance",
          placeholder: "Enter Mart Distance",
          dependencies: { nearby_landmarks: ["mart"] },
        },
      ],
    },
    {
      title: "Contact Information",
      subSections: [
        {
          title: "Email",
          fieldType: "email_input_field",
          name: "email",
          placeholder: "Enter Your Email",
          dependencies: {},
        },
        {
          title: "Phone",
          fieldType: "number_input_field",
          name: "phone",
          placeholder: "Enter Your Phone",
          dependencies: {},
        },
      ],
    },
    {
      title: "Property Images",
      subSections: [{ fieldType: "multiple_file_input" }],
    },
    {
      title: "Payment Structure",
      subSections: [
        {
          title: "Price Display",
          fieldType: "btn_radio",
          name: "price_display",
          radios: [
            {
              id: "price_now",
              value: "price_now",
              label: "Now",
              dependencies: {},
            },
            {
              id: "price_on_call",
              value: "price_on_call",
              label: "Price On Call",
              dependencies: {},
            },
          ],
        },
        {
          title: "Price (Total)",
          fieldType: "number_input_field",
          name: "total_sale_price",
          placeholder: "Enter Total Sale Price",
          dependencies: {
            purpose: ["sale"],
            property_category: [
              "land",
              "flats",
              "office_space",
              "shop_space",
              "house",
              "apartment",
            ],
            price_display: ["price_now"],
          },
        },
        {
          title: "Price (Per Month)",
          fieldType: "number_input_field",
          name: "rent_price_per_month",
          placeholder: "Enter Price Per month",
          dependencies: {
            purpose: ["rent"],
            property_category: [
              "land",
              "flats",
              "office_space",
              "shop_space",
              "house",
              "apartment",
            ],
            price_display: ["price_now"],
          },
        },
      ],
    },
    {
      title: "Description",

      subSections: [
        {
          fieldType: "textarea",
          name: "property_description",
          placeHolder: "Property Description",
        },
      ],
    },
  ],
};
