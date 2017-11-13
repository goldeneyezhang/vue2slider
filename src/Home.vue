<template>
  <div id="home">
  <div class="section">
    <div class="section">
        <book-list :books="lastUpdated" heading="最新更新" @onBookSelect="preview($event)">
        </book-list>
    </div>
    <div class="section">
        <book-list :books="recommended" heading="编辑推荐" @onBookSelect="preview($event)">
        </book-list>
    </div>
</div>
</div>
</template>
<script>
    import BookList from './components/BookList.vue'
    import Announcement from './components/Announcement.vue'
    export default{
        data(){
            return {
            announcement:'',
            slides:[
                ],
            lastUpdated:[
            ],
            recommended:[
            ]
            }
        },
        components:{
            BookList,
            Announcement
        },
        methods:{
            preview(book){
                alert("显示图书详情")
            }
        },
        created(){
            this.$http.get('/api/home').then((res)=>{
                for prop in res.body {
                    this[prop]=res.body[prop]
                }
            },(error)=>{
                console.log('获取数据失败:${error}')
            })
        }
    }
</script>