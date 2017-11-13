<template>
    <div class="swiper-container" ref="slider">
        <div class="swiper-wrapper" >
            <div class="swiper-slide" v-for="slide in slides">
            <img :src="slide.img_url"/>

            </div>
        </div>
        <div class="swiper-pagination" ref="pagination"></div>
    </div>
</template>
<script>
    import Swiper from 'swiper' //引入Swiper库
    import 'swiper/dist/css/swiper.min.css' //引入Swiper所需要的样式

    export default {
        //不要选用created钩子而应该采用mounted
        //否则Swiper不能生效，因为created调用时元素还没挂载到DOM上
        mounted(){
              console.log('mounted', this);
            new Swiper(this.$refs.slider,{
                pagination:this.$refs.pagination,
                paginationClickable:true,
                spaceBetween:30,
                centeredSlides:true,
                autoplay:2500,
                autoplayDisableOnInteraction:false,
                observer:true,
                 observeParents:true
            });
        },
        props:[
            'slides'
        ]
    }
</script>
<style>
    .swiper-container {
        width: 100%;
        margin: 0;
        padding: 0;
    }

    .swiper-wrapper {
        height: 200px;
    }

    .swiper-slide img {
        max-width: 100%;
    }

    .swiper-slide {
        text-align: center;
        background: #fff;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
</style>
