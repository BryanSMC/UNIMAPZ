const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/1.jpg" alt="Aula 1 y 2" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea.</p>
  </div>
`

export const AULA1_2 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74661907, 7.06883094
        ],
        [
          -73.74648898, 7.0688203
        ],
        [
          -73.74650239, 7.06863131
        ],
        [
          -73.74663919, 7.06863796
        ],
        [
          -73.74661907, 7.06883094
        ]
      ]
    ]
  },
  id: '03e8820a-56ea-40de-8cbe-dbe59758ef19',
  properties: {
    name: 'Aula 1 y 2',
    category: 'Aulas',
    html: HTML
  }
}
