//@ts-nocheck
import React from "react";
import Linkify from "linkifyjs/react";

interface FAQLinkProps {
  message: string;
}

const FAQLink = ({ message }) => {
  const linkProps = {
    onClick: e => e.stopPropagation()
  };
  return <Linkify options={{ attributes: linkProps }}>{message}</Linkify>;
};

export default FAQLink;
