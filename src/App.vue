<template>
  <el-container>
    <el-header>
      <nav>
        <router-link to="/" class="logo">
          直播平台
        </router-link>
        <div class="nav-links">
          <el-input
            v-model="searchQuery"
            placeholder="搜索直播"
          >
            <template #prefix>
              <el-icon><Search /></el-icon>
            </template>
          </el-input>
          <el-button type="primary">开始直播</el-button>
        </div>
      </nav>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const searchQuery = ref('')
</script>

<style scoped lang="scss">
.el-container {
  min-height: 100vh;
}

.el-header {
  background: #fff;
  border-bottom: 1px solid #eee;
  padding: 0 20px;

  nav {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      font-size: 20px;
      font-weight: bold;
      color: #409EFF;
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      gap: 20px;
      align-items: center;

      .el-input {
        width: 300px;
      }
    }
  }
}

.el-main {
  background: #f5f5f5;
  padding: 0;
}
</style>