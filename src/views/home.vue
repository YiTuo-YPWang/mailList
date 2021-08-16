<template>
	<div class='wrap'>
		<van-Search class="search_input" show-action v-model="searchValue" placeholder="搜索" @search="onSearch" @cancel="onCancel"/>
		<UserList :navUserList="navUserList" @showUserInfo="showUserInfo"/>
		<Nav :chooseLetter="chooseLetter" :navs="navs" @jump="jump"/>
		<Dialog :showDialog="show" :selectedUser="selectedUser" @onStep="onStep" @closeDialog="closeDialog"/>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from './components/nav.vue'
import Dialog from './components/dialog.vue'
import UserList from './components/userList.vue'
import { Toast } from 'vant';
@Component({
	components: {
		Nav,
		Dialog,
		UserList
	}
})
export default class Home extends Vue {
	show: boolean = false
	searchValue: string = ''
	userList: Array<any> = [
		{id: 1, name: 'Ada', email: 'xxx@163.com', followers: 0, stars: 0},
		{id: 2, name: 'Bom', email: 'xxx@163.com', followers: 0, stars: 0},
		{id: 3, name: 'Aella', email: 'xxx@163.com', followers: 0, stars: 0},
		{id: 4, name: 'Bob', email: 'xxx@163.com', followers: 0, stars: 0},
		{id: 5, name: 'Cinda', email: 'xxx@163.com', followers: 0, stars: 0},
		{id: 6, name: 'Kom', email: 'xxx@163.com', followers: 0, stars: 0},
		{id: 7, name: 'Cliea', email: 'xxx@163.com', followers: 0, stars: 0},
		{id: 8, name: 'Xzhou', email: 'xxx@163.com', followers: 0, stars: 0},
		{id: 9, name: 'zhou', email: 'xxx@163.com', followers: 0, stars: 0},
		{id: 10, name: 'Ella', email: 'xxx@163.com', followers: 0, stars: 0},
		{id: 11, name: 'Final', email: 'xxx@163.com', followers: 0, stars: 0},
		{id: 12, name: 'Pop', email: 'xxx@163.com', followers: 0, stars: 0},
	]
	navs: Array<string> = []
	navUserList: Array<any> = []
	chooseLetter: String = ''
	searchUserList: Array<any> = []
	selectedUser: any = {}
	constructor() {
		super();
	}
	created() {
		this.getAllNavs(this.userList)
	}
	getAllNavs(userList: Array<any>) {
		this.userList = this.userList.sort((a, b) => { return a.name.charCodeAt(0) - b.name.charCodeAt(0) })
		let obj: any = {}
		this.navUserList = []
		this.navs = []
		userList.forEach((item) => {
			const firstLetter = item.name.substr(0, 1).toUpperCase()
			if(!obj[firstLetter]) {
				obj[firstLetter] = true
				this.navs.push(firstLetter)
				let userMoudle: any = {
					title: firstLetter,
					children: []
				}
				userMoudle.children.push(item)
				this.navUserList.push(userMoudle)
			} else {
				this.navUserList.forEach((user) => {
					if(user.title === firstLetter) {
						user.children.push(item)
					}
				})
			}
		})
		this.navs = this.navs.sort()
	}
	jump(letter: string, index: number) {
		this.chooseLetter = letter
		let jumpItem: any = document.querySelectorAll('.module_title')
    // 获取需要滚动的距离
    let total: number = jumpItem[index].offsetTop
    // Chrome
    document.body.scrollTop = total
		let distance = document.documentElement.scrollTop || document.body.scrollTop
		// 平滑滚动，时长500ms，每10ms一跳，共50跳
		let step = total / 50
		if (total > distance) {
			smoothDown()
		} else {
			let newTotal = distance - total
			step = newTotal / 50
			smoothUp()
		}
		function smoothDown () {
			if (distance < total) {
				distance += step
　　　　document.body.scrollTop = distance
				document.documentElement.scrollTop = distance
				setTimeout(smoothDown, 10)
			} else {
				document.body.scrollTop = total
				document.documentElement.scrollTop = total
			}
		}
		function smoothUp () {
			if (distance > total) {
				distance -= step
　　　　document.body.scrollTop = distance
				document.documentElement.scrollTop = distance
				setTimeout(smoothUp, 10)
			} else {
				document.body.scrollTop = total
				document.documentElement.scrollTop = total
			}
		} 
	}
	showUserInfo(user: any) {
		this.selectedUser = user
		this.show = true
	}
	closeDialog() {
		console.log(123)
		this.show = false
	}
	onSearch() {
		this.searchUserList = this.userList.filter((user) => user.name.includes(this.searchValue))
		// @ts-ignore
		let searchHistoryList = JSON.parse(localStorage.getItem('searchHistoryList'))
		const info = {
			time: new Date().getTime(),
			value: this.searchValue
		}
		searchHistoryList ? searchHistoryList.push(info) : searchHistoryList = [info]
		searchHistoryList = searchHistoryList.filter((item: any, index: number) => new Date().getTime() - item.time < 24 * 60 * 60 * 1000)
		localStorage.setItem('searchHistoryList', JSON.stringify(searchHistoryList))
		this.getAllNavs(this.searchUserList)
	}
	onCancel() {
		this.getAllNavs(this.userList)
	}
	onStep(key: string) {
		const index = this.userList.findIndex((item) => item.id === this.selectedUser.id)
		if(key === 'up' && index === 0) {
			Toast('这是第一名好友')
		} else if (key === 'down' && index === this.userList.length - 1) {
			Toast('这是最后一名好友')
		} else {
			this.selectedUser = key === 'up' ? this.userList[index - 1] : this.userList[index + 1]
		}
	}
}
</script>

<style lang="scss" scoped>
	.wrap {
		min-height: 100vh;
		background: #f6f6f6;
		.search_input{
			border-bottom: 1px solid #e8e8e8;
		}
	}
</style>
