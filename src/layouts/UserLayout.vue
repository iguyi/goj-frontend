<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-footer class="header"> 用户布局</a-layout-footer>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">底部</a-layout-footer>
    </a-layout>
  </div>
</template>

<script></script>

<style>
#userLayout {
}

#userLayout .header {
  margin-bottom: 16px;
  box-shadow: #eee 1px 1px 5px;
}

#userLayout .content {
  margin-bottom: 16px;
  padding: 20px;
}

#userLayout .footer {
  background-color: #eeeeee;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
