import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'


const API_KEY = 'AIzaSyAWYARh9wb78qKqbA5mp_JPdOXVq8myU9s';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { videos: [], selectedVideo: null };

        this.videoSearch('zelda');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term }, (videos) => {
            this.setState({ videos, selectedVideo: videos[0] });
        })
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={ term => this.videoSearch(term) } />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));