import styles from "./Modal.module.scss";

import Image from "next/image";
import Link from "next/link";

import Minus from "@/public/icons/minus.svg";
import Plus from "@/public/icons/plus.svg";

import { ModalProps } from "@/interfaces/interface";

export default function Modal({
  photo,
  price,
  productName,
  onClick,
}: ModalProps) {
  return (
    <div className={styles.modal_container}>
      <div className={styles.modal}>
        <button className={styles.close_button} onClick={onClick}>
          x
        </button>

        <div className={styles.image_box}>
          <Image width={250} height={250} src={photo} alt={productName} />
        </div>

        <div className={styles.product_description}>
          <h3>{productName}</h3>
          <p className={styles.price}>R$ {price}</p>
          <p className={styles.description}>
            Many desktop publishing packages and web page editors now many
            desktop publishing
          </p>
          <Link href="#">Veja mais detalhes do produto</Link>
          <div className={styles.add_container}>
            <button>
              <Image src={Minus} alt="botão de subtrair" />
            </button>
            <p>1</p>
            <button>
              <Image src={Plus} alt="botão de adicionar" />
            </button>
          </div>
          <button className={styles.buy_button}>Comprar</button>
        </div>
      </div>
    </div>
  );
}
