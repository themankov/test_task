import useHttp from '../core/http';
import { ICard } from '../modules/CardsBlock';
import { CategoryType } from '../redux/reducers/SearchReducer';
const { request } = new useHttp();
export type SortByType = 'newest' | 'relevance';
interface IResult {
  totalItems: number;
  items: ICard[];
}

class BookServices {
  async getBooks(
    inputValue: string,
    offset: number,
    sortBy: SortByType,
    category: CategoryType
  ) {
    const categoryParam = category === 'all' ? '' : `+subject:${category}`;
    const regexp = /\w/;
    const queryParam =
      inputValue !== ''
        ? `q=${inputValue}${categoryParam}`
        : `q=${regexp}${categoryParam}`;

    const res: IResult = await request(
      `https://www.googleapis.com/books/v1/volumes?${queryParam}&key=${process.env.REACT_APP_API_KEY}&orderBy=${sortBy}&maxResults=${process.env.REACT_APP_MAX_RESULT}&startIndex=${offset}`
    );

    return res;
  }
  async getBookById(id: string) {
    const res: ICard = await request(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );
    return res;
  }
}
export default BookServices;
