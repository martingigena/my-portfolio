// https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaReact,
  FaGitAlt,
  FaNode,
} from "react-icons/fa";

import {
  SiFlask,
  SiDjango,
  SiRedux,
  SiTypescript,
  SiJava,
} from "react-icons/si";
import { SiJavascript } from "react-icons/si";

import github from "./assets/images/github.jpg";

export const githubUsername = "martingigena";

export const skillData = [
  {
    id: 1,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <FaNode className="display-4" />,
    name: "Nodejs",
  },
  {
    id: 5,
    skill: <SiJava className="display-4" />,
    name: "JAVA",
  },
  {
    id: 6,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 7,
    skill: <SiTypescript className="display-4" />,
    name: "TypeScript",
  },
  {
    id: 8,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <SiRedux className="display-4" />,
    name: "Redux",
  },
  {
    id: 10,
    skill: <FaPython className="display-4" />,
    name: "Python",
  },
  {
    id: 11,
    skill: <SiDjango className="display-4" />,
    name: "Django",
  },
  {
    id: 12,
    skill: <SiFlask className="display-4" />,
    name: "Flask",
  },
];

export const filteredProjects = ["dolar-loco", "find-rock", "favs-app"];

export const projectData = [
  {
    image: github,
  },
  {
    image: github,
  },
  {
    image: github,
  },
];

export const contactInfo = {
  email: "mgigena.edu@gmail.com",
  phone: "",
};
