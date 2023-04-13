import { create } from "zustand";

const userDataStore = create((set) => ({
  data: {
    fullname: "",
    username: "",
    email: "",
    password: "",
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
        password: "",
        image: "",
        favorite: "",
        uid: "",
        createdAt: "",
      },
    }),
}));

export { userDataStore };
