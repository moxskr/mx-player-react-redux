let init = {
    duration : '',
    currentTime : '',
    volume : 50,
    progressLine : 0,
    isPlaying : false
};

export const PlayerReducer = (state = init, action) => {
    switch (action.type) {
        case 'PLAYER_PLAY' :
            action.payload.play();
            return {...state,
                isPlaying : true
            };
        case 'PLAYER_PAUSE' :
            action.payload.pause();
            return {...state,
                isPlaying : false
            };
        case 'PLAYER_TIME_UPDATE':
            return {...state,
                duration : action.payload.media.duration,
                currentTime : action.payload.media.currentTime,
                progressLine: (action.payload.media.currentTime / action.payload.media.duration) * 100
            };
        case 'PLAYER_VOLUME_CLICK':
            action.payload.media.volume = action.payload.part;
            return {...state,
                volume : action.payload.part * 100
            };
        case 'PLAYER_TIME_CLICK':
            action.payload.media.currentTime = action.payload.part * action.payload.media.duration;
            return {...state};
        default:
            return state;
    }
};