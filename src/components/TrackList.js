import React from 'react';
import {connect} from 'react-redux';
import TrackListItem from './TrackListItem';

class TrackList extends React.Component{
    render(){
        return(
            <>
                <div className="track-list-title">
                    TrackList #1
                </div>
                {this.props.tracks.tracks.map(item => (<TrackListItem item={item} key={item.id}/>))}
            </>
        )
    }
}

const mapStateToProps = state => ({
    tracks : state.tracks
});

export default connect(mapStateToProps)(TrackList);