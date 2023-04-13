import Link from 'next/link';
import { useState } from 'react';
import Box from 'src/Components/Ui/Box';
import InputField from 'src/Components/Ui/InputField';
import Spinner from 'src/Components/Ui/Spinner';
import useValidation from 'src/hooks/useValidation';
import client from 'src/sanity';
import styles from './styles.module.scss';

const Footer = ({ footer }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isDataSent, setIsDataSent] = useState(false);
    const [hasError, setHasError] = useState(false);

    const { title, copy } = footer;

    const {
        value: name,
        isTouched: isNameTouched,
        setValue: setName,
        setIsTouched: setIsNameTouched,
        inputHasError: nameHasError,
    } = useValidation((value) => value !== '');

    const {
        value: email,
        isTouched: isEmailTouched,
        setValue: setEmail,
        setIsTouched: setIsEmailTouched,
        inputHasError: emailHasError,
    } = useValidation((value) => value.includes('@') && value.includes('.'));

    const {
        value: message,
        isTouched: isMessageTouched,
        setValue: setMessage,
        setIsTouched: setIsMessageTouched,
        inputHasError: messageHasError,
    } = useValidation((value) => value.length >= 30);

    const isFormTouched = isNameTouched && isEmailTouched && isMessageTouched;
    const isFormValid =
        !nameHasError &&
        !emailHasError &&
        !messageHasError &&
        isFormTouched &&
        !isLoading;

    const submitForm = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        const contactData = {
            _type: 'contact',
            name,
            email,
            message,
        };

        try {
            await client.create(contactData);
            setIsLoading(false);
            setIsDataSent(true);
        } catch {
            setIsLoading(false);
            setHasError(true);
        }
    };

    return (
        <footer className={styles['footer-wrapper']} id='footer'>

            <Link href="/" className={styles.h2}><h3>Home</h3></Link>
            <div className={styles.footer}>
                <div className={styles.box}>
                    <Box text='contato' />
                </div>
                <h2>{title}</h2>
                {!isDataSent ? (
                    <form onSubmit={submitForm}>
                        <InputField
                            id='name'
                            onChange={setName}
                            onBlur={setIsNameTouched}
                            hasError={nameHasError}
                            label='Qual seu nome?'
                        />
                        <InputField
                            id='email'
                            onChange={setEmail}
                            onBlur={setIsEmailTouched}
                            hasError={emailHasError}
                            label='E seu email?'
                        />
                        <InputField
                            id='message'
                            onChange={setMessage}
                            onBlur={setIsMessageTouched}
                            hasError={messageHasError}
                            label='Agora escreve sua mensagem para mim 😀'
                            isTextArea={true}
                        />
                        <button className='btn btn-primary' disabled={!isFormValid}>
                            {isLoading ? <Spinner /> : 'Enviar'}
                        </button>
                        {hasError && (
                            <span className='error'>Oops! Alguma coisa deu errado...</span>
                        )}
                    </form>
                ) : (<>
                    <h3 className='success'>Obrigado por entrar em contato</h3>
                    <Link href="/">Volta para o inicio</Link>
                </>
                )}
                <span className={styles.copy}>{copy}</span>
            </div>
        </footer>
    );
};

export default Footer;

export const getStaticProps = async () => {
    const footer = await client.fetch(`*[_type == "footer"][0]`);

    return {
        props: {
            footer,
        },
    };
};