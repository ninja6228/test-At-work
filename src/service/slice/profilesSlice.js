import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

const BASE_URL = "https://jsonplaceholder.typicode.com/users?_limit=6"

const initialState = {
  profiles: [],
  archiveArr: [],
  profilesLoadingStatus: "idle",
};

export const fetchProfiles = createAsyncThunk("fetchProfiles", () => {
  const { request } = useHttp();
  return request(BASE_URL);
});

const profilesSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    deleteProfile: (state, action) => {
      state.profiles = state.profiles.filter(
        (profile) => profile.id !== action.payload
      );
    },
    archiveProfile: (state, action) => {
      const curretProfile = state.profiles.find(
        (profile) => profile.id === action.payload
      );
      if (curretProfile) {
        state.profiles = state.profiles.filter(
          (profile) => profile.id !== action.payload
        );
        state.archiveArr.push(curretProfile);
      }
    },
    activeProfile: (state, action) => {
      const curretProfile = state.archiveArr.find(
        (profile) => profile.id === action.payload
      );
      if (curretProfile) {
        state.archiveArr = state.archiveArr.filter(
          (profile) => profile.id !== action.payload
        );
        state.profiles.push(curretProfile);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfiles.pending, (state) => {
        state.profilesLoadingStatus = "loading";
      })
      .addCase(fetchProfiles.fulfilled, (state, action) => {
        state.profiles = action.payload;
        state.profilesLoadingStatus = "idle";
      })
      .addCase(fetchProfiles.rejected, (state) => {
        state.profilesLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = profilesSlice;
export default reducer;
export const { deleteProfile, archiveProfile, activeProfile } = actions;
