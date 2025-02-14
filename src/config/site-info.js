// src/config/site-info.js

export default {
  siteMetadata: {
    name: "Databanken",
    tagline: "Refurbished tech for a connected future.",
    description: "Databanken is a nonprofit organization providing affordable refurbished computers and digital literacy programs for individuals and community groups in need.",
    url: "https://databanken.example.com",
    logo: "/assets/images/logo.png",
    favicon: "/assets/images/favicon.ico",
    language: "en-AU"
  },

  contactInfo: {
    email: "info@databanken.no",
    phone: "+47 800 55 678",
    secondaryPhone: "+61 3 1234 5678", // Example AU support line
    address: {
      street: "Wessels gate 181",
      city: "Trondheim",
      region: "Trøndelag", // Corrected spelling
      postalCode: "7043",
      country: "Norway"
    },
    secondaryAddress: {
      street: "123 Community Hub",
      city: "Melbourne",
      region: "Victoria",
      postalCode: "3000",
      country: "Australia"
    }
  },

  socialMedia: {
    facebook: "https://facebook.com/Databanken",
    twitter: "https://twitter.com/Databanken",
    instagram: "https://instagram.com/Databanken",
    linkedin: "https://linkedin.com/company/Databanken",
    github: "https://github.com/Databanken", // Open-source contributions
    mastodon: "https://mastodon.social/@Databanken",
    youtube: "https://youtube.com/c/Databanken"
  },

  companyDetails: {
    name: "Databanken",
    registeredName: "Databanken Norge Forening",
    registrationNumber: "984 321 567",
    vatNumber: "NO 984 321 567 MVA",
    establishedYear: 2020,
    privacyPolicyUrl: "https://databanken-norge.no/personvern",
    termsOfServiceUrl: "https://databanken-norge.no/vilkar"
  },

  seoSettings: {
    defaultTitle: "Welcome to Databanken",
    defaultMetaDescription: "Providing affordable refurbished computers and digital literacy programs for communities in need.",
    keywords: ["nonprofit", "digital divide", "refurbished computers", "technology access", "digital literacy"],
    robots: "index, follow",
    ogImage: "/assets/images/social-preview.png",
    twitterCard: "summary_large_image"
  },

  themeSettings: {
    primaryColor: "#007bff",
    secondaryColor: "#6c757d",
    fontFamily: "Arial, sans-serif",
    darkModeEnabled: true
  },

  analytics: {
    googleAnalyticsId: "UA-12345678-9",
    facebookPixelId: "123456789012345",
    hotjarId: "87654321"
  },

  siteFeatures: {
    enableNewsletterSignup: true,
    enableVolunteerSignup: true, // Added for nonprofit engagement
    enableDonationSystem: true, // Donations for sustainability
    enableRefurbishmentRequests: true, // Allow requesting computers
    enableMultiLanguageSupport: false,
    supportedLanguages: ["en", "no"]
  },

  footerLinks: [
    {text: 'Terms & Conditions', url: "/terms-and-conditions"},
    { text: "Privacy Policy", url: "/privacy-policy" },
    // { text: "About Us", url: "/about-us" },
    // { text: "Blog", url: "/blog" },
    // { text: "Contact", url: "/contact" },
    // { text: "Volunteer", url: "/volunteer" }, // Added
    // { text: "Donate", url: "/donate" }, // Added

    // { text: "Terms of Service", url: "/terms-of-service" }
  ]
};
