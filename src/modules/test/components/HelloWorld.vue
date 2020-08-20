<template>
  <h1>HI THERE SWEETHEART!</h1>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TestService from "../../../api/test/test-service";

@Component
export default class HelloWorld extends Vue {
  private async mounted() {
    try {
      const res = await TestService.get(2);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  }
}
</script>
