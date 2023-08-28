interface IReviewsContent {
  language: string;
  name: string;
  job: string;
  title: string;
  body: string;
}

export interface IReviews {
  _id: string;
  translations: IReviewsContent[];
  foto: string;
  publisher: boolean;
  published_date: string;
  updated_date: string;
}

export interface ReviewsState {
  reviews: IReviews[];
  loading: boolean | null;
  message: string | null;
}

export interface IReviewsError {
  message: string;
}
