import React from 'react';
import { FilledInput } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InsertChartTwoToneIcon from '@material-ui/icons/InsertChartTwoTone';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import AssignmentLateOutlinedIcon from '@material-ui/icons/AssignmentLateOutlined';
import AssignmentLateTwoToneIcon from '@material-ui/icons/AssignmentLateTwoTone';
import AndroidOutlinedIcon from '@material-ui/icons/AndroidOutlined';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import AppleIcon from '@material-ui/icons/Apple';
import InsertDriveFileTwoToneIcon from '@material-ui/icons/InsertDriveFileTwoTone';
import AccountBalanceTwoToneIcon from '@material-ui/icons/AccountBalanceTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import DateRangeTwoToneIcon from '@material-ui/icons/DateRangeTwoTone';
import RoomTwoToneIcon from '@material-ui/icons/RoomTwoTone';
import FolderOpenTwoToneIcon from '@material-ui/icons/FolderOpenTwoTone';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SmsRoundedIcon from '@material-ui/icons/SmsRounded';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import UAPP from '../../src/UAPP.png'
import './style.css';
import '../global.css';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#E4EBE5',
    height: '100%',
    width: '100%'
  },
  navTitle: {
    flexGrow: 1
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  accountIMG: {

  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  card: {
    textAlign: 'center',
    minWidth: 275,
  },
  cardTitle: {
    fontSize: 14,
  },
  cardPos: {
    marginBottom: 12,
  },

  cardWarnings: {
    marginTop: 20,
    minWidth: 275,
    maxWidth: 540
  },
  warningList: {
    width: '100%',
    maxWidth: 487,
  },
  inline: {
    display: 'inline',
  },
  divCards: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
  }
}));

export default function Aluno(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const drawer = (
    <div>
      <img className="LogoDrawer" width="200" src={UAPP} />
      <div className={classes.toolbar} />

      <Divider />
      <List>
        <ListItem style={{ background: 'linear-gradient(to right, #E6CCFF, #FFF)' }} button>
          <ListItemIcon>
            <HomeTwoToneIcon style={{ color: '#8000FF' }} />
          </ListItemIcon>
          <ListItemText style={{ color: '#8000FF' }} primary="Inicio" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InsertDriveFileTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Documentos" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FolderOpenTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Arquivos" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InsertChartTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Notas" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountBalanceTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Financeiro" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DateRangeTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Horário" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <RoomTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Eventos" />
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.navTitle} variant="h6">
            <HomeOutlinedIcon style={{
              fontSize: 23, verticalAlign: 'middle',
              position: 'relative', top: -2
            }} /> Inicio
            </Typography>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar style={{width: theme.spacing(4), height: theme.spacing(4),}} alt="Travis Howard" src="https://material-ui.com/static/images/avatar/3.jpg" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Configurações</MenuItem>
                <MenuItem onClick={handleClose}>Sair</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Faça o download do Aplicativo!
              </Typography>
            <Typography variant="h5" component="h2">
              <AppleIcon style={{ fontSize: 47, marginTop: 10, marginRight: 15, color: '#A1ACB2' }} />
              <AndroidOutlinedIcon style={{ fontSize: 40, marginLeft: 15, marginTop: 10, color: '#52FC55' }} />
            </Typography>
            <Typography style={{ marginBottom: 20 }} variant="body2" component="p">
              <br />
                Tenha todas as nossas funcionalidades na palma da mão. Rapido e seguro!
                <br />
            </Typography>
          </CardContent>
        </Card>
        <div className={classes.divCards}>
        <Card className={classes.cardWarnings}>
          <CardContent>
          <Typography style={{fontSize: 14, marginLeft: 18, fontWeight: '500'}} color="textSecondary" gutterBottom>
          <ErrorOutlineIcon style={{fontSize: 16, verticalAlign: 'middle', marginTop: -3, marginRight: 3}} />
            Avisos
          </Typography>
            <List className={classes.warningList}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar style={{backgroundColor: '#F45C3C'}}>
                      <ErrorRoundedIcon />
                    </Avatar>
                  </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Ali Connors
              </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar style={{backgroundColor: '#FFB200'}}>
                    <ErrorRoundedIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Summer BBQ"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        to Scott, Alex, Jennifer
              </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar style={{backgroundColor: '#71E9FF'}}>
                    <ErrorRoundedIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Oui Oui"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Sandra Adams
              </Typography>
                      {' — Do you have Paris recommendations? Have you ever…'}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
        <Card className={classes.cardWarnings}>
          <CardContent>
          <Typography style={{fontSize: 14, marginLeft: 18, fontWeight: '500'}} color="textSecondary" gutterBottom>
          <SmsRoundedIcon style={{fontSize: 16, verticalAlign: 'middle', marginTop: -1, marginRight: 4}} />
            Mensagens do professor
          </Typography>
            <List className={classes.warningList}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar>
                      <ChatRoundedIcon />
                    </Avatar>
                  </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Ali Connors
              </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar>
                      <ChatRoundedIcon />
                    </Avatar>
                  </ListItemAvatar>
                <ListItemText
                  primary="Summer BBQ"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        to Scott, Alex, Jennifer
              </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar>
                      <ChatRoundedIcon />
                    </Avatar>
                  </ListItemAvatar>
                <ListItemText
                  primary="Oui Oui"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Sandra Adams
              </Typography>
                      {' — Do you have Paris recommendations? Have you ever…'}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
        </div>
      </main>
    </div>
  );

  Aluno.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
}