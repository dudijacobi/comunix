import React from "react";
import styled from "styled-components";
import { REGISTRETION_URL } from "../utils";

const LogIn = () => (
  <Container>
    <Title>Login to Spotify</Title>
    <Link href={REGISTRETION_URL}>Login to Spotify</Link>
  </Container>
);

export default LogIn;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Link = styled.a`
  background: green;
  color: white;
  padding: 10px;
  border-radius: 25px;
`;
