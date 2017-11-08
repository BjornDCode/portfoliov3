<template>
    <main class="client-page sections-container">
        <intro name="uniavisen" imageFormat="svg" url="https://uniavisen.dk/" />
        <text-block title="The Project" text="Uniavisen is an online newspaper, published by University of Copenhagen. They publish multiple articles daily, which means they required a versatile system allowing for this. The solution is built on Wordpress, and allows the client to build articles with various different modules such as text, image, quote, info box and many more." />
        <visuals name="uniavisen" imageCount="8" />
        <text-block title="My Role" text="I was one of two developers working on the project. I was responsible for various modules and sections of the website. Later on in the project I was part of the bug fixing and quality assurance stage, making sure the site was of high quality before launch. After launch I was responsible for incoming support requests." />
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