require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
    siteMetadata: {
        title: "Castellana food service",
        // TODO: change the text
        description: "Castellana s.r.l effettua food delivery di qualità",
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
        "gatsby-plugin-styled-components"
    ]
};
