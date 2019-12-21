<template>
<div class="mai">
  <div class="block">
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="入住时间"
      format=" MM - dd "
       class="a">
    </el-date-picker>
  </div>
  <div class="block">
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="退房时间"
      format=" MM - dd "
       class="a">
    </el-date-picker>
  </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        value1: '',
        value2: '',
        times:1
      };
    },
    methods:{
      selc(){
        try{
          this.times=this.value2.getDate()-this.value1.getDate();
         if(this.times>1){
          this.$emit("change",this.times)
         }else{
           this.times=1
          this.$emit("change",this.times)
         }
        }catch(err){
          console.log(err)
        }
        
      }
    },
    watch:{
      value1(){
        if(this.value2!==""){
          this.selc()
        }
      },
      value2(){
        if(this.value1!==""){
          this.selc()
        }
      }
    },
    computed:{
      time(){
        
      }
    }
  };
</script>
<style lang="scss" scoped>
.mai{
  display: flex;
  // div{width: 50%}
}

/deep/.block{
  width:45%;
  .a{width:100%;
  }

}
/deep/.el-input--suffix .el-input__inner{
  padding-right: 0px;
}

</style>