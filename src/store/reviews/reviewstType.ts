
export interface IReviews {
   _id: string;
   name: string;
   job: string;
   title: string;
   body: string;
   foto: string;
   publisher: boolean;
   published_date: string;
   updated_date: string;
};

export interface ReviewsState {
   reviews: IReviews[];
   loading: boolean | null;
   message: string | null;
};

export interface IReviewsError {
   message: string;
}