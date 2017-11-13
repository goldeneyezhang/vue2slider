<template>
    <div class="section">
        <div>
            <!--热门推荐-->
            <div class="swiper-container" ref="slider">
                <div class="swiper-wrapper" v-for="slide in slides">
                  <router-link class="swiper-slide" tag="div" :to="name:'BookDetial',params:{id:slide.id}}"
                  <img :src="slide.img_url"/>
                  </router-link>
                </div>
                <div class="swiper-pagination" ref="pagination">
            </div>
            <!--快讯-->
        </div>
        <div class="section">
            <!--新书上架-->
        </div>
        <div class="section">
            <!--编辑推荐-->
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper' //引入Swiper库
    import 'swiper/dist/css/swiper.css' //引入Swiper所需要的样式

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
                autoplayDisableOnInteraction:false
            });
        },
        props:[
            'sliders'
        ]
    }
</script>