
<template>
    <view v-for="(item, index) in card.children" :key="index">
        <mp-html :content="item.title.text"></mp-html>
    </view>
</template>

<script setup lang="ts">
import mpHtml from 'mp-html/dist/uni-app/components/mp-html/mp-html.vue'

const props = defineProps({
    card: {
        type: Object,
        required: true,
    },
})
</script>

<style></style>