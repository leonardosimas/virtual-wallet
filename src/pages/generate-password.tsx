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

import { useRouter } from "next/router";
import Header from "../components/Header";
import SelectLenght from "../components/SelectLenght";
import { useMediaQuery } from "../hooks/useMediaQuery.js";
import { useEffect, useState } from "react";

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

          <Grid css={{width: "80%", alignItens: "center", justifyContent: "center", "@smMax": { width: "100%"}}}>
            <Row>
              <Input
                aria-label="Tamanho da senha"
                readOnly
                initialValue="Tamanho da senha"
              />
              <SelectLenght onChange={handleSelectLength} />
            </Row>
            <Row>
              <Input
                aria-label="Incluir Símbolos"
                readOnly
                initialValue="Incluir Símbolos"
              />
              <Checkbox
                // checked={includeSymbols}
                onChange={(value: any) => handleIncludeSymbolsChange(value)}
              >
                @#$%!
              </Checkbox>
            </Row>
            <Row>
              <Input
                aria-label="Incluir Números"
                readOnly
                initialValue="Incluir Números"
              />
              <Checkbox
                // checked={includeNumbers}
                onChange={(value: any) => handleIncludeNumbersChange(value)}
              >
                1, 2, 3, 4, 5, 6
              </Checkbox>
            </Row>
            <Row>
              <Input
                aria-label="Incluir Minúsculas"
                readOnly
                initialValue="Incluir Minúsculas"
              />
              <Checkbox
                // checked={includeLowercase}
                onChange={(value: any) => handleIncludeLowercaseChange(value)}
              >
                abcdefgh
              </Checkbox>
            </Row>
            <Row>
              <Input
                aria-label="Incluir Maiúsculas"
                readOnly
                initialValue="Incluir Maiúsculas"
              />
              <Checkbox
                // checked={includeUppercase}
                onChange={(value: any) => handleIncludeUppercaseChange(value)}
              >
                ABCDEFGH
              </Checkbox>
            </Row>
          </Grid>

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
              "@smMax": {
                width: "80%",
                height: "3rem",
              },
            }}
            onPress={() =>
              alert(`Sua senha será gerada com ${passwordLength} caracteres.
                    Ela incluirá símbolos? ${includeSymbols}.
                    Ela incluirá números? ${includeNumbers}.
                    Ela incluirá minúsculas? ${includeLowercase}.
                    Ela incluirá maiúsculas? ${includeUppercase}.
                  `)
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
