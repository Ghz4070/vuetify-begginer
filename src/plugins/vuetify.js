import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                green: colors.green.darken1,
                orange: colors.orange.lighten1,
                buttonCards: colors.orange,
                colorListItemLD: colors.orange.accent1
            },
            dark: {
                green: colors.grey.darken1,
                orange: colors.grey.darken4,
                buttonCards: colors.green.lighten1,
                colorListItemLD: colors.green.accent1
            },
        },
    },
});
