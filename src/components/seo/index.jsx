import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import logoBlack from "../../images/logo-black.svg";

export const Seo = ({ description, lang, meta, keywords, title, link }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteUrl
                        telephone
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;

    const schema = [
        {
            // TODO: add email
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            url: site.siteMetadata.siteUrl,
            name: title,
            telephone: site.siteMetadata.telephone,
            address: {
                "@type": "PostalAddress",
                ...site.siteMetadata.address
            },
            openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                opens: "07:00",
                closes: "19:00"
            },
            image: logoBlack
        }
    ];

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={title}
            titleTemplate={site.siteMetadata.title}
            link={link}
            meta={[
                {
                    name: "description",
                    content: metaDescription
                },
                {
                    property: "og:title",
                    content: title
                },
                {
                    property: "og:description",
                    content: metaDescription
                },
                {
                    property: "og:type",
                    content: "website"
                },
                {
                    name: "twitter:card",
                    content: "summary"
                },
                {
                    name: "twitter:creator",
                    content: site.siteMetadata.author
                },
                {
                    name: "twitter:title",
                    content: title
                },
                {
                    name: "twitter:description",
                    content: metaDescription
                },
                {
                    name: "theme-color",
                    content: "#f2812d"
                }
            ]
                .concat(
                    keywords.length > 0
                        ? {
                              name: "keywords",
                              content: keywords.join(", ")
                          }
                        : []
                )
                .concat(meta)}
        >
            <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
    );
};

Seo.defaultProps = {
    lang: "en",
    meta: [],
    keywords: [],
    link: []
};

Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.array,
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
    link: PropTypes.array
};
