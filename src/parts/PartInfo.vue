<template>
    <div>
        <h1>{{ part.title }}</h1>
        <div>
            {{ part.description }}
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            part:{
                title:'Название',
                description:'Описание',
            }
        }
    }
}
</script>