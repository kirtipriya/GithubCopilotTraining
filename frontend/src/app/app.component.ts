import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Post { id: number; title: string; description: string }

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    posts: Post[] = [];
    loading = true;
    error: string | null = null;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get<Post[]>('/api/posts').subscribe({
            next: data => { this.posts = data; this.loading = false },
            error: err => { this.error = err.message || 'Failed to load'; this.loading = false }
        });
    }
}
