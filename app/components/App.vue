<template>
    <main class="app-container">
        <div class="sections-container">
            <intro />
            <clients />
        </div>
        <!-- Contact component goes here -->
    </main>
</template>

<script>
    import Intro from './sections/Intro';
    import Clients from './sections/Clients';

    export default {
        components: {
            Intro,
            Clients
        }
    }
</script>