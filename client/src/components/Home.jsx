import React  from 'react';
import { Provider } from "react-redux";
import PostMessages from "./PostMessages";
import { store } from "../actions/store";
import { Container } from "@material-ui/core";
import ButterToast,{ POS_RIGHT,POS_TOP } from "butter-toast";
import { makeStyles } from '@material-ui/core/styles';
import authService from "../service/authService";
import ButtonAppBar from "./AppBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Home(props) {
  const classes = useStyles();
  if (!props.display) {
    return null;
  }

  if (!authService.isLoggedIn()) {
    props.history.push("/login");
  }

  const handleLogout = () => {
    authService.handleLogout(props);
  };

  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <div className={classes.root}>
            <ButtonAppBar handleLogout={handleLogout}/>
        </div>
        <PostMessages/>
        <ButterToast position={{vertical:POS_TOP,horizontal:POS_RIGHT}}/>
      </Container>
    </Provider>
  );
}

export default Home;
