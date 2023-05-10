import type { NextPage } from "next";
import {
  Button,
  Card,
  Col,
  Container,
  Grid,
  Image,
  Row,
  Spacer,
  Table,
  Text,
} from "@nextui-org/react";

import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { GenerateSecretPhrase } from "../functions/GenerateSecretPhrase";

const Home: NextPage = () => {
  const { push, back } = useRouter();

  useEffect(() => {
    const getSecretPhrase = async () => {
      const { mnemonicToShow, privateKey, publicKey, address } =
        await GenerateSecretPhrase();
      setSecretPhrase(mnemonicToShow);
      setPrivateKey(privateKey);
      setPublicKey(publicKey);
      setAddress(address);
    };
    getSecretPhrase();
  }, []);

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
        display: "flex",
        margin: "0",
        padding: "0",
        backgroundColor: "$virtualWalletSnowDrift",
        minHeight: "100%",
        maxW: "100%",
        width: "100%",
        "@smMax": {
          width: "fit-content",
        },
      }}
    >
      <Row
        justify={"center"}
        css={{
          position: "absolute",
          height: "100%",
          width: "100%",
          right: 0,
          left: 0,
          "@smMax": {
            width: "100%",
          },
        }}
      >
        <Header />
      </Row>
      <Col
        css={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          marginTop: "8rem",
          marginLeft: "8.5rem",
          "@smMax": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            margin: 0,
            padding: 0,
            marginTop: "10rem",
          },
        }}
      >
        <Row
          css={{
            "@smMax": {
              width: "335px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            },
          }}
        >
          <Button
            rounded
            auto
            css={{
              backgroundColor: "$virtualWalletPaleLeaf",
              borderRadius: "48px",
              height: "48px",
              width: "48px",
              minWidth: "48px",
              maxWidth: "48px",
              "@smMax": {
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
                alignItems: "center",
                borderRadius: "48px",
                height: "40px",
                width: "40px",
                minWidth: "40px",
                maxWidth: "40px",
                margin: 0,
                marginTop: "-3rem",
                marginBottom: "8rem",
              },
            }}
            onPress={() => back()}
          ></Button>
        </Row>
        <Col
          css={{
            "@smMax": {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-3rem",
            },
          }}
        >
          <Text
            css={{
              marginTop: "1rem",
              marginBottom: "3.125rem",
              fontSize: "36px",
              fontFamily: "$poppins",
              "@smMax": {
                marginTop: "-4rem",
                fontSize: "24px",
                width: "335px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              },
            }}
          >
            <b>Mnemônico</b> - Frase de recuperação secreta
          </Text>
          <Text
            css={{
              marginTop: "-2rem",
              marginBottom: "3.125rem",
              width: "600px",
              fontSize: "16px",
              fontFamily: "$poppins",
              "@smMax": {
                marginTop: "-2rem",
                fontSize: "14px",
                width: "335px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              },
            }}
          >
            Gerar um mnemônico é uma prática comum na criação de carteiras de
            criptomoedas, principalmente em hardware wallets e carteiras
            virtuais. Essa técnica de segurança visa garantir que o acesso aos
            ativos digitais seja restrito apenas ao proprietário da carteira,
            uma vez que o mnemônico é uma espécie de senha mestra que permite
            recuperar a carteira em caso de perda ou dano do dispositivo físico.
            Além disso, os mnemônicos são criados a partir de uma sequência
            aleatória de palavras que aumentam a segurança do processo, tornando
            praticamente impossível que alguém possa adivinhar a combinação
            correta. O uso de mnemônicos é uma medida importante para garantir a
            segurança dos investimentos em criptomoedas.
          </Text>
          <Text
            css={{
              marginTop: "-2rem",
              marginBottom: "3.125rem",
              width: "400px",
              fontSize: "16px",
              fontFamily: "$poppins",
              "@smMax": {
                marginTop: "-2rem",
                fontSize: "14px",
                width: "335px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              },
            }}
          >
            <b>ATENÇÃO:</b> Nunca compartilhe a sua chave de segurança. Qualquer
            pessoa em posse de sua frase, pode tomar os seus ativos. Se você não
            tiver uma frase de segurança, os ativos não são seus.
          </Text>
          <Text
            css={{
              marginTop: "-2rem",
              width: "400px",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "$poppins",
              "@smMax": {
                marginTop: "-2rem",
                fontSize: "14px",
                width: "335px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              },
            }}
          >
            ANOTE SUA FRASE
          </Text>

          <Grid.Container
            gap={1}
            justify="center"
            css={{
              width: "520px",
              height: "135px",
              fontSize: "16px",
              fontFamily: "$poppins",
              border: "1px solid #E6E6F0",
              borderRadius: "4px",
              backgroundColor: "$virtualWalletWhite",
              marginTop: "1rem",
              padding: "1rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              MarginLeft: "0",
              "@smMax": {
                width: "335px",
                height: "205px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "space-evenly",
                justifyContent: "center",
                marginLeft: "-0.5rem",
                padding: "1rem",
              },
            }}
          >
            <Grid sm={2} xs={4} css={{ justifyContent: "center" }}>
              <Text>{secretPhrase[0]}</Text>
            </Grid>
            <Grid sm={2} xs={4} css={{ justifyContent: "center" }}>
              <Text>{secretPhrase[1]}</Text>
            </Grid>
            <Grid sm={2} xs={4} css={{ justifyContent: "center" }}>
              <Text>{secretPhrase[2]}</Text>
            </Grid>
            <Grid sm={2} xs={4} css={{ justifyContent: "center" }}>
              <Text>{secretPhrase[3]}</Text>
            </Grid>
            <Grid sm={2} xs={4} css={{ justifyContent: "center" }}>
              <Text>{secretPhrase[4]}</Text>
            </Grid>
            <Grid sm={2} xs={4} css={{ justifyContent: "center" }}>
              <Text>{secretPhrase[5]}</Text>
            </Grid>
            <Grid sm={2} xs={4} css={{ justifyContent: "center" }}>
              <Text>{secretPhrase[6]}</Text>
            </Grid>
            <Grid sm={2} xs={4} css={{ justifyContent: "center" }}>
              <Text>{secretPhrase[7]}</Text>
            </Grid>
            <Grid sm={2} xs={4} css={{ justifyContent: "center" }}>
              <Text>{secretPhrase[8]}</Text>
            </Grid>
            <Grid sm={2} xs={4} css={{ justifyContent: "center" }}>
              <Text>{secretPhrase[9]}</Text>
            </Grid>
            <Grid sm={2} xs={4} css={{ justifyContent: "center" }}>
              <Text>{secretPhrase[10]}</Text>
            </Grid>
            <Grid sm={2} xs={4} css={{ justifyContent: "center" }}>
              <Text>{secretPhrase[11]}</Text>
            </Grid>
          </Grid.Container>
          <Spacer y={1} />
          <Row
            css={{
              "@smMax": {
                width: "335px",
                display: "flex",
                alignItems: "flex-start",
              },
            }}
          >
            <div>
              <p>Private Key: {privateKey}</p>
              <p>Public Key: {publicKey}</p>
              <p>Address: {address}</p>
            </div>
            <Button
              rounded
              auto
              css={{
                backgroundColor: "$virtualWalletPaleLeaf",
                color: "$virtualWalletOxley",
                borderRadius: "40px",
                height: "56px",
                width: "448px",
                fontSize: "16px",
                fontFamily: "$poppins",
                "@smMax": {
                  width: "129px",
                  height: "38px",
                  marginTop: "2rem",
                },
              }}
              onPress={() => push("/confirm-secret-phrase")}
            >
              Next
            </Button>
          </Row>
        </Col>
      </Col>
      <Row
        css={{
          marginTop: "3rem",
          "@smMax": {
            visibility: "hidden",
          },
        }}
      >
        <Footer />
      </Row>
    </Container>
  );
};

export default Home;
