import { combineReducers } from 'redux';
import initialState from './initialState'

const updateTweets = (tweets = initialState.tweets, action: { type: string; index: number; text: string }) => {
  const addLike = () => (
    tweets.map((tweet, index: number) => (
      (index === action.index) ?
        Object.assign({}, tweet, {
          likes: tweet.likes + 1
        })
        :
        tweet
    ))
  )
  const addTweet = () => (
    [
      ...tweets,
      { id: action.index, text: action.text, likes: 0, comments: [] as string[] }
    ]
  )
  const options = {
    ADD_LIKE: addLike,
    ADD_TWEET: addTweet,
    default: () => tweets
  }

  return (options['ADD_LIKE'] || options.default)();
};

const reducer = combineReducers({ updateTweets })
export default reducer;
