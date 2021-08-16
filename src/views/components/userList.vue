<template>
	<div class='wrap'>
		<div class="list_module" v-for="(item, index) in navUserList" :key="index">
			 <span class="module_title">{{item.title}}</span>
			 <div class="module_list" v-for="(user, j) in item.children" :key="j" @click="showUserInfo(user)">
				 <img src="" alt="" class="portrait">
				 <span class="name">{{user.name}}</span>
			 </div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
@Component({
	components: {}
})
export default class UserList extends Vue {
	@Prop() navUserList?: Array<any>
	constructor() {
		super();
	}
	created() {
	}
	@Emit('showUserInfo')
	showUserInfo(user: any) {
		console.log(user)
	}
}
</script>

<style lang="scss" scoped>
	.wrap {
		.list_module{
			.module_title{
				display: block;
				margin: 10px 0;
				padding-left: 10px;
			}
			.module_list{
				display: flex;
				align-items: center;
				height: 45px;
				background: #fff;
				border-bottom: 1px solid #e8e8e8;
				padding: 0 10px;
				&:last-child{
					border-bottom: none;
				}
				.portrait{
					width: 25px;
					height: 25px;
					margin-right: 10px;
				}
				.name{
					font-size: 15px;
				}
			}
		}
	}
</style>
