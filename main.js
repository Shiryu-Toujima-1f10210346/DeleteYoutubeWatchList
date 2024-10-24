async function deleteWatchLaterVideos() {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    const videos = document.querySelectorAll("ytd-playlist-video-list-renderer #menu #button");

    for (const button of videos) {
        button.click();
        await delay(1000); 
        const options = document.querySelectorAll('tp-yt-paper-listbox yt-formatted-string');
        for (const option of options) {
            if (option.textContent.includes('削除')) {
                option.click();
                console.log('動画を削除しました');
                await delay(1000); 
                break;
            }
        }
    }
    console.log('すべての動画が処理されました。');
}

deleteWatchLaterVideos();
