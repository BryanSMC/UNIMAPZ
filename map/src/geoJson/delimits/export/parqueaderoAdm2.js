const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/parqAdmin2.jpg" alt="Parqueadero Administrativo 2" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea.</p>
  </div>
`

const OPTIONS = {
  id: '5b986427-b620-4602-bcdf-9db4f169f6f0',
  properties: {
    name: 'Parqueadero Administrativo 2',
    category: 'Parqueadero',
    html: HTML
  }
}

export const PARQUEADERO_ADMIN_2_1 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.74440789222716, 7.068627180941905],
        [-73.74444007873535, 7.068573944482836],
        [-73.74430060386658, 7.068520708017635],
        [-73.7442684173584, 7.06855797354392],
        [-73.74440789222716, 7.068627180941905]
      ]
    ]
  },
  ...OPTIONS
}

export const PARQUEADERO_ADMIN_2_2 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.74426305294037, 7.068504737076875],
        [-73.74413430690765, 7.068414235068836],
        [-73.7441074848175, 7.068451500603709],
        [-73.74422013759613, 7.068542002604458],
        [-73.74426305294037, 7.068504737076875]
      ]
    ]
  },
  ...OPTIONS
}
