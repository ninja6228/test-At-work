import { useState, useRef } from "react";
import useClickOutside from "../../service/hooks/useClickOutside";
import profilePhoto from "../../img/photoProfile.avif";
import style from "./card.module.css";
import Buttons from "./ui/Buttons";

const Card = ({ date, archive }) => {
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  const { company, username, address, id } = date;

  useClickOutside(ref, () => {
    setActive(false);
  });

  return (
    <>
      <div className={`${style.card} ${archive ? style.card_archive : null}`}>
        <img className={style.img} src={profilePhoto} alt="фото профиля" />
        <div className={style.info}>
          <div className={style.header}>
            <div className={style.blockName}>
              <p className={style.name}>{username}</p>
              <button
                className={style.button}
                onClick={() => setActive(true)}
              ></button>
            </div>
            <div
              className={`${style.popupMenu} ${
                active ? style.popupMenu_active : null
              }`}
              ref={ref}
            >
              <div className={style.block}>
                <Buttons id={id} archive={archive} />
              </div>
            </div>
            <p className={style.company}>{company.name}</p>
          </div>
          <p className={style.city}>{address.city}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
