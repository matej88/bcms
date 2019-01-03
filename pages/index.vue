<template>
  <div class="home-page">
    <section class="intro">
      <StartPageContactForm />
      <div class="intro-img" ref="introImg"></div>
    </section>

      <!--<PostList :posts="loadedPosts" />-->
    <section class="arts-list container">
      <div class="art-item-container">
        <div class="art-item-bg-img-container padding-right">
          <div class="art-item-bg-img" id="mma"></div>
        </div>
        <div class="art-item-text-container padding-left">
          <div class="art-item-text">
            <div class="art-item-text-inner-border">
              <div class="art-item-text-inner"> 
                  <h4> Våra kampsporter </h4>
                  <h1>MMA</h1>
                  <p>
                    Mixed Martial Arts är en ultimat kampsport där alla stilar samsas i ett regelverk. Vi tränar stående fighting, nedtagningar, ground &amp; pound och markkamp.
                  </p>
                  <p>
                    På Frölunda Kampsportcenter så tränar både tjejer och killar i alla åldrar. Bland medlemmarna hittar man allt ifrån utövare som tävlar och tävlat på elitnivå, 
                    till motionärer som främst vill ha allsidig och rolig träning.
                  </p>

                  <div> Läs mer </div>
              </div>
            </div>
        </div>
      </div>
      </div>

      <div class="art-item-container">
        <div class="art-item-text-container padding-right">
          <div class="art-item-text">
            <div class="art-item-text-inner-border">
              <div class="art-item-text-inner"> 
                <h4> Våra kampsporter </h4>
                <h1>Kickboxing</h1>
                <p> Kickboxning är kampsporter som utövas stående. Vi använder slag, sparkar, clinch och knän i vår träning.</p>
                <p>Allt från motionärer till SM-vinnare tränar hos oss. Alla som vill ha en fysisk träning med ett kampmoment där du förbättrar din koordination, styrka och kondition. Du måste vara 16år för att få träna hos oss.</p>

                <div> Läs mer </div>
              </div>
            </div>
          </div>
        </div>
        <div class="art-item-bg-img-container padding-left">
          <div class="art-item-bg-img" id="kb"></div>
        </div>
      </div>

      <div class="art-item-container">
        <div class="art-item-bg-img-container padding-right">
          <div class="art-item-bg-img" id="bjj"></div>
        </div>
        <div class="art-item-text-container padding-left">
          <div class="art-item-text">
            <div class="art-item-text-inner-border">
              <div class="art-item-text-inner">         
                <h4> Våra kampsporter </h4>
                <h1>Brasiliansk Jiu Jitsu</h1>
                <p> BJJ är en sport som härstammar från den japanska judon och Jiu Jitsun.
                      I BJJ ingår inga slag eller sparkar utan man tränar lås, strypningar, kast och markpositioner.
                      Alla som tränar använder en GI (dräkt).</p>
                <p>Alla tränar tillsammans oavsett nivå. Varje träningspass består av en uppvärmning med fokus på smidighet och kroppskontroll. Efter följer en teknikdel där vi drillar ett antal utvalda tekniker. I slutet av passet brukar vi ”rulla”, vilket innebär lätt sparring.</p>

                <div> Läs mer </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="art-item-container">
        <div class="art-item-text-container padding-right">
          <div class="art-item-text">
            <div class="art-item-text-inner-border">
              <div class="art-item-text-inner">              
                <h4> Våra kampsporter </h4>
                <h1>Taekwondo</h1>
                <p> TAEKWONDO är namnet på ett självförsvarssystem som förädlats till en kampsport. Den har sin tradition i den tidiga Koreanska historian och förlorar sig i töcknet i den 2000-åriga fragmentariska dokumentationen. Det som utpräglar TAEKWONDO är den stora variation varigenom man använder sina fötter som verktyg i kamp.</p>
                
                <div> Läs mer </div>
              </div>
            </div>
          </div>
        </div>
        <div class="art-item-bg-img-container padding-left">
          <div class="art-item-bg-img" id="twd"></div>
        </div>
      </div>
    </section>

    <section class="news container">
      <div class="news-explainer">
        <div class="news-explainer-inner">
          <div class="news-explainer-container">
            <h4>Senaste Inlägg</h4>
            <h1>Blog</h1>

            <p>Vill du läsa alla posts? <span><a href="#">Klicka här</a></span></p>
          </div>
        </div>
      </div>

      <div class="news-article">
        <div class="news-article-inner">
          <div class="news-article-container">
            <h4>Nyheter 1</h4>
          </div>
        </div>
      </div>

      <div class="news-article">
        <div class="news-article-inner">
          <div class="news-article-container">
            <h4>Nyheter 2</h4>
          </div>
        </div>
      </div>
      <div class="news-article">
        <div class="news-article-inner">
          <div class="news-article-container">
            <h4>Nyheter 3</h4>
          </div>
        </div>
      </div>

    </section>


    <section class="pricing-and-times">
      <Schedule />
    </section>
  </div>
</template>

<script>
  import Schedule from '@/components/Schedule/Schedule'
  import PostList from '@/components/Posts/PostList'
  import StartPageContactForm from '@/components/ContactForm/StartPageContactForm'

  export default {
    components: {
      PostList,
      StartPageContactForm,
      Schedule
    },
    computed: {
      loadedPosts() {
        return this.$store.getters.loadedPosts
      }
    },
    mounted () {
      window.addEventListener('load', this.imageScale)
    },
    created () {
      this.$on('load', this.imageScale)
    },
    methods: {
      imageScale() {
        this.$refs.introImg.style.transform = 'scale(1.08)'
      }
    }
  };
</script>


<style scoped>

.news-explainer-container h1 {
  margin: 0;
  padding: 0;
  font-size: 2.2rem;
  color: white;
}
.news-explainer-container h4 {
  margin: 0;
  padding: 0;
  font-size: 1rem;
  color: white;
}
.news-explainer, .news-article {
  height: 100%;
  width: 25%;
  background: #161515;
}

.news {
  margin-top: 3.5vh;
  height: 350px;
  display: flex;
  color: white;
}
.news-explainer-inner, .news-article-inner {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.news-container-explainer, .news-container-article {
  display: flex;

}
.news-article-inner {
  background: rgba(0,0,0,0.6);
}

.news-article-container {
  background: rgba(255,255,255,0.6);
  padding: 30px;
  border: 1px solid yellow;
}

.news-article-container h4 {
  margin: 0;
  padding: 0;
}
.news-article:nth-child(2) {
  background: url('~assets/images/bjj.jpg') center;
  background-size: cover;
}

.news-article:nth-child(3) {
  background: #ccc;
}

.news-article:nth-child(4) {
  background: #f2e;
}

.padding-left{
  padding-left: 0.9vw;
}

.padding-right {
  padding-right: 0.9vw;
}

.arts-list {
  
  display: flex;
  flex-direction: column;

}

.art-item-container {
  margin-top: 3.5vh;
  height: 530px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.art-item-bg-img-container {
  width: 50%;
  height: 100%;
}

.art-item-bg-img {
    width: 100%;
    height: 100%;
}

.art-item-bg-img#mma {
      background: url('~assets/images/mma.png');
          background-size: cover;
    background-position: center;
}

.art-item-bg-img#kb {
      background: url('~assets/images/kickboxing.jpg');
          background-size: cover;
    background-position: center;
}
.art-item-bg-img#bjj {
      background: url('~assets/images/bjj.jpg');
          background-size: cover;
    background-position: center;
}

.art-item-bg-img#twd {
      background: url('~assets/images/twd.jpg');
          background-size: cover;
    background-position: center;
}
.art-item-text-container {
  width: 50%;
  text-align: center;
}

.art-item-text {
  display: flex;
  width: 100%;
  heigh: 100%;
}
.art-item-text h1, h4 {
  margin: 0px;
  color: black;
}

.art-item-text {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
}


.art-item-text-inner-border {
  padding: 25px;
  flex-grow: 1;
  flex: 1;
  justify-content: center;
}

.art-item-text-inner {
  height: 93%;
  border: 1px solid black;
  padding: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.intro {
  height: 100vh;
  z-index: 100;
  position: relative;
  top: 0;
  background-image: linear-gradient(to top, #f4f4f4 0%, #eef1f5 100%);
  padding: 50px;
  box-sizing: border-box;
  background-position: center;
  color: white;
  display: flex;
  overflow: hidden;
}

.intro-img {
  width: 950px;
  height: 800px;
  background-image: url('~assets/images/logo.png');
  background-size: cover;
  opacity: 0.5;
  display: flex;
  transition: transform 10s ease;
  position: absolute;
  right: -250px;
  top: 150px;
  z-index: 98;
}
h1 {
  text-transform: uppercase;
  color: rgba(255,255,255,0.8);
  font-size: 44px;
  letter-spacing: 3px;
}

@media (max-width: 1160px) {
  section.intro {
    justify-content: center;
    align-items: center;
  }

}



</style>