<template>
  <div class="page-content">
    <Title>分类 - {{ config.TITLE }}</Title>
    <el-tag type="info" v-for="category in data" :key="category.mid" class="category-list">
			<el-link type="info" :href="`/category/${category.mid}/1`">{{category.name}}</el-link>
		</el-tag>
  </div>
</template>

<script lang="ts" setup>
import CategoryApi from '~/api/CategoryApi';
const config = useRuntimeConfig();
const { data } = await useAsyncData('category', () => CategoryApi.getCategory());

</script>

<style scoped>
.category-list {
	margin: 10px;
}
</style>
