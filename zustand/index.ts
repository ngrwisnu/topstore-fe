import { create } from "zustand";

export const useUserFormStore = create((set) => ({
  data: {
    fullname: "",
    username: "",
    email: "",
    password: "",
  },
  addSignUpData: (formValues: { [key: string]: string }) =>
    set((state: any) => ({ data: { ...state.data, ...formValues } })),
}));
