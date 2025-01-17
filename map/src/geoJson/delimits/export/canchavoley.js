const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/canchaVoley1.jpg" alt="Cancha Voleibol 1" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea.</p>
  </div>
`

export const CANCHA_VOLEY_1 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.74553978443146, 7.068190641796495],
        [-73.74555051326752, 7.068004313986891],
        [-73.74545395374297, 7.067993666681215],
        [-73.74544858932495, 7.068190641796495],
        [-73.74553978443146, 7.068190641796495]
      ]
    ]
  },
  id: 'e43222ed-b1c4-40dd-8e10-2834b2779d78',
  properties: {
    name: 'Cancha Voleibol 1',
    category: 'Cancha',
    html: HTML
  }
}
