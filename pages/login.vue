<script setup lang="ts">

definePageMeta({
    layout: 'logged-out'
});

// interface FormData {
//     email: string;
// }

async function onSubmit()
{

}
</script>

<template>
    <main>
        <Card>
            <h2>Sign in</h2>
            <FormKit type="form" submit-label="Login" @submit="onSubmit">
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
                    validation="required|min:4"
                    validation-visibility="blur"
                />
                <div class="link-wrapper">
                    <NuxtLink to="register" class="link">
                        Do not have an account? Sign up!
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
