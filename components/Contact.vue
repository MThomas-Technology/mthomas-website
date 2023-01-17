<template>
  <section id="contact">
    <div class="container">
      <div class="form-container">
        <h3 class="section-title">Get in touch</h3>
        <p class="lead">
          Fill out the form below, or send an email to
          <a
            href="mailto:michael@mthomas.tech?subject=Website enquiry"
            target="_blank"
          >
            michael@mthomas.tech
          </a>
        </p>
        <div class="form">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped  lang="scss">
section {
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
    font-size: 28px;
    margin-bottom: 20px;
  }
}

.form-container {
  width: 630px;
  max-width: 100%;
  margin: 0 auto;
}

.lead {
  text-align: center;
  font-size: 24px;
  @media (max-width: $smallBreakpoint) {
    font-size: 18px;
  }
}

.form {
  padding-top: 20px;
}
</style>
