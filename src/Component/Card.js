import React, { Component } from "react";
import classNames from "classnames";
import {Card , Button} from "react-bootstrap"
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";

const drawerWidth = 200;
const styles = (theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      product: props.data
    };
    this.handelClickOne = this.handelClickOne.bind(this)
  }
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  handelClickOne(){
   this.setState({product: this.state.product.filter((product) => product.id < 10)})
  }
  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;
    const Cards = () =>{
     const Mapping = this.state.product.map((card) => {
        return (
          <Card style={{ width: "18rem" }} key={Card.id} className="Card">
            <Card.Img
              style={{ height: "150px" }}
              variant="top"
              src={card.image}
            />
            <Card.Body>
              <Card.Title>{card.name}</Card.Title>
              <Card.Subtitle className="mb-2">{card.price}</Card.Subtitle>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })
      return(
        <div className="cards">
        {Mapping}
        </div>
      )
    }
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Ecommerce24 Cars
            </Typography>
        
          </Toolbar>
          <Typography>
       
          </Typography>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <Typography
              variant="h6"
              color="inherit"
              style={{ justifyContent: "flex-start" }}
            >
            <NavLink to="/home">
            Back To Home
           </NavLink>
            </Typography>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button onClick={this.handelClickOne}>
              <ListItemText>Modern Cars</ListItemText>
            </ListItem>
            <ListItem button>
              {" "}
              <ListItemText>Sport Cars</ListItemText>
            </ListItem>
            <ListItem button>
              {" "}
              <ListItemText>Old Cars</ListItemText>
            </ListItem>
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
         <Cards />
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Product);
