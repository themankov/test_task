import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { SearchActions } from '../../redux/actions';
import { CategoryType } from '../../redux/reducers/SearchReducer';
import { RootState, useAppDispatch } from '../../redux/store';
import { SortByType } from '../../services/BooksServices';
import style from './Categories.module.scss';
const categoriesOption: CategoryType[] = [
  'all',
  'art',
  'biography',
  'computers',
  'history',
  'medical',
  'poetry',
];
const sortOption: SortByType[] = ['relevance', 'newest'];
const Categories: React.FC = () => {
  const sortSelect = useSelector(
    (state: RootState) => state.SearchReducer.sortBy
  );
  const categorySelect = useSelector(
    (state: RootState) => state.SearchReducer.category
  );
  const dispatch = useAppDispatch();
  const sortRef = useRef<HTMLSelectElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const selectSort = () => {
    const sort = sortRef.current;
    if (sort) {
      dispatch(SearchActions.setSortBy(sort.value as SortByType));
    }
  };
  const selectCategory = () => {
    const sort = categoryRef.current;
    if (sort) {
      dispatch(SearchActions.setCategory(sort.value as CategoryType));
    }
  };
  return (
    <div className={style.categories_wrapper}>
      <div className={style.category_select}>
        <h1>Categories</h1>
        <select
          name="categories"
          id="categories"
          ref={categoryRef}
          onClick={() => selectCategory()}
        >
          {categoriesOption.map((item, index) => {
            return (
              <option
                value={item}
                key={index}
                selected={String(categorySelect) === item}
              >
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div className={style.filter_select}>
        <h1>Sorting By</h1>
        <select
          name="sort"
          id="sort"
          ref={sortRef}
          onChange={() => selectSort()}
        >
          {sortOption.map((item, index) => {
            return (
              <option
                value={item}
                key={index}
                selected={String(sortSelect) === item}
              >
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
export default Categories;
