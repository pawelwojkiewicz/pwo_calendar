<template>
     <div class="register">
         <Container class="register__container">
             <slot>
        <Logo class="logo--big"></Logo>
        <Form >
            <slot>
                <div class="form__group">
                    <font-awesome-icon class="form__icon" icon="user" />
                    <input type="text" class="form__input" autocomplete="new-password"  v-model="user.username" :placeholder="pl.userPlaceholder" required >
                    <FormError v-show="invalidInput.username">
                        <slot>
                            {{pl.requiredUser}}
                         </slot>
                    </FormError>
                    <FormError v-show="invalidInput.sameusername">
                        <slot>
                            {{pl.invalidUser}}
                        </slot>
                    </FormError>
                </div>
                 <div class="form__group">
                    <font-awesome-icon class="form__icon" icon="lock" />
                    <input type="password" class="form__input" autocomplete="new-password" v-model="user.password"  :placeholder="pl.passwordPlaceholder" required >
                    <FormError v-show="invalidInput.password">
                        <slot>
                            {{pl.requiredPassword}}
                        </slot>
                    </FormError>
                </div>
                 <div class="form__group">
                    <font-awesome-icon class="form__icon" icon="lock" />
                    <input type="password" class="form__input" autocomplete="new-password" v-model="user.repassword"  :placeholder="pl.repeatPasswordPlaceholder" required >
                     <FormError v-show="invalidInput.repassword && !invalidInput.differentpasswords">
                        <slot>
                            {{pl.requiredRePassword}}
                        </slot>
                    </FormError>
                    <FormError v-show="invalidInput.differentpasswords">
                        <slot>
                            {{pl.invalidPassword}}
                        </slot>
                    </FormError>
                </div>
                              <router-link @click.native="register" class="register__form-btn btn btn--wide" tag="button" to="" replace > {{pl.register}} </router-link> 
                     
                     <div class="form__bottom">
                        <span class="form__bottom-text">
                        {{pl.loginText}}
                        <router-link to="/login" class="form__bottom-link"> {{pl.logIn}} </router-link>  
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
    export default {
        name: 'Register',
        components: {
            Logo,
            Form,
            Button,
            Container,
            Footer,
            FormError
         },
         computed: {
             ...mapState([
                 'pl',
                 'invalidInput',
                 'user'
             ])
         },
         methods: {
              ...mapActions([
                 'register',
                 'getUsers'
             ])
         },
         created() {
             this.getUsers();
         }
    }
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