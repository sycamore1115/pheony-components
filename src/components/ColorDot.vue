<template>
  <span class="dot" 
        :class="[color=='green'?dotGreen:'',color=='red'?dotRed:'',color=='yellow'?dotYellow:'',color=='grey'?dotGrey:'',color=='blue'?dotBlue:'']"
        >
  </span>
</template>

<script>
export default {
  name:"ColorDot",
  props:{
    color:String
  },
  data(){
    return{
      dotGreen:"dot-green",
      dotRed:"dot-red",
      dotYellow:"dot-yellow",
      dotGrey:"dot-grey",
      dotBlue:"dot-blue"
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dot {
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 4px;
  margin: 0 5px 3px 0;
}
.dot-green {
  background-color: #4cd964;
}
.dot-yellow {
  background-color: #f7b500;
}
.dot-red {
  background-color: #e02020;
}
.dot-grey {
  background-color: #CECECE;
}
.dot-blue {
  background-color: #108EE9;
}

</style>