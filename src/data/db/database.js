import Mock from "../mock";

const database = {
  information: {
    name: "Johnathan Guzman",
    aboutContent:
      "I build things on the web",
    age: 24,
    phone: "",
    nationality: "American",
    language: "English, French",
    email: "",
    address: "121 King Street, Melbourne, Australia",
    freelanceStatus: "Available",
    socialLinks: {
      facebook: "",
      twitter: "",
      pinterest: "",
      behance: "",
      linkedin: "https://www.linkedin.com/in/johnathan-guzman",
      dribbble: "",
      github: "https://github.com/johnathanthedev",
    },
    brandImage: "/images/brand-image.png",
    aboutImage: "/images/mtn.jpg",
    aboutImageLg: "/images/mtn.jpg",
    aboutTitle: "Full-Stack Engineer | UI/UX Specialist",
    cvfile: "/files/empty.pdf",
  },
  services: [
    {
      title: "Web Design",
      icon: "brush-alt",
      details:
        "Creating visually appealing, user-friendly designs optimized for seamless navigation on all devices.",
    },
    {
      title: "Web Development",
      icon: "code",
      details:
        "Building high-performance, responsive websites with modern technologies for fast and scalable solutions.",
    },
    {
      title: "Mobile Application",
      icon: "mobile",
      details:
        "Developing cross-platform mobile apps that ensure a smooth user experience on both iOS and Android.",
    },
  ],
  reviews: [
    {
      id: 1,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: "Burdette Turner",
        designation: "Web Developer, Abc Company",
      },
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: "Susan Yost",
        designation: "Client",
      },
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: "Irving Feeney",
        designation: "Fiverr Client",
      },
    },
  ],
  skills: [
    {
      title: "HTML5",
      value: 95,
    },
    {
      title: "CSS3",
      value: 90,
    },
    {
      title: "Javascript",
      value: 70,
    },
    {
      title: "jQuery",
      value: 85,
    },
    {
      title: "ReactJS",
      value: 80,
    },
    {
      title: "Photoshop",
      value: 65,
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "StudySoup",
      subtitle: "UI Redesign",
      imageUrl: "/images/portfolio/StudySoup.jpg",
      largeImageUrl: ["/images/portfolio/StudySoup-Full.jpg"]
    },
    {
      id: 2,
      title: "SCMGlobe",
      subtitle: "Simulation Software For The U.S. Air Force",
      imageUrl: "/images/portfolio/SCMGlobe.jpg",
      largeImageUrl: [
        "/images/portfolio/SCMGlobe-Full.jpg",
        "/images/portfolio/SCMGlobe-Full-Stats-Closed.jpg",
        "/images/portfolio/SCMGlobe-Full-POC.jpg",
        "/images/portfolio/SCMGlobe-Full-Edit.jpg",
      ],
    },
    {
      id: 3,
      title: "Zooth",
      subtitle: "Property Management Software",
      imageUrl: "/images/portfolio/Zooth.jpg",
      largeImageUrl: [
        "/images/portfolio/Zooth-Full-SignUp-1.jpg",
        "/images/portfolio/Zooth-Full-SignUp-2.jpg",
        "/images/portfolio/Zooth-Mobile-Access.jpg",
        "/images/portfolio/Zooth-Mobile-SignUp-1.jpg",
        "/images/portfolio/Zooth-Mobile-SignUp-2.jpg",
      ],
      url: "https://app.zooth.io",
    },
    {
      id: 4,
      title: "Stellar Elements - JackHenry",
      subtitle: "FinTech Software",
      imageUrl: "/images/portfolio/JackHenry.jpg",
      largeImageUrl: ["/images/portfolio/JackHenry-Full.jpg"],
    },
    {
      id: 5,
      title: "Stellar Elements - BiteSlice",
      subtitle: "Social Media Software",
      imageUrl: "/images/portfolio/BiteSlice.jpg",
      largeImageUrl: ["/images/portfolio/BiteSlice-Full.jpg"],
    },
    {
      id: 6,
      title: "Stellar Elements - JustWorks",
      subtitle: "Enterprise Software",
      imageUrl: "/images/portfolio/JustWorks.jpg",
      largeImageUrl: ["/images/portfolio/JustWorks-Full.jpg"],
    },
    {
      id: 7,
      title: "Ecolane",
      subtitle: "Transportation & Logistics Software",
      imageUrl: "/images/portfolio/Ecolane.jpg",
      largeImageUrl: ["/images/portfolio/Ecolane-Full.jpg"],
    },
    {
      id: 8,
      title: "InsureOnline - Auto Quote",
      subtitle: "Auto Insurance Software",
      imageUrl: "/images/portfolio/InsureOnline-AutoQuote.jpg",
      largeImageUrl: ["/images/portfolio/InsureOnline-AutoQuote.jpg"],
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "July 2024 - September 2024",
        position: "UX Lead",
        company: "StudySoup",
        details:
          "Led the redesign of a legacy Rails 4.xx application, resulting in a 65% improvement in customer retention and a 50% increase in new user conversions. Created and optimized user flows and wireframes using Figma. Built reusable components using Rails partials with unit testing in RSpec, and created user stories and UX maps in Figma. Contributed to payment processing systems using Stripe, Apple Pay, and Google Pay, and added OAuth SSO for Google, Facebook, and Instagram. Conducted analysis and user research for content design decisions, enhancing usability with Mixpanel, Google Analytics, and Hotjar. Also built a new design system and component library in Figma."
      },
      {
        id: 2,
        year: "March 2024 - July 2024",
        position: "Lead Frontend Developer",
        company: "SCMGlobe",
        details:
          "Onboarded external engineers and integrated them into React and Rails development processes. Architected and developed logistics simulation software using React, TypeScript, and Google Maps API for the U.S. Air Force. Successfully migrated legacy Angular code to React, launching a new MVP. Built a domain library for interoperability between Angular and React applications, and implemented whitelabeling UI components in the React ecosystem. Enhanced file download performance by 80% using compression techniques with Rails and Go. Developed and documented reusable React components using Storybook, npm, and Rollbar. Designed UX wireframes and prototypes in Figma, ensuring easy-to-use interfaces that simplified complex logistics processes. Also implemented deployment pipelines in Azure and maintained .NET 8 gateway features for live fleet tracking."
      },
      {
        id: 3,
        year: "February 2022 - February 2024",
        position: "Senior Developer",
        company: "Stellar Elements",
        details:
          "Contributed to developing an API system for contractor onboarding with integrated payment processing through Stripe, ensuring PCI compliance. Built dynamic UI components with React, TypeScript, and CSS modules for payment and subscription management, resulting in a 20% reduction in payment-related issues. Retrieved social media content from Facebook, Instagram, TikTok, and Twitter for influencer apps and improved conversions through Google Ads. Reconstructed a Rails MVC app, utilizing AWS S3 for efficient file storage. Migrated Angular code to Lit for a banking app, and developed component repositories with npm and Rollbar. Participated in the development of .NET-based applications for FinTech clients, focusing on identity verification using Okta."
      },
      {
        id: 4,
        year: "October 2021 - February 2022",
        position: "Software Engineer - Ruby on Rails",
        company: "Ecolane",
        details:
          "Updated Ruby on Rails applications for better compatibility with newer versions, leveraging Docker for dynamic environments. Made UI updates to transit applications using Ruby on Rails MVC and integrated Google Maps API for fleet tracking. Increased code coverage by writing unit tests in RSpec, contributing to overall stability."
      },
      {
        id: 5,
        year: "March 2021 - October 2021",
        position: "Web Developer",
        company: "Preferred Risk Insurance Services",
        details:
          "Contributed to developing a cloud-based ecommerce insurance application using Docker, Kubernetes, Rails, gRPC, and React. Built a payment processing system using One Inc’s API, later adapted for internal operations. Created a web scraper in Node.js and Express.js to detect content changes, saving the company time and resources."
      },
      {
        id: 6,
        year: "October 2020 - December 2020",
        position: "Software Engineer",
        company: "Hungr",
        details:
          "Built and maintained the frontend UI using React/Redux. Collaborated with project managers, designers, and developers. Implemented login system with Node.js, Express.js, and Auth0.",
      },
      {
        id: 7,
        year: "January 2019 - October 2020",
        position: "Full-Stack Developer",
        company: "Zenyx, LLC",
        details:
          "Created and helped maintain web apps using React, Redux, Material UI, Node.js, and Express.js, including point-of-sale APIs, inventory systems, and in-app communication channels. Modernized client business operations by designing and developing payment processing systems. Maintained client applications such as Shopify for dropshipping and Salesforce for CRM systems using the Stripe API for payments."
      },
      {
        id: 8,
        year: "June 2017 - December 2018",
        position: "Frontend Developer",
        company: "Kreate",
        details:
          "Increased business revenue by building CRM portals with HTML, CSS, jQuery, and Ruby on Rails. Streamlined invoice generation with a communication tool using Rails MVC. Developed automatic email campaign software with HTML, CSS, and Rails. Designed and built landing pages using Bootstrap and Rails for user data management. Created a dental office dashboard with Bootstrap, JavaScript, and React for appointment, inventory, and client data management.",
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2018 - 2019",
        graduation: "Master of Science",
        university: "Abc University",
        details:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.",
      },
      {
        id: 2,
        year: "2016 - 2018",
        graduation: "Bachelor of Science",
        university: "Abc University",
        details:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.",
      },
      {
        id: 3,
        year: "2015 - 2016",
        graduation: "Higher Schoold Graduation",
        university: "Abc College",
        details:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.",
      },
    ],
  },
  blogs: [
    {
      id: 1,
      title: "Markdown & Html supported blog.",
      featuredImage: "/images/blog-image-1.jpg",
      filesource: "../../blog/markdown-html-supported-blog.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 2,
      title: "Installing NodeJS on your device.",
      featuredImage: "/images/blog-image-2.jpg",
      filesource: "../../blog/installing-nodejs-on-your-device.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 3,
      title: "UI/UX design starter with Adobe XD.",
      featuredImage: "/images/blog-image-3.jpg",
      filesource: "../../blog/uiux-design-starter-with-adobe-xd.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 4,
      title: "Boost your post for increasing sales.",
      featuredImage: "/images/blog-image-4.jpg",
      filesource: "../../blog/boost-your-post-for-increasing-sales.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 5,
      title: "Difference between GatsbyJS & NextJS.",
      featuredImage: "/images/blog-image-5.jpg",
      filesource: "../../blog/difference-between-gatsbyjs-and-nextjs.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 6,
      title: "How to choose javascript framework for project.",
      featuredImage: "/images/blog-image-6.jpg",
      filesource:
        "../../blog/how-to-choose-javascript-framework-for-project.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 7,
      title: "Web automation with python language.",
      featuredImage: "/images/blog-image-7.jpg",
      filesource: "../../blog/web-automation-with-python-language.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 8,
      title: "Time to use latest technology for creating a website.",
      featuredImage: "/images/blog-image-8.jpg",
      filesource:
        "../../blog/time-to-use-latest-technology-for-creating-a-website.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 9,
      title: "Think out of the box.",
      featuredImage: "/images/blog-image-9.jpg",
      filesource: "../../blog/think-out-of-the-box.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 10,
      title: "Trending designs in 2020.",
      featuredImage: "/images/blog-image-1.jpg",
      filesource: "../../blog/trending-designs-in-2020.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 11,
      title: "How to get 10k instagram followers?",
      featuredImage: "/images/blog-image-2.jpg",
      filesource: "../../blog/how-to-get-10k-instagram-followers.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 12,
      title: "What NodeJS can do?",
      featuredImage: "/images/blog-image-3.jpg",
      filesource: "../../blog/what-nodejs-can-do.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 13,
      title: "Futures of javascript.",
      featuredImage: "/images/blog-image-4.jpg",
      filesource: "../../blog/future-of-javascript.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 14,
      title: "Popular javascript library in 2020.",
      featuredImage: "/images/blog-image-5.jpg",
      filesource: "../../blog/popular-javascript-library-in-2020.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 15,
      title: "Promrammers must read books.",
      featuredImage: "/images/blog-image-6.jpg",
      filesource: "../../blog/programmers-must-read-books.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
  ],
  contactInfo: {
    phoneNumbers: ["+012-3456-7891", "+012-3456-7892"],
    emailAddress: ["admin.sitename@example.com", "info.sitename@example.com"],
    address: "121 King Street, Melbourne, Victoria 3000, Australia",
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
