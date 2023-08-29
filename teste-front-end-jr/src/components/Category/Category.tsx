import styles from "./Category.module.scss";
import Image from "next/image";
import Link from "next/link";
import { CategoryProps } from "@/interfaces/interface";

export default function Category({ image, categoryName }: CategoryProps) {
  return (
    <Link href="#" className={styles.category}>
      <div className={styles.image_box}>
        <Image src={image} alt={categoryName} />
      </div>
      <p>{categoryName}</p>
    </Link>
  );
}
