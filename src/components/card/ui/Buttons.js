import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteProfile,
  archiveProfile,
  activeProfile,
} from "../../../service/slice/profilesSlice";
import style from "./buttons.module.css";

const Buttons = ({ archive, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      {archive ? (
        <button
          className={style.button}
          onClick={() => dispatch(activeProfile(id))}
        >
          Активировать
        </button>
      ) : (
        <>
          <Link to={`/profile/${id}`}>
            <button className={style.button}>Редактировать</button>
          </Link>
          <button
            className={style.button}
            onClick={() => dispatch(archiveProfile(id))}
          >
            Архивировать
          </button>
          <button
            className={style.button}
            onClick={() => dispatch(deleteProfile(id))}
          >
            Скрыть
          </button>
        </>
      )}
    </>
  );
};

export default Buttons;
