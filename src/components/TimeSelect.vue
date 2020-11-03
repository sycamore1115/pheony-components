<template>
  <div class="timeSelect">
    <el-input prefix-icon="el-icon-time" style="width: 240px" @focus.prevent="dialogTableVisible = true" :value="myFullTime"></el-input>
    <el-dialog title="时间选择器" :visible.sync="dialogTableVisible"  class="time-dialog" style="width:1000px">
      <div class="date">
       <el-calendar v-model="myDate" style="width:460px"> 
         <template #dateCell="{data}">
           <span :class="data.isSelected ? 'is-selected' : ''">
           {{ data.day.split('-').slice(2).join('-') }} {{ data.isSelected ? '✔️' : ''}}
         </span>
         </template>
       </el-calendar>
       </div>
       <div class="time">
         <slot></slot>
       </div>
       <div class="save">
         <el-button type="primary" @click="saveTime">保存</el-button>
       </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name:'timeSelect',
  props: [
    'date','startTime','endTime','checkedTime'
  ],
  data(){
    return{
      dialogTableVisible:false,
      myDate:this.date,
      myStartTime:this.startTime,
      myEndTime:this.endTime,
      myFullTime: this.date?this.date+" "+this.startTime+"~"+this.endTime:'',
    }
  },
  watch: {
    date(val) {
      this.myDate = val 
      this.myFullTime = this.date+" "+this.startTime+"~"+this.endTime
    },
    startTime(val) {
      this.myStartTime = val 
    },
    endTime(val) {
      this.myEndTime = val 
    },
  },
  methods:{
    saveTime(){
      this.dialogTableVisible = false
      let dateFormat = this.$moment(this.myDate).format('YYYY-MM-DD')
      if(this.checkedTime){
        this.myStartTime =this.checkedTime.startTime
        this.myEndTime = this.checkedTime.endTime
        this.myFullTime = dateFormat+" "+this.myStartTime+'~'+this.myEndTime
      }else{
        this.myFullTime = dateFormat+" "+this.myStartTime+"~"+this.myEndTime
      }
      this.$emit('savetime',dateFormat,this.myStartTime,this.myEndTime)
    }
  }
}
</script>

<style lang="scss" scoped>
.time-dialog{
  margin: auto;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .el-button{
    margin: 10px auto;
    width: 100%;
  }
  .time{
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 10px;
  }
  .is-selected {
    color: teal;
  }
}
</style>