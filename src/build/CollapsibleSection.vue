<template>
    <div>
        <div class="header">
            <span v-if="open" @click="open = !open">&#x25B2;CLOSE</span>
            <span v-if="!open" @click="open = !open">&#x25BC;OPEN</span>
        </div>
        <slot v-if="open"></slot>
    </div>
</template>

<script>
export default {
    name: 'CollapsibleSection',
    data(){
        return{open: true};
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