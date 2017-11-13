<template>
    <div class="section">
        <div>
            <!--热门推荐-->
            <div class="swiper-container" ref="slider">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="./fixture/sliders/t1.svg"/>
                    </div>
                </div>
                 <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="./fixture/sliders/t2.svg"/>
                    </div>
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
    import Swiper from 'swiper'
</script>