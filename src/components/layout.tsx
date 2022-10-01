import React, { useState } from "react";
import { Box, ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { graphql, useStaticQuery } from "gatsby";
import Header from "./header";
import { useHotkeys } from "@mantine/hooks";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          // Override any other properties from default theme
          fontFamily: "Open Sans, sans serif",
          spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
          colorScheme,
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Box>{children}</Box>
        <Footer />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default Layout;
