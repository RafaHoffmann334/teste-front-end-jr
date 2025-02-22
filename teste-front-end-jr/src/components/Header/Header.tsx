import styles from "./Header.module.scss";

import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/icons/Logo.svg";
import Truck from "@/public/icons/Truck.svg";
import Group from "@/public/icons/Group.svg";
import Heart from "@/public/icons/Heart.svg";
import LogoV from "@/public/icons/Logo-V.svg";
import LogoT from "@/public/icons/Logo-T.svg";
import LogoE from "@/public/icons/Logo-E.svg";
import LogoX from "@/public/icons/Logo-X.svg";
import UserCilce from "@/public/icons/UserCircle.svg";
import CreditCard from "@/public/icons/CreditCard.svg";
import ShieldCheck from "@/public/icons/ShieldCheck.svg";
import CrownSimple from "@/public/icons/CrownSimple.svg";
import MagnifyingGlass from "@/public/icons/MagnifyingGlass.svg";
import ShoppingCart from "@/public/icons/ShoppingCart.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_top}>
        <div>
          <Image src={ShieldCheck} alt="escudo de verificação" />
          Compra <span className={styles.red}>100% segura</span>
        </div>
        <div>
          <Image src={Truck} alt="caminhão" />
          <span className={styles.red}>Frete grátis</span> acima de R$ 200
        </div>
        <div>
          <Image src={CreditCard} alt="cartão de crédito" />
          <span className={styles.red}>Parcele</span> sua compra
        </div>
      </div>

      <div className={styles.header_middle}>
        <Link className={styles.logo} href="#">
          <Image src={Logo} alt="logo" />
          <Image src={LogoV} alt="logo letter v" />
          <Image src={LogoT} alt="logo letter t" />
          <Image src={LogoE} alt="logo letter e" />
          <Image src={LogoX} alt="logo letter x" />
        </Link>

        <form className={styles.form_container}>
          <input type="text" placeholder="O que você está procurando?" />
          <button>
            <Image src={MagnifyingGlass} alt="lupa" />
          </button>
        </form>

        <div className={styles.options}>
          <Link href="#">
            <Image src={Group} alt="grupo" />
          </Link>
          <Link href="#">
            <Image src={Heart} alt="coração" />
          </Link>
          <Link href="#">
            <Image src={UserCilce} alt="usuário" />
          </Link>
          <Link href="#">
            <Image src={ShoppingCart} alt="carrinho de compra" />
          </Link>
        </div>
      </div>

      <div className={styles.header_bottom}>
        <ul>
          <li>
            <Link href="#">TODAS CATEGORIAS</Link>
          </li>
          <li>
            <Link href="#">SUPERMERCADO</Link>
          </li>
          <li>
            <Link href="#">LIVROS</Link>
          </li>
          <li>
            <Link href="#">MODA</Link>
          </li>
          <li>
            <Link href="#">LANÇAMENTOS</Link>
          </li>
          <li>
            <Link href="#" className={styles.red}>
              OFERTAS DO DIA
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={CrownSimple} alt="coroa" />
              ASSINATURA
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
