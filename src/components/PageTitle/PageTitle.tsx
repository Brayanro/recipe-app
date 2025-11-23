import React from "react";
import "./PageTitle.scss";

interface PageTitleProps {
  title: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return <h2 className="page-title">{title}</h2>;
};
