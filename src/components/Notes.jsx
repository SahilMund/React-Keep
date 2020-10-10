import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const Notes = (props) => {
  const deleteThisNote = () => {
    props.deleteEvent(props.id);
  };

  return (
    <>
      <div className='note'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <div className='row option-menu'>
          <div className='col-2'>
            <Tooltip title='Remind Me'>
              <IconButton>
                <AddAlertOutlinedIcon className='menu-icon' />
              </IconButton>
            </Tooltip>
          </div>
          <div className='col-2'>
            <Tooltip title='Collaborator'>
              <IconButton>
                <PersonAddOutlinedIcon className='menu-icon' />
              </IconButton>
            </Tooltip>
          </div>
          <div className='col-2'>
            <Tooltip title='Change Color'>
              <IconButton>
                <ColorLensOutlinedIcon className='menu-icon' />
              </IconButton>
            </Tooltip>
          </div>
          <div className='col-2'>
            <Tooltip title='Add Image'>
              <IconButton>
                <ImageOutlinedIcon className='menu-icon' />
              </IconButton>
            </Tooltip>
          </div>
          <div className='col-2'>
            <Tooltip title='Archive'>
              <IconButton>
                <ArchiveOutlinedIcon className='menu-icon' />
              </IconButton>
            </Tooltip>
          </div>
          <div className='col-2'>
            <Tooltip
              title='Delete Note'
              className='delete-icon'
              onClick={deleteThisNote}
            >
              <IconButton>
                <DeleteOutlineOutlinedIcon className='menu-icon' />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};
export default Notes;
