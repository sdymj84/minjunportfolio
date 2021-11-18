import haystax_image1 from "./images/mapbox1.png";
import haystax_image2 from "./images/mapbox2.png";
import haystax_image3 from "./images/modal.png";
import haystax_image4 from "./images/sections.png";

export const projects = [
  {
    id: 1,
    name: "Haystax Platform",
    icon: "",
    mediaType: "image",
    images: [haystax_image1, haystax_image2, haystax_image3, haystax_image4],
    title: "Haystax Platform (Current job)",
    timeframe: "Since Jan 2020",
    bulletpoints: [
      "Develop a multi-tenant risk management system platform using React",
      "Redux, Python Flask & MongoDB",
      "Lead migrating from Angular.js to React + Redux",
      "Create core components from scratch for the team such as custom Dropdown, Typeahead, Datatable, etc., and write usage documents",
      "Proficient with various libraries such as Mapbox, Nivo (D3), and LaTex for creating PDF files",
      "Maintain and fix various issues on the Python Flask server",
      "Write and improve unit tests (Jest / React testing library)",
      "Perform clear, concise code reviews",
      "Work in a collaborative Agile team with cloud repositories (Gitlab) using Git command-line",
    ],
    skills: [
      {
        name: "React",
        score: 100,
      },
      {
        name: "Redux",
        score: 100,
      },
      {
        name: "Python",
        score: 70,
      },
      {
        name: "MongoDB",
        score: 70,
      },
    ],
  },
  {
    id: 2,
    name: "JellyTree",
    icon: "",
    mediaType: "video",
    src: "https://www.youtube.com/embed/tgWpkwpdMEY",
    title: "e-Commerce Web App - JELLYTREE",
    timeframe: "June - Sep, 2019",
    bulletpoints: [
      "Help client (JellyTree) to expand their business from Amazon to their own website with a similar CMS experience as with Amazon",
      "Use React, Context API, Redux, NodeJS in Firebase Functions to build REST APIs with NoSQL Firestore",
      "Customers can add products to the cart without login and merge them after login, CRUD their addresses, and filter products by color/size. And seller can CRUD their products via CMS page",
    ],
    skills: [
      {
        name: "React",
        score: 100,
      },
      {
        name: "Redux",
        score: 100,
      },
      {
        name: "NodeJS",
        score: 90,
      },
      {
        name: "Firestore",
        score: 70,
      },
    ],
  },
  {
    id: 3,
    name: "Apart",
    icon: "",
    mediaType: "video",
    src: "https://youtube.com/embed/j66d0ItzLA4",
    title: "Apartment Management Portal",
    timeframe: "Mar - May, 2019",
    bulletpoints: [
      "Notify the residents when it’s time they paid the rent and all other features for both managers and residents",
      "Use React for front-end and Serverless framework for managing AWS (DynamoDB, Cognito, S3, Lambda, API Gateway, CloudWatch)",
      "Key features include resident registration, maintenance requests, rent payment, announcement notification to residents, and more",
    ],
    skills: [
      {
        name: "React",
        score: 90,
      },
      {
        name: "AWS Lambda",
        score: 70,
      },
      {
        name: "AWS DynamoDB",
        score: 70,
      },
      {
        name: "Serverless",
        score: 60,
      },
    ],
  },
];

export const features = [
  {
    id: 4,
    name: "Mapbox",
    icon: "",
    skills: [
      {
        name: "mapbox-gl",
        score: 70,
      },
      {
        name: "mapbox-gl-draw",
        score: 60,
      },
    ],
  },
  {
    id: 5,
    name: "Grid Layout",
    icon: "",
    skills: [
      {
        name: "react-grid-layout",
        score: 90,
      },
      {
        name: "Various widgets",
        score: 90,
      },
    ],
  },
  {
    id: 6,
    name: "Graphic",
    icon: "",
    skills: [
      {
        name: "Nivo",
        score: 80,
      },
    ],
  },
];
