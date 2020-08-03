import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InsertChartTwoToneIcon from '@material-ui/icons/InsertChartTwoTone';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';
import { useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CardContent from '@material-ui/core/CardContent';
import AndroidOutlinedIcon from '@material-ui/icons/AndroidOutlined';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import AppleIcon from '@material-ui/icons/Apple';
import InsertDriveFileTwoToneIcon from '@material-ui/icons/InsertDriveFileTwoTone';
import AccountBalanceTwoToneIcon from '@material-ui/icons/AccountBalanceTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import DateRangeTwoToneIcon from '@material-ui/icons/DateRangeTwoTone';
import RoomTwoToneIcon from '@material-ui/icons/RoomTwoTone';
import FolderOpenTwoToneIcon from '@material-ui/icons/FolderOpenTwoTone';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import UAPP from '../../src/UAPP.png'
import BOLETO from '../../src/boleto.png'
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
  finCard: {
    marginTop: 20,
    height: 295
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
  boletos:{
    display: 'flex',
    maxWidth: 100,
    flexDirection: 'column'
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
  const History = useHistory();
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
      <img alt="logo" className="LogoDrawer" width="200" src={UAPP} />
      <div className={classes.toolbar} />

      <Divider />
      <List>
        <ListItem onClick={() => History.push('/')} button>
          <ListItemIcon>
            <HomeTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem onClick={() => History.push('/documentos')} button>
          <ListItemIcon>
            <InsertDriveFileTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Documentos" />
        </ListItem>
        <ListItem onClick={() => History.push('/arquivos')} button>
          <ListItemIcon>
            <FolderOpenTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Arquivos" />
        </ListItem>
        <ListItem onClick={() => History.push('/notas')} button>
          <ListItemIcon>
            <InsertChartTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Notas" />
        </ListItem>
        <ListItem style={{ background: 'linear-gradient(to right, #E6CCFF, #FFF)' }} button>
          <ListItemIcon>
            <AccountBalanceTwoToneIcon style={{ color: '#8000FF' }} />
          </ListItemIcon>
          <ListItemText style={{ color: '#8000FF' }} primary="Financeiro" />
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
            <AccountBalanceTwoToneIcon style={{
              fontSize: 23, verticalAlign: 'middle',
              position: 'relative', top: -2
            }} /> Financeiro
            </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar style={{ width: theme.spacing(4), height: theme.spacing(4), }} alt="Travis Howard" src="https://material-ui.com/static/images/avatar/3.jpg" />
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
        <Card className={classes.finCard}>
          <CardContent>
            <Typography style={{textAlign: 'center'}} color="textSecondary">
              Status da matricula:
        </Typography>
            <Typography style={{color: '#2CF463', textAlign: 'center'}} variant="h6" component="h6">
              Ativa
        </Typography>
        <div className={classes.boletos}>
          <img width="100" alt="boleto" src={BOLETO}/>
          <Typography style={{textAlign: 'center', marginTop: 2}} variant="caption">R$ 1.220</Typography>
          <Typography style={{textAlign: 'center', color: '#2CF463', marginTop: -10}} variant="overline"><strong>PAGO</strong></Typography>
        </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );

}