import React from "react";
import {Link, useLocation } from "react-router-dom";


import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";

function handleClick(event) {
  event.preventDefault();
  console.info("Вы нажали на на breadcrumb.");
}

const BreadcrumbsComponent = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/").filter((x) => x);

  let breadcrumbsPath = "";

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {pathname.length > 0 && (
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}  
            color="inherit"
            to="/"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Главная
          </Link>
        )}

        {pathname.map((path, i) => {
          breadcrumbsPath += `/${path}`;
          const isLast = i === pathname.length - 1;

          return (
            <li key={path}>
              {isLast ? (
                <span>{path}</span>
              ) : (
                <span>
                  <Link to={breadcrumbsPath}>{path}</Link>
                </span>
              )}
            </li>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbsComponent;
