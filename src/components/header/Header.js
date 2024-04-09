import logoCompany from "../../img/icon/logoCompany.svg";
import iconBell from "../../img/icon/bell.svg";
import heart from "../../img/icon/heart.svg";
import photoProfile from "../../img/photoProfile.avif";
import style from "./header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.section}>
        <img src={logoCompany} alt="логот компании" />
        <div className={style.blockIcon}>
          <img className={style.icon} src={heart} alt="иконка сердечка" />
          <img
            className={style.icon}
            src={iconBell}
            alt="иконка колокольчика"
          />
          <div className={style.blockProfile}>
            <img
              className={style.imgProfile}
              src={photoProfile}
              alt="аватарка профиля"
            />
            <p className={style.nameProfile}>Ivan1234</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
