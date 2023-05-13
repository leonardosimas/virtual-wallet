import type { NextPage } from "next";
import {
  Button,
  Card,
  Col,
  Container,
  Grid,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";

import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { GenerateSecretPhrase } from "../functions/GenerateSecretPhrase";
import SecretPhraseCard from "../components/Cards/SecretPhraseCard";
import { secretPhraseDisclaimer, secretPhraseText } from "../assets/text";
import styles from "../styles/Create-wallet.module.css";
import { useMediaQuery } from "../hooks/useMediaQuery.js";

const Home: NextPage = () => {
  const isXs = useMediaQuery(600);
  const isSm = useMediaQuery(768);
  const isMd = useMediaQuery(992);
  const { push, back } = useRouter();

  const getSecretPhrase = async () => {
    const { mnemonicToShow, privateKey, publicKey, address } =
      await GenerateSecretPhrase();
    setSecretPhrase(mnemonicToShow);
    setPrivateKey(privateKey);
    setPublicKey(publicKey);
    setAddress(address);
  };

  const [secretPhrase, setSecretPhrase] = useState<string[]>([]);
  const [privateKey, setPrivateKey] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [address, setAddress] = useState("");

  return (
    <Container
      fluid
      responsive={false}
      display={"flex"}
      gap={0}
      alignItems={"center"}
      justify={"center"}
      direction={"row"}
      css={{
        background: "#E4E4DC",
        height: "auto",
        
      }}
    >
      <Row
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Header />
        <Col
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "3rem",
            "@smMax": {
              padding: "0 1rem", // ajusta a margem lateral para 1rem em telas menores
            },
          }}
        >
          <Text
            css={{
              marginTop: "1rem",
              marginBottom: "1rem",
              fontSize: "4vh",
              fontFamily: "$poppins",
              textAlign: "center",
              "@smMax": {
                fontSize: "24px",
                width: "100%",
              },
            }}
          >
            <b>Mnemônico</b> - Frase Secreta
          </Text>
          <Text
            css={{
              marginBottom: "1rem",
              width: "80%",
              fontSize: "16px",
              fontFamily: "$poppins",
              textAlign: "justify",
              "@smMax": {
                fontSize: "16px",
                width: "100%",
                textAlign: "justify",
              },
            }}
          >
            <span>{secretPhraseText}</span>
          </Text>

          <Text
            css={{
              marginBottom: "1rem",
              width: "80%",
              fontSize: "16px",
              fontFamily: "$poppins",
              textAlign: "center",
              "@smMax": {
                fontSize: "16px",
                width: "100%",
                textAlign: "justify",
              },
            }}
          >
            <b>ATENÇÃO:</b>&nbsp;{secretPhraseDisclaimer}
          </Text>

          <Text
            css={{
              marginBottom: "1rem",
              width: "80%",
              fontSize: "4vh",
              fontWeight: "bold",
              fontFamily: "$poppins",
              textAlign: "center",
              "@smMax": {
                fontSize: "16px",
                width: "100%",
                textAlign: "center",
              },
            }}
          >
            ANOTE SUA FRASE SECRETA
          </Text>
          <Grid.Container
            gap={1}
            justify="center"
            css={{
              width: "80%",
              borderRadius: "1rem",
              backgroundColor: "$virtualWalletSnowDrift",
              padding: "1rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "2rem",
              "@smMax": {
                padding: 0,
                marginBottom: "1rem",
                width: "100%",
              },
            }}
          >
            {secretPhrase.map((phrase, index) => (
              <Grid
                key={index}
                lg={3}
                md={3}
                sm={4}
                xs={6}
                css={{ justifyContent: "center" }}
              >
                <SecretPhraseCard i={index + 1} secretPhrase={phrase} />
              </Grid>
            ))}
          </Grid.Container>
          <Button
            rounded
            auto
            css={{
              backgroundColor: "$virtualWalletPaleLeaf",
              color: "$virtualWalletOxley",
              borderRadius: "40px",
              height: "7vh",
              width: "80%",
              fontSize: "16px",
              fontFamily: "$poppins",
              fontWeight: "bold",
              marginBottom: "2rem",
              "@smMax": {
                width: "100%",
                height: "3rem",
              },
            }}
            onPress={() => getSecretPhrase()}
          >
            Gerar Mnemônico
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
