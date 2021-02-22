<template>
    <div class="line" v-for="line in lines" v-bind:key="line[0]">
      <p>{{ line[0] }}</p><input class="input" type="text" v-model="loginpair.email">
    </div>
</template>

<script>
export default {
    name: 'FormArray',
    props: {
        lines: Array
    }
}
</script>