import { useEffect, useState } from "react";
import { app } from "./firebaseConfig";

import { getStorage } from "firebase/storage";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll
} from "firebase/storage";

const storage = getStorage(app);

const Storage = () => {

    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    const imagesListRef = ref(storage, "temp/");
  
    const uploadFile = () => {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `temp/${imageUpload.name}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    };
  
    useEffect(() => {
      listAll(imagesListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageUrls((prev) => [...prev, url]);
          });
        });
      });
    }, []);

    return (
        <div className="App">
          <input
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
          <button onClick={uploadFile}> Upload Image</button>
          {imageUrls.map((url) => {
            return <img src={url} />;
          })}
        </div>
      );


};

export default Storage;