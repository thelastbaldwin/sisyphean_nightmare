import io from 'socket.io-client';

const socket = io('process.env.SOCKET_HOST');
const godMode = new URLSearchParams(window.location.search).get('alexander') === 'true';

socket.on('play.sample', (sample: string) => {
    console.log('received');
    playClip(sample, clips);
});

const clips: Record<string, typeof Audio> = {};

const playClip = (asset: string, clips: any) => {
    clips[asset] ??= new Audio(`./assets/${asset}.mp3`);
    if (clips[asset].paused) {
        clips[asset].play().catch(() => {
            // user hasn't interacted with the page yet
        });
    } else {
        clips[asset].currentTime = 0;
    }
};

const soundBoard = document.querySelector('.soundboard');
if (soundBoard) {
    soundBoard.addEventListener('click', (event) => {
        if (event.target instanceof HTMLButtonElement && event.target.dataset) {
            const asset = event.target.dataset?.asset;
            if (asset) {
                playClip(asset, clips);
                if (godMode) {
                    socket.emit('play.sample', asset);
                }
            }
        }
    });
}
