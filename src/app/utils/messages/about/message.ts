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
    hobbies:
      "disfruto de los videojuegos, explorar nuevas series y leer sobre habilidades blandas.",
  },
  returnStrClass: [
    "¡Hola! Soy ",
    ", tengo ",
    " años y en mi tiempo libre disfruto",
  ],
  returnClass:
    "¡Hola! Soy Wolfang Herrera, tengo " +
    getWolfangAge() +
    " años y en mi tiempo libre disfruto de los videojuegos, explorar nuevas series y leer sobre habilidades blandas.",
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
    hobbies:
      "of video games, exploring new series and reading about soft skills.",
  },
  returnStrClass: [
    "Hello! I'm",
    ", I'm ",
    " years old and in my free time I enjoy",
  ],
  returnClass:
    "Hello! I'm Wolfang Herrera, I'm " +
    getWolfangAge() +
    " years old and in my free time I enjoy of video games, exploring new series and reading about soft skills.",
};
