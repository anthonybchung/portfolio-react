import './post-card.styles.scss';

const PostCard = ({ card, dragStart }) => {
  return (
    <div
      className="post-card"
      draggable="true"
      onDrag={() => {
        dragStart(card.id);
      }}
    >
      <p>Title: {card.title}</p>
      <p>Time: {card.time}mins</p>
    </div>
  );
};

export default PostCard;
