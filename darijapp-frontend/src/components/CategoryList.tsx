import "../styles/CategoryList.css"
import type { Category } from "../models/Category";
import { useEffect, useState } from "react";
import { GetCategories } from "../helpers/ApiHelper";

interface CategoryListProps {
    selectedCategories: number[],
    updateSelectedCategories: (id: number) => void
}

function CategoryList({ selectedCategories, updateSelectedCategories }: CategoryListProps) {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        setCategories(GetCategories());
    }, []);

    const getCategoryClassName = (id: number) => {
        if (selectedCategories.includes(id)) {
            return "category-button-container category-button-container-selected";
        }
        else {
            return "category-button-container";
        }
    }

    return (
        <>
            <div className="category-list-container">
                {categories.map(category =>
                    <div onClick={() => updateSelectedCategories(category.id)} key={category.id} className={getCategoryClassName(category.id)}>
                        <div className="title">{category.title}</div>
                        <div className="description">{category.description}</div>
                    </div>
                )}
            </div>
        </>
    )
}

export default CategoryList;