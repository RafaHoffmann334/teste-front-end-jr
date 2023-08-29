import styles from "./Footer.module.scss";

import Image from "next/image";
import Link from "next/link";

import YoutubeLogo from "@/public/icons/youtube.svg";
import FacebookLogo from "@/public/icons/facebook.svg";
import InstagramLogo from "@/public/icons/instagram.svg";
import EconverseLogo from "@/public/icons/econverse.svg";

import LogoWhite from "@/public/icons/Logo-White.svg";
import LogoVWhite from "@/public/icons/Logo-V-White.svg";
import LogoTWhite from "@/public/icons/Logo-T-White.svg";
import LogoEWhite from "@/public/icons/Logo-E-White.svg";
import LogoXWhite from "@/public/icons/Logo-X-White.svg";

import EloLogo from "@/public/icons/elo.svg";
import PixLogo from "@/public/icons/pix.svg";
import VisaLogo from "@/public/icons/visa.svg";
import AmexLogo from "@/public/icons/amex.svg";
import AleloLogo from "@/public/icons/alelo.svg";
import IfoodLogo from "@/public/icons/ifood.svg";
import SodexoLogo from "@/public/icons/sodexo.svg";
import TicketLogo from "@/public/icons/ticket.svg";
import DinnersLogo from "@/public/icons/dinners.svg";
import MasterCardLogo from "@/public/icons/mastercard.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_informations_container}>
        <div className={styles.footer_informations}>
          <div className={styles.footer_about}>
            <h3>Sobre nós</h3>
            <ul>
              <li>
                <Link href="#">CONHEÇA</Link>
              </li>
              <li>
                <Link href="#">COMO COMPRAR</Link>
              </li>
              <li>
                <Link href="#">INDICAÇÃO E DESCONTO</Link>
              </li>
            </ul>
            <div className={styles.social_medias}>
              <Link href="#">
                <Image src={FacebookLogo} alt="facebook logo" />
              </Link>
              <Link href="#">
                <Image src={InstagramLogo} alt="instagram logo" />
              </Link>
              <Link href="#">
                <Image src={YoutubeLogo} alt="youtube logo" />
              </Link>
            </div>
          </div>
          <div className={styles.footer_about}>
            <h3>INFORMAÇÕES ÚTEIS</h3>
            <ul>
              <li>
                <Link href="#">FALE CONOSCO</Link>
              </li>
              <li>
                <Link href="#">DÚVIDAS</Link>
              </li>
              <li>
                <Link href="#">PRAZOS DE ENTREGA</Link>
              </li>
              <li>
                <Link href="#">FORMAS DE PAGAMENTO</Link>
              </li>
              <li>
                <Link href="#">POLÍTICA DE PRIVACIDADE</Link>
              </li>
              <li>
                <Link href="#">TROCAS E DEVOLUÇÕES</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_about}>
            <h3>FORMAS DE PAGAMENTO</h3>
            <div className={styles.payments_methods}>
              <Image src={VisaLogo} alt="cartão visa" />
              <Image src={EloLogo} alt="cartão elo" />
              <Image src={AleloLogo} alt="cartão alelo" />
              <Image src={DinnersLogo} alt="diners club" />
              <Image src={IfoodLogo} alt="ifood" />
              <Image src={MasterCardLogo} alt="mastercard" />
              <Image src={PixLogo} alt="pix" />
              <Image src={AmexLogo} alt="american express" />
              <Image src={TicketLogo} alt="ticket" />
              <Image src={SodexoLogo} alt="sodexo" />
            </div>
          </div>
        </div>

        <div className={styles.footer_card}>
          <div className={styles.footer_card_title}>
            <h3>CADASTRA-SE E RECEBA NOSSAS</h3>
            <span>
              <strong>NOVIDADES E PROMOÇÕES</strong>
            </span>
          </div>
          <div className={styles.footer_card_text}>
            <p>
              Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
              lorem ipsum
            </p>
          </div>
          <form className={styles.form_card}>
            <input type="text" placeholder="SEU EMAIL" />
            <button>OK</button>
          </form>
        </div>
      </div>
      <div className={styles.footer_copyright}>
        <div className={styles.copyright_text}>
          <p>
            Copyright © 2019. Todos os direitos reservados. Todas as marcas e
            suas imagens são de propriedade de seus respectivos donos. É vedada
            a reprodução, total ou parcial, de qualquer conteúdo sem expressa
            autorização.
          </p>
        </div>
        <div className={styles.copyright_images}>
          <Image src={EconverseLogo} alt="econverse logo" />

          <div className={styles.vtex_logo}>
            <Image className={styles.logo} src={LogoWhite} alt="logo" />
            <Image src={LogoVWhite} alt="logo letter v" />
            <Image src={LogoTWhite} alt="logo letter t" />
            <Image src={LogoEWhite} alt="logo letter e" />
            <Image src={LogoXWhite} alt="logo letter x" />
          </div>
        </div>
      </div>
    </footer>
  );
}
