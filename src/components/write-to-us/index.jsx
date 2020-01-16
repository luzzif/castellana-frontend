import React, { useState, useCallback, useEffect } from "react";
import { Flex, Box } from "reflexbox";
import {
    Input,
    TextArea,
    SubmitButton,
    SuccessMessage,
    SpacedIcon,
    ErrorMessage
} from "./styled";
import emailValidator from "email-validator";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

export const WriteToUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [submitEnabled, setSubmitEnable] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = useCallback(() => {
        fetch("/.netlify/functions/send-email", {
            method: "POST",
            body: JSON.stringify({
                from: email,
                name,
                text
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error();
                }
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 5000);
            })
            .catch(error => {
                console.log(error);
                setError(true);
                setTimeout(() => {
                    setError(false);
                }, 5000);
            });
    }, [email, name, text]);

    const handleNameChange = event => {
        setName(event.target.value);
    };

    const handleEmailChange = event => {
        setEmail(event.target.value);
    };

    const handleTextChange = event => {
        setText(event.target.value);
    };

    useEffect(() => {
        setSubmitEnable(
            name && email && emailValidator.validate(email) && text
        );
    }, [email, name, text]);

    return (
        <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            id="write-to-us"
            mt={5}
            mb={4}
        >
            <Box>
                <h2>Scrivici</h2>
            </Box>
            <Box width={["80%", "70%", "60%", "40%"]}>
                <Flex flexDirection="column" alignItems="center">
                    <Box mb={4}>
                        Per qualsiasi tipo di informazione o richiesta non
                        esitare a riempire il modulo qui sotto: ti risponderemo
                        al più presto.
                    </Box>
                    <Box mb={3} width="100%">
                        <Input
                            type="text"
                            placeholder="Nome"
                            onChange={handleNameChange}
                            aria-label="Nome"
                        />
                    </Box>
                    <Box mb={3} width="100%">
                        <Input
                            type="text"
                            placeholder="Nome"
                            onChange={handleEmailChange}
                            aria-label="Nome"
                        />
                    </Box>
                    <Box mb={3} width="100%">
                        <TextArea
                            placeholder="Cosa desideri?"
                            onChange={handleTextChange}
                            aria-label="Cosa desideri?"
                        />
                    </Box>
                    <Box>
                        <SubmitButton
                            disabled={!submitEnabled}
                            onClick={handleSubmit}
                        >
                            Invia
                        </SubmitButton>
                    </Box>
                    <Box display={success || error ? "flex" : "none"} mt={4}>
                        {success && (
                            <SuccessMessage>
                                <SpacedIcon icon={faCheck} />
                                Messaggio recapitato con successo
                            </SuccessMessage>
                        )}
                        {error && (
                            <ErrorMessage>
                                <SpacedIcon icon={faTimes} />
                                Si è verificato un errore ed il messaggio non è
                                stato recapitato. Si prega di riprovare più
                                tardi.
                            </ErrorMessage>
                        )}
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};
