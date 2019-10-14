<template>
    <div class="login">
          <div v-show="registrationComplete" class="login__alert">
                    <span class="login__alert-text">Rejestracja przebiegła pomyślnie! Możesz się zalogować!</span>
                </div>
      <Container class="login__container">
            <slot>
              
                <Logo class="login__logo logo--big"></Logo>
                <Form class="login__form">
                    <slot>
                        <div class="form__group">
                            <font-awesome-icon class="form__icon" icon="user" />
                            <input type="text" class="form__input" :placeholder="pl.userPlaceholder" required >
                        </div>
                        <div class="form__group">
                            <font-awesome-icon class="form__icon" icon="lock" />
                            <input type="password" class="form__input" :placeholder="pl.passwordPlaceholder" required >
                            <span class="login__form-error form__error">{{pl.loginFormError}}</span>
                        </div>
                        <router-link class="login__form-btn btn btn--wide" tag="button" to="/"> {{pl.logIn}} </router-link> 
                        <div class="form__bottom">
                            <span class="form__bottom-text">
                                {{pl.registerText}}
                                <router-link to="/register" class="form__bottom-link"> {{pl.register}} </router-link>  
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
    export default {
         name: 'Login',
         components: {
            Logo,
            Form,
            Button,
            Container,
            Footer
         },
         computed: {
             ...mapState([
                 'pl',
                 'registrationComplete'
             ])
         },
    }
</script>

<style lang="scss" scoped>
   .login {
        background: #464646;
        &__alert {
            background:#d4edda;
            border: 1px solid #c3e6cb;
            margin-bottom: 40px;
            padding: 15px 20px;
            font-size: 16px;
            position: absolute;
            transform: translateX(-50%);
            left: 50%;
            top: 20%;
            &-text {
                color: #155724;
                
            }
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