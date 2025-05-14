
// const video = document.getElementById('pausevideo');

// function pauseAndResume(pauseDuration, resumeDuration) {
//     video.pause();
//     setTimeout(() => {
//         video.play();
//         setTimeout(() => {
//             video.pause();
//             setTimeout(() => {
//                 video.play();
//             }, resumeDuration);
//         }, pauseDuration);
//     }, pauseDuration);
// }

// // Call the function with the desired pause and resume durations in milliseconds
// pauseAndResume(3000, 10000); // Pause for 3 seconds, resume for 10 seconds



        const video = document.getElementById('myVideo');
        const pauseDuration = 3000; // 3 seconds in milliseconds

        // Function to handle the video ending
        function handleVideoEnd() {
            console.log('Video ended. Pausing for ' + (pauseDuration / 1000) + ' seconds.');
            // No need to explicitly call video.pause() as the 'ended' event means it has stopped.

            setTimeout(() => {
                console.log('Pause finished. Restarting video.');
                video.currentTime = 0; // Reset video to the beginning
                video.play();          // Play the video
            }, pauseDuration);
        }

        // Add an event listener for the 'ended' event
        video.addEventListener('ended', handleVideoEnd);

        // Optional: If you don't want autoplay on initial load, remove 'autoplay' from the <video> tag
        // and you might want to call play() once the script is loaded if the video should start automatically.
        // For example, if not using autoplay attribute:
        // video.play().catch(error => {
        //     console.log('Autoplay was prevented:', error);
        //     // Browsers often restrict autoplay if the video is not muted
        //     // or if there's no user interaction first.
        // });

        // Note on autoplay:
        // Most modern browsers require the video to be muted for autoplay to work without user interaction.
        // That's why 'muted' is added to the <video> tag. If you need sound,
        // you'll typically need a user to interact with the page (e.g., click a button) to start the video with sound.
