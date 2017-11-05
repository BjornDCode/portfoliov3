<template>
    <div class="sections-container" id="sections">
        <intro />
        <clients />
        <about />
    </div>
</template>

<script>
    import Intro from '../sections/home/Intro';
    import Clients from '../sections/home/Clients';
    import About from '../sections/home/About';

    export default {
        components: {
            Intro,
            Clients,
            About
        }
    }
</script>