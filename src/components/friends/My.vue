<template>
	<div class="peples">
		<ul>
			<li v-for="friend in friends">
				<div class="people-wrap">
					<div class="clearfix padding-flank">
				        <div class="people__photo">
				        	<img :src="friend.imgPath">
				        </div>
				        <div class="people__body">
							<div class="people__header">
								<span class="people__name">
									{{ friend.fflf }}
								</span>
							</div>
							<div class="people-action">
								<router-link class="people-action__msg"
												:to="'/messages/' + friend.userId"
												tag="a">
									<i class="fa fa-paper-plane" aria-hidden="true"></i>
									сообщение
								</router-link>
								<button class="m-btn_no people-action__del">
									убрать из друзей
								</button>
							</div>
				        </div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	
export default {
	props: [
		'friends'
	]
}

</script>