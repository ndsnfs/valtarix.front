<template>
	<div class="content">
		<div class="content__main">
			<ui-search :ui-search-placeholder="uiSeachPlaceholder">
			</ui-search>
		</div>
		<div class="content__rsidebar">
			<div class="rsidebar">
				<m-select :list="cities"
							name="city"
							placeholder="город"
							style="margin-bottom: 15px">
				</m-select>
				<m-select :list="cities"
							name="sho"
							placeholder="школа">
				</m-select>
			</div>
		</div>
	</div>	
</template>

<script>
	
	import mSelect from './ui/m-select';
	import UiSearch from './UiSearch';

	export default {
		data() {
			return {
				uiSeachPlaceholder: 'начните вводить имя друга',
				item: '',
				cities: [
					{
						name: 'Москва'
					},
					{
						name: 'Казань'
					},
					{
						name: 'Самара'
					}
				]
			}
		},
		components: {
			'ui-search': UiSearch,
			'm-select': mSelect,
		}
	}

</script>