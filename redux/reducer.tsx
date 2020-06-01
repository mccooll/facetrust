import { combineReducers } from 'redux';

const initialState = {
  tweets: [
    {
      user: '', text: '', likes: 0, comments: []
    }
  ]
};

const updateTweets = function (tweets = initialState.tweets, action: { type: string, index: number }) {

  const addLike = () => {
    return tweets.map((tweet, index: number) => {
      if (index === action.index) {
        return Object.assign({}, tweet, {
          likes: tweet.likes++
        })
      }
      return tweet;
    })
  }
  const options = {
    ADD_LIKE: addLike,
    default: () => tweets
  }

  return (options['ADD_LIKE'] || options.default)();
};

const reducer = combineReducers({ updateTweets })
export default reducer;
