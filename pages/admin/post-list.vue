<template>
  <div>
    <el-table
      :data="tableData"
      height="960"
      stripe
    >
      <el-table-column
        prop="cid"
        label="序号"
        width="80"
        align="center"
      />
      <el-table-column
        label="缩略图"
        prop="title"
        width="100"
      >
        <template #default="scope">
          <el-image
            :src="scope.row.fields.thumb"
            fit="cover"
            style="width: 180px; height: 60px"
          />
        </template>
      </el-table-column>
      <el-table-column
        label="标签"
        prop="title"
        width="160"
      >
        <template #default="scope">
          <el-tag
            v-for="item of scope.row.tag"
            :key="item.tid"
            class="margin-xs"
          >
            {{ item.name }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        width="320"
      >
        <template #default="scope">
          <el-link @click="handleEdit(scope.$index, scope.row)">
            <strong>{{ scope.row.title }}</strong>
          </el-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="desc"
        label="摘要"
        width="600"
      >
        <template #default="scope">
          {{ scope.row.fields.desc }}
        </template>
      </el-table-column>
      <el-table-column
        prop="created"
        label="创建时间"
        width="110"
      >
        <template #default="scope">
          <span>{{ formatTime(scope.row.created * 1000, 'YYYY/MM/DD HH:mm:ss') }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="modified"
        label="更新时间"
        width="110"
      >
        <template #default="scope">
          <span>{{ formatTime(scope.row.modified * 1000, 'YYYY/MM/DD HH:mm:ss') }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:currentPage="pagination.index"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pagination.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script lang="ts" setup>
import { formatTime } from '~/utils/time';

definePageMeta({
  keepalive: true,
});
</script>
<script lang="ts">
import { defineComponent } from 'vue';
import PostApi from '~/api/PostApi';

export default defineComponent({
  data() {
    return {
      tableData: [],
      pagination: {
        total: 0,
        index: 0,
        size: 10,
      },
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    addPost() {
      this.$router.push('/admin/editor');
    },
    loadData() {
      PostApi.getList({
        current: this.pagination.index,
        size: this.pagination.size,
      }).then((res: any) => {
        this.tableData = res.records;
        this.tableData.forEach((item) => {
          if (item.fields instanceof Array) {
            const fields = {};
            item.fields.forEach((i) => {
              fields[i.name] = i.value;
            });
            item.fields = fields;
          }
        });
        this.pagination.index = res.current;
        this.pagination.total = res.total;
      });
    },
    handleSizeChange(val) {
      this.pagination.size = val;
      this.loadData();
    },
    handleCurrentChange(val) {
      this.pagination.index = val;
      this.loadData();
    },
    handleEdit(index, row) {
      this.$router.push(`/admin/editor?cid=${row.cid}`);
    },
  },
});
</script>
<style lang="less" scoped>
</style>
