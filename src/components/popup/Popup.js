import done from "../../img/icon/done.svg";
import style from "./popup.module.css";

const Popup = ({ state }) => {
  return (
    <div className={style.overlay}>
      <div className={style.popup}>
        <button
          className={style.button}
          onClick={() => {
            state(false);
          }}
        ></button>
        <div className={style.popupInfo}>
          <img className={style.img} src={done} alt="иконка зеленой галочки" />
          <p className={style.text}>Изменения сохранены!</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
