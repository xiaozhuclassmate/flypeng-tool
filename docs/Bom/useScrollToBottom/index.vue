<template>
	<div class="scroll-container">
		<h5>Scroll Container (See Console)</h5>
		<section ref="scrollElement">
			<p v-for="item in 100">{{ item }}</p>
		</section>
	</div>
</template>

<script lang="ts" setup>
import { useScrollToBottom, TouchBottomClass } from '@flypeng/browser'
import { onMounted, onUnmounted, ref } from 'vue'

const scrollElement = ref<Element | null>(null)
let touchBottomInstance: TouchBottomClass

onMounted(() => {
	if(scrollElement.value) {
		touchBottomInstance = useScrollToBottom(scrollElement.value, () => {
			console.log('Container scroll to bottom and execute callback');
		})
	}
})

onUnmounted(() => {
	touchBottomInstance.stop()
})
</script>


<style scoped>
.scroll-container > h5 {
	display: inline-block;
	position: sticky;
	left: 50%;
	transform: translateX(-50%);
	top: 10px;
	color: var(--component-preview-primary-color);
	font-size: 16px;
	font-weight: 600;
}

.scroll-container > section {
	height: 400px;
	border: 1px solid var(--component-preview-border);
	border-radius: 4px;
	overflow-x: hidden;
	overflow-y: scroll;
	text-align: center;
	margin-top: 10px;
}
</style>
