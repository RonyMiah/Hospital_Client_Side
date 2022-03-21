import { useEffect, useState } from "react";
import InitializeFirebase from "../Component/Firebase/InitializeFirebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

/// Common Mistake is App.js AuthProvider ///////

InitializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const [isloading, setIsLoading] = useState(true);
  const [autherror, setAuthError] = useState();
  const [admin, setAdmin] = useState(false);
  const googleProvider = new GoogleAuthProvider();


  const registerUser = (email, password, name, location, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email: email, displayName: name };
        setUser(newUser);

        // Send data from Database Mongodb
        // just call function
        saveUserDatabase(email, name, "POST");

        // Send name data firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        const destination = location?.state?.from || "/";
        navigate(destination);

        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const singInUsingEmailPassword = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const signInUsingGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;

        // send data from Database Mongodb
        saveUserDatabase(user.email, user.displayName, 'PUT')

        //correct  location redirect

        const destination = location.state?.from || "/";
        navigate(destination);
        autherror("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // Obsurber manage Users

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, []);

  //   User Log Out

  const LogOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  // Send Data from Database

  const saveUserDatabase = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  // data load from database

  //
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user?.email]);


  return {
    user,
    admin,
    registerUser,
    singInUsingEmailPassword,
    LogOut,
    isloading,
    autherror,
    signInUsingGoogle,
    

  };
};

export default useFirebase;
