import { defineStore } from "pinia";
import { baseService } from "@/services/baseService";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
export const useBaseStore = defineStore("baseStore", {
  state: () => ({
    rail: false,
    isLogedin: false,
    snack: {
      status: false,
      message: "",
      color: "red",
    },
    overlay: false,
    loginData: null,
    userData: null,
    registerData: null,
  }),
  actions: {
    snackChange(data: any) {
      this.snack = data;
    },
    overlayChange(data: boolean) {
      this.overlay = data;
    },
    async loginAction(auth: any, username: string, password: string) {
      await baseService.loginService(auth, username, password).then((resp) => {
        if (resp.user) {
          this.isLogedin = true;
          this.loginData = resp;
        }
      });
      return this.loginData;
    },
    async registerAction(auth: any, username: string, password: string) {
      const userCredential = await baseService.registerService(
        auth,
        username,
        password
      ) ;
      await setDoc(doc(db, "users", userCredential.user.uid), {
        hasCompletedInitialSetup: false,
        createdAt: new Date(),
      });
      await baseService.fetchDocByUuid(userCredential.user.uid).then((resp) => {
        this.isLogedin = true;
        this.registerData = resp;
        this.loginData = resp;
        this.userData = resp;
      });
      return this.registerData;
    },
    async getUserData(uuId: string) {
      await baseService.fetchDocByUuid(uuId).then((resp) => {
        this.userData = resp;
      });
      return this.userData;
    },
  },
  persist: true,
});
