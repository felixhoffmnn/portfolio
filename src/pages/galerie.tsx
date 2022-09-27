import React from "react";
import { Title } from "@mantine/core";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Galerie = () => {
  return (
    <Layout>
      <SEO title="Galerie" description="Galerie" />
      <Title order={1}>Galerie</Title>
    </Layout>
  );
};

export default Galerie;
