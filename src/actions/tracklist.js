export const NextTrack = (id, media) => ({
    type : 'NEXT_TRACK',
    payload : {id, media}
});

export const PrevTrack = (id, media) => ({
    type : 'PREV_TRACK',
    payload : {id, media}
});

export const PlayTrackById = (id) => ({
    type : 'PLAY_TRACK_BY_ID',
    payload : id
});