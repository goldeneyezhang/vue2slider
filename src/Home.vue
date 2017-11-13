<div class="section">
    <book-list :books="lastUpdated" heading="最新更新">
    </book-list>
</div>
<div class="section">
    <book-list :books="recommended" heading="编辑推荐">
    </book-list>
</div>
<script>
    import BookList from './components/BookList.vue'
    export default{
        data(){
            announcement:'今日上架的图书全部8折',
            slides:[
                    {id:1,img_url:'./fixtures/sliders/t1.svg'},
                    {id:2,img_url:'./fixtures/sliders/t2.svg'}
                ],
            latestUpdated:[],
            recommended:[]
        }
    }
</script>