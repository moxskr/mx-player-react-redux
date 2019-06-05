export const Play = (media) => ({
    type : 'PLAYER_PLAY',
    payload : media
});

export const Pause = (media) => ({
    type : 'PLAYER_PAUSE',
    payload : media
});

export const TimeUpdate = (media) => ({
    type : 'PLAYER_TIME_UPDATE',
    payload : { media}
});

export const OnVolumeClick = (part, media) => ({
    type : 'PLAYER_VOLUME_CLICK',
    payload : {part, media}
});

export const OnTimeClick = (part, media) => ({
    type : 'PLAYER_TIME_CLICK',
    payload : {part, media}
});