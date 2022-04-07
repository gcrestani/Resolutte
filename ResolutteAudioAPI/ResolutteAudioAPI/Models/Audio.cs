using ResolutteAudioAPI.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ResolutteAudioAPI.Models
{
    public class Audio
    {
        //ArquivoNome, Tipo, OperadorNome, DataCriacao
        public int Id { get; set; }
        public string ArquivoNome { get; set; }
        public TipoLigacao TipoLigacao { get; set; }
        public string OperadorNome { get; set; }
        public DateTime DataCriacao { get; set; }

        public Audio()
        {
        }

        public Audio(int id, string arquivoNome, TipoLigacao tipoLigacao, string operadorNome, DateTime dataCriacao)
        {
            Id = id;
            ArquivoNome = arquivoNome;
            TipoLigacao = tipoLigacao;
            OperadorNome = operadorNome;
            try
            {
                DataCriacao = dataCriacao;

            }
            catch (Exception)
            {
                DataCriacao = DateTime.Parse(dataCriacao.ToString());
            }
        }
    }
}
