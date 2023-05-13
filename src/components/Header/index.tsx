import { useEffect, useState } from "react";
import { Button, Navbar, Link } from "@nextui-org/react";

export default function Header(props: any) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
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
        $$navbarBlurBackgroundColor: "#BFCAB4",
        $$navbarBackgroundColor: "#BFCAB4",
        $$navbarPadding: 0,
        $$navbarContainerMaxWidth: "100%",
        maxW: "100%",
        height: "6rem",
        margin: 0,
        maxHeight: "1rem",
        boxSizing: "inherit",
        borderBottom: "$borderWeights$light solid rgba(124, 122, 128, 0.35)",
        zIndex: 99999,
        "@smMax": {
          $$navbarBlurBackgroundColor: "#BFCAB4",
          display: "flex",
          width: "100%",
          height: "50px",
          maxHeight: "1rem",
          margin: "0",
          borderBottom: "$borderWeights$light solid $graygoat",
        },
      }}
    >
      <Navbar.Content
        css={{
          background: "#BFCAB4",
          justifyContent: "flex-end",
          width: "100%",
          margin: 0,
          marginBottom: "1rem",
          color: "#1A1A1F",
          "@smMax": {
            margin: 0,
            marginBottom: "1rem",
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "flex-end",
            background: "$whitegoat",
          },
        }}
      >
        <Navbar.Item>
          <Button
            auto
            bordered
            as={Link}
            href="/"
            css={{
              marginTop: "1rem",
              borderTop: "1px solid ",
              borderLeft: "2.5px solid ",
              borderBottom: "3px solid ",
              borderRight: "2.5px solid ",
              borderColor: "$virtualWalletOxley",
              backgroundColor: "$virtualWalletSnowDrift",
              color: "#6F9580",
              width: "14.5rem",
              height: "3rem",
              borderRadius: "6.5rem",
              fontWeight: "bold",
              fontSize: "16px",
              fontFamily: "$poppins",
              marginRight: "1rem",
              "@smMax": {
                width: "2rem",
                height: "3rem",
                fontSize: "12px",
                marginLeft: 0,
                marginRight: "1rem",
              },
            }}
          >
            Voltar
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
