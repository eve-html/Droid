<template>
    <div class="qr-wrapper">
        <h2>QR-кол на портфолия</h2>
        <canvas ref="canvas"></canvas>
        <p>Отсканируй, чтобы открыть</p>
        <button class="visit-btn" @click="visitSite">Перейти на QR-код</button>
    </div>
</template>

<script>
import QRCode from 'qrcode'

export default{
    name: 'QRCode',
    data(){
        return{
            url: 'https://eve-html.github.io/Droid/'// указываем нажную ссылку
        }
    },
    mounted(){
        const canvas = this.$refs.canvas
        if(canvas){
            QRCode.toCanvas(canvas, this.url, {width: 180}, (error) =>{
                if (error) console.log(error)
            })
        }
    },
    methods:{
        visitSite(){
            window.open(this.url, '_blank')
        }
    }
}
</script>