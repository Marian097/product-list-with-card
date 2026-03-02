
import { Rating, Typography } from "@material-tailwind/react";
 
type Props = {
  rated: number;
  setRated: (raiting :number) => void;
}
export function RatingWithText({rated, setRated} : Props) {
  console.log(rated)
   return (
    <div className="flex items-center gap-2 font-bold text-white">
      {rated}.7
      <Rating value={rated} onChange={(rated) => setRated(rated)} />
      <Typography color="blue-gray" className="font-medium text-white">
        Based on 134 Reviews
      </Typography>
    </div>
  );
}