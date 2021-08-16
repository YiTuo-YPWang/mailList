<template>
  <div class="quick_nav">
    <span :class="[letter === chooseLetter ? 'active nav_item' : 'nav_item']" @click="jump(letter, index)" v-for="(letter, index) in navs" :key="index">{{letter}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { Toast } from 'vant';
@Component({
	components: {}
})
export default class Nav extends Vue {
  @Prop() chooseLetter?: string
  @Prop() navs?: Array<string>

	constructor() {
		super();
	}
	created() {
    console.log(this.navs)
	}
  @Emit('jump')
	jump(letter: string, index: number) {
    console.log(letter, index)
  }
}
</script>

<style lang="scss" scoped>
  .active{
    border-radius: 50%;
    background: #677ce2;
    color: #fff;
  }
	.quick_nav{
			position: fixed;
			top: 100px;
			right: 10px;
			span{
				display: block;
				width: 25px;
				height: 25px;
				text-align: center;
				line-height: 25px;
				margin-bottom: 5px;
				&:last-child{
					margin-bottom: 0;
				}
			}
		}
</style>
