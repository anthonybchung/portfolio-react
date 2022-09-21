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

  const dragEnter = () => {
    console.log('drag enter');
  };

  const dragEnd = () => {
    console.log('drag end');
  };

  const dragOver = (event) => {
    event.preventDefault();
    console.log('drag over');
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
      const newValue = { ...element, status: status };
      array[currentIndex] = newValue;
      return array;
    });
  };

  return (
    <div className="white-container">
      <div className="white-board">
        <div
          id="doing"
          className="white-board-container"
          onDrop={dragDrop}
          onDragOver={dragOver}
          onDragEnter={dragEnter}
        >
          {CardList.map(
            (element) =>
              element.status === 'doing' && (
                <PostCard
                  key={element.id}
                  card={element}
                  dragStart={dragStart}
                  dragEnd={dragEnd}
                />
              )
          )}
        </div>
        <div
          id="completed"
          className="white-board-container"
          onDragOver={dragOver}
          onDrop={dragDrop}
          onDragEnter={dragEnter}
        >
          {CardList.map(
            (element) =>
              element.status === 'completed' && (
                <PostCard
                  key={element.id}
                  card={element}
                  dragStart={dragStart}
                  dragEnd={dragEnd}
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

        <h1>{card.title}</h1>
        <h1>{card.time}</h1>
        <h1>{card.id}</h1>
        {CardList.map(
          (element) =>
            element.status === 0 && (
              <PostCard
                key={element.id}
                card={element}
                dragStart={dragStart}
                dragEnd={dragEnd}
              />
            )
        )}
      </div>
    </div>
  );
};

export default WhiteBoard;
