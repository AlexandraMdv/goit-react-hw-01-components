import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import Friends from "./friends/Friends";
import Transactions from "./transactions/Transactions";

import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import items from './transactions.json';

export const App = () => {
  return (
    <div>
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics 
        title="Upload stats"
        data={data}

      />

      <Friends 
        friends={friends}
      />

      <Transactions items={items} />
      
    </div>
  );
};
