import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function AlertDialog({
  onHandleChoice,
}) {
  const [open, setOpen] = React.useState(true);

  const handleTry = () => {
    setOpen(false);
    onHandleChoice('try');
  };
  const handleForget = () => {
    setOpen(false);
    onHandleChoice('forget');
  };

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Login ou Mot de Passe incorrect !
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Une erreur est apparue pendant la saisie, voulez vous réessayer ou vos mots de passe/login sont oubliés ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleTry}>Je Retente :-) </Button>
          <Button onClick={handleForget} autoFocus>
            J'ai oublié !
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
AlertDialog.propTypes = {
  onHandleChoice: PropTypes.func.isRequired,
};
export default React.memo(AlertDialog);
