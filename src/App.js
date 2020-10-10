import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CreateNote from './components/CreateNote';
import Notes from './components/Notes';



function App() {
  const [notelist, updatedNoteList] = useState([]); //for other notes
  const [pinnedNotelist, updatePinnedNoteList] = useState([]); //for pinned notes
  const [mode, updateMode] = useState(''); //for theme change
  const [instruction, updateInstruction] = useState(true);

  //
  const addNote = (note) => {
    if (note.title === '' && note.content === '') {
      console.log('Add a item first');
    } else {
      updatedNoteList((oldItems) => {
        return [...oldItems, note];
      });
    }
    updateInstruction(false);
  };

  const deleteNote = (id) => {
    updatedNoteList((oldItems) => {
      return oldItems.filter((noteValue, noteIndex) => {
        return noteIndex !== id;
      });
    });
  };

  const pinNote = (note) => {
    if (note.title === '' && note.content === '') {
      alert('Add a item first');
    } else {
      updatePinnedNoteList((oldItems) => {
        return [...oldItems, note];
      });
    }
    updateInstruction(false);
  };

  const deletePinnedNote = (id) => {
    updatePinnedNoteList((oldItems) => {
      return oldItems.filter((noteValue, noteIndex) => {
        return noteIndex !== id;
      });
    });
  };

  const changeMode = (state) => {
    if (state == 'dark') {
      updateMode('darkMode');
    } else {
      updateMode('lightMode');
    }
  };

  const toggleSideNav = () => {
    alert('active');
  };

  return (
    <>
      <Header
        modeEvent={changeMode}
        navEvent={toggleSideNav}
        colorMode={mode}
      />

      <div className='main-div-row' id={mode}>
        {/* side bar */}
        <div className='side-bar-col'>
          <Sidebar />
        </div>
        {/* main div */}
        <div className='main-col'>
          <CreateNote passEvent={addNote} pinEvent={pinNote} />

          <h2 className='div-headings'>Pinned</h2>

          <div className='pinnedNoteBucket'>
            {pinnedNotelist.map((pinnedNoteValue, pinnedNoteIndex) => {
              return (
                <Notes
                  key={pinnedNoteIndex}
                  id={pinnedNoteIndex}
                  title={pinnedNoteValue.title}
                  content={pinnedNoteValue.content}
                  deleteEvent={deletePinnedNote}
                />
              );
            })}
          </div>

          <h2 className='div-headings'>Others</h2>

          <div className='noteBucket'>
            {instruction ? (
              <div className='instruction-div'>
                <img alt="" src='https://img.icons8.com/color/240/000000/google-keep.png' />
                <p>Notes you add appear here</p>
              </div>
            ) : null}

            {notelist.map((noteValue, noteIndex) => {
              return (
                <Notes
                  key={noteIndex}
                  id={noteIndex}
                  title={noteValue.title}
                  content={noteValue.content}
                  deleteEvent={deleteNote}
                />
              );
            })}
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
