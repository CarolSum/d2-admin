export default {
  methods: {
    handleMenuSelect (index, indexPath) {
      if (/^d2-menu-empty-\d+$/.test(index)) {
        this.$message('功能正在开发')
      } else {
        console.log(index)
        this.$router.push(index)
      }
    }
  }
}
