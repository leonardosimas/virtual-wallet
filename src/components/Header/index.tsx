import { useEffect, useState } from "react";

import {
  Avatar,
  Image,
  Button,
  Row,
  Col,
  Text,
  Navbar,
  Link,
  Divider,
} from "@nextui-org/react";

export default function Header(props: any) {
  const [isMounted, setIsMounted] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const logged = props.isLogged;
  console.log(logged);

  useEffect(() => {
    setIsLogged(logged);

    if (!isMounted) {
      setIsMounted(true);
    }
  }, []);

  if (!isMounted) return null;
  return (
    <Navbar
      disableShadow
      maxWidth={"fluid"}
      containerCss={{
        justifyContent: "space-evenly",
        $$navbarBlurBackgroundColor: "#whitegoat",
        $$navbarBackgroundColor: "#whitegoat",
        width: "100%",
        height: "100px",
        marginTop: "1rem",
        paddingBottom: "1rem",
        maxHeight: "1rem",
        boxSizing: "border-box",
        borderBottom: "$borderWeights$light solid rgba(124, 122, 128, 0.35)",
        zIndex: 99999,
        "@smMax": {
          $$navbarBlurBackgroundColor: "#whitegoat",
          width: "100%",
          height: "50px",
          maxHeight: "1rem",
          margin: "0",
          paddingBottom: "0",
          borderBottom: "$borderWeights$light solid $graygoat",
        },
      }}
    >
      <Navbar.Content
        css={{
          background: isToggled ? "#whitegoat" : "#whitegoat",
          justifyContent: "space-between",
          width: "100%",
          margin: "1rem 3rem 1rem 7rem",
          color: "#1A1A1F",
          "@smMax": {
            margin: "1rem",
            marginLeft: "3rem",
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "space-between",
            background: "$whitegoat",
          },
        }}
      >
        <Navbar.Item>
          <Image
            src={"/images/EGTLogo-Navbar.png"}
            width="213px"
            height="60px"
            css={{
              "@smMax": {
                width: "64px",
                height: "18px",
                marginTop: "1.4rem",
              },
            }}
          />
        </Navbar.Item>
        {/* VALORES MOCKADOS PARA TESTE LOGADO E LOGIN */}
        <Navbar.Item>
          {isLogged ? (
            <Button
              auto
              bordered
              as={Link}
              href="#"
              css={{
                borderTop: "1px solid ",
                borderLeft: "2.5px solid ",
                borderBottom: "3px solid ",
                borderRight: "2.5px solid ",
                borderColor: "$whitegoatvariant",
                backgroundColor: "$whitegoat",
                color: "#1A1A1F", //Propriedade color não aceitou receber valor do colors.ts
                width: "14.5rem",
                height: "3rem",
                borderRadius: "6.5rem",
                fontWeight: "bold",
                fontSize: "16px",
                fontFamily: "$poppins",
                // border: "1px solid #7C7A80",
                "@smMax": {
                  width: "2rem",
                  height: "3rem",
                  fontSize: "12px",
                  visibility: "hidden",
                  marginLeft: "-2rem",
                },
              }}
            >
              <Avatar
                rounded
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                css={{
                  marginRight: "1rem",
                  "sm@Max": {
                    visibility: "visible",
                  },
                }}
              />
              0xfrd34c...
            </Button>
          ) : (
            <Button
              hidden
              auto
              flat
              as={Link}
              href="#"
              css={{
                backgroundColor: "$whitegoat",
                color: "#1A1A1F", //Propriedade color não aceitou receber valor do colors.ts
                width: "14.5rem",
                height: "3rem",
                borderRadius: "6.5rem",
                fontSize: "18px",
                fontFamily: "$poppins",
                "@smMax": {
                  fontSize: "12px",
                  height: "1rem",
                },
              }}
            >
              Log In&nbsp;&nbsp;&nbsp;
              <Image
                src={"/images/SignIn.png"}
                width="32px"
                height="32px"
                css={{
                  "@smMax": {
                    width: "24px",
                    height: "32px",
                  },
                }}
              />
            </Button>
          )}
        </Navbar.Item>
        <Navbar.Item
          showIn="sm"
          css={{
            marginLeft: "-4rem",
            width: "40px",
            maxWidth: "40px",
          }}
        >
          <Avatar
            rounded
            // bordered *** Não atingiu o efeito desejado do Figma
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            css={{
                width: "20%",
                marginLeft: "-3rem",
                border: "4px solid $graygoatvariant",
            }}
          />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
