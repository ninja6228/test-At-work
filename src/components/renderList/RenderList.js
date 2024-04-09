import Card from "../../components/card/Card";
import Line from "../../components/line/Line";
import Spiner from "../spiner/Spiner";
import style from "./renderList.module.css";

const RenderList = ({ arr, state, nameSection, loading }) => {
  return (
    <>
      <Line sectionName={nameSection}></Line>
      <ul className={style.sectionCards}>
        {loading ==="loading" ? (
          <div className={style.spiner}>
            <Spiner />
          </div>
        ) : null}
        {arr.map((card) => (
          <li className={style.card} key={card.id}>
            <Card date={card} archive={state} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RenderList;
