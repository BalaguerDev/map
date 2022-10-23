/* ACCES TOKEN */
/* pk.eyJ1IjoiYmFsYWd1ZXJkZXYiLCJhIjoiY2w5bDZ0M25nMTJvdTQxb2RsNWJsdXN4aCJ9.s1CKxxYASouOcwsxckG0yQ */

/* put the token of mapbox */
mapboxgl.accessToken = 'pk.eyJ1IjoiYmFsYWd1ZXJkZXYiLCJhIjoiY2w5bDZ0M25nMTJvdTQxb2RsNWJsdXN4aCJ9.s1CKxxYASouOcwsxckG0yQ';
  let map = new mapboxgl.Map({
    container:'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [2.174356,41.403629],
    zoom:15
  });