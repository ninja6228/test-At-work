import React from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "../header/Header";
import { useEffect } from "react";
import { fetchProfiles } from "../../service/slice/profilesSlice";
import ProfilesListPage from "../../page/profilesListPage/ProfilesListPage";
import ProfileInfoPage from "../../page/profileInfopage/ProfileInfoPage";
import style from "./app.module.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfiles());
  }, []);

  return (
    <main className={style.app}>
      <Header />
      <Routes>
        <Route path="/" element={<ProfilesListPage />} />
        <Route path="/profile/:id" element={<ProfileInfoPage />} />
      </Routes>
    </main>
  );
}

export default App;
