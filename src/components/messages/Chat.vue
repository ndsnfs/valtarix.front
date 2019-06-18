<template>
	<div class="content">
		<div class="content__main">
			<div class="back-block">
				<button class="back-block_btn m-btn_no"
						@click="back()">
					<i class="fa fa-chevron-left" aria-hidden="true"></i>
					<span>назад</span>
				</button>
			</div>
			<ul class="messages padding-flank">
				<li class="message message__talker clearfix">
					<div class="message__photo">
						<img src="src/assets/img/thumbs/IGQ3g3J19vg.jpg">
					</div>
					<div class="message__body_talk">
						<div class="message__header">
							<router-link to="/asasas" tag="a">Денис Крейцберг</router-link>
							<span class="message__time">18:00</span>
						</div>
						<div class="message__text">
							Внедряя маршрутизатор, мы сможем получить к нему доступ через this.$router, а также к текущему маршруту через this.$route внутри любого компонента
						</div>
					</div>
				</li>
				<li class="message message__my">
					<div>asas</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
	export default {
		methods: {
			back() {
				window.history.back()
			}
		}
	}

</script>