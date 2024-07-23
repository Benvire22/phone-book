import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectContacts} from '../../store/contactsSlice';
import {useEffect} from 'react';
import {fetchContacts} from '../../store/contactsThunks';

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
        <div className="card" key={contact.id}>
          <h4>{contact.name}</h4>
          <strong>{contact.email}</strong>
          <strong>{contact.phone}</strong>
        </div>
      ))}
    </div>
  ) : <h2>Empty...</h2>;
};

export default ContactItems;