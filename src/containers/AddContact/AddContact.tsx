import {ContactMutation} from '../../types';
import ContactForm from '../../compontents/ContactForm/ContactForm';

const AddContact = () => {

  const onSubmit = (contact: ContactMutation) => {
    console.log(contact);
  };

    return (
        <>
          <ContactForm
            onSubmit={onSubmit}
            isLoading={false} />
        </>
    );
};

export default AddContact;