import { useState, useEffect } from "react";
import type { Category } from "../../models/Category";
import WordDisplay from "../WordDisplay";

interface FrenchCategoriesProps {
    frenchId: Number | null
}

function FrenchCategories({ frenchId: frenchId }: FrenchCategoriesProps) {
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

    useEffect(() => {
        if (frenchId == null)
            return;
        const fetchData = async () => {
            try {
                const response = await fetch('api/expressions/french/' + frenchId + '/categories');

                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }

                const result = await response.json();
                setCategories(result);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [frenchId]);

    const unassignCategory = async () => {
        if (selectedCategory == null) {
            return;
        }
        try {
            const response = await fetch('api/expressions/french/' + frenchId + '/categories/' + selectedCategory?.id, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Failed to delete category from french word');
            }

            setCategories(categories.filter(function (category) {
                return category.id !== selectedCategory?.id;
            }));
            setSelectedCategory(null);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="sub-container">
            <h2>Categories</h2>
            <div className="category-list">
                {categories.map(category => (
                    <div
                        key={category.id}
                        onClick={() => setSelectedCategory(category)}>
                        <WordDisplay isSelected={selectedCategory?.id === category.id}>
                            {category.category_name}
                        </WordDisplay>
                    </div>
                ))}
            </div>
            <button disabled={frenchId == null}>Assign category</button>
            <button disabled={frenchId == null || selectedCategory == null} onClick={() => unassignCategory()}>Unassign category</button>
        </div>
    );
}

export default FrenchCategories;