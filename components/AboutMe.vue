<template>
  <section id="about" class="container">
    <div class="about-me">
      <div class="about-me-top">
        <div class="about-me-left">
          <img alt="Photograph of Michael Thomas" src="~/assets/me.png" />
        </div>
        <div class="about-me-right">
          <h1>
            I’m a <span class="highlight">consultant</span> and
            <span class="highlight">full-stack developer</span> with 10 years
            experience, specialised in working with charities and
            <span class="highlight"> not-for-profit organisations</span>.
          </h1>
          <MButton
            label="Read more about me"
            @click.native="readMore = !readMore"
          />
        </div>
      </div>
      <div class="about-me-more">
        <TransitionSlideToggle>
          <div class="more-about-me" v-show="readMore">
            <p>
              I've been working professionally as a Web Developer since 2012 and
              I first started working with charities and NGOs back in 2017 when,
              during the course of my contracting, I started working with
              <a href="https://forwardaction.uk" target="_blank"
                >Forward Action</a
              >. I worked there for the next 5 years until 2022, leading the
              technology team, collaborating directly with clients and digital
              strategists to deliver technology and campaigns that mobilised
              hundreds of thousands of supporters, raised millions of £s and
              drove real-world change.
            </p>
            <p>
              Over the years, I've developed a passion for using technology as a
              tool for driving positive real-world change and using my technical
              skills to help organisations achieve their mission.
            </p>
            <p>
              Now, in 2023, I have decided to return to freelancing, focusing on
              providing services to charities and NGOs, so that I can support a
              wider range of organisations for a wider range of applications.
              You can read more details about my work experience on my
              <a
                href="https://www.linkedin.com/in/michael-thomas-817a58108/"
                target="_blank"
                >LinkedIn</a
              >.
            </p>
          </div>
        </TransitionSlideToggle>
      </div>
      <div class="badges">
        <img
          src="/Technology-Partner.png"
          alt="Engaging Networks Technology partner badge"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return {
      readMore: false,
    }
  },
}
</script>

<style scoped lang="scss">
@import '../assets/mixins';

.about-me {
  padding: 60px 0 40px;
  width: 85%;
  margin: 0 auto;
  @media (max-width: $smallBreakpoint) {
    width: 100%;
    padding: 30px 0;
  }
}

.about-me-top {
  display: grid;
  grid-template-columns: 25% 75%;
  grid-auto-rows: auto;
  grid-column-gap: 60px;

  @media (max-width: $mediumBreakpoint) {
    column-gap: 30px;
  }

  @media (max-width: $smallBreakpoint) {
    grid-template-columns: 100%;
    column-gap: 0;
  }
}

.about-me-left img {
  @media (max-width: $smallBreakpoint) {
    margin: 0 auto 20px;
    width: 180px;
  }
}

.about-me-right h1 {
  font-family: var(--body-font);
  @include fluid-type(320px, 1050px, 20px, 36px);
  font-weight: normal;
  margin-bottom: 20px;
  @media (max-width: $smallBreakpoint) {
    text-align: center;
  }
}

.about-me-right .btn {
  @media (max-width: $smallBreakpoint) {
    display: block;
    margin: 0 auto;
  }
}

.highlight {
  font-weight: bold;
  color: var(--primary-color);
}

.more-about-me {
  margin-top: 50px;
  font-size: 18px;

  @media (max-width: $smallBreakpoint) {
    margin-top: 30px;
  }
}

.badges {
  display: flex;
  justify-content: flex-end;
  margin-top: 60px;

  @media (max-width: $smallBreakpoint) {
    justify-content: flex-start;
  }
}

.badges img {
  width: 90px;
}
</style>
