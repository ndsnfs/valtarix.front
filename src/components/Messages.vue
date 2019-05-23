<template>
	<div class="content">
		<div class="content__main">
			<div class="ui-search">
				<div class="padding-flank">
					<i class="fa fa-search" aria-hidden="true"></i>
					<input type="text"
						name="search[friends]"
						class="ui-search__input"
						placeholder="начните вводить имя собеседника"
						autocomplete="off">
				</div>
			</div>
			<ul class="dialogs">
			  <li v-for="dialog in dialogs">
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
		<div class="content__rsidebar">
			<div class="rsidebar"></div>
		</div>
	</div>
</template>

<script>

	export default {
		data() {
			return {
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
		components: {
		}
	}

</script>