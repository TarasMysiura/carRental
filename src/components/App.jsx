import { SearchForm } from "./SearchForm/SearchForm";
import { AdvertList } from "./AdvertList/AdvertList";
import { Container } from "./App.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAdverts } from "redux/advertsOperations";
import { selectAdverts, selectError, selectIsLoading } from "redux/selectors";
import { BtnOnLoadMore } from "./BtnOnLoadMore/BtnOnLoadMore";
import { Loader } from "./Loader/Loader";

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const [currentPage, setCurrentPage] = useState(1);

  const advertsData = useSelector(selectAdverts);

  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const LoadMore = () => {
    setCurrentPage(currentPage + 1);
  };
  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchAdverts(currentPage));
    };
    fetchData();
    if (error) toast.error(error);
  }, [dispatch, error, currentPage]);

  return (
    <Container>
      <SearchForm />

      <AdvertList adverts={advertsData} />
      {!isLoading && advertsData.length >= 12 && (
        <BtnOnLoadMore onLoadMore={LoadMore} />
      )}

      <ToastContainer />
      {isLoading && <Loader />}
    </Container>
  );
};
