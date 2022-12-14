import React from "react";
import { Image, Link } from "@chakra-ui/react";

export default function ToTopBtn() {
  return (
    <Link href='#home' zIndex='99'>
      <Image
        src='./icones/topo-pag.svg'
        w={{ base: "25px", sm: "30px", md: "40px" }}
        position='fixed'
        bottom='5%'
        left='90%'
      />
    </Link>
  );
}
