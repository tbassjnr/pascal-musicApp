import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BandMember } from '../../core/model/interface/band.interface';

@Component({
  selector: 'app-band',
  imports: [CommonModule],
  templateUrl: './band.html',
  styleUrl: './band.css',
})
export class Band {

   bandName = "The Power House Band ";
  
  members: BandMember[] = [
    {
      fullName: 'Kelvin TheBra',
      role: 'Lead Vocalist & Guitarist',
      description: 'The creative force behind the sound, Kelvin blends soulful lyrics with experimental rhythms to create a unique sonic landscape.',
      imageUrl: 'assets/images/home.png', // Replace with your image paths
      socials: { instagram: '#', spotify: '#', twitter: '#' }
    },
    {
      fullName: 'Sarah Jenkins',
      role: 'Keyboards & Backing Vocals',
      description: 'A classical prodigy turned synth enthusiast, Sarah adds the atmospheric layers that define the band\'s signature "dreamy" vibe.',
      imageUrl: 'assets/images/about.png',
      socials: { instagram: '#', spotify: '#', facebook: '#' }
    },
    {
      fullName: 'Marcus "Thunder" Cole',
      role: 'Drums & Percussion',
      description: 'The heartbeat of the band. Marcus brings an energetic fusion of jazz precision and rock power to every live performance.',
      imageUrl: 'assets/images/Pascal.jpg',
      socials: { twitter: '#', spotify: '#' }
    }
  ];

  // Inside your BandMembersComponent class
    bandArticle = {
      title: "Beyond the Notes: The Evolution of Our Sound",
      subtitle: "A journey from late-night jam sessions to global stages.",
      content: [
        `Founded in 2018, Kelvin TheBra & The Visionaries wasn't just formed; it was discovered. What started as a series of experimental sessions in a repurposed warehouse in Los Angeles quickly evolved into a movement. Our sound is a tapestry of soul, indie-rock, and cinematic textures that refuse to be boxed into a single genre.`,
        `Each performance is an exploration of human connection. We believe that music is the ultimate universal language, and our mission has always been to create 'sonic sanctuaries'—spaces where listeners can lose themselves in the melody and find themselves in the lyrics.`,
        `With three studio albums and over 200 live shows under our belt, we continue to push the boundaries of our craft. For us, the vision is simple: Stay authentic, stay loud, and never stop chasing the perfect chord.`
      ],
      featuredImageUrl: 'assets/images/powerhouseband.jpg' // Replace with your image
    };
}
