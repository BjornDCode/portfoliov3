<template>
    <section class="text-block" v-in-viewport.once="-250">
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
    </section>
</template>

<script>
    export default {
        props: ['title', 'text']
    }
</script>