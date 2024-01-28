type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "charongaskins@protonmail.com",
  title: "Hi, I am Charon 😃
  // profile: "/profile.webp",
  description:
    "I am a frontend developer* with over *3 years* of web experience. I am currently working with *Python and Typescript*. Outside of work I'm a gamer and a doggie parent.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/CharonMG",
    },
    {
      label: "Bento",
      link: "https://bento.me/m-wolff",
    },
    {
      label: "Github",
      link: "https://github.com/MaeWolff",
    },
  ],
};

export default presentation;
