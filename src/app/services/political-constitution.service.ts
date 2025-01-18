import { Injectable, signal } from '@angular/core';
import {
  Article,
  politicalConstitution,
} from '@data/political-constitucion/political-constitution.data';

export interface ArticlesByChapter {
  chapter: string;
  articles: Article[];
}

@Injectable({
  providedIn: 'root',
})
export class PoliticalConstitutionService {
  politicalConstitution = signal<Article[]>(politicalConstitution);

  getArticles(): Article[] {
    return this.politicalConstitution().sort(
      (a, b) => a.articleNumber - b.articleNumber
    );
  }

  getChaptersTitles(): string[] {
    const chapters = this.getArticles().map((a) => a.chapter);
    return Array.from(new Set(chapters));
  }

  getMaxChapterNumber(): number {
    return Math.max(...this.getArticles().map((a) => a.chapterNumber));
  }
}
