import { create } from "zustand";

const userDataStore = create((set) => ({
  data: {
    fullname: "",
    username: "",
    email: "",
    image: "",
    favorite: "",
    uid: "",
    createdAt: "",
  },
  updateData: (newData: { [key: string]: string }) =>
    set((state: any) => ({ data: { ...state.data, ...newData } })),
  resetData: () =>
    set({
      data: {
        fullname: "",
        username: "",
        email: "",
        image: "",
        favorite: "",
        uid: "",
        createdAt: "",
      },
    }),
}));

const loggedInUser = create((set) => ({
  data: {
    fullname: "",
    username: "",
    email: "",
    image: "",
    favorite: "",
    uid: "",
    createdAt: "",
  },
  updateData: (newData: { [key: string]: string }) =>
    set((state: any) => ({ data: { ...state.data, ...newData } })),
  resetData: () =>
    set({
      data: {
        fullname: "",
        username: "",
        email: "",
        image: "",
        favorite: "",
        uid: "",
        createdAt: "",
      },
    }),
}));

export { userDataStore, loggedInUser };
