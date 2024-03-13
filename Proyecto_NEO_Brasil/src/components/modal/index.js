import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
//   Paper,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
// import { styled } from "@mui/material/styles";
const ConfirmNotification = ({isOpen, setIsOpen}) => {

    const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(true);
//   const StyledPaper = styled(Paper)`
//     background-color: green;
//   `;

const gotoHome = () => navigate('/login');

  return (
    <Dialog
      onClose={() => setIsOpen(false)}
      open={isOpen}
      disableEscapeKeyDown={false}
    //   PaperComponent={StyledPaper}
    >
      <DialogTitle>
        {" "}
        <Typography variant="h4">Novo Cadastro</Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">
          Parabéns! Você realizou o cadastro com sucesso!
        </Typography>
        {/* <Typography variant="subtitle2">
          You cant undo this operation
        </Typography> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={gotoHome} variant="contained">ok</Button>
        <Button onClick={gotoHome} variant="contained" color="success">
          Fazer login
        </Button>
      </DialogActions>
    </Dialog>
  );
};
 
export default ConfirmNotification;