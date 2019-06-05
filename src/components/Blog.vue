<template>
    <div class="main">
       <div class="main-innr">
            <v-card class="m-card">
                <v-container fluid class="mc-innr">
                    <v-flex
                    v-for="item in aPosts"
                    :key="item.index"
                    xs12>
                        <v-card flat hover class="mci-card">
                            <h1 class="mc-ttl">{{item.sTitle}}</h1>
                            <p class="mc-date">{{item.sDate}}</p>
                            <p class="mc-prvw">{{item.sPreview}}</p>
                        </v-card>
                    </v-flex>
                </v-container>
            </v-card>
       </div>
        <v-footer fixed class="main-footer justify-center">
            <p class="ma-0">&copy; {{new Date().getFullYear()}} Lauren Granada</p>
        </v-footer>
    </div>
</template>
<script>
export default {
    data () {
        return {
            aPosts: [
                {
                    sTitle: 'Setting up your Heroku site with JawsDB using Sequel Pro',
                    sDate: 'Apr 25, 2018',
                    sPreview: 'I found a few posts here and there online that helped fix one error or the other, but didn’t completely walk me through this process. I got errors like this in my logs...'
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
        overflow-y: auto;
        .main-innr{
            padding-top: 6rem;
            padding-bottom: 6rem;
            margin-left: 13%;
            margin-right: 13%;
            .m-card{
                padding: 2rem;
                .mc-innr{
                    .mci-card{
                        border: .5px #7623fc solid;
                        padding: 1rem;
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
                        .mc-prvw{
                            font-family: 'Open Sans', sans-serif;
                            font-size: 14px;
                        }
                    }
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
