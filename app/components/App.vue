<template>
    <main class="app-container">
        <div class="sections-container" id="sections">
            <intro />
            <clients />
            <about />
            <contact />
        </div>
        <!-- Contact component goes here -->
    </main>
</template>

<script>
    import Intro from './sections/Intro';
    import Clients from './sections/Clients';
    import About from './sections/About';
    import Contact from './sections/Contact';

    export default {
        components: {
            Intro,
            Clients,
            About,
            Contact
        }
    }
</script>