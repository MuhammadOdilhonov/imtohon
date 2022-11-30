import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {TbLock , TbLockOpen} from 'react-icons/tb'

const ITEM_HEIGHT = 48;

export default function LongMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '25ch',
          },
        }}
      >
          <MenuItem style={{color:"red"}}  onClick={()=>{handleClose(); props.event.Bloclash(props.event.id)}}>
           <TbLock style={{marginRight:"15px"}} /> blocklash
          </MenuItem>
          <MenuItem style={{color:"green"}}  onClick={()=>{handleClose(); props.event.blocChiqar(props.event.id)}}>
          <TbLockOpen style={{marginRight:"15px"}} /> blockdan chiqarish
          </MenuItem>
          <MenuItem style={{color:"red"}} onClick={()=>{handleClose(); props.event.Ochir(props.event.id)}}>
          <i class="bi bi-x-octagon-fill" style={{marginRight:"15px"}}></i> Sessiyani tugatish
          </MenuItem>
          <MenuItem style={{color:"blue"}} onClick={()=>{handleClose(); props.event.EditFunk(props.event.id)}}>
          <i class="bi bi-pencil-square" style={{marginRight:"15px"}}></i> Taxrirlash
          </MenuItem>
      
      </Menu>
    </div>
  );
}