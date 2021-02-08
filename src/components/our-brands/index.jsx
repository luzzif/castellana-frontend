import React from "react";
import { Flex, Box } from "reflexbox";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

export const OurBrands = () => {
    const {
        amadoriImage,
        banfiImage,
        bonduelleImage,
        canteleImage,
        farmFritesImage,
        gallettoImage,
        moliniPizzutiImage,
        moodImage,
        sanBiagioImage,
        sanMarzanoImage
    } = useStaticQuery(graphql`
        query {
            amadoriImage: file(relativePath: { eq: "brands/amadori.png" }) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            banfiImage: file(relativePath: { eq: "brands/banfi.png" }) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            bonduelleImage: file(relativePath: { eq: "brands/bonduelle.png" }) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            canteleImage: file(relativePath: { eq: "brands/cantele.png" }) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            farmFritesImage: file(
                relativePath: { eq: "brands/farm-frites.png" }
            ) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            gallettoImage: file(relativePath: { eq: "brands/galletto.png" }) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            moliniPizzutiImage: file(
                relativePath: { eq: "brands/molini-pizzuti.png" }
            ) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            moodImage: file(relativePath: { eq: "brands/mood.png" }) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            sanBiagioImage: file(
                relativePath: { eq: "brands/san-biagio.png" }
            ) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            sanMarzanoImage: file(
                relativePath: { eq: "brands/san-marzano.png" }
            ) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            id="customers"
            py={4}
        >
            <Box>
                <h2>I nostri marchi</h2>
            </Box>
            <Box width={["80%", "70%", "60%", "40%"]}>
                Castellana s.r.l è partner nella distribuzione dei maggiori
                player nazionali ed internazionali del settore food & beverage
            </Box>
            <Box mt={5} width="100%">
                <Flex width="100%" justifyContent="center">
                    <Box width={["80%", "80%", "70%", "60%", "60%"]}>
                        <Flex
                            alignItems="center"
                            justifyContent="center"
                            flexWrap="wrap"
                            textAlign="center"
                            m={-4}
                        >
                            <Box width={[1 / 2, 1 / 4, 1 / 5]} p={4}>
                                <Image
                                    fluid={amadoriImage.childImageSharp.fluid}
                                    alt="Amadori"
                                />
                            </Box>
                            <Box width={[1 / 2, 1 / 4, 1 / 5]} p={4}>
                                <Image
                                    fluid={banfiImage.childImageSharp.fluid}
                                    alt="Banfi"
                                />
                            </Box>
                            <Box width={[1 / 2, 1 / 4, 1 / 5]} p={4}>
                                <Image
                                    fluid={bonduelleImage.childImageSharp.fluid}
                                    alt="Bonduelle"
                                />
                            </Box>
                            <Box width={[1 / 2, 1 / 4, 1 / 5]} p={4}>
                                <Image
                                    fluid={canteleImage.childImageSharp.fluid}
                                    alt="Cantele"
                                />
                            </Box>
                            <Box width={[1 / 2, 1 / 4, 1 / 5]} p={4}>
                                <Image
                                    fluid={
                                        farmFritesImage.childImageSharp.fluid
                                    }
                                    alt="Farm Frites"
                                />
                            </Box>
                            <Box width={[1 / 2, 1 / 4, 1 / 5]} p={4}>
                                <Image
                                    fluid={gallettoImage.childImageSharp.fluid}
                                    alt="Galletto"
                                />
                            </Box>
                            <Box width={[1 / 2, 1 / 4, 1 / 5]} p={4}>
                                <Image
                                    fluid={
                                        moliniPizzutiImage.childImageSharp.fluid
                                    }
                                    alt="Molini Pizzuti"
                                />
                            </Box>
                            <Box width={[1 / 2, 1 / 4, 1 / 5]} p={4}>
                                <Image
                                    fluid={moodImage.childImageSharp.fluid}
                                    alt="Mood"
                                />
                            </Box>
                            <Box width={[1 / 2, 1 / 4, 1 / 5]} p={4}>
                                <Image
                                    fluid={sanBiagioImage.childImageSharp.fluid}
                                    alt="San Biagio"
                                />
                            </Box>
                            <Box width={[1 / 2, 1 / 4, 1 / 5]} p={4}>
                                <Image
                                    fluid={
                                        sanMarzanoImage.childImageSharp.fluid
                                    }
                                    alt="San Marzano"
                                />
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};
