import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CONST from '../environments/consts';

@Injectable()
export class Provider {
  
  constructor(
    private http: HttpClient

  ) { }

  getFilme() {
    return this.http.get(CONST.FILME)
      .toPromise()
      .then((res: any) => {
        return res;
      })
      .catch((error: any) => {
        return error;
      });
  }

  getMusicas() {
    return CONST.MUSICAS
      
  }

  servicoDeQuarto(opcao: any){
    switch(opcao){
      case 'ABRIR COMODIDADES':
        return CONST.SERVICOS.comodidades;
      case 'ABRIR REFEIÇÃO':
        return `${CONST.SERVICOS.refeicao.cafe}
${CONST.SERVICOS.refeicao.almoco}
${CONST.SERVICOS.refeicao.jantar}`;
      case 'ABRIR SERVIÇOS':
        return CONST.SERVICOS.servicos;
      case 'ABRIR CONTATO':
        return CONST.SERVICOS.contato;
      default:
        return 'Função Inexistente!!!'
    }
  }

  previsaoTempo (cidades: any){
    switch(cidades){
      case 'TEMPO CAÇAPAVA':
        return CONST.TEMPO.cacapava;
      case 'TEMPO SÃO JOSE':
        return CONST.TEMPO.saojose;
      case 'TEMPO TAUBATÉ':
        return CONST.TEMPO.taubate;
      default:
        return 'Previsão do Tempo Indisponivél!!!'
    }
  }
}