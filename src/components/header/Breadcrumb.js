import React from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import axios from "axios";

// Объект соответствия маршрутов и текста для хлебных крошек


axios.get('https://65c11632dc74300bce8d48c0.mockapi.io/CrowsisProduct')

const breadcrumbTexts = {
  "/": "Главная",
  "/favorites": "Избранное",
  "/catalog": "Каталог", 
  "/catalog/verkhyayaOdejda": "Верхняя одежда",
  "/catalog/obuv": "Обувь",
  "/catalog/futbolki": 'Футболки',
  "/catalog/aksesuari": "Аксесуары",
  "/catalog/shorts": "Шорты",
  "/catalog/djinsi": 'Джинсы',
  "/catalog/rubashki": "Рубашки",
  "/catalog/pidjaki": "Пиджаки",
  "/catalog/tolstovki": 'Толстовки',
  "/catalog/djemperiCardigan" : 'Джемперы и кардиган',
  '/Basket': "Корзина",
  "/auth": 'Авторизация',
  '/Register' : 'Регистрация'

  // Добавьте другие соответствия маршрутов и текста по необходимости
};

const BreadcrumbsComponent = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/").filter((x) => x);

  if (pathname.length === 0 || (pathname.length === 1 && pathname[0] === "")) {
    return null; // Не отображаем хлебные крошки если путь равен "/" или пуст
  }

  let breadcrumbsPath = "";

  return (
    <div className="breadcrembs" role="presentation" >
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
                <span>{breadcrumbTexts[breadcrumbsPath] || path}</span>
              ) : (
                <span>
                  <Link to={breadcrumbsPath}>{breadcrumbTexts[breadcrumbsPath] || path}</Link>
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
