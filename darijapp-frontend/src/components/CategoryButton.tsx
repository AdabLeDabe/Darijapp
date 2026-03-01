import "../styles/CategoryButtons.css"

interface CategoryButtonProps {
    id: number,
    title: string,
    description: string
}

function CategoryButton({id, title, description}: CategoryButtonProps) {
    return (
        <>
            <div className="category-buttons-container">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
            </div>
        </>
    )
}

export default CategoryButton;