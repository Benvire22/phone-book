import ContactItems from '../../compontents/ContactItems/ContactItems';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {closeModal, selectCurrentContact, selectFetchLoading, selectShowModal} from '../../store/contactsSlice';
import Spinner from '../../compontents/Spinner/Spinner';
import MyModal from '../../compontents/MyModal/MyModal';
import {deleteContact, fetchContacts} from '../../store/contactsThunks';

const Home = () => {
  const isFetching = useAppSelector(selectFetchLoading);
  const contact = useAppSelector(selectCurrentContact);
  const dispatch = useAppDispatch();

  const show = useAppSelector(selectShowModal);

  const onDelete = async () => {
    try {
      if (contact) {
        await dispatch(deleteContact(contact.id));
        onClose();
        await dispatch(fetchContacts());
      }
    } catch (e) {
      console.error(e);
    }
  };

  const onClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {isFetching && <Spinner />}
      <ContactItems/>
      {contact && (
        <MyModal
          isShow={show}
          onClose={onClose}
          contact={contact}
          onDelete={onDelete}
        />
      )}
    </>
  );
};

export default Home;