<template>
	<div class="overlay">
		<div class="confirm-window"></div>
	</div>
</template>

<script>
	export default {
		mounted () {
			let o = document.querySelector('.overlay');
			o.style.width = document.body.clientWidth + 'px'
			o.style.height = document.body.clientHeight + 'px'
		}
	}
</script>

<style>
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(100, 100, 100, .3);
	}
</style>