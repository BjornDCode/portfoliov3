<template>
    <main class="app-container">
        <router-view></router-view>
        <contact />
    </main>
</template>

<script>
    import Contact from './sections/general/Contact';

    export default {
        components: {
            Contact
        }
    }
</script>