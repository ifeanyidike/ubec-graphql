import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router-dom';

export default function AlertDialog({ children, open, setOpen, back }) {
    const history = useHistory()
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {children}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button style={{ display: back ? 'block' : 'none' }} onClick={() => history.goBack()} color="primary" autoFocus>
                        Go Back
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        OK
                    </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}
