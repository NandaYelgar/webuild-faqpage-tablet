import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Frame1603 from "./components/Frame1603";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|275_608)">
          <Frame1603
            faqs="FAQ’s"
            rectangle76="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-76-6@1x.png"
            frame144Props={frame1603Data.frame144Props}
            footer5Props={frame1603Data.footer5Props}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-3@2x.svg",
    whiteProps: whiteData,
};

const iconMenuData = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
};

const frame144Data = {
    group86Props: group86Data,
    iconMenuProps: iconMenuData,
};

const facebookAppSymbolData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1-1@2x.svg",
};

const twitterData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-157@2x.svg",
};

const group872Data = {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-154@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-19@2x.svg",
    facebookAppSymbolProps: facebookAppSymbolData,
    twitterProps: twitterData,
};

const footer5Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-21@2x.svg",
    place: "Contact",
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-20@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-21@2x.svg",
    phone: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-151@2x.svg",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-152@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-153@2x.svg",
    text15: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    text14: "+91 8976535221, +91 8755645342",
    contactWebuildCom: "contact@webuild.com",
    quickLinks: "Quick Links",
    aboutUs: "About Us",
    projects: "Projects",
    gallery: "Gallery",
    knowledgeTransfer: "Knowledge Transfer",
    blogs: "Blogs",
    faqs: "FAQ’s",
    group872Props: group872Data,
};

const frame1603Data = {
    frame144Props: frame144Data,
    footer5Props: footer5Data,
};

