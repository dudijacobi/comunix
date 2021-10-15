import React from "react";
import styled from "styled-components";
import { REGISTRETION_URL } from "../utils";
import SpotifyIcon from "../assets/SpotifyIcon";

const LogIn = () => (
  <Container>
    <SpotifyIcon />
    <Title>Login to Spotify</Title>
    <Link href={REGISTRETION_URL}>Login to Spotify</Link>
  </Container>
);

export default LogIn;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
