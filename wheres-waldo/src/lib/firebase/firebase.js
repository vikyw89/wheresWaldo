import { getDownloadURL, getStorage, ref } from "firebase/storage"
import { FirebaseConfigInit } from "./config"

FirebaseConfigInit()

const storage = getStorage()

export class FirebaseStorage {
    static getURL = async (file) => {
        const url = await getDownloadURL(ref(storage,file))
        return url
    }
}