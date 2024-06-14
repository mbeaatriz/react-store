import React from "react";
import styles from "./Product.module.css";
import { useParams } from "react-router-dom";
import Head from "./Head";

const Product = () => {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduct(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
      } catch (error) {
        setError("Ocorreu um erro");
      } finally {
        setLoading(false);
      }
    }
    fetchProduct(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (product === null) return null;
  return (
    <section className={`${styles.product} animeLeft`}>
      <div className={styles.img}>
        <Head title={`Store | ${product.nome}`} />
        {product.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>
      <div>
        <h1>{product.nome}</h1>
        <span className={styles.price}>R$ {product.preco}</span>
        <p>{product.descricao}</p>
      </div>
    </section>
  );
};

export default Product;
