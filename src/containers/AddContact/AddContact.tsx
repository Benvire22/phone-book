import {ApiContact} from '../../types';
import ContactForm from '../../compontents/ContactForm/ContactForm';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {addContact} from '../../store/contactsThunks';
import {selectCreateContactLoading} from '../../store/contactsSlice';

const AddContact = () => {
  const dispatch = useAppDispatch();
  const isCreating = useAppSelector(selectCreateContactLoading);
  const navigate = useNavigate();

  const onSubmit = async (contact: ApiContact) => {
    try {
      await dispatch(addContact(contact)).unwrap();
      navigate('/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <ContactForm
        onSubmit={onSubmit}
        isLoading={isCreating}
      />
    </>
  );
};

export default AddContact;