import type { NextPage } from "next";
import {
  Button,
  Checkbox,
  Col,
  Container,
  Divider,
  Grid,
  Input,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";

import { Copy, CheckFat } from "@phosphor-icons/react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SelectLenght from "../components/SelectLenght";
import { useMediaQuery } from "../hooks/useMediaQuery.js";
import { useEffect, useState } from "react";
import { GeneratePassword } from "../functions/GeneratePassword";

const PasswordGenerator: NextPage = (props) => {
  const isXs = useMediaQuery(600);
  const isSm = useMediaQuery(768);
  const isMd = useMediaQuery(992);
  const { push, back } = useRouter();

  const [passwordLength, setPasswordLength] = useState(16);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(generatedPassword)
      .then(() => {
        setCopied(true);
      })
      .catch((error) => {
        console.error("Erro ao copiar para a área de transferência:", error);
      });
  };

  const handleSelectLength = (value: number) => {
    setPasswordLength(value);
  };

  const handleIncludeSymbolsChange = (value: boolean) => {
    setIncludeSymbols(value);
  };

  const handleIncludeNumbersChange = (value: boolean) => {
    setIncludeNumbers(value);
  };

  const handleIncludeLowercaseChange = (value: boolean) => {
    setIncludeLowercase(value);
  };

  const handleIncludeUppercaseChange = (value: boolean) => {
    setIncludeUppercase(value);
  };

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
        width: "100%",
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
            width: "100%",
            marginTop: "3rem",
            "@smMax": {
              padding: "0 1rem", // ajusta a margem lateral para 1rem em telas menores
              marginLeft: "1rem",
              marginRight: "1rem",
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
            Gerador de Senhas Seguras
          </Text>

          <Divider
            css={{
              width: "80%",
              marginTop: "-1rem",
              marginBottom: "1rem",
              color: "$virtualWalletOxley",
            }}
          />
          <Text
            css={{
              marginTop: "1rem",
              marginBottom: "1rem",
              marginLeft: "10rem",
              marginRight: "10rem",
              fontSize: "2vh",
              fontFamily: "$poppins",
              textAlign: "justify",
              "@smMax": {
                fontSize: "18px",
                width: "100%",
                marginLeft: 0,
                marginRight: 0,
              },
            }}
          >
            Para garantir a criação de senhas seguras e fortes, algumas
            recomendações básicas podem ser seguidas. Em primeiro lugar, é
            importante utilizar uma combinação de letras maiúsculas e
            minúsculas, números e caracteres especiais. Além disso, evite o uso
            de informações pessoais óbvias, como nomes ou datas de nascimento, e
            evite sequências numéricas simples. É recomendado também que a senha
            tenha um comprimento mínimo de oito caracteres. É fundamental evitar
            reutilizar senhas em diferentes contas e atualizá-las
            periodicamente. Utilizar um gerenciador de senhas confiável pode
            facilitar a criação e o armazenamento seguro de senhas únicas para
            cada conta. Seguindo essas práticas, é possível aumentar
            significativamente a segurança das suas senhas.
          </Text>

          <Spacer y={1} />

          <Col css={{ justifyContent: "center" }}>
            <Grid
              css={{
                display: "flex",
                width: "100%",
                marginLeft: "1rem",
                marginRight: "1rem",
                justifyContent: "center",
                alignItems: "center",
                "@smMax": { width: "100%", marginLeft: 0, marginRight: 0 },
              }}
            >
              <Col css={{ width: "50%", "@smMax": { width: "50%" } }}>
                <Text
                  css={{
                    display: "flex",
                    justifyContent: "flex-end",
                    fontSize: "16px",
                    fontFamily: "$poppins",
                    fontWeight: "bold",
                    marginRight: 0,
                    paddingRight: "1rem",
                    "@smMax": {
                      display: "flex",
                      width: "100%",
                      marginLeft: 0,
                      marginRight: 0,
                    },
                  }}
                >
                  Tamanho da senha
                </Text>
                <Text
                  css={{
                    display: "flex",
                    justifyContent: "flex-end",
                    fontSize: "16px",
                    fontFamily: "$poppins",
                    fontWeight: "bold",
                    marginRight: 0,
                    paddingRight: "1rem",
                    "@smMax": {
                      display: "flex",
                      width: "100%",
                      marginLeft: 0,
                      marginRight: 0,
                    },
                  }}
                >
                  Incluir Símbolos
                </Text>
                <Text
                  css={{
                    display: "flex",
                    justifyContent: "flex-end",
                    fontSize: "16px",
                    fontFamily: "$poppins",
                    fontWeight: "bold",
                    marginRight: 0,
                    paddingRight: "1rem",
                    "@smMax": {
                      display: "flex",
                      width: "100%",
                      marginLeft: 0,
                      marginRight: 0,
                    },
                  }}
                >
                  Incluir Números
                </Text>
                <Text
                  css={{
                    display: "flex",
                    justifyContent: "flex-end",
                    fontSize: "16px",
                    fontFamily: "$poppins",
                    fontWeight: "bold",
                    marginRight: 0,
                    paddingRight: "1rem",
                    "@smMax": {
                      display: "flex",
                      width: "100%",
                      marginLeft: 0,
                      marginRight: 0,
                    },
                  }}
                >
                  Incluir Minúsculas
                </Text>
                <Text
                  css={{
                    display: "flex",
                    justifyContent: "flex-end",
                    fontSize: "16px",
                    fontFamily: "$poppins",
                    fontWeight: "bold",
                    marginRight: 0,
                    paddingRight: "1rem",
                    "@smMax": {
                      display: "flex",
                      width: "100%",
                      marginLeft: 0,
                      marginRight: 0,
                    },
                  }}
                >
                  Incluir Maiúsculas
                </Text>
              </Col>

              <Col css={{ width: "50%", "@smMax": { width: "50%" } }}>
                <Row
                  css={{
                    display: "flex",
                    justifyContent: "flex-start",
                    paddingLeft: "1rem",
                    "@smMax": { padding: 0 },
                  }}
                >
                  <SelectLenght onChange={handleSelectLength} />
                </Row>

                <Row
                  css={{
                    display: "flex",
                    justifyContent: "flex-start",
                    paddingLeft: "1rem",
                    "@smMax": { padding: 0 },
                  }}
                >
                  <Checkbox
                    onChange={(value: any) => handleIncludeSymbolsChange(value)}
                  >
                    @#$%!
                  </Checkbox>
                </Row>
                <Row
                  css={{
                    display: "flex",
                    justifyContent: "flex-start",
                    paddingLeft: "1rem",
                    "@smMax": { padding: 0 },
                  }}
                >
                  <Checkbox
                    onChange={(value: any) => handleIncludeNumbersChange(value)}
                  >
                    1, 2, 3, 4, 5, 6
                  </Checkbox>
                </Row>
                <Row
                  css={{
                    display: "flex",
                    justifyContent: "flex-start",
                    paddingLeft: "1rem",
                    "@smMax": { padding: 0 },
                  }}
                >
                  <Checkbox
                    onChange={(value: any) =>
                      handleIncludeLowercaseChange(value)
                    }
                  >
                    abcdefgh
                  </Checkbox>
                </Row>
                <Row
                  css={{
                    display: "flex",
                    justifyContent: "flex-start",
                    paddingLeft: "1rem",
                    "@smMax": { padding: 0 },
                  }}
                >
                  <Checkbox
                    onChange={(value: any) =>
                      handleIncludeUppercaseChange(value)
                    }
                  >
                    ABCDEFGH
                  </Checkbox>
                </Row>
              </Col>
            </Grid>
            <Spacer y={1} />
            <Text
              css={{
                display: "flex",
                justifyContent: "center",
                fontSize: "20px",
                fontFamily: "$poppins",
                fontWeight: "bold",
                marginRight: 0,
                "@smMax": { width: "100%", marginLeft: 0, marginRight: 0 },
              }}
            >
              Sua senha
            </Text>
            <Spacer y={0.2} />
            <Row css={{ display: "flex", justifyContent: "center" }}>
              <Text
                css={{
                  backgroundColor: "$virtualWalletWhite",
                  paddingLeft: "0.4rem",
                  paddingRight: "0.4rem",
                  fontSize: "18px",
                  fontFamily: "$poppins",
                  fontWeight: "bold",
                  borderRadius: "16px",
                  "@smMax": {
                    marginLeft: 0,
                    marginRight: 0,
                  },
                }}
              >
                {generatedPassword}
              </Text>
            </Row>
            <Spacer y={0.6} />
            <Row css={{ display: "flex", justifyContent: "center" }}>
              <Button
                rounded
                auto
                onPress={handleCopyToClipboard}
                css={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "$virtualWalletPaleLeaf",
                  color: "$virtualWalletOxley",
                  borderRadius: "40px",
                  width: "1rem",
                  height: "2.5rem",
                  fontSize: "16px",
                  fontFamily: "$poppins",
                  fontWeight: "bold",
                  marginBottom: "2rem",
                  "@smMax": {
                    height: "2.5rem",
                  },
                }}
              >
                {copied ? <CheckFat size={32} /> : <Copy size={32} />}
              </Button>
            </Row>
          </Col>
          <Divider
            css={{
              width: "80%",
              marginTop: "-1rem",
              marginBottom: "1rem",
              color: "$virtualWalletOxley",
            }}
          />
          <Button
            rounded
            auto
            css={{
              backgroundColor: "$virtualWalletPaleLeaf",
              color: "$virtualWalletOxley",
              borderRadius: "40px",
              height: "7vh",
              width: "40%",
              fontSize: "16px",
              fontFamily: "$poppins",
              fontWeight: "bold",
              marginBottom: "2rem",
              marginLeft: "1rem",
              marginRight: "1rem",
              "@smMax": {
                width: "80%",
                height: "3rem",
                marginLeft: 0,
                marginRight: 0,
              },
            }}
            onPress={() => { setCopied(false), setGeneratedPassword(
              GeneratePassword(
                passwordLength,
                includeNumbers,
                includeSymbols,
                includeLowercase,
                includeUppercase
              )
            )}
              
            }
          >
            Gerar Senha
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PasswordGenerator;
