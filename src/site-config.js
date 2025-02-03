const packageJSON = require('../package.json');

const getVersion = (pkg) => pkg ? pkg.replace(/^\^/, '') : 'Unknown';

console.dir(packageJSON);

module.exports = {
  name: "Databanken",
  siteUrl: "https://www.keramikkverkstedet.no",
  tagline: "Skap med hender, form med hjertet.",
  author: "Oskar Nilsen",
  established: new Date('2023-03-01').getFullYear(),
  copyrightYear: new Date().getFullYear(),
  lastUpdated: new Date().toISOString().substring(0, 10),

  infoAddress: "info@digitalpathsnorway.no",
  supportEmail: "support@keramikkverkstedet.no",
  phoneNumber: "+47 55 12 34 56",
  businessAddress: "Wessels gate 181, 7043 Trondheim, Norge",

  metaDescription: "Keramikkverkstedet er et fellesskap for keramiske kunstnere.",
  metaKeywords: ["leire", "keramikk", "håndverk", "skulptur"],
  twitterHandle: "@keramikkverkstedet",
  ogImage: "/assets/images/social-preview.jpg",

  logo: "/assets/logo.png",
  favicon: "/assets/favicon.ico",

  theme: "light",
  showNewsletterSignup: true,

  enableBetaFeatures: false,
  maintenanceMode: false,

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
    }
  ]
};