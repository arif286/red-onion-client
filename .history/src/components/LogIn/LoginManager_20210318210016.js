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
        const { displayName, email, password, phone, photoURL } = res.user;
        const loggedInUserInfo = {
          isSignedIn: true,
          name: displayName,
          email: email,
          password: password,
          photo: photoURL,
          phone: phone,
        };
        loggedInUserInfo.error = '';
        loggedInUserInfo.success = true;
      console.log(res.user);
        return loggedInUserInfo;
          })
      .catch((error) => {
          const loggedInUserInfo = {};
          loggedInUserInfo.error = error.message;
        loggedInUserInfo.success = false;
        console.log(error.message)
        return loggedInUserInfo;
      });
}

export const createAccountWithEmailPassword = (email, password, name) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const { email, password, displayName } = res;
      const newUserInfo = {
        email: email,
        password: password,
        name: displayName,
      };
      newUserInfo.error = '';
      newUserInfo.success = true;
      updateUserName(name);
      return newUserInfo;
    })
    .catch((error) => {
      console.log(error);
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
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

      // ...
    });
}