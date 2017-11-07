<template>
    <section class="text-block">
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
    </section>
</template>

<script>
    export default {
        props: ['title', 'text']
    }
</script>