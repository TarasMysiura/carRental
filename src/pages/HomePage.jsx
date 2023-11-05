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
import { selectAdverts, selectError, selectIsLoading } from "redux/selectors";
import { TitleH1 } from "./HomePage.styled";

const HomePage = () => {
  return (
    <Container>
      <TitleH1> This is a HomePage company</TitleH1>
    </Container>
  );
};
export default HomePage;
