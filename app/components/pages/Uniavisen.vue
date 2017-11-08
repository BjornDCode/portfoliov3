<template>
    <main class="client-page sections-container">
        <intro name="uniavisen" url="https://uniavisen.dk/" />
        <text-block title="The Project" text="Ipsum dolor sit amet, consectetur adipisicing elit. Expedita repellendus voluptatem iure! Hic consequatur accusantium, nemo consequuntur culpa quas incidunt at tenetur repudiandae adipisci debitis consectetur repellendus, minima, voluptas non?" />
        <visuals name="uniavisen" imageCount="8" />
        <text-block title="My Role" text="Ipsum dolor sit amet, consectetur adipisicing elit. Expedita repellendus voluptatem iure! Hic consequatur accusantium, nemo consequuntur culpa quas incidunt at tenetur repudiandae adipisci debitis consectetur repellendus, minima, voluptas non?" />
    </main>
</template>

<script>
    import Intro from '../sections/clients/Intro';
    import TextBlock from '../sections/general/TextBlock';
    import Visuals from '../sections/clients/Visuals';

    export default {
        components: {
            Intro,
            TextBlock,
            Visuals
        }
    }
</script>