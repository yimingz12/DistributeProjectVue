 <template>
 <div>
 <div class="display-3" style ="color:green">Compare Total Time Analysis</div>
    <v-row>
       <router-link to ="/mapChart" tag="p"><v-btn text class = "title" style ="color:red">Recent time</v-btn></router-link>
        <router-link to ="/compareTotalTimeView" tag="p"><v-btn text class = "title" style ="color:red">Total Time</v-btn></router-link>
         
      </v-row>
 <v-card  v-if="dataLoading">
   <compareTotalTime 
        :Ararat= Ararat
        :Ballarat = Ballarat
        :Benalla = Benalla 
        :Bendigo = Bendigo
        :Colac = Colac
        :Geelong = Geelong 
        :Horsham = Horsham
        :Lara = Lara
        :Melbourne = Melbourne
        :Melton = Melbourne
        :Mildura = Mildura
        :Wangaratta = Wangaratta
        :Warrnambool = Warrnambool
        :Wodonga = Wodonga
        :AraratSleep = AraratSleep
        :BallaratSleep = BallaratSleep
        :BenallaSleep = BenallaSleep
        :BendigoSleep = BendigoSleep
        :ColacSleep = ColacSleep
        :GeelongSleep = GeelongSleep
        :HorshamSleep = HorshamSleep
        :LaraSleep = LaraSleep
        :MelbourneSleep = MelbourneSleep
        :MeltonSleep = MeltonSleep
        :MilduraSleep = MilduraSleep
        :WangarattaSleep = WangarattaSleep
        :WarrnamboolSleep = WarrnamboolSleep
        :WodongaSleep = WodongaSleep></compareTotalTime>
    </v-card>
 </div>
    </template>

    <script>
    import compareTotalTime from './compareTotalTime.vue'
    export default {
      components:{
        compareTotalTime
      },

       data: function() {
      return {
        dataLoading: false,
        Ararat:"",
        Ballarat:"",
        Benalla:"",
        Bendigo:"",
        Colac:"",
        Geelong:"",
        Horsham:"",
        Lara:"",
        Melbourne:"",
        Melton:"",
        Mildura:"",
        Wangaratta:"",
        Warrnambool:"",
        Wodonga:"",
        AraratSleep:"",
        BallaratSleep:"",
        BenallaSleep:"",
        BendigoSleep:"",
        ColacSleep:"",
        GeelongSleep:"",
        HorshamSleep:"",
        LaraSleep:"",
        MelbourneSleep:"",
        MeltonSleep:"",
        MilduraSleep:"",
        WangarattaSleep:"",
        WarrnamboolSleep:"",
        WodongaSleep:"",
      }
      },
        
     mounted () {
   
      
     this.$axios({method:"GET", url:"http://localhost:3000/sleepDistribute"
    }).then(response => {this.info = response.data
    
       
        this.Ararat = this.info.Ararat.total_time 
        this.Ballarat = this.info.Ballarat.total_time
        this.Benalla = this.info.Benalla.total_time  
        this.Bendigo = this.info.Bendigo.total_time  
        this.Colac = this.info.Colac.total_time    
        this.Geelong = this.info.Geelong.total_time  
        this.Horsham = this.info.Horsham.total_time   
        this.Lara = this.info.Lara.total_time  
        this.Melbourne = this.info.Melbourne.total_time 
        this.Melton = this.info.Melton.total_time 
        this.Mildura = this.info.Mildura.total_time 
        this.Wangaratta = this.info.Wangaratta.total_time
        this.Warrnambool = this.info.Warrnambool.total_time
        this.Wodonga = this.info.Wodonga.total_time
        this.AraratSleep = this.info.Ararat.sleep
        this.BallaratSleep = this.info.Ballarat.sleep
        this.BenallaSleep = this.info.Benalla.sleep  
        this.BendigoSleep = this.info.Bendigo.sleep  
        this.ColacSleep = this.info.Colac.sleep    
        this.GeelongSleep = this.info.Geelong.sleep  
        this.HorshamSleep = this.info.Horsham.sleep   
        this.LaraSleep = this.info.Lara.sleep  
        this.MelbourneSleep = this.info.Melbourne.sleep 
        this.MeltonSleep = this.info.Melton.sleep 
        this.MilduraSleep = this.info.Mildura.sleep 
        this.WangarattaSleep = this.info.Wangaratta.sleep
        this.WarrnamboolSleep = this.info.Warrnambool.sleep
        this.WodongaSleep = this.info.Wodonga.sleep
        this.dataLoading = true
});
  },

  
    }
    
    </script>