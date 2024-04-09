import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useForm from "../../service/hooks/useForm";
import Line from "../../components/line/Line";
import ImgArrow from "../../img/icon/arrow-left.svg";
import Popup from "../../components/popup/Popup";
import style from "./profileInfoPage.module.css";
import Spiner from "../../components/spiner/Spiner";

const ProfileInfoPage = () => {
  const { profiles } = useSelector((state) => state.profiles);
  const currentProfileId = +useParams().id;
  const currentProfile = profiles.find(
    (profile) => profile.id === currentProfileId
  );
  const [showPopup, setShowPopup] = useState(false);
  const { values, handleChange, setValues } = useForm({
    name: "",
    username: "",
    email: "",
    city: "",
    phone: "",
    company: "",
  });

  useEffect(() => {
    setValues({
      ...values,
      name: currentProfile?.name,
      username: currentProfile?.username,
      email: currentProfile?.email,
      city: currentProfile?.address.city,
      phone: currentProfile?.phone,
      company: currentProfile?.company.name,
    });
  }, [currentProfile]);

  useEffect(() => {
    let timer;
    if (showPopup) {
      timer = setTimeout(() => {
        setShowPopup(false);
      }, 4000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [showPopup]);

  const onSubmitForm = (event) => {
    event.preventDefault();
    setShowPopup(true);
  };

  const onChange = (event) => {
    handleChange(event);
  };

  const valueProfile = (values) => {
    if (!values) {
      return "";
    } else {
      return values;
    }
  };

  return currentProfile ? (
    <>
      {showPopup && <Popup state={setShowPopup} />}
      <div className={style.infoPage}>
        <Link className={style.link} to="/">
          <img
            className={style.linkImg}
            src={ImgArrow}
            alt="иконка стрелочки назад"
          />
          <p className={style.linkText}>НАЗАД</p>
        </Link>
        <div className={style.sections}>
          <section className={style.navSection}>
            <div className={style.img}></div>
            <ul className={style.navMenu}>
              <li className={`${style.navigate} ${style.navigate_active}`}>
                Данные профиля
                <p className={style.line}></p>
              </li>
              <li className={`${style.navigate} ${style.navigate_deactive}`}>
                Рабочее пространство
                <p className={style.line}></p>
              </li>
              <li className={`${style.navigate} ${style.navigate_deactive}`}>
                Приватность
                <p className={style.line}></p>
              </li>
              <li className={`${style.navigate} ${style.navigate_deactive}`}>
                Безопасность
                <p className={style.line}></p>
              </li>
            </ul>
          </section>
          <section className={style.inputSection}>
            <Line sectionName={"Данные профиля"} />
            <form className={style.form} onSubmit={onSubmitForm}>
              <div className={style.inputBlock}>
                <p className={style.title}>Имя</p>
                <input
                  className={style.input}
                  type={"text"}
                  name={"name"}
                  onChange={handleChange}
                  placeholder={"Имя"}
                  value={valueProfile(values.name)}
                  required
                />
              </div>
              <div className={style.inputBlock}>
                <p className={style.title}>Никнейм</p>
                <input
                  className={style.input}
                  type={"text"}
                  name={"username"}
                  onChange={onChange}
                  placeholder={"Никнейм"}
                  value={valueProfile(values.username)}
                  required
                />
              </div>
              <div className={style.inputBlock}>
                <p className={style.title}>Почта</p>
                <input
                  className={style.input}
                  type={"email"}
                  name={"email"}
                  onChange={onChange}
                  placeholder={"Почта"}
                  value={valueProfile(values.email)}
                  required
                />
              </div>
              <div className={style.inputBlock}>
                <p className={style.title}>Город</p>
                <input
                  className={style.input}
                  type={"text"}
                  name={"city"}
                  onChange={onChange}
                  placeholder={"Город"}
                  value={valueProfile(values.city)}
                  required
                />
              </div>
              <div className={style.inputBlock}>
                <p className={style.title}>Телефон</p>
                <input
                  className={style.input}
                  type={"tel"}
                  name={"phone"}
                  onChange={onChange}
                  placeholder={"Телефон"}
                  value={valueProfile(values.phone)}
                  required
                />
              </div>
              <div className={style.inputBlock}>
                <p className={style.title}>Название компании</p>
                <input
                  className={style.input}
                  type={"tel"}
                  name={"company"}
                  onChange={onChange}
                  placeholder={"Название компании"}
                  value={valueProfile(values.company)}
                  required
                />
              </div>
              <button className={style.button}>Сохранить</button>
            </form>
          </section>
        </div>
      </div>
    </>
  ) : (
    <div className={style.spiner}>
      <Spiner />
    </div>
  );
};

export default ProfileInfoPage;
