import React from "react";
import { Seo } from "../components/seo";
import { Hero } from "../components/hero";
import { useStaticQuery, graphql } from "gatsby";
import { Layout } from "../components/layout";
import { WhoAreWe } from "../components/who-are-we";
import { WhatDoWeOffer } from "../components/what-do-we-offer";
import { SectionDivider } from "../components/section-divider";
import { Shop } from "../components/shop";
import { Customers } from "../components/customers";

const Home = () => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <Layout>
            <Seo
                title={site.siteMetadata.title}
                link={[
                    {
                        href:
                            "https://fonts.googleapis.com/css?family=Muli:500,700&display=swap",
                        rel: "stylesheet"
                    }
                ]}
            />
            <Hero />
            <WhoAreWe />
            <SectionDivider />
            <WhatDoWeOffer />
            <SectionDivider />
            <Shop />
            <SectionDivider />
            <Customers />
        </Layout>
    );
};

export default Home;
