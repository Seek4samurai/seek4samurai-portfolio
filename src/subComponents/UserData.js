import React from "react";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "../firebase-config";

const Status = styled.div`
  position: absolute;
  top: 90%;
  left: 2rem;
  color: ${(props) => props.theme.text};
  z-index: 100;

  font-family: "Vogue", serif;
  font-weight: 800;
  font-weight: bold;

  @media only screen and (max-width: 670px) {
    left: 0.5rem;
    font-size: 0.8rem;
    text-align: center;
  }
`;

const Stat = styled.h2`
  font-weight: bold;
  letter-spacing: -2px;
`;

const LogIn = styled.p`
  text-decoration: underline;
  color: ${(props) => props.theme.text};

  cursor: pointer;

  width: fit-content;
  border: none;
`;

const LogOut = styled.p`
  width: fit-content;
  cursor: pointer;
  text-decoration: underline;
`;

const UserData = () => {
  const [user, loading] = useAuthState(auth);

  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  const handleLogOut = () => {
    auth.signOut();
  };

  if (loading)
    return (
      <Status>
        <Stat>Loading user...</Stat>
      </Status>
    );

  return (
    <Status>
      <Stat>Logged in as:</Stat>
      <br></br>
      {user ? (
        <div>{user?.displayName}</div>
      ) : (
        <LogIn onClick={signIn} variant="outlined">
          Log in
        </LogIn>
      )}
      {user ? <LogOut onClick={handleLogOut}>Log Out</LogOut> : null}
    </Status>
  );
};

export default UserData;
