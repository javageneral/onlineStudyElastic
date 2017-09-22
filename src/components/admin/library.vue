<template>
	<el-col :span="20" offset="1">
		 <el-row>
		 	 <el-col :span="20" :offset="1" style="margin-top:20px">
         <el-input 
         placeholder="请输入 库名" 
         v-model="searchName" 
         icon="search"
         style="width:250px;margin-bottom:20px;"
         :on-icon-click="searchIconClick">      
         </el-input>

		 	 	 <el-table :data = 'tableData' border>
            <el-table-column label="库名">
            	<template scope="scope">
            		<div style="display:inline-block">{{ scope.row.libraryName }}</div>
                <i class="el-icon-edit editBtn" @click="editLibrary(scope.row)" style="margin-right:8px;float:right"></i>
            	</template>
            </el-table-column>

            <el-table-column label="操作">
            	 <template scope="scope">
            	 	<el-button type="success" size="small" @click="deleteLibrary(scope.row)">删除</el-button>
            	 </template>
            </el-table-column>
		 	 	 </el-table>

         <el-button style="margin-top:20px;" type="success" @click="addLibrary">新增库</el-button>
		 	 </el-col>
		 </el-row>

     <el-dialog :visible.sync="newAddModalOpen">
       <div style="text-align:center;">
         <h3>新增库</h3>
       </div>
       <br>
      <el-form label-position="right" label-width="100px">
        <el-form-item label="名称:">
          <el-input v-model="newItem" style="width:80%"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" style="text-aligin:center;">
        <el-button @click="newAddModalOpen = false">取 消</el-button>
        <el-button type="primary" @click="addNew">确 定</el-button>
      </div>
    </el-dialog>

     <el-dialog :visible.sync="editModalOpen">
        <div style="text-align:center;">
           <h3>修改库名</h3>
        </div>
        <br>
        <el-form label-position="right" label-width="100px">
            <el-form-item label="名称">
                <el-input placeholder="请输入库名" v-model="newItemName" style="80%"></el-input>
            </el-form-item>
        </el-form>
        <div solt="footer" class="footer" style="text-align:center;">
            <el-button @click="editModalOpen=false">取消</el-button>
            <el-button type="primary" @click="updateLibrary">确 定</el-button>
        </div>
    </el-dialog>

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
        searchName:'',//要搜索的库名
        newAddModalOpen:false,//控制新增库模态框
        newItem:'',//新增库名
        editModalOpen:false,//修改库模态框
        newItemName:'',//修改库名
        oldName:'',//保存修改前的库名
      }
    },

    methods:{
      createdTable(){
      	this.$axios.get('/api/library')
      	    .then((res) => {
      	    	console.log(res);
      	    	this.tableData = res.data;
      	    })
      	    .catch((err) => {
      	    	console.log(err);
      	    })
      },

      addLibrary(){
        this.newAddModalOpen = true;
      },

      editLibrary(row){
        this.editModalOpen = true;
        this.newItemName = row.libraryName;
        this.oldName = row.libraryName;
      },

      addNew(){
        this.$axios.post('/api/addLibrary',{
          libraryName:this.newItem
        })
        .then((res) => {
            console.log(res);
            if (res.data == 1) {
               this.$message({
                  type:'success',
                  message:'添加成功'
               })
            }else{
               this.$message({
                  type:'error',
                  message:'添加失败'
               })
            }
        })
        .catch((err) => {
           console.log(err);
           this.$message({
               type:'error',
               message:'服务器错误！'
            })
        })

        this.newAddModalOpen = false;
        this.createdTable();
      },
      //修改库
      updateLibrary(){
        this.$axios.post('/api/updateLibrary',{
          libraryName:this.newItemName,
          oldName:this.oldName

        })
        .then((res) => {
            console.log(res);
            if (res.data == 1) {
               this.$message({
                  type:'success',
                  message:'修改成功'
               })
            }else{
               this.$message({
                  type:'error',
                  message:'修改失败'
               })
            }
        })
        .catch((err) => {
           console.log(err);
           this.$message({
               type:'error',
               message:'服务器错误！'
            })
        })

        this.editModalOpen = false;
        this.createdTable();
      },

      //删除库
      deleteLibrary(row){
         this.$axios.post('/api/deleteLibrary',{
           libraryName:row.libraryName
         })
         .then((res) => {
             console.log(res);
             if (res.data == 1) {
                this.$message({
                   type:'success',
                   message:'删除成功'
                })
             }else{
                this.$message({
                   type:'error',
                   message:'删除失败'
                })
             }
         })
         .catch((err) => {
            console.log(err);
            this.$message({
                type:'error',
                message:'服务器错误！'
             })
         })

         this.createdTable();
      }
    },
  }
</script>