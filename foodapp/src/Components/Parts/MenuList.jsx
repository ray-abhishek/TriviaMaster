import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Paper, ExpansionPanelSummary, Typography, ListSubheader, Collapse, Chip, ListItemIcon } from '@material-ui/core';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function MenuList({ data }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  console.log(data, " is MENU inside MENU LIST")

  return (
      <List component="nav" className={classes.root}
            subheader={
              <ListSubheader component="div">
                M E N U
              </ListSubheader>
            }>
      {
        Array.from(Object.keys(data)).forEach( foodType => {
        return (
          <>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              IC
            </ListItemIcon>
            <ListItemText primary={foodType} />
            { open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              
              {
                data[foodType].forEach( item => {
                  return (
                    <ListItem button className={classes.nested}>
                      <ListItemText primary={item.name} />
                      <Chip label={item.cost} variant="outlined" />
                      <div>
                        <button ><AddBoxOutlinedIcon /></button>
                        <Typography>
                          4
                        </Typography>
                        <button >
                          <IndeterminateCheckBoxOutlinedIcon />
                        </button>
                        </div>
                    </ListItem>
                  )
                })
              }
              
             
            </List>
          </Collapse>
          </>
        )
      })
      }
      </List>

    
  );
}