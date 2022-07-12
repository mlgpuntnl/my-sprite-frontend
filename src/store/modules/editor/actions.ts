import Layer from "../../../models/Layer"

const resetEditor = (context: any) => {  
  context.state.layers = []
  context.dispatch('addLayer', {
    id: '_0000000',
    name: 'Background'
  })
  context.dispatch('addLayer', {
    id: uniqueId(),
    name: 'Layer 1'
  })
}

const addLayer = (context: any, layer: Layer) => {
  context.state.layers.push(layer)
}

const uniqueId = (): string => {
  return '_' + Math.random().toString(36).substring(2, 9);
}

export default {
  addLayer,
  resetEditor
}