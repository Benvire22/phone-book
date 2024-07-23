import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectContacts} from '../../store/contactsSlice';
import {useEffect} from 'react';
import {fetchContacts} from '../../store/contactsThunks';
import ContactItem from './ContactItem';

const ContactItems = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);

  useEffect(() => {
    void dispatch(fetchContacts());
  }, [dispatch]);

  return contacts ? (
    <div className="row">
      {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  ) : <h1 className="text-center text-secondary">Empty...</h1>;
};

export default ContactItems;