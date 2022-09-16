<template>
  <div>
    <form
      @submit.prevent="submit"
      name="homepage"
    >
      <input type="hidden" name="form-name" value="homepage">
      <div class="inline">
        <div class="input-wrap" :class="{ 'input-wrap--error': $v.form.name.$error }">
          <input id="name" name="name" type="text" v-model.trim="$v.form.name.$model">
          <label for="name">Your name</label>
          <span class="error" v-if="$v.form.name.$error">Please enter your name</span>
        </div>
        <div class="input-wrap" :class="{ 'input-wrap--error': $v.form.organisation.$error }">
          <input id="organisation" name="organisation" type="text" v-model.trim="$v.form.organisation.$model">
          <label for="organisation">Your organisation</label>
          <span class="error" v-if="$v.form.organisation.$error">Please enter your organisation</span>
        </div>
      </div>
      <div class="input-wrap" :class="{ 'input-wrap--error': $v.form.email.$error }">
        <input id="email" name="email" type="email" v-model.trim="$v.form.email.$model">
        <label for="email">Your email address</label>
        <span class="error" v-if="$v.form.email.$error">Please enter your email address</span>
      </div>
      <div class="input-wrap" :class="{ 'input-wrap--error': $v.form.description.$error }">
        <textarea id="description" name="description" v-model.trim="$v.form.description.$model"></textarea>
        <label for="description">How can I help you?</label>
        <span class="error" v-if="$v.form.description.$error">Let me know how I can help!</span>
      </div>
      <div class="input-wrap submit-wrap">
        <MButton class="submit" label="Submit" />
      </div>
    </form>

    <TransitionSlideToggle>
      <div class="feedback" v-show="submitted">
        Thanks! Your message has been sent.<br>I'll be in touch soon.
      </div>
    </TransitionSlideToggle>
  </div>

</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        name: '',
        organisation: '',
        email: '',
        description: ''
      },
      submitted: false,
    }
  },
  validations: {
    form: {
      name: { required },
      organisation: { required },
      email: { required, email },
      description: { required }
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    submit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$axios.post('/',
          this.encode({
            'form-name': 'homepage',
            ...this.form
          }),
          {
            header: { 'Content-Type': 'application/x-www-form-urlencoded' }
          }
        );
        this.submitted = true;
      }
    }
  }
};
</script>

<style scoped lang="scss">
  .input-wrap {
    margin-bottom: 20px;
    position: relative;
  }

  .inline {
    display: flex;
    justify-content: space-between;
    margin: 0 -10px;

    @media (max-width: $smallBreakpoint) {
      flex-direction: column;
      justify-content: flex-start;
    }
  }

  .inline > div {
    flex: 1;
    margin: 0 10px 20px;
  }

  .input-wrap > label {
    position: absolute;
    top: 1px;
    left: 1px;
    padding-top: 9px;
    padding-left: 10px;
    width: calc(100% - 2px);
    background-color: white;
    border-radius: 5px 5px 0 0;
    pointer-events: none;
  }

  .input-wrap--error {
    > label {
      color: var(--error-color);
    }

    input[type=text],
    input[type=email],
    textarea {
      border-color: var(--error-color);
    }

    input[type=text]:focus,
    input[type=email]:focus,
    textarea:focus {
      //outline-color: var(--error-color);
    }

    span.error {
      color: var(--error-color);
    }
  }

  .input-wrap > input,
  .input-wrap > textarea {
    width: 100%;
  }

  input[type=text],
  input[type=email],
  textarea {
    padding: 34px 10px 10px;
    font-size: 18px;
    border: 1px solid #000;
    border-radius: 5px;
  }

  input[type=text]:focus + label,
  input[type=email]:focus + label,
  textarea:focus + label {
    color: var(--primary-color);
  }

  input[type=text]:focus,
  input[type=email]:focus,
  textarea:focus {
    outline: 1px solid var(--primary-color);
  }

  textarea {
    resize: vertical;
    min-height: 200px;
  }

  .submit-wrap {
    display: flex;
    justify-content: center;
  }

  .submit.btn {
    width: 260px;
    max-width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .feedback {
    text-align: center;
    font-size: 18px;
  }
</style>
