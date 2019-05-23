<template>
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
</template>

<script>

	export default {
		data() {
			return {
				dialogs: [
					{
						talker: 'Нестерюк Юлия',
						lastMsg: 'Предлагаемый стиль - это форма clearfix с обратной совместимостью. Я нашел...',
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