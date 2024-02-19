import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/CardBlock/productCard';
import CatalogList from '../../DataListContent/Data.list.catalog';
import style from './Catalog.module.css';
import { Link } from 'react-router-dom';


const ProductCatalog = () => {
  const { catalog, category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const selectedCategory = category || 'all'; // Если категория не указана, выбираем все товары

  useEffect(() => {
    setLoading(true);
    axios.get('https://65c11632dc74300bce8d48c0.mockapi.io/CrowsisProduct')
      .then(({ data }) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.log('catalog error'));
  }, []);

  return (
    <div>
      <div className={style.catalog_title}>
        <div className={style.name}>{`Мужская ${CatalogList.find(item => item.link === `/catalog/${catalog}`).name}`}</div>
      </div>
      <div className={style.catalog_category}>
        {CatalogList.find(item => item.link === `/catalog/${catalog}`).categoris.map((category, i) => (
          <div key={i} className={`${style.category} ${selectedCategory === category.en ? style.selected : ''}`}>
            <Link to={`/catalog/${catalog}/${category.en}`}>{category.ru}</Link>
          </div>
        ))}
      </div>

      {products
        .filter(item => item.catalog === catalog && (selectedCategory === 'all' || item.category === selectedCategory))
        .map((product, index) => (
          <ProductCard
            id={index}
            key={index}
            img={product.img}
            title={product.title.trim()}
            price={product.price}
            discount={product.discount}
          />
        ))}
    </div>
  );
};

export default ProductCatalog;
