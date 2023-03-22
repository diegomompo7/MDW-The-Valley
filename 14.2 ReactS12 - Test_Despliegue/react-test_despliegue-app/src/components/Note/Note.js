import './Note.scss';

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? 'make not important' : 'make important';

  return (
    <div className={note.important ? 'note note--important' : 'note'}>
      <p className='note__text'>{note.content}</p>
      <button onClick={toggleImportance}>{label}</button>
    </div>
  );
};

export default Note;