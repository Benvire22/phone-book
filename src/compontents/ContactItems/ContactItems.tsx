import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectContacts} from '../../store/contactsSlice';
import {useEffect} from 'react';
import {fetchContacts} from '../../store/contactsThunks';
import ContactItem from './ContactItem';

const ContactItems = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);
  console.log(contacts);

  useEffect(() => {
    void dispatch(fetchContacts());
  }, [dispatch]);

  return contacts ? (
    <div className="row">
      {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  ) : <h2>Empty...</h2>;
};

export default ContactItems;