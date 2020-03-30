<template>
  <div >
        <div class="left">
          <left-menu  class="left-menu"/>
        </div>
        <div class="right">
          <app-main />
        </div>
  </div>
</template>

<script>
  import { NavBar, AppMain, LeftMenu } from './components'
    export default {
        name: "Layout",
        components: {
          NavBar,
          LeftMenu,
          AppMain
        },
      data() {
        return {
          infos:'gzt',
        }
      },
      methods:{
        handleInfo(data){
          console.log({prop:data})
          this.infos = data;
        },
        change(e){
          this.$forceUpdate()
        }
      }
    }
</script>

<style scoped>

  /*main-width{
    padding-left: 0px !important;
    padding-top: 7px !important;
    margin-left: -10px;
  }*/
  .left{
    width: 201px;
    float: left;
  }
  .left-menu{
    margin: 0 ;
  }
  .right{
    width: calc(100% - 201px);;
    float: right;
  }

</style>
