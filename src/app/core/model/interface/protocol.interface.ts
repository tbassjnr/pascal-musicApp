export interface ProtocolPersonnel {
  id: number;
  fullName: string;
  role: string;
  bio: string;
  imageUrl: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}