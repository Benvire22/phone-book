import ContactForm from '../../compontents/ContactForm/ContactForm';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {ApiContact} from '../../types';
import {fetchOneContactLoading, selectEditLoading} from '../../store/contactsSlice';
import {editContactData, getOneContact} from '../../store/contactsThunks';
import Spinner from '../../compontents/Spinner/Spinner';

const EditContact = () => {
  const dispatch = useAppDispatch();
  const isFetching = useAppSelector(fetchOneContactLoading);
  const isLoading = useAppSelector(selectEditLoading);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      void dispatch(getOneContact(id));
    }
  }, [dispatch, id]);

  const onSubmit = async (contact: ApiContact) => {
    try {
      if (id) {
        await dispatch(editContactData({contact, id}));
        navigate('/');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {isFetching && <Spinner />}
      <ContactForm
        onSubmit={onSubmit}
        isLoading={isLoading}
      />
    </>
  );
};

export default EditContact;