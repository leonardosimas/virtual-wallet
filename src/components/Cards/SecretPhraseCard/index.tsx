import { Card, Text } from "@nextui-org/react";
import React from "react";

interface SecretPhraseCardProps {
  i: number;
  secretPhrase: string;
}

export default function SecretPhraseCard(props: SecretPhraseCardProps) {
  const { i, secretPhrase } = props;

  return (
    <Card
      variant="bordered"
      css={{
        alignItems: "center",
        backgroundColor: "$virtualWalletPaleLeaf",
        "@smMax": {
          width: "100%",
          margin: "0",
        },
      }}
    >
      <Card.Body
        css={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          "@smMax": {
            flexDirection: "column",
            justifyContent: "flex-start",
            textAlign: "center",
            padding: "1rem",
          },
        }}
      >
        <Text css={{ color: "$virtualWalletOxley", fontFamily: "$poppins" }}>
          {i}. &nbsp;
        </Text>
        <Text
          weight={"bold"}
          css={{ color: "$virtualWalletBlack", fontFamily: "$poppins" }}
        >
          {secretPhrase}
        </Text>
      </Card.Body>
    </Card>
  );
}
