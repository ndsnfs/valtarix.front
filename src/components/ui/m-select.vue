<template>
	<div class="m-select">
		<div class="m-select__search">
			<span class="search__dropdown-ico">
				<i class="fa"
					:class="dropdownIcoClass">
				</i>
			</span>
			<input type="text"
					v-model="value"
					:placeholder="placeholder"
					@focus="onFocus()"
					@blur="onBlur()"
					@keyup.prevent="onKeyup($event)">
			<input type="hidden"
					:name="name"
					:value="value">
		</div>
		<div v-if="isVisibleDropdown"
				class="m-select__dropdown-list">
			<ul>
				<li v-for="(item, idx) in computedList">
					<span @mousedown="selectItem(item.name)"
							:class="idx == activeItemIdx ? 'm-select__item_active' : ''">
						{{ item.name }}
					</span>
				</li>
				<li class="m-select__not-found-info" v-if="computedList.length == 0"><i>ничего не найдено</i></li>
			</ul>
		</div>
	</div>
</template>

<script>
	
	export default {
		props: [
			'list',
			'name',
			'placeholder'
		],
		data() {
			return {
				value: '',
				isVisibleDropdown: false,
				activeItemIdx: -1
			}
		},
		computed: {
			dropdownIcoClass() {
				return this.isVisibleDropdown ? 'fa-sort-asc' : 'fa-sort-desc' 
			},
			computedList() {
				return this.list.filter(val => val.name.indexOf(this.value) != -1)
			}
		},
		methods: {
			onFocus() {
				this.dropdownShow()
			},
			onBlur() {
				this.dropdownHide()
			},
			selectItem(name) {
				this.value = name
			},
			onKeyup($event) {
				if ($event.keyCode === 40) {
					if ((1 + this.activeItemIdx) < this.computedList.length) this.activeItemIdx++
				}
				if ($event.keyCode === 38) {
					if (this.activeItemIdx > 0) this.activeItemIdx--
				}
				if ($event.keyCode === 13 && this.activeItemIdx !== -1) {
					this.value = this.computedList[this.activeItemIdx].name
					$event.target.blur()
				}
			},
			dropdownHide() {
				this.isVisibleDropdown = false
				this.activeItemIdx = -1
			},
			dropdownShow() {
				this.isVisibleDropdown = true
			}
		}
	}

</script>

<style scoped>
	
	.m-select {
		width: 100%;
		height: 26px;
		position: relative;
	}
	.m-select__search {
		position: relative;
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		border: 1px solid #d6d7db;
		overflow: hidden;
		border-radius: 2px;
	}
	.m-select__search>input {
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		height: 100%;
		margin-right: 30px;
		padding-left: 10px;
		box-sizing: border-box;
		border: none;
	}
	.m-select__search>input:focus {
		outline: none;
	}
	.search__dropdown-ico {
		position: absolute;
		top: 0;
		right: 0;
		width: 26px;
		height: 100%;
		line-height: 20px;
		text-align: center;
		color: #929397;
		cursor: pointer;
		z-index: 1001;
		background-color: #fff;
		border-left: 1px solid #f6f6f6;
	}
	.m-select__dropdown-list {
		position: absolute;
		width: 100%;
		max-height: 200px;
		box-sizing: border-box;
		padding-top: 6px;
		background-color: #fff;
		border: 1px solid #d6d7db;
		border-top: none;
		z-index: 1002;
		overflow-y: auto;
	}
	.m-select__dropdown-list>ul>li>span {
		display: inline-block;
		width: 100%;
		height: 100%;
		padding: 6px 10px;
		box-sizing: border-box;
		color: #555;
		transition: background-color .2s;
	}
	.m-select__dropdown-list>ul>li>span:hover {
		background-color: #EDEDF0;
		cursor: pointer;
	}
	.m-select__item_active {
		background-color: #EDEDF0;
	}
	.fa-sort-asc {
		display: inline-block;
		margin-top : 8px;
	}
	.m-select__not-found-info {
		padding: 6px 10px;
		color: #555;
		font-size: 12px;
	}

</style>