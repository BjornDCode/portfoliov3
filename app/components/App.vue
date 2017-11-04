<template>
    <main class="app-container">
        <div class="sections-container" id="sections">
            <intro />
            <clients />
            <about />
        </div>
        <!-- Contact component goes here -->
    </main>
</template>

<script>
    import Intro from './sections/Intro';
    import Clients from './sections/Clients';
    import About from './sections/About';

    export default {
        components: {
            Intro,
            Clients,
            About
        }
    }
</script>