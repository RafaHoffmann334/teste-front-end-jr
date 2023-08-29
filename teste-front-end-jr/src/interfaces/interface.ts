import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type CardProps = {
  productName: string;
  descriptionShort: string;
  photo: string | StaticImport;
  price: number;
  onClick: () => void;
};

export interface IProducts {
  products: CardProps[];
}

export type CategoryProps = {
  image: string | StaticImport;
  categoryName: string;
};

export type ModalProps = {
  photo: string | StaticImport;
  productName: string;
  price: number;
  onClick: () => void;
};
