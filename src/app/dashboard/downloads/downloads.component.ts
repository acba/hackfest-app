import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver'; 

import { DownloadService } from './download.service';
import { AuthService } from './../../auth/auth.service';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {

  title: string;
  certificados: Array<string>;
  nomeEventos;

  constructor(private downloadService: DownloadService, private auth: AuthService) { }

  ngOnInit() {
    if (this.auth.getCertificados().length === 1)
      this.title = 'Faça o download do seu certificado';
    else
      this.title = 'Faça o download dos seus certificados';

    this.certificados = this.auth.getCertificados();
    this.nomeEventos = {
      OFICINA_1: 'Oficina: Crimes Digitais, Cyberbullying e o uso seguro da Internet',
      OFICINA_2: 'Oficina: Corrupção nas Licitações Públicas',
      OFICINA_3: 'Oficina: Tratamento de Denúncias do Cidadão',
      OFICINA_4: 'Oficina: Lei de Acesso à Informação: Como usar, como implementar',
      OFICINA_5: 'Oficina: Integridade Empresarial',
      OFICINA_6: 'Oficina: Cidadania e Controle Social: como transformar a realidade em nossas cidades',
      OFICINA_7: 'Oficina: Transparência Pública e Controle da Corrupção',
      OFICINA_8: 'Oficina: Metodologia e Organização do Hackfest',
      PAINEL_1: 'Painel: Tecnologia da Informação à Serviço da Cidadania',
      PAINEL_2: 'Painel: O Direito na Gestão Pública e no Combate à Corrupção',
      PAINEL_3: 'Painel: Transparência Pública',
      ABERTURA_null: 'Abertura: Disrupção Digital e Futuro da Sociedade',
      organizador: 'Certificado de organizador do evento',
      participante_maratona_programacao: 'Certificado de participante do evento',
      palestrante: 'Certificado de palestrante do evento',
      comissao_julgadora: 'Certificado de participante da comissão julgadora do evento',
      coordenador_geral: 'Certificado de coordenador geral do evento',
      coordenador_maratona_programacao: 'Certificado de coordenador da maratona de programação do evento',
      coordenador_maratona_publicidade: 'Certificado de coordenador da maratona de publicidade do evento',
      coach: 'Certificado de coach do evento',
    }
  }

  onDownload(certificado: string){
    this.downloadService.downloadFile(certificado)
        .subscribe( data => {
                              let filename = `${certificado}.pdf`;
                              FileSaver.saveAs(data, filename);
                            },
                    error =>  console.log("Error downloading the file.")
                  )
  }



}
