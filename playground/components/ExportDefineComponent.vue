<template>
  <div>
    <h1>SetupExportComponent</h1>
    <pre>{{ myProp }}</pre>
    <pre>{{ setupMyProp }}</pre>
  </div>
</template>

<!-- this works!
<script setup lang="ts">
const props = defineProps<{ myProp: string }>()
const setupMyProp = 'X' + props.myProp
</script>
Following script is a valid Vue 3 way to define a component
-->

<script lang="ts">
export default defineComponent({
  props: {
    myProp: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return {
      setupMyProp: 'X' + props.myProp
    }
  }
})
</script>