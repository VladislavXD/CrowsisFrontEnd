import React from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";

function handleClick(event) {
  event.preventDefault();
  console.info("Вы нажали на breadcrumb.");
}

const BreadcrumbsComponent = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/").filter((x) => x);

  if (pathname.length === 0 || (pathname.length === 1 && pathname[0] === "")) {
    return null; // Не отображаем хлебные крошки если путь равен "/" или пуст
  }

  let breadcrumbsPath = "";

  return (
    <div className="breadcrembs" role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          to="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Главная
        </Link>
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
