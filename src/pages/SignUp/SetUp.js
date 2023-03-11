import { useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";
import { storage, db } from "../../config";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  listAll,
} from "firebase/storage";
import { AuthContext, StyleContext } from "../../config";
import { signOut, updateProfile } from "firebase/auth";
import { setDoc, Timestamp, doc } from "firebase/firestore";

export default function ({ newUser, setNewUser }) {
  const imageRef = useRef(null);
  const navigate = useNavigate();

  const { auth } = useContext(AuthContext);
  const { sendToast } = useContext(StyleContext);

  const completeSignUp = async () => {
    try {
      const fileSnapshot = await uploadBytes(
        ref(
          storage,
          `userFiles/${newUser.userId}/${imageRef.current.files[0].name}`
        ),
        imageRef.current.files[0]
      );
      const fileURL = await getDownloadURL(fileSnapshot.ref);
      setNewUser((prev) => {
        return { ...prev, photoURL: fileURL };
      });

      const allTempFiles = await listAll(
        ref(storage, `userFiles/${newUser.userId}/temp`)
      );
      allTempFiles.items.forEach((item) => {
        deleteObject(item);
      });

      await updateProfile(auth.currentUser, {
        displayName: newUser.displayName,
        photoURL: fileURL,
      });

      const newUserInfo = {
        displayName: newUser.displayName,
        photoURL: fileURL,
      };

      const newUserDetails = {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        profile: newUser.profile,
        joinDate: Timestamp.now(),
        points: 0,
        articles: [],
        opinions: [],
        votes: [],
        groups: [],
      };

      await setDoc(doc(db, "userInfo", newUser.userId), newUserInfo);
      await setDoc(doc(db, "userDetails", newUser.userId), newUserDetails);
      await signOut(auth);
      sendToast(
        "success",
        "User information upload successful. Please sign in again."
      );
      navigate(`/login`);
    } catch (error) {
      sendToast("error", `An error has occured: ${error.message}`);
    }
  };

  const uploadPhoto = (e) => {
    uploadBytes(
      ref(
        storage,
        `userFiles/${newUser.userId}/temp/${e.target.files[0].name}`
      ),
      e.target.files[0]
    ).then((snapShot) => {
      sendToast("success", "Image uploaded successfully.");
      getDownloadURL(snapShot.ref).then((url) => {
        setNewUser((prev) => {
          return { ...prev, photoURL: url };
        });
      });
    });
  };

  return (
    <>
      <div className="container set_up px-md-5 px-2">
        <h1>Set up your profile</h1>
        <div className="row">
          <div className="col-12">
            <img src={newUser.photoURL} className="profile_photo" />
          </div>
          <div className="col-12">
            <label for="photo" className="form-label">
              Pick a profile photo
            </label>
            <input
              className="form-control"
              type="file"
              accept="image/*"
              id="photo"
              ref={imageRef}
              onChange={uploadPhoto}
            />
          </div>
          <div className="col-md-4 col-12">
            <label for="displayname" className="form-label">
              Pick a username
            </label>
            <input
              type="text"
              className="form-control"
              id="displayName"
              placeholder="Your username"
              onChange={(e) =>
                setNewUser((prev) => {
                  return { ...prev, displayName: e.target.value };
                })
              }
            />
          </div>
          <div className="col-md-4 col-12">
            <label for="firstname" className="form-label">
              What's your first name?
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="Your first name"
              onChange={(e) =>
                setNewUser((prev) => {
                  return { ...prev, firstName: e.target.value };
                })
              }
            />
          </div>
          <div className="col-md-4 col-12">
            <label for="lastname" className="form-label">
              What's your last name?
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Your last name"
              onChange={(e) =>
                setNewUser((prev) => {
                  return { ...prev, lastName: e.target.value };
                })
              }
            />
          </div>
          <div className="col-12">
            <label for="profile" className="form-label">
              Public Bio
            </label>
            <textarea
              className="form-control"
              id="profile"
              rows="10"
              onChange={(e) =>
                setNewUser((prev) => {
                  return { ...prev, profile: e.target.value };
                })
              }
            ></textarea>
          </div>
          <div className="col-12 text-center">
            <button
              type="button"
              className="btn submit--btn px-4"
              onClick={completeSignUp}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
