import { getDownloadURL, getStorage, ref } from "firebase/storage"
import { app } from "./config"

export class FirebaseStorage {
    static storage = getStorage(app)
    static getURL = async (file) => {
        const url = await getDownloadURL(ref(this.storage, file))
        return url
    }
}
