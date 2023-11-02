import React from "react";
import List from "../list";

const Footer = ({ list }) => {
  const listOne = [
    "Questions? Contact us.",
    "FAQ",
    "Investor Realtions",
    "privacy",
    "Speed Test",
  ];
  const listTwo = ["Help Center", "Jobs", "Cookie Preferences", "Lega Notices"];
  const listThree = [
    "Account",
    "Ways to watch",
    "corporate information",
    "only on netflix",
  ];
  const listFour = ["Media Center", "Terms of use", "Contact us"];

  return (
    <div className="px-12 lg:px-32 pt-4 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-between">
        <List lists={listOne} />
        <List lists={listTwo} />
        <List lists={listThree} />
        <List lists={listFour} />
      </div>
    </div>
  );
};

export default Footer;
