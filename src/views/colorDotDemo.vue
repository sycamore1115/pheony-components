<template>
  <div class="colorDotDemo">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="active" label="活跃度">
        <template slot-scope="scope">
          <color-dot :color="color(scope.row.active)"></color-dot>
          <span>{{ scope.row.active }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>  

<script>
import ColorDot from "../components/ColorDot";
export default {
  name: "colorDotDemo",
  components: { ColorDot },
  data() {
    return {
      tableData: [
        {
          name: "11",
          address: "上海",
          active: "活跃",
        },
        {
          name: "22",
          address: "北京",
          active: "冷淡",
        },
        {
          name: "33",
          address: "杭州",
          active: "一般",
        },
        {
          name: "44",
          address: "南京",
          active: "活跃",
        },
      ],
    };
  },
  computed: {
    color(){
      return active=>{
        switch(active){
          case '活跃': return 'green'; 
          case '一般': return 'yellow';
          case '冷淡': return 'red';
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>