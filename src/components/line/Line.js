import style from "./line.module.css";

const Line = ({ sectionName }) => {
  return (
    <div className={style.sectionLine}>
      <h2 className={style.name}>{sectionName}</h2>
      <div className={style.line}></div>
    </div>
  );
};

export default Line;
