import style from './Card.module.scss';
import black from './../../assets/img/black.jpg';
import { ICard } from '../../modules/CardsBlock';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

const Card: React.FC<ICard> = ({ volumeInfo, id }) => {
  const { title, authors, categories, imageLinks } = volumeInfo;

  const categoriesSearch = useSelector(
    (state: RootState) => state.SearchReducer.category
  );
  const displayNecessaryCategory = () => {
    if (categories) {
      if (categoriesSearch === 'all') {
        return categories[0];
      }
      const Necessaryitem = categories.filter((item: any) =>
        item.toLowerCase().includes(categoriesSearch)
      );

      if (Necessaryitem.length > 0) {
        return Necessaryitem;
      }
      return categoriesSearch[0].toUpperCase() + categoriesSearch.slice(1);
    }
    return '';
  };

  return (
    <div className={style.card_wrapper}>
      <Link to={`/${id}`}>
        <div className={style.card_photo}>
          <img
            src={imageLinks ? imageLinks.smallThumbnail : black}
            alt="card_item"
          />
        </div>
        <div className={style.card_description}>
          <div className={style.card_category}>
            {displayNecessaryCategory()}
          </div>
          <div className={style.card_title}>{title}</div>
          <div className={style.card_author}>
            {authors ? authors.join(',') : ''}
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Card;
