<template>
	<div class="content">
		<div class="content__main">
			<ui-search :ui-search-placeholder="uiSeachPlaceholder"
						@input="onSearch($event)"/>
			<router-view :friends="friendsList"/>
		</div>
		<div class="content__rsidebar">
			<div class="rsidebar">
				<right-nav :items="friendTypes"></right-nav>	
				<m-select :list="cities"
							name="city"
							placeholder="город"
							style="margin-bottom: 15px">
				</m-select>
				<m-select :list="school"
							name="sho"
							placeholder="школа">
				</m-select>
			</div>
		</div>
	</div>	
</template>

<script>
	
	import mSelect from '../ui/m-select';
	import UiSearch from '../UiSearch';
	import rightNav from '../rightNav';

	export default {
		data() {
			return {
				uiSeachValue: '',
				uiSeachPlaceholder: 'начните вводить имя друга',
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
				],
				school: [
					{
						name: 'Специализированная детско-юношеская школа олимпийского резерва №10'
					},
					{
						name: 'Экспериментальная музыкально-хоровая школа-десятилетка (ЭМХШД №1)'
					},
					{
						name: 'Школа искусств №1'
					},
					{
						name: 'Музыкальная школа №1 им. Шостаковича'
					}
				],
				friendTypes: [
					{
						path: '/friends',
						text: 'Мои друзья'
					},
					{
						path: '/friends/search',
						text: 'Поиск друзей'
					}
				],
				friends: [
					{
						userId: 101,
						imgPath: 'src/assets/img/thumbs/IGQ3g3J19vg.jpg',
						fflf: 'Нестерюк Денис',
					},
					{
						userId: 100,
						imgPath: 'src/assets/img/thumbs/KpRbPsweqcc.jpg',
						fflf: 'Паничкина Юлия',
					},
				]
			}
		},
		computed: {
			friendsList() {
				return this.friends.filter(val => val.fflf.indexOf(this.uiSeachValue) != -1)
			},
		},
		methods: {
			onSearch(e) {
				console.log(22)
				this.uiSeachValue = e.target.value
			}
		},
		components: {
			'ui-search': UiSearch,
			'm-select': mSelect,
			'right-nav': rightNav
		}
	}

</script>