<template>
    <li>{{title}}<button @click="$emit('removeitem')">remove</button></li>
</template>
<script>
export default {
    props:['title']
}
</script>

