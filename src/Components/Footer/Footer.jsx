import { useState } from 'react';
import useValidation from 'src/hooks/useValidation';
import client from 'src/sanity';
import Box from '../Ui/Box';
import InputField from '../Ui/InputField';
import Spinner from '../Ui/Spinner';
import styles from './Footer.module.scss';

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
            <div className={styles.footer}>

                <span className={styles.copy}>{copy}</span>
            </div>
        </footer>
    );
};

export default Footer;