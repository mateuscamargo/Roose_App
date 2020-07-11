import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Provider } from 'src/providers/Provider';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

// import { CheckInProvider } from 'src/providers/checkInProvider';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  matches: string[];
  isRecording = false;
  constructor(
    private speechRecognition: SpeechRecognition,
    private cd: ChangeDetectorRef,
    private provider: Provider,
    private tts: TextToSpeech
  ) {

  }
 
  Start() {
    let options = {
      language: 'pt-BR',
      matches: 5
    }
    this.speechRecognition.startListening(options).subscribe(matches => {
      this.matches = matches;
      for(let i=0; matches.length>i; i++){
        if(matches[i].toUpperCase().includes('ABRIR FILMES')){
         this.getfilme();
          break;
        }
         if(matches[i].toUpperCase().includes('ABRIR MÚSICAS')) {
          this.getmusicas();
          break;  
        }  
        if(matches[i].toUpperCase().includes('ABRIR COMODIDADES')) {
          this.servicoDeQuarto('ABRIR COMODIDADES');
          break;  
        }  
        if(matches[i].toUpperCase().includes('ABRIR REFEIÇÃO')) {
          this.servicoDeQuarto('ABRIR REFEIÇÃO');
          break;  
        }  
        if(matches[i].toUpperCase().includes('ABRIR SERVIÇOS')) {
          this.servicoDeQuarto('ABRIR SERVIÇOS');
          break;  
        }  
        if(matches[i].toUpperCase().includes('ABRIR CONTATO')) {
          this.servicoDeQuarto('ABRIR CONTATO');
          break;  
        }  
        if(matches[i].toUpperCase().includes('TEMPO CAÇAPAVA')) {
          this.previsaoTempo('TEMPO CAÇAPAVA');
          break;  
        }
        if(matches[i].toUpperCase().includes('TEMPO SÃO JOSE DOS CAMPOS')) {
          this.previsaoTempo('TEMPO SÃO JOSE DOS CAMPOS');
          break;  
        }
        if(matches[i].toUpperCase().includes('TEMPO TAUBATÉ')) {
          this.previsaoTempo('TEMPO TAUBATÉ');
          break;  
        }
    }
      this.cd.detectChanges();
    });
    this.isRecording = true;

  }

filme
  getfilme () {
    this.provider.getFilme()
    .then((res: any) => {
       this.filme = res.filme;
       this.resposta(res.filme).then(()=>{
         //Executado apos o termino da fala
       })
       this.cd.detectChanges();

     })
  }

  musicas
  getmusicas () {
    this.musicas=this.provider.getMusicas();
    this.cd.detectChanges();
    
  }

  servicos
  servicoDeQuarto (opcao: any) {
    this.servicos=this.provider.servicoDeQuarto(opcao);
    this.cd.detectChanges();
    
  }

  previsao
  previsaoTempo (cidades: any) {
    this.previsao=this.provider.previsaoTempo(cidades);
    this.cd.detectChanges();

  }

resposta (texto:string){
  let options={
    text:texto,
    locale:'en-US'
  }
  return this.tts.speak(options)
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
}




  getPermission() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      });
  }
  
}

