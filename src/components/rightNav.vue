<template>
	<div class="right_naw">
		<ul>
			<li v-for="(item, i) in computedItems">
                  <router-link
                  			:to="item.path"
                  			tag="a"
                  			active-class="right_naw_active"
                  			exact>
                    <span>{{ item.text }}</span>
                  </router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	
	export default {
		props: [
			'items'
		],
		data() {
			return {

			}
		},
		computed: {
			computedItems() {
				return this.items
			}
		}
	}

</script>