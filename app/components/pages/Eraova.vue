<template>
    <main class="client-page sections-container">
        <intro name="eraova" imageFormat="png" url="http://eraova.dk/" />
        <text-block title="The Project" text="Eraova is a webshop launched in late 2017. The products include exclusive and handmade jackets. It’s an ambitious project aiming to target clients all over the world. The website is built on the popular Shopify platform, making it very easy for the client to manage products and orders directly on the website." />
        <visuals name="eraova" imageCount="6" />
        <text-block title="My Role" text="I was the sole developer on this project. That means I was responsible for planning, executing and refining the developing process from start to end. The website is made so it’s optimised for mobile, tablet and desktop devices and is made so that further functionality can be added later on." />
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
