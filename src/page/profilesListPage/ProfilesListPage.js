import { useSelector } from "react-redux";
import RenderList from "../../components/renderList/RenderList";
import style from "./profilesListPage.module.css";

const ProfilesListPage = () => {
  const { profiles, profilesLoadingStatus, archiveArr } = useSelector(
    (state) => state.profiles
  );

  return (
    <div className={style.ProfilesListPage}>
      <RenderList
        arr={profiles}
        state={false}
        nameSection={"Активные"}
        loading={profilesLoadingStatus}
      />
      <RenderList
        arr={archiveArr}
        state={true}
        nameSection={"Архив"}
        loading={profilesLoadingStatus}
      />
    </div>
  );
};

export default ProfilesListPage;
