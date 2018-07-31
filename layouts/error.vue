<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page Not Found</h1>
    <h1 v-else>Error</h1>
  </div>
</template>
<script>
export default {
  props: ['error']
}
</script>
