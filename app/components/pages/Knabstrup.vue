<template>
    <main class="client-page sections-container">
        <intro name="knabstrup" imageFormat="svg" url="https://knabstrup.com/" />
        <text-block title="The Project" text="Knabstrup Keramik, is a century old, ceramics manufacturer brought back to life in 2017. The manufacturing shut down in the 80’s but has been restarted by new investors. In order for this to succeed and online presence was essential. The solution is a website containing the history of the brand, information about the various designers and an online webshop." />
        <visuals name="knabstrup" imageCount="7" />
        <text-block title="My Role" text="I was a part of a small team of developers and designers. My responsibilities included multiple sections of the website. An example is the various image sliders found throughout the site. I was also heavily involved in making the site responsive, so it looks good on all devices, and making sure it works in all modern browsers." />
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