<template>
    <div>
        <div class="social-share-widget"
             data-description="Great!"
             data-size='small'
             data-link="https://gallery-test-stg.autodesk.com/projects/transformers-11262013"
             data-media="http://d23n1l4x3uhcea.cloudfront.net/uploads/assets/images/000/003/859/tile/703_370189_951643.jpg?1385460449"
             data-title="Transformers"
             data-twitter-text="Transformers Online_Gallery">
        </div>
    </div>
</template>
<script>
import SocialShare from '../assets/js/socialShare'
export default{
    name: 'share',
    mounted(){
        let social = document.querySelector('.social-share-widget');
        SocialShare.initClass();
        new SocialShare({
            element: social,
            size: social.getAttribute('data-size'),
            title: social.getAttribute('data-title'),
            link:social.getAttribute('data-link'),
            media:social.getAttribute('data-media'),
            description: social.getAttribute('data-description'),
            twitterText: social.getAttribute('data-twitter-text')
        })
    }
}
</script>
<style lang='stylus'>
.social-share-widget
    ul
      list-style none
    li
      float left
      margin 20px
    .sns-icon
      background url(../assets/image/gallery-icons.png)
      background-size 420px 2280px
      cursor pointer
      display inline-block
    .si-medium
      width 30px
      height 30px   
      &.si-facebook
        background-position 0 -1320px
      &.si-twitter
        background-position -60px -1320px
      &.si-linkedin
        background-position -120px -1320px
      &.si-pinterest
        background-position -180px -1320px;
      &.si-gplus
        background-position -240px -1320px;
    .si-large
      width 50px
      height 50px
    .si-small
      width 20px
      height 20px
      &.si-facebook
        background-position: 0 -1200px;
      &.si-facebook:hover
        background-position: 0 -1260px;
      &.si-twitter
        background-position: -60px -1200px;
      &.si-twitter:hover
        background-position: -60px -1260px;
      &.si-linkedin
        background-position: -120px -1200px;
      &.si-linkedin:hover
        background-position: -120px -1260px;
      &.si-pinterest
        background-position: -180px -1200px;
      &.si-pinterest:hover
        background-position: -180px -1260px;
      &.si-gplus
        background-position: -240px -1200px;
      &.si-gplus:hover
        background-position: -240px -1260px;
</style>