import beigene from "../../assets/img/portfolio/beigene-logo.jpg";
import beigeneLogin from "../../assets/img/portfolio/beigene-login.jpg";
import beigene1 from "../../assets/img/portfolio/beigene-ex1.jpg";
import beigene2 from "../../assets/img/portfolio/beigene-ex2.jpg";
import beigene3 from "../../assets/img/portfolio/beigene-ex3.jpg";
import beigene4 from "../../assets/img/portfolio/beigene-ex4.jpg";
import beigene5 from "../../assets/img/portfolio/beigene-ex5.jpg";
import beigene6 from "../../assets/img/portfolio/beigene-ex6.jpg";
import beigene7 from "../../assets/img/portfolio/beigene-ex7.jpg";
import beigene8 from "../../assets/img/portfolio/beigene-ex8.jpg";
import beigene9 from "../../assets/img/portfolio/beigene-ex9.jpg";
import csvtopostgre from "../../assets/img/portfolio/csvtopostgre.jpg";
import financemanager from "../../assets/img/portfolio/financemanager.png";
import professionals from "../../assets/img/portfolio/professionals.png";
import inscope from "../../assets/img/portfolio/inscope.jpeg";

const PortfolioData = [
  {
    id: 1,
    title: "Beigene",
    image: [
      beigene,
      beigeneLogin,
      beigene1,
      beigene2,
      beigene3,
      beigene4,
      beigene5,
      beigene6,
      beigene7,
      beigene8,
      beigene9,
    ],
    tag: ["real"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "BeiGene",
        language: "JavaScript, ReactJS, NodeJs, MsSQL",
        preview: "Local Progjct",
        link: "",
        description:
          "This application was created by order of the international campaign Beigene Pharmaceutical company. The application is local, it's available only to specialists in the relevant sections of the company, to analyze data using graphs and charts, and  to easy work with huge dates. Also company uses application for cordinaiting and showing results of work using finely crafted filters. ",
      },
    ],
  },
  {
    id: 2,
    title: "Data Parser",
    image: [csvtopostgre],
    tag: ["real"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "CSV To PostgreSQL parser",
        client: "Local Project",
        language: "Java Script, NodeJS, PostgrSQL",
        preview: "GitHub link",
        link: "https://github.com/LusineAm/data-parser",
        description:
          "Small project  for making work easier with data which we got  in csv files and which needed to be stored in postgreSQL.",
      },
    ],
  },
  {
    id: 3,
    title: "Professionals",
    image: [professionals],
    tag: ["real"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Job Searching Website",
        client: "www.professionals.am",
        language: " HTML, CSS, Javascript",
        preview: "www.professionals.am",
        link: "https://www.professionals.am",
        description:
          "App is a portal designed for applicants and hiring companies. Applicants are provided with an opportunity to build their CV-s and have a look at them in real-time, apply for jobs, be notified about application status, view statistics, have an interview calendar, etc. The portal enables hiring companies to place their announcements both manually or automatically in case of API activation. All the necessary tools are there to help companies organize the hiring process smoothly.",
      },
    ],
  },
  {
    id: 4,
    title: "InScope",
    image: [inscope],
    tag: ["practice"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Company Website",
        client: "InScope LLC",
        language: " HTML, CSS, Javascript",
        preview: "www.inscope-llc.com",
        link: "https://www.inscope-llc.com/",
        description:
          "This website was created as a hands-on task to reinforce knowledge of HTML, CSS and JavaScript. Now it's used as the main page of the company to demonstrate services and comleted work performed to customers.",
      },
    ],
  },
  {
    id: 5,
    title: "Finance Manager",
    image: [financemanager],
    tag: ["practice"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Practise Project",
        client: "For Myself",
        language: "React JS",
        preview: "GitHub link",
        link: "https://github.com/LusineAm/my-expensis",
        description:
          "App was created to train ReactJS. This program makes managing personal finances as easy as pie. You can filter expenses by year, also you can see how much was spent by month, or plan future expenses.",
      },
    ],
  },
];

export default PortfolioData;
