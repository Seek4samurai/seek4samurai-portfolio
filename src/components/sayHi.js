import firebase from "firebase/compat/app";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import styled, { ThemeProvider } from "styled-components";
import { auth, db } from "../firebase-config";
import BackText from "../subComponents/BigText";
import HomeButton from "../subComponents/HomeButton";
import SocialIcons from "../subComponents/SocialIcons";
import { lightTheme } from "./themes";
import toast, { Toaster } from "react-hot-toast";

const Box = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  background-color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;

  /* @media only screen and (max-width: 760px) { */
  overflow-y: scroll;
  /* } */
`;

const Container = styled.div``;
const Greets = styled.div`
  color: ${(props) => props.theme.text};
  font-family: "Vogue", serif;
  font-weight: 800;
  font-weight: bold;

  position: absolute;
  top: 10%;

  @media only screen and (min-width: 525px) {
    left: 2rem;
  }
  @media only screen and (max-width: 525px) {
    right: 2rem;
  }
`;

const FormHolder = styled.form`
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
  z-index: 100;

  display: flex;
  @media only screen and (max-width: 760px) {
    flex-direction: column;
  }
`;
const Input = styled.input`
  padding: 0.5rem;
  height: 1.7rem;
  width: 20vw;

  font-size: 1rem;
  font-family: "Vogue", serif;

  border: none;
  border-radius: 6px;
  margin-right: 1rem;

  @media only screen and (max-width: 760px) {
    width: 40vw;
  }
`;
const Submit = styled.input`
  font-family: "Vogue", serif;
  font-size: 0.9rem;
  font-weight: bold;
  color: ${(props) => props.theme.text};

  padding: 8px;

  border: none;
  border-radius: 6px;
  :hover {
    background-color: ${(props) => props.theme.text};
    color: white;
  }
`;

const AllComm = styled.div`
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translateX(-50%);

  width: 400px;
  padding: 2rem;

  @media only screen and (max-width: 760px) {
    width: 300px;
    padding-bottom: 8rem;
  }
`;
const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${(props) => props.theme.text};

  padding: 1rem;
  margin: 1rem;
  margin-bottom: 1.6rem;

  z-index: 5;
  border-radius: 14px;
  background: linear-gradient(225deg, #fff0fb, #e6cad4);
  box-shadow: -10px 10px 20px #cfb5be, 10px -10px 20px #ffffff;
`;
const ProfileHolder = styled.img`
  padding: 0.5;
  width: 3.5rem;
  height: 3.5rem;

  border: 3px solid #ff99bd;
  border-radius: 14px;

  background: #ffe0eb;
  box-shadow: -10px 10px 20px #cfb5be, 10px -10px 20px #ffffff;

  @media only screen and (max-width: 760px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
const CommText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  padding: 0.6rem;

  color: ${(props) => props.theme.text};
  font-size: 1rem;
  font-family: "Vogue", serif;
  font-weight: bold;
`;
const By = styled.div`
  padding-top: 0.2rem;
  font-size: 0.9rem;
  @media only screen and (max-width: 760px) {
    font-size: 0.7rem;
  }
`;
const CommHolder = styled.div`
  display: flex;

  color: ${(props) => props.theme.text};
  font-size: 1.1rem;
  font-family: "Vogue", serif;
  font-weight: bold;
  @media only screen and (max-width: 760px) {
    font-size: 0.8rem;
  }
`;

const SayHi = () => {
  const [comment, setComment] = useState("");
  const [user] = useAuthState(auth);

  const [commentSnapShot] = useCollection(
    db.collection("comments").orderBy("timestamp", "desc")
  );

  useEffect(() => {
    if (user) {
      toast.success(`Logged in as ${user.displayName}.`);
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

    if (!user) {
      toast.error("Make sure you're logged in.");
    } else {
      if (comment !== "") {
        db.collection("comments").doc().set({
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          comment: comment,
          by: user.displayName,
          photoURL: user.photoURL,
        });

        setComment("");
        toast("Thanks!", {
          icon: "👏",
        });
      }
    }
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
        <Box>
          <Greets>
            <h1>Hello,</h1>
            <br></br>
            {user?.displayName}
            {user ? null : <div>Stranger</div>}
          </Greets>
          <Container>
            <FormHolder onSubmit={handlePost}>
              <label>
                <Input
                  type="text"
                  id="commentInput"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </label>
              <Submit type="submit" />
            </FormHolder>
            <AllComm>
              {commentSnapShot ? (
                commentSnapShot.docs.map((data) => (
                  <>
                    <CommentContainer>
                      <ProfileHolder
                        src={data.data().photoURL}
                        alt="user profile"
                      ></ProfileHolder>
                      <CommText>
                        <CommHolder>"{data.data().comment}"</CommHolder>
                        <By>By {data.data().by}</By>
                      </CommText>
                    </CommentContainer>
                  </>
                ))
              ) : (
                <h2>Loading</h2>
              )}
            </AllComm>
          </Container>
          <Toaster position="bottom-right" reverseOrder={false}></Toaster>
          <BackText text="Say cute!" top="3%" right="10%"></BackText>
        </Box>
      </motion.div>
    </ThemeProvider>
  );
};

export default SayHi;
