import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BibleAppService, BibleVerse } from '../../core/model/service/bible-app.service';

@Component({
  selector: 'app-bible',
   standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bible.html',
  styleUrl: './bible.css',
})
export class Bible {
   searchQuery: string = '';
  currentVerse?: BibleVerse;
  isLoading: boolean = false;

  // Metadata for all 66 books and their chapter counts to ensure the API call never fails
  private bibleMetadata: { [key: string]: number } = {
    "Genesis": 50, "Exodus": 40, "Leviticus": 27, "Numbers": 36, "Deuteronomy": 34, "Joshua": 24, "Judges": 21, "Ruth": 4, "1 Samuel": 31, "2 Samuel": 24, "1 Kings": 22, 
    "2 Kings": 25, "1 Chronicles": 29, "2 Chronicles": 36, "Ezra": 10, "Nehemiah": 13, "Esther": 10, "Job": 42, "Psalms": 150, "Proverbs": 31, "Ecclesiastes": 12, 
    "Song of Solomon": 8, "Isaiah": 66, "Jeremiah": 52, "Lamentations": 5, "Ezekiel": 48, "Daniel": 12, "Hosea": 14, "Joel": 3, "Amos": 9, "Obadiah": 1, "Jonah": 4, 
    "Micah": 7, "Nahum": 3, "Habakkuk": 3, "Zephaniah": 3, "Haggai": 2, "Zechariah": 14, "Malachi": 4, "Matthew": 28, "Mark": 16, "Luke": 24, "John": 21, "Acts": 28, 
    "Romans": 16, "1 Corinthians": 16, "2 Corinthians": 13, "Galatians": 6, "Ephesians": 6, "Philippians": 4, "Colossians": 4, "1 Thessalonians": 5, "2 Thessalonians": 3,
    "1 Timothy": 6, "2 Timothy": 4, "Titus": 3, "Philemon": 1, "Hebrews": 13, "James": 5, "1 Peter": 5, "2 Peter": 3, "1 John": 5, "2 John": 1, "3 John": 1, "Jude": 1, 
    "Revelation": 22
  };

  constructor(private bibleService: BibleAppService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.generateTrulyRandomVerse();
  }

  generateTrulyRandomVerse(): void {
    this.isLoading = true;

    // 1. Get all book names
    const books = Object.keys(this.bibleMetadata);
    
    // 2. Pick a random book
    const randomBook = books[Math.floor(Math.random() * books.length)];
    
    // 3. Pick a random valid chapter for that book
    const maxChapters = this.bibleMetadata[randomBook];
    const randomChapter = Math.floor(Math.random() * maxChapters) + 1;

    // 4. Fetch the entire chapter (This API returns all verses if you don't specify one)
    const reference = `${randomBook} ${randomChapter}`;
    
    this.bibleService.getVerse(reference).subscribe({
      next: (data: any) => {
        // 5. The API returns an array of verses in 'data.verses'. Pick one at random.
        if (data.verses && data.verses.length > 0) {
          const randomVerseIndex = Math.floor(Math.random() * data.verses.length);
          const selected = data.verses[randomVerseIndex];

          this.currentVerse = {
            reference: `${selected.book_name} ${selected.chapter}:${selected.verse}`,
            text: selected.text,
            translation_name: data.translation_name
          };
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        // Fallback if the specific random call fails
        this.fetchVerse('John 3:16');
      }
    });
  }

  fetchVerse(ref: string): void {
    this.isLoading = true;
    this.bibleService.getVerse(ref).subscribe(data => {
      this.currentVerse = data;
      this.isLoading = false;
      this.cdr.detectChanges();
    });
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.fetchVerse(this.searchQuery);
    }
  }

  copyVerse(): void {
    if (this.currentVerse) {
      navigator.clipboard.writeText(`${this.currentVerse.text} - ${this.currentVerse.reference}`);
      alert('Scripture copied to clipboard!');
    }
  }
}
