import React from 'react'
import categories from '../components/categoriesData';
import '../styles/Categories.css'

const Categories = () => {
  return (
    <div className="category-card-container">
    {categories.map((category, index) => (
      <div key={index} className="category-card">
        <img src={category.image} alt={category.name} />
        <h3>{category.name}</h3>
      </div>
    ))}
  </div>
  )
}

export default Categories