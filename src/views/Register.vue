<template>
     <div class="register">
         <LangChanger></LangChanger>
         <Container class="register__container">
             <slot>
        <Logo class="logo--big"></Logo>
        <Form >
            <slot>
                <div class="form__group">
                    <font-awesome-icon class="form__icon" icon="user" />
                    <input type="text" class="form__input" autocomplete="new-password"  v-model="user.username" :placeholder='$t("userPlaceholder")' required >
                    <FormError v-show="invalidInput.username">
                        <slot>
                            {{$t("requiredUser")}}
                         </slot>
                    </FormError>
                    <FormError v-show="invalidInput.sameusername">
                        <slot>
                               {{$t("invalidUser")}}
                        </slot>
                    </FormError>
                </div>
                 <div class="form__group">
                    <font-awesome-icon class="form__icon" icon="lock" />
                    <input type="password" class="form__input" autocomplete="new-password" v-model="user.password"  :placeholder='$t("passwordPlaceholder")' required >
                    <FormError v-show="invalidInput.password">
                        <slot>
                             {{$t("requiredPassword")}}
                        </slot>
                    </FormError>
                </div>
                 <div class="form__group">
                    <font-awesome-icon class="form__icon" icon="lock" />
                    <input type="password" class="form__input" autocomplete="new-password" v-model="user.repassword"  :placeholder='$t("repeatPasswordPlaceholder")' required >
                     <FormError v-show="invalidInput.repassword && !invalidInput.differentpasswords">
                        <slot>
                            {{$t("requiredRePassword")}}
                        </slot>
                    </FormError>
                    <FormError v-show="invalidInput.differentpasswords">
                        <slot>
                            {{$t("invalidPassword")}}
                        </slot>
                    </FormError>
                </div>
                              <router-link @click.native="register" class="register__form-btn btn btn--wide" tag="button" to="" replace >  {{$t("register")}} </router-link>

                     <div class="form__bottom">
                        <span class="form__bottom-text">
                              {{$t("loginText")}}
                        <router-link @click.native="clearInputs" to="/login" class="form__bottom-link">{{$t("logIn")}}</router-link>
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
import Logo from '../components/Logo.vue';
import Form from '@/components/Form.vue';
import Button from '@/components/Button.vue';
import Container from '@/components/Container.vue';
import Footer from '@/components/Footer.vue';
import FormError from '@/components/FormError.vue';
import LangChanger from '@/components/LangChanger.vue';

export default {
  name: 'Register',
  components: {
    Logo,
    Form,
    Button,
    Container,
    Footer,
    FormError,
    LangChanger,
  },

  computed: {
    ...mapState([
      'pl',
      'invalidInput',
      'user',
    ]),
  },

  methods: {
    ...mapMutations([
      'clearInputs',
    ]),
    ...mapActions([
      'register',
      'getUsers',
    ]),

  },
};
</script>

<style lang="scss" scoped>
    .register {
        &__container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        &__form {
            &-btn {
                margin-top: 20px;
            }
            &-error {
                bottom: -21px;
            }
        }
    }

    @media screen and (min-width: 768px) {
        .register {
            &__form {
                &-btn {
                    margin-top: 40px;
                }
            }
        }
    }

</style>
