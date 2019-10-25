<template>
    <div class="login" :class="{'login--white' : !nightMode}">
        <LangChanger class="lang-changer--absolute"></LangChanger>
          <Alert v-show="registrationComplete">
              <slot>
                  {{$t("alertRegistration")}}
              </slot>
          </Alert>
          <Alert v-show="logoutComplete">
              <slot>
                   {{$t("alertLogout")}}
              </slot>
          </Alert>
      <Container class="login__container">
       
            <slot>
                
                <Logo class="login__logo logo--big"></Logo>
                <Form class="login__form">
                    <slot>
                        <div class="form__group">
                            <font-awesome-icon class="form__icon" icon="user" />
                            <input type="text" class="form__input" v-model="user.username" :placeholder='$t("userPlaceholder")' required >
                        </div>
                        <div class="form__group">
                            <font-awesome-icon class="form__icon" icon="lock" />
                            <input type="password" class="form__input" v-model="user.password" :placeholder='$t("passwordPlaceholder")' required >
                            <FormError class="login__form-error" v-show="loginFail">
                                <slot>
                                    {{$t("loginFormError")}}
                                </slot>
                            </FormError>
                        </div>
                        <router-link @click.native="login" class="login__form-btn btn btn--wide" tag="button" to="/login"> {{$t("logIn")}} </router-link>
                        <div class="form__bottom">
                            <span class="form__bottom-text">
                            {{$t("registerText")}}
                                <router-link @click.native="clearInputs" to="/register" class="form__bottom-link">{{$t("register")}}</router-link>
                            </span>
                        </div>
                    </slot>
                </Form>
            </slot>
        </Container>
        <Footer></Footer>
       </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import Logo from '@/components/Logo.vue';
import Form from '@/components/Form.vue';
import Button from '@/components/Button.vue';
import Container from '@/components/Container.vue';
import Footer from '@/components/Footer.vue';
import Alert from '@/components/Alert.vue';
import FormError from '@/components/FormError.vue';
import LangChanger from '@/components/LangChanger.vue';

export default {

  name: 'Login',
  components: {
    Logo,
    Form,
    Button,
    Container,
    Footer,
    Alert,
    FormError,
    LangChanger,
  },

  computed: {
    ...mapState([
      'user',
      'registrationComplete',
      'loginFail',
      'logoutComplete',
      'ready',
      'nightMode'
    ]),
  },
  methods: {
    ...mapMutations([
      'clearInputs',
    ]),
    ...mapActions([
      'getUsers',
      'login',
    ]),
  },

};
</script>

<style lang="scss" scoped>
   .login {
        background: #464646;
        &--white {
            background: #fff;
        }
       &__container {
        display: flex;
        flex-direction: column;
        align-items: center;
       }
       &__form {
           &-error {
                width: 225px;
                bottom: -52px;
           }
           &-btn {
                margin-top: 60px;
           }
       }
   }

   @media screen and (min-width: 480px) {
       .login {
           padding: 10px 10px 20px 10px;
           &__form {
               &-error {
                   width: 100%;
                   bottom: -32px;
               }
                &-btn {
                margin-top: 40px;
           }
           }
       }
   }

</style>
