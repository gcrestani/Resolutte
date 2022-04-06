using ResolutteAudioAPI.Models;
using ResolutteAudioAPI.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ResolutteAudioAPI.Data
{
    public class SeedingService
    {
        private ResolutteAudioAPIContext _context;

        public SeedingService(ResolutteAudioAPIContext context)
        {
            _context = context;
        }

        public void Seed()
        {
            if (_context.Audio.Any())
            {
                return;
            }

            Audio a1 = new Audio(1, "audio_cliente_pedro.mp3", TipoLigacao.Entrada,"Guilherme Crestani", new DateTime(2019, 10, 08, 08, 20, 23));
            Audio a2 = new Audio(2, "audio gravação monitoria.mp3", TipoLigacao.Entrada, "Pedro Henrique", new DateTime(2020,10,10,14,40,30));
            Audio a3 = new Audio(3, "audio_20220401.aac", TipoLigacao.Entrada, "Mariana Alves", new DateTime(2022, 04, 01, 10, 20, 13));
            Audio a4 = new Audio(4, "ligação cliente.mp3", TipoLigacao.Saida, "Joao Carvalho Santos",new DateTime(2020, 03, 21, 16, 05, 14));
            Audio a5 = new Audio(5, "gravação atendimento 123321.aac", TipoLigacao.Saida, "Felipe Augusto Brasil",new DateTime(2021, 05, 17, 18, 10, 28));
            Audio a6 = new Audio(6, "1654321.mp3", TipoLigacao.Saida, "Rafaela Silva", new DateTime(2020, 01, 02, 18, 35, 42));
            Audio a7 = new Audio(7, "recupercação da chamada 4124.mp3", TipoLigacao.Saida, "Mario Salgado",new DateTime(2020, 10, 30, 10, 18, 55));
            Audio a8 = new Audio(8, "elogio_atendente_Maria", TipoLigacao.Entrada, "Marta Marrafão",new DateTime(2022, 12, 25, 09, 44, 59));
            Audio a9 = new Audio(9, "audio_20200305.mp3", TipoLigacao.Entrada, "Gustavo Marcos Rocha",new DateTime(2020, 03, 05, 11, 55, 42));
            Audio a10 = new Audio(101, "audio_321.mp3", TipoLigacao.Entrada, "Joao da Silva",new DateTime(2022, 10, 10, 13, 28, 34));

            _context.Audio.AddRange(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);

            _context.SaveChanges();
        }
    }
}
