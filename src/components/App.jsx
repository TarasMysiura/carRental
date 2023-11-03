import { SearchForm } from "./SearchForm/SearchForm";
import { AdvertList } from "./AdvertList/AdvertList";
import { Container } from "./App.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
// import { adversCars } from 'redux/data';
import { useEffect } from "react";
import { fetchAdverts } from "redux/advertsOperations";
import { selectAdverts, selectError } from "redux/selectors";

export const App = () => {
  const advertsData = useSelector(selectAdverts);
  // console.log('advertsData: ', adversCars);

  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchAdverts());
    };
    fetchData();
    if (error) toast.error(error);
  }, [dispatch, error]);
  // const contacts = useSelector(getContacts);

  return (
    <Container>
      <SearchForm />

      <AdvertList adverts={advertsData} />

      <ToastContainer />
    </Container>
  );
};
