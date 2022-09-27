import { Link } from "gatsby";
import React from "react";
import { Button, Grid, Text, Title } from "@mantine/core";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Startseite" description="Startseite" />
      <Title order={1}>Hi people</Title>
      <Text size="xl" my={5}>
        Welcome to your new Gatsby site.
      </Text>
      <Text size="xl" my={5}>
        Now go build something great.
      </Text>
      <Grid>
        <Grid.Col span={6}>
          <Button component={Link} to="/lebenslauf">
            Go to Lebenslauf
          </Button>
        </Grid.Col>
        <Grid.Col span={6}>
          <Button component={Link} to="/galerie">
            Go to Galerie
          </Button>
        </Grid.Col>
      </Grid>
    </Layout>
  );
};

export default IndexPage;
