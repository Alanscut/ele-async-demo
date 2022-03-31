<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="网址" prop="url">
      <el-input v-model="ruleForm.url"></el-input>
      <el-button @click="setLongUrl">设置长URL</el-button>
      <el-button @click="setShortUrl">设置短URL</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        url: ''
      },
      rules: {
        url: [
          { type: 'url', required: true, message: '请输入网址', trigger: 'change' }
        ]
      }
    };
  },
  methods: {
    setLongUrl() {
      // 如果继续增大字符串长度，验证时间会更长
      this.ruleForm.url = "//" + ":".repeat(99999) + "@"
    },
    setShortUrl() {
      this.ruleForm.url = "https://www.baidu.com"
    }
  }
}
</script>