import Icons from "./icons";

const NAVBAR_ITEMS = [
  { name: "Home", link: "/" },
  { name: "About us", link: "/aboutus" },
  // { name: "Tracking", link: "/tracking" },
  { name: "Services", link: "/services" },
  { name: "Contact us", link: "/contactus" },
  // { name: "EN", link: "/en" },
];

const COMPANIES = [
  Icons.COMPANY1,
  Icons.COMPANY2,
  Icons.COMPANY3,
  Icons.COMPANY4,
  Icons.COMPANY5,
  Icons.COMPANY6,
];

const FOOTER_OTHER_ITEMS = [{ name: "Terms & Conditions" }, { name: "Privacy" }, { name: "Cookies" }];

const SERVICES = [
  { id: 1, name: "Outsourced Courier", icon: Icons.TRUCK },
  { id: 2, name: "Food Delivery Rider", icon: Icons.ELECTRICITY },
  { id: 3, name: "Trucking Services", icon: Icons.OUTLINE },
  { id: 4, name: "IT Outsourcing", icon: Icons.STORAGE },
  { id: 5, name: "Manpower Supply", icon: Icons.STORAGE },
];

const ABOUT_US_FIGURES = [
  { label: "Campaigns", value: <h1>45+</h1> },
  { label: "Client Satisfaction", value: <h1>99%</h1> },
  { label: "Country Reach", value: <h1>5+</h1> },
  { label: "Certified Experts", value: <h1>10+</h1> },
];

const ABOUTUS_CARDS = [
  {
    id: "feature-1",
    icon: Icons.PACKAGE_SMALL,
    title: "Outsourcing Mission",
    description:
      "We deliver secure and efficient IT services that streamline operations and support digital growth.",
  },
  {
    id: "feature-2",
    icon: Icons.TRCUK_SMALL,
    title: "Courier & Truck Delivery",
    description:
      "Fast and reliable delivery solutions that ensure your goods reach their destination on time.",
  },
  {
    id: "feature-3",
    icon: Icons.HASH_TAG,
    title: "IT Solutions",
    description:
      "We provide cost-effective outsourcing that helps you exceed customer expectations with ease.",
  },
  {
    id: "feature-4",
    icon: Icons.USERS_GROUP_SMALL,
    title: "Manpower Service",
    description: "Our skilled professionals enhance your team's productivity and operational efficiency.",
  },
];

const PORTFOLIO_FIGURES = [
  { label: "Satisfied Clients", value: <h2>26K</h2> },
  { label: "Years of Experience", value: <h2>12+</h2> },
  { label: "Faster Time to hire", value: <h2>66%</h2> },
  { label: "Faster Project Delivery", value: <h2>33%</h2> },
];

const CHOOSE_US_REASONS = [
  { label: "Fast & Scalable Solutions" },
  { label: "Trained Professionals" },
  { label: "AI-powered Delivery Optimization" },
  { label: "Multiple Payment Options" },
  { label: "Cost Efficiency" },
  { label: "Nationwide Coverage" },
];

const CLIENTS_REVIEWS = [
  {
    name: "Sienna Hewitt",
    description:
      "I've been using this transport service for over a year, and they've never let me down. Whether it's a local delivery or long-",
  },
  {
    name: "Kari Rasmussen",
    description:
      "The team is courteous, professional, and truly cares about customer satisfaction. I always feel safe and well taken care of.",
  },
  {
    name: "Amélie Laurent",
    description:
      "The team is courteous, professional, and truly cares about customer satisfaction. I always feel safe and well taken care of.",
  },
  {
    name: "Aliah Lane",
    description:
      "The team is courteous, professional, and truly cares about customer satisfaction. I always feel safe and well taken care of.",
  },
  {
    name: "Eduard Franz",
    description:
      "The team is courteous, professional, and truly cares about customer satisfaction. I always feel safe and well taken care of.",
  },
  {
    name: "Lily-Rose Chedjou",
    description:
      "The team is courteous, professional, and truly cares about customer satisfaction. I always feel safe and well taken care of.",
  },
];

const MISSION = [
  { label: "Reliable and Efficient Service" },
  { label: "Innovation and Excellence" },
  { label: "Integrity and Safety First" },
];

const VISION = [
  { label: "Industry Leadership" },
  { label: "Sustainable Growth" },
  { label: "Community & Business Impact" },
];

const FAQS = [
  {
    qus: "How can I set up a FiFaster account?",
    ans: "We provide a full range of logistics services including freight forwarding, warehousing, inventory management, last-mile delivery, and supply chain solutions tailored to your business needs.",
  },
  {
    qus: "How do I schedule a delivery?",
    ans: "We provide a full range of logistics services including freight forwarding, warehousing, inventory management, last-mile delivery, and supply chain solutions tailored to your business needs.",
  },
  {
    qus: "What are your hours of operation?",
    ans: "We provide a full range of logistics services including freight forwarding, warehousing, inventory management, last-mile delivery, and supply chain solutions tailored to your business needs.",
  },
  {
    qus: "Do you operate 24/7?",
    ans: "We provide a full range of logistics services including freight forwarding, warehousing, inventory management, last-mile delivery, and supply chain solutions tailored to your business needs.",
  },
  {
    qus: "What equipment do you have?",
    ans: "We provide a full range of logistics services including freight forwarding, warehousing, inventory management, last-mile delivery, and supply chain solutions tailored to your business needs.",
  },
  {
    qus: "Can I track my orders?",
    ans: "We provide a full range of logistics services including freight forwarding, warehousing, inventory management, last-mile delivery, and supply chain solutions tailored to your business needs.",
  },
];

const SERVICES_ITEMS = [
  {
    id: 1,
    heading: "Outsource Couriers",
    imageSrc: Icons.DELIVERY_MAN_BOX,
    imagePosition: "left",
    details:
      "Our company provides outsourced courier services to delivery companies, helping them to improve efficiency and reduce costs. We offer multiple payment options to meet the needs of different customers:",
    features: [
      {
        id: 1,
        details:
          "Pay per Delivered Shipment: Allows companies to only pay for delivered shipments, ideal for those with fluctuating delivery volumes or who don't want to commit to a fixed cost.",
      },
      {
        id: 2,
        details:
          "Pay per Day: Offers greater predictability than pay per shipment, ideal for companies with a consistent volume of deliveries.",
      },
      {
        id: 3,
        details:
          "Pay per Month Fixed Amount: Provides a predictable cost that can be budgeted in advance, ideal for companies needing a stable solution.",
      },
    ],
  },
  {
    id: 2,
    heading: "Food Delivery Riders",
    imageSrc: Icons.MAN_SCOOTER,
    imagePosition: "right",
    details:
      "Promptness is a critical factor in the food delivery industry, and our delivery riders are committed to providing fast and dependable service to your customers, ensuring that their orders are delivered on time.",
    features: [
      {
        id: 1,
        details:
          "Our delivery riders prioritize efficiency and reliability to ensure prompt and timely delivery of food items.",
      },
      {
        id: 2,
        details:
          "Our food delivery riders are equipped with the latest technology to optimize their delivery routes, reduce delivery times, and improve accuracy.",
      },
      {
        id: 3,
        details:
          "Our delivery riders undergo extensive training to ensure they are familiar with the best practices in food handling, safety, and hygiene.",
      },
      {
        id: 4,
        details:
          "We offer flexible delivery options to meet the diverse needs of our clients,includingon- demand, scheduled, and recurring deliveries.",
      },
      {
        id: 5,
        details:
          "Our food delivery services are cost-effective and scalable, allowing businesses to meet demand fluctuations and expand their operations without incurring additional costs.",
      },
    ],
  },
  {
    id: 3,
    heading: "Reliable Truck Transport",
    imageSrc: Icons.TRCUK_ROAD,
    imagePosition: "left",
    details:
      "Our line haul truck services provide efficient and reliable transportation of goods across long distances. With a focus on timely delivery and exceptional customer service, we strive to exceed expectations and provide value to our clients.",
    features: [
      {
        id: 1,
        details:
          "Our fleet of line haul trucks is maintained to the highest standards, ensuring reliability and reducing the risk of delays or breakdowns.",
      },
      {
        id: 2,
        details:
          "We provide flexible scheduling options to meet the diverse needs of our clients, including daily, weekly, and monthly transportation services.",
      },
      {
        id: 3,
        details:
          "Our line haul truck services offer competitive pricing, enabling businesses to reduce transportation costs and improve their bottom line.",
      },
      {
        id: 4,
        details:
          "Our team of experienced drivers are trained to handle a variety of goods, including temperature-sensitive products, hazardous materials, and oversized cargo.",
      },
      {
        id: 5,
        details:
          "With our line haul truck services, businesses can optimize their supply chain operations, improve delivery times, and enhance customer satisfaction.",
      },
      {
        id: 1,
        details: "10+",
      },
      {
        id: 1,
        details: "Business Partner",
      },
    ],
  },
  {
    id: 4,
    heading: "IT Outsourcing Services",
    imageSrc: Icons.MEETING,
    imagePosition: "right",
    details:
      "Our IT outsourcing service provides businesses with cost-effective and flexible access to skilled professionals, allowing them to focus on their core competencies. We help businesses optimize their IT operations and drive growth.",
    features: [
      {
        id: 1,
        details:
          "Our IT outsourcing services offer access to a pool of skilled professionals, including software developers, system administrators, and cybersecurity experts",
      },
      {
        id: 2,
        details:
          "By outsourcing IT operations to us, businesses can reduce labor costs and improve operational efficiency, enabling them to focus on their core competencies.",
      },
      {
        id: 3,
        details:
          "Our IT outsourcing services are scalable, enabling businesses to scale up or down their IT operations depending on their needs.",
      },
      {
        id: 4,
        details:
          "We provide customized IT solutions tailored to the unique needs of each client, ensuring that our services align with their business goals.",
      },
      {
        id: 5,
        details:
          "Our team of IT professionals are experienced in the latest technologies, enabling us to provide cutting-edge solutions to our clients.",
      },
      {
        id: 6,
        details:
          "With our IT outsourcing services, businesses can leverage technology to optimize their operations, reduce downtime, and enhance productivity, leading to increased growth and profitability.",
      },
    ],
  },
  {
    id: 5,
    heading: "Outsource Manpower",
    imageSrc: Icons.MAN_IN_WAREHOUSE,
    imagePosition: "left",
    details:
      "At BRC, we bring years of experience in providing outsourced manpower solutions to businesses across diverse sectors. Our deep industry knowledge and hands-on expertise enable us to deliver staffing services that are efficient, flexible, and tailored to each client’s operational goals.We specialize in sourcing, training, and managing reliable personnel for a wide range of roles. Our experienced team takes care of the entire workforce management process— from recruitment and onboarding to compliance and performance monitoring—so you can focus on growing your business.",
    features: [
      {
        id: 1,
        details:
          "Experienced staff with proven track records in logistics, operations, and support functions",
      },
      {
        id: 2,
        details: "Helpers for warehouse assistance, packaging, and general labor",
      },

      {
        id: 3,
        details: "Operators skilled in machinery, equipment handling, and production lines",
      },

      {
        id: 4,
        details: "Supervisors to manage teams, ensure productivity, and maintain quality standards",
      },

      {
        id: 5,
        details:
          "Under-sponsorship company staffing support, helping businesses manage compliance and sponsorship needs effectively",
      },

      {
        id: 6,
        details:
          "With a strong commitment to quality, reliability, and professionalism, BRC helps you reduce costs, improve efficiency, and scale your operations with confidence",
      },
    ],
  },
];

const Enums = {
  NAVBAR_ITEMS,
  PORTFOLIO_FIGURES,
  CHOOSE_US_REASONS,
  COMPANIES,
  FOOTER_OTHER_ITEMS,
  SERVICES,
  SERVICES_ITEMS,
  ABOUT_US_FIGURES,
  ABOUTUS_CARDS,
  CLIENTS_REVIEWS,
  MISSION,
  VISION,
  FAQS,
};

export default Enums;
