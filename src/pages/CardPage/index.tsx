import style from './CardPage.module.scss';

import { useParams } from 'react-router-dom';
import { ICardDescription } from '../../modules/CardsBlock';

import black from './../../assets/img/black.jpg';
import { useEffect } from 'react';
import preloder from './../../assets/img/Book.gif';
interface ICardPage {
  item: ICardDescription[];
  getItemById: (id: string) => void;
  getInitial: () => void;
}
const CardPage: React.FC<ICardPage> = ({ item, getItemById, getInitial }) => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getItemById(id);
    }
    return () => {
      getInitial();
    };
  }, []);

  return (
    <section className={style.cardPage_section}>
      {item.length > 0 ? (
        <>
          <div className={style.card_image}>
            <img
              src={item[0].imageLinks ? item[0].imageLinks.thumbnail : black}
              alt="thumbnail"
            />
          </div>
          <div className={style.card_details}>
            <div className={style.card_categories}>
              {item[0].categories ? item[0].categories : 'No selected category'}
            </div>
            <div className={style.card_title}>{item[0].title}</div>
            <div className={style.description_block}>
              <h1>Description</h1>
              <div className={style.description}>
                {item[0].desriptions
                  ? item[0].desriptions
                  : 'Sorry, we did not find discription for tis item'}
              </div>
            </div>
            <div className={style.card_author}>
              {item[0].authors ? item[0].authors.join(',') : ''}
            </div>
          </div>
        </>
      ) : (
        <img src={preloder} alt="preloader" className={style.preloader} />
      )}
    </section>
  );
};
export default CardPage;
