import React from "react";

function CategoryFilter({ categories, onCategoryClick }) {

  // const [toggled, setToggled] = useState(false)

  //on category click, the category selected is passed to App component for state handling
  function handleCategory(event) {
    // console.log(event)
    onCategoryClick(event.target.textContent)
    return event.target.className = "selected"
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      <div>
        {categories.map((category) => (
          <button 
            key={category} 
            onClick={handleCategory}
            className=""
          >{category}</button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
