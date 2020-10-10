import React from 'react';

//material ui import
import IconButton from '@material-ui/core/IconButton';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const Sidebar = () => {
  return (
    <>
      <ul className='side-bar' id='mySidenav'>
        <li className='sidebar-li mt-2'>
          <IconButton className='active'>
            <EmojiObjectsOutlinedIcon className='sidebar-icon' />
          </IconButton>
        </li>
        <li className='sidebar-li'>
          <IconButton>
            <NotificationsNoneOutlinedIcon className='sidebar-icon' />
          </IconButton>
        </li>

        <li className='sidebar-li'>
          <IconButton>
            <CreateOutlinedIcon className='sidebar-icon' />
          </IconButton>
        </li>
        <li className='sidebar-li'>
          <IconButton>
            <ArchiveOutlinedIcon className='sidebar-icon' />
          </IconButton>
        </li>
        <li className='sidebar-li'>
          <IconButton>
            <DeleteOutlineOutlinedIcon className='sidebar-icon' />
          </IconButton>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
