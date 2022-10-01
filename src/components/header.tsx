import { Box, Button, Title, Image, useMantineColorScheme } from "@mantine/core";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { ColorSchemeToggle } from "./colorSchemeToggle";

interface HeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle = "Felix Hoffmann" }: HeaderProps) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Box>
      {colorScheme === "light" ? (
        <StaticImage
          width={200}
          // height={}
          // objectFit="contain"
          src="../images/logo_lang_dunkel.png"
          alt="Random Logo"
        />
      ) : (
        <StaticImage
          width={200}
          // height={}
          // objectFit="contain"
          src="../images/logo_lang.png"
          alt="Random Logo"
        />
      )}

      <Image
        radius="md"
        width={200}
        height={80}
        fit="contain"
        src="https://logos-world.net/wp-content/uploads/2020/11/KTM-Logo-1954-1958.png"
        alt="Random Logo"
      />
      <Image
        radius="md"
        width={200}
        height={80}
        src={colorScheme === "light" ? "../images/logo_lang.png" : "../images/logo_lang_dunkel.png"}
        alt="Random Logo"
      />
      <Title order={1}>
        <Button component={Link} to="/">
          {siteTitle}
        </Button>
      </Title>
      <ColorSchemeToggle />
    </Box>
  );
};

export default Header;
