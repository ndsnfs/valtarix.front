<template>
  <div id="app">
      <div class="center">
        <div class="header">
          <span class="logo">
            <span class="logo__bg">В</span>
            <span class="text">altarix</span>
          </span>
          <a href="" class="link exit">
            <span class="link__text link__text_white">выход</span>
          </a>
        </div>
        <div class="body">
          <div class="sidebar padding-flank">
            <nav class="sidebar-menu">
              <ul>
                <li>
                  <router-link to="/" tag="a" active-class="active-item" exact>
                    <span>Моя страница</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/friends" tag="a" active-class="active-item">
                    <span>Мои друзья</span>
                    <span class="cbadge cbadge_xs">
                      +2
                    </span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/messages" tag="a" active-class="active-item">
                    <span>Мои сообщения</span>
                    <span class="cbadge cbadge_xs">
                      +1
                    </span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/settings" tag="a" active-class="active-item">
                    <span>Мои настройки</span>
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>
          <router-view></router-view> 
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
