import styles from './categoryList.module.css';
import CategoryItem from '../CategoryItem';

import { Category } from '@/types/common';

interface CategoryListProps {
  categories: Category[];
}

const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <ul className={styles.categoryList}>
      {categories.map(({ id, name, image }) => (
        <li key={id}>
          <CategoryItem name={name} image={image} />
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;