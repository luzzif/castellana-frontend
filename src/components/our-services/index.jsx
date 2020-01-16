import React from "react";
import { Flex, Box } from "reflexbox";
import { useStaticQuery, graphql } from "gatsby";
import { RoundedImage, WriteToUsLink } from "./styled";

export const OurServices = () => {
    const {
        logisticsImage,
        cashAndCarryImage,
        cookingHubImage
    } = useStaticQuery(graphql`
        query {
            logisticsImage: file(
                relativePath: { eq: "services/logistics.jpg" }
            ) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            cashAndCarryImage: file(
                relativePath: { eq: "services/cash-and-carry.jpeg" }
            ) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            cookingHubImage: file(
                relativePath: { eq: "services/cooking-hub.jpg" }
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
            alignItems="center"
            py={4}
            id="our-services"
        >
            <Box>
                <h2>I nostri servizi</h2>
            </Box>
            <Flex
                width={["80%", "80%", "70%", "60%"]}
                mx={[0, -4]}
                alignItems="center"
                flexDirection={["column-reverse", "row"]}
                mb={4}
            >
                <Box
                    width={[1, 1 / 2, 2 / 3]}
                    px={[0, 4]}
                    id="synchronized-logistics"
                >
                    <h3>Logistica</h3>
                    <p>
                        Effettuiamo consegne direttamente in giornata. Siamo
                        attrezzati anche per l’export avvalendoci di
                        professionisti del settore che ci consentono la
                        spedizione delle nostre merci anche in paesi come Cina,
                        Singapore, India, Australia, America.
                    </p>
                </Box>
                <Box width={[8 / 10, 1 / 2, 1 / 3]} px={[0, 4]} mb={[4, 0]}>
                    <RoundedImage
                        sizes={{
                            ...logisticsImage.childImageSharp.fluid,
                            aspectRatio: 1
                        }}
                    />
                </Box>
            </Flex>
            <Flex
                width={["80%", "80%", "70%", "60%"]}
                mx={[0, -4]}
                alignItems="center"
                flexDirection={["column", "row"]}
                mb={4}
            >
                <Box width={[8 / 10, 1 / 2, 1 / 3]} px={[0, 4]} mb={[4, 0]}>
                    <RoundedImage
                        sizes={{
                            ...cashAndCarryImage.childImageSharp.fluid,
                            aspectRatio: 1
                        }}
                    />
                </Box>
                <Box width={[1, 1 / 2, 2 / 3]} px={[0, 4]} id="cash-and-carry">
                    <h3>Cash & carry</h3>
                    <p>
                        Presso Castellana Cash&Carry troverete la vasta offerta
                        di prodotti, presentati in un viaggio che vi porterà
                        dall’enogastronomia nostrana fino a quella
                        d’oltreoceano, acquistabili direttamente in negozio.
                    </p>
                </Box>
            </Flex>
            <Flex
                width={["80%", "80%", "70%", "60%"]}
                mx={[0, -4]}
                flexDirection={["column-reverse", "row"]}
                alignItems="center"
            >
                <Box width={[1, 1 / 2, 2 / 3]} px={[0, 4]} id="cooking-hub">
                    <h3>Cooking hub</h3>
                    <p>
                        Cooking Hub è{/* TODO: put correct size */}
                        un’aera offerta da Castellana di xxx mq nella quale
                        poter organizzare eventi, cooking show, shooting ed
                        attività di team building con un'ampia gamma di proposte
                        {/* TODO: put link to contact us form */}
                        Per qualsiasi informazione,{" "}
                        <WriteToUsLink to="/#write-to-us">
                            non esitate a compilare il form qui sotto
                        </WriteToUsLink>
                        , vi ricontatteremo al più presto.
                    </p>
                </Box>
                <Box width={[8 / 10, 1 / 2, 1 / 3]} px={[0, 4]} mb={[4, 0]}>
                    <RoundedImage
                        sizes={{
                            ...cookingHubImage.childImageSharp.fluid,
                            aspectRatio: 1
                        }}
                    />
                </Box>
            </Flex>
        </Flex>
    );
};
