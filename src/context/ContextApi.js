import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({contents}) => {
        console.log(contents);
        setSearchResults(contents)
        setLoading(false)
    })
  };

  const value = {
    loading,
    setLoading,
    searchResults,
    setSearchResults,
    selectCategories,
    setSelectCategories,
    mobileMenu,
    setMobileMenu,
  };
  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};
