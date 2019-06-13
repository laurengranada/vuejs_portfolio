<template>
	<v-app>
        <div>
            <div :class="IsDarkMode">
                <div class="main-mode">
                    <v-btn flat icon class="mm-btn" @click="fToggleDarkMode(true)" v-if="!bDarkMode">
                        <v-icon class="mb-icn">brightness_2</v-icon>
                    </v-btn>
                    <v-btn flat icon dark class="mm-btn" @click="fToggleDarkMode(false)" v-if="bDarkMode">
                        <v-icon class="mb-icn">brightness_5</v-icon>
                    </v-btn>
                </div>
                <div class="main-tlbr">
                    <v-btn round flat depressed color="#7623fc" class="mt-btn text-none" to="/">
                        <span>&#60;</span>About<span>/></span>
                    </v-btn>
                    <v-btn round flat color="#7623fc" class="mt-btn text-none" to="/work">
                        <span>&#60;</span>Work<span>/></span>
                    </v-btn>
                    <v-btn round flat color="#7623fc" class="mt-btn text-none" to="/blog">
                        <span>&#60;</span>Blog<span>/></span>
                    </v-btn>
                    <v-btn round flat color="#7623fc" class="mt-btn text-none" href="./Resume_LaurenGranada.pdf" target="_blank">
                        <span>&#60;</span>Resume<span>/></span>
                    </v-btn>
                </div>
            <div class="main-center">
                    <transition
                        name="fade"
                        mode="out-in">
                        <router-view class="main-content"></router-view>
                    </transition>
                    <div class="side-icons">
                        <v-btn flat icon color="#7623fc" class="si-icn" href="https://twitter.com/LaurenGranada" target="_blank">
                            <v-icon class="sii-indiv">fab fa-twitter</v-icon>
                        </v-btn>
                        <v-btn flat icon color="#7623fc" class="si-icn" href="https://www.linkedin.com/in/lauren-granada-developer/" target="_blank">
                            <v-icon class="sii-indiv">fab fa-linkedin</v-icon>
                        </v-btn>
                        <v-btn flat icon color="#7623fc" class="si-icn" href="https://github.com/laurengranada" target="_blank">
                            <v-icon class="sii-indiv">fab fa-github</v-icon>
                        </v-btn>
                        <v-btn flat icon color="#7623fc" class="si-icn" href="https://medium.com/@laurengranada" target="_blank">
                            <v-icon class="sii-indiv">fab fa-medium</v-icon>
                        </v-btn>
                    </div>
                </div>
            </div>
        </div>
	</v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	name: 'App',
	data () {
		return {
		};
    },
    computed: {
        ...mapGetters({
            bDarkMode: 'get_b_DarkMode'
        }),
        IsDarkMode: function () {
            return {
                'main': this.bDarkMode === false,
                'darkMode': this.bDarkMode === true
            };
        },
    },
    methods: {
        ...mapActions({
            fToggleDarkMode: 'actToggleMode'
        })
    }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Serif:400,700');
.darkMode{
    transition: all ease-in .3s;
    // background-image: url('./assets/dark-marble.png') !important;
    z-index: 1000;
    position: fixed;
	height: 100%;
    width: 100%;
    .main-mode{
        margin-top: .1rem;
        position: fixed;
        z-index: 4;
        background: none;
        .mm-btn{
            .mb-icn{
                font-size: 17px;
            }
        }
    }
	.main-tlbr{
        z-index: 2;
		position: fixed;
		padding: .5rem;
		display: inline-flex;
		width: 100%;
        justify-content: center;
        .mt-btn{
            font-family: 'Noto Serif', serif;
            font-size: 14px;
            width: 2rem !important;
            font-weight: 600;
            margin-top: 0rem;
            margin-right: .1rem;
        }
	}
    .main-center{
        display: flex;
        height: 95%;
        width: 100%;
        .fade-enter-active,
        .fade-leave-active {
            transition-duration: 0.3s;
            transition-property: opacity;
            transition-timing-function: ease;
        }
        .fade-enter,
        .fade-leave-active {
            opacity: 0
        }
        .main-content{
            height: 100%;
            width: 100%;
        }
        .side-icons{
            right: 0;
            top: 35%;
            position: fixed;
            height: 100%;
            z-index: 2;
            padding-left: .5rem;
            padding-right: .5rem;
            .si-icn{
                padding-top: .6rem;
                display: block;
                .sii-indiv{
                    font-size: 17px;
                }
            }
        }
    }
}
.main{
    transition: all ease-in .3s;
    // background-image: url('./assets/lite-marble.png');
    position: fixed;
	height: 100%;
    .main-mode{
        margin-top: .1rem;
        position: fixed;
        z-index: 4;
        background: none;
        .mm-btn{
            .mb-icn{
                font-size: 17px;
            }
        }
    }
	.main-tlbr{
        z-index: 2;
		position: fixed;
		padding: .5rem;
		display: inline-flex;
		width: 100%;
        justify-content: center;
        .mt-btn{
            font-family: 'Noto Serif', serif;
            font-size: 14px;
            width: 2rem !important;
            font-weight: 600;
            margin-top: 0rem;
            margin-right: .1rem;
        }
	}
    .main-center{
        display: flex;
        height: 95%;
        width: 100%;
        .fade-enter-active,
        .fade-leave-active {
            transition-duration: 0.3s;
            transition-property: opacity;
            transition-timing-function: ease;
        }
        .fade-enter,
        .fade-leave-active {
            opacity: 0
        }
        .main-content{
            height: 100%;
            width: 100%;
        }
        .side-icons{
            right: 0;
            top: 35%;
            position: fixed;
            height: 100%;
            z-index: 2;
            padding-left: .5rem;
            padding-right: .5rem;
            .si-icn{
                padding-top: .6rem;
                display: block;
                .sii-indiv{
                    font-size: 17px;
                }
            }
        }
    }
    // .main-footer{
    //     height: 3rem;
    //     background: none;
    //     z-index: 50;
    //     position: relative;
    //     padding-top: 1rem;
    // }
}
</style>

