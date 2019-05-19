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
          <div class="sidebar">
            <nav class="sidebar-menu">
              <ul>
                <li>
                  <a href="">
                    <span>Моя страница</span>
                  </a>
                </li>
                <li class="active-item">
                  <a href="">
                    <span>Мои друзья</span>
                    <span class="cbadge cbadge_xs">
                      +2
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span>Мои сообщения</span>
                    <span class="cbadge cbadge_xs">
                      +1
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span>Мои настройки</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="content">
            обычный текст
          </div>
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
