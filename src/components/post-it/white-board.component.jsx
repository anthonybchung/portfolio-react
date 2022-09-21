import './white-board.styles.scss';
import { useState } from 'react';
import PostCard from './post-card.component';

const WhiteBoard = () => {
  // job
  // id:
  // title:
  // time:
  // status: [new,doing,done]

  const [id, setId] = useState(0);
  const [dragId, setDragId] = useState('');
  const [card, setCard] = useState({ id: '', title: '', time: 0, status: 0 });
  const [CardList, setCardList] = useState([]);

  const userInput = (e) => {
    const { name, value } = e.target;
    setCard((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addHandler = () => {
    setId((prev) => prev + 1);
    const currCard = { ...card, id: id };
    setCardList((prev) => [...prev, currCard]);
  };

  const dragStart = (id) => {
    setDragId(id);
  };

  const dragOver = (event) => {
    event.preventDefault();
  };

  const dragDrop = (event) => {
    const status = event.target.id;

    //find index containing dragId.
    const currentCard = (element) => {
      return element.id === dragId;
    };

    const currentIndex = CardList.findIndex(currentCard);
    setCardList((prev) => {
      const array = [...prev];
      const element = array[currentIndex];

      let newValue = element;
      if (status !== '') newValue = { ...element, status: status };
      array[currentIndex] = newValue;
      return array;
    });
  };

  return (
    <div className="white-container">
      <h2>Drag and Drop</h2>
      <div className="white-board">
        <div
          id="doing"
          className="white-board-container"
          onDrop={dragDrop}
          onDragOver={dragOver}
        >
          {CardList.map(
            (element) =>
              element.status === 'doing' && (
                <PostCard
                  key={element.id}
                  card={element}
                  dragStart={dragStart}
                />
              )
          )}
        </div>
        <div
          id="completed"
          className="white-board-container"
          onDragOver={dragOver}
          onDrop={dragDrop}
        >
          {CardList.map(
            (element) =>
              element.status === 'completed' && (
                <PostCard
                  key={element.id}
                  card={element}
                  dragStart={dragStart}
                />
              )
          )}
        </div>
      </div>
      <div className="button-container">
        <input
          type="text"
          onChange={userInput}
          placeholder="Job Title"
          name="title"
        />
        <input
          type="number"
          onChange={userInput}
          placeholder="Enter time"
          name="time"
        />
        <button onClick={addHandler}>Add Note</button>

        {CardList.map(
          (element) =>
            element.status === 0 && (
              <PostCard key={element.id} card={element} dragStart={dragStart} />
            )
        )}
      </div>
    </div>
  );
};

export default WhiteBoard;
