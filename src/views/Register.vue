<template>
     <div class="register">
         <Container class="register__container">
             <slot>
        <Logo class="logo--big"></Logo>
        <Form>
            <slot>
                <div class="form__group">
                    <font-awesome-icon class="form__icon" icon="user" />
                    <input type="text" class="form__input" :placeholder="pl.userPlaceholder" required >
                     <span class="form__error register__form-error">{{pl.requiredUser}}</span>
                     <span class="form__error register__form-error">{{pl.invalidUser}}</span>
                </div>
                <div class="form__group">
                    <font-awesome-icon class="form__icon" icon="envelope" />
                    <input type="email" class="form__input" :placeholder="pl.email" required >
                    <span class="form__error register__form-error">{{pl.requiredEmail}}</span>
                </div>
                 <div class="form__group">
                    <font-awesome-icon class="form__icon" icon="lock" />
                    <input type="password" class="form__input" :placeholder="pl.passwordPlaceholder" required >
                    <span class="form__error register__form-error">{{pl.requiredPassword}}</span>
                </div>
                 <div class="form__group">
                    <font-awesome-icon class="form__icon" icon="lock" />
                    <input type="password" class="form__input" :placeholder="pl.repeatPasswordPlaceholder" required >
                    <span class="form__error register__form-error">{{pl.requiredRePassword}}</span>
                     <span class="form__error register__form-error">{{pl.invalidPassword}}</span>
                </div>
                    
                              <router-link class="register__form-btn btn btn--wide" tag="button" to="/"> {{pl.register}} </router-link> 
                     
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
       
    </div>
</template>
<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import Logo from '../components/Logo.vue';
import Form from '@/components/Form.vue';
import Button from '@/components/Button.vue';
import Container from '@/components/Container.vue';
    export default {
        name: 'Register',
        components: {
            Logo,
            Form,
            Button,
            Container
         },
         computed: {
             ...mapState([
                 'pl'
             ])
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