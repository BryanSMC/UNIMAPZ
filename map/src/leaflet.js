import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

import * as Lft from 'leaflet'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility'

import './styles/leaflet-custom.css'

const CENTER = [7.06758, -73.74541] // Centro de UNIPAZ
const BOUNDS = [
  // south west         // north east
  [7.05492, -73.75344], [7.07401, -73.73359]
]

const CONFIG_LEAFLET = {
  center: CENTER,
  zoom: 17,
  minZoom: 14,
  attributionControl: true,
  maxBounds: BOUNDS
}

export const map = Lft.map('map', CONFIG_LEAFLET).setView(CENTER) // Se crea el mapa
export const L = Lft // Se exporta el objeto Leaflet
