const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/8.jpg" alt="Aula 7 y 8" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea.</p>
  </div>
`

export const AULA7_8 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74647959, 7.06864728
        ],
        [
          -73.74635353, 7.06863929
        ],
        [
          -73.74635353, 7.06853814
        ],
        [
          -73.7464863, 7.06854613
        ],
        [
          -73.74647959, 7.06864728
        ]
      ]
    ]
  },
  id: '19796027-77a1-43ac-b72c-fa09c735103b',
  properties: {
    name: 'Aula 7 y 8',
    category: 'Aulas',
    html: HTML
  }
}
