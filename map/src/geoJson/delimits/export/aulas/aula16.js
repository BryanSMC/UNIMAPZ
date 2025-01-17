const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/16.jpg" alt="Aula 16" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea.</p>
  </div>
`

export const AULA_16 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74577551, 7.06906918
        ],
        [
          -73.74564811, 7.06907184
        ],
        [
          -73.74565213, 7.06895605
        ],
        [
          -73.74577954, 7.0689627
        ],
        [
          -73.74577551, 7.06906918
        ]
      ]
    ]
  },
  id: 'c8fefe8b-9f6f-4c0d-aba4-332a4ad31709',
  properties: {
    name: 'Aula 16',
    category: 'Aulas',
    html: HTML
  }
}
