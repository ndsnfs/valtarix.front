<template>
	<textarea rows="1"
				@keydown="kdown($event)"
				:value="text"
				placeholder="Напишите сообщение ..." />
</template>

<script>
	
	export default {
		props: [
			'text'
		],
		data() {
			return {
				el: null
			}
		},
		methods: {
			kdown(e) {

				var el = this.el = this.el == null ? e.target : this.el
				
				if (e.ctrlKey && e.keyCode == 13) {
					el.value += "\n"
				}
				
				if (e.keyCode == 8) {
					el.value = el.value.trim("\n")
				}

				this.resize()
				this.$emit('input', el.value)

				if (!e.ctrlKey && e.keyCode == 13) {
					e.preventDefault()
					if(this.text == '') {
						return
					}
					this.triggerEnter(el.value)
					return
				}
			},
			triggerEnter(val) {
				this.$emit('onEnter')
			},
			resize() {
				var context = this
				setTimeout(function () {
					context.el.style.cssText = 'height:auto; padding:0';
					context.el.style.cssText = 'height:' + context.el.scrollHeight + 'px';
				},0);
			}
		}
	}

</script>

<style scope>
	
	textarea {
		display:block;
		width: 100%;
		padding: 8px 10px;
		border: 1px solid #d6d7db;
		outline: none;
		border-radius: 4px;
		overflow: hidden;
		resize:none;
	}

</style>