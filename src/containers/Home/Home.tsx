import ContactItems from '../../compontents/ContactItems/ContactItems';
import {useAppSelector} from '../../app/hooks';
import Spinner from '../../compontents/Spinner/Spinner';
import {selectFetchLoading} from '../../store/contactsSlice';

const Home = () => {
  const isFetching = useAppSelector(selectFetchLoading);

  return (
    <>
      {isFetching && <Spinner />}
      <ContactItems/>
    </>
  );
};

export default Home;