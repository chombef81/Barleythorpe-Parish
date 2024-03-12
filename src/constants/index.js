export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#volunteer", label: "Volunteer" },
  { href: "#contact-us", label: "Contact Us" },
  { href: "#minutes", label: "Minutes" },
  { href: "#legal documents", label: "Legal Documents" },
];

import {
  aimscard,
  aimscard1,
  aimscard2,
  aimscard3,
  aimscard4,
  aimscard5,
} from "../assets/images";

import { facebook, twitter, instagram } from "../assets/icons";

export const aims = [
  {
    picture: aimscard,
    aim: "To improve the quality of life for residents and businesses in Barleythorpe Parish",
  },
  {
    picture: aimscard1,
    aim: "To provide effective, transparent and accountable local government of Barleythorpe Parish",
  },
  {
    picture: aimscard2,
    aim: "To effectively represent the residents and businesses in Barleythorpe Parish",
  },
  {
    picture: aimscard3,
    aim: "To protect and enhance amenities in Barleythorpe Parish",
  },
  {
    picture: aimscard4,
    aim: "To preserve and enhance the rural, built and natural environments of Barleythorpe",
  },
  {
    picture: aimscard5,
    aim: "To enable residents to be involved in the life of Barleythorpe Parish and its future development",
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

export const footerLinks = [
  {
    title: "Governance",
    links: [
      { name: "Freedom of Information", link: "/" },
      { name: "Financial reports ", link: "/" },
      { name: "Meeting minutes", link: "/" },
      { name: "Transparency Code", link: "/" },
    ],
  },
  {
    title: "Other Community links",
    links: [
      { name: "Citizens Advice Rutland", link: "/" },
      { name: "Rutland County Council", link: "https://www.rutland.gov.uk" },
      { name: "Emergency Services", link: "/" },
      {
        name: "Oakham Medical Practice",
        link: "https://www.oakhammedicalpractice.co.uk",
      },
      {
        name: "Rutland Memorial Hospital",
        link: "https://www.leicspart.nhs.uk/_OurServices-CommunityHospitals-RutlandMemorialHospital.aspx",
      },
    ],
  },
  {
    title: "Get in touch",
    links: [
      {
        name: "clerk@barleythorpe-parish-council.org",
        link: "clerk@barleythorpe-parish-council.org",
      },
      { name: "01572 759554", link: "tel:01572 759554" },
    ],
  },
];
