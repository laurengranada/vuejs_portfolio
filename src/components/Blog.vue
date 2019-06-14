<template>
    <div class="main" :style="{'background-image': 'url(' + sImgPath + ')'}">
       <div class="main-innr">
            <v-card class="m-card" :class="{ 'm-card-dark': bDarkMode }">
                <v-container fluid class="mc-innr">
                    <v-flex
                    v-for="item in aPosts"
                    :key="item.index"
                    xs12>
                        <v-card flat hover class="mci-card" :href="item.sLink" target="_blank" :class="{ 'mci-card-dark': bDarkMode }">
                            <h1 class="mc-ttl" :class="{ 'mc-ttl-dark': bDarkMode }">{{item.sTitle}}</h1>
                            <p class="mc-date">{{item.sDate}}</p>
                            <p class="mc-prvw" :class="{ 'mc-prvw-dark': bDarkMode }">{{item.sPreview}}</p>
                        </v-card>
                    </v-flex>
                </v-container>
            </v-card>
       </div>
        <v-footer fixed class="main-footer justify-center" :class="{ 'main-footer-dark': bDarkMode }">
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
            aPosts: [
                {
                    sLink: 'https://medium.com/@laurengranada/setting-up-your-heroku-site-with-jawsdb-using-sequel-pro-5af8c6cc0f9f',
                    sTitle: 'Setting up your Heroku site with JawsDB using Sequel Pro',
                    sDate: 'Apr 25, 2018',
                    sPreview: 'I found a few posts here and there online that helped fix one error or the other, but didn’t completely walk me through this process. I got errors like this in my logs...'
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
        .main-innr{
            .m-card{
                .mc-innr{
                    .mci-card{
                        .mc-ttl{
                            font-size: 20px !important;
                        }
                    }
                }
            }
        }
    }
}
    .main{
        height: 100%;
        overflow-y: auto;
        .main-innr{
            padding-top: 6rem;
            padding-bottom: 6rem;
            margin-left: 13%;
            margin-right: 13%;
            .m-card-dark{
                background-color: $dark;
            }
            .m-card{
                padding: 2rem;
                .mc-innr{
                    .mci-card-dark{
                        background-color: $lighter_dark;
                    }
                    .mci-card{
                        border: .5px #7623fc solid;
                        padding: 1rem;
                        .mc-ttl-dark{
                            // color: $off_white !important;
                        }
                        .mc-ttl{
                            font-family: 'Noto Serif', serif;
                            font-weight: 700;
                            font-size: 26px;
                            color: #7623fc;
                        }
                        .mc-date{
                            font-family: 'Open Sans', sans-serif;
                            font-size: 12px;
                            color: #7a7a7a;
                        }
                        .mc-prvw-dark{
                            color: $off_white;
                        }
                        .mc-prvw{
                            font-family: 'Open Sans', sans-serif;
                            font-size: 14px;
                        }
                    }
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
            // position: relative;
            // padding-top: 1rem;
        }
    }
</style>
