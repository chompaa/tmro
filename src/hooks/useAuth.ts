import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { child, get, getDatabase, ref } from "firebase/database";
import { useEffect, useState } from "preact/hooks";

export const useAuth = ({
  onSignInExists,
  onSignInNotExists,
  onSignOut,
}: {
  onSignInExists: (lists: any) => void;
  onSignInNotExists: () => void;
  onSignOut: () => void;
}) => {
  const [user, setUser] = useState<string | null>(null);

  const firebaseConfig = {
    apiKey: "AIzaSyDCI-G8rde1guG1vIVhBzb9p1e8jzSP3a4",
    authDomain: "trello-clone-b3c76.firebaseapp.com",
    databaseURL:
      "https://trello-clone-b3c76-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "trello-clone-b3c76",
    storageBucket: "trello-clone-b3c76.appspot.com",
    messagingSenderId: "712863136216",
    appId: "1:712863136216:web:00020f5948777f3f415aad",
  };

  initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  const _signIn = () => {
    const auth = getAuth();

    signInWithPopup(auth, provider);
  };

  const _signOut = () => {
    const auth = getAuth();

    signOut(auth).then(() => {
      onSignOut();
      setUser(null);
    });
  };

  useEffect(() => {
    const auth = getAuth();

    auth.onAuthStateChanged((user) => {
      if (!user) {
        return;
      }

      setUser(user.uid);

      const db = getDatabase();

      get(child(ref(db), `users/${user.uid}`)).then((snapshot) => {
        if (snapshot.exists()) {
          onSignInExists(snapshot.val().lists);
          // setLists(snapshot.val().lists);
        } else {
          onSignInNotExists();
          // updateLists([]);
        }
      });
    });
  }, []);

  return { user, signIn: _signIn, signOut: _signOut };
};
