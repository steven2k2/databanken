import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

// Workaround for missing __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Manually read package.json
const packageJsonPath = path.resolve(__dirname, '../package.json');
const packageJSON = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

const getVersion = (pkg) => pkg ? pkg.replace(/^\^/, '') : 'Unknown';

const siteConfig = {
  name: "Databanken",
  url: "https://databanken.example.com/",
  slogan: "A self-funded nonprofit dedicated to bridging the digital divide.",
  author: {
    "@type": "Organization",
    "name": "Databankin AS",
    "url": "https://databankin.no/"
  },
  foundingDate: "2002-01-01",
  contactPoint: [
    {
      "@type": "ContactPoint",
      "email": "support@databankin.no",
      "telephone": "+47 800 55 678",
      "contactType": "customer support"
    }
  ],
  address: {
    "@type": "PostalAddress",
    "streetAddress": "Wessels gate 181",
    "addressLocality": "Trondheim",
    "addressRegion": "Trondelag",
    "postalCode": "7043",
    "addressCountry": "Norway"
  },
  description: "A self-funded nonprofit dedicated to bridging the digital divide.",
  image: "/assets/images/databanken-preview.jpg",
  charityRegistration: "https://www.acnc.gov.au/charity/charities/e54c1e89-3aaf-e811-a962-000d3ad24a0d/profile",
  sameAs: [
    "https://twitter.com/databanken",
    "https://www.linkedin.com/company/databanken"
  ],
  logo: "/assets/images/recycling.png",
  theme: "dark",

  deal: {
    title: "Back to school",
    text: "Be school ready with a Windows 11 laptop",
  },

  bootstrap: {
    version: getVersion(packageJSON.dependencies?.bootstrap || '')
  },

  pages: [
    { name: "404", title: "Page Not Found", description: "Oops! The page you're looking for doesn't exist.", slug: "404.html", ogImage: "/assets/images/404-preview.jpg", schemaType: "WebPage" },
    { name: "index", title: "Home", description: "Welcome to Databanken.", slug: "index.html", ogImage: "/assets/images/home-preview.jpg", schemaType: "WebPage" },
    { name: "stocklist", title: "Stocklist", description: "Browse available stock items and refurbished computers.", slug: "stocklist.html", ogImage: "/assets/images/stocklist.jpg", schemaType: "CollectionPage" },
    { name: "ebay", title: "eBay Store", description: "Find great deals on refurbished computers and accessories in our eBay store.", slug: "ebay.html", ogImage: "/assets/images/ebay-preview.jpg", schemaType: "WebPage" },
    {
      name: "donate",
      title: "Donate",
      description: "Support our mission by donating computers, accessories, or funds to help bridge the digital divide.",
      slug: "donate.html",
      ogImage: "/assets/images/donate-preview.jpg",
      schemaType: "WebPage"
    },
    { name: "site-info", title: "Site info", description: "", slug: "site-info.html", ogImage: "", schemaType: "" },
    { name: "about-us", title: "about-us", description: "", slug: "about-us.html", ogImage: "", schemaType: "" },
    { name: "home", title: "home", description: "", slug: "home.html", ogImage: "", schemaType: "" },
    { name: "volunteering", title: "volunteering", description: "", slug: "volunteering.html", ogImage: "", schemaType: "" },
    { name: "volunteering-apply", title: "volunteering-apply", description: "", slug: "volunteering-apply.html", ogImage: "", schemaType: "" },
  ]
};

export default siteConfig;