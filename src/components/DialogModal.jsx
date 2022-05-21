import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { closeDialog } from "../redux/modal/Dialog";
import { clearCart } from "../redux/cart/CartSlice";

const DialogModal = () => {
  const { isOpen } = useSelector((store) => store.dialog);
  const dispatch = useDispatch();

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => dispatch(closeDialog())}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete items"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete all items?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              dispatch(closeDialog());
              dispatch(clearCart());
            }}
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogModal;
