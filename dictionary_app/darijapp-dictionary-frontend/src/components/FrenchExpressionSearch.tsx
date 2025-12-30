import { useEffect, useState } from "react";
import type { French } from "../models/French";
import FrenchWord from "./FrenchWord";
import { removeAccents } from "../helpers/SearchHelper";

function FrenchExpressionSearch() {
    const [frenchExpressions, setFrenchExpressions] = useState<French[]>([]);
    const [filteredFrenchExpressions, setFilteredFrenchExpressions] = useState<French[]>([]);
    const [searchFilter, setSearchFilter] = useState<string>("");

    const updateSearchFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchFilter(e.target.value);
    };

    const updateFilteredExpression = () => {
        if (isSearchFilterEmpty()) {
            setFilteredFrenchExpressions(frenchExpressions);
        }
        else {
            setFilteredFrenchExpressions(frenchExpressions.filter(item => removeAccents(item.expression).toLowerCase().includes(removeAccents(searchFilter).toLowerCase())))
        }
    }

    const isSearchFilterEmpty = () => {
        return (!searchFilter || searchFilter.trim() === "");
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        updateFilteredExpression();
    }, [searchFilter]);

    const fetchData = async () => {
        try {
            const response = await fetch('api/expressions/french');

            if (!response.ok) {
                throw new Error('Failed to fetch');
            }

            const result = await response.json();
            console.log('Success: ', result);
            setFrenchExpressions(result);
            setFilteredFrenchExpressions(result);
        } catch (err) {
            console.log('Failure: ', err);
        }
    };

    return (
        <>
            <div className='form-container'>
                <label htmlFor='searchFilter'>Search:</label>
                <input name="searchFilter" type='text' onChange={updateSearchFilter}></input>
            </div>
            <div className="sub-container">
                <h2>Search results:</h2>
                <div className="translation-list">
                    {!isSearchFilterEmpty()
                        && filteredFrenchExpressions.map(frenchWord => (
                            <div
                                key={frenchWord.id}>
                                <FrenchWord word={frenchWord} isSelected={false} />
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}

export default FrenchExpressionSearch;