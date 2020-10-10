//react import
import React, { useState } from 'react';
//image import
import img from '../images/user.png';
//bootstrap css and js imports
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
//material ui component imports
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
//material ui icon imports
import SettingsIcon from '@material-ui/icons/Settings';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import RefreshIcon from '@material-ui/icons/Refresh';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import MenuIcon from '@material-ui/icons/Menu';



const Header = (props) => {

  //  For enabling or disabling the dark mode
  const [state, setState] = useState('dark');
  const [navThemeState, updateNavThemeState] = useState('Enable Dark Theme');

  const handleChange = (event) => {
    if (state === 'light') {
      setState('dark');
      updateNavThemeState('Enable Dark Theme');
    } else {
      setState('light');
      updateNavThemeState('Disable Dark Theme');
    }
    props.modeEvent(state);
  };


//  for showing active nav
  const toggleNav = () => {
    props.navEvent();
  };

  return (
    <>
      <nav
        className='navbar navbar-expand-lg navbar-light'
        id={props.colorMode}
      >

      {/* Menu icon */}
        <a className='nav-link ' href='#'>
          <Tooltip title='Main Menu' onClick={toggleNav}>
            <IconButton aria-label='Refresh'>
              <MenuIcon />
            </IconButton>
          </Tooltip>
        </a>

    {/* Google Keep Image */}
        <a className='navbar-brand' href='#'>
          <img
            src='https://img.icons8.com/color/48/000000/google-keep.png'
            className='ml-3 mr-2'
          />
          Keep
        </a>

        {/*  */}
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

      {/* Search */}
        <form className='form-inline my-2 my-lg-0'>
          <input
            className='form-control mr-sm-2 w-100 ml-md-5'
            type='search'
            placeholder='Search'
          />
        </form>


        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>

             {/* Refresh */}
            <li className='nav-item'>
              <a className='nav-link ' href='#'>
                <Tooltip title='Refresh'>
                  <IconButton aria-label='Refresh'>
                    <RefreshIcon />
                  </IconButton>
                </Tooltip>
              </a>
            </li>

            {/*List View  */}
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                <Tooltip title='Listview'>
                  <IconButton>
                    <ViewStreamIcon />
                  </IconButton>
                </Tooltip>
              </a>
            </li>

            {/* Settings */}
            <li className='nav-item dropdown'>
              <a
                className='nav-link '
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <Tooltip title='Settings'>
                  <IconButton>
                    <SettingsIcon />
                  </IconButton>
                </Tooltip>
              </a>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <a className='dropdown-item' href='#'>
                  Settings
                </a>
                <a className='dropdown-item' href='#' >
                  Feedback
                </a>
                <a className='dropdown-item' href='#' onClick={handleChange}>
                  {navThemeState}
                </a>
                <a className='dropdown-item' href='#'>
                  Send Feedback
                </a>
                <a className='dropdown-item' href='#'>
                  Help
                </a>
                <a className='dropdown-item' href='#'>
                  App Downloads
                </a>
                <a className='dropdown-item' href='#'>
                  Keyboard Shortcuts
                </a>
              </div>
            </li>

            {/* google apps */}
            <li className='nav-item'>
              <a className='nav-link ml-md-3' href='#'>
                <Tooltip title='Google Apps'>
                  <IconButton>
                    <DragIndicatorIcon />
                  </IconButton>
                </Tooltip>
              </a>
            </li>
            {/* user profile avatar */}
            <li className='nav-item d-flex justify-content-center align-items-center'>
              <a className='nav-link ' href='#'>
                <Tooltip title='Google Account'>
                  <Avatar alt='Travis Howard' src={img} />
                </Tooltip>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
