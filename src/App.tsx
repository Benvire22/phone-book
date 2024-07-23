import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home';
import AddContact from './containers/AddContact/AddContact';
import EditContact from './containers/EditContact/EditContact';
import NotFound from './containers/NotFound/NotFound';
import Layout from './compontents/Layout/Layout';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-contact" element={<AddContact />} />
          <Route path="/edit-contact/:id" element={<EditContact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;