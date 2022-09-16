<template>
  <section id="about" class="container">
    <div class="about-me">
      <div class="about-me-top">
        <div class="about-me-left">
          <img alt="Photograph of Michael Thomas" src="~/assets/me.png" />
        </div>
        <div class="about-me-right">
          <h1>
            I’m a <span class="highlight">technologist</span> and
            <span class="highlight">full-stack developer</span> with 10 years
            experience,
            specialised in working with charities and <span class="highlight">
          not-for-profit organisations</span>.
          </h1>
          <MButton label="Read more about me" @click.native="readMore = !readMore"/>
        </div>
      </div>
      <div class="about-me-more">
        <TransitionSlideToggle>
          <div class="more-about-me" v-show="readMore">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum eros vel faucibus commodo. Cras facilisis libero quis felis imperdiet, a tristique ante lacinia. Morbi egestas, orci ac dapibus tincidunt, nunc sem posuere tellus, ut tristique nibh dui id erat. Nam nulla est, euismod ac arcu vel, feugiat feugiat quam. Vestibulum eu aliquam massa. Ut a lacus dictum, tincidunt nunc nec, porta velit. Sed lobortis turpis nec dolor dapibus, eu pellentesque purus mattis. In nisl neque, molestie ac sollicitudin convallis, pulvinar in lacus. Mauris feugiat turpis purus, ac luctus metus sodales porttitor. Quisque quis orci quis diam sollicitudin dapibus vel et metus. Vivamus et ultrices sem, ac fringilla dolor. Donec consequat ante nec odio blandit feugiat. Nullam eget vulputate enim. Duis quam diam, finibus vel erat eget, eleifend dignissim risus. Ut placerat ligula in nunc dignissim, ac blandit erat malesuada. Aliquam interdum convallis nibh, commodo sollicitudin purus finibus nec.</p>

            <p>In vel gravida nibh. Duis rutrum consectetur nulla sed ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer eu nisi hendrerit felis aliquam aliquam. Fusce aliquam at eros sollicitudin vehicula. In dignissim quam felis. In tincidunt dui sit amet imperdiet tempor.</p>

            <p>Proin in orci auctor massa varius varius. Aenean sit amet vestibulum nunc. Proin volutpat gravida metus vitae volutpat. Donec scelerisque arcu ac odio cursus accumsan. Etiam maximus accumsan nunc non varius. Praesent ornare sem lacus, at condimentum dui pulvinar at. Proin maximus libero erat, sit amet viverra libero molestie nec. Etiam orci sem, lobortis eget laoreet ut, elementum ut nulla. Nulla felis est, consequat vitae diam vel, euismod pellentesque sapien. Etiam in purus arcu. Nam quis bibendum tellus. Sed leo nunc, elementum ut varius vitae, ultrices non justo. Aenean venenatis, tortor eget ultricies mollis, ante eros lobortis ligula, eu luctus elit risus sed diam. In egestas dui leo, sit amet consectetur urna euismod sit amet. Fusce nec felis risus.</p>
          </div>
        </TransitionSlideToggle>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      readMore: false
    }
  }
};
</script>

<style scoped lang="scss">
@import '../assets/mixins';

.about-me {
  padding: 60px 0;
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
  margin-top: 20px;
  font-size: 18px;
}
</style>
