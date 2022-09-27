import * as React from "react";
import Layout from "../components/layout";
import { Box, Text, Title } from "@mantine/core";
import Seo from "../components/seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404: Not found" description="Not Found" />
      <Box className="container text-center my-5">
        <Title order={1}>404: Not Found</Title>
        <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
      </Box>
    </Layout>
  );
};

export default NotFoundPage;
