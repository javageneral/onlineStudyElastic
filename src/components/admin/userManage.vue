<template>
	<el-col :span="20" offset="1">
		 <el-row>
		 	 <el-col :span="20" :offset="1" style="margin-top:20px">
         <el-input 
         placeholder="请输入用户姓名" 
         v-model="searchName" 
         icon="search"
         style="width:250px;margin-bottom:20px;"
         :on-icon-click="searchIconClick">      
         </el-input>

		 	 	 <el-table :data = 'tableData' border>
            <el-table-column label="用户名">
            	<template scope="scope">
            		<div>{{ scope.row.name }}</div>
            	</template>
            </el-table-column>

             <el-table-column label="账号（手机号）">
            	<template scope="scope">
            		<div>{{ scope.row.phonenum }}</div>
            	</template>
            </el-table-column>

            <el-table-column label="操作">
            	 <template scope="scope">
            	 	<el-button type="success" size="small" @click="forbidden()">停用</el-button>
            	 </template>
            </el-table-column>
		 	 	 </el-table>
		 	 </el-col>
		 </el-row>
	</el-col>
</template>

<script>
  export default{
  	created(){
  		this.createdTable();
  	},
    data(){
      return {
        tableData:[],//表格数据
        searchName:'',//要搜索的用户姓名
      }
    },

    methods:{
      createdTable(){
      	this.$axios.get('/api/userManage')
      	    .then((res) => {
      	    	console.log(res);
      	    	this.tableData = res.data;
      	    })
      	    .catch((err) => {
      	    	console.log(err);
      	    })
      }
    }
  }
</script>