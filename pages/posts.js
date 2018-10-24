import { Component } from 'react'

export default class extends Component {
  static getInitialProps ({ query: { id } }) {
    return { postId: id }
  }

  render () {
      console.log(this.props.postId);
    return <div>
      <h1>My blog post</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  }
}