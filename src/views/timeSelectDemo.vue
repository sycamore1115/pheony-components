<template>
  <div class="timeSelectDemo">
    标签一：
    <TimeSelect :date='time.date' :startTime='time.startTime' :endTime='time.endTime' @savetime='saveTime(arguments)'>
      <el-time-select style="width: 160px" v-model="time.startTime" placeholder="开始时间" value-format="HH:mm:ss"></el-time-select>
      <el-time-select style="width: 160px" v-model="time.endTime" placeholder="结束时间" value-format="HH:mm:ss"></el-time-select>
    </TimeSelect>
    标签二：
    <TimeSelect :date='time.date' :startTime='time.startTime' :endTime='time.endTime' @savetime='saveTime(arguments)' :checkedTime='checkedTime'>
      <el-radio-group v-model="checkedTime" class="radioTime">
        <el-radio v-for="(item, index) in timeIntervals" :key="index" :label="item" style="width: 155px" class="singleTime">
            {{ item.startTime+'~'+item.endTime}}
        </el-radio>
      </el-radio-group>
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
      timeIntervals:[
        {startTime:'10:30', endTime:'11:40'},{startTime:'11:50', endTime:'13:00'},{startTime:'13:10', endTime:'14:20'},
        {startTime:'14:30', endTime:'15:40'},{startTime:'15:50', endTime:'17:00'},
      ],
      checkedTime:''
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
  .radioTime{
    margin: 0 10px 0 20px;
  }
.singleTime{
    border-radius: 4px;
    padding: 10px;
    border: 1px solid #DDDDDD;
    margin-bottom: 5px;
  }
</style>