import firebase from "firebase/compat/app";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled, { ThemeProvider } from "styled-components";
import { auth, db, provider } from "../firebase-config";
import BackText from "../subComponents/BigText";
import HomeButton from "../subComponents/HomeButton";
import SocialIcons from "../subComponents/SocialIcons";
import UserData from "../subComponents/UserData";
import { lightTheme } from "./themes";
import { useCollection } from "react-firebase-hooks/firestore";

const Box = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  background-color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div``;
const Greets = styled.div`
  color: ${(props) => props.theme.text};
  font-family: "Vogue", serif;
  font-weight: 800;
  font-weight: bold;

  position: absolute;
  top: 10%;
  left: 2rem;
`;

const SayHi = () => {
  const [comment, setComment] = useState("");
  const [user, loading] = useAuthState(auth);

  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set(
        {
          email: user.email,
          lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL: user.photoURL,
        },
        { merge: true }
      );
    }
  }, [user]);

  const handlePost = (e) => {
    e.preventDefault();

    db.collection("comments").doc(user.uid).set({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      comment: comment,
      by: user.displayName,
    });
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0 }}
      >
        <SocialIcons></SocialIcons>
        <HomeButton theme={"light"}></HomeButton>
        <UserData></UserData>
        <Box>
          <Greets>
            <h1>Hello,</h1>
            <br></br>
            {user?.displayName}
            {user ? null : (
              <button onClick={signIn} variant="outlined">
                Sign in
              </button>
            )}
          </Greets>
          <Container>
            <form onSubmit={handlePost}>
              <label>
                Enter your name:
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </label>
              <input type="submit" />
            </form>
          </Container>
          <BackText text="Say cute!" top="3%" right="10%"></BackText>
        </Box>
      </motion.div>
    </ThemeProvider>
  );
};

export default SayHi;
