const packageJSON = require('../package.json')

const getVersion = (pkg) => pkg ? pkg.replace(/^\^/, '') : 'Unknown'

module.exports = {
  name: 'Databanken',
  url: 'https://databanken.example.com/',
  slogan: 'Powering Your Data',
  author: {
    '@type': 'Organization',
    name: 'Databankin AS',
    url: 'https://databankin.no/'
  },
  foundingDate: '2025-02-01',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: 'support@databankin.no',
      telephone: '+47 800 55 678',
      contactType: 'customer support'
    }
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Wessels gate 181',
    addressLocality: 'Trondheim',
    addressRegion: 'Trøndelag',
    postalCode: '7043',
    addressCountry: 'Norway'
  },
  description: 'Databanken provides secure and efficient cloud storage solutions, data analytics, and enterprise database management.',
  image: '/assets/images/databanken-preview.jpg',
  sameAs: [
    'https://twitter.com/databanken',
    'https://www.linkedin.com/company/databanken'
  ],
  logo: '/assets/logo.png',
  theme: 'dark',

  bootstrap: {
    version: getVersion(packageJSON.dependencies?.bootstrap || '')
  },

  pages: [
    { name: '404', title: 'Page Not Found', description: "Oops! The page you're looking for doesn't exist.", slug: '404.html', ogImage: '/assets/images/404-preview.jpg', schemaType: 'WebPage' },
    { name: 'index', title: 'Home', description: 'Welcome to Databanken.', slug: 'index.html', ogImage: '/assets/images/home-preview.jpg', schemaType: 'WebPage' },
    { name: 'stocklist', title: 'Stocklist', description: 'Browse available stock items and refurbished computers.', slug: 'stocklist.html', ogImage: '/assets/images/stocklist.jpg', schemaType: 'CollectionPage' },
    { name: 'ebay', title: 'eBay Store', description: 'Find great deals on refurbished computers and accessories in our eBay store.', slug: 'ebay.html', ogImage: '/assets/images/ebay-preview.jpg', schemaType: 'WebPage' },
    {
      name: 'donate',
      title: 'Donate',
      description: 'Support our mission by donating computers, accessories, or funds to help bridge the digital divide.',
      slug: 'donate.html',
      ogImage: '/assets/images/donate-preview.jpg',
      schemaType: 'WebPage'
    }
  ]
}
