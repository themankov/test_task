import style from './Header.module.scss';
import { SearchInput } from '../index';
import { CategoriesInput } from '../index';
import background from './../../assets/img/background.jpg';

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <img src={background} alt="background" />
      <div className={style.header_title}>Search for books</div>
      <SearchInput />
      <CategoriesInput />
    </header>
  );
};
export default Header;
