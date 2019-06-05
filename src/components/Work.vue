<template>
    <div class="main">
        <!-- <div class="m-ttl">
            <p class="mt-box">Experience</p>
            <p class="mt-subttl">working with </p>
        </div> -->
        <v-card class="m-card-one">
            <v-container grid-list-lg fluid class="mc-projects">
                <!-- <p class="mci-ttl">Experience working with: </p>
                <v-divider></v-divider> -->
                <v-layout row wrap>
                    <v-flex
                    v-for="item in aProjects"
                    :key="item.index"
                    md6
                    >
                        <v-card tile class="mcp-innr">
                            <v-img
                            :src="item.sImgPath"
                            :aspect-ratio="1.6"
                            >
                            </v-img>
                            <v-card-actions class="justify-center mcpi-btm">
                                <div class="mcpi-btns">
                                    <v-btn dark outline round :href="item.sCodeLink" target="_blank" color="grey darken-4">Code</v-btn>
                                    <v-btn dark outline round :href="item.sDemoLink" target="_blank" color="grey darken-4" v-if="item.sDemoLink !== null">Demo</v-btn>
                                </div>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
        <v-card class="m-card-two">
            <v-container grid-list-lg fluid class="mc-imgs">
                <p class="mci-ttl">Experience working with: </p>
                <v-divider class="mci-dv text-xs-center"></v-divider>
                <v-layout row wrap>
                    <v-flex
                    v-for="item in aIcons"
                    :key="item.index"
                    xs3 sm2 md1
                    >
                    <v-card flat tile class="mci-innr">
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
        <v-footer class="main-footer justify-center">
            <p class="ma-0">&copy; {{new Date().getFullYear()}} Lauren Granada</p>
        </v-footer>
    </div>
</template>

<script>
export default {
    data () {
        return {
            aProjects: [
                {
                    sImgPath: require('@/assets/bachelor.png'),
                    sCodeLink: 'https://github.com/laurengranada/fantasyBachelor',
                    sDemoLink: 'https://laurengranada.github.io/fantasyBachelor/'
                },
                {
                    sImgPath: require('@/assets/vuetifyplayer.png'),
                    sCodeLink: 'https://github.com/laurengranada/vuetify-music-player',
                    sDemoLink: 'https://laurengranada.github.io/vuetify-music-player/'
                },
                {
                    sImgPath: require('@/assets/u90c.png'),
                    sCodeLink: 'https://github.com/laurengranada/u90c',
                    sDemoLink: 'http://upperninetycup.com/'
                },
                {
                    sImgPath: require('@/assets/drake.png'),
                    sCodeLink: 'https://github.com/laurengranada/week-3-game',
                    sDemoLink: 'https://laurengranada.github.io/week-3-game/'
                },
                {
                    sImgPath: require('@/assets/liri.gif'),
                    sCodeLink: 'https://github.com/laurengranada/week-10-liri',
                    sDemoLink: null
                },
                {
                    sImgPath: require('@/assets/friends.png'),
                    sCodeLink: 'https://github.com/laurengranada/week-3-game',
                    sDemoLink: 'https://laurengranada.github.io/week-3-game/'
                },
                {
                    sImgPath: require('@/assets/harrypotter.jpg'),
                    sCodeLink: 'https://github.com/laurengranada/TriviaGame',
                    sDemoLink: 'https://floating-eyrie-82871.herokuapp.com/'
                },
                {
                    sImgPath: require('@/assets/burger.png'),
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
    }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Serif:400,700|Open+Sans');
    .main{
        height: 100%;
        width: 100%;
        padding-top: 6rem;
        overflow-y: auto;
        .m-ttl{
            // float: right;
            text-align: center;
            margin-right: 53%;
            .mt-box{
                // font-family: 'Open Sans', sans-serif;
                font-family: 'Noto Serif', serif;
                font-weight: 700;
                font-size: 50px;
                padding-left: 9rem;
                padding-right: 12rem;
                margin: 0px;
                // line-height: 10px;
                // background-color: black;
                // background-color: #7623fc;
                // color: white;
            }
            .mt-subttl{
                font-family: 'Open Sans', sans-serif;
                font-size: 30px;
                // padding-left: 1rem;
                margin: 0px;
                line-height: 3rem;
                color: white;
                // line-height: 10px;
                background-color: black;
            }
        }
        .m-card-one{
            // margin: 2rem;
            margin-right: 13%;
            margin-left: 13%;
            padding: 2rem;
            .mc-projects{
                .mcp-innr{
                    // margin-top: 2rem;
                    margin-bottom: 2rem;
                    // margin-right: 1rem;
                    // margin-left: 1rem;
                    // margin-top: 2rem;
                    .mcpi-btm{
                        // background-color: #EEEEEE;
                    }
                    .mcpi-btns{
                    }
                }
            }
        }
        .m-card-two{
            margin-top: 3rem;
            margin-bottom: 6rem;
            margin-right: 13%;
            margin-left: 13%;
            padding: 2rem;
            .mc-imgs{
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
                    // padding-top: 2rem;
                    text-align: center;
                }
            }
        }
         .main-footer{
            height: 1rem;
            background: none;
            z-index: 50;
            margin: 0rem;
            // position: relative;
            // padding-top: 1rem;
        }
    }
</style>
