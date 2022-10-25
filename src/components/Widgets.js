import React from "react";
import "./component-css/Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('React Lesson', 'top news --999 readers')}
      {newsArticle('Tesla Loss', 'top news --999 readers')}
      {newsArticle('React Lesson', 'top news --999 readers')}
    </div>
  );
};

export default Widgets;
