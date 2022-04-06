using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ResolutteAudioAPI.Data;
using ResolutteAudioAPI.Models;

namespace ResolutteAudioAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AudiosController : ControllerBase
    {
        private readonly ResolutteAudioAPIContext _context;

        public AudiosController(ResolutteAudioAPIContext context)
        {
            _context = context;
        }

        // GET: api/Audios
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Audio>>> GetAudio()
        {            
            return await _context.Audio.ToListAsync();
        }

        // GET: api/Audios/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Audio>> GetAudio(int id)
        {
            var audio = await _context.Audio.FindAsync(id);

            if (audio == null)
            {
                return NotFound();
            }

            return audio;
        }

        // PUT: api/Audios/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAudio(int id, Audio audio)
        {
            if (id != audio.Id)
            {
                return BadRequest();
            }

            _context.Entry(audio).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AudioExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(_context.Audio.FindAsync(id));
        }

        // POST: api/Audios
        [HttpPost]
        public async Task<ActionResult<Audio>> PostAudio(Audio audio)
        {
            _context.Audio.Add(audio);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAudio", new { id = audio.Id }, audio);
        }

        // DELETE: api/Audios/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Audio>> DeleteAudio(int id)
        {
            var audio = await _context.Audio.FindAsync(id);
            if (audio == null)
            {
                return NotFound();
            }

            _context.Audio.Remove(audio);
            await _context.SaveChangesAsync();

            return audio;
        }

        private bool AudioExists(int id)
        {
            return _context.Audio.Any(e => e.Id == id);
        }
    }
}
