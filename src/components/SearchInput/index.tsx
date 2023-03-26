import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SearchActions } from '../../redux/actions';
import style from './SearchInput.module.scss';
const SearchInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const onSearch = () => {
    dispatch(SearchActions.setInputVal(search));
    setSearch('');
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && inputRef.current === document.activeElement) {
      const input = inputRef.current;
      dispatch(SearchActions.setInputVal(input ? input.value : ''));
      setSearch('');
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);
  return (
    <div className={style.searchinput_wrapper}>
      <div className={style.input}>
        <input
          type="text"
          ref={inputRef}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <button onClick={() => onSearch()}>Найти</button>
    </div>
  );
};
export default SearchInput;
