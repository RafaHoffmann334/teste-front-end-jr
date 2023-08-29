import styles from "@/styles/Home.module.scss";

import { useState } from "react";

import axios from "axios";

import Image from "next/image";
import Link from "next/link";

import { IProducts, ModalProps } from "@/interfaces/interface";

import Card from "@/components/Card/Card";
import Modal from "@/components/Modal/Modal";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Category from "@/components/Category/Category";

import Race from "@/public/icons/corrida.svg";
import Fashion from "@/public/icons/moda.svg";
import Drinks from "@/public/icons/whiskey.svg";
import Gears from "@/public/icons/ferramentas.svg";
import Health from "@/public/icons/cuidados-saude.svg";
import Monitoring from "@/public/icons/monitoramento.svg";
import SuperMarket from "@/public/icons/supermercados.svg";

import ArrowLeft from "@/public/icons/ArrowLeft.svg";
import NextArrow from "@/public/icons/NextArrow.svg";
import ArrowRight from "@/public/icons/ArrowRigth.svg";

import Logo from "@/public/icons/Logo.svg";
import LogoV from "@/public/icons/Logo-V.svg";
import LogoT from "@/public/icons/Logo-T.svg";
import LogoE from "@/public/icons/Logo-E.svg";
import LogoX from "@/public/icons/Logo-X.svg";

export default function Home(props: IProducts) {
  const { products } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [productModal, setProductModal] = useState<ModalProps>(
    {} as ModalProps
  );

  const categories = [
    {
      image: Monitoring,
      category: "Tecnologia",
    },
    {
      image: SuperMarket,
      category: "Supermercado",
    },
    {
      image: Drinks,
      category: "Bebidas",
    },
    {
      image: Gears,
      category: "Ferramentas",
    },
    {
      image: Health,
      category: "Saúde",
    },
    {
      image: Race,
      category: "Esporte e Fitness",
    },
    {
      image: Fashion,
      category: "Moda",
    },
  ];

  function findProduct(productName: string) {
    const [product] = products.filter(
      (item) => item.productName === productName
    );
    setProductModal(product);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Header />

      <div className={styles.banner}>
        <div className={styles.banner_text}>
          <h1>Venha conhecer nossas promoções</h1>
          <h2>50% Off nos produtos</h2>
          <button>Ver produto</button>
        </div>
      </div>

      <main className={styles.main}>
        <section>
          <div className={styles.categories}>
            {categories.map((item) => (
              <Category
                key={item.category}
                categoryName={item.category}
                image={item.image}
              />
            ))}
          </div>
        </section>

        <section className={styles.showcase}>
          <div className={styles.options_container}>
            <h2>Produtos relacionados</h2>
            <div className={styles.products_options}>
              <Link href="#">CELULAR</Link>
              <Link href="#">ACCESSÓRIOS</Link>
              <Link href="#">TABLETS</Link>
              <Link href="#">NOTEBOOKS</Link>
              <Link href="#">TVS</Link>
              <Link href="#">VER TODOS</Link>
            </div>
          </div>

          <button className={styles.button_left}>
            <Image src={ArrowLeft} alt="seta esquerda" />
          </button>
          <div className={styles.card_container}>
            {products &&
              products.map((item) => (
                <Card
                  key={item.productName}
                  productName={item.productName}
                  photo={item.photo}
                  price={item.price}
                  descriptionShort={item.descriptionShort}
                  onClick={() => findProduct(item.productName)}
                />
              ))}
          </div>
          <button className={styles.button_right}>
            <Image src={ArrowRight} alt="seta direta" />
          </button>
        </section>

        <section className={styles.section_container}>
          <div className={styles.card_container}>
            <div className={styles.partners_card}>
              <div className={styles.text}>
                <h2>Parceiros</h2>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <button>Confira</button>
              </div>
            </div>
            <div className={styles.partners_card}>
              <div className={styles.text}>
                <h2>Parceiros</h2>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <button>Confira</button>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.div}>
          <h3>Produtos relacionados</h3>
          <Link href="#">Ver todos</Link>
        </div>

        <section className={styles.section_container}>
          <div className={styles.card_container}>
            <div className={styles.products_card}>
              <div className={styles.text}>
                <h2>Produtos</h2>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <button>Confira</button>
              </div>
            </div>
            <div className={styles.products_card}>
              <div className={styles.text}>
                <h2>Produtos</h2>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <button>Confira</button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section_brands}>
          <h2>Navegue por marcas</h2>

          <div className={styles.brands_container}>
            <button className={styles.next_button}>
              <Image src={NextArrow} alt="seta direita" />
            </button>
            <div className={styles.brand}>
              <Image className={styles.logo} src={Logo} alt="logo" />
              <Image src={LogoV} alt="logo letter v" />
              <Image src={LogoT} alt="logo letter t" />
              <Image src={LogoE} alt="logo letter e" />
              <Image src={LogoX} alt="logo letter x" />
            </div>
            <div className={styles.brand}>
              <Image className={styles.logo} src={Logo} alt="logo" />
              <Image src={LogoV} alt="logo letter v" />
              <Image src={LogoT} alt="logo letter t" />
              <Image src={LogoE} alt="logo letter e" />
              <Image src={LogoX} alt="logo letter x" />
            </div>
            <div className={styles.brand}>
              <Image className={styles.logo} src={Logo} alt="logo" />
              <Image src={LogoV} alt="logo letter v" />
              <Image src={LogoT} alt="logo letter t" />
              <Image src={LogoE} alt="logo letter e" />
              <Image src={LogoX} alt="logo letter x" />
            </div>
            <div className={styles.brand}>
              <Image className={styles.logo} src={Logo} alt="logo" />
              <Image src={LogoV} alt="logo letter v" />
              <Image src={LogoT} alt="logo letter t" />
              <Image src={LogoE} alt="logo letter e" />
              <Image src={LogoX} alt="logo letter x" />
            </div>
            <div className={styles.brand}>
              <Image className={styles.logo} src={Logo} alt="logo" />
              <Image src={LogoV} alt="logo letter v" />
              <Image src={LogoT} alt="logo letter t" />
              <Image src={LogoE} alt="logo letter e" />
              <Image src={LogoX} alt="logo letter x" />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {isOpen && (
        <Modal
          photo={productModal?.photo}
          productName={productModal?.productName}
          price={productModal?.price}
          onClick={closeModal}
        />
      )}
    </>
  );
}

export async function getServerSideProps() {
  const url: string =
    "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

  const response = await axios.get(url);

  return {
    props: response.data,
  };
}
