import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import { Profile } from 'components/social_profile/Profile';
import { Statistics } from 'components/statistics/Statistics';
import { FriendList } from 'components/friends_list/FriendList';
import {TransactionHistory} from 'components/transaction_history/TransactionHistory';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
