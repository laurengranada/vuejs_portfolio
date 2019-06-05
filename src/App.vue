<template>
	<v-app>
		<div class="main">
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
                    <!-- <v-btn flat icon color="#7623fc" class="si-icn" href="https://www.linkedin.com/in/lauren-granada-developer/" target="_blank">
                        <v-icon class="sii-indiv">fab fa-dev</v-icon>
                    </v-btn> -->
                    <v-btn flat icon color="#7623fc" class="si-icn" href="https://medium.com/@laurengranada" target="_blank">
                        <v-icon class="sii-indiv">fab fa-medium</v-icon>
                    </v-btn>
                    <!-- <v-btn flat icon color="#7623fc" class="si-icn" href="https://medium.com/@laurengranada" target="_blank">
                        <v-icon class="sii-indiv">fas fa-file-pdf</v-icon>
                    </v-btn> -->
                </div>
            </div>
            <!-- <v-footer class="main-footer justify-center">
                <p>&copy; {{new Date().getFullYear()}} Lauren Granada</p>
            </v-footer> -->
		</div>
	</v-app>
</template>

<script>

export default {
	name: 'App',
	data () {
		return {
		};
    },
    methods: {
        fOpenPDF: function () {
            window.open("./assets/bachelor.png", "_blank");
        }
    }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Serif:400,700');
.main{
    background-image: url('./assets/lite-marble.png');
    position: fixed;
    // opacity: .5;
	height: 100%;
    // z-index: 0;
	.main-tlbr{
        // background-color: aqua;
        z-index: 2;
		position: fixed;
		padding: .5rem;
		display: inline-flex;
		width: 100%;
        justify-content: center;
        // justify-content: flex-end;
        // padding-right: 14%;
		// height: 4%;
        // text-align: center;
		// .mt-initial{
        //     flex: 1;
        //     font-family: 'Noto Serif', serif;
        //     font-weight: 700;
        //     // font-weight: 100;
        //     color: #7623fc;
		// }
        .mt-btn{
            font-family: 'Noto Serif', serif;
            font-size: 14px;
            width: 2rem !important;
            font-weight: 600;
            // margin: 0rem !important;
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
            // margin-top: 50%;
            right: 0;
            top: 35%;
            position: fixed;
            // background-color: aqua;
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
    .main-footer{
        height: 3rem;
        background: none;
        z-index: 50;
        position: relative;
        padding-top: 1rem;
    }
}
</style>

