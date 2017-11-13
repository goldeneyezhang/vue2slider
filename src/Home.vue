<template>
  <div id="home">
<div class="section">
    <book-list :books="lastUpdated" heading="最新更新">
    </book-list>
</div>
<div class="section">
    <book-list :books="recommended" heading="编辑推荐">
    </book-list>
</div>
</div>
</template>
<script>
    import BookList from './components/BookList.vue'
    export default{
        data(){
            return {
            announcement:'今日上架的图书全部8折',
            slides:[
                    {id:1,img_url:'./fixtures/sliders/t1.svg'},
                    {id:2,img_url:'./fixtures/sliders/t2.svg'}
                ],
            lastUpdated:[
                {
                    "id":1,
                    "title":"揭开数据真相，从小白到数据分析达人",
                    "authors":["Edward Zaccaro","Daniel Zaccaro"],
                    "img_url":"https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=ddd05cfe741ed21b79c929e39555baf9/14ce36d3d539b60060b7c2bbe050352ac65cb745.jpg"
                }
            ],
            recommended:[]
            }
        }
    }
</script>