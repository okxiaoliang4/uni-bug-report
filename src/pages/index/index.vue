<template>
    <view class="content">
    </view>
</template>

<script setup lang="ts">
import { apis } from '../../apis';
import { useAuthStore } from '../../store/auth';
import { useGlobalStore } from '../../store/global';

useAuthStore()
useGlobalStore()

apis()
</script>

<style>
</style>
