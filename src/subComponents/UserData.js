import React from "react";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase-config";

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
    top: 78%;
    left: 50%;
    transform: translateX(-50%);

    font-size: 0.8rem;
    text-align: center;
  }
`;

const Stat = styled.h2`
  font-weight: bold;
  letter-spacing: -2px;
`;

const LogOut = styled.p`
  width: fit-content;
  cursor: pointer;
  text-decoration: underline;
`;

const UserData = () => {
  const [user, loading] = useAuthState(auth);

  if (loading)
    return (
      <Status>
        <Stat>Loading user...</Stat>
      </Status>
    );

  return (
    <Status>
      <Stat>Logged in as:</Stat>
      {user ? <div>{user?.email}</div> : <div>None</div>}
      {user ? <LogOut>Log Out</LogOut> : null}
    </Status>
  );
};

export default UserData;
