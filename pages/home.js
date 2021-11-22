import React from "react";
import { Container } from "@material-ui/core";
import Image from "next/image";

const home = () => {
  return (
    <Container disableGutters="true" maxWidth="lg">
      <Image src="/pexels-brotin-biswas-518543.jpg" width={128} height={77} />
    </Container>
  );
};

export default home;
