import { useEffect, useState } from "react";
import type { Category } from "../../models/Category";
import WordDisplay from "../WordDisplay";

interface FrenchCategoriesEditionProps {
    frenchId: number | null,
    currentlySelectedCategories: Category[]
}

function FrenchCategoriesEdition({ frenchId, currentlySelectedCategories }: FrenchCategoriesEditionProps) {
    const [categoriesList, setCategoriesList] = useState<Category[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

    useEffect(() => {
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

        fetchData();
        setSelectedCategories(currentlySelectedCategories);
    }, [frenchId]);

    const toggleSelection = (category: Category) => {
        setSelectedCategories(oldArray => {
            if (isCategorySelected(category)) {
                return oldArray.filter(selected => selected.id !== category.id);
            }
            else {
                return [...oldArray, category];
            }
        });
    }

    const isCategorySelected = (category: Category) => {
        return selectedCategories.some(selected => selected.id === category.id);
    }

    return (
        <div className="sub-container">
            <div className="category-list">
                {categoriesList.map(category => (
                    <div
                        key={category.id}
                        onClick={() => toggleSelection(category)} >
                        <WordDisplay isSelected={selectedCategories.some(selectedCategory => selectedCategory.id == category.id)}>
                            {category.category_name}
                        </WordDisplay>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FrenchCategoriesEdition;