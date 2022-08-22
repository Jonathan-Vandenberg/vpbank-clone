import { Avatar, Rating } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface ICustomerReview {
  name: string;
  review: string;
  image: string;
}

export default function MediaCard({ customer }: { customer: ICustomerReview }) {
  return (
    <Card sx={{ maxWidth: 345 }} className="shadow-card">
      <CardContent>
        <div className="flex items-center justify-between py-4">
          <Avatar src={customer.image} />
          <Rating name="read-only" value={5} readOnly />
        </div>
        <Typography gutterBottom variant="h5" component="div">
          {customer.name}
        </Typography>
        <Typography
          className="line-clamp-3"
          variant="body2"
          color="text.secondary"
        >
          {customer.review}
        </Typography>
      </CardContent>
      <CardActions>
        <div className="flex w-full items-center justify-between p-2">
          <Button size="small" className="text-iwanttoColor">
            Share
          </Button>
          <Button size="small" className="text-iwanttoColor">
            More Reviews
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
