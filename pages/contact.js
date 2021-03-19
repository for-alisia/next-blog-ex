import ContactForm from '../components/contact/contact-form';
import Head from 'next/head';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contacts Page</title>
        <meta name="description" content="Some description here" />
      </Head>
      <ContactForm />
    </>
  );
};

export default Contact;
