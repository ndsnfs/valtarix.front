<template>
	<div class="content">
		<div class="content__main">
			<ui-search :ui-search-placeholder="uiSeachPlaceholder"
						@input="onSearch($event)">
			</ui-search>
			<ul class="dialogs">
			  <li v-for="dialog in computedDialogs">
			    <div class="dialog-wrap">
			      <div class="dialog padding-flank clearfix">
			        <div class="dialog__photo">
			        	<img :src="'src/assets/img/thumbs/' + dialog.img">
			        </div>
			        <div class="dialog__body">
			          <div class="dialog__header">
			            <span class="talker">{{ dialog.talker }}</span>
			            <span class="dialog__close">
			            	<i class="fa fa-times" aria-hidden="true"></i>
			            </span>
			          </div>
			           <div class="last-msg">
			             {{ dialog.lastMsg }}
			           </div>
			        </div>
			      </div>
			    </div>
			  </li>
			</ul>
		</div>
	</div>
</template>

<script>

	import UiSearch from './UiSearch';

	export default {
		data() {
			return {
				uiSeachValue: '',
				uiSeachPlaceholder: 'начните вводить имя собеседника',
				dialogs: [
					{
						talker: 'Нестерюк Юлия',
						lastMsg: 'Предлагаемый с',
						img: 'F4_7w1KnqKs.jpg'
					},
					{
						talker: 'Плотников Василий',
						lastMsg: 'Это текст-"рыба", часто используемый в',
						img: 'KpRbPsweqcc.jpg'
					},
					{
						talker: 'Курганов Леха',
						lastMsg: 'Это текст-"рыба", часто используемый в',
						img: 'IGQ3g3J19vg.jpg'
					}
				]
			}
		},
		computed: {
			computedDialogs() {

				return this.dialogs.filter(v => v.talker.indexOf(this.uiSeachValue) !== -1)
			}
		},
		components: {
			'ui-search': UiSearch
		},
		methods: {
			onSearch(e) {
				this.uiSeachValue = e.target.value
			}
		}
	}

</script>