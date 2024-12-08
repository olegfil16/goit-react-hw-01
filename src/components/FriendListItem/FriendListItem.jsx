import "./FriendListItem.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="friends__item">
      <img src={avatar} alt={name} width="100" />
      <p className="friends__name">{name}</p>
      <p className={`friends__status ${isOnline ? "online" : ""}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
