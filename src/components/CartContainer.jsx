import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../redux/cart/CartSlice";
import {
  Box,
  Grid,
  Divider,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { openDialog } from "../redux/modal/Dialog";

import CartItem from "./Cart";

const cartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </Grid>
      <Divider sx={{ marginTop: 2 }} />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ margin: 4 }} variant="h4">
          Total:
        </Typography>
        <Typography sx={{ margin: 4 }} variant="h4">
          €{total}
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center", marginBottom: 5 }}>
        <Button
          onClick={() => dispatch(openDialog())}
          size="large"
          variant="contained"
          color="error"
        >
          Clear Cart
        </Button>
      </Box>
    </Container>
  );
};

export default cartContainer;
