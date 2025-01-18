import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '@app/data/political-constitucion/political-constitution.data';

@Pipe({
  name: 'filterArticleContent',
  standalone: true,
})
export class FilterArticleContentPipe implements PipeTransform {
  transform(articles: Article[], searchText: string): Article[] {
    if (!articles || !searchText) {
      return articles;
    }
    return articles.filter((article) =>
      article.content.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}

@Pipe({
  name: 'filterArticleSection',
  standalone: true,
})
export class FilterArticleSectionPipe implements PipeTransform {
  transform(articles: Article[], section: string): Article[] {
    if (!articles || !section) {
      return articles;
    }
    return articles.filter((article) => article.chapter === section);
  }
}

@Pipe({
  name: 'filterArticleChapter',
  standalone: true,
})
export class FilterArticleChapterPipe implements PipeTransform {
  transform(articles: Article[], chapter: number): Article[] {
    if (!articles || !chapter || chapter === 0) {
      return articles;
    }
    return articles.filter((article) => article.chapterNumber === chapter);
  }
}
