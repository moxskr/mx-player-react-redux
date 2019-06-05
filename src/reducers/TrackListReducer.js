let init = {
    tracks : [
        {
            id : 1,
            title : 'Doomed',
            author : 'Bring Me The Horizon',
            image : './images/doomed.jpg',
            audio : './audio/doomed.mp3'
        },
        {
            id : 2,
            title : 'Bellyache',
            author : 'Billie Eilish',
            image : './images/bellyache.jpg',
            audio : './audio/bellyache.mp3'
        },
        {
            id : 3,
            title : 'Hearse',
            author : 'Boulevard Depo',
            image : './images/hearse.jpg',
            audio : './audio/hearse.mp3'
        }
    ],
    currentTrack : {
        id : 1,
        title : 'Doomed',
        author : 'Bring Me The Horizon',
        image : './images/doomed.jpg',
        audio : './audio/doomed.mp3',
    }
};

export const TrackListReducer = (state = init, action) => {
    switch (action.type) {
        case 'PREV_TRACK' :
            action.payload.media.currentTime = 0;
            if(action.payload.id !== 1){
                return{...state,
                    currentTrack : state.tracks.filter(item => item.id === (action.payload.id - 1))[0]
                };
            }
            else{
                return {...state,
                    currentTrack : state.tracks[state.tracks.length - 1]
                }
            }
        case 'NEXT_TRACK' :
            action.payload.media.currentTime = 0;
            if(action.payload.id !== state.tracks.length){
                return {...state,
                    currentTrack : state.tracks.filter(item => item.id === (action.payload.id + 1))[0]
                };
            }
            else{
                return {...state,
                    currentTrack : state.tracks[0]
                }
            }
        case 'PLAY_TRACK_BY_ID' :
            return {...state,
                currentTrack : state.tracks.filter(item => item.id === (action.payload))[0]
            };
        default :
            return state;
    }
};