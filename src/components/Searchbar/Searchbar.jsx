import { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    searchWord: '',
  };

  handleFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchWord);
    this.reset();
  };

  handleInput = e => {
    this.setState({
      searchWord: e.currentTarget.value,
    });
  };

  reset = () => {
    this.setState({
      searchWord: '',
    });
  };

  render() {
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handleFormSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            value={this.state.searchWord}
            onChange={this.handleInput}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
