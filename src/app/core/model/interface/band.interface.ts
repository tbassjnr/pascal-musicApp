export interface SocialHandles {
  instagram?: string;
  twitter?: string;
  spotify?: string;
  facebook?: string;
}

export interface BandMember {
  fullName: string;
  role: string;
  description: string;
  imageUrl: string;
  socials: SocialHandles;
}

