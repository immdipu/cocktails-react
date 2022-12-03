import React, { useState, useContext, useEffect, useCallback } from 'react'
import axios from 'axios';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext();



const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('a');
    const [cocktails, setsCocktails] = useState([]);



    const fetchDrinks = useCallback(async () => {
        setLoading(true);
        try {
            const res = await axios.get(`${url}${searchTerm}`)

            const { drinks } = res.data;
            if (drinks) {
                const newCocktails = drinks.map((item) => {
                    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass
                    }

                })
                setsCocktails(newCocktails);

            }
            else {
                setsCocktails([]);
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }, [searchTerm])


    useEffect(() => {
        fetchDrinks();
    }, [searchTerm, fetchDrinks])

    return (
        <AppContext.Provider value={{ loading, cocktails, setSearchTerm }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}


export { AppContext, AppProvider }