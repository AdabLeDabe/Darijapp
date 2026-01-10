import { useEffect, useState } from "react";
import type { Category } from "../models/Category";
import WordDisplay from "./WordDisplay";

function CategoryCreation() {
    const [categoriesList, setCategoriesList] = useState<Category[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('api/categories');

            if (!response.ok) {
                throw new Error('Failed to fetch');
            }

            const result = await response.json();
            setCategoriesList(result);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className="sub-container">
                <h2>Add category</h2>
                <div className='form-container'>
                    <label htmlFor='searchFilter'>Name:</label>
                    <input name="searchFilter" type='text'></input>
                </div>
                <button>Add</button>
            </div>
            <div className="sub-container">
                <h2>Edit categories</h2>
                <button>Delete selected</button>
                <div className="category-list">
                    {categoriesList.map(category => (
                        <div key={category.id}>
                            <WordDisplay isSelected={false}>
                                {category.category_name}
                            </WordDisplay>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default CategoryCreation;