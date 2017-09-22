<template>
	<el-col :span="20" offset="1">
		 <el-row>
		 	 <el-col :span="20" :offset="1" style="margin-top:20px">
         <el-input 
         placeholder="请输入录像名" 
         v-model="searchName" 
         icon="search"
         style="width:250px;margin-bottom:20px;"
         :on-icon-click="searchIconClick">      
         </el-input>

		 	 	 <!-- <el-tabs type="border-card" id="tabs">
             
         </el-tabs> -->
         <br>
         <h3 style="display:inline-block">请选择库:</h3>
         <ul v-for="item in tableData">
            <li style="float:left;margin-right:8px;list-style:none">
            <el-button @click="selectVedio(item.libraryName)" >{{item.libraryName}}</el-button></li>
         </ul>
		 	 </el-col>
		 </el-row>
	</el-col>
</template>

<script>
  export default{
  	created(){
  		this.createdTabs();
  	},
    data(){
      return {
        tableData:[],//tab数据
        searchName:'',//要搜索的录像名
      }
    },

    methods:{
      createdTabs(){
      	this.$axios.get('/api/vedioTabs')
      	    .then((res) => {
              var str = "";
            //   var tab = document.getElementById('tabs');
      	    	// console.log(res);
            //   for(var i=0;i<res.data.length;i++){
            //     str += '<el-tab-pane label="' + res.data[i].libraryName +'"></el-tab-pane>';
            //   }
            //   tab.append(str);
              this.tableData = res.data;
      	    })
      	    .catch((err) => {
      	    	console.log(err);
      	    })
      },

      selectVedio(libraryName){
          this.$axios.post("/api/vedioList",{
            libraryName:libraryName
          })
          .then((res) => {
             
          })
          .catch((err) => {
            console.log(err);
            this.$message({
              type:'error',
              message:"服务器错误"
            })
          })
      }
    }
  }
</script>