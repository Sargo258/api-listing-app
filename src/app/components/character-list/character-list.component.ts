import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];
  page: number = 1;
  loading: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.loading = true;
    this.apiService.getCharacters(this.page).subscribe(data => {
      this.characters = this.characters.concat(data.results);
      this.loading = false;
    }, error => {
      console.error('Error fetching characters', error);
      this.loading = false;
    });
  }

  onScroll(): void {
    this.page++;
    this.loadCharacters();
  }
}
