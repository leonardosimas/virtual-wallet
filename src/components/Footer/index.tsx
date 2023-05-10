import React from "react";
import { Button, Image, Row, Text } from "@nextui-org/react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Row
      css={{
        backgroundColor: "$virtualWalletPaleLeaf",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        height: "2rem",
        position: "absolute",
        bottom: 0,
        "@smMax": {
          height: "1.5rem",
        },
      }}
    >
      <Text
        css={{
          color: "#6F9580",
          marginRight: "2rem",
          fontSize: "16px",
          fontFamily: "$poppins",
        }}
      >
        © {year} Virtual Wallet
      </Text>
    </Row>
  );
}
