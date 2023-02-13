import React from "react";

import Image from "../instructions/images/avatars/image-amyrobson.png";

const msg = `
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo impedit incidunt pariatur non? Nam nemo consequuntur hic dolorem culpa illo amet voluptatem aperiam debitis nihil nisi odio est, maiores eos non enim laboriosam temporibus quibusdam expedita quam esse a excepturi vitae? Possimus minima cum laudantium a maiores adipisci ipsa. Laboriosam perferendis neque ullam. Vero tempore iusto labore! Unde commodi voluptas fugit placeat consequatur dolorem numquam incidunt? Explicabo dolor quaerat pariatur cumque, magnam quod ducimus temporibus `;
const PersonContext = React.createContext({});

let a = {
  alt: "replycas",
  userName: "Katongole Isaac",
  src: Image,
  time: "1 months ago",
  msg
};


const Person = ({ children }) => {
  return <>{children(a)}</>;
};

export default Person