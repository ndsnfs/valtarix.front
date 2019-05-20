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
                <li>
                  <a href="">
                    <span>Мои друзья</span>
                    <span class="cbadge cbadge_xs">
                      +2
                    </span>
                  </a>
                </li>
                <li class="active-item">
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
            <ul class="dialogs">
              <li>
                <div class="dialog-wrap">
                  <div class="dialog padding-flank clearfix">
                    <div class="dialog__photo">
                    </div>
                    <div class="dialog__body">
                      <div class="dialog__header">
                        <span class="talker">Нестерюк Юлия</span>
                        <span class="dialog__close">x</span>
                      </div>
                       <div class="last-msg">
                         Предлагаемый стиль - это форма clearfix с обратной совместимостью. Я нашел...
                       </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="dialog-wrap">
                  <div class="dialog padding-flank clearfix">
                    <div class="dialog__photo">
                    </div>
                    <div class="dialog__body">
                      <div class="dialog__header">
                        <span class="talker">Плотников Василий</span>
                        <span class="dialog__close">x</span>
                      </div>
                       <div class="last-msg">
                         Это текст-"рыба", часто используемый в 
                       </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="dialog-wrap">
                  <div class="dialog padding-flank clearfix">
                    <div class="dialog__photo">
                    </div>
                    <div class="dialog__body">
                      <div class="dialog__header">
                        <span class="talker">Курганов Леха</span>
                        <span class="dialog__close">x</span>
                      </div>
                       <div class="last-msg">
                         Это текст-"рыба", часто используемый в 
                       </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
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
