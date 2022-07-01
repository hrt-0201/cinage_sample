<template>
<client-only>
    <div class="sidebar-container">
      <sidebar-menu :menu="menu" :width="'60px'" :widthCollapsed="'60px'" />
    </div>
</client-only>
</template>

<script>
export default {
  name: 'Slidevar001',
  data: () => {
    return {
      menu: [
        {
          header: true,
          title: "Main Navigation",
          hiddenOnCollapse: true,
          hidden: true,
        },
        { href: "/ad", title: "", icon: "" },
        { href: "/ad", title: "", icon: "" },
        { href: "/ad", title: "", icon: "" },
        { href: "/ad", title: "", icon: "" },
        { href: "/ad", title: "", icon: "" },
        { href: "/ad", title: "", icon: "" },
        { href: "/ad", title: "", icon: "" },
        {
          href: "/",
          title: "",
          icon: "fas fa-tablet-alt fa-2x",
        },
        {
          href: "/store/v2",
          title: "",
          icon: "fas fa-beer fa-2x",
        },
        {
          href: "/store/v3",
          title: "",
          icon: "fas fa-glass-cheers fa-2x",
        },
        {
          href: "/store/map",
          title: "",
          icon: "far fa-map fa-2x",
        },
        {
          href: "/news",
          title: "",
          icon: "far fa-newspaper fa-2x",
        },
        {
          href: "/todo",
          title: "",
          icon: "fa fa-user fa-2x",
        },
        {
          href: "/store",
          title: "",
          icon: "fa fa-chart-area fa-2x",
        },
      ],
    };
  },
}
</script>

<style scoped>
.sidebar-container {
  margin: 0 auto;
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
}
</style>