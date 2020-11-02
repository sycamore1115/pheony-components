<template>
  <div class="timeSelectDemo">
    标签一：
    <TimeSelect :date='time.date' :startTime='time.startTime' :endTime='time.endTime' @savetime='saveTime(arguments)'>
      <el-time-select style="width: 160px" v-model="time.startTime" placeholder="开始时间" value-format="HH:mm:ss"></el-time-select>
      <el-time-select style="width: 160px" v-model="time.endTime" placeholder="结束时间" value-format="HH:mm:ss"></el-time-select>
    </TimeSelect>
    标签二：
    <TimeSelect :date='time.date' :startTime='time.startTime' :endTime='time.endTime' @savetime='saveTime(arguments)'>
      
    </TimeSelect>
  </div>
</template>

<script>
import TimeSelect from '../components/TimeSelect'
export default {
  name:'timeSelectDemo',
  components:{TimeSelect},
  data(){
    return {
      time:{
        date:'2020-11-15',
        startTime:'08:00',
        endTime:'15:00'
      },
      timeintervals:[
        
      ]
    }
  },
  methods:{
    saveTime(time){
      console.log(time[0]+" "+time[1]+"~"+time[2])
    }
  }
}
</script>

<style lang="scss" scoped>

</style>