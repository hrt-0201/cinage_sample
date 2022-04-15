<template>
  <div class="page is-error">
    <h1>{{ error.statusCode }}</h1>
    <h2>エラーが発生しました</h2>
  </div>
</template>

<script>
export default {
  props: {
    error: { type: Object, default () { return {} } }
  }
}
</script>