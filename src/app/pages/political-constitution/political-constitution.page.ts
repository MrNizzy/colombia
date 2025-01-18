import { Article } from '@app/data/political-constitucion/political-constitution.data';
import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonText,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonIcon,
  IonButton,
} from '@ionic/angular/standalone';
import { PoliticalConstitutionService } from '@app/services/political-constitution.service';
import {
  FilterArticleChapterPipe,
  FilterArticleContentPipe,
  FilterArticleSectionPipe,
} from '@app/pipes/filter-article-content.pipe';
import { addIcons } from 'ionicons';
import { trashBinSharp, eye, closeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-political-constitution',
  templateUrl: './political-constitution.page.html',
  styleUrls: ['./political-constitution.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonMenuButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonText,
    IonSearchbar,
    FilterArticleContentPipe,
    FilterArticleSectionPipe,
    FilterArticleChapterPipe,
    IonSelect,
    IonSelectOption,
    IonIcon,
    IonButton,
  ],
})
export class PoliticalConstitutionPage implements OnInit {
  politicalConstitutionService = inject(PoliticalConstitutionService);
  articles = signal<Article[]>(this.politicalConstitutionService.getArticles());
  chaptersTitles = signal<string[]>(
    this.politicalConstitutionService.getChaptersTitles()
  );
  chaptersNumber = signal<number[]>(
    Array.from(
      { length: this.politicalConstitutionService.getMaxChapterNumber() },
      (_, i) => i + 1
    )
  );
  searchText = signal<string>('');
  selectedSection = signal<string>('');
  selectedChapterNumber = signal<number>(0);

  constructor() {
    addIcons({ closeOutline, trashBinSharp });
  }

  ngOnInit() {}

  resetFilters() {
    this.searchText.set('');
    this.selectedSection.set('');
    this.selectedChapterNumber.set(0);
  }
}
