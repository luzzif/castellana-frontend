import React from "react";
import { RelativeBox, RootFlex } from "./styled";
import { graphql, useStaticQuery } from "gatsby";
import { Flex, Box } from "reflexbox";
import { AbsoluteContainer } from "./styled";
import { Image } from "./image";

export const ImageStrip = () => {
    const {
        foodImage,
        meatImage,
        fishImage,
        vegetablesImage,
        hamImage,
        freshImage,
        cheeseImage
    } = useStaticQuery(graphql`
        query {
            foodImage: file(relativePath: { eq: "products/food.jpg" }) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            meatImage: file(relativePath: { eq: "products/meat.jpg" }) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            fishImage: file(relativePath: { eq: "products/fish.jpg" }) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            vegetablesImage: file(
                relativePath: { eq: "products/vegetables.jpg" }
            ) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            hamImage: file(relativePath: { eq: "products/ham.jpg" }) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            freshImage: file(relativePath: { eq: "products/fresh.jpg" }) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            cheeseImage: file(relativePath: { eq: "products/cheese.jpg" }) {
                childImageSharp {
                    fluid(quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <RootFlex width="100%" mt={5}>
            <RelativeBox width={1 / 6}>
                <Image
                    sizes={{
                        ...meatImage.childImageSharp.fluid,
                        aspectRatio: 1
                    }}
                    alt="Meat"
                    text="Carni"
                />
            </RelativeBox>
            <RelativeBox width={1 / 6}>
                <Image
                    sizes={{
                        ...fishImage.childImageSharp.fluid,
                        aspectRatio: 1
                    }}
                    alt="Fish"
                    text="Pesce"
                />
            </RelativeBox>
            <RelativeBox width={1 / 6}>
                <Image
                    sizes={{
                        ...vegetablesImage.childImageSharp.fluid,
                        aspectRatio: 1
                    }}
                    alt="Vegetables"
                    text="Verdure"
                />
            </RelativeBox>
            <RelativeBox width={1 / 6}>
                <Image
                    sizes={{
                        ...hamImage.childImageSharp.fluid,
                        aspectRatio: 1
                    }}
                    alt="Ham"
                    text="Salumi"
                />
            </RelativeBox>
            <RelativeBox width={1 / 6}>
                <Image
                    sizes={{
                        ...freshImage.childImageSharp.fluid,
                        aspectRatio: 1
                    }}
                    alt="Fresh"
                    text="Freschi"
                />
            </RelativeBox>
            <RelativeBox width={1 / 6}>
                <Image
                    sizes={{
                        ...cheeseImage.childImageSharp.fluid,
                        aspectRatio: 1
                    }}
                    alt="Cheese"
                    text="Formaggi"
                />
            </RelativeBox>
        </RootFlex>
    );
};
