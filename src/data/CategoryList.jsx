import React from "react";
import { Link } from "react-router-dom";
import { products } from "./Data";

const CategoryList = () => {
    const categoryMap = {};

    products.forEach((product) => {
        const cat = product.category;
        categoryMap[cat] = (categoryMap[cat] || 0) + 1;
    });
}

const categories = Object.entries(categoryMap);

