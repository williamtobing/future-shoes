import React from "react";

import SectionAbout from "./section/section-a-about";
import SectionGallery from "./section/section-b-gallery";
import SectionForm from "./section/section-c-form";
import SectionContactD from "./section/section-d-contact";
import SectionContactE from "./section/section-e-contact";

import "../scss/main.scss";

const Body = () => (
  <>
    <SectionAbout />
    <SectionGallery />
    <SectionForm />
    <SectionContactD />
    <SectionContactE />
  </>
);

export default Body;
