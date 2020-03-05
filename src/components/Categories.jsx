import React from 'react'
import '../assets/styles/components/Categories.scss'

const Categories = ({ children, listName }) => (
  <div className="categories">
  <h3 className="categories__title">{listName}</h3>
  { children }
  </div>
)

export default Categories