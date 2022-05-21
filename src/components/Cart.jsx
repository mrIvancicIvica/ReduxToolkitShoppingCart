import * as React from "react";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";
import Plus from "@mui/icons-material/AddCircleOutlineSharp";
import Minus from "@mui/icons-material/RemoveCircleOutlineSharp";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../redux/cart/CartSlice";

const CartItem = ({ id, image, title, description, amount, price }) => {
  const dispatch = useDispatch();

  return (
    <Grid item md={4}>
      <Card sx={{ maxWidth: 360 }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="green iguana"
        />
        <CardContent sx={{ height: 100 }}>
          <Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "1",
              WebkitBoxOrient: "vertical",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "3",
              WebkitBoxOrient: "vertical",
            }}
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              if (amount === 1) {
                dispatch(removeItem(id));
                return;
              }
              dispatch(decrease(id));
            }}
            size="small"
          >
            <Minus />
          </Button>
          <Typography>{amount}</Typography>
          <Button onClick={() => dispatch(increase(id))} size="small">
            <Plus />
          </Button>
          <Typography
            style={{ marginLeft: "auto", marginRight: "15px", color: "red" }}
          >
            €{price}
          </Typography>
          <Button onClick={() => dispatch(removeItem(id))} size="small">
            remove
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CartItem;
