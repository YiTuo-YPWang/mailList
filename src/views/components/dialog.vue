<template>
  <van-popup v-model="showDialog" style="text-align: center" @close="closeDialog">
    <van-icon name="arrow-up" size="25" class="up" @click="onStep('up')"/>
    <div class="popuo_content">
      <div class="popup_header">
        <img src="" alt="" class="header_img">
        <div class="userInfo">
          <div class="name">{{selectedUser.name}}</div>
          <span class="info">{{selectedUser.followers}} followers</span>
          <span class="info">{{selectedUser.stars}} stars</span>
        </div>
        <div class="contactInfo">
          <span class="label">Email</span> <span>{{selectedUser.email}}</span>
        </div>
        <div class="contactInfo">
          <span class="label">Bio</span>
        </div>
      </div>
    </div>
    <van-icon name="arrow-down" size="25" class="down" @click="onStep('down')"/>
  </van-popup>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
@Component({
	components: {}
})
export default class Dialog extends Vue {
	@Prop() showDialog?: boolean
	@Prop() selectedUser?: any
	constructor() {
		super();
	}
	created() {
	}
  @Emit('onStep')
	onStep(key: string) {
		console.log(key)
	}
  @Emit('closeDialog')
  closeDialog() {

  }
}
</script>

<style lang="scss" scoped>
.popuo_content{
  width: 80vw;
  height: 25vh;
  background: #fff;
  padding: 15px;
  text-align: left;
  .popup_header{
    width: 100%;
    height: 80px;
    .header_img{
      width: 80px;
      height: 80px;
    }
    .userInfo{
      display: inline-block;
      height: 80px;
      vertical-align: top;
      padding: 10px;
      .name{
        margin-bottom: 25px;
      }
      .info{
        margin-right: 15px;
        &:last-child{
          margin-right: 0;
        }
      }
    }
    .label{
      display: inline-block;
      width: 80px;
    }
    .contactInfo{
      width: 100%;
      height: 50px;
      line-height: 50px;
    }
  }
}
</style>
