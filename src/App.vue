<template>
	<v-app>
		<v-card class="main" height="100%">
			<v-speed-dial
				class="main-dial"
				v-model="fab"
				:top="true"
				:right="true"
				:direction="direction"
				:open-on-hover="hover"
				:transition="transition"
				:style="{'position': 'absolute', 'z-index': '2'}"
				>
				<template v-slot:activator>
					<v-btn
					v-model="fab"
					flat
					color="white"
					class="md-btn"
					>
					<v-img class="md-logo" :src="require('./assets/clearLogo.png')"  :class="{'active-logo': fab}" :style="{'max-height': '30px', 'max-width': '30px', 'padding-bottom': '20px'}"/>
					<v-icon large class="md-close" color="black"  :class="{'active-close': fab}">add</v-icon>
					</v-btn>
				</template>
				<v-btn
					fab
					dark
					small
					color="green"
				>
					<v-icon>fab fa-medium-m</v-icon>
				</v-btn>
				<v-btn
					fab
					dark
					small
					color="indigo"
				>
					<v-icon>fab fa-github</v-icon>
				</v-btn>
				<v-btn
					fab
					dark
					small
					color="red"
				>
					<v-icon>delete</v-icon>
				</v-btn>
			</v-speed-dial>
			<v-content class="main-content">
				<HelloWorld/>
			</v-content>
		<v-bottom-nav
		:active.sync="bottomNav"
		:color="color"
		:value="true"
		absolute
		dark
		:style="{'opacity': '1'}"
		>
		<v-btn dark>
			<span>Web</span>
			<v-icon>desktop_mac</v-icon>
		</v-btn>
		<v-btn dark>
			<span>Video</span>
			<v-icon>subscriptions</v-icon>
		</v-btn>
		<v-btn dark>
			<span>About</span>
			<v-icon>portrait</v-icon>
		</v-btn>
		</v-bottom-nav>
    </v-card>
	</v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
	name: 'App',
	components: {
		HelloWorld
	},
	data () {
		return {
			bClickedDial: false,
			bottomNav: 0,
			direction: 'bottom',
			fab: false,
			fling: false,
			hover: false,
			tabs: null,
			top: true,
			left: true,
			transition: 'slide-y-transition'
		};
	},
	computed: {
		color () {
			switch (this.bottomNav) {
				case 0: return '#6200EA';
				case 1: return '#A000C7';
				case 2: return '#EA009C';
				default: return '#6200EA';
			}
		},
		activeFab () {
        switch (this.tabs) {
          case 'one': return { 'class': 'purple', icon: 'account_circle' };
          case 'two': return { 'class': 'red', icon: 'edit' };
          case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' };
          default: return {};
        }
      }
	},
	watch: {
      top (val) {
        this.bottom = !val;
      },
      right (val) {
        this.left = !val;
      },
      bottom (val) {
        this.top = !val;
      },
      left (val) {
        this.right = !val;
      }
    }
};
</script>

<style lang="scss" scoped>
.main{
	.main-dial{
		.md-logo{
			opacity: 1;
			transition: all .2s linear;
		}
		.active-logo{
			opacity: 0;
			transform: rotate(45deg);
			transition: all .2s linear;
		}
		.md-close{
			opacity: 0;
			// transform: rotate(45deg);
			transition: all .2s linear;
			position: absolute;
		}
		.active-close{
			opacity: 1;
			transform: rotate(-45deg);
			transition: all .2s linear;
		}
	}
	.main-content{
		height: 100%;
		width: 100%;
	}
}
</style>

