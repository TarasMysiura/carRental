import { SearchForm } from './SearchForm/SearchForm';
import { AdvertList } from './AdvertList/AdvertList';
import { Container, TitleH2 } from './App.styled';
import { Filter } from './Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/advertsSlice';
import { adversCars } from 'redux/data';

export const App = () => {
  // const contacts = useSelector(getContacts);

  return (
    <Container>
      <SearchForm />
     
          <AdvertList adverts={adversCars}/>
     
      <ToastContainer />
    </Container>
  );
};
