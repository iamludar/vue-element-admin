<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="淘宝ID" v-model="listQuery.adzoneid" clearable> 
      </el-input>
      <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="订单编号" v-model="listQuery.order_no" clearable> 
      </el-input>
      <el-input @keyup.enter.native="handleFilter" style="width: 350px;" class="filter-item" placeholder="商品名称" v-model="listQuery.title" clearable> 
      </el-input>
      <el-select clearable class="filter-item" v-model="listQuery.status" placeholder="订单状态">
        <el-option v-for="item in statusOptions" :key="item" :label="item" :value="item">
        </el-option>
      </el-select>
      <el-select clearable class="filter-item" v-model="listQuery.type" placeholder="购物平台">
        <el-option v-for="item in typeOptions" :key="item" :label="item" :value="item">
        </el-option>
      </el-select>
      <el-button class="filter-item" type="primary" v-waves icon="el-icon-search" @click="handleFilter">搜索</el-button>
      <!--<el-checkbox class="filter-item" style='margin-left:15px;' @change='tableKey=tableKey+1' v-model="showAuditor">显示无效用户</el-checkbox>-->
    </div>

    <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="order-title">
            <el-form-item label="所属店铺">
              <span>{{ props.row.title }}</span>
            </el-form-item>
          </el-form>
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="所属店铺">
              <span>{{ props.row.field_shop }}</span>
            </el-form-item>
            <el-form-item label="商品编号">
              <span>{{ props.row.field_product_id }}</span>
            </el-form-item>
            <el-form-item label="旺旺名称">
              <span>{{ props.row.field_seller_wangwang }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.field_category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column align="center" label="状态" width="70">
        <template slot-scope="scope">
          <el-tag size="mini" :type="scope.row.tk_status | typeFilter">{{scope.row.tk_status | typeTextFilter}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="商品图片" width="120">
        <template slot-scope="scope">
          <img :src="scope.row.item_img | imageFilter" @click="go(scope.row.item_link)"/>
        </template>
      </el-table-column>
      <el-table-column align="left" label="商品信息" min-width="300">
        <template slot-scope="scope">
          <div class="item_title">{{scope.row.item_title}}</div>
          <div class="seller_shop_title">{{scope.row.seller_shop_title}}</div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="订单编号" width="180">
        <template slot-scope="scope">
          <div>{{scope.row.trade_parent_id}}</div>
          <div>{{scope.row.trade_id}}</div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="时间节点" width="240">
        <template slot-scope="scope">
          <div>点击时间：{{scope.row.click_time}}</div>
          <div>订单创建：{{scope.row.tk_create_time}}</div>
          <div v-if="scope.row.tb_paid_time !=='' && scope.row.tb_paid_time !== null">付款时间：{{scope.row.tb_paid_time}}</div>
          <div v-if="scope.row.tk_earning_time !=='' && scope.row.tk_earning_time !== null">商家返佣：{{scope.row.tk_earning_time}}</div>
        </template>
      </el-table-column>
      <el-table-column align="left" label="付款金额" width="100">
        <template slot-scope="scope">
           <span>{{scope.row.alipay_total_price}}</span>
        </template>
      </el-table-column>
      <el-table-column align="left" label="佣金金额" width="100">
        <template slot-scope="scope">
          <div>付:{{scope.row.pub_share_pre_fee}}</div>
          <div>结:{{scope.row.pub_share_fee}}</div>
          <div>佣:{{scope.row.total_commission_fee + scope.row.subsidy_fee}}</div>
        </template>
      </el-table-column>
      <el-table-column align="left" label="提成" width="100">
        <template slot-scope="scope">
           <span>{{scope.row.tk_total_rate }}%</span>
        </template>
      </el-table-column>
      <el-table-column align="left" label="技术服务费" width="100">
        <template slot-scope="scope">
           <span>{{scope.row.alimama_share_fee}}</span>
        </template>
      </el-table-column>
<!--       <el-table-column align="left" label="OPENID" width="250px">
        <template slot-scope="scope">
          <span>{{scope.row.openid}}</span>
        </template>
      </el-table-column> -->
      <el-table-column align="center" label="操作" min-width="120" class-name="small-padding">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>


    <div v-show="!listLoading" class="pagination-container">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.pageStart"
        :page-sizes="[10,20,30, 50]" :page-size="listQuery.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form :rules="rules" ref="dataForm" :model="temp" label-position="left" label-width="70px" style='width: 400px; margin-left:50px;'>
        <el-form-item label="时间" prop="timestamp">
          <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="标题" prop="title">
          <el-input v-model="temp.title"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select class="filter-item" v-model="temp.status" placeholder="请选择">
            <el-option v-for="item in  statusOptions" :key="item" :label="item" :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="重要性">
          <el-rate style="margin-top:8px;" v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max='3'></el-rate>
        </el-form-item>
        <el-form-item label="点评">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="temp.remark">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">确 定</el-button>
        <el-button v-else type="primary" @click="updateData">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="阅读数统计" :visible.sync="dialogPvVisible">
      <el-table :data="pvData" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="key" label="渠道"> </el-table-column>
        <el-table-column prop="pv" label="pv"> </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { orderList } from '@/api/order'
import waves from '@/directive/waves' // 水波纹指令
import { parseTime } from '@/utils'

export default {
  name: 'complexTable',
  directives: {
    waves
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        pageStart: 1,
        pageSize: 10
      },
      totalQuery: {},
      typeOptions: ['聚划算', '天猫', '淘宝'],
      statusOptions: ['已返利', '订单结算', '订单付款', '订单失效'],
      sortOptions: [{ label: '按ID升序列', key: '+id' }, { label: '按ID降序', key: '-id' }],
      showAuditor: false,
      temp: {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        type: '',
        status: 'published'
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: '编辑',
        create: '创建'
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        type: [{ required: true, message: 'type is required', trigger: 'change' }],
        timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
        title: [{ required: true, message: 'title is required', trigger: 'blur' }]
      },
      downloadLoading: false
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    typeFilter(status) {
      const statusMap = {
        '13': 'info',
        '12': '',
        '3': 'success'
      }
      return statusMap[status]
    },
    typeTextFilter(status) {
      const statusMap = {
        '13': '失效',
        '12': '付款',
        '3': '结算'
      }
      return statusMap[status]
    },
    imageFilter(url) {
      return url + '_60x60.jpg'
    }
  },
  created() {
    console.log('初始化')
    this.getList()
  },
  methods: {
    go(e) {
      window.open(e, '_blank')
    },
    getList() {
      this.listLoading = true

      orderList(this.listQuery).then(response => {
        this.list = response.data.data
        this.total = response.data.count
        this.listLoading = false
      })
    },
    handleFilter() {
      this.listQuery.pageStart = 1
      this.getList()
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.getList()
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作成功',
        type: 'success'
      })
      row.status = status
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 'published',
        type: ''
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    // createData() {
    //   this.$refs['dataForm'].validate((valid) => {
    //     if (valid) {
    //       this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
    //       this.temp.author = '原创作者'
    //       createArticle(this.temp).then(() => {
    //         this.list.unshift(this.temp)
    //         this.dialogFormVisible = false
    //         this.$notify({
    //           title: '成功',
    //           message: '创建成功',
    //           type: 'success',
    //           duration: 2000
    //         })
    //       })
    //     }
    //   })
    // },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          // updateMember(tempData).then(() => {
          //   for (const v of this.list) {
          //     if (v.id === this.temp.id) {
          //       const index = this.list.indexOf(v)
          //       this.list.splice(index, 1, this.temp)
          //       break
          //     }
          //   }
          //   this.dialogFormVisible = false
          //   this.$notify({
          //     title: '成功',
          //     message: '更新成功',
          //     type: 'success',
          //     duration: 2000
          //   })
          // })
        }
      })
    },
    handleDelete(row) {
      this.$notify({
        title: '成功',
        message: '删除成功',
        type: 'success',
        duration: 2000
      })
      const index = this.list.indexOf(row)
      this.list.splice(index, 1)
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
</script>
<style scoped>
.cell p{
  -webkit-margin-before: 0em;
  -webkit-margin-after: 0em;
}
.avatar{
  width:22px;
  height: 22px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.order-title .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
}
.seller_shop_title,.item_title{
  font-size: 0.8em;
}
</style>
