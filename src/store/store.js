import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        bDarkMode: false
    },
    getters: {
        get_b_DarkMode: function (state) {
            return state.bDarkMode;
        }
    },
    actions: {
        actToggleMode: function ({ commit }, bIsDark) {
            commit('mutSetMode', bIsDark);
        }
    },
    mutations: {
        mutSetMode: function(state, bIsDark) {
            state.bDarkMode = bIsDark;
        }
    }
});