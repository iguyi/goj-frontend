<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-footer class="header">
        <a-space>
          <img class="logo" src="../assets/logo.png" />
          <div style="font-size: 48px">GOJ</div>
        </a-space>
      </a-layout-footer>
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
  text-align: center;
  background: url("../assets/background-login.png");
}

#userLayout .logo {
  width: 64px;
  height: 64px;
}

#userLayout .header {
  margin-top: 32px;
  margin-bottom: 16px;
}

#userLayout .content {
  margin-bottom: 16px;
  padding: 20px;
}

#userLayout .footer {
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
