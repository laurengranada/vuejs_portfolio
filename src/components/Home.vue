<template>
    <div class="main" :style="{'background-image': 'url(' + sImgPath + ')'}">
        <div class="main-innr">
            <div class="main-left">
                <p class="ml-intro" :class="{ 'ml-intro-dark': bDarkMode }">I'm</p>
                <h1 class="ml-name" :class="{ 'ml-name-dark': bDarkMode }">Lauren Granada,</h1>
                <!-- <p class="ml-fe">Front End Developer.<span class="mlf-cursor">l</span></p> -->
                <p class="ml-fe" :class="{ 'ml-fe-dark': bDarkMode }">Software Developer.</p>
            </div>
            <div class="main-right">
                <img class="mr-img" src="../assets/profile.jpg">
            </div>
        </div>
        <div class="main-about">
            <v-card class="ma-card" :class="{ 'ma-card-dark': bDarkMode }">
                <v-container fluid class="mc-innr">
                    <p class="mci-ttl">About</p>
                    <v-divider class="mci-dv" :dark="bDarkMode"></v-divider>
                    <div class="mci-body">
                        <p class="mb-line">
                            Texas Ex from The University of Texas at Austin, Lauren earned a Bachelor of Arts in Philosophy, accompanied by a Business Foundations Certificate from The Red McCombs School of Business.
                        </p>
                        <p class="mb-line">
                            2018 graduate from The Coding Bootcamp at UT Austin, Lauren is skilled in HTML, CSS, Javascript, node.js, and many other languages and libraries.
                        </p>
                        <p class="mb-line">
                            Driven by creativity, this has led Lauren to work on a variety of projects ranging from photography, videography, and web development.
                        </p>
                    </div>
                </v-container>
            </v-card>
        </div>
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
            sImgPath: null
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
@media (max-width: 600px) and (min-width: 375px) {
    .main{
        padding-top: 0rem !important;
        .main-innr{
            display: block !important;
            .main-left{
                padding-top: 20%;
                padding-right: 9% !important;
            }
            .main-right{
                padding-top: 5%;
                padding-right: 17% !important;
                .mr-img{
                    max-height: 240px !important;
                }
            }
        }
    }
}
@media (max-width: 375px) {
    .main{
        padding-top: 0rem !important;
        .main-innr{
            display: block !important;
            padding-top: 3rem !important;
            .main-left{
                padding-top: 20%;
                padding-right: 8% !important;
                .ml-intro{
                    font-size: 20px !important;
                }
                .ml-name{
                    font-size: 26px !important;
                    line-height: 3rem !important;
                }
                .ml-fe{
                    font-size: 18px !important;
                    padding-left: 7rem !important;
                }
            }
            .main-right{
                padding-top: 5%;
                padding-right: 8% !important;
                .mr-img{
                    max-height: 220px !important;
                }
            }
        }
    }
}
    .main{
        height: 100%;
        width: 100%;
        padding-top: 10%;
        overflow-y: auto;
        .main-innr{
            padding-right: 5%;
            display: flex;
            .main-left{
                flex: 1;
                align-items: center;
                margin: auto;
                .ml-intro{
                    font-family: 'Open Sans', sans-serif;
                    font-size: 30px;
                    padding-left: 7rem;
                    margin: 0px;
                    line-height: 10px;
                    transition: all ease-in .3s;

                }
                .ml-intro-dark{
                    transition: all ease-in .3s;
                    color: $off_white;
                }
                .ml-name{
                    font-family: 'Noto Serif', serif;
                    font-weight: 700;
                    font-size: 50px;
                    padding-left: 5rem;
                    line-height: 4.5rem;
                    transition: all ease-in .3s;
                }
                .ml-name-dark{
                    color: $off_white;
                    transition: all ease-in .3s;
                }
                .ml-fe{
                    font-family: 'Open Sans', sans-serif;
                    font-size: 30px;
                    padding-left: 9rem;
                    margin: 0px;
                    background-color: black;
                    color: white;
                    transition: all ease-in .3s;
                    .mlf-cursor{
                        animation: 1s blink step-end infinite;
                        font-family: 'Open Sans', sans-serif;
                        font-size: 30px;
                    }
                    @keyframes blink {
                        from, to{
                            color: transparent;
                        }
                        50%{
                            color: white;
                        }
                    }
                }
                .ml-fe-dark{
                    background-color: $dark;
                    color: $purple;
                    transition: all ease-in .3s;
                }
            }
            .main-right{
                flex: 1;
                align-items: center;
                margin: auto;
                text-align: center;
                display: flex;
                justify-content: flex-end;
                padding-right: 2.5rem;
                .mr-img{
                    max-height: 410px;
                }
                .mr-icons{
                    padding-left: 1rem;
                    padding-right: 1rem;
                    .mri-icn{
                        display: block;
                        .mrii-indiv{
                            font-size: 17px;
                        }
                    }
                }
            }
        }
        .main-about{
            padding-top: 8rem;
            padding-bottom: 6rem;
            margin-left: 13%;
            margin-right: 13%;
            .ma-card-dark{
                background-color: $dark;
                .mc-innr{
                    .mci-ttl{
                        color: $off_white;

                    }
                    .mci-body{
                        color: $off_white;
                    }
                }
            }
            .ma-card{
                padding: 2rem;
                .mc-innr{
                    .mci-ttl{
                        text-align: center;
                        font-family: 'Open Sans', sans-serif;
                        font-size: 18px;
                        margin-bottom: .2rem;
                        font-weight: 600;
                    }
                    .mci-dv{
                        text-align: center;
                        padding-bottom: 2rem;
                    }
                    .mci-body{
                        font-family: 'Open Sans', sans-serif;
                        font-size: 14px;
                        .mb-line{

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
        }
    }
</style>
