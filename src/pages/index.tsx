import type { NextPage } from "next";
import { Button, Col, Container, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { push } = useRouter();
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
        height: "100%",
      }}
    >
      <Row
        css={{
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Row
          css={{
            maxWidth: "1440px",
            padding: "0 2rem",
            height: "100vh",
            "@smMax": {
              flexDirection: "column-reverse",
              maxWidth: "100%",
              height: "auto",
              padding: "2rem",
            },
          }}
        >
          <Col
            css={{
              display: "flex",
              flexDirection: "column",
              margin: "auto 0",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              css={{
                fontSize: "64px",
                fontWeight: 600,
                color: "#1A1A1F",
                "@smMax": {
                  fontSize: "40px",
                  textAlign: "center",
                  marginTop: "2rem",
                },
              }}
            >
              VIRTUAL{" "}
              <Text as={"span"} css={{ color: "#6F9580" }}>
                WALLET
              </Text>
            </Text>
            <Text
              css={{
                fontSize: "20px",
                color: "#001F30",
                textAlign: "center",
                marginTop: "1rem",
              }}
            >
              Criando carteiras virtuais seguras.
            </Text>
            <Button
              css={{
                padding: "2rem 3rem",
                marginTop: "1.5rem",
                width: "16rem",
                fontSize: "20px",
                color: '#6F9580',
                background: '#BFCAB4',
                border: "1px solid #6F9580",
                borderRadius: "8px",
                transition: "all 0.2s",
                "&:hover": {
                  background: "#6F9580",
                  color: "#E4E4DC",
                },
                "span svg": {
                  marginLeft: "0.5rem",
                },
                "@smMax": {
                  width: "100%",
                },
              }}
              onPress={() => push("/create-wallet")}
            >
              Criar carteira
            </Button>
            <Text
              css={{
                fontSize: "20px",
                color: "#001F30",
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              Criando senhas seguras.
            </Text>
            <Button
              css={{
                padding: "2rem 3rem",
                marginTop: "1.5rem",
                width: "16rem",
                fontSize: "20px",
                color: '#6F9580',
                background: '#BFCAB4',
                border: "1px solid #6F9580",
                borderRadius: "8px",
                transition: "all 0.2s",
                "&:hover": {
                  background: "#6F9580",
                  color: "#E4E4DC",
                },
                "span svg": {
                  marginLeft: "0.5rem",
                },
                "@smMax": {
                  width: "100%",
                },
              }}
              onPress={() => push("/generate-password")}
            >
              Criar senha segura
            </Button>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Home;
