import React from 'react';
import Player from './components/Player';
import TrackList from './components/TrackList';

const App = () => {
    return(
        <div className="app d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 player">
                        <Player/>
                    </div>
                    <div className="col-lg-4 track-list">
                        <TrackList/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default App;