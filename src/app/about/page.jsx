import React from "react";

import { AboutSection } from "../../../components/AboutSection";
import { AboutMeSection } from "../../../components/AboutMeSection";
import {StartProyectSection} from "../../../components/StartProyectSection"

export const page = () => {
  return (
    <div>
      <AboutSection/>
      <AboutMeSection/>
      <StartProyectSection/>
    </div>
  );
};

export default page;
