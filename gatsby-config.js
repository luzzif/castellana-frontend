require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
});

const proxy = require("http-proxy-middleware");

module.exports = {
    siteMetadata: {
        title: "Castellana food service",
        // TODO: change URL on domain change
        siteUrl: "https://castellana.netlify.com/",
        telephone: "+390992016978",
        address: {
            streetAddress: "Via De Gasperi 31",
            addressLocality: "Monteiasi",
            addressRegion: "Taranto",
            addressCountry: "Italy",
            postalCode: "74020"
        },
        description:
            "Castellana s.r.l. è un’azienda di famiglia che opera nel settore della distribuzione food & beverage.",
        author: "Federico Luzzi"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: "gatsby-plugin-typography",
            options: {
                pathToConfigModule: "src/utils/typography"
            }
        },
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: process.env.ANALYTICS_TRACKING_ID
            }
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-styled-components"
    ],
    developMiddleware: app => {
        app.use(
            "/.netlify/functions/",
            proxy({
                target: "http://localhost:9000",
                pathRewrite: {
                    "/.netlify/functions/": ""
                }
            })
        );
    }
};
