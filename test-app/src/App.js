import React, { Component } from 'react';
import Header from './component/header';
import Headline from './component/headline';

import SharedButton from './component/button';
import ListItem from './component/listItem';
import {connect} from 'react-redux';
import {fetchPosts} from './actions';
import './app.scss';

/* This const is not used within our app.
   Although we are passing it to the Headline Component
   it is only here as an exampleof testing PropTypes */
const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}];

class App extends Component {
  constructor(props){
    // console.log(props);
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch(){ //dispatch 
    this.props.fetchPosts();
  }

  render() {
    const {posts} = this.props;

    const configButton = {
      buttonText: 'get posts',
      emitEvent: this.fetch
    }

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr} />
          <SharedButton {...configButton} />
          {posts.length > 0 && // 如果state有posts的话就render listItems
            <div>
              {posts.map((post, index) => {
                const {title, body} = post;
                const configListItem = {
                  title,
                  desc: body
                };
                return(
                  <ListItem key={index} {...configListItem} />
                )
              })}
            </div>
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("in mapStateToProps() in App.js" + state.posts);
  return{
    posts: state.posts
  }
};

export default connect(mapStateToProps, {fetchPosts})(App); //connect(mapStateToProps, mapDispatchToProps)(Component)
// inside our store, we have posts:[] and fetchPosts:fn()
// our state is: 
// { store:
//   { dispatch: [Function],
//     subscribe: [Function: subscribe],
//     getState: [Function: getState],
//     replaceReducer: [Function: replaceReducer],
//     [Symbol(observable)]: [Function: observable] 
//   },
//  posts:
//   [ { title: 'Example title 1', body: 'Some text' },
//     { title: 'Example title 2', body: 'Some text' },
//     { title: 'Example title 3', body: 'Some text' } ],
//  fetchPosts: [Function] 
// }




