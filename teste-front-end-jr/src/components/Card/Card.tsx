import styles from "./Card.module.scss";
import Image from "next/image";
import { CardProps } from "@/interfaces/interface";

export default function Card({
  productName,
  photo,
  descriptionShort,
  price,
  onClick,
}: CardProps) {
  return (
    <div className={styles.card}>
      <Image width={247} height={227} src={photo} alt={productName} />
      <div className={styles.description}>
        <p>{descriptionShort}</p>
      </div>

      <div className={styles.price_description}>
        <span className={styles.discount}>R$ 15000</span>
        <span className={styles.current_price}>R$ {price}</span>
      </div>

      <div className={styles.price_description}>
        <span className={styles.installments}>ou 2x de R$ 49,95 sem juros</span>
        <span className={styles.freight}>Frete grátis</span>
      </div>

      <button onClick={onClick}>Comprar</button>
    </div>
  );
}
