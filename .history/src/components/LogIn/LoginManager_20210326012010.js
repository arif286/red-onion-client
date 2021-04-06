import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";


export const initializeLoginFramework = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};

const provider = new firebase.auth.GoogleAuthProvider();

export const handleGoogleSingIn = () => {
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {

          const { displayName, email, phoneNumber, photoURL } = result.user;
          const signInUser = {
              isSignIn: true,
              name: displayName,
              email: email,
              phone: phoneNumber,
              photo: photoURL,
          };
          return signInUser;
      })
      .catch((error) => {
        // Handle Errors here.
        const signInUser = {
          isSignIn: false,
          name: '',
          email: '',
          password: '',
          phone: '',
          photo: '',
        }
        signInUser.error = error.message;
        return signInUser;
      });
}
export const logInWithEmailPassword = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        res.error = '';
        res.success = true;
        return res;
          })
      .catch((error) => {
        error.error = error.message;
        error.success = false;
        console.log(error.message)
        return error;
      });
}

export const createAccountWithEmailPassword = (email, password, name) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      res.error = '';
      res.success = true;
      updateUserName(name);
      return res;
    })
    .catch((error) => {
      console.log(error);
      error.error = error.message;
      error.success = false;
      return error;
    });
};

const updateUserName = (name) => {
  const user = firebase.auth().currentUser;

  user
    .updateProfile({
      displayName: name,
    })
    .then(function () {
      // Update successful.
      console.log("user name update");
    })
    .catch(function (error) {
      // An error happened.
      console.log(error);
    });
};

const fbProvider = new firebase.auth.FacebookAuthProvider();

export const handleFacebookSignIn = () => {
   return firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then((result) => {
      const { displayName, email, phoneNumber, photoURL } = result.user;
      const signInUser = {
        isSignIn: true,
        name: displayName,
        email: email,
        phone: phoneNumber,
        photo: photoURL,
      };
      return signInUser;
    })
     .catch((error) => {
      console.log(error);
      const signInUser = {
        isSignIn: false,
        name: "",
        email: "",
        password: "",
        phone: "",
        photo: "",
      };
      signInUser.error = error.message;
      return signInUser;
    });
}