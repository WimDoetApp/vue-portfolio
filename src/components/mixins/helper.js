export default {
  methods: {
    closeNav() {
      var sideNav = document.getElementById("mySidenav")
      var burger = document.getElementById('burger')
      var main = document.getElementById('main')

      sideNav.style.width = "0";
      sideNav.classList.remove('is-active')
      burger.classList.remove('is-active')
      main.classList.remove('is-active')
    }
  },
  data: function () {
    return {
      useTemplate: true,
    }
  }
};
