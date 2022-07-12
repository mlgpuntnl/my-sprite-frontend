import mutations from './mutations'
import getters from './getters'
import actions from './actions'

import Layer from '../../../models/Layer'

export interface EditorState {
  layers: Layer[]
}

export default {
  state: (): EditorState => ({
    layers: [],
  }),
  getters: getters,
  mutations: mutations,
  actions: actions,
}