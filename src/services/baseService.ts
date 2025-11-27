import axios from "axios";
import { useBaseStore } from "../stores/baseStore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
async function loginService(auth: any, username: string, password: string) {
  const baseStore = useBaseStore();
  baseStore.overlayChange(true);
  try {
    const response = await signInWithEmailAndPassword(auth, username, password);
    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
}
async function registerService(auth: any, username: string, password: string) {
  const baseStore = useBaseStore();
  baseStore.overlayChange(true);
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      username,
      password
    );
    return handleSuccess(response);
  } catch (error) {
    return handleError(error);
  }
}
async function fetchDocByUuid(uuid: string) {
  try {
    const docRef = doc(db, "users", uuid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      docSnap.data();
      return handleSuccess(docSnap.data());
    }
  } catch (error) {
    return handleError(error);
  }
}
async function updateDocByUuid(uuid: string) {
  try {
    const docSnap = await setDoc(doc(db, "users", uuid), {
      hasCompletedInitialSetup: false,
      createdAt: new Date(),
    });

    return handleSuccess(docSnap);
  } catch (error) {
    return handleError(error);
  }
}
const handleSuccess = (data: any) => {
  const baseStore = useBaseStore();
  baseStore.overlayChange(false);
  return data;
};
const handleError = (data: any) => {
  const baseStore = useBaseStore();
  baseStore.overlayChange(false);
  baseStore.snackChange({
    status: true,
    message: data.message,
    color: "red-darken-4",
  });
  return data;
};
export const baseService = {
  loginService,
  registerService,
  fetchDocByUuid,
  updateDocByUuid
};
