// import express from "express";

// const AUTH_URL =
//   "https://accounts.spotify.com/authorize/client_id=&response_type=code&redirect_uri=https://localhost:3000&scope=streaming%20&user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

// export default function Login() {
//   return (
//     <button>tanginga</button>
//   );
// }

// const CLIENT_ID = 'd630797d4ecb454387dcadfcd19b911e';
// const CLIENT_SECRET = `d630797d4ecb454387dcadfcd19b911e`;
// const REDIRECT_URI = 'http://localhost:3000';
// const SCOPES = [
//   'user-read-private',
//   'user-read-email',
//   'user-read-playback-state',
//   'user-modify-playback-state',
//   'user-library-read',
//   'user-library-modify',
//   'playlist-read-private',
//   'playlist-modify-public',
//   'streaming'
// ];

// const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${SCOPES.join('%20')}`;
// window.location.href = AUTH_URL;



// const getAccessToken = async (code) => {
//   const response = await fetch('https://accounts.spotify.com/api/token', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Authorization': 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)
//     },
//     body: new URLSearchParams({
//       grant_type: 'authorization_code',
//       code,
//       redirect_uri: REDIRECT_URI
//     })
//   });

//   return response.json(); // contains access_token, refresh_token, expires_in
// };

