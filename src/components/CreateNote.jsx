import React, { useState } from 'react';


import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const CreateNote = (props) => {
  const [view, updateView] = useState(false);
  const [note, updatedNote] = useState({
    title: '',
    content: '',
  });

  const changeEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    updatedNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passEvent(note);
    updatedNote({
      title: '',
      content: '',
    });
  };

  const pinThisNote = () => {
    props.pinEvent(note);
    updatedNote({
      title: '',
      content: '',
    });
  };

  const changeView = () => {
    updateView(true);
  };

  const handleClickAway = () => {
    updateView(false);
    props.passEvent(note);
    updatedNote({
      title: '',
      content: '',
    });
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className='main-input-div'>
          <Tooltip title='Pin note' className='pin' onClick={pinThisNote}>
            <IconButton>
              <i className='fas fa-thumbtack'></i>
            </IconButton>
          </Tooltip>

          {view ? (
            <input
              type='text'
              placeholder='Title'
              name='title'
              value={note.title}
              onChange={changeEvent}
              autoComplete='off'
            />
          ) : null}

          <textarea
            type='text'
            placeholder='Take a note...'
            name='content'
            rows='1'
            value={note.content}
            onChange={changeEvent}
            onClick={changeView}
          />

          {view ? (
            <div className='row option-menu'>
              <div className='col-md-1 col-2'>
                <Tooltip title='Remind Me'>
                  <IconButton>
                    <AddAlertOutlinedIcon className='menu-icon' />
                  </IconButton>
                </Tooltip>
              </div>
              <div className='col-md-1 col-2'>
                <Tooltip title='Collaborator'>
                  <IconButton>
                    <PersonAddOutlinedIcon className='menu-icon' />
                  </IconButton>
                </Tooltip>
              </div>
              <div className='col-md-1 col-2'>
                <Tooltip title='Change Color'>
                  <IconButton>
                    <ColorLensOutlinedIcon className='menu-icon' />
                  </IconButton>
                </Tooltip>
              </div>
              <div className='col-md-1 col-2'>
                <Tooltip title='Add Image'>
                  <IconButton>
                    <ImageOutlinedIcon className='menu-icon' />
                  </IconButton>
                </Tooltip>
              </div>
              <div className='col-md-1 col-2'>
                <Tooltip title='Archive'>
                  <IconButton>
                    <ArchiveOutlinedIcon className='menu-icon' />
                  </IconButton>
                </Tooltip>
              </div>
              <div className='col-md-1 col-2'>
                <Tooltip title='More'>
                  <IconButton>
                    <MoreVertOutlinedIcon className='menu-icon' />
                  </IconButton>
                </Tooltip>
              </div>
              <div className='col-md-6 col-12 addnote-div'>
                <button className='add-note-btn' onClick={addEvent}>
                  Add Note
                  <AddCircleOutlineOutlinedIcon className='ml-2' />
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </ClickAwayListener>
    </>
  );
};
export default CreateNote;
