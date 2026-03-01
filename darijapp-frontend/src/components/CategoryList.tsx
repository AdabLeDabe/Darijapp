import "../styles/CategoryList.css"
import type { Category } from "../models/Category";
import { useState } from "react";

interface CategoryListProps {
    selectedCategories: number[],
    updateSelectedCategories: (id: number) => void
}

function CategoryList({ selectedCategories, updateSelectedCategories }: CategoryListProps) {
    const [categories, setCategories] = useState<Category[]>([
        { id: 0, title: "test1", description: "Quisque sollicitudin ante a velit posuere tincidunt. Vivamus ac dolor convallis, tristique nisl eget, tempor arcu. Pellentesque aliquam nulla sed mollis commodo. Nunc gravida, lectus eu accumsan varius, libero metus lacinia nunc," },
        { id: 1, title: "test2", description: "lobortis iaculis ex velit ut ante. Praesent id justo mi. Integer libero tortor, euismod vitae rhoncus at, ornare sit amet nulla." },
        { id: 2, title: "test3", description: "Quisque consequat, dolor ut porta volutpat, ante neque fringilla lacus, vitae cursus sem tellus quis diam. Nullam vitae tincidunt leo. " },
        { id: 3, title: "test4", description: "Ut iaculis elit eu felis maximus, a imperdiet turpis facilisis. Vestibulum condimentum iaculis nunc eget lobortis. Nulla egestas gravida magna, eu cursus nisl commodo nec. " }
    ]);

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