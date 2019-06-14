<template>
    <div class="main" :style="{'background-image': 'url(' + sImgPath + ')'}">
        <v-card class="m-card-one" :class="{ 'm-card-one-dark': bDarkMode }">
            <v-container grid-list-lg fluid class="mc-projects">
                <v-layout row wrap>
                    <v-flex
                    v-for="item in aProjects"
                    :key="item.index"
                    md6
                    >
                        <v-card class="mcp-innr">
                            <v-img
                            :src="item.sImgPath"
                            :aspect-ratio="1.6"
                            >
                            </v-img>
                            <v-card-actions class="justify-center mcpi-btm" :class="{ 'mcpi-btm-dark': bDarkMode }">
                                <div class="mcpi-btns">
                                    <v-btn class="mb-btn" :dark="bDarkMode" :outline="!bDarkMode" round :href="item.sCodeLink" target="_blank">Code</v-btn>
                                    <v-btn class="mb-btn" :dark="bDarkMode" :outline="!bDarkMode" round :href="item.sDemoLink" target="_blank" v-if="item.sDemoLink !== null">Demo</v-btn>
                                </div>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
        <v-card class="m-card-two" :class="{ 'm-card-two-dark': bDarkMode }">
            <v-container grid-list-lg fluid class="mc-imgs">
                <p class="mci-ttl" :class="{ 'mci-ttl-dark': bDarkMode }">Experience working with: </p>
                <v-divider class="mci-dv text-xs-center" :dark="bDarkMode"></v-divider>
                <v-layout row wrap>
                    <v-flex
                    v-for="item in aIcons"
                    :key="item.index"
                    xs3 sm2 md1
                    >
                    <v-card flat class="mci-innr">
                        <v-img
                        :src="item.sImgPath"
                        :aspect-ratio="1"
                        >
                        </v-img>
                    </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
        <v-footer class="main-footer justify-center" :class="{ 'main-footer-dark': bDarkMode }">
            <p class="ma-0">&copy; {{new Date().getFullYear()}} Lauren Granada</p>
        </v-footer>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data () {
        return {
            sImgPath: null,
            aProjects: [
                {
                    sImgPath: require('@/assets/projects/bachelor.png'),
                    sCodeLink: 'https://github.com/laurengranada/fantasyBachelor',
                    sDemoLink: 'https://laurengranada.github.io/fantasyBachelor/'
                },
                {
                    sImgPath: require('@/assets/projects/vuetifyplayer.png'),
                    sCodeLink: 'https://github.com/laurengranada/vuetify-music-player',
                    sDemoLink: 'https://laurengranada.github.io/vuetify-music-player/'
                },
                {
                    sImgPath: require('@/assets/projects/u90c.png'),
                    sCodeLink: 'https://github.com/laurengranada/u90c',
                    sDemoLink: 'http://upperninetycup.com/'
                },
                {
                    sImgPath: require('@/assets/projects/drake.png'),
                    sCodeLink: 'https://github.com/laurengranada/week-3-game',
                    sDemoLink: 'https://laurengranada.github.io/week-3-game/'
                },
                {
                    sImgPath: require('@/assets/projects/liri.gif'),
                    sCodeLink: 'https://github.com/laurengranada/week-10-liri',
                    sDemoLink: null
                },
                {
                    sImgPath: require('@/assets/projects/friends.png'),
                    sCodeLink: 'https://github.com/laurengranada/week-3-game',
                    sDemoLink: 'https://laurengranada.github.io/week-3-game/'
                },
                {
                    sImgPath: require('@/assets/projects/harrypotter.jpg'),
                    sCodeLink: 'https://github.com/laurengranada/TriviaGame',
                    sDemoLink: 'https://floating-eyrie-82871.herokuapp.com/'
                },
                {
                    sImgPath: require('@/assets/projects/burger.png'),
                    sCodeLink: 'https://github.com/laurengranada/week-14-burger',
                    sDemoLink: 'https://cryptic-taiga-86578.herokuapp.com/'
                }
            ],
            aIcons: [
                {
                    sTitle: 'JS',
                    sImgPath: require('@/assets/icons/js.svg')
                },
                {
                    sTitle: 'HTML',
                    sImgPath: require('@/assets/icons/html.png')
                },
                {
                    sTitle: 'CSS',
                    sImgPath: require('@/assets/icons/css.png')
                },
                {
                    sTitle: 'Vue',
                    sImgPath: require('@/assets/icons/vue.png')
                },
                {
                    sTitle: 'Vuetify',
                    sImgPath: require('@/assets/icons/vuetify.png')
                },
                {
                    sTitle: 'jQurey',
                    sImgPath: require('@/assets/icons/jquery.png')
                },
                {
                    sTitle: 'SASS',
                    sImgPath: require('@/assets/icons/sass.png')
                },
                {
                    sTitle: 'jira',
                    sImgPath: require('@/assets/icons/jira.png')
                },
                {
                    sTitle: 'balsamiq',
                    sImgPath: require('@/assets/icons/balsamiq.png')
                },
                {
                    sTitle: 'heroku',
                    sImgPath: require('@/assets/icons/heroku.png')
                },
                {
                    sTitle: 'github',
                    sImgPath: require('@/assets/icons/github.svg')
                },
                {
                    sTitle: 'sql',
                    sImgPath: require('@/assets/icons/sql.png')
                },
                {
                    sTitle: 'bitbucket',
                    sImgPath: require('@/assets/icons/bitbucket.png')
                },
                {
                    sTitle: 'node',
                    sImgPath: require('@/assets/icons/node.png')
                }
            ]
        };
    },
    computed: {
        ...mapGetters({
            bDarkMode: 'get_b_DarkMode'
        })
    },
    watch: {
        bDarkMode: function () {
            if (this.bDarkMode === false) {
                this.sImgPath = './lite-marble.png';
            } else {
                this.sImgPath = './dark-marble.png';
            }
        }
    },
    mounted: function () {
        if (this.bDarkMode === false) {
            this.sImgPath = './lite-marble.png';
        } else {
            this.sImgPath = './dark-marble.png';
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../assets/style/utilcolor.scss';
@import url('https://fonts.googleapis.com/css?family=Noto+Serif:400,700|Open+Sans');
@media (max-width: 375px) {
    .main{
        .m-card-one, .m-card-one-dark{
            .mc-projects{
                .mcp-innr{
                    .mcpi-btm{
                        text-align: center;
                        .mcpi-btns{
                            display: flex;
                            .mb-btn{
                                padding: 0rem !important;
                                height: 2rem !important;
                                min-width: 5rem !important;
                            }
                        }
                    }
                }
            }
        }
    }
}
    .main{
        height: 100%;
        width: 100%;
        padding-top: 6rem;
        overflow-y: auto;
        .m-ttl{
            text-align: center;
            margin-right: 53%;
            .mt-box{
                font-family: 'Noto Serif', serif;
                font-weight: 700;
                font-size: 50px;
                padding-left: 9rem;
                padding-right: 12rem;
                margin: 0px;
            }
            .mt-subttl{
                font-family: 'Open Sans', sans-serif;
                font-size: 30px;
                margin: 0px;
                line-height: 3rem;
                color: white;
                background-color: black;
            }
        }
        .m-card-one-dark{
            background-color: $dark;
        }
        .m-card-one{
            margin-right: 13%;
            margin-left: 13%;
            padding: 2rem;
            .mc-projects{
                .mcp-innr{
                    margin-bottom: 2rem;
                    .mcpi-btm-dark{
                        background-color: $lighter_dark;
                    }
                    .mcpi-btm{
                        .mcpi-btns{
                        }
                    }
                }
            }
        }
        .m-card-two-dark{
            background-color: $dark;
        }
        .m-card-two{
            margin-top: 3rem;
            margin-bottom: 6rem;
            margin-right: 13%;
            margin-left: 13%;
            padding: 2rem;
            .mc-imgs{
                .mci-ttl-dark{
                    color: $off_white;
                }
                .mci-ttl{
                    text-align: center;
                    font-family: 'Open Sans', sans-serif;
                    font-size: 18px;
                    margin-bottom: .5rem;
                    font-weight: 600;
                }
                .mci-dv{
                    text-align: center;
                    padding-bottom: 2rem;
                }
                .mci-innr{
                    text-align: center;
                }
            }
        }
        .main-footer-dark{
            color: $off_white;
        }
        .main-footer{
            height: 1rem;
            background: none;
            z-index: 50;
            margin: 0rem;
        }
    }
</style>
