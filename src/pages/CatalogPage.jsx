import { AdvertList } from "components/AdvertList/AdvertList";
import { Container } from "components/App.styled";
import { BtnOnLoadMore } from "components/BtnOnLoadMore/BtnOnLoadMore";
import { Loader } from "components/Loader/Loader";
import { SearchForm } from "components/SearchForm/SearchForm";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchAdverts } from "redux/advertsOperations";
import {
  selectAdverts,
  selectError,
  selectFavorites,
  selectFilteredAdverts,
  selectIsLoading,
} from "redux/selectors";

const CatalogPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const isLoading = useSelector(selectIsLoading);
  const advertsData = useSelector(selectAdverts);
  const favorites = useSelector(selectFavorites);
  const error = useSelector(selectError);
  const filteredAdverts = useSelector(selectFilteredAdverts);

  const LoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const addFavorite = (advert) => {
    if (!favorites.some((favorite) => favorite === advert.id)) {

      dispatch([...favorites, advert.id]);
    } else {
      const index = favorites.indexOf(advert.id);
      favorites.splice(index, 1);
    }
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

      <AdvertList
        adverts={filteredAdverts}
        location={location}
        addFavorite={addFavorite}
      />
      {!isLoading && advertsData.length >= 12 && (
        <BtnOnLoadMore onLoadMore={LoadMore} />
      )}

      {isLoading && <Loader />}
    </Container>
  );
};
export default CatalogPage;
