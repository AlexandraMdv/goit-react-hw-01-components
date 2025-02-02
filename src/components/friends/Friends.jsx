import styles from './Friends.module.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Friends = ({ friends }) => {
    const [hoveredFriendId, setHoveredFriendId] = useState(null);

    const handleMouseOver = (id) => {
        setHoveredFriendId(id);
    };

    const handleMouseOut = () => {
        setHoveredFriendId(null);
    };

    return (
        <ul className={styles.friendsList}>
            {friends.map(friend => (
                <li
                    key={friend.id}
                    className={`${styles.friendsListItem} ${hoveredFriendId === friend.id ? styles.hovered : ''}`}
                    onMouseOver={() => handleMouseOver(friend.id)}
                    onMouseOut={handleMouseOut}
                >
                    <span className={`${styles.status} ${friend.isOnline ? styles.isOnline : ''}`}></span>
                    <img className={styles.friendsImage} src={friend.avatar} alt={friend.name} />
                    <p>{friend.name}</p>
                </li>
            ))}
        </ul>
    );
};

Friends.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ).isRequired,
};

export default Friends;