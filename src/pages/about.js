import * as React from "react";
import { Link } from "gatsby";
import Layout from "./layout";

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <Link to="/">Back to Home</Link>
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </Layout>
    </main>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
