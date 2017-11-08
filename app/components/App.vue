<template>
    <div class="app-container">
        <router-view></router-view>
        <contact />
    </div>
</template>

<script>
    import Contact from './sections/general/Contact';

    export default {
        components: {
            Contact
        }
    }
</script>