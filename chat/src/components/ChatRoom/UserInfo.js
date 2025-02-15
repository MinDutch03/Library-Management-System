import React from "react";
import { Button, Avatar, Typography } from "antd";
import styled from "styled-components";
import { auth, db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../context/AuthProvider";

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(82, 38, 83);

  .username {
    color: white;
    margin-left: 5px;
  }
`;

export default function UserInfo() {
  // React.useEffect(() => {
  //   const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
  //     const data = snapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     console.log({ data, snapshot, docs: snapshot.docs });
  //   });

  //   return () => unsubscribe();
  // }, []);

    const {user: {
      displayName,
      photoURL
    }} = React.useContext(AuthContext);
 



    return (
      <WrapperStyled>
        <div>
          <Avatar src={photoURL}>
            {photoURL ? '' : displayName && displayName?.charAt(0).toUpperCase()}
          </Avatar>{" "}
          <Typography.Text className="username"> {displayName} </Typography.Text>{" "}
        </div>{" "}
        <Button ghost onClick={() => auth.signOut()}>
          Sign Out
        </Button>{" "}
      </WrapperStyled>
    );
  }
