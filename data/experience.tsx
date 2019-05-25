import { backendSkills, devopsSkills, databaseSkills, frontendSkills } from "./skills";
import { IExperienceCard, ISkill } from "../interfaces/interfaces";


export const experienceData: IExperienceCard[] = [
    {
        logo: "https://avatars3.githubusercontent.com/u/2339114?s=200&v=4",
        avatar: "",
        title: "Deep Impact AG",
        position: "Software Engineer",
        datePlace: "May 2019 - OnGoing | Winterthur, CH",
        cardContent: [
            "Frontend development",
            "Backend development",
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
            "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
        ],
        keywords: "React, NextJS, Clojure"
    },
    {
        logo: "",//"https://satcom-int.com/wp-content/uploads/2014/10/favicon.png",
        avatar: "S",
        title: "Satcom International AG",
        position: "Software Engineer",
        datePlace: "August 2017 - May 2019 | Zurich, CH",
        cardContent: [
            "Architecture and development of a smart ERP with IoT integration whichincluded NFC, RFID and tracking devices.",
            "Development of the M2M microservices for device integration using Vertx.io",
            "Development of the REST API using Spring Boot with OAuth2, WebSockets, Multitenancy",
            "DevOps using Kubernetes and optimization of the working environment using automation and CI with Jenkins.",
            "Maintenance and optimization of a PostgreSQL database that grew 6 GB in 10 months",
            "Team leader and Scrum master of a team of 5 people (working remote)",
            "Development and maintenance of a delay management system for public transportation for one of the biggest pharma companies in Switzerland."
        ],
        keywords: "Java 8, Vertx, Spring boot, Postgres, Kubernetes, Docker"
    },
    {
        //logo: "https://wisewaresolutions.com/wp-content/uploads/2018/04/logo_wiseware_v2.png",
        logo: "",
        avatar: "W",
        title: "Wiseware Solutions",
        position: "Software Engineer",
        datePlace: "November 2016 - August 2017 | Aveiro, PT",
        cardContent: [
            "Development of an IoT platform for indoor navigation, car parking and store advertisement using BLE beacons, targeted for shopping malls.",
            "Development of the REST API using Vertx.io using a microservice architeture",
            "Development of the indoor localization algorithm with BLE beacons in the mobile app using Ionic2",
            "Development of the Backoffice using Angular2+."
        ],
        keywords: "Java 8, Vertx, Spring boot, Kubernetes, Docker"
    },
    {
        logo: "../static/images/festock.ico",
        avatar: "F",
        title: "Festock",
        position: "Co-Founder",
        datePlace: "2014 - August 2017 | Aveiro, PT",
        cardContent: [
            "Project management support for a platform for film festivals, professionals and enthusiasts",
            "Main responsible for the architecture of the backend",
            "Development of a REST API using Java with Jersey and Hibernate",
            "Server maintenance and deployment tasks"
        ],
        keywords: "Java, Jersey, MySQL, Hibernate, Scrum"
    },
    {
        logo: "https://yt3.ggpht.com/a/AGF-l79F3LZIQqdSnIOXjwg-M5zwUyrUzDH08d7RqA=s900-mo-c-c0xffffffff-rj-k-no",
        avatar: "",
        title: "Universidade de Aveiro",
        position: "Scolarship",
        datePlace: "February 2016 - November 2016 | Aveiro, PT",
        cardContent: [
            "Development in R of a demographic prediction model based on a legacy model \
            written in Fortran.",
            "Development of a GUI in C#.",
            "Development of a web interface for a real estate automated valuation model.",
            "Geographical data processing and presentation using Google Maps."       
        ],
        keywords: "R, Fortran, C#, Java, HTML, CSS, Javascript"
    },
    {
        logo: "https://yt3.ggpht.com/a/AGF-l79F3LZIQqdSnIOXjwg-M5zwUyrUzDH08d7RqA=s900-mo-c-c0xffffffff-rj-k-no",
        avatar: "",
        title: "Universidade de Aveiro",
        position: "MsC Computer Engineering and Telematics",
        datePlace: "2008 - 2015 | Aveiro, PT",
        cardContent: [
            "Thesis in 'Framework for Traffic Data Analysis and Drivers’ Behavior'",
            "Consisted in gathering data from heterogeneous sources about different factors\
        that influence the driving behavior and store it along with traffic data from real\
        driver in the data warehouse created.\
            Allowing that way to analyze traffic data and drivers’ behavior. ",
            "Also performed a deep study about NoSQL paradigms and database implementations."
        ],
        keywords: "Project Management, Mobile computing, Distributed Systems, Software Security, Information Retrieval,\
         Embedded Systems, Computer Architecture, Operating Systems, Algorithm Complexity, Databases, Concurrency."
    },
]

export const skillData: ISkill[] = [
    {
        title: "BACKEND",
        skills: backendSkills,
    },
    {
        title: "FRONTEND",
        skills: frontendSkills
    },
    {
        title: "DATABASE",
        skills: databaseSkills
    },
    {
        title: "DEVOPS",
        skills: devopsSkills
    },
]