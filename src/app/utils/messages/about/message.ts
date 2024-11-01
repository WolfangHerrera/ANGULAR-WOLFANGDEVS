import { aboutMessages } from "../../type/messages/about/message.type";
import { getWolfangAge } from "../../type/messages/about/message.utils";

export const ES_ABOUT_MESSAGES: aboutMessages = {
  title: "SOBRE MI",
  classPerson: {
    name: "Wolfang Herrera",
    age: getWolfangAge(),
    gender: "Hombre",
    phone: "+57 300 000 0000",
    language: ["Español", "Ingles"],
    skills: [
      "Flask",
      "NodeJS",
      "SprintBoot",
      "MFE",
      "StencilJS",
      "Docker",
      "NoSQL",
      "AWS",
      "CD/CI",
      "Git",
      "UnitTest",
      "CleanCode",
    ],
    hobbies: "Me gusta jugar videojuegos y ver series",
  },
  returnStrClass: "DESCARGAR CV",
  returnClass: "DOWNLOAD CV",
};

export const EN_ABOUT_MESSAGES: aboutMessages = {
  title: "ABOUT ME",
  classPerson: {
    name: "Wolfang Herrera",
    age: getWolfangAge(),
    gender: "Male",
    phone: "+57 300 000 0000",
    language: ["English", "Spanish"],
    skills: [
      "Flask",
      "NodeJS",
      "SprintBoot",
      "MFE",
      "StencilJS",
      "Docker",
      "NoSQL",
      "AWS",
      "CD/CI",
      "Git",
      "UnitTest",
      "CleanCode",
    ],
    hobbies: "I like to play video games and watch series",
  },
  returnStrClass: "DOWNLOAD CV",
  returnClass: "DOWNLOAD CV",
};
