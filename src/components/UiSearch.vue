<template>
	<div class="ui-search">
		<div class="padding-flank">
			<i class="fa fa-search" aria-hidden="true"></i>
			<input type="text"
				v-model="value"
				@input="onInput($event)"
				name="search[friends]"
				class="ui-search__input"
				:placeholder="uiSearchPlaceholder"
				autocomplete="off">
		</div>
	</div>
</template>

<script>
	
	export default {
		props: ['uiSearchPlaceholder'],
		data() {
			return {
				value: ''
			}
		},
		methods: {
			onInput(e) {
				this.$emit('input', e)
			}
		}
	}

</script>