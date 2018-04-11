import { connect } from 'react-redux'
import RedditComponent from './RedditComponent'

import { homeOperations } from './duck'

const mapStateToProps = (state) => {
  const { subredditData, showRedditSpinner } = state.home
  return {
    subredditData,
    showRedditSpinner
  }
}

const mapDispatchToProps = (dispatch) => {
  // 'fetchSubredditJson()' will trigger fetching of JSON data from
  // the Reddit API and pushes the relevant data into the Redux store.
  const fetchSubredditJson = (subreddit) => {
    dispatch(homeOperations.fetchSubredditJson(subreddit))
  }

  return { fetchSubredditJson }
}

const RedditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RedditComponent)

export default RedditContainer
