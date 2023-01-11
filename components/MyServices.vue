<template>
  <section id="services">
    <div class="container">
      <h3 class="section-title">My Services</h3>
      <ServicesTabs />
    </div>
  </section>
</template>

<script>
export default {
  name: "MyServices"
};
</script>

<style scoped lang="scss">
 section {
   background-color: var(--primary-color);
   padding-top: 40px;
   padding-bottom: 40px;

   @media (max-width: $mediumBreakpoint) {
     padding-top: 30px;
     padding-bottom: 30px;
   }
 }

 .section-title {
   text-align: center;
   font-size: 36px;
   margin-bottom: 30px;

   @media (max-width: $smallBreakpoint) {
     font-size: 24px;
   }
 }
</style>
