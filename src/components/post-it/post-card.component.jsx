import './post-card.styles.scss';

const PostCard = ({ card, dragStart, dragEnd }) => {
  console.log(card);
  console.log('****');
  return (
    <div
      className="post-card"
      draggable="true"
      onDrag={() => {
        dragStart(card.id);
      }}
      onDragEnd={() => {
        dragEnd();
      }}
    >
      <p>Title: {card.title}</p>
      <p>Time: {card.time}</p>
    </div>
  );
};

export default PostCard;
