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
			<div class="padding-flank">
				<ul class="messages">
					<li class="message clearfix">
						<div class="message__photo">
							<img src="src/assets/img/thumbs/IGQ3g3J19vg.jpg">
						</div>
						<div class="message__body">
							<div class="message__header">
								<router-link to="/asasas" tag="a">Денис Крейцберг</router-link>
								<span class="message__time">18:00</span>
							</div>
							<div class="message__group">
								<div class="message__text">
									Внедряя маршрутизатор, мы сможем получить к нему доступ через this.$router, а также к текущему маршруту через this.$route внутри любого компонента
								</div>
								<div class="message__text">
									через this.$route внутри любого компонента
								</div>
							</div>
						</div>
					</li>
					<li class="message clearfix">
						<div class="message__photo">
							<img src="src/assets/img/thumbs/IGQ3g3J19vg.jpg">
						</div>
						<div class="message__body">
							<div class="message__header">
								<router-link to="/asasas" tag="a">Денис Нестерюк</router-link>
								<span class="message__time">18:00</span>
							</div>
							<div class="message__group">
								<div class="message__text">
									Внедряя маршрутизатор, мы сможем получить к нему доступ через this.$router, а также к текущему маршруту через this.$route внутри любого компонента
								</div>
								<div class="message__text">
									через this.$route внутри любого компонента
								</div>
								<div class="message__text">
								тестовая выгрузка
								</div>
							</div>
						</div>
					</li>
					<li class="message clearfix">
						<div class="message__photo">
							<img src="src/assets/img/thumbs/IGQ3g3J19vg.jpg">
						</div>
						<div class="message__body">
							<div class="message__header">
								<router-link to="/asasas" tag="a">Денис Крейцберг</router-link>
								<span class="message__time">18:00</span>
							</div>
							<div class="message__group">
								<div class="message__text">
									Внедряя маршрутизатор, мы сможем получить к нему доступ через this.$router, а также к текущему маршруту через this.$route внутри любого компонента
								</div>
								<div class="message__text">
									через this.$route внутри любого компонента
								</div>
							</div>
						</div>
					</li>
					<li class="message clearfix">
						<div class="message__photo">
							<img src="src/assets/img/thumbs/IGQ3g3J19vg.jpg">
						</div>
						<div class="message__body">
							<div class="message__header">
								<router-link to="/asasas" tag="a">Денис Нестерюк</router-link>
								<span class="message__time">18:00</span>
							</div>
							<div class="message__group">
								<div class="message__text">
									Внедряя маршрутизатор, мы сможем получить к нему доступ через this.$router, а также к текущему маршруту через this.$route внутри любого компонента
								</div>
								<div class="message__text">
									через this.$route внутри любого компонента
								</div>
								<div class="message__text">
								тестовая выгрузка
								</div>
							</div>
						</div>
					</li>
					<li class="message clearfix">
						<div class="message__photo">
							<img src="src/assets/img/thumbs/IGQ3g3J19vg.jpg">
						</div>
						<div class="message__body">
							<div class="message__header">
								<router-link to="/asasas" tag="a">Денис Нестерюк</router-link>
								<span class="message__time">18:00</span>
							</div>
							<div class="message__group">
								<div class="message__text">
									Внедряя маршрутизатор, мы сможем получить к нему доступ через this.$router, а также к текущему маршруту через this.$route внутри любого компонента
								</div>
								<div class="message__text">
									через this.$route внутри любого компонента
								</div>
								<div class="message__text">
								тестовая выгрузка
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="chat-input">
				<div class="chat-input__wrap">
					<div class="chat-input__ins chat-input__ins_l">
					</div>
					<div class="chat-input__ins chat-input__ins_c">
						<textarea rows="1" @keydown="kdown($event)" v-model="msg"/>
					</div>
					<div class="chat-input__ins chat-input__ins_r">
						<button class="v-btn-ico"
								@click="sbmit()">
							<i class="fa fa-2 fa-paper-plane"
								aria-hidden="true"
								style="
									font-size: 20px
								"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				msg: '',
				initialHeight: null
			}
		},
		methods: {
			back() {
				window.history.back()
			},
			kdown(e) {

				var el = e.target
				
				if (e.ctrlKey && e.keyCode == 13) {
					el.value += "\n"
				}
				
				if (e.keyCode == 8) {
					el.value = el.value.trim("\n")
				}
				
				setTimeout(function(){
					el.style.cssText = 'height:auto; padding:0';
					el.style.cssText = 'height:' + el.scrollHeight + 'px';
				},0);
				
				if (!e.ctrlKey && e.keyCode == 13) {
					e.preventDefault()
					if(this.msg == '') {
						return
					}
					this.sbmit(el.value)
					this.msg = ''
					return
				}
			},
			sbmit(msg) {
				console.log(msg)
			}
		}
	}

</script>

<style scop>

	.back-block {
		position: fixed;
		width: 578px;
		background-color: #fff;
	}
	.chat-input {
		position: fixed;
		top: auto;
		bottom: 0;
		width: 580px;
		border-bottom: 70px solid #EDEEF0;
		background-color: #EDEEF0;
	}
	.chat-input__wrap {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 580px;
		padding: 16px 0;
		margin-left: -1px;
		background-color: #fff;
		border: 1px solid #e7e8ec;
		box-sizing: border-box;
		border-radius: 0 0 5px 5px;
	}
	.chat-input__ins_l {
		width: 20%;
	}
	.chat-input__ins_c {
		width: 60%;
		padding-right: 22px;
	}
	.chat-input__ins_r {
		width: 20%;
	}
	.chat-input__ins_c>textarea {
		display:block;
		width: 100%;
		padding: 8px 10px;
		border: 1px solid #d6d7db;
		outline: none;
		border-radius: 4px;
		overflow: hidden;
		resize:none;
	}
	.chat-input__ins_r>button {
		margin-left: 16px;
		margin-top: -4px;
	}

</style>