import { useEffect, useRef, useState } from 'react';
import style from './CardsBlock.module.scss';
import { Button, Card, Skeleton } from '../../components';
import { SortByType } from '../../services/BooksServices';
import { CategoryType } from '../../redux/reducers/SearchReducer';

interface IImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}
export interface ICardDescription {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  desriptions: string;
  categories: string[];
  imageLinks: IImageLinks;
}
export interface ICard {
  id: string;
  volumeInfo: ICardDescription;
}

interface ICardBlock {
  totalCount: number;
  setItemsByParam: (
    initial: boolean,
    sortBy: SortByType,
    category: CategoryType,
    inputVal?: string,
    offset?: number
  ) => void;
  items: ICard[];
  input: string;
  sortBy: SortByType;
  category: CategoryType;
}
const CardsBlock: React.FC<ICardBlock> = ({
  totalCount,
  items,
  input,
  category,
  sortBy,
  setItemsByParam,
}) => {
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const isMounted = useRef(false);
  useEffect(() => {
    if (isMounted.current) {
      setLoading(false);
      setDisabled(false);
    }
  }, [items]);

  useEffect(() => {
    if (isMounted.current) {
      setItemsByParam(false, sortBy, category, undefined, offset);
    }
  }, [offset]);
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    setOffset(0);
    setItemsByParam(true, sortBy, category, input, 0);
    isMounted.current = true;
  }, [input, sortBy, category]);
  return (
    <div className={style.cardsBlock_wrapper}>
      {!loading ? (
        <h1>По вашему запросу было найдено {totalCount} единиц</h1>
      ) : (
        <h1>Загрузка... Подождите</h1>
      )}

      <div className={style.grid}>
        {!loading
          ? items.map((item: ICard) => {
              return <Card {...item} key={`${item.id}${Math.random()}`} />;
            })
          : new Array(20).fill(null).map((item, index) => {
              return <Skeleton key={index} />;
            })}
      </div>
      <div
        className={style.btn}
        onClick={() => {
          setDisabled(true);
          setOffset((state) => state + 30);
        }}
      >
        <Button disabled={disabled} />
      </div>
    </div>
  );
};
export default CardsBlock;
