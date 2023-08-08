
import { use } from 'react';
import { auth, signOut ,createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword } from '../firebaseConfig';

export const handleSignUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // User signed up successfully
    const user = userCredential.user;
    console.log(user)
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error signing up:", errorMessage);
  }
};

export const handleLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error logging in:", errorMessage);
  }
};

// console.log(userCredential.user)
export const handleLogOut = async () => {
  try {
    await signOut(auth);
    console.log(auth)
  } catch (error) {
    console.log("Error:", error);
  }
};

// export const handleInfo = async () => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       const uid = user.uid;
//       console.log(uid)

//     } else {
//       console.log("already logged out")
    
//     }
//   });

// }




export const fetchUserInfo = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user.uid);
      } else {
        resolve(null);
      }
    });
  });
};
// export const fetchUserInfo = () => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/auth.user
//       const uid = user.uid;
//       console.log(uid)
//       return uid
//       // ...
//     } else {
//       console.log("hi")
//       return null
//       // User is signed out
//       // ...
//     }
//   });
// };