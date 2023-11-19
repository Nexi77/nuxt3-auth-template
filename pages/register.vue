<script setup lang="ts">
import type { Tokens, FetchErrorWithMessage } from '@/types/api';
definePageMeta({
    layout: 'logged-out'
});

interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
}

async function onSubmit(data: FormData)
{
    try
    {
        await useApi().post<Tokens>('auth/local/signup', data);
    }
    catch (error)
    {
        const { $toast } = useNuxtApp();
        const errorMessage = (error as FetchErrorWithMessage).data?.message;

        if (errorMessage)
            $toast.error(errorMessage);
    }
}
</script>

<template>
    <main>
        <Card>
            <h2>Register</h2>
            <FormKit type="form" submit-label="Sign Up" @submit="onSubmit">
                <FormKit
                    id="email"
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="johnsmith@gmail.com"
                    prefix-icon="email"
                    validation="required|email"
                    validation-visibility="blur"
                />
                <FormKit
                    id="password"
                    type="password"
                    name="password"
                    label="Password"
                    prefix-icon="password"
                    validation="required|passwordRule"
                    :validation-rules="{ passwordRule }"
                    validation-visibility="blur"
                    :validation-messages="{
                        passwordRule: 'Password must be at least 8 chars longs, have at least 1 lowercase letter, one uppercase letter, one symbol and one number'
                    }"
                />
                <FormKit
                    id="passwordConfirm"
                    type="password"
                    name="passwordConfirm"
                    label="Confirm password"
                    prefix-icon="password"
                    validation="required|confirm:password"
                    validation-visibility="blur"
                    validation-label="Passwords"
                />
                <div class="link-wrapper">
                    <NuxtLink to="login" class="link">
                        Already have an account? Sign in!
                    </NuxtLink>
                </div>
            </FormKit>
        </Card>
    </main>
</template>

<style lang="scss" scoped>
main {
    max-width: 400px;
    width: 100%;
    position: relative;
    top: -80px;
    z-index: 2;
    margin: 0 auto;

    h2 {
        text-align: center;
        color: var(--clr-primary);
        text-transform: uppercase;
        margin-block-end: 1.25rem;
    }

    .link-wrapper {
        margin: 10px 0;
        display: flex;
        justify-content: center;
    }
}
</style>
