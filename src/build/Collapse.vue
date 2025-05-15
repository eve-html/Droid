<template>
    <div class="header">
        <span v-if="open" @click="open = !open">&#x25B2;СВЕРНУТЬ</span>
        <span v-if="!open" @click="open = !open">&#x25BC;РАЗВЕРНУТЬ</span>
    </div>
    <slot>

    </slot>
</template>

<script>
    export default {
        name: 'Collapse',
        data(){
            return {open:true}
        }
    }
</script>

<style>
.header{
    background-color: #bbb;
    padding: 3px;
    cursor: pointer;
}
</style>