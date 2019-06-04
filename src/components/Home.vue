<template>
    <div class="main">
        <div class="main-left">
            <p class="ml-intro">I'm</p>
            <h1 class="ml-name">Lauren Granada,</h1>
            <!-- <p class="ml-fe">Front End Developer.<span class="mlf-cursor">l</span></p> -->
            <p class="ml-fe">Software Developer.</p>
        </div>
        <div class="main-right">
            <img class="mr-img" src="../assets/profile.jpg">
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            //
        };
    }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Serif:400,700|Open+Sans');
@media only screen and (max-width: 600px) {
    .main{
        // padding-top: 20%;
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
    .main{
        padding-right: 5%;
        display: flex;
        .main-left{
            // background-color: brown;
            flex: 1;
            align-items: center;
            margin: auto;
            .ml-intro{
                font-family: 'Open Sans', sans-serif;
                font-size: 30px;
                padding-left: 7rem;
                margin: 0px;
                line-height: 10px;
            }
            .ml-name{
                font-family: 'Noto Serif', serif;
                font-weight: 700;
                font-size: 50px;
                padding-left: 5rem;
                line-height: 4.5rem;
            }.ml-fe{
                font-family: 'Open Sans', sans-serif;
                font-size: 30px;
                padding-left: 9rem;
                margin: 0px;
                // line-height: 10px;
                background-color: black;
                // background-color: #7623fc;
                color: white;
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
</style>
