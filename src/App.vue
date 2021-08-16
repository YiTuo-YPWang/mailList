<template>
	<div id="app">
		<router-view> </router-view>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import "@/styles/base.scss";
	import "@/styles/resetElement.scss";
	import { delay } from 'lodash';
	@Component({
		components: {}
	})
	export default class App extends Vue {
		constructor() {
			super();
		}
		created() {
			const _this: any = this;
			// _this.setWebLogo();
		}
		get sysInfo() {
			return this.$store.getters.appDetail;
		}
		// async setWebLogo() {
		// 	const _this: any = this;
		// 	const sysInfo = _this.sysInfo;
		// 	if(sysInfo && sysInfo.web_logo_path) {
		// 		const link: any = document.querySelector("link[rel*='icon']") || document.createElement('link');
		// 		link.type = 'image/x-icon';
		// 		link.rel = 'shortcut icon';
		// 		link.href = sysInfo.web_logo_path;
		// 		document.getElementsByTagName('head')[0].appendChild(link);
		// 	}
		// 	if(sysInfo && sysInfo.sys_name) {
		// 		document.title = sysInfo.sys_name;
		// 	}
		// }
	}
</script>

<style lang="scss">
* { padding: 0; margin: 0; border: 0; }
HTML, body, div, h1, h2, h3, h4, h5, h6, ul, ol, dl, li, dt, dd, p, blockquote,
pre, form, fieldset, table, th, td {
	border: none;
	font-family: "微软雅黑","黑体","宋体";
	font-size: 14px;
	margin: 0px;
	padding: 0px;
}
fieldset,img,abbr,acronym {border: 0 none;}
</style>